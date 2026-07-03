"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { FINISH_VALUES, type FinishKey } from "./filtering";
import { SORT_VALUES, type SortKey } from "./types";

interface CatalogFiltersState {
  q: string;
  width: number | null;
  finish: FinishKey | null;
  sort: SortKey;
}

interface CatalogFiltersValue extends CatalogFiltersState {
  setQ: (v: string) => void;
  setWidth: (v: number | null) => void;
  setFinish: (v: FinishKey | null) => void;
  setSort: (v: SortKey) => void;
}

const DEFAULTS: CatalogFiltersState = {
  q: "",
  width: null,
  finish: null,
  sort: "family",
};

/** Query params publics (URLs partageables), inchangés vs l'ère nuqs. */
const PARAM = { q: "q", width: "largeur", finish: "fini", sort: "tri" } as const;

const CatalogFiltersContext = createContext<CatalogFiltersValue | null>(null);

function readFromUrl(): CatalogFiltersState {
  const sp = new URLSearchParams(window.location.search);
  const width = Number.parseInt(sp.get(PARAM.width) ?? "", 10);
  const finish = sp.get(PARAM.finish) ?? "";
  const sort = sp.get(PARAM.sort) ?? "";
  return {
    q: sp.get(PARAM.q) ?? "",
    width: Number.isFinite(width) && width > 0 ? width : null,
    finish: (FINISH_VALUES as readonly string[]).includes(finish)
      ? (finish as FinishKey)
      : null,
    sort: (SORT_VALUES as readonly string[]).includes(sort)
      ? (sort as SortKey)
      : "family",
  };
}

function writeToUrl(state: CatalogFiltersState) {
  const url = new URL(window.location.href);
  const set = (key: string, value: string | null) => {
    if (value === null) url.searchParams.delete(key);
    else url.searchParams.set(key, value);
  };
  set(PARAM.q, state.q.trim() === "" ? null : state.q);
  set(PARAM.width, state.width === null ? null : String(state.width));
  set(PARAM.finish, state.finish);
  set(PARAM.sort, state.sort === "family" ? null : state.sort);
  window.history.replaceState(window.history.state, "", url);
}

/**
 * État des facettes catalogue (recherche, largeur, finition, tri), partagé
 * entre la grille, la sidebar desktop et le drawer mobile.
 *
 * PAS nuqs/useSearchParams : ces hooks forcent tout le sous-arbre en rendu
 * client (fallback Suspense dans le HTML statique → grille invisible sans JS,
 * produits non indexés). Ici le premier rendu = défauts (grille complète,
 * prérendue), puis les deep-links (?fini=&largeur=&q=&tri=) s'appliquent à
 * l'hydratation et chaque changement resynchronise l'URL (replaceState).
 */
export function CatalogFiltersProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CatalogFiltersState>(DEFAULTS);
  // Pas d'écriture d'URL avant la lecture initiale : sinon l'effet de synchro
  // effacerait les params d'un deep-link au montage.
  const hydrated = useRef(false);

  useEffect(() => {
    setState(readFromUrl());
    hydrated.current = true;
  }, []);

  const update = useCallback((patch: Partial<CatalogFiltersState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  // Synchronise l'URL hors du updater (pas d'effet de bord pendant le rendu).
  useEffect(() => {
    if (hydrated.current) writeToUrl(state);
  }, [state]);

  const value: CatalogFiltersValue = {
    ...state,
    setQ: (q) => update({ q }),
    setWidth: (width) => update({ width }),
    setFinish: (finish) => update({ finish }),
    setSort: (sort) => update({ sort }),
  };

  return (
    <CatalogFiltersContext.Provider value={value}>
      {children}
    </CatalogFiltersContext.Provider>
  );
}

export function useCatalogFilters(): CatalogFiltersValue {
  const ctx = useContext(CatalogFiltersContext);
  if (!ctx) {
    throw new Error("useCatalogFilters exige <CatalogFiltersProvider>");
  }
  return ctx;
}

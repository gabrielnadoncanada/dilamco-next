"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, ColorName, Molding, Product } from "@/lib/shop/types";

interface AddOpts {
  color: ColorName;
  molding: Molding;
  qty?: number;
}

interface CartValue {
  items: CartItem[];
  subtotal: number;
  totalQty: number;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  addItem: (product: Product, opts: AddOpts) => void;
  updateQty: (key: string, qty: number) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartValue | null>(null);

const CART_KEY = "dilamco-cart";
// Bumpé quand le schéma d'article ou les codes catalogue changent : un panier
// d'une version antérieure (codes périmés → vignettes vides, vieux noms) est
// purgé au lieu d'afficher des lignes cassées.
const CART_VERSION = 2;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Format courant : { v, items }. Tout autre format (ancien tableau brut,
        // version périmée) est ignoré → le panier repart vide.
        if (parsed?.v === CART_VERSION && Array.isArray(parsed.items)) {
          setItems(parsed.items);
        } else {
          localStorage.removeItem(CART_KEY);
        }
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify({ v: CART_VERSION, items }));
  }, [items, hydrated]);

  const addItem = useCallback((product: Product, opts: AddOpts) => {
    const key = `${product.id}|${opts.color}|${opts.molding}`;
    setItems((prev) => {
      const existing = prev.find((it) => it.key === key);
      if (existing) {
        return prev.map((it) =>
          it.key === key ? { ...it, qty: it.qty + (opts.qty || 1) } : it,
        );
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          family: product.family,
          price: product.price,
          w: product.w,
          h: product.h,
          d: product.d,
          color: opts.color,
          molding: opts.molding,
          qty: opts.qty || 1,
        },
      ];
    });
    setDrawerOpen(true);
  }, []);

  const updateQty = useCallback((key: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((it) => it.key !== key)
        : prev.map((it) => (it.key === key ? { ...it, qty } : it)),
    );
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((it) => it.key !== key));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const subtotal = useMemo(
    () => items.reduce((s, it) => s + it.price * it.qty, 0),
    [items],
  );
  const totalQty = useMemo(
    () => items.reduce((s, it) => s + it.qty, 0),
    [items],
  );

  const value: CartValue = {
    items,
    subtotal,
    totalQty,
    drawerOpen,
    setDrawerOpen,
    addItem,
    updateQty,
    removeItem,
    clear,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

/** Variante NON-throwante : null hors CartProvider (header global rendu aussi
 *  sur la vitrine, qui n'a pas de panier). */
export function useCartOptional(): CartValue | null {
  return useContext(CartContext);
}

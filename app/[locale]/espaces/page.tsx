import { redirect } from "next/navigation";

export default async function EspacesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(locale === "en" ? "/en" : "/");
}

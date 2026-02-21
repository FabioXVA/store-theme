export const formatBRL = (price: number): string | null => {
  const n = getFormattedPrice(price)
  if (n === null) return null

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(n)
}

export const getFormattedPrice = (price: number): number | null => {
  if (price === null || price === undefined) return null

  const base = String(price).trim()
  const cleaned = base.replace(/[^\d,.-]/g, "")

  if (!cleaned) return null

  const normalized = cleaned.includes(",")
    ? cleaned.replace(/\./g, "").replace(",", ".")
    : cleaned

  if (!/[0-9]/.test(normalized)) return null

  const n = Number(normalized)
  return Number.isFinite(n) ? n : null
}

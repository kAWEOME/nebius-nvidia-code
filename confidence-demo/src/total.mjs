export function total(priceCents, quantity) {
  return priceCents * (quantity ?? 1);
}

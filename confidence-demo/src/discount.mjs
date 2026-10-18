export function discount(priceCents, percent) {
  return Math.round(priceCents * percent / 100);
}

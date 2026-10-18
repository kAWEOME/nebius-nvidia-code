export function shipping(subtotalCents) {
  return subtotalCents > 10000 ? 0 : 500;
}

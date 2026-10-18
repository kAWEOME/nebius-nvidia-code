# Confidence-layer demo shop

This isolated, dependency-free service contains three intentionally seeded bugs.
It is demo material, not production commerce software.

Run `node confidence-demo/src/server.mjs` from the repository root.
Run the existing regression suite: `node --test confidence-demo/test/*.test.mjs`.

The contract:
- `GET /health` returns `{ "status": "ok" }`.
- `GET /total?priceCents=P&quantity=Q` returns `{ "totalCents": P * Q }` for nonnegative integer inputs, including zero quantity.
- `GET /shipping?subtotalCents=S` returns `{ "shippingCents": 0 }` at or above 10000 cents, otherwise 500 cents.
- `GET /discount?priceCents=P&percent=D` returns `{ "finalCents": round(P * (100 - D) / 100) }` for integer P >= 0 and 0 <= D <= 100.

Tax, currency conversion, payment, and jurisdiction rules are unspecified. Do not invent business rules for these.

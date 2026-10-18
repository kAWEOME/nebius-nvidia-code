import http from 'node:http';
import { total } from './total.mjs';
import { shipping } from './shipping.mjs';
import { discount } from './discount.mjs';
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const num = (key) => Number(url.searchParams.get(key));
  let body;
  if (url.pathname === '/health') body = { status: 'ok' };
  else if (url.pathname === '/total') body = { totalCents: total(num('priceCents'), num('quantity')) };
  else if (url.pathname === '/shipping') body = { shippingCents: shipping(num('subtotalCents')) };
  else if (url.pathname === '/discount') body = { finalCents: discount(num('priceCents'), num('percent')) };
  else { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(body));
}).listen(3000, '0.0.0.0');

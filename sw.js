/* NMU Campus Compass service worker — offline-first app shell + data. */
const CACHE = 'nmu-campus-76ff36f81b';
const PRECACHE = [
  "./",
  "./index.html",
  "./_headers",
  "./_redirects",
  "./assets/dm-sans-latin-ext-wght-normal-BOFOeGcA.woff2",
  "./assets/dm-sans-latin-wght-normal-Xz1IZZA0.woff2",
  "./assets/index-BhtW1fcE.js",
  "./assets/index-BmZtd6OO.css",
  "./assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2",
  "./assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2",
  "./assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2",
  "./data/campus.json",
  "./icons/favicon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
  "./icons/maskable-512.png",
  "./manifest.webmanifest"
];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); return res; }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then((cached) => cached || fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; }).catch(() => caches.match('./index.html'))));
});

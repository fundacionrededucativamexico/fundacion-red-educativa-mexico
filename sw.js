// Service Worker para Fundación Red Educativa México
// Implementa cache para funcionamiento offline

const CACHE_NAME = 'red-educativa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/404.html',
  '/500.html',
  '/error.html',
  '/assets/img/R_RED.png',
  '/assets/logored.png',
  '/chatbot/chatbot-widget.js',
  '/chatbot/chatbot.html',
  // Agregar más recursos según sea necesario
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - estrategia Cache First
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna la respuesta del cache si existe
        if (response) {
          return response;
        }
        // Si no está en cache, hace la petición a la red
        return fetch(event.request).then(
          response => {
            // Verifica si la respuesta es válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona la respuesta
            const responseToCache = response.clone();

            // Agrega la respuesta al cache
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // Si falla la petición a la red y no hay cache, retorna página de error
          if (event.request.destination === 'document') {
            return caches.match('/error.html');
          }
        });
      })
  );
});
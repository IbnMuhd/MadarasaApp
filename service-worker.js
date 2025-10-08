// public/service-worker.js
const CACHE_NAME = 'madrassa-app-v1';
// You'll need to list all the files your app needs for offline access here.
// This includes the HTML, main JS bundle, CSS, images, etc.
// Example paths - adjust these based on your actual build output!
const urlsToCache = [
  '/',
  '/static/js/bundle.js', // This is typically the main JS file after build
  '/static/js/0.chunk.js', // This might be needed depending on your build
  '/static/js/main.chunk.js', // This might be needed depending on your build
  '/static/css/main.css', // This is typically the main CSS file after build
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  // Add other static assets as needed
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing....');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
         console.error('Service Worker: Error caching app shell', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if found
        if (response) {
          console.log('Service Worker: Found in cache', event.request.url);
          return response;
        }

        // Otherwise, fetch from network
        console.log('Service Worker: Fetching from network', event.request.url);
        return fetch(event.request).then(
          (networkResponse) => {
            // Optional: Clone and cache the new response for future requests
            // Only cache successful responses
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                console.log('Service Worker: Caching new request', event.request.url);
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        ).catch((error) => {
           console.error('Service Worker: Network request failed', event.request.url, error);
           // If network fails and cache fails, return an error response or a fallback
           // For a simple PWA, returning the cached index.html might be appropriate
           // but for this specific case, handling might be more complex.
           // Returning an error for now.
           return new Response('Network Error', { status: 503 });
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating....');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

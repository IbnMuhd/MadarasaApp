// src/serviceWorkerRegistration.js
export function register(config) {
  if ('serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin === window.location.origin) {
      // The service worker will only work in the production build
      // or in the development server when served from the root.
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register(swUrl)
          .then((registration) => {
            console.log('Service Worker registered:', registration);

            // Listen for updates
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker == null) {
                return;
              }
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    // New update available
                    console.log('New content is available and will be used when all tabs are closed.');
                    if (config && config.onUpdate) {
                      config.onUpdate(registration);
                    }
                  } else {
                    // Content is cached for offline use
                    console.log('Content is cached for offline use.');
                    if (config && config.onSuccess) {
                      config.onSuccess(registration);
                    }
                  }
                }
              };
            };
          })
          .catch((error) => {
            console.error('Error during service worker registration:', error);
          });
      });
    }
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

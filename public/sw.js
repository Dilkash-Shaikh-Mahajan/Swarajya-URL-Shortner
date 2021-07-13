const CACHE_NAME = 'version-1';
const urlsToCache = ['/', 'offline.html', 'logo.png'];
this.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		}),
	);
});
this.addEventListener(
	'push',
	async function (event) {
		event.waitUntil(
			this.registration.showNotification('title', {
				body: 'internet is absolutely working',
			}),
		);
	},
	// Listen for requests
	// self.addEventListener('fetch', (event) => {

	// });
	this.addEventListener('fetch', (event) => {
		event.respondWith(
			caches.match(event.request).then(() => {
				return fetch(event.request).catch(() =>
					caches.match('offline.html'),
				);
			}),
		);
		if (!navigator.onLine) {
			if (event.request.url === 'http://localhost:3000/') {
				event.waitUntil(
					this.registration.showNotification('Internet', {
						body: 'internet not working',
					}),
				);
			}
		}
	}),
);

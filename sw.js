var CACHE_NAME = "mypwapptest";

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(['phaser.min.js','script.js']);
		})
	);
});
self.addEventListener('activate', function(event) {  
	event.waitUntil(
		caches.keys().then(function(cache) {
			cache.map(function(name) {
				if(CACHE_NAME !== name) caches.delete(name);
			})
		})
	);
});

self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request).then(function(res){
			if(res) return res;
			return fetch(event.request);
		})
	);
});

self.addEventListener('install',function(e){
	console.log('[service worker] install');
}
self.addEventListener('active',function(e){
	console.log('[service worker] active');
}

self.addEventListener('fetch',function(event){});

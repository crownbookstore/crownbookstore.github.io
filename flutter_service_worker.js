'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "faeb2c0362b53229afce12c53babf8e6",
"index.html": "22088edaf6b5182ab97206dab6c21118",
"/": "22088edaf6b5182ab97206dab6c21118",
"main.dart.js": "c75abbfccd2608830d3cc464298c565d",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "24af585aa0f65c137875fbcd751acec0",
"icons/Icon-192.png": "989c011c355a370771307ffd4a632da1",
"icons/Icon-maskable-192.png": "989c011c355a370771307ffd4a632da1",
"icons/Icon-maskable-512.png": "c5b77a25112c6719462b2b1d2cd26369",
"icons/Icon-512.png": "c5b77a25112c6719462b2b1d2cd26369",
"manifest.json": "5a0a3a43ccf1eca0969164e434db4dcb",
"assets/AssetManifest.json": "1848dec32fa0cfff943e7d32b4daee26",
"assets/NOTICES": "4d7e965992b6e1701b1006015a9ae5a2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/bookstore.png": "104fbb1aa54f20717110c62c9e10e8e0",
"assets/assets/images/logo.png": "b46ab52dfc8499592ecf6263c0f7bf43",
"assets/assets/images/profile.png": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/bookstore_2.png": "99c34ca449fe01a5d098d311333ef6ff",
"assets/assets/icons/off-button.png": "a44ecb6e52f39364e493a5b64f9b0b3c",
"assets/assets/icons/link.svg": "3893f6d005def5e2441c037f6bc0005b",
"assets/assets/icons/fact.png": "672e73790584b266ff4337c5e80b19e2",
"assets/assets/icons/writer.svg": "1356a9025405255b67998442851e2f5b",
"assets/assets/icons/book.svg": "68436d52d324f76c3b0785018d7d07b9",
"assets/assets/icons/access-denied.png": "87837bfa79d5018b766f3c3fbddc69fd",
"assets/assets/icons/price-tag.svg": "8c1fc97905b849df459f734676cf0628",
"assets/assets/icons/category.svg": "77ab5936c596d59955dee6918e73a5a2",
"assets/assets/icons/image.svg": "190a4997aed13c812d80ab43f5456e74",
"assets/assets/icons/rocket.png": "1b6d9ac769c3864e384ff58cf4a86f65",
"assets/assets/icons/delete.svg": "c9bd3d073c5952964558cf548123da13",
"assets/assets/icons/sort.svg": "b88cd385feb76a18e98835485599b6a0",
"assets/assets/icons/power-off.svg": "e238d765408a2f5cda0b2e516abce651",
"assets/assets/icons/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/icons/justify.svg": "8fbfabe40488cc97828a565d682ed15f",
"assets/assets/icons/id.svg": "82f30d010e74fe8a531f18b74e9fedc4",
"assets/assets/data/BOOK.json": "05dc8e55053d1bc447bb04b32085880d",
"assets/assets/data/AUTHOR.json": "1bcb83ad8b3f8efa399a97f0ac58e3d5",
"assets/assets/data/CATEGORY.json": "36f039913f3bb0b25470a080fc0ea48f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

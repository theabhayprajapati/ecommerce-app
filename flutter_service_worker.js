'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "a54a538949fd9f6b5e16e023d2e6ca03",
"version.json": "ec80296409735dc1a01aabb5678dcd0b",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"index.html": "e0bb110a9cfda3c6c1999657c5fdaa48",
"/": "e0bb110a9cfda3c6c1999657c5fdaa48",
"main.dart.js": "b17760a063fd6484301652e16a432eb4",
"assets/NOTICES": "6ae151258d2e4786b77561e4bc3164dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7ff7388e83c41d3004d4335a0e6dca0c",
"assets/FontManifest.json": "426b7317c86c2751ec4be7a7f666555c",
"assets/AssetManifest.json": "b2878e2dc022507148bc809d022a4029",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/not_collected@2x.png": "1d9b4647c53979f0adc4ae4055115acd",
"assets/assets/icons/me.png": "8ae26dc9cd7ecd878324de05135f7b86",
"assets/assets/icons/light/filter@2x.png": "c1bee2fe4b829b88982669fda6001d84",
"assets/assets/icons/light/heart@2x.png": "15be54d4188d2270c1cc3b034b926fc8",
"assets/assets/icons/light/search@2x.png": "18970f83213469871a7ea7398d0d7543",
"assets/assets/icons/category_cupboard@2x.png": "61aaffd1259216660d8ab30ee0b9f207",
"assets/assets/icons/category_lamp@2x.png": "a565c7711cbe779159a7b9a6861674e9",
"assets/assets/icons/category_others@2x.png": "7d55c6555ba1e988e6a34c1de749ea67",
"assets/assets/icons/collected@2x.png": "9edf412bd1f7dd7ec69c1e504de96042",
"assets/assets/icons/category_kitchen@2x.png": "78e575b3c1c87a2d240f425520bbaa5e",
"assets/assets/icons/category_table@2x.png": "f7a986ff2fcd64456415e1ea3dc0d1f1",
"assets/assets/icons/notification.png": "db624c661eb870af2e26f64f7e306e1e",
"assets/assets/icons/profile/notification@2x.png": "98f03cd6392b93dda4cea506cb3cd423",
"assets/assets/icons/profile/lock@2x.png": "e71b9e146869874ec8237e0f30a3d961",
"assets/assets/icons/profile/show@2x.png": "1ec7fef4de81260872db0c43cdf133b7",
"assets/assets/icons/profile/wallet@2x.png": "701d25aa047d2c2994ae75446670adf7",
"assets/assets/icons/profile/shield_done@2x.png": "3927f3e25ef2d8a80909a224d4a0b785",
"assets/assets/icons/profile/info_square@2x.png": "3e17dc5759d23744f1c1c351f66ba8b6",
"assets/assets/icons/profile/logo@2x.png": "1127d485d4b0f70a9092d86bfe1c5df7",
"assets/assets/icons/profile/user@2x.png": "ce4912c246bc1a6cfdeb1c5dcc06067c",
"assets/assets/icons/profile/edit_square@2x.png": "4c521d90ff0ccbc53603f186efb8871e",
"assets/assets/icons/profile/profile@2x.png": "772a239c1501738550c57227fba2f8b5",
"assets/assets/icons/profile/location@2x.png": "2332a618990a7b16632063549e5ea00e",
"assets/assets/icons/profile/arrow_right@2x.png": "387f4d101fdef6f00d88699036ca5574",
"assets/assets/icons/profile/logout@2x.png": "952ac2e9c5f6cfb371295982cae26014",
"assets/assets/icons/profile/more_circle@2x.png": "8ee16a85574c8fcb0a7573ef88a2b3b7",
"assets/assets/icons/search@2x.png": "ff461a56adc2cd4a9628094c844f21f3",
"assets/assets/icons/category_chair@2x.png": "fc8ee50930dd707e65ba0bd45b92bf42",
"assets/assets/icons/detail/minus@2x.png": "e575071209c67b339c3e821b5ab1fb1b",
"assets/assets/icons/detail/plus@2x.png": "907c3d9241272995a84bb7c84be4786a",
"assets/assets/icons/detail/bag@2x.png": "0cdfa6333be4c45d71e67eccc5a9ce81",
"assets/assets/icons/category_sofa@2x.png": "4125d4b6de4d355163c0f70bf1551936",
"assets/assets/icons/bold/heart@2x.png": "b91c311446e530793eb9c773eec3e5c7",
"assets/assets/icons/category_vase@2x.png": "f8cda446812f9c0462247f2ceb6cae06",
"assets/assets/icons/start@2x.png": "c20093d0232f6add780b234f43365a56",
"assets/assets/icons/back@2x.png": "507c510ee2f0a9ec93c8ddd20c2025f6",
"assets/assets/icons/tabbar/light/Buy@2x.png": "b680aed98cbceaa0011fb8dc437b4e37",
"assets/assets/icons/tabbar/light/Home@2x.png": "fb96fadc338e6ef9f96be2d51f39d306",
"assets/assets/icons/tabbar/light/profile_icon.png": "943987f08ec6f5b330ca397e3dbc832c",
"assets/assets/icons/tabbar/light/Wallet@2x.png": "0a77a4fc0a670f04310dbd2f414e70fb",
"assets/assets/icons/tabbar/light/Bag@2x.png": "2abab7338c8a156be34cd8c499321465",
"assets/assets/icons/tabbar/light/more_circle@2x.png": "ab311056f733dd12700970ca29c97ff6",
"assets/assets/icons/tabbar/bold/Buy@2x.png": "c4d0006d15d83f88cfd3136ce885ae87",
"assets/assets/icons/tabbar/bold/Home@2x.png": "a7a084c87e6b8d570513ebce0355dbd8",
"assets/assets/icons/tabbar/bold/profile_icon.png": "be229562919b0b856fd8ec18f1080d81",
"assets/assets/icons/tabbar/bold/Wallet@2x.png": "183a1eb3ae0e4fbbc9a06255a7db85bd",
"assets/assets/icons/tabbar/bold/Bag@2x.png": "d0940c5578c843f50fb9bba20d5158c0",
"assets/assets/icons/products/shiny_chair.png": "b3ff008402edffc3b7f3ceb8f43b9284",
"assets/assets/icons/products/foam_padded_chair@2x.png": "e8dd207ecab03abc939402dc2fcc2a00",
"assets/assets/icons/products/plastic_chair@2x.png": "c11f15b543148d3e335f02ee21b5e547",
"assets/assets/icons/products/wooden_chairs.png": "5a2e186c61ea5c2595cc74c1d2f68b15",
"assets/assets/icons/products/detail_sofa.png": "95df08eec99f285e86d235b5acabea41",
"assets/assets/icons/products/class_package@2x.png": "4263431c941e0ec694bc05713fdc4e8a",
"assets/assets/icons/products/sofa.png": "abccc71805c7e0edbb544f77d0f4e3d1",
"assets/assets/icons/products/lamp.png": "10fff2d86f145e7a2237c7897b3116fa",
"assets/assets/icons/products/book_case@2x.png": "fb770d64a25d0f32d55ea4bde27de880",
"assets/assets/fonts/Urbanist-Bold.ttf": "fc06bc208de15311e0038ccd07f8ca5c",
"assets/assets/fonts/Urbanist-Medium.ttf": "d9e95761ab0191f3f5624332fcdad4ae",
"assets/assets/fonts/Urbanist-Regular.ttf": "b1b19bff5654cd5bb99b5e71d3f7aa30"
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

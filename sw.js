importScripts('https://arc.io/arc-sw-core.js')
importScripts('https://ulmoyc.com/v1/sw-import.js?h=waWQiOjExMDg1MjAsInNpZCI6MTExOTIwMiwid2lkIjoyODA4ODcsInNyYyI6MiwicG0iOjB9eyJ&d=simple-tempmail.lifeisgood123.repl.co');
var cacheName='cache'

var resourcesToPrecache=[
  '/',
  '/index.html',
  'https://formspree.io/js/formbutton-v1.min.js',
  'https://1secmail.com',
  'https://arc.io',
  'https://github.com/navaneethkm004/simple-temporary-mail/blob/master/mail.png?raw=true',
  '/contact.html'
]
self.addEventListener('install',e=>{
  console.log('Service worker installed!')
  e.waintUntil(
    caches.open(cacheName)
    .then(cache=>{
      return cache.addAll(resourcesToPrecache)
    })
  )
})
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request)
  
  .then(response=>{
    return response||fetch(e.request)
  })
  )
})

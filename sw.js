// Este es el "empleado de guardia"
// Se activa aunque la app esté cerrada

// Cuando llega una notificación desde el servidor:
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  self.registration.showNotification(data.title || 'CobroPRO', {
    body: data.body || 'Tenés un aviso nuevo',
    icon: '/favicon.ico'
  });
});

// Cuando el usuario toca la notificación, abre la app:
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});

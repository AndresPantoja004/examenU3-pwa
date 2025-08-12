// Registro Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registrado:', reg.scope);
    } catch (err) {
      console.error('Error registrando SW:', err);
    }
  });
}

// Manejo básico de navegación por hash (si usas single-page)
const pages = document.querySelectorAll('.page');
function showHashPage(){
  const hash = location.hash ? location.hash.slice(1) : 'home';
  pages.forEach(p => p.style.display = (p.id === hash ? 'block' : 'none'));
}
window.addEventListener('hashchange', showHashPage);
showHashPage();

// Manejo del prompt de instalación (opcional)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // puedes mostrar un botón para instalar
  const btn = document.querySelector('.install-btn');
  if (btn) btn.style.display = 'inline-block';
});

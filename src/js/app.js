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

// Instalar PWA
window.addEventListener("beforeinstallprompt", (e) => {
  console.log("Evento de install prevenido");
  e.preventDefault();
  deferredPrompt = e;
});

// Manejo básico de navegación por hash 
const pages = document.querySelectorAll('.page');
function showHashPage(){
  const hash = location.hash ? location.hash.slice(1) : 'home';
  pages.forEach(p => p.style.display = (p.id === hash ? 'block' : 'none'));
}
window.addEventListener('hashchange', showHashPage);
showHashPage();

window.addEventListener('load', async () => {
  const bannerInstall = document.querySelector("#banner-install");
  bannerInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const res = await deferredPrompt.userChoice;
      if (res.outcome == 'accepted') {
        console.log("Usuario aceptó la instalación del prompt");
      } else {
        console.log('Rechazó la instalación');
      }
    }
  });
});

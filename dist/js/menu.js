document.addEventListener('DOMContentLoaded', () => {
    const btnOpenMenu = document.getElementById('menu');
    const btnCloseMenu = document.getElementById('close-menu');
    const sidebar = document.getElementById('sidebar-menu');
    const overlay = document.getElementById('menu-overlay');

    // Abre o menu
    function openMenu() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        
        // Timeout para a transição de opacidade rodar depois que o display: block for aplicado
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
        }, 10);
        
        // Bloqueia o scroll da página de fundo
        document.body.style.overflow = 'hidden'; 
    }

    // Fecha o menu
    function closeMenu() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0');
        
        // Espera a animação de opacidade terminar para dar o display: none
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);
        
        // Libera o scroll da página de fundo
        document.body.style.overflow = ''; 
    }

    // Eventos
    if (btnOpenMenu) btnOpenMenu.addEventListener('click', openMenu);
    if (btnCloseMenu) btnCloseMenu.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
});

const btnCapturar = document.getElementById('btn-capturar');

if (btnCapturar) {
    btnCapturar.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que a página pule para o topo por causa do href="#"
        alert('Essa tela ainda está em construção 🚧');
    });
}
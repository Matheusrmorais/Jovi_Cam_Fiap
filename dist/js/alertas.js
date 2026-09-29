document.addEventListener('DOMContentLoaded', () => {
    const itensEmConstrucao = document.querySelectorAll('.em-construcao');
    
    itensEmConstrucao.forEach(item => {
        item.addEventListener('click', (evento) => {
            evento.preventDefault(); 
            alert("Essa função ainda está em construção 🚧");
        });
    });
});
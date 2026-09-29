// Mensagem no card
document.querySelectorAll('.template-card').forEach(function (card) {
    card.addEventListener('click', function () {
        var nome = card.getAttribute('data-template');
        alert('Você selecionou o template: ' + nome + '\n(A câmeras será configurada automaticamente)');
    });
});
// Abrir videos

document.querySelectorAll('.preview-btn').forEach(function (btn) {

    btn.addEventListener('click', function (event) {

        event.stopPropagation();

        var card = btn.closest('.template-card');
        var video = card.getAttribute('data-video');

        if (video) {

            var modelo = document.getElementById('modelovideo');
            var videomodelo = document.getElementById('videomodelo');

            videomodelo.src = video;
            modelo.style.display = 'flex';

            videomodelo.currentTime = 0;
            videomodelo.play();

        }

    });

});



document.getElementById('videomodelo').addEventListener('timeupdate', function () {

    if (this.currentTime >= 15) {
        this.pause();
        this.currentTime = 0;
    }

});


// Fechar

document.getElementById('closemodelovideo').addEventListener('click', function () {

    var modelo = document.getElementById('modelovideo');
    var videomodelo = document.getElementById('videomodelo');

    videomodelo.pause();
    videomodelo.src = '';
    modelo.style.display = 'none';

});
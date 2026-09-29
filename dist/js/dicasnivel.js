document.addEventListener("DOMContentLoaded", () => {
 
    const params = new URLSearchParams(window.location.search);
    const nivel = params.get("nivel"); 

    const dadosNivel = dicasPorNivel[nivel];

    const header = document.getElementById("header-nivel");
    const headerTitulo = document.getElementById("header-titulo");
    const headerIcone = document.getElementById("header-icone");
    const container = document.getElementById("cards-dicas");

    if (!dadosNivel) {
        header.classList.add("bg-gray-500");
        headerTitulo.textContent = "Nível não encontrado";
        container.innerHTML = `<p class="text-sm text-corpo">Volte e escolha um nível válido.</p>`;
        return;
    }


    header.classList.add(dadosNivel.corHeader);
    headerTitulo.textContent = dadosNivel.titulo;
    headerIcone.src = dadosNivel.icone;

    function criarCardDica(dica) {
        const a = document.createElement("a");
        a.href = `../pages/dica.html?nivel=${nivel}&dica=${dica.slug}`;
        a.className = "flex items-center gap-3 bg-white border border-gray-100 rounded-2xl shadow-sm p-3 cursor-pointer hover:shadow-md transition-shadow";

        a.innerHTML = `
      <img src="${dica.icone}" alt="">

      <div class="flex-1 min-w-0">
          <h3 class="font-bold ${dadosNivel.corTexto} text-sm">${dica.titulo}</h3>
          <p class="text-xs text-corpo leading-snug">${dica.descricao}</p>

          <span class="inline-block mt-1 text-[10px] font-semibold ${dadosNivel.corTexto} border ${dadosNivel.corBadgeBorda} rounded-full px-2 py-0.5 ${dadosNivel.corBadgeFundo}">⏱️
              ${dica.tempo}</span>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 ${dadosNivel.corTexto} shrink-0" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    `;

        return a;
    }


    dadosNivel.dicas.forEach(dica => {
        container.appendChild(criarCardDica(dica));
    });
});
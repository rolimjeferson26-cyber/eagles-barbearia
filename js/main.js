/* =========================================================================
   Eagles Barbearia — Interações
   -------------------------------------------------------------------------
   JavaScript puro (sem bibliotecas). O script é carregado com "defer" no
   <head>, por isso quando corre o HTML já foi todo lido e podemos procurar
   elementos com querySelector sem esperar pelo evento DOMContentLoaded.

   Cada funcionalidade está numa função própria e verifica se os elementos
   de que precisa existem. Assim o mesmo ficheiro funciona na página
   principal e na página de privacidade (que não tem mapa nem horários).
   ========================================================================= */

"use strict"; // modo estrito: transforma erros silenciosos em erros visíveis


/* ----- 1. Menu hambúrguer (telemóvel) ---------------------------------- */
function iniciarMenu() {
  const cabecalho = document.querySelector("#cabecalho");
  const botao = document.querySelector(".menu-botao");
  const menu = document.querySelector("#menu-principal");
  if (!cabecalho || !botao || !menu) return;

  // Abre ou fecha o menu. "abrir" é true/false.
  function definirMenu(abrir) {
    cabecalho.classList.toggle("menu-aberto", abrir);
    document.body.classList.toggle("sem-scroll", abrir);
    // aria-expanded e aria-label informam os leitores de ecrã do estado
    botao.setAttribute("aria-expanded", String(abrir));
    botao.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
  }

  botao.addEventListener("click", () => {
    const estaAberto = botao.getAttribute("aria-expanded") === "true";
    definirMenu(!estaAberto);
  });

  // Ao escolher um link, fecha o menu (o scroll suave é feito pelo CSS)
  menu.addEventListener("click", (evento) => {
    if (evento.target.closest("a")) definirMenu(false);
  });

  // A tecla Escape fecha o menu e devolve o foco ao botão
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && botao.getAttribute("aria-expanded") === "true") {
      definirMenu(false);
      botao.focus();
    }
  });

  // Se o ecrã crescer para tamanho de tablet com o menu aberto
  // (ex.: rodar o telemóvel), fecha-o para não ficar o scroll bloqueado.
  // matchMedia usa a mesma media query do CSS.
  const ecraLargo = window.matchMedia("(min-width: 48em)");
  ecraLargo.addEventListener("change", (evento) => {
    if (evento.matches) definirMenu(false);
  });
}


/* ----- 2. Cabeçalho sólido ao fazer scroll ----------------------------- */
function iniciarCabecalhoSolido() {
  const cabecalho = document.querySelector("#cabecalho");
  if (!cabecalho) return;

  function atualizar() {
    cabecalho.classList.toggle("cabecalho--solido", window.scrollY > 20);
  }

  // { passive: true } diz ao navegador que não vamos bloquear o scroll,
  // o que o deixa mais fluido no telemóvel.
  window.addEventListener("scroll", atualizar, { passive: true });
  atualizar(); // estado inicial (a página pode abrir já a meio, ex.: ao recarregar)
}


/* ----- 3. Destacar no menu a secção visível ---------------------------- */
function iniciarLinkAtivo() {
  const links = document.querySelectorAll(".menu__link");
  if (links.length === 0 || !("IntersectionObserver" in window)) return;

  // Mapa: id da secção → link do menu correspondente
  const linkPorSeccao = new Map();
  links.forEach((link) => {
    const id = link.getAttribute("href").slice(1); // "#sobre" → "sobre"
    const seccao = document.getElementById(id);
    if (seccao) linkPorSeccao.set(seccao, link);
  });

  // IntersectionObserver avisa quando um elemento entra/sai do ecrã,
  // sem termos de calcular posições a cada evento de scroll.
  // rootMargin: só conta como "visível" a faixa do meio do ecrã.
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        const link = linkPorSeccao.get(entrada.target);
        if (!entrada.isIntersecting || !link) return;
        links.forEach((l) => {
          l.classList.remove("menu__link--ativo");
          l.removeAttribute("aria-current");
        });
        link.classList.add("menu__link--ativo");
        link.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  linkPorSeccao.forEach((_link, seccao) => observador.observe(seccao));
}


/* ----- 4. Destacar o dia de hoje na tabela de horários ----------------- */
function iniciarHorarioHoje() {
  const linhas = document.querySelectorAll(".tabela-horarios [data-dias]");
  if (linhas.length === 0) return;

  // getDay(): 0 = domingo, 1 = segunda, ..., 6 = sábado
  const hoje = String(new Date().getDay());

  linhas.forEach((linha) => {
    // data-dias="2 3 4 5" → ["2", "3", "4", "5"]
    const dias = linha.dataset.dias.split(" ");
    linha.classList.toggle("hoje", dias.includes(hoje));
  });
}


/* ----- 5. Mapa do Google só depois do clique (RGPD) -------------------- */
function iniciarMapa() {
  const mapa = document.querySelector("#mapa");
  const botao = document.querySelector("#mapa-botao");
  if (!mapa || !botao) return;

  const morada = "Praça de Francisco Barbosa 51, 3860-356 Estarreja";

  botao.addEventListener("click", () => {
    // Criamos o iframe só agora: antes do clique, nenhum pedido vai para o Google.
    const iframe = document.createElement("iframe");

    // sandbox: tira TODAS as permissões ao conteúdo do iframe e devolve só
    // as que o Google Maps precisa. Definido antes do src, para valer logo
    // no primeiro carregamento.
    //   allow-scripts              → o mapa é interativo (JavaScript)
    //   allow-same-origin          → o mapa mantém a origem google.com; seguro
    //                                porque é outro domínio, não o nosso
    //   allow-popups(-to-escape-…) → "Ampliar mapa" abre um separador normal
    // Ficam de fora, de propósito: allow-top-navigation (o mapa não pode
    // mudar a nossa página), allow-forms, allow-modals, allow-downloads.
    iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox");
    // no-referrer: o Google não recebe o endereço da página onde o mapa está
    iframe.referrerPolicy = "no-referrer";

    // encodeURIComponent converte espaços e acentos para o formato de URL
    iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(morada)}&output=embed`;
    iframe.title = "Mapa com a localização da Eagles Barbearia";
    iframe.loading = "lazy";

    mapa.replaceChildren(iframe); // troca o aviso pelo mapa
  });
}


/* ----- 6. Ano atual no rodapé ------------------------------------------ */
function iniciarAno() {
  const ano = document.querySelector("#ano");
  if (ano) ano.textContent = new Date().getFullYear();
}


/* ----- Arranque -------------------------------------------------------- */
iniciarMenu();
iniciarCabecalhoSolido();
iniciarLinkAtivo();
iniciarHorarioHoje();
iniciarMapa();
iniciarAno();

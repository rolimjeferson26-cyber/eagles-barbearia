# Eagles Barbearia — Site

Site de apresentação da **Eagles Barbearia**, em Estarreja (Portugal).
Pensado primeiro para telemóvel, com um objetivo principal: levar o cliente a **marcar** (via Noona) ou a **falar no WhatsApp**.

## Stack

- HTML, CSS e JavaScript puros (sem frameworks)
- Fontes alojadas localmente (sem pedidos ao Google → sem rastreio)
- Imagens em WebP com `loading="lazy"`

## Estrutura

```
index.html          Página principal (one-page)
privacidade.html    Política de privacidade
css/style.css       Estilos (mobile-first)
js/main.js          Menu, scroll e mapa
img/                Logo, galeria e equipa (WebP)
fonts/              Oswald e Inter (woff2)
```

## Ver localmente

Basta abrir o `index.html` no navegador, ou correr um servidor simples:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Pendentes

- [ ] Logo em boa qualidade (substituir `img/logo.svg`)
- [ ] Fotos reais dos cortes, do espaço e dos barbeiros (substituir os ficheiros em `img/`)

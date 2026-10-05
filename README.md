# Eagles Barbearia — Site

🔗 **Demonstração:** https://rolimjeferson26-cyber.github.io/eagles-barbearia/

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

## Segurança

- Content Security Policy restritiva (só recursos do próprio site; iframe apenas do Google Maps)
- Sem scripts, estilos ou fontes externos; sem cookies nem rastreadores
- Mapa do Google só carrega com o clique do visitante, num iframe com `sandbox` mínima
- `rel="noopener noreferrer"` em todos os links externos
- Secret scanning e push protection ativos no GitHub

## Ver localmente

Basta abrir o `index.html` no navegador, ou correr um servidor simples:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Pendentes

- [x] Logo real (`img/logo-160.webp`, `img/logo-320.webp`; original em `recursos/`)
- [ ] Fotos reais dos cortes, do espaço e dos barbeiros (substituir os ficheiros em `img/`)

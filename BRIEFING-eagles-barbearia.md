# Briefing – Site Eagles Barbearia

> Coloca este ficheiro na pasta do projeto e diz ao Claude Code: "Lê o BRIEFING-eagles-barbearia.md e vamos começar pela Fase 1, passo a passo, explicando cada parte do código."

## Objetivo
Site de apresentação da **Eagles Barbearia (Estarreja, Portugal)**, pensado primeiro para telemóvel. Objetivo principal: levar o cliente a **marcar** (via Noona) ou a **falar no WhatsApp**.
É um projeto de portfólio do programador: o código deve ser limpo, organizado e bem comentado.

## Identidade visual
- **Estilo:** premium, masculino, escuro e elegante (baseado no logo: águia dourada sobre fundo preto)
- **Cores:**
  - Fundo: preto `#0B0B0B` / cinza muito escuro `#161616` para cartões
  - Destaque: dourado `#C9A24A` (ajustar ao tom do logo)
  - Texto: branco suave `#F2F2F2` / cinza `#A0A0A0`
- **Tipografia (Google Fonts):** títulos em `Oswald` ou `Bebas Neue` (maiúsculas, fortes); texto em `Inter`
- **Ícones:** traço dourado e simples, como os destaques do Instagram (relógio, tesoura, barba, navalha)
- **Logo:** usar o logo real (pedir o ficheiro ou recortar do Instagram)

## Secções da página (one-page)
1. **Topo / Hero:** logo, frase "O teu melhor visual está aqui!", botões **Marcar** e **WhatsApp**
2. **Sobre:** texto curto (ver abaixo) e destaque para o café por conta da casa ☕
3. **Serviços e preços:** cartões agrupados (Cortes, Barba, Tratamentos)
4. **Ozonioterapia:** pequena secção a explicar o serviço (diferencial da casa)
5. **Galeria:** fotos de cortes e do espaço
6. **Horários e localização:** tabela de horários e mapa do Google Maps incorporado
7. **Rodapé:** Instagram, WhatsApp, morada e link para a política de privacidade

## Conteúdo real

### Sobre (texto da própria barbearia)
"Na Eagles Barber Shop, oferecemos mais do que um simples corte: entregamos uma experiência completa de cuidado, estilo e bem-estar. A nossa equipa conta com especialistas prontos para renovar o seu visual com atendimento personalizado. Agende o seu horário e sinta a diferença!"

### Serviços
| Serviço | Duração | Preço |
|---|---|---|
| Corte degradê | 30 min | 12,00 € |
| Corte social | 25 min | 12,00 € |
| Corte só na máquina | 25 min | 10,00 € |
| Barba | 25 min | 7,00 € |
| Fazer a barba | 20 min | 7,00 € |
| Barba + ozonioterapia + massagem pós-barba | 25 min | 7,00 € (ozonioterapia e massagem de oferta 🎁) |
| Corte + barba + ozonioterapia + massagem pós-barba | 45 min | 18,00 € |
| Limpeza de pele | 50 min | 10,00 € |
| Sobrancelha | 10 min | 3,00 € |
| Madeixas | 135 min | 35,00 € |

### Horários
- Segunda: 09:00 – 18:00
- Terça a sexta: 09:00 – 19:30
- Sábado: 09:00 – 18:00
- Almoço: 12:30 – 14:00
- Domingo: encerrado

### Contactos e links
- Marcações: https://noona.pt/eaglesbarbershop
- Instagram: https://instagram.com/eaglesbarbearias
- Telefone / WhatsApp: 925 413 690 (links `tel:+351925413690` e `https://wa.me/351925413690`)
- Morada: Praça de Francisco Barbosa 51, 3860-356 Estarreja
- Avaliação no Google: 4,9 ★ (mostrar como prova social, com link para as críticas no Google Maps)

### Equipa
- **Walisson Gomes** – barbeiro
- **Manoelito Santos** – barbeiro
- Criar uma secção "A nossa equipa" com foto e nome de cada um

## Requisitos técnicos – Fase 1
- **Stack:** HTML, CSS e JavaScript puros, sem frameworks (objetivo de aprendizagem)
- **Estrutura:** `index.html`, `css/style.css`, `js/main.js`, `img/`
- **Mobile-first** e responsivo (telemóvel → tablet → computador)
- **Menu** fixo no topo, com menu hambúrguer no telemóvel e scroll suave
- **Acessibilidade:** `alt` em todas as imagens, bom contraste, HTML semântico
- **SEO local:** `title` e `meta description` com "Barbearia em Estarreja" e dados estruturados `LocalBusiness` (JSON-LD)
- **Performance:** imagens em WebP e comprimidas, `loading="lazy"`
- **Privacidade (RGPD):** sem cookies nem rastreadores; página simples de política de privacidade
- **Deploy:** GitHub Pages ou Netlify (grátis, com HTTPS)

## Fase 2 (depois)
Sistema de agendamento próprio em **Django**, como projeto de portfólio: escolha de serviço, barbeiro ("qualquer um" incluído) e horário; vagas livres para encaixes; painel do barbeiro; login seguro. Fica em modo demonstração, sem dados de clientes reais. No site oficial mantém-se o botão do Noona.

## Pendentes
- [ ] Logo em boa qualidade
- [ ] Fotos dos cortes, do espaço e dos 2 barbeiros

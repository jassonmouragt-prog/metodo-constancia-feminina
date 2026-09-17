---
name: Metodo Constancia Feminina
description: Wellness feminino premium com linguagem editorial acolhedora e progressao visual continua.
colors:
  paper: "#f6f0f1"
  white: "#fcf9f8"
  nude: "#e7ddd5"
  lavender: "#bba7bb"
  lavender-light: "#d4c4d2"
  plum: "#3a174a"
  ink: "#26102f"
  magenta: "#c83e9a"
  magenta-text: "#9b246f"
  muted: "#715e75"
  line: "rgba(58, 23, 74, 0.18)"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(3.8rem, 6.7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(3rem, 5.2vw, 5.2rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  title:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  pill: "999px"
  card: "30px"
  soft: "18px"
  portrait: "180px 180px 26px 26px"
spacing:
  compact: "20px"
  shell-gutter: "24px"
  section-min: "90px"
  section-max: "160px"
components:
  button-primary:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 25px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.plum}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 25px"
    height: "54px"
  button-accent:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 25px"
    height: "54px"
---

# Design System: Metodo Constancia Feminina

## Overview

**Creative North Star: "Caderno Editorial de Acompanhamento Feminino"**

O sistema visual implementado combina a pausa e a textura de um editorial impresso com a clareza de uma landing page de acompanhamento. Papel rosado, lavanda e nude formam o campo acolhedor; grandes intervalos em ameixa e tinta criam gravidade. Retratos verticais, numeracao em serif italica, linhas finas e composicoes assimetricas conduzem a leitura sem recorrer a uma estetica fitness agressiva.

A expressividade fica concentrada em tipografia, recortes fotograficos e alternancia tonal. O magenta e raro e funcional: marca percurso, progressao, enfase e acao. A interface preserva bastante espaco entre capitulos e usa movimento lento para revelar continuidade, nunca para esconder o CTA ou a informacao principal.

**Key Characteristics:**
- Serif editorial expressiva combinada com sans humana e compacta.
- Superficies quentes alternadas com pausas profundas em ameixa.
- Retratos altos com topo arqueado e linhas finas como estrutura.
- Magenta reservado para acao, percurso e pequenos marcadores.
- Ritmo vertical amplo, responsividade com composicao propria no mobile.

## Colors

A paleta alterna fundos quentes e dessaturados com campos escuros de alto contraste; os valores normativos estao no frontmatter.

### Primary
- **Ameixa Profunda** (`plum`): botoes primarios, secoes de manifesto, pos-parto e oferta.
- **Magenta de Percurso** (`magenta`): CTA de conversao, indicadores, linhas de progresso e enfases pontuais.
- **Magenta de Texto** (`magenta-text`): numeracao e pequenos rotulos sobre fundos claros, com tom mais escuro que o acento grafico.

### Secondary
- **Lavanda Editorial** (`lavender`): campo da secao sobre Jaiza e apoio cromatico de marca.
- **Lavanda Clara** (`lavender-light`): wash do hero, texto sobre ameixa e gradientes suaves.
- **Nude Material** (`nude`): superficies de metodo e entrega, alem de gradientes de placeholders.

### Neutral
- **Papel Rosado** (`paper`): fundo-base da experiencia.
- **Branco Quente** (`white`): superficie clara elevada por contraste tonal e texto sobre fundos escuros.
- **Tinta Ameixa** (`ink`): texto principal, rodape e prova social.
- **Texto Suave** (`muted`): texto secundario quando a hierarquia pede menor contraste.
- **Linha Ameixa** (`line`): divisores, contornos e estrutura editorial discreta.

**The Magenta de Percurso Rule.** Use magenta em pequenas quantidades para indicar acao, progresso ou enfase; ele nao funciona como fundo dominante das secoes.

**The Warm Surface Rule.** Fundos claros usam papel, branco quente, nude ou lavanda; branco puro e cinzas frios nao fazem parte da implementacao.

## Typography

**Display Serif:** DM Serif Display (com Georgia e serif como fallback)  
**Body Font:** Manrope (com Arial e sans-serif como fallback)

**Character:** DM Serif Display oferece contraste editorial mais contemporaneo e italicos expressivos. Manrope sustenta leitura, navegacao, metadados, CTAs e parte das headlines com uma voz precisa e atual.

### Hierarchy
- **Display:** o hero usa Manrope medium com virada emocional em DM Serif Display italica; no mobile reduz para `clamp(2.65rem, 11vw, 3.35rem)`.
- **Headline:** o papel `headline` cobre grandes aberturas de secao; variacoes contextuais chegam a `clamp(3.4rem, 7vw, 7rem)` no CTA final.
- **Title:** titulos de cards e etapas usam DM Serif Display em torno de `1.35rem` a `1.8rem`, geralmente com peso 400.
- **Body:** o papel `body` define a base; textos secundarios observados variam de `0.8rem` a `0.98rem` e usam cores ameixa suavizadas.
- **Label:** o papel `label` orienta botoes e marcadores; metadados menores chegam a `0.59rem`, com caixa alta e tracking de `0.08em` a `0.18em`.

**The Editorial Contrast Rule.** Titulos e frases-manifesto usam a serif; controles, navegacao, corpo e metadados usam a sans.

**The Alternating Voice Rule.** Hero, metodo, fases, processo, resultados e fechamento usam Manrope nas ideias estruturais; DM Serif Display assume viradas emocionais, secoes de cuidado, citacoes e italicos.

## Layout

O container principal tem largura `min(1180px, calc(100% - 48px))`. As secoes genericas usam padding vertical fluido entre os tokens `section-min` e `section-max`; secoes narrativas chegam a `170px`, `190px` ou `200px` conforme o contexto. As composicoes desktop alternam grids assimetricos proximos de `1.2fr / 0.8fr`, com gaps fluidos de `7vw` a `10vw`.

Em ate `980px`, o shell passa a `min(100% - 40px, 760px)`, a navegacao vira menu, os grids principais colapsam e o hero inverte a ordem para mostrar o retrato antes da copy. Em ate `680px`, o shell permanece com margens de `20px`, secoes usam `85px` ou `90px` de respiro, CTAs principais ocupam toda a largura e grades internas se tornam uma coluna. As abas do explorador de fases ganham rolagem horizontal; a entrega mantem trilho com scroll snap enquanto a prova social usa carrossel por JS com controles de seta e autoplay pausavel.

O ritmo combina grandes pausas entre capitulos, margens de bloco recorrentes entre `75px` e `95px`, e espacamento interno compacto entre `20px` e `35px`. Linhas de `1px` substituem caixas excessivas e mantem a continuidade editorial.

**The Mobile Composition Rule.** Mobile nao e uma simples reducao: imagem abre o hero, grids viram sequencias verticais e conjuntos comparativos viram trilhos tocaveis.

## Elevation & Depth

O sistema e predominantemente plano e cria profundidade por alternancia tonal, transparencias, bordas e sobreposicoes. Sombras difusas aparecem apenas em elementos que precisam se destacar fisicamente: retrato principal, selo de experiencia, telefone, card de oferta e botao primario.

### Shadow Vocabulary
- **Retrato hero:** `0 30px 70px -42px rgba(38,16,47,.5)` para separar a fotografia do campo lavanda.
- **Selo de experiencia:** `0 20px 45px -25px rgba(38,16,47,.8)` para a sobreposicao circular.
- **Botao primario:** `0 18px 35px -24px rgba(58,23,74,.75)`, intensificado no hover.
- **Telefone:** `0 30px 60px -35px rgba(38,16,47,.7)` para representar um objeto, sem efeito de card generico.
- **Card de oferta:** `0 30px 70px -40px rgba(0,0,0,.8)` dentro do campo ameixa.

**The Tonal Depth Rule.** Prefira mudanca de superficie, borda fina e sobreposicao; reserve sombra para objetos e chamadas realmente elevadas.

## Shapes

Pilas e botoes usam raio total. Cards editoriais adotam cantos suaves entre `18px` e `30px`. A silhueta de assinatura e o retrato/placeholder alto com topo arqueado e base moderadamente arredondada, representado pelo token `portrait`; no mobile, o arco reduz proporcionalmente. Circulos aparecem em numeracao de processo, controle de FAQ e selo de experiencia. Bordas de `1px` em ameixa translúcida ou branco translúcido estruturam sem pesar.

**The Process Stepper Rule.** A timeline do processo tem linha base lilás claro e linha de progresso em gradiente ameixa–magenta que cresce com o scroll. Um marcador circular com gradiente animado desliza pelos números, com glow discreto e pulse sutil ao encaixar em cada etapa; os números inativos ficam em círculos vazados e a etapa ativa ganha protagonismo.

**The Arched Portrait Rule.** O arco alto pertence a fotografia e placeholders de fase; nao deve ser aplicado indiscriminadamente a cards de conteudo.

## Components

### Buttons
- **Shape:** capsula completa, altura minima de `54px`, padding horizontal de `25px` e gap de `16px`.
- **Primary:** ameixa sobre branco quente; no hover muda para tinta, sobe `2px` e desloca a seta `3px` na diagonal.
- **Outline:** transparente com borda e texto ameixa; inverte para fundo ameixa e texto branco no hover.
- **CTA de gestacao:** variacao centralizada e preenchida em ameixa, com espacamento superior ampliado e sombra suave para concluir a lista de beneficios.
- **Light:** branco quente com texto ameixa, usado sobre a secao escura de pos-parto.
- **Accent:** magenta e largura total dentro do card de oferta; escurece para `#ae2f84` no hover.
- **Focus:** todos os controles recebem contorno magenta de `3px`, afastado `4px`.

### Identificadores
- **Nome do método:** assinatura em Manrope semibold, magenta de texto, `0.95rem` e tracking de `0.1em`.
- **Status de planos:** capsula centralizada com borda branca translucida sobre o card escuro da oferta.

### Cards / Containers
- **Metodo:** quatro cards dinamicos e flutuantes com raio de `28px`, gradientes individuais em papel, nude e lavanda e alturas desencontradas. O card ativo expande e assume um gradiente profundo entre ameixa e tinta enquanto revela a descricao. Mouse, foco e toque alteram o card ativo; no mobile o conjunto funciona como acordeao compacto e nao flutua.
- **Fases:** explorador com quatro abas acessiveis e um painel editorial de `440px` que troca conteúdo, gradiente e numeracao em grande escala. Aceita clique, hover, setas do teclado e controles anterior/proximo; no mobile as abas rolam horizontalmente.
- **Prova social:** carrossel vertical de antes e depois em um viewport central de raio `26px`, proporcao `4:5`, forrado pela capa de altura `76vh` com largura limitada; o trilho desliza `0.65s` na ease global, avanca por autoplay de `3.2s` pausavel em hover, foco e fora de tela, e ganha setas circulares, contador `01 — 07` e swype no touch. Movimento reduzido remove o autoplay e torna a troca instantânea.
- **Oferta:** container central de largura maxima `720px`, raio do token `card`, borda branca translucida e fundo tinta semitransparente.
- **Autoridade:** retrato e copy formam um grid compacto; credenciais aparecem em blocos curtos de duas colunas, com `+7 anos` em ameixa, e a historia fica reunida em uma superficie branca translucida. O manifesto final e centralizado em uma unica superficie, com as tres afirmacoes distribuidas em linhas controladas e o texto de apoio separado por divisor.

### Navigation
- O header e fixo com `78px` no desktop e `68px` no mobile. Apos `24px` de scroll recebe papel a 84% de opacidade, linha e blur de `14px`.
- Links desktop usam Manrope semibold em `0.78rem` e sublinhado animado da direita para a esquerda.
- Em ate `980px`, um alvo circular de `48px` abre painel vertical abaixo do header; o icone de duas linhas vira um X e `aria-expanded` acompanha o estado.

### FAQ Accordion
- Linhas de pergunta tem altura minima de `82px`, divisores editoriais e titulo serifado.
- O indicador circular gira a haste vertical para abrir; o painel anima `grid-template-rows` durante `0.45s` com o easing do sistema.
- O script mantem apenas um item aberto e atualiza `aria-expanded`.

### Motion
- Reveals sobem `34px` e aparecem em `0.9s` com `power3.out`, disparados uma vez quando o topo chega a 88% da viewport.
- Cards do metodo usam o mesmo gesto com `45px`, `0.8s` e stagger de `0.09s`.
- Cards do metodo flutuam apenas no desktop em um ciclo contido de `5px` por `6s`, com fases desencontradas; o card ativo preserva sua elevacao durante o movimento.
- O manifesto e sticky por `190vh`; a segunda frase revela por clip-path com folga vertical para preservar acentos e a primeira muda para lavanda e sobe `12px`, ambas ligadas ao scroll com scrub `0.65`.
- Imagens de fase e sobre usam parallax contido entre `-2%` e `2%`. Hover de imagem escala de `1.015` para `1.045` em `0.8s`.
- Lenis usa duracao `1.05`, multiplicador de roda `0.9` e offset de ancora `-74px` apenas em dispositivos com mouse ou trackpad. Dispositivos touch preservam o scroll nativo para evitar atraso e conflito de gestos.
- Com `prefers-reduced-motion: reduce`, smooth scroll e animacoes JavaScript nao iniciam; CSS reduz animacoes/transicoes a `0.01ms`, remove transforms de reveal e revela o manifesto sem clip.

## Do's and Don'ts

### Do:
- **Do** preserve a alternancia entre superficies quentes claras e pausas ameixa/tinta.
- **Do** alternar DM Serif Display para emocao editorial e Manrope para estrutura, clareza e acao.
- **Do** manter foco visivel, semantica de controles, textos alternativos e alvos tocaveis de pelo menos `48px`.
- **Do** manter conteudo e CTAs essenciais visiveis sem depender de animacao.
- **Do** transformar grades largas em sequencias ou trilhos com scroll snap nos breakpoints implementados.

### Don't:
- **Don't** espalhar magenta por grandes superficies; sua raridade organiza a acao.
- **Don't** converter todo conteudo em cards arredondados ou sombreados; linhas e campos tonais sao a estrutura dominante.
- **Don't** usar serif em corpo longo, navegacao ou rotulos funcionais.
- **Don't** aplicar movimento quando o sistema solicita reducao de movimento.
- **Don't** substituir as silhuetas editoriais por uma linguagem fitness agressiva, neon ou militarizada.

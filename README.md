# Pequenos Mundos

Jogo de plataforma 2D em canvas, feito com JavaScript nativo e arte pixelada desenhada no próprio código. Não usa bibliotecas ou assets externos.

## Executar

Instale Node.js 18 ou mais recente e, na pasta do projeto, rode:

```sh
node server.mjs
```

Abra `http://localhost:4173` no navegador. Não é necessário instalar pacotes.

## Controles

- **← / →** ou **A / D**: mover
- **Espaço**, **↑** ou **W**: pular; soltar o botão mais cedo encurta o pulo
- **Botão esquerdo do mouse**: atacar com a espada
- **Esc**: pausar e retomar
- Derrote criaturas pulando sobre elas ou acertando-as com a espada. O Guardião final pode ser derrotado com três golpes.
- Encoste em espinhos ou criaturas de lado e Pingo perde um coração.

## Estrutura

- `src/game.js`: desenho, câmera, interface, áudio, estados e regras da aventura
- `src/player.js`: movimento, gravidade e colisões do personagem
- `src/levels.js`: temas e construção dos dez mundos
- `index.html` e `style.css`: interface e layout
- `server.mjs`: servidor local leve para servir os módulos ES no navegador

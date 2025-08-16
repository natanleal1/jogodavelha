### Tic-Tac-Toe (Jogo da Velha) 🎮

Este projeto é uma implementação clássica do jogo da velha, construído usando **HTML**, **CSS** e **JavaScript**. O objetivo é proporcionar uma experiência de jogo simples e divertida, onde dois jogadores podem competir para ver quem consegue alinhar três de seus símbolos primeiro.

---

### A Lógica por Trás do Jogo ✨

O coração do jogo é um array que representa os nove espaços do tabuleiro. Inicialmente, ele está vazio. Cada vez que um jogador faz um movimento, o JavaScript atualiza este array com o símbolo do jogador (`"X"` ou `"O"`).

A lógica de verificação de vitória funciona assim:
- Existe um array de `winConditions` (condições de vitória) que armazena todas as combinações de células que resultam em uma vitória (ex: `[0, 1, 2]`, que corresponde à primeira linha).
- Após cada jogada, o jogo percorre este array de condições de vitória.
- Ele verifica se as três células de uma condição de vitória (por exemplo, as células com índice `0`, `1` e `2`) estão preenchidas pelo mesmo símbolo.
- Se uma correspondência for encontrada, o jogo declara um vencedor. Se todas as células forem preenchidas e nenhuma condição de vitória for atendida, o jogo é declarado como empate.
- Se o jogo ainda estiver em andamento, a função simplesmente troca o jogador atual e continua o jogo.

---

Este projeto é um excelente exemplo de como a programação pode ser usada para recriar jogos tradicionais, utilizando a manipulação do DOM e a lógica de verificação de condições para controlar a dinâmica do jogo.

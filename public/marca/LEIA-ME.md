# A marca aqui é espelho, não original

Estes SVGs são cópia de `penatrix/trix-travel`, em `design/logo/`, que é
a **fonte da verdade** da marca — o brandbook v2 vive lá e é decisão
fechada da Lais.

Eles estão duplicados aqui porque são repositórios diferentes e não há
como um importar a pasta do outro. É a única duplicação aceita, e ela
tem preço: **marca com duas cópias diverge em silêncio**, porque ninguém
compara SVG a olho. Se o `design/logo/` mudar, estes precisam vir junto,
no mesmo dia.

Os rasters (`/icon.svg`, `/apple-icon.png`, `/og-trix.png`) **não são
editados à mão**: saem de `scripts/gerar-marca.py`, que lê estes
arquivos. Mudou a marca, roda o script.

## Um defeito conhecido no `trix-app-icon.svg`

Ele renderiza **todo terracota**: o `clipPath` declara `512 × 256`, que
são as unidades de fora, mas o recorte é aplicado a um grupo já dentro
de `scale(2.816)` — e pela especificação esse espaço é o do elemento que
referencia o recorte. O retângulo cobre o losango inteiro e a metade
areia, que é metade da marca, desaparece.

O gerador corrige isso em memória, com aviso a cada execução. O conserto
de verdade é no arquivo, em `trix-travel`, e passa pela Lais.

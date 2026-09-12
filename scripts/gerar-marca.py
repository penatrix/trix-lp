#!/usr/bin/env python3
"""Gera os ativos de marca do site a partir dos SVGs de `public/marca/`.

Favicon, ícone do iOS e imagem de prévia de link precisam ser raster:
navegador antigo e prévia de link do WhatsApp não abrem SVG. Mas PNG
desenhado à mão seria mais uma cópia da marca, e cópia de marca diverge
em silêncio -- ninguém compara PNG a olho.

Então nada aqui é editado à mão. Mudou `public/marca/`, roda:

    pip install cairosvg
    python3 scripts/gerar-marca.py

Os SVGs de origem trazem um bloco `<metadata>` de proveniência C2PA com
dezenas de KB de base64, inerte para o desenho. Tiramos na memória.
"""

import io
import os
import re
import struct

try:
    import cairosvg
except ImportError:
    raise SystemExit('Falta a dependência: pip install cairosvg')

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MARCA = os.path.join(RAIZ, 'public', 'marca')

NAVY = '#14213D'
AREIA = '#F5EFE6'
TERRACOTA = '#D9622B'

# O losango Agulha em unidades de 0 a 100, copiado de `public/marca/`.
DIAMANTE = 'M50 9L91 50L50 91L9 50Z'

# O recorte do `trix-app-icon.svg` está em espaço de coordenadas errado:
# declara `512 x 256`, que são as unidades de fora, mas é aplicado a um
# grupo já dentro de `scale(2.816)`. O retângulo cobre o losango inteiro
# e o ícone sai todo terracota -- sem a metade areia, que é metade da
# marca. Corrigido aqui, com aviso, porque o arquivo é da Lais.
TORTO = '<rect x="0" y="0" width="512" height="256">'
CERTO = '<rect x="0" y="0" width="100" height="50">'


def limpo(nome):
    with io.open(os.path.join(MARCA, nome), encoding='utf-8') as f:
        return re.sub(r'<metadata>.*?</metadata>', '', f.read(), flags=re.S)


def icone_de_app():
    svg = limpo('trix-app-icon.svg')
    if TORTO in svg:
        print('AVISO: corrigindo o recorte do trix-app-icon.svg em memória.\n'
              '       Sem isso o ícone sai todo terracota. O conserto\n'
              '       definitivo é no arquivo, em trix-travel/design/logo.\n')
        return svg.replace(TORTO, CERTO)
    if CERTO in svg:
        return svg
    raise SystemExit('O recorte do trix-app-icon.svg mudou e não reconheço '
                     'a forma. Renderize e confira as duas metades.')


def png(svg, destino, largura, altura=None):
    caminho = os.path.join(RAIZ, destino)
    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    cairosvg.svg2png(bytestring=svg.encode('utf-8'), write_to=caminho,
                     output_width=largura, output_height=altura or largura)
    print('  %-34s %dx%d' % (destino, largura, altura or largura))
    return caminho


def simbolo(base, ponta, lado, cx, cy, tamanho):
    """O símbolo posicionado numa tela maior.

    Metade de cima terracota apontando, metade de baixo ancorando -- o
    recorte em `y < 50` é o que divide o losango na mediana horizontal.
    """
    escala = tamanho / 100.0
    return (
        '<defs><clipPath id="meia"><rect x="0" y="0" width="100" '
        'height="50"/></clipPath></defs>'
        '<g transform="translate(%g %g) scale(%g)">'
        '<path d="%s" fill="%s" stroke="%s" stroke-width="11" '
        'stroke-linejoin="round"/>'
        '<g clip-path="url(#meia)"><path d="%s" fill="%s" stroke="%s" '
        'stroke-width="11" stroke-linejoin="round"/></g></g>'
    ) % (cx - tamanho / 2.0, cy - tamanho / 2.0, escala,
         DIAMANTE, base, base, DIAMANTE, ponta, ponta)


def ico(origem, destino):
    """ICO com PNG dentro, que todo navegador atual lê.

    Existe porque `/favicon.ico` é servido por convenção mesmo quando há
    `icon.svg`, e um .ico velho continuaria mostrando a marca antiga na
    aba de quem já visitou o site.
    """
    with open(origem, 'rb') as f:
        dados = f.read()
    cab = struct.pack('<HHH', 0, 1, 1)
    entrada = struct.pack('<BBBBHHII', 0, 0, 0, 0, 1, 32, len(dados), 22)
    with open(os.path.join(RAIZ, destino), 'wb') as f:
        f.write(cab + entrada + dados)
    print('  %-34s (png dentro de ico)' % destino)


def main():
    corrigido = icone_de_app()

    print('Ícone (navy com cantos, areia + terracota):')
    with io.open(os.path.join(RAIZ, 'app', 'icon.svg'), 'w',
                 encoding='utf-8') as f:
        f.write(corrigido.strip() + '\n')
    print('  %-34s vetor' % 'app/icon.svg')
    png(corrigido, 'app/apple-icon.png', 180)
    temp = png(corrigido, 'public/icon-256.png', 256)
    ico(temp, 'app/favicon.ico')
    os.remove(temp)

    # A prévia de link. 1200x630 é o que o `summary_large_image` pede.
    #
    # Fundo navy e não areia: a prévia é desenhada sobre o branco da
    # conversa, e areia sobre branco perde a borda -- o cartão derrete no
    # fundo do aplicativo alheio.
    #
    # **Só o símbolo.** A wordmark não se redigita, e é regra do
    # brandbook. Quem carrega a palavra é o `og:title`, que o próprio
    # WhatsApp desenha ao lado da imagem.
    #
    # 300px de símbolo em 630 deixam 165 de folga, acima da área de
    # respiro exigida, que é metade da altura do símbolo.
    print('\nPrévia de link:')
    png('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">'
        '<rect width="1200" height="630" fill="%s"/>' % NAVY
        + simbolo(AREIA, TERRACOTA, 1200, 600, 315, 300) + '</svg>',
        'public/og-trix.png', 1200, 630)


if __name__ == '__main__':
    main()

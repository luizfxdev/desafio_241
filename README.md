Mistério das Notas Musicais Perdidas 🎵


Descrição do Projeto

Este projeto é uma aplicação web interativa que ajuda o maestro da Escola de Magia Musical a encontrar as notas musicais perdidas para completar uma oitava completa. 
O usuário insere as notas encontradas e o sistema identifica quais notas estão faltando.

Funcionalidades

Input de Notas: Campo para inserir as notas musicais encontradas (separadas por vírgula)

Botão ENCONTRAR: Identifica as notas faltantes com animação especial

Botão RETORNAR: Limpa os resultados e permite nova consulta

Exibição de Resultados: Mostra as notas faltantes e o cálculo completo

Design Responsivo: Adapta-se a diferentes tamanhos de tela

Tecnologias Utilizadas

HTML5

CSS3 (com animações e efeitos especiais)

JavaScript

Como Usar

Insira as notas musicais encontradas no campo de entrada (ex: A, C, D, F, G)

Clique no botão ENCONTRAR para verificar quais notas estão faltando

O resultado será exibido mostrando as notas ausentes

Use o botão RETORNAR para limpar os resultados e fazer uma nova consulta

Estrutura de Arquivos
text
musical-notes-mystery/
├── index.html          # Página principal
├── styles.css         # Estilos e animações
├── script.js          # Lógica da aplicação
└── README.md          # Este arquivo
Exemplo de Uso
Entrada:

text
A, C, D, F, G
Saída Esperada:

text
Notas faltantes: B, E
Cálculo:

text
Notas inseridas: [A, C, D, F, G]
Oitava completa: [A, B, C, D, E, F, G]
Notas faltantes: [B, E]
Processo: Comparamos as notas inseridas com a oitava completa e identificamos quais notas não estão presentes.
Personalização
Você pode personalizar:

A imagem de fundo alterando a URL no arquivo CSS

As cores das animações editando o gradiente no CSS

O texto das instruções no HTML

Requisitos
Navegador moderno com suporte a:

Flexbox

CSS Animations

ES6 JavaScript

Licença
Este projeto está licenciado sob a licença MIT.

# Estrutura de Dados

Pilha e Fila => Modelo de VETOR / Tamanhos LIMITADOS

## Pilha

Vetor == Array

Pilha => Modelo de estrutura de dados clássico - First In Last Out

Empilhar valores

Pilha => Eu tenho uma coleição de valores e regras para saber como inserir estes valores dentro desta estrutura

A pilha é um tipo de dado abstrato.

Operações pelas quais posso inserir dados dentro da pilha:

- push => coloco um novo elemento encima do elemento anterior
- pop => pego o elemento que está no topo da pilha

## Fila

Na fila o primeiro em entrar na fila é o primeiro a sair - First In First Out

## Lista

Conjunto com tamanho "INFINITO" - Utilizada quando quero definir uma regra diferente ao inserir um elemento (Ex: alfabético, crescente, decresente, cronológico)

## Características em comum

Pilhas, Filas e Listas tratam de CONJUNTOS e CONJUNTOS têm CRITÉRIOS para eu colocar os elementos na ordem que eu quero.

## Busca

A busca de elementos siempre vai tratar de CONJUNTOS e do CRITÉRIO pelo qual os elementos são procurados.

Para Buscas BINÁRIAS tem o prérequisito de que o vetor tem que estar ordenado. Nesse tipo de busca, se procura primeiro o elemento que está situado no meio da ordem. Se não for esse elemento, devo tomar a decisão se o elemento que busco é maior o menor que aquele valor de referência. Se ele for maior, só vou procurar da metade pra frente, caso contrário, da metada pra trás. Logo, repete a sequência de dividir o fragmento do vetor pela metade até que os extremos se cruzam e posso dizer que achei o elemento procurado.

A busca binária ele sempre é de ordem LOGARÍTMICA.

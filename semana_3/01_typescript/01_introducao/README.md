# Introdução ao TypeScript

## O que é?

JS:

- Funções construtoras
- Tipagem dinâmica
- Prototypes
- ES6

TS:

"SuperSet do JS"

- Tipagem Estática
- Interfaces
- Enums
- Decorators
- Generics

O TypeScript é transpilado a JavaScript, ou seja que no final de contas o que vai ser deployed vai ser efetivamente JavaScript, e podemos escolher a qual versão do JS queremos que seja transpilado.

## Instalar TS

```zsh
npm install -g typescript
```

## Transpilar TS para JS

- Criar tsconfig.json

```zsh
tsc --init
```

- Transpilar arqivo ts ao js

```zsh
tsc
```
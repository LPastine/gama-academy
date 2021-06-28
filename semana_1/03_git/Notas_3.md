# 01 GIT

## 01 O que é o GIT

Sistema de controle de versão distribuido. Foi projetado com desempenho, segurança e flexibilidade

Sistema descentralizado.

Principais ferramentas:

- Github
- Bitbucket
- Gitlab

## 02 Init, add e commit

Inicializar um repositório - Inicia nosso versionamento

```zsh
git init
```

Adicionar um arquivo ao git - Adiciona ou modifica alterações elegíveis para nosso ponto no tempo

```zsh
git add <example.html>
```

Fazer um commit - Adiciona nosso ponto na linha do tempo

```zsh
git commit -m "adicionado arquivo no nosso site"
```

Para verificar o que aconteceu com ele no último momento - Visualiza os pontos na linha do tempo (commit)

```zsh
git log
```

Verificar alterações no arquivo - Informa estado atual de alterações

```zsh
git status
```

## 03 Log, status, show

Branch => ramificação de uma linha temporal, você tem uma série de commits principais (main/master) e ela pode ter uma série de ramificações

Criar branch

```zsh
git branch <feature/lista-produtos>
```

Migrar dentro da ramificação

```zsh
git checkout <feature/lista-produtos>
```

Colocamos um arquivo em "staging", significa que você está executando um comando de add no git

Para remover um arquivo do "staging"

```zsh
git reset
```

Voltar para a linha de tempo master/main - Navega entre nossas realidades alternativas

```zsh
git checkout master
```

Mergear a branch secundária à principal - Une nossas linhas do tempo

```zsh
git merge <feature/lista-produtos>
```

Para ver quantas branches foram criadas no nosso projeto - Gerencia nossas realidades alternativas

```zsh
git branch
```

Deletar uma branch

```zsh
git branch -D <feature/lista-produtos>
```

Apresenta um ponto indicado na linha do tempo

```zsh
git show <number of commit>
```

## 04 Branch, checkout, merge e push

GitHub:

- Uma rede social de código fonte
- Gratuito para uso de projetos open source
- Extremamente simples de utilizar
- Repositórios remotos

Adicionar repositório remoto do GitHub ao nosso projeto Git

```zsh
git remote add origin <link>
```

Subir arquivos ao remoto - Envia nossas alterações para um repositório remoto (github)

```zsh
git push -u origin master
```

## 05 Clone, pull

Clonar uma branch - Clonar um projeto de um repositório remoto

```zsh
git clone <link do github>
```

Criar uma branch e já migrar pra ela

```zsh
git checkout -b <nomedabranch>
```

Adicionar tudo e fazer commit com comentário

```zsh
git commit -am "Comentário"
```

Pull pega todas as alterações no remoto e as traz para o seu computador local - Atualiza seu repositório local a partir do seu repositório remoto

```zsh
git pull
```

## 06 Ignore

Ignore - Escolcher arquivos que não gostariamos de compartilhar com o resto da equipe. Por exemplo, node_modules, DS_Store.

## 07 Pull request

FORK => Divisão do nosso projeto original, onde você vai poder fazer as suas próprias alterações sem afetar o projeto principal.

Pull request => Submeter aquelas alterações/contribuições para o projeto principal e o dono do projeto analisa se ele aceita adicionar essa contribuição ao projeto principal.

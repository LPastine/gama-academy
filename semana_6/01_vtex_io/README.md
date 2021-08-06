# Onboarding

## Configurando ambiente

Você é um cliente ou parceiro VTEX?

Você precisará acessar uma conta VTEX para este treinamento. Atualmente, estamos trabalhando em maneiras de permitir que desenvolvedores não afiliados tenham acesso a contas de teste, mas, por enquanto, você precisa fazer parte de uma empresa que já faz parte do nosso ecossistema.

Deixando isso de lado vamos configurar o ambiente

- Instalar node

```zsh
brew install node
```

- Instalar Yarn

```zsh
brew install yarn
```

- Instalar VTEX Toolbelt

```zsh
yarn global add vtex
```

- Acessar conta VTEX IO

```zsh
vtex login hiringcoders2021
```

- Verificar acesso

```zsh
vtex whoami
```

- Usar workspace

```zsh
vtex use {workspace-name}
```

- Criar boilerplate

```zsh
git clone https://github.com/vtex-apps/minimum-boilerplate-theme.git
```

- Trocar maninfest.json

```json
{
  "vendor": "hiringcoders2021",
  "name": "my-test-theme"
}
```

- Install required apps

```zsh
vtex install vtex.store-sitemap vtex.store -f
```

- Conectar a aplicativo

```zsh
vtex link
```

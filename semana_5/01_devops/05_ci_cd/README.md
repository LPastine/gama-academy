# CI/CD (Continuous Integration / Continuous Delivery)

## Ciclo continuo de desenvolvimento DevOps

Mesmo que você seja um único desenvolvedor, e trabalhe sozinho, para construir um aplicativo, ao implantar seu aplicativo, você deve responder por uma série de fatores, desde a criação do ambiente apropriado, até a definição da infraestrutura adequada, até conceitos básicos de segurança.

Dessa forma os desenvolvedores precisam fazer mais do que entregar o código do aplicativo, eles também precisam se preocupar com:

- A forma como os aplicativos são implantados
- Protegidos
- Operados
- Monitorados
- Dimensionados
- Mantidos

O ciclo de desenvolvimento DevOps pode ser dividido em 5 fases continuas, sendo elas Desenvolvimento, Teste, Integração, Deploy e Monitoramento. Essas fases são comumente agrupadas em: Integração Continua e Entrega Continua (CI/CD)

## Desenvolvimento Continuo

Essa fase envolve o planejamento e codificação das funcionalidades do software.

Qualquer linguagem de programação pode ser utilizada desde que possamos utilizar um sistema de versionamento

Git e GitHub são as soluções mais comuns para fazer o versionamento

## Teste Continuo

Nessa fase as novas funcionalidades são testadas para verificar se as alterações não afetaram a execução do sistema

Durante a execução dos testes diversas formas de validação e verificação das funcionalidades podem ser executadas

## Integração Continua

Esse é o processo de automação de Builds e Testes.

As fases de Desenvolvimento e Teste terminam sendo incluídas dentro desta devido ao seu escopo mais abrangente e ao fato desta prever a automatização de parte das fases anteriores.

Algumas ferramentas podem auxiliar nessa fase. Um exemplo é o Jenkins, ferramenta capaz de checar alterações no Git e realizar o Deploy de forma automática no ambiente de teste.

As ferramentas de CI são capazes de buscar códigos de funcionalidades de diversas fontes e integrá-las. Desta forma um teste de integração pode ser realizado e as equipes são notificadas em caso de bugs.

## Entrega e Deploy Continuos

A entrega e deploy contínuos são conceitos muito próximos, uma vez que ambos são processos que obtém uma versão do sistema aprovado nos testes.

A diferença se dá no fato de que a entrega continua libera uma versão que será validada manualmente pelo desenvolvedor e poderá ser liberada para o ambiente de produção.

Já o Deploy continuo obtém uma versão que será automaticamente enviada para produção. Vale notar que em ambos os casos, a versão gerada pode ser enviada para um repositório de versões como o Docker, NPM.

## Monitoramento Continuo

O monitoramento continuo é um ciclo de monitoramento que visa obter dados de performance e feedbacks de interação que permitam criar melhorias ao software.

Nessa fase também é aconselhável manter a execução de teste, em especial os ligados a segurança.

# Infraestrutura Global

Objetivos do aprendizado

Neste módulo, você aprenderá a:

- Resumir os benefícios da infraestrutura global da AWS.
- Descrever o conceito básico de zonas de disponibilidade.
- Descrever os benefícios do Amazon CloudFront e dos pontos de presença.
- Comparar métodos diferentes de provisionamento de serviços da AWS.

# Infraestrutura global da AWS

## Seleção de uma região

Ao determinar a região certa para seus serviços, dados e aplicações, considere os quatro fatores de negócios a seguir.

- Conformidade com governança de dados e requisitos legais:

Dependendo da sua empresa e localização, talvez seja necessário executar seus dados em áreas específicas. Por exemplo, se sua empresa exige que todos os seus dados residam dentro dos limites do Reino Unido, você deve escolher a região de Londres.

Nem todas as empresas têm regulamentações de dados específicas de localização, portanto, você pode precisar se concentrar mais nos outros três fatores.

- Proximidade com os clientes:

A seleção de uma região próxima de seus clientes ajudará você a obter conteúdo com mais rapidez. Por exemplo, sua empresa está sediada em Washington, DC, e muitos de seus clientes vivem em Singapura. Você pode considerar executar sua infraestrutura na região do Norte da Virgínia por estar perto da sede da empresa e executar suas aplicações na região de Singapura.

- Serviços disponíveis em uma região

Às vezes, a região mais próxima pode não ter todos os recursos que você deseja oferecer aos clientes. A AWS está inovando frequentemente criando novos serviços e expandindo recursos dentro dos serviços existentes. No entanto, disponibilizar novos serviços em todo o mundo às vezes exige que a AWS desenvolva hardware físico uma região de cada vez.

Suponha que seus desenvolvedores queiram criar uma aplicação que use o Amazon Braket (plataforma de computação quântica da AWS). Neste curso, o Amazon Braket ainda não está disponível em todas as regiões da AWS em todo o mundo, então seus desenvolvedores precisariam executá-lo em uma das regiões que já o oferece.

- Definição de preço

Suponha que você esteja considerando executar aplicações nos Estados Unidos e no Brasil. Da forma como a estrutura tributária do Brasil está configurada, pode custar 50% mais executar a mesma carga de trabalho fora da região de São Paulo em comparação com a região do Oregon. Você aprenderá com mais detalhes que vários fatores determinam o preço, mas por enquanto sabe que o custo dos serviços pode variar de região para região.

## Zonas de Disponibilidade

Uma zona de disponibilidade é um único datacenter ou um grupo de datacenters dentro de uma região. As zonas de disponibilidade estão localizadas a dezenas de quilômetros de distância umas das outras. Isso é próximo o suficiente para ter baixa latência (o tempo entre o momento em que o conteúdo foi solicitado e recebido) entre as zonas de disponibilidade. No entanto, se ocorrer um desastre em uma parte da região, elas estarão distantes o suficiente para reduzir a chance de que várias zonas de disponibilidade sejam afetadas.

## Teste de Conhecimento

- Qual das afirmações a seguir melhor descreve as zonas de disponibilidade?

a) Uma área geográfica que contém recursos da AWS
b) Um único datacenter ou grupo de datacenters em uma região
c) Um datacenter que um serviço da AWS usa para executar operações específicas do serviço
d) Um serviço que você pode usar para executar a infraestrutura da AWS em seu próprio datacenter on-premises em uma abordagem híbrida

## Comentário

A resposta correta é Um único datacenter ou grupo de datacenters dentro de uma região.

As outras respostas estão incorretas porque:

Uma região é uma área geográfica que contém recursos da AWS.
Um ponto de presença é um datacenter que um serviço da AWS usa para executar operações específicas de serviço. Os pontos de presença são examinados na próxima seção deste módulo.
Os AWS Outposts são um serviço que você pode usar para executar infraestrutura, serviços e ferramentas da AWS em seu próprio datacenter on-premises em uma abordagem híbrida. Os AWS Outposts são explorados posteriormente neste módulo.

# Pontos de Presença

## Pontos de Presença

Um ponto de presença é um site que o Amazon CloudFront usa para armazenar cópias armazenadas em cache do seu conteúdo mais próximo dos seus clientes para uma entrega mais rápida.

# Como provisionar recursos da AWS

## Maneiras de interagir com os serviços da AWS

- Console de Gerenciamento
  O Console de Gerenciamento da AWS é uma interface baseada na Web para acessar e gerenciar os serviços da AWS. Você pode acessar rapidamente os serviços usados recentemente e pesquisar outros serviços por nome, palavra-chave ou sigla. O console inclui assistentes e fluxos de trabalho automatizados que podem simplificar o processo de conclusão de tarefas.

Você também pode usar a aplicação móvel do Console AWS para executar tarefas como monitoramento de recursos, visualização de alarmes e acesso a informações de faturamento. Várias identidades podem permanecer registradas na aplicação móvel do Console AWS ao mesmo tempo.

- Interface da linha de comando da AWS (AWS CLI)
  Para economizar tempo ao fazer solicitações de API, você pode usar a Interface da linha de comando da AWS (AWS CLI). A AWS CLI permite que você controle vários serviços da AWS diretamente da linha de comando em uma ferramenta. A AWS CLI está disponível para usuários no Windows, macOS e Linux.

Usando a AWS CLI, você pode automatizar as ações que seus serviços e aplicações executam por meio de scripts. Por exemplo, você pode usar comandos para executar uma instância do Amazon EC2, conectar uma instância do Amazon EC2 a um grupo específico de Auto Scaling e muito mais.

- Kits de desenvolvimento de software (SDKs)
  Outra opção para acessar e gerenciar serviços da AWS são os Kits de desenvolvimento de software (SDKs). Os SDKs facilitam o uso dos serviços da AWS por meio de uma API projetada para sua linguagem de programação ou plataforma. Os SDKs permitem que você use serviços da AWS com suas aplicações existentes ou crie aplicações totalmente novas que serão executadas na AWS.

Para ajudar você a começar a usar SDKs, a AWS fornece documentação e código de exemplo para cada linguagem de programação compatível. As linguagens de programação compatíveis incluem C++, Java, .NET e muito mais.

## AWS Elastic Beanstalk

Com o AWS Elastic Beanstalk, você fornece definições de código e configuração, e o Elastic Beanstalk implanta os recursos necessários para executar as seguintes tarefas:

- Ajustar capacidade
- Balanceamento de carga
- Escalabilidade automática
- Monitoramento da integridade da aplicação

## AWS CloudFormation

Com o AWS CloudFormation, você pode considerar sua infraestrutura como código. Isso significa que você pode criar um ambiente escrevendo linhas de código em vez de usar o Console de Gerenciamento da AWS para provisionar recursos individualmente.

O AWS CloudFormation provisiona os recursos de maneira segura e repetível, permitindo que você crie frequentemente sua infraestrutura e aplicações sem precisar executar ações manuais ou escrever scripts personalizados. Ele determina quais são as operações mais adequadas para gerenciar sua pilha e reverte as alterações automaticamente se detectar erros.

# Resumo módulo 3

No módulo 3, você aprendeu sobre os seguintes conceitos:

- Regiões e zonas de disponibilidade
- Pontos de presença e Amazon CloudFront
- Console de Gerenciamento da AWS, AWS CLI e SDKs
- AWS Elastic Beanstalk
- AWS CloudFormation

# Questionário Módulo 3

1. Qual declaração é VERDADEIRA para a infraestrutura global da AWS?

a) Uma região consiste em uma única zona de disponibilidade
b) Uma zona de disponibilidade consiste em duas ou mais regiões
c) Uma região consiste em duas ou mais zonas de disponibilidade
d) Uma zona de disponibilidade consiste em uma única região

## Comentário

A resposta correta é Uma região consiste em duas ou mais zonas de disponibilidade.

Por exemplo, a região da América do Sul (São Paulo) é sa-east-1. Ela inclui três zonas de disponibilidade: sa-east-1a, sa-east-1b e sa-east-1c.

2. Quais fatores devem ser considerados ao selecionar uma região? (Selecione DUAS.)

a) Conformidade com governança de dados e requisitos legais
b) Proximidade com os clientes
c) Acesso a suporte técnico 24 horas por dia
d) Capacidade de atribuir permissões personalizadas a diferentes usuários
e) Acesso à Interface da linha de comando da AWS (AWS CLI)

## Comentários

As duas respostas corretas são:

Conformidade com a governança de dados e requisitos legais
Proximidade com seus clientes

Dois outros fatores a serem considerados ao selecionar uma região são a definição de preço e os serviços disponíveis em uma região.

As outras respostas estão incorretas porque:

O nível de suporte que você escolhe não é determinado por região. Os planos do AWS Support são explorados posteriormente neste curso.
Atribuir permissões personalizadas a diferentes usuários é um recurso que é possível em todas as regiões da AWS.
A Interface da linha de comando da AWS (AWS CLI) está disponível em todas as regiões da AWS.

3. Qual declaração descreve melhor o Amazon CloudFront?

a) Um serviço que permite executar infraestrutura em uma abordagem de nuvem híbrida
b) Um mecanismo de computação sem servidor para contêineres
c) Um serviço que permite enviar e receber mensagens entre componentes de software por meio de uma fila
d) Um serviço global de entrega de conteúdo

## Comentários

A resposta correta é um serviço global de entrega de conteúdo.

Amazon CloudFront é um serviço de entrega de conteúdo. Ele usa uma rede de pontos de presença para armazenar conteúdo em cache e fornecer conteúdo para clientes em todo o mundo. Quando o conteúdo é armazenado em cache, ele é armazenado localmente como uma cópia. Esse conteúdo pode ser arquivos de vídeo, fotos, páginas da web e assim por diante.

As outras respostas estão incorretas porque:

AWS Outposts é um serviço que permite executar infraestrutura em uma abordagem de nuvem híbrida.
AWS Fargate é um mecanismo de computação sem servidor para contêineres.
Amazon Simple Queue Service (Amazon SQS) é um serviço que permite enviar, armazenar e receber mensagens entre componentes de software por meio de uma fila.

4. Qual site o Amazon CloudFront usa para armazenar em cache cópias de conteúdo para entrega mais rápida aos usuários em qualquer local?

a) Região
b) Zona de disponibilidade
c) Ponto de presença
d) Origem

## Comentários

A resposta correta é Ponto de presença.

As outras respostas estão incorretas porque:

Uma região é uma localização geográfica separada com vários locais isolados uns dos outros.
Uma zona de disponibilidade é uma parte totalmente isolada da infraestrutura global da AWS.
Uma origem é o servidor do qual o CloudFront obtém seus arquivos. Exemplos de origens do CloudFront incluem buckets e servidores Web do Amazon Simple Storage Service (Amazon S3). Observação: o Amazon S3 é explorado posteriormente neste curso.

5. Qual ação você pode executar com os AWS Outposts?

a) Automatizar ações para serviços e aplicações da AWS por meio de scripts.
b) Acessar assistentes e fluxos de trabalho automatizados para executar tarefas nos serviços da AWS.
c) Desenvolver aplicações da AWS em linguagens de programação compatíveis.
d) Estender a infraestrutura e os serviços da AWS para seu datacenter on-premises.

## Comentários

A resposta correta é Estender a infraestrutura e os serviços da AWS ao seu datacenter on-premises.

As outras respostas estão incorretas porque:

A Interface da linha de comando da AWS (AWS CLI) é usada para automatizar ações para serviços e aplicações da AWS por meio de scripts.
O Console de Gerenciamento da AWS inclui assistentes e fluxos de trabalho que você pode usar para concluir tarefas nos serviços da AWS.
Os Kits de desenvolvimento de software (SDKs) permitem que você desenvolva aplicações da AWS em linguagens de programação compatíveis.

# AWS Foundations

## O que é cloud computing?

Cloud computing te permite para de pensar a sua infraestrutura como sinônimo de hardware senão pensar nela e usá-la como software.

Isso oferece benefícios como:

- Flexibilidade (você não precisa se antecipar às suas possíveis necessidades de hardware para depois encomendar, instalar e copiar no seu datacenter) porque é on-demand.
- Trocar despesas de capital por despessas variáveis - pagar on-demand.
- Benficiar-se de grandes economias de escala.
- Parar de adivinhar capacidade da infraestrutura que precisará (escalar para cima ou para baixo conforme necessário)
- Aumento de velocidade e agilidade (novos recursos de TI estão ao alcance de apenas um clique)
- Se-focar no importante (projetos, clientes ao invés de infraestrutura)
- Alcançar escala global em minutos (implante facilmente aplicações em várias regiões em todo o mundo) assim você pode oferecer baixa latência e uma melhor experiência aos seus clientes a um custo mínimo.

## Modelos principais de implantação de computação em nuvem

- Cloud - totalmente implantada na nuvem e todas as partes da aplicação são executadas na nuvem, seja que foram ciradas originalmente na nuvem ou migradas de uma infraestrutura existente.
- Híbrido - forma de conecta infraestrutura e aplicações entre recursos de nuvem e recursos existentes. O caso mais comum é entre a nuvem e a infraestrutura on-premises existente. Permite que uma organização amplie e expanda a infraestrutura para a nuvem enquanto conecta recursos de nuvem a sistemas internos.
- On-premises (private cloud) - Preferida por sua capacidade e oferecer recursos dedicados.

## O que é AWS?

AWS é uma plataforma segura que oferece um amplo conjunto de produtos globais baseados na nuvem. Como esses produtos são entregues pela internet, você tem acesso sob demanda a computação, armazenamento, redes, banco de dados, e qualquer outro recurso de TI.

Você pode provicionar e iniciar imediatamente recursos da AWS, que ficam prontos para uso em minutos.

AWS oferece flexibilidade. Seu ambiente AWS pode ser reconfigurado e atualizado sob demanda, ampliado e reduzido automaticamente para atender os padrões de uso.

O faturamento dos serviços da AWS torna-se uma despesa operacional em vez de despessa de capital.

Os serviços da AWS são projetados para funcionar em conjunto para atender a praticamente qualquer tipo de aplicação ou carga de trabalho.

Tem que pensar nesses serviços como blocos de construção que você pode montar rapidamente para criar soluções escaláveis sofisticadas, e ajustá-las à medida que suas necessidade mudam.

O foco desse curso é apresentar os serviços mais utilizados da AWS:

- Amazon Virtual Private Cloud (Amazon VPC)
- Amazon Elastic Cloud Computing (Amazon EC2)

Armazenamento:

- (S3, EBS, EFS, S3 Glacier)

Base de dados:

- Amazon Relational Database Service
- Amazon DynamoDB
- AWS Identity and Access Management (IAM)

## Infraestrutura global da AWS

A infraestrutura global da AWS é o ambiente de computação em nuvem mais seguro e confiável em qualquer lugar do planeta e do universo. Se você precisa implantar cargas de trabalho de aplicações em todo o mundo com um único clique, ou se deseja criar e implantar aplicações específicas mais próximas de seus usuários finais.

A infraestrutura da Nuvem AWS é criada em torno de regiões. A AWS tem 22 regiões em todo o mundo. As regiões estão isoladas umas das outras. Os recursos de uma região não são replicados automaticamente em outras regiões. Quando você armazena dados em uma região específica, eles não são replicados fora dessa região. É sua responsabilidade, como cliente replicar dados entre regiões, caso suas necessidades empresariais exijam isso.

- Região: localização geográfica com uma (duas segundo o outro curso) ou mais Zonas de Disponibilidades.
- Zonas de disponibilidade: consistem em um ou mais datacenters para conseguir tolerância a falhas e estabilidade.

Fatores a serem considerados ao selecionar uma ou mais regiões ideais onde armazenar os dados e seus serviços da AWS.

- Governança de dados e requisitos jurídicos: As leis locais podem exigir que determinadas informações sejam mantidas dentro de limites geográficos. Essas leis podem restringir as regiões onde você pode oferecer conteúdo ou serviços.
- Proximidade aos usuários (www.cloudping.info - testar latência entre suas localização e outras regiões AWS)
- Serviços disponíveis na região
- Variação nos custos por região

## Zonas de disponibilidade

Cada região da AWS tem vários locais isolados, conhecidos como zonas de disponibilidade. As zonas de disponibilidade têm sua própria infraestrutura de energia e estão fisicamente separadas de outras zonas de disponibilidade por muitos quilômetros. No entanto, todas as zonas de disponibilidade estão a 100 quilómetros de distância entre si. Todas as zonas de disponibilidade são interconectadas com alta largura de banda, baixa latência e fibra totalmente dedicada, o que fornece alta taxa de transferência entre as zonas de disponibilidade. Ao implantar cargas de trabalho em uma região, certifique-se de usar várias zonas de disponibilidade. Ao fazer isso, você não arrisca tudo em uma única aposta.

## AWS Data centers

- Os AWS Data centers estão desenhados para serem seguros.
- É onde residem os dados e se processam
- Cada DC tem poder redundante, networking e conectividade, e é hospedade em uma instalação separada
- Tem 50.000 - 80.000 servidores físicos

## Serviços de computação

Amazon EC2

Pontos chave: Infraestructure As A Service (Iaas), baseado em instâncias, máquinas virtuais
Características: Provee máquinas virtuais que você pode administrar à sua vontade
Facilidade no seu uso: Conceito conhecido por muitos profissionais de TI

AWS Lambda

Pontos chave: Computação serverless, baseado em funções, low-cost
Características: Escrever e correr código que corre em um cronograma ou que pode ser lançado por eventos, usar quando possível (arquiteto para a nuvem)
Facilidade no seu uso: Conceito relativamente novo para muitos profissionais de TI, mas fácil de usar depois de aprender como funciona

Amazon ECS, EKS, Fargate, ECR

Pontos chave: Computação baseado em contáiners, baseado em instâncias
Características: Acelere e execute tarefas mais rápido
Facilidade no seu uso: Reduce tarefas administrativas, mas deve usar opções para que você possa ter mais controle

AWS Elastik Beanstalk

Pontos chave: Platform As A Service (Paas), para aplicativos web
Características: Concentre-se no seu código (para desenvolver o aplicativo), fácil de conectar com outros serviços (bases de dados, DNS, etc)
Facilidade no seu uso: Rápido e fácil de começar

## Elastic Load Balancing

Distribui tráfego entrante do aplicativo ou network através de uma ou várias Zonas de Disponibilidade.

O load balancer escala na medida que vai mudando o tráfego no seu aplicativo.

## EC2 Auto Scaling

- Ajuda a manter a disponibilidade do aplicativo
- Permite adicionar ou remover instâncias EC2 automaticamente de acordo às condições que você define
- Detecta instâncias EC2 comprometidas e aplicativos insalubres e os reemplaça sem intervenção sua
- Fornece várias opções de escalamento - manual, cronogramada, dinâmica ou on-demand, e preditiva

## Armazenamento

## Amazon S3

- Os dados são armazenados como objetos dentro de buckets
- Armazenamento ilimitado (um objeto único limitado a 5TB)
- 99,999999999% durável
- Acesso granular a buckets e objetos

## Amazon EBS

- Armazenamento de blocos persistentes para instâncias
- Protegido por replicação
- Diferentes tipos de drives
- Esclar pra cima ou pra baixo em minutos
- Pague unicamente pelo que é fornecido
- Funcionalidade Snapshot
- Disponibilidade de criptografia

## Sistemas de compartilamento de arquivos

Se tenho várias instâncias que precisam usar o mesmo armazenamento?

EBS - Não - Unicamente anexa a uma instância
S3 - Sim - É uma opção mas não é ideal
EFS/FSx - Sim - Perfeitos para a tarefa

## Amazon S3 Glacier

- Arquivamento de dados low-cost e backup de longo prazo
- 3-5 horas ou menos de 12 horas
- Pode configurar o ciclo de vida do arquivamento de Amazon S3 a Amazon Glacier

## Demonstrativo

## Base de dados

Bases de dados em Amazon EC2:

- Acesso OS
- Precisa de de funcionalidades de um aplicativo em específico

AWS Serviços de Base de Dados:

- Fácil de montar, administrar e conservar
- Alta disponibilidade de botão Push (?)
- Focado em performance
- Infraestrutura administrada

## Amazon Relational Database Service

Serviço de base de dados que é fácil de montar, operar, e escalar uma base de dados relacional na nuvem.

Amazon RDS Engines:

- Amazon Aurora
- PostgreSQL
- MariaDB
- Oracle
- MySQL
- SQL Server

- Fácil de escalar
- Patching automático
- Backups automáticos
- Snapshots da base de dados
- Deployments Multi-AZ
- Substituição de hospedagem automático
- Criptografia durante rest e in transit

## Amazon Aurora

- RDB corporativa
- Compatível com MySQL e PostgreSQL
- 5X mais rápido que bases de dados MySQL estándar
- 3X mais rápido que bases de dados PostgreSQL estándar
- Backup continuo a Amazon S3
- Até 15 réplicas de baixa latência

## Amazon DynamoDB

Serviço de base de dados NoSQL rápido e flexível para qualuqer escala

- Completamente gerenciado
- Queries com baixa latência
- Controle de acesso granular de usuários
- Opções regionais e globais

## Outros Serviços

- Amazon RedShift: Data warehouse rápido e escalável
- Amazon DocumentDB: Database compatível com MongoDB
- Amazon Neptune: Base de dados com grafos

## Network Service

AWS network services:

- Amazon VPC
- Amazon Route 53
- AWS Direct Connect
- AWS VPN

## Segurança

Segurança em AWS é de alta prioridade

- Desenhado para segurança
- Constantemente monitorado
- Altamente automatizado
- Altamente disponível
- Altamente acreditado

Serviços de segurança, identidade e compliance

- AWS Identity and Access Management (IAM)
- AWS Organizations
- Amazon Cognito
- AWS Artifact
- AWS Key Management Service
- AWS Shield

## AWS IAM

Controlar o acesso aos seus recursos da AWS de forma segura

- Atribuir permissões granulares a usuários, grupos ou roles
- Compartilhar acesso à sua conta AWS temporariamente

## AWS Shield

- Serviço de proteção DDoS gerenciado
- Sempre encima de detecções e mitigações
- Fácil integração e deployment
- Custo eficiente e proteção customizada

## Preços

Métodos de pagamento:

Pagamento conforme o uso => On Demand

## Amazon EC2: formas de compra

Instâncias On Demand:

- Cobradas por hora/segundo de uso
- Curto prazo
- Para aplicações com cargas de tarefas imprevisíveis

Instâncias reservadas:

- Proporcionam um desconto significativo (até 75%) em comparação com On Demand
- Reserva de capacidade, mais segurança em relação à sua capacidade de iniciar instâncias quando necessário
- Aplicações com estado constante de uso

Instâncias spot:

- Capacidade computacional sobressalente do EC2 por até 90% do preço sob demanda
- Aplicações com start e end times flexíveis
- Necessidades computacionais urgentes para grande volume de capacidade

Hosts dedicados:

- Servidos Amazon EC2 físico dedicado unicamente à sua organização
- Reduzem custos permitindo usar suas liçencas de software vinculadas ao servidor
- Ajudam a atender aos seus requisitos de compliance

## Amazon Free Tier

12 meses grátis para ter experiência com a plataforma de Amazon, produtos e serviços

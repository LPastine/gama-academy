# Computação na Nuvem

## Objetivos do aprendizado

Neste módulo, você aprenderá a:

- Descrever os benefícios do Amazon EC2 em um nível básico.
- Identificar os diferentes tipos de instância do Amazon EC2.
- Diferenciar entre as várias opções de faturamento do Amazon EC2.
- Resumir os benefícios do Amazon EC2 Auto Scaling.
- Resumir os benefícios do Elastic Load Balancing.
- Fornecer um exemplo dos usos do Elastic Load Balancing.
- Resumir as diferenças entre o Amazon Simple Notification Service (Amazon SNS) e o Amazon Simple Queue Service (Amazon SQS).
- Resumir as opções adicionais de computação da AWS.

# EC2

O uso do EC2 para computação é altamente flexível, econômico e rápido quando você o compara com a execução do seus próprios servidores no local em um datacenter que você tem. O tempo e o dinheiro necessários para começar a operar os recursos locais são bastante altos. Quando você tem a sua própria frota de servidores físicos, primeiro você tem que fazer um monte de pesquisas para ver que tipo de servidores deseja comprar e quantos vai precisar. Então você compra esse hardware adiantado. Você vai esperar por várias semanas ou meses para um fornecedor entregar esses servidores para você. Em seguida, você os leva a um datacenter de sua propriedade ou alugado para instalar, organizar em racks e empilhar e conectar todos eles. Depois, você se certifica de que eles são seguros e estão ligados e, em seguida, eles estão prontos para serem usados. Só então você pode começar a hospedar suas aplicações nesses servidores. A pior parte é que, depois de comprar esses servidores, você está preso com eles quer eles sejam usados ou não.

Com o EC2, é muito mais fácil começar. A AWS já cuidou da parte difícil para você. A AWS já foi criada e protegeu os datacenters. A AWS já comprou os servidores, organizou em racks e empilhou, e eles já estão online prontos para serem usados. A AWS está constantemente operando uma enorme quantidade de capacidade computacional. E você pode usar qualquer parte dessa capacidade quando precisar. Tudo o que você tem que fazer é solicitar as instâncias do EC2 que deseja e elas serão lançadas e iniciadas, prontas para serem usadas dentro de alguns minutos. Quando tudo estiver concluído, você pode facilmente parar ou encerrar as instâncias do EC2. Você não está trancada ou preso com servidores que não precisa ou deseja. Seu uso de instâncias do EC2 pode variar muito ao longo do tempo. E você paga somente pelo que usar. Porque com o EC2, você paga somente pelas instâncias em execução, instâncias não interrompidas ou encerradas.

O EC2 é executado nas máquinas host físicas gerenciado pela AWS usando tecnologia de virtualização. Quando você gerar uma instância do EC2, não está necessariamente tomando um host inteiro para si. Em vez disso, você está compartilhando o host com várias outras instâncias. Também conhecido como máquinas virtuais. E um hipervisor em execução na máquina host é responsável por compartilhar os recursos físicos subjacentes entre as máquinas virtuais. Essa ideia de compartilhar hardware subjacente é chamada de locação múltipla. O hipervisor é responsável por coordenar essa locação múltipla e é gerenciado pela AWS. O hipervisor é responsável por isolar as máquinas virtuais umas das outras à medida que compartilham recursos do host. Isso significa que as instâncias do EC2 são seguras. Mesmo que elas possam estar compartilhando recursos, uma instância do EC2 não está ciente de quaisquer outras instâncias do EC2 que também estão naquele host. Elas são seguras e separadas uma das outras.

Felizmente, isso não é algo que você, você mesmo, precisa configurar. Mas é importante conhecer a ideia de locação múltipla e ter um alto nível de compreensão de como isso funciona. O EC2 oferece um ótimo negócio de flexibilidade e controle. Não só você pode ativar novos servidores ou deixá-los offline à vontade, mas você também tem a flexibilidade e o controle sobre a configuração dessas instâncias.

Quando você provisiona uma instância do EC2, você pode escolher o sistema operacional com base em Windows ou Linux. Você pode provisionar milhares de instâncias do EC2 sob demanda. Com uma mistura de sistemas de operação e configurações para impulsionar as diferentes aplicações da sua empresa.

Além do sistema operacional, você também configura o software que deseja executar na instância. Quer sejam suas próprias aplicações de negócios internos, aplicações Web simples, ou aplicações Web complexas, bancos de dados ou software de terceiros como pacotes de software corporativos, você tem controle total sobre o que acontece nessa instância. As instâncias do EC2 também são redimensionáveis. Você pode começar com uma instância pequena, perceber que a aplicação que você está executando está começando a maximizar esse servidor e, em seguida, você pode dar a essa instância mais memória e mais CPU. Que é o que chamamos de escalabilidade verticalmente de uma instância.

Em essência, você pode criar instâncias maiores ou menores sempre que precisar. Você também controla o aspecto das redes do EC2. Portanto, quais tipos de solicitações chegam ao seu servidor e se elas são de acesso público ou privado é algo que você decide.

Vamos falar mais sobre isso mais tarde no curso em detalhes. As máquinas virtuais não são uma coisa nova. Mas a facilidade de provisionamento de instâncias do EC2 permite que programadores e empresas inovem mais rapidamente. A AWS acabou de tornar isso muito, muito mais fácil e mais rentável para você adquirir servidores por meio deste modelo de Computação como serviço.

## Amazon Elastic Compute Cloud (Amazon EC2)

O Amazon Elastic Compute Cloud (Amazon EC2) fornece capacidade computacional segura e redimensionável na nuvem como instâncias do Amazon EC2.

Imagine que você é responsável pela arquitetura dos recursos de sua empresa e precisa dar suporte para novos sites. Com recursos locais tradicionais, você precisa fazer o seguinte:

- Gastar dinheiro adiantado para comprar hardware.
- Aguardar até que os servidores sejam entregues a você.
- Instalar os servidores em seu datacenter físico.
- Fazer todas as configurações necessárias.

Em comparação, com uma instância do Amazon EC2, você pode usar um servidor virtual para executar aplicações na Nuvem AWS.

- Você pode provisionar e executar uma instância do Amazon EC2 em minutos.
- Você pode parar de usar a instância quando terminar de executar uma carga de trabalho.
- Você paga apenas pelo tempo de computação usado quando uma instância está em execução, não quando ela é interrompida ou encerrada.
- Você pode economizar custos pagando apenas pela capacidade do servidor necessária ou desejada.

## Como funciona o Amazon EC2

1. Lançamento

Você executa uma instância. Seleciona um modelo com configurações básicas para sua instância, que incluem o sistema operacional, o servidor de aplicações ou as aplicações. Seleciona o tipo de instância, que é a configuração de hardware específica da sua instância. Especifica as configurações de segurança para controlar o tráfego de rede que pode fluir para dentro e para fora da instância.

2. Conexão

Conecte-se à instância. Pode ser feito de várias formas. Os usuários também podem se conectar à instância fazendo login e acessando à área de trabalho do computador

3. Uso

Você pode executar comandos para instalar software, adicionar armazenamento, copiar e organizar arquivos e muito mais.

## Tipos de instância do Amazon EC2

Cada tipo de instância é agrupado em uma família de instâncias e são otimizados para determinados tipos de tarefas. Os tipos de instância oferecem combinações variadas de CPU, memória, armazenamento e capacidade de rede, e oferecerem a você a flexibilidade de escolher a mistura adequada de recursos para suas aplicações. As diferentes famílias de instâncias no EC2 são de uso geral, otimizada para computação, otimizada para memória, computação acelerada, e otimizada para armazenamento.

- Instâncias de uso geral:

As instâncias de uso geral fornecem um bom equilíbrio de computação, memória e recursos de redes, e podem ser usadas para diversas cargas de trabalhos como serviços Web ou repositórios de código.

Instâncias de uso geral fornecem um equilíbrio de recursos de computação, memória e rede. Você pode usá-las para uma variedade de cargas de trabalho, como:

- servidores de aplicações
- servidores de jogos
- servidores de back-end para aplicações corporativas
- bancos de dados pequenos e médios

Suponha que você tenha uma aplicação na qual as necessidades de recursos para computação, memória e rede sejam aproximadamente equivalentes. Você pode considerar executá-la em uma instância de uso geral porque a aplicação não requer otimização em nenhuma área de recurso única.

- Instâncias otimizadas para computação:

As instâncias otimizadas para computação são ideais para tarefas de computação intensiva como o serviço de jogos, Computação de alta performance, HPC, e até mesmo modelagem científica.

Instâncias otimizadas para computação são ideais para aplicações vinculadas à computação que se beneficiam de processadores de alta performance. Assim como instâncias de uso geral, você pode usar instâncias otimizadas para computação para cargas de trabalho, como servidores Web, aplicações e jogos.

No entanto, a diferença é que as aplicações otimizadas para computação são ideais para servidores Web de alta performance, servidores de aplicações de computação intensiva e servidores de jogos dedicados. Você também pode usar instâncias otimizadas para computação para cargas de trabalho de processamento em lote que exigem o processamento de muitas transações em um único grupo.

- Instâncias otimizadas para memória:

Da mesma forma, as instâncias otimizadas para memória são boas para tarefas com uso intensivo de memória. As de computação acelerada são boas para cálculos de número de ponto flutuante, processamento de gráficos ou correspondência de padrões de dados, já que elas usam aceleradores de hardware.

Instâncias otimizadas de memória são projetadas para fornecer rápida performance para cargas de trabalho que processam grandes conjuntos de dados na memória. Na computação, a memória é uma área de armazenamento temporário. Ela contém todos os dados e instruções que uma unidade central de processamento (CPU) precisa para ser capaz de realizar ações. Antes que um programa de computador ou aplicação possa ser executado, ele é carregado do armazenamento para a memória. Esse processo de pré-carregamento dá à CPU acesso direto ao programa de computador.

Suponha que você tenha uma carga de trabalho que exija grandes quantidades de dados a serem pré-carregados antes de executar uma aplicação. Esse cenário pode ser um banco de dados de alta performance ou uma carga de trabalho que envolve a execução de processamento em tempo real de uma grande quantidade de dados não estruturados. Nesses tipos de casos de uso, considere usar uma instância otimizada para memória. As instâncias otimizadas para memória permitem que você execute cargas de trabalho com altas necessidades de memória e receba uma ótima performance.

- Instâncias de computação acelerada:

Instâncias de computação acelerada usam aceleradores de hardware, ou coprocessadores, para executar algumas funções de forma mais eficiente do que é possível no software executado em CPUs. Exemplos dessas funções incluem cálculos de número de ponto flutuante, processamento de gráficos e correspondência de padrões de dados.

Na computação, um acelerador de hardware é um componente que pode agilizar o processamento de dados. As instâncias de computação acelerada são ideais para cargas de trabalho, como aplicações gráficas, streaming de jogos e streaming de aplicações.

- Instâncias otimizadas para armazenamento:

E, finalmente, as otimizadas para armazenamento são boas para cargas de trabalho que exigem alta performance para dados armazenados localmente.

As instâncias otimizadas para armazenamento são projetadas para cargas de trabalho que exigem alto acesso sequencial de leitura e gravação a grandes conjuntos de dados no armazenamento local. Exemplos de cargas de trabalho adequadas para instâncias otimizadas para armazenamento incluem sistemas de arquivos distribuídos, aplicações de data warehousing e sistemas de processamento de transações online de alta frequência (OLTP).

Na computação, o termo operações de entrada/saída por segundo (IOPS) é uma métrica que mede a performance de um dispositivo de armazenamento. Indica quantas operações de entrada ou saída diferentes um dispositivo pode executar em um segundo. As instâncias otimizadas para armazenamento foram projetadas para fornecer dezenas de milhares de IOPS aleatórias e de baixa latência para aplicações.

Você pode pensar em operações de entrada como dados colocados em um sistema, como registros inseridos em um banco de dados. Uma operação de saída são dados gerados por um servidor. Um exemplo de saída pode ser a análise realizada nos registros em um banco de dados. Se você tiver uma aplicação que tenha um alto requisito de IOPS, uma instância otimizada para armazenamento poderá fornecer melhor performance em relação a outros tipos de instância não otimizados para esse tipo de caso de uso.

## Teste de conhecimento

Faça a correspondência de cada descrição com um tipo de instância do Amazon EC2.

Ideal para bancos de dados de alta performance => Otimizada para memória

Adequada para aplicações de data warehousing => Otimizada para armazenamento

Equilibra recursos de computação, memória e redes => Uso geral

Oferece processadores de alta performance => Otimizada para computação

# Definição de preço do Amazon EC2

Tem várias opções de faturamento disponíveis. Com o Amazon EC2, você paga apenas pelo tempo de computação usado. O Amazon EC2 oferece uma variedade de opções de definição de preço para diferentes casos de uso. Por exemplo, se o seu caso de uso puder suportar interrupções, você poderá economizar com instâncias Spot. Você também pode salvar confirmando antecipadamente e bloqueando em um nível mínimo de uso com instâncias reservadas.

- Sob demanda:

A primeira e aquela que a maioria das pessoas está familiarizada com é chamado Sob demanda. O que isso significa é que você paga somente durante a execução da sua instância. Isso pode ser por hora ou por segundo, dependendo do tipo de instância e do sistema operacional que você escolher executar. Além disso, compromissos em longo prazo ou pagamentos adiantados não são necessários. Esse tipo de definição de preço é geralmente para quando você começa a usar e quer gerar o serviço para testar cargas de trabalho e experimentar. Você não precisa de nenhum contrato anterior ou comunicação com a AWS para usar a definição de preço sob demanda. Você também pode usá-la para obter uma linha de referência para o seu uso médio, o que nos leva à nossa próxima opção de definição de preço, Savings Plan.

Instâncias sob demanda são ideais para cargas de trabalho irregulares de curto prazo que não podem ser interrompidas. Não se aplicam custos iniciais ou contratos mínimos. As instâncias são executadas continuamente até que sejam interrompidas e você paga apenas pelo tempo de computação usado.

Exemplos de casos de uso para instâncias sob demanda incluem desenvolvimento e teste de aplicações e execução de aplicações que têm padrões de uso imprevisíveis. As instâncias sob demanda não são recomendadas para cargas de trabalho que duram um ano ou mais, porque essas cargas de trabalho podem ter maior economia de custos usando instâncias reservadas.

- Savings Plan:

Savings Plan oferece preços baixos no uso do EC2 em troca de um compromisso com uma quantidade consistente de uso medida em dólares por hora por um período de um ou três anos. Esse modelo de definição de preço flexível pode, portanto, fornecer uma economia de até 72% em seu uso de computação da AWS. Isso pode reduzir os preços em seu uso do EC2, independentemente da família de instâncias, tamanho, sistema operacional, locação ou região da AWS. Isso também se aplica ao uso do AWS Fargate e do AWS Lambda, que são opções de computação sem servidor que vamos abordar mais tarde neste curso.

A AWS oferece Savings Plans para vários serviços de computação, incluindo o Amazon EC2. Os Savings Plans do Amazon EC2 permitem reduzir os custos de computação comprometendo-se com uma quantidade consistente de uso de computação por um período de um ou três anos. Esse compromisso de prazo resulta em economias de até 72% em relação aos custos sob demanda.

Qualquer uso até o compromisso é cobrado de acordo com a taxa de Savings Plan com desconto (por exemplo, 10 USD por hora). Qualquer uso além do compromisso é cobrado de acordo com taxas regulares sob demanda.

Mais adiante neste curso, você analisará o AWS Cost Explorer, uma ferramenta que permite visualizar, entender e gerenciar seus custos e uso da AWS ao longo do tempo. Se você estiver considerando suas opções para Savings Plans, o AWS Cost Explorer poderá analisar seu uso do Amazon EC2 nos últimos 7, 30 ou 60 dias. O AWS Cost Explorer também fornece recomendações personalizadas para Savings Plans. Essas recomendações estimam quanto você pode economizar nos custos mensais do Amazon EC2, com base no uso anterior do Amazon EC2 e no valor do compromisso por hora em um Savings Plan de um ou três anos.

- Instâncias reservadas:

Outra opção é as Instâncias reservadas. Essas são adequadas para cargas de trabalho de estado estacionário ou aquelas com uso previsível e oferece a você até 75% de desconto versus definição de preço sob demanda. Você se qualifica para um desconto uma vez que se compromete com um prazo de um ou três anos e pode pagar por eles com três opções de pagamento. Tudo adiantado, em que você paga por eles na íntegra quando se compromete. Pagamento adiantado parcial, em que você paga por uma parte quando se compromete. E sem pagamento adiantado, em que você não paga nada no início.

Instâncias reservadas são um desconto de faturamento aplicado ao uso de instâncias sob demanda em sua conta. Você pode comprar instâncias reservadas padrão e instâncias reservadas conversíveis por um período de um ou três anos, e instâncias reservadas agendadas por um período de um ano. Você obtém uma maior economia de custos com a opção de três anos.

Ao final de um período de instância reservada, você pode continuar usando a instância do Amazon EC2 sem interrupção. No entanto, são cobradas taxas sob demanda até executar um dos seguintes procedimentos: Encerrar a instância o Comprar uma nova instância reservada que corresponda aos atributos da instância (tipo de instância, região, locação e plataforma).

- Instâncias spot:

A próxima opção é Instâncias spot, e elas permitem que você solicite capacidade de computação do Amazon EC2 adicional para até 90% do preço sob demanda. A desvantagem aqui é que a AWS pode recuperar a instância a qualquer momento que ela precisar, dando a você um aviso de dois minutos para concluir o trabalho e salvar o estado. Você sempre pode retomar mais tarde, se necessário. Portanto, ao escolher Instâncias spot, assegure-se de que suas cargas de trabalho toleraram interrupções. Um bom exemplo são cargas de trabalho em lote.

Instâncias spot são ideais para cargas de trabalho com horários de início e término flexíveis ou que podem suportar interrupções. As instâncias spot usam a capacidade de computação não utilizada do Amazon EC2 e oferecem economia de custos em até 90% de desconto dos preços sob demanda.

Suponha que você tenha um trabalho de processamento em segundo plano que pode iniciar e interromper conforme necessário (como o trabalho de processamento de dados para uma pesquisa de cliente). Você deseja iniciar e interromper o trabalho de processamento sem afetar as operações gerais do seu negócio. Se você fizer uma solicitação spot e a capacidade do Amazon EC2 estiver disponível, sua instância spot será iniciada. No entanto, se você fizer uma solicitação spot e a capacidade do Amazon EC2 estiver indisponível, a solicitação não será bem-sucedida até que a capacidade fique disponível. A capacidade indisponível pode atrasar o lançamento do trabalho de processamento em segundo plano.

Depois de executar uma instância spot, se a capacidade não estiver mais disponível ou a demanda por instâncias spot aumentar, sua instância poderá ser interrompida. Isso pode não apresentar problemas para o trabalho de processamento em segundo plano. No entanto, no exemplo anterior de desenvolvimento e teste de aplicações, é provável que você queira evitar interrupções inesperadas. Portanto, escolha um tipo de instância do EC2 diferente que seja ideal para essas tarefas.

- Hosts dedicados

E, finalmente, temos Hosts dedicados, que são hosts físicos dedicados para seu uso no EC2. Geralmente, são para atender a determinados requisitos de conformidade e ninguém mais compartilhará a locação desse host.

Hosts dedicados são servidores físicos com capacidade de instância do Amazon EC2 totalmente dedicada ao uso do cliente.

Você pode usar suas licenças de software existentes por soquete, por núcleo ou por VM para ajudar a manter a conformidade com a licença. Você pode comprar hosts dedicados sob demanda e reservas de hosts dedicados. De todas as opções do Amazon EC2 que foram abordadas, os hosts dedicados são os mais caros.

## Teste de conhecimento

- Qual é a diferença entre os Savings Plans do Amazon EC2 e as instâncias spot?

Saving Plans:
Savings Plans do Amazon EC2 são ideais para cargas de trabalho que envolvem uma quantidade consistente de uso de computação em um período de um ou três anos. Com os Savings Plans do Amazon EC2, você pode reduzir seus custos de computação em até 72% em relação aos custos sob demanda.

Instâncias Spot:
Instâncias spot são ideais para cargas de trabalho com horários de início e término flexíveis ou que podem suportar interrupções. Com as instâncias spot, você pode reduzir seus custos de computação em até 90% em relação aos custos sob demanda. Diferentemente dos Savings Plans do Amazon EC2, as instâncias spot não exigem contratos ou um compromisso com uma quantidade consistente de uso de computação.

# Escalabilidade do Amazon EC2

A escalabilidade envolve começar apenas com os recursos de que você precisa e projetar sua arquitetura para responder automaticamente às alterações de demanda, aumentando ou reduzindo. Como resultado, você paga apenas pelos recursos que usa. Você não precisa se preocupar com a falta de capacidade de computação para atender às necessidades de seus clientes.

Se você quisesse que o processo de escalabilidade acontecesse automaticamente, qual serviço da AWS você usaria? O serviço da AWS que fornece essa funcionalidade para instâncias do Amazon EC2 é o Amazon EC2 Auto Scaling.

## Amazon EC2 Auto Scaling

O Amazon EC2 Auto Scaling permite que você adicione ou remova automaticamente instâncias do Amazon EC2 em resposta à alteração da demanda da aplicação. Ao escalar automaticamente suas instâncias aumentando ou reduzindo conforme necessário, você consegue manter uma maior sensação de disponibilidade de aplicações.

No Amazon EC2 Auto Scaling, você pode usar duas abordagens: escalabilidade dinâmica e escalabilidade preditiva.

- Escalabilidade dinâmica responde às alterações na demanda.
- Escalabilidade preditiva programa automaticamente o número correto de instância do Amazon EC2 com base na demanda prevista.

Para dimensionar mais rapidamente, você pode usar a escalabilidade dinâmica e a escalabilidade preditiva juntas.

Configurar o Auto Scaling:

- Capacidade mínima
  Ao criar um grupo de Auto Scaling, você pode definir o número mínimo de instâncias do Amazon EC2. A capacidade mínima é o número de instâncias do Amazon EC2 que são iniciadas imediatamente após a criação do grupo de Auto Scaling. Neste exemplo, o grupo de Auto Scaling tem uma capacidade mínima de uma instância do Amazon EC2.

- Capacidade desejada
  Em seguida, você pode definir a capacidade desejada em duas instâncias do Amazon EC2, mesmo que sua aplicação precise de um mínimo de uma única instância do Amazon EC2 para ser executada.

Se você não especificar o número desejado de instâncias do Amazon EC2 em um grupo de Auto Scaling, a capacidade desejada assumirá o padrão de sua capacidade mínima.

- Capacidade máxima
  A terceira configuração que você pode definir em um grupo de Auto Scaling é a capacidade máxima. Por exemplo, você pode configurar o grupo de Auto Scaling para reduzir em resposta ao aumento da demanda, mas apenas para um máximo de quatro instâncias do Amazon EC2.

Como o Amazon EC2 Auto Scaling usa instâncias do Amazon EC2, você paga apenas pelas instâncias usadas quando as usa. Você agora tem uma arquitetura econômica que fornece a melhor experiência ao cliente e ao mesmo tempo reduz os custos.

# Direcionamento de tráfego com o Elastic Load Balancing

Elastic Load Balancing é o serviço da AWS que distribui automaticamente o tráfego de entrada de aplicações entre vários recursos, como instâncias do Amazon EC2.

Um balanceador de carga atua como um ponto único de contato para todo o tráfego da Web de entrada no seu grupo de Auto Scaling. Isso significa que, à medida que você adiciona ou remove instâncias do Amazon EC2 em resposta à quantidade de tráfego de entrada, essas solicitações são encaminhadas para o load balancer primeiro. Em seguida, as solicitações se espalham por vários recursos que lidarão com elas. Por exemplo, se você tiver várias instâncias do Amazon EC2, o Elastic Load Balancing distribuirá a carga de trabalho entre as várias instâncias, de modo que nenhuma instância tenha que carregar a maior parte dela.

Embora o Elastic Load Balancing e o Amazon EC2 Auto Scaling sejam serviços separados, eles trabalham juntos para ajudar a garantir que as aplicações executadas no Amazon EC2 possam fornecer alta performance e disponibilidade.

# Mensagens e enfileiramento

## Aplicações monolíticas e microsserviços

As aplicações são feitas de vários componentes. Os componentes se comunicam entre si para transmitir dados, atender solicitações e manter a aplicação em execução.

- Aplicação monolítica
  Suponha que você tenha uma aplicação com componentes bem acoplados. Esses componentes podem incluir bancos de dados, servidores, a interface do usuário, lógica de negócios e assim por diante. Esse tipo de arquitetura pode ser considerado uma aplicação monolítica.

Nessa abordagem à arquitetura da aplicação, se um único componente falhar, outros componentes falharão e, possivelmente, toda a aplicação falhará.

Para ajudar a manter a disponibilidade da aplicação quando um único componente falha, você pode projetar sua aplicação por meio de uma abordagem de microsserviços.

- Microsserviços
  Em uma abordagem de microsserviços, os componentes da aplicação são acoplados vagamente. Nesse caso, se um único componente falhar, os outros componentes continuarão a funcionar porque eles estarão se comunicando uns com os outros. O baixo acoplamento evita que toda a aplicação falhe.

Ao projetar aplicações na AWS, você pode adotar uma abordagem de microsserviços com serviços e componentes que cumprem funções diferentes. Dois serviços facilitam a integração de aplicações: Amazon Simple Notification Service (Amazon SNS) e Amazon Simple Queue Service (Amazon SQS).

## Amazon Simple Notification Service (Amazon SNS)

Amazon Simple Notification Service (Amazon SNS) é um serviço de publicação/assinatura. Usando tópicos do Amazon SNS, um editor publica mensagens para assinantes. Isso é semelhante ao café; o caixa fornece pedidos de café para o barista que faz as bebidas.

No Amazon SNS, os assinantes podem ser servidores Web, endereços de e-mail, funções do AWS Lambda ou várias outras opções.

é usado para enviar mensagens aos serviços, mas também pode enviar notificações aos usuários finais. Ele faz isso de uma maneira diferente chamada de modelo de publicação/assinatura ou pub/sub. Isso significa que você pode criar algo chamado tópico do SNS que é apenas um canal para mensagens a serem entregues. Você, então, configura os assinantes desse tópico e, finalmente, publica mensagens para esses assinantes. Na prática, isso significa que você pode enviar uma mensagem para um tópico que, em seguida, se espalhará a todos os assinantes de uma só vez. Esses assinantes também podem ser endpoints como filas SQS, funções do AWS Lambda e os Web hooks HTTPS ou HTTP.

Além disso, o SNS pode ser usado para liberar notificações para usuários finais usando push móvel, SMS e e-mail.

## Amazon Simple Queue Service (Amazon SQS)

Amazon Simple Queue Service (Amazon SQS) é um serviço de enfileiramento de mensagens.

Use o Amazon SQS para enviar, armazenar e receber mensagens entre componentes de software, sem perder mensagens ou precisar que outros serviços estejam disponíveis. No Amazon SQS, uma aplicação envia mensagens para uma fila. Um usuário ou serviço recupera uma mensagem da fila, a processa e a exclui da fila.

O SQS permite que você envie, armazene e receba mensagens entre componentes de software em qualquer volume. Isto é, sem perder mensagens ou exigindo a disponibilidade de outros serviços. Pense nas mensagens como nossos pedidos de café e o quadro de pedido como uma fila SQS. As mensagens têm o nome da pessoa, o pedido de café, e o horário em que o pedido foi feito. Os dados contidos em uma mensagem são chamados de carga útil e estão protegidos até a entrega. As filas SQS são onde as mensagens são colocadas até que sejam processadas. E a AWS gerencia a infraestrutura subjacente para você hospedar essas filas. Essas filas são dimensionadas automaticamente, são confiáveis e são fáceis de configurar e usar.

## Teste de conhecimento

- Qual serviço da AWS é a melhor opção para publicar mensagens para assinantes?

a) SQS
b) EC2 Auto Scaling
c) SNS
d) Elastic Load Balancing

## Comentário

A resposta correta é B, Amazon Simple Notification Service (Amazon SNS).

O Amazon SNS é um serviço de publicação/assinatura. Usando tópicos do Amazon SNS, um editor publica mensagens para assinantes.

As outras respostas estão incorretas porque:

Amazon Simple Queue Service (Amazon SQS) é um serviço de enfileiramento de mensagens. Ele não usa a assinatura de mensagem e o modelo de tópico envolvidos com o Amazon SNS.

O Amazon EC2 Auto Scaling permite que você adicione ou remova automaticamente instâncias do Amazon EC2 em resposta à alteração da demanda da aplicação.

O Elastic Load Balancing é o serviço da AWS que distribui automaticamente o tráfego de entrada de aplicações entre vários recursos, como instâncias do Amazon EC2.

# Serviços de computação adicionais

## Computação sem servidor

O termo “sem servidor” significa que seu código é executado em servidores, mas você não precisa provisionar ou gerenciar esses servidores. Com a computação sem servidor, você pode se concentrar mais na inovação de novos produtos e recursos em vez de manter servidores.

Outro benefício da computação sem servidor é a flexibilidade de dimensionar aplicações sem servidor automaticamente. A computação sem servidor pode ajustar a capacidade das aplicações modificando as unidades de consumo, como taxa de transferência e memória.

Um serviço da AWS para computação sem servidor é o AWS Lambda.

## AWS Lambda

O AWS Lambda é um serviço que permite a execução de códigos sem a necessidade de provisionar ou gerenciar servidores.

Ao usar o AWS Lambda, você paga apenas pelo tempo de computação que consumir. As cobranças se aplicam somente quando seu código está em execução. Você pode executar códigos para praticamente qualquer tipo de aplicação ou serviço de back-end sem necessidade de qualquer administração.

Por exemplo, uma função simples do Lambda pode envolver o redimensionamento automático de imagens com o upload feito na Nuvem AWS. Nesse caso, a função é acionada ao carregar uma nova imagem.

## Contêineres

Os contêineres fornecem uma maneira padrão de empacotar códigos, configurações e dependências de sua aplicação em um único objeto. Você também pode usar contêineres para processos e fluxos de trabalho nos quais há requisitos essenciais de segurança, confiabilidade e escalabilidade.

## Amazon Elastic Container Service (Amazon ECS)

O Amazon Elastic Container Service (Amazon ECS) é um sistema de gerenciamento de contêineres altamente escalável e de alta performance que permite executar e escalar aplicações em contêineres na AWS.

O Amazon ECS oferece suporte a contêineres Docker. Docker é uma plataforma de software que permite criar, testar e implantar aplicações rapidamente. A AWS oferece suporte ao uso do Docker Community Edition de código aberto e do Docker Enterprise Edition baseado em assinatura. Com o Amazon ECS, você pode usar chamadas de API para iniciar e interromper aplicações habilitadas para Docker.

## Amazon Elastic Kubernetes Service (Amazon EKS)

Amazon Elastic Kubernetes Service (Amazon EKS) é um serviço totalmente gerenciado que você pode usar para executar o Kubernetes na AWS.

Kubernetes é um software de código aberto que permite implantar e gerenciar aplicações em contêineres em grande escala. Uma grande comunidade de voluntários mantém o Kubernetes, e a AWS trabalha ativamente em conjunto com a comunidade Kubernetes. À medida que novos recursos e funcionalidades são lançados para aplicações Kubernetes, você pode facilmente aplicar essas atualizações às aplicações gerenciadas pelo Amazon EKS.

## AWS Fargate

AWS Fargate é um mecanismo de computação sem servidor para contêineres. Ele funciona com o Amazon ECS e o Amazon EKS.

Ao usar o AWS Fargate, você não precisa provisionar ou gerenciar servidores. O AWS Fargate gerencia sua infraestrutura de servidor para você. Você pode se concentrar mais em inovar e desenvolver suas aplicações e pagar apenas pelos recursos necessários para executar seus contêineres.

# Resumo do módulo 2

O mais importante primeiro, o que é computação em nuvem e o que a AWS oferece? Definimos a computação em nuvem como a entrega sob demanda de recursos de TI pela Internet com uma definição de preço de pagamento conforme o uso. Isso significa que você pode fazer solicitações de recursos de TI como computação, redes, armazenamento, análise ou outros tipos de recursos, e, em seguida, eles são disponibilizados para você sob demanda. Você não paga pelo recurso adiantado. Em vez disso, você apenas provisiona e paga no final do mês.

A AWS oferece serviços e muitas categorias que você usa juntos para criar suas soluções. Abordamos apenas alguns serviços até agora, você aprendeu sobre o Amazon EC2. Com o EC2, você pode ativar e desativar dinamicamente os servidores virtuais chamados instâncias do EC2. Quando você inicia uma instância do EC2, escolhe a família de instâncias. A família de instâncias determina o hardware em que a instância é executada.

E você pode ter instâncias que são criadas para um propósito específico. As categorias são uso geral, otimizada para computação, otimizada para memória, computação acelerada e otimizada para armazenamento.

Você pode dimensionar suas instâncias do EC2 verticalmente redimensionando a instância ou horizontalmente ao iniciar novas instâncias e adicioná-las ao grupo. Você pode configurar a escalabilidade horizontal automatizada, usando o Amazon EC2 Auto Scaling.

Depois de dimensionar suas instâncias do EC2 horizontalmente, você precisa de algo para distribuir o tráfego de entrada em todas essas instâncias. É aí que entra o Elastic Load Balancer. As instâncias do EC2 têm diferentes modelos de preços. Há a Sob demanda, que é a mais flexível e não tem contrato, com definição de preço spot, o que permite a você utilizar a capacidade não usada a uma taxa descontada; as Savings Plans ou instâncias reservadas, que permitem que você assine um contrato com a AWS para obter uma taxa com desconto ao se comprometer a um determinado nível de uso, e Savings Plans que se aplicam ao AWS Lambda e ao AWS Fargate, bem como às instâncias do EC2.

Também abordamos os serviços de mensagens. Há o Amazon Simple Queue Service ou SQS. Esse serviço permite desacoplar componentes do sistema. As mensagens permanecem na fila até que sejam consumidas ou excluídas. O Amazon Simple Notification Service, ou SNS, é usado para enviar mensagens como e-mails, mensagens de texto, notificações push ou até mesmo solicitações HTTP. Depois que uma mensagem é publicada, ela é enviada a todos esses assinantes.

Você também aprendeu que a AWS tem tipos diferentes de serviços de computação além de apenas servidores virtuais como o EC2. Existem serviços de contêineres como o Amazon Elastic Container Service, ou ECS. E há o Amazon Elastic Kubernetes Service, ou EKS. Ambos são ferramentas de orquestração de contêineres. Você pode usar essas ferramentas com instâncias do EC2, mas se não quiser gerenciar isso, não precisa.

Você pode usar o AWS Fargate, que permite a execução de seus contêineres em uma plataforma de computação sem servidor. Há também o AWS Lambda, que permite que você faça o upload apenas do seu código e configure-o para ser executado com base em triggers. E você é cobrado apenas quando o código está realmente em execução. Sem contêineres, sem máquinas virtuais. Apenas código e configuração.

# Questionário

1. Você deseja usar uma instância do Amazon EC2 para uma carga de trabalho de processamento em lote. Qual seria o melhor tipo de instância do Amazon EC2 a ser usado?

a) Uso geral
b) Otimizada para memória
c) Otimizada para computação
d) Otimizada para armazenamento

## Comentário

A resposta correta é C, Computação otimizada.

As outras respostas estão incorretas porque:

instâncias de uso geral fornecem um equilíbrio de recursos de computação, memória e redes. Essa família de instâncias não seria a melhor escolha para a aplicação nesse cenário. As instâncias otimizadas para computação são mais adequadas para cargas de trabalho de processamento em lote do que instâncias de uso geral.

As instâncias otimizadas para memória são mais ideais para cargas de trabalho que processam grandes conjuntos de dados na memória, como bancos de dados de alta performance.

As instâncias otimizadas para armazenamento foram projetadas para cargas de trabalho que exigem alto acesso sequencial de leitura e gravação a grandes conjuntos de dados no armazenamento local. A questão não especifica o tamanho dos dados que serão processados. O processamento em lote envolve o processamento de dados em grupos. Uma instância otimizada para computação é ideal para esse tipo de carga de trabalho, que se beneficiaria de um processador de alta performance.

2. Quais são as opções de duração do contrato para instâncias reservadas do Amazon EC2? (Selecione DUAS.)

a) 1 ano
b) 2 anos
c) 3 anos
d) 4 anos
e) 5 anos

## Comentário

As duas respostas corretas são:

Um ano
Três anos
Instâncias reservadas exigem um compromisso de um ano ou três anos. A opção de três anos oferece um desconto maior.

3. Você tem uma carga de trabalho que será executada por um total de seis meses e pode suportar interrupções. Qual seria a opção de compra mais econômica do Amazon EC2?

a) Instância reservada
b) Instância spot
c) Instância dedicada
d) Instância sob demanda

## Comentário

A resposta correta é Instância spot.

As outras respostas estão incorretas porque:

Instâncias reservadas exigem uma duração de contrato de um ano ou três anos. A carga de trabalho neste cenário será executada apenas por seis meses.
Instâncias dedicadas são executadas em uma Virtual Private Cloud (VPC) em hardware dedicado a um único cliente. Elas têm um custo mais alto do que uma das outras respostas, que são executadas em hardware compartilhado.
As instâncias sob demanda cumprem os requisitos de execução por apenas seis meses e resistem a interrupções. No entanto, uma instância spot seria a melhor escolha porque não requer uma duração mínima de contrato, é capaz de suportar interrupções e custa menos do que uma instância sob-demanda.

4. Qual processo é um exemplo do Elastic Load Balancing?

a) Garantir que nenhuma instância única do Amazon EC2 tenha que carregar a carga de trabalho completa por conta própria
b) Remover instâncias desnecessárias do Amazon EC2 quando a demanda é baixa
c) Adicionar uma segunda instância do Amazon EC2 durante a venda popular de uma loja online
d) Ajustar automaticamente o número de instâncias do Amazon EC2 para atender à demanda

## Comentário

A resposta correta é Garantir que nenhuma instância única do Amazon EC2 tenha que carregar a carga de trabalho completa por conta própria.

Elastic Load Balancing é o serviço da AWS que distribui automaticamente o tráfego de entrada de aplicações entre vários recursos, como instâncias do Amazon EC2. Isso ajuda a garantir que nenhum recurso único seja usado em excesso.

As outras respostas são exemplos de Auto Scaling.

5. Você deseja implantar e gerenciar aplicações em contêineres. Qual serviço você deve usar?

a) AWS Lambda
b) Amazon Simple Notification Service (Amazon SNS)
c) Amazon Simple Queue Service (Amazon SQS)
d) Amazon Elastic Kubernetes Service (Amazon EKS)

## Comentário

A opção de resposta correta é Amazon Elastic Kubernetes Service (Amazon EKS).

O Amazon EKS é um serviço totalmente gerenciado do Kubernetes. Kubernetes é um software de código aberto que permite implantar e gerenciar aplicações em contêineres em grande escala.

As outras respostas estão incorretas porque:

AWS Lambda é um serviço que permite executar código sem provisionar ou gerenciar servidores.
Amazon Simple Queue Service (Amazon SQS) é um serviço que permite enviar, armazenar e receber mensagens entre componentes de software por meio de uma fila.
Amazon Simple Notification Service (Amazon SNS) é um serviço de publicação/assinatura. Usando tópicos do Amazon SNS, um editor publica mensagens para assinantes.

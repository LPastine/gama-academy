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

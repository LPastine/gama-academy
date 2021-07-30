# Introdução a AWS

## Objetivos de aprendizado

- Resumir os benefícios da AWS.
- Descrever as diferenças entre a entrega sob demanda e as implantações na nuvem.
- Resumir o modelo de definição de preço de pagamento conforme o uso.

Princípio : Pague pelo que precisar

### O que é um modelo cliente-servidor?

Na computação, um cliente pode ser um navegador da Web ou uma aplicação de desktop com o qual uma pessoa interage para fazer solicitações a servidores de computador. Um servidor pode ser serviços como o Amazon Elastic Cloud Compute (Amazon EC2), um tipo de servidor virtual.

### O que é a computação em nuvem?

A computação em nuvem é a entrega de recursos de TI sob demanda pela Internet com uma definição de preço de pagamento conforme o uso.

Entrega sob demanda indica que a AWS tem os recursos que você precisa, quando precisar deles. Você não precisa nos dizer com antecedência que vai precisar deles.

Esse tipo de flexibilidade simplesmente não é possível quando você está gerenciando seus próprios datacenters.

Tarefas pesadas genéricas de TI: Tarefas comuns, muitas vezes repetitivas e, por fim, demoradas. Essas são as tarefas com as quais a AWS quer ajudar você. Assim, você pode se concentrar no que o torna único.

### Modelos de implantação para computação em nuvem

Ao selecionar uma estratégia de nuvem, uma empresa deve considerar fatores como componentes de aplicações de nuvem necessários, ferramentas de gerenciamento de recursos preferenciais e requisitos de infraestrutura de TI legada.

Os três modelos de implantação de computação em nuvem são baseado em nuvem, on-premises e híbrido.

Implantação baseada em nuvem:

- Execute todas as partes da aplicação na nuvem.
- Migre aplicações existentes para a nuvem.
- Projete e crie novas aplicações na nuvem.

Em um modelo de implantação baseada em nuvem você pode migrar aplicações existentes para a nuvem ou pode projetar e criar novas aplicações na nuvem. Você pode criar essas aplicações em uma infraestrutura de baixo nível que exige que sua equipe de TI os gerencie. Como alternativa, você pode criá-las usando serviços de nível superior que reduzem os requisitos de gerenciamento, arquitetura e dimensionamento da infraestrutura principal.

Por exemplo, uma empresa poderia criar uma aplicação que consiste em servidores virtuais, bancos de dados e componentes de redes totalmente baseados na nuvem.

Implantação on-premises:

- Implante recursos usando ferramentas de virtualização e gerenciamento de recursos.
- Aumente a utilização de recursos usando tecnologias de gerenciamento e virtualização de aplicações.

A implantação on-premises também é conhecida como uma implantação de nuvem privada. Nesse modelo, os recursos são implantados no local usando ferramentas de virtualização e gerenciamento de recursos.

Por exemplo, você poderia ter aplicações executadas em tecnologia totalmente mantida em seu datacenter local. Embora esse modelo seja muito parecido com a infraestrutura de TI legada, sua incorporação de tecnologias de gerenciamento e virtualização de aplicações ajuda a aumentar a utilização de recursos.

Implantação híbrida:

- Conecte recursos baseados em nuvem à infraestrutura on-premises
- Integre recursos baseados em nuvem com aplicações de TI legadas.

Em uma implantação híbrida, os recursos baseados em nuvem estão conectados à infraestrutura on-premises. Você pode querer usar essa abordagem em várias situações. Por exemplo, você tem aplicações legadas que são melhor mantidas no local ou as regulamentações governamentais exigem que sua empresa mantenha determinados registros no local.

Suponha que uma empresa queira usar serviços de nuvem que podem automatizar o processamento e a análise de dados em lote. No entanto, a empresa tem várias aplicações legadas que são mais adequadas no local e não serão migradas para a nuvem. Com uma implantação híbrida, a empresa seria capaz de manter as aplicações legadas no local enquanto se beneficiaria dos serviços de dados e análises executados na nuvem.

### Benefícios da computação em nuvem

- Troque despesas iniciais por despesas variáveis

Despesas iniciais se referem a datacenters, servidores físicos e outros recursos nos quais você precisaria investir antes de usá-los. Despesas variáveis significam que você paga apenas pelos recursos de computação consumidos em vez de investir muito em datacenters e servidores antes de saber como usá-los.

Ao adotar uma abordagem de computação em nuvem que oferece o benefício de despesas variáveis, as empresas podem implementar soluções inovadoras enquanto economizam em custos.

- Pare de gastar dinheiro para executar e manter datacenters

A computação em datacenters geralmente exige que você gaste mais dinheiro e tempo gerenciando infraestrutura e servidores.

Um benefício da computação em nuvem é a capacidade de se concentrar menos nessas tarefas e mais em suas aplicações e clientes.

- Pare de tentar adivinhar a capacidade

Com a computação em nuvem, você não precisa prever a capacidade de infraestrutura necessária antes de implantar uma aplicação.

Por exemplo, você pode executar instâncias do Amazon EC2 quando necessário e pagar apenas pelo tempo de computação usado. Em vez de pagar por recursos não usados ou ter que lidar com capacidade limitada, você pode acessar apenas a capacidade necessária. Você também pode aumentar ou reduzir a escala em resposta à demanda.

- Beneficie-se de economias de escala massivas

O uso da computação em nuvem permite obter um custo variável inferior ao que você consegue no seu ambiente local.

Como o uso de centenas de milhares de clientes pode ser agregado à nuvem, provedores como a AWS podem alcançar economias de escala maiores. A economia de escala se transforma em preços de pagamento conforme o uso mais baixos.

- Aumente a velocidade e a agilidade

A flexibilidade da computação em nuvem facilita o desenvolvimento e a implantação de aplicações.

Essa flexibilidade oferece mais tempo para experimentar e inovar. Ao fazer a computação em datacenters, pode levar semanas para obter os novos recursos que você precisa. Em comparação, a computação em nuvem permite que você acesse novos recursos em poucos minutos.

- Tenha alcance global em minutos

A presença global da Nuvem AWS permite que você implante aplicações para clientes em todo o mundo rapidamente, ao mesmo tempo em que oferece baixa latência. Isso significa que, mesmo se você estiver localizado em uma parte do mundo diferente de seus clientes, os clientes poderão acessar suas aplicações com atrasos mínimos.

Mais adiante neste curso, você explorará a infraestrutura global da AWS com mais detalhes. Você examinará alguns dos serviços que pode usar para fornecer conteúdo a clientes em todo o mundo.

## Questionário

### 1) O que é computação em nuvem?

a) Backup de arquivos armazenados em dispositivos móveis e desktop para evitar a perda de dados
b) Implantação de aplicações conectadas à infraestrutura on-premises
c) Execução de código sem a necessidade de gerenciar ou provisionar servidores
d) Fornecimento sob demanda de recursos e aplicações de TI pela Internet com definição de preço com pagamento conforme o uso

A resposta correta é D, Entrega sob demanda de recursos e aplicações de TI pela Internet com definição de preço com pagamento conforme o uso.

### Comentário

As outras respostas estão incorretas porque:

É possível fazer backup de arquivos para a nuvem, mas essa opção de resposta não descreve a computação em nuvem como um todo.
A implantação de aplicações conectadas à infraestrutura on-premises é um exemplo de caso de uso para uma implantação de nuvem híbrida. Lembre-se de que a computação em nuvem também tem modelos de implantação em nuvem e on-premises (ou em nuvem privada).
O AWS Lambda é um serviço da AWS que permite executar código sem a necessidade de gerenciar ou provisionar servidores. Esta descrição não descreve a computação em nuvem como um todo. O AWS Lambda é explicado com mais detalhes posteriormente no curso.

### 2) Qual é outro nome para implantação on-premises?

a) Implantação de nuvem privada
b) Aplicação baseada em nuvem
c) Implantação híbrida
d) Nuvem AWS

### Comentário

A resposta correta é A, Implantação de nuvem privada.

As outras respostas estão incorretas porque:

aplicações baseadas em nuvem são totalmente implantadas na nuvem e não têm partes executadas on-premises.
Uma implantação híbrida conecta infraestrutura e aplicações entre recursos baseados em nuvem e recursos existentes que não estão na nuvem, como recursos on-premises. No entanto, uma implantação híbrida não é equivalente a uma implantação on-premises porque envolve recursos localizados na nuvem.
A Nuvem AWS oferece três modelos de implantação de nuvem: nuvem, híbrida e on-premises. Esta opção de resposta está incorreta porque a Nuvem AWS não é equivalente a apenas uma implantação on-premises.

### 3) Como a escala da computação em nuvem ajuda você a economizar custos?

a) Você não precisa investir em recursos tecnológicos antes de usá-los.
b) O uso agregado da nuvem por um grande número de clientes resulta em preços com pagamento conforme o uso mais baixos.
c) Acessar serviços sob demanda ajuda a evitar excesso ou capacidade limitada.
d) Você pode implantar aplicações rapidamente para os clientes e fornecer-lhes baixa latência.

### Comentário

A resposta correta é B, O uso agregado da nuvem de um grande número de clientes resulta em preços com pagamento conforme o uso mais baixos.

Esta resposta descreve como os clientes podem se beneficiar de enormes economias de escala na computação em nuvem.

As outras respostas estão incorretas porque:

Não ter que investir em recursos de tecnologia antes de usá-los está relacionado a Trocar despesas iniciais por despesas variáveis.
Acessar serviços sob demanda para evitar excesso ou capacidade limitada está relacionado a Parar de adivinhar a capacidade.
A implantação rápida de aplicações para os clientes e o fornecimento de baixa latência está relacionada a Ter alcance global em minutos.

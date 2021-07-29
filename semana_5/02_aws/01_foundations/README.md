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

- Região: localização geográfica com uma ou mais Zonas de Disponibilidades.
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

| Serviços | Pontos chave                                                                  | Características                                                  | Facilidade no seu uso                             |
| -------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------- |
| EC2      | Infraestructure As A Service (Iaas), baseado em instâncias, máquinas virtuais | Provee máquinas virtuais que você pode administrar à sua vontade | Conceito conhecido por muitos profissionais de TI |

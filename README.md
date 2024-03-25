# Projeto Petshop

## Premissas do Projeto

1. **Consistência dos Preços:** Assume-se que os preços dos serviços dos petshops permanecem consistentes, exceto nos finais de semana e feriados, quando ocorre um aumento para o petshop "Meu Canino Feliz" e preços fixos diferenciados para o "Vai Rex".

2. **Localização Estática:** Assume-se que a distância entre o canil e os respectivos petshops não sofre variações com o tempo.

3. **Custo-Benefício:** O cálculo deve ser feito com base no menor custo possível, que é o desejo de Eduardo; porém, em caso de empate, a menor distância é o critério de desempate.

## Decisões de Projeto

### Back-end

- **Tecnologias Utilizadas:** Node.js, MongoDB para o banco de dados e Prisma como ORM.
- **Estrutura de Dados:** Três tabelas foram criadas, uma para armazenar os dados dos petshops e outras duas relacionadas de forma um-para-um com a tabela de petshops para armazenar os preços em caso de variações.
- **Serviços Específicos:** Foram criados serviços para listar todos os petshops, criar petshops e calcular o melhor petshop baseado nas premissas exigidas por Eduardo. O CRUD não foi finalizado para todos os dados, mas a arquitetura de serviços permite a implementação de outros métodos com baixo custo de tempo e esforço.

### Front-end

- **Tecnologias Utilizadas:** React, TypeScript, Redux e Axios.
- **Design e Usabilidade:** Foi adotado um design básico e minimalista, com foco na funcionalidade e desempenho. O desenvolvimento foi baseado em CSR, com a adição de rotas e uso do Redux para gerenciamento de estados.
- **Navegação e Armazenamento:** Implementação de navegação entre telas sem perda de valores, permitindo visualizar diferentes resultados sem recarregar a página.

### Validações

- **Formulário de Agendamento:** Implementadas validações simples, como a exigência de que o input seja maior que zero e a data seja futura.

## Instruções de Uso

1. Clone o repositório para sua máquina local.

2. Tenha instalado em sua máquina local versão do node igual ou superior a versão 18.0.0

2. Executar comando de npm install em ambos os diretorios do projeto front-end e back-end.

3. Para iniciar o back-end, execute o comando "npx prisma generate" para gerar o banco de dados e em seguida "npm run dev" para rodar o servidor local.

5. Atualize as portas para não haver conflitos.

6. Atente-se aos arquivos .env no back-end que contem as credencias do banco de dados do MongoDb.

4. No front end rodar o comando "npm start".




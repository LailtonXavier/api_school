### Node Js course Api

  ## configação - editorconfin - eslint

-  ## nodemon + sucrase
    -- npm i nodemon sucrase -D

    - sucrase = vai permitir que utilizamos (imports e exports) do js
      ao inves de (require)

    - `nodemon.json` ...execMap: js "node -r sucrase/register
        estamos registrando o sucrase no nodemon
        toda vez que começar a rodar o (nodemon) roda o (sucrase)

-  ## estrutura inicial
    src --> config
            -> controllers
              -> database
                -> middlewares
                  -> models
                    -> routes
                     -> uploads

-  ## express
    - npm i express
    - criando usando class
      - `app` = class App

-  ## routes
    - nossas rotas

- ## sequelize = o cara que vai fazer o controler do nosso banco
    - criar tabela, editar, configurar...
      - vamos configurar o `dotenv`
      - npm i dotenv
  ## dotenv
    - estou conectando os dados no meu banco do servidor
    - depois das configurações ambiente é so import o dotenv
    - import em `app`

  ## sequelize [criando-alunos]
      -
    - Configuerações q estão
    - migrations = são as alterações que vms fazer no banco de dados
      -
      -- por exe: se crio uma tabela isso é considerado uma migrate
      -- cada mudança de arq vms ter um um historico q o sequelize
      -- fica responsavel, isso é mais facil pra gente
    - criar em `src` -> `config` -> `database.js`
      -
      -- em `database.js` vai ficar as configurações do banco de dados
      -- usuario senha o host, o dialeto (mariaDB), timeZone...
      -- dentro tem um `define`responsavel por ver qual foi a data de criação
       atualização,
    - pegando as configurações ja estou no dotenv
    * no MySql Workbanch: name = escola, Charset = utfBmb4, Collation = utfBmb4_general

    - criar tabela com sequelize
    - .sequelizerc (vai ter um monte de config)
    - npm i sequelize mariadb
    - npm i -D sequelize-cli
  |--- npx sequelize migration:create --name=alunos
  |--- ele criou uma pagina com umas informações data, minutos, seg
  |--- é nela que vms criar a tabela

    - Depois de criar a tabela, vms criar um `model` p se conectar na base de dados
      -- e vms criar um dado pra testar
      [OBS:] = `um model é referente a um dato, normalmente`
      -- vms criar um `model: Aluno referente a tabela Alunos (do sequelize`
      [se-liga] = Migrate criar as tabelas no banco de dados, Model criar as
        tabelas do Migrate que sera disponibilizada pra gente

      - Depois q criado a class em (model-Aluno.js) vms criar a sua conexão
      - em `database` -> `index.js` seria nossa conexão
      - por fim dessa part: chama sempre pra rodar automatico em `App.js`
        -- e testa se quebrou algo: npm run dev
        -- pra teste no `controllers` -> `HomeController` chama nosso (model-Aluno)
        -- e testa enviando os valores

      [RESUMINDO-TODA-ESSA-PARTE-DE-MIGRAÇÃO-E-CRIAÇÃO]
        * npm i dotenv
        - `./.env`        =   aqui esta o nome de nosso banco, host, senha, etc. Toda conexão
        - `./.sequelize` = gerenciar o banco e as migrations
          -- aqui é responsavel por criar os caminhos de nossos `database.js`, `models`
          -- `seeders`
        - `./src/config/database.js` = vai ser a configuração da base de dados: host, senha,
        data = timezone, usuario...
        - vms criar a migration Aluno
          -- npm i sequelize mariadb
          -- npm i -D sequelize-cli
          -- npm sequelize migration:create --name-alunos  = esse seria o nome da migration que
        estamos criando
          -- * ele criou nosssa migrations em
            ->  `src` -> `database`-> `migrations` -> `dataEhora-aluno.js`
          -- nessa migration criada, vms criar nossa tabela com os dados desejados no banco atravez dela
          -- npx sequelize db:migrate = esse comando vai criar nossa tabela na

        - `./src/models/Aluno.js` = criando nosso model Aluno com os dados da tabelas de nosso banco
          estratura de class do proprio sequelize
        - depois da criação de nossa migrate precisamos pega-la todos os models e fazer uma conexão
        direta com as configurações de nosso banco, migration, models.

        - `./src/database/index.js` = pegando todos models e colocando num array
        - em `App.js` importamos esse `database.index.js` para se auto executar e ficar rodando.
        - testa em um `controller` passando os dados dos campos e colocando pra rodar, com isso vai
        preencher nosso banco, e podemos ver insomia.

  ## nova Feature de usuario [criando-usuario]
    - [map] vms criar o usuario, logar o usuario e depois criar um middleware q faz com a rota tal
      so possa ser acessado por usuarios logado.
    - precisamos criar um [migration] de tabela usuario no banco
      -- npx sequelize migration:create --name=user
       ->  `src` -> `database`-> `migrations` -> `dataEhora-users.js`
       aqui criamos todas as informações de nossa tabela

      -- npx sequelize db:migrate
         pra criar a tabela
         se errou algo podemos refazer a tabela
      -- npx sequelize db:migrate:undo

      - depois de criado como fazer nosso [models] de user
      - `./src/models/User.js`

      - vms validar nossa senha aqui msm, por ela ser hash
     esse VIRTUAL significa q n vai existi na base de dados

     - hook bcryptjs
     - this.addHook('falar em qual local a quer q aconteca', usuario func )
       -- a gente quer antes de salva add hook 'beforeSave'
     - eslint : no-param-reassign precisamos essa reatribuiçao

     - agora vms criar o `controller`

     [OBS:-in-ROUTES]
       [metodos-usando-no-mercado-atal]

    - se a gente tiver um controller e precise listar os users
     index         -> lista todo os usuarios    -> GET
     store/create  -> cria um novo usuario      -> POST
     delete        -> apaga um usuario          -> DELETE
     show          -> mostra um usuario         -> GET
     update        -> que atualiza um usuario   -> PATCH ou PUT

     (PATCH = qnd vc altare apenas um valor
     PUT   = qnd vc pega um Obj e substitui por outro)

     -

            eu quero gerar um erro
   - defaultValue? '' // se n for enviado nd, por padrao vai ficar um vazio
   - validate    // ele usa o validator do React
     -- noEmpty: { msg: 'error'} tiramos pq tera outra validaçao
     -- len de tamanho, recebe um array: primeiro seria o tam minimo e o max

     senha = hash = bcryptjs
     - npm i bcryptjs
  como vou jogar a senha no campo hash?
     vms fazer isso com bcript.js e criar um hook
     - hook: ele vai falar, qnd vc for salva no banco de dados,
       antes de salvar joga a senha no hash

     [PRECISAMO-ALGO]
     - em `database` -> `index.js`temos que colocar em nosso array q pegando geral
     - pegando nossos models
     - agora continuar...

     - `UserController` so pra test, é muito parecido com `aluno``
        -- depois é so criar uma `userRoutes`
        -


    -- se tiver mais metodos q esse no seu `controller` esta errado
       n precisa fazer mais do que ele precisa

    - depois de feito o `model-user`e a `route-user`para colocar pra rodar no `App.js`
    - ate o momento n criamos nosso erro personalizados, simplismente envolvendo
      num try{}catch em `UserController`

  ## CRUD de usuarios
    - indo em nosso `UserController` para fazer nosso `CRUD`
    - dentro de `UserController`criaremos os metodos, depois precisamos
    criar a rota em `UserRoutes` com o metodo creiado do crud
    -- Muito simples de fazer... so rever a aula pra fixar mais

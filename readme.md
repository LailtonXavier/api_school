### Node Js course Api

  - npm run dev

  ## Configação - editorconfin - eslint

-  ## Nodemon + sucrase
    -- npm i nodemon sucrase -D

    - sucrase = vai permitir que utilizamos (imports e exports) do js
      ao inves de (require)

    - `nodemon.json` ...execMap: js "node -r sucrase/register
        estamos registrando o sucrase no nodemon
        toda vez que começar a rodar o (nodemon) roda o (sucrase)

-  ## Estrutura inicial
    src --> config
            -> controllers
              -> database
                -> middlewares
                  -> models
                    -> routes
                     -> uploads

-  ## Express
    - npm i express
    - criando usando class
      - `app` = class App

-  ## Routes
    - nossas rotas

- ## Sequelize = o cara que vai fazer o controler do nosso banco
    - criar tabela, editar, configurar...
      - vamos configurar o `dotenv`
      - npm i dotenv
  ## Dotenv
    - estou conectando os dados no meu banco do servidor
    - depois das configurações ambiente é so import o dotenv
    - import em `app`

  ## Sequelize [criando-alunos]
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

  ## Nova Feature de usuario [criando-usuario]
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

  ## Gerando um JWT
    - npm i jsonwebtoken
    - vamos logar utilizando `JSON WEB TOKEN`
    - no `.env`vai estar nosso `token-secret`e o tempo de expirar
    - `Controller`dentro vms criar para o token `TokenController`

    -- Como funciona:
      - vamos criar uma rota de `token` q seria tipo a rota de login
      - vamos criar um token e entrar de volta pra ele
    - en `routes` vamos criar `tokenRoutes`

    - vamos pegar em `App` importanto e usando
      - npm run dev   =   para testar

    - queremos receber email e senha para criar e verificar
    - em `tokenController` vamos pegar esses campos
      - vamos checar se os campos é igual oa do `user``
      - vamos usar bcrypt para ver a senha
        - em `Model User` vamos criar uma func `passwordValid`
        - pegando o password e comparando com password_hash
        - em `tokenController`pegamos essa func `passwordValid`e
        - fazemos a verificação se n é valida
    - so lembrando queremos retornar um token para o usuario
      - ainda em `tokenController`
      - import o jwt de jsonwebtoken para criar o token
        - dando um jwt.asign() pegando o id, email, a secret, tempo expirar

    [OBS:] sempre que o user fizer um requisição para um pagina ele precisa
      mandar esse `token` para ter o acesso, passado atravez do `headers`
      - logo abaixo deve ser cria um `middleware`de autenticacão onde vamos
      checar se o usuario esta mandando pra gente o `token` gerado

  ## Middleware de verificaçõo JWT
    - criando esse middleware é so coloca-lo em qualquer rota para fechar
    - ele precisa sers passado o token pelo os `headers`ou `auth`
    - `src` -> `middlewares`-> `loginRequired`
      - `loginRequired` dentro estamos pegando os id e email, pra quem usaer
      esse middleware vai ter acesso
    - em `router` -> `userRoutes` podemos colocar o `loginRequired` onde é preciso o login
    - oq acontece é que sera extraido o id e email daquele token enviado,
    em  todas as rotas que tiverem esse middleware
    - e todas as paginas eu vou ter os dados do usuario

    [OBS:] dessa forma um user pode editar todos, mais n queremos isso
      - queremos que um usuario so pode editar seus dados e n dos outros
      - faremos isso logo abaixo

  ## Correção usuario
    - corrigindo as `routes`
    - no `userController` para corrigir, vms pegar o id de nosso middleware
      - nosso token.
    - para melhorar a segunrança vms
    [RESUMO:]
      - usuarios logados não podem excluir os outros, mas podem editar e
      exvluir alunos.

  ## Seeds
    - npx sequelize seed:generate --name criar-usuarios
    - ele esta relacionado a criação de dados em nosso banco para teste∂
    - seria por exe: dados criado sem ser na base de dados e depois seria enviado.
    - muito similar para criar as tabelas
    - depois de preenchido todos os valores da tabela, damos
    - npx sequelize db:seed:all

  ## Rotas de alunos
    - vms criar um `controller`para alunos = `AlunoController`
    - criar uma rota `AlunoRoutes`
    - no `App.js`vamos pegar essa rota `alunoRoutes`importar e criar a rota
    - depois testar no insomnia

    - criando outra migration para deixar email como unico
    - vamos deixar email como unico
      - npx sequelize migration:create --name=mudar-email-aluno-unique
      - nos vamos mudar um coluna que ja existe
      - depois da alteração é so aplicar
        - npx sequelize db:migrate

  # CRUD alunos
    - primeiro vamos em `model`de alunos para validar os campos
    - validando os campos de alunos em `Aluno`no model
    - vms criar as rotas de alunos em `AlunoRoutes`
    - agora vamos no `Controller`criar essas func
    - depois é so testar no insomnia
    - lembrando que não podemos deixar tudo aberto
      - importar o `loginRequired`do meu `middlewares`dentro de `alunoRoutes``
      - depois é so colocar em quem queremos deixar fechado
      - para fazer alterações nas rotas fechadas, é so colocar o token

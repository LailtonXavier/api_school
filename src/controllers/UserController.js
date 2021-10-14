import User from '../models/User';

class UserController {
  // create user
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index = retorna todos = depois de criar Vai em Routes
  async index(req, res) {
    try {
      const users = await User.findAll();
      console.log('email user:', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
      // se cair no catch o program quebrou, returno valor nulo
    }
  }

  // show = pegando pelo id
  async show(req, res) {
    try {
      // pegando pela a primatyKey do user
      // const { id } = req.params;
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // update = vai ser uma mistura
  async update(req, res) {
    try {
      // bad request
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      const user = await User.findByPk(req.params.id);

      // se n existe user
      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }

      // oq a pessoa mandar eu atualizo
      const novosDados = await user.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      // com esse tratamento vemos o erro
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        res.status(400).json({
          errors: ['ID náo enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuarion não existe'],
        });
      }

      // so com isso ele vai ser apagador na base de dados
      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //
}
export default new UserController();

/**
 *
// index = sempre q mexer com a base de dados usamos Async
// pq retorna um promise e precismos esperar oq esta sendo retornado
// da base de daados

      isso estava tanto no `UserContreoller` pra test
      {
        name: 'Jose',
        email: 'jose@gmail.com',
        password: '123456',
      }
    ]

 */

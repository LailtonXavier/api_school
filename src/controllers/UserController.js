import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

/**
 * [ERRORS]
 *  - erro 400 bab request
 *    de de um console.log(e) vera um monte de coisa
 *      mas o que queremos seria o campo ( errors ) q possui as msgs de errors
 *  - add uma chave de errors pra ficar mais facil manipular
 *  - para receber os dados  =  dentro de ( User.create( req.body ) ).
 *
 *  - dentro de errors
 * errors: [
    ValidationErrorItem {
      message: 'email must be unique',
      type: 'unique violation',
      path: 'email',
      value: 'jose@gmail.com',
      origin: 'DB',
      instance: [User],
      validatorKey: 'not_unique',
      validatorName: null,
      validatorArgs: []
    }
  ],

    - O massa é que podemos pegar esses campos e mudar a msg em `Modals`
     -- no email add o campo ( unique ) e coloque uma msg

    [
      isso estava tanto no `UserContreoller` pra test
      {
        name: 'Jose',
        email: 'jose@gmail.com',
        password: '123456',
      }
    ]

 */

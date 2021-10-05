import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const testAluno = await Aluno.create({
      name: 'Maria',
      lastname: 'Silva',
      email: 'Maria@gmail.com',
      age: 55,
      weight: 100,
      height: 1.70,
    });
    res.json(testAluno);
  }
}

export default new HomeController();
// nesse test esse aluno q esta sendo criado deve ser retornado de cara
// é o padrao de API REST cria e retorna logo

import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    // ver todos os alunos
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
}

export default new AlunoController();

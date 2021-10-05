import Sequelize, { Model } from 'sequelize';

// esse é uma classe estaranha, do proprio sequelize
export default class Aluno extends Model {
  static init(sequelize) {
    // pra chamar o init do pai
    super.init({
      // pegando os campos do migrate-Alunos
      name: Sequelize.STRING,
      lastname: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weight: Sequelize.FLOAT,
      height: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}

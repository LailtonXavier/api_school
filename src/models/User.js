import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
    }, {
      sequelize,
    });
    return this;
  }
}

/**
 * vms validar nossa senha aqui msm, por ela ser hash
 * esse VIRTUAL significa q n vai existi na base de dados
 */

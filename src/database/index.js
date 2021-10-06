import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno'; // todos model devem vir aqui e colocar no array
import User from '../models/User';

const models = [Aluno, User]; // todos models aqui

const connection = new Sequelize(databaseConfig);

// vou jogar a conexão aqui dentro
models.forEach((model) => model.init(connection));

// depois q criado precisamos chama-lo em nosso servidor
// no App.js

import multer from 'multer';
import { extname, resolve } from 'path';

// vai vir um numero aleatorio entre 20k
const randomNumb = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randomNumb()}${extname(file.originalname)}`);
    },
  }),
};

/**
 *
 diskStorage  =  pq vamos salvar no servidor, banco
 destination   = pra onde vms mandar a foto
 *  - cb = func de calback, primeiro params seria um erro, segundo
  o caminho do uploads
 *
  filename  = seria pra gente gerar um novo nome do arq para n ficar
  aqueles cheio de espaços do cliente
    - Date.now  =  seria a hora atual, essa hora vai entrar no nome da foto
    - extname   = me diz o nome do arq, vai pegar so o (ponto.jpg)
 */

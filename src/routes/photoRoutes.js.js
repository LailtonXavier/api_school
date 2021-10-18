import { Router } from 'express';
import multer from 'multer';

import photoController from '../controllers/PhotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), photoController.store);

export default router;
// qualquer rota q precisamos receber um uploads
// é so colocar como middlewares o upload
// upload. = receber um arq ou varios
// - ele vai habilitar = req.file, se fosse varios req.files
// upload.single('dentro') = dentro vms passar o nome do campo que vair
// receber o arq
// para mandar mais de uma foto:
/*
  const maxFotos = 3;
  app.post('/cadastro', upload.array('foto', maxFotos)
  url: https://consolelog.com.br/upload-de-arquivos-imagens-utilizando-multer-express-nodejs/
  */

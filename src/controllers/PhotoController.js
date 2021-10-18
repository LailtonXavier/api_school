import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto'); // pegando ja o nome

class PhotoController {
  // store pq vamos receber um POST
  async store(req, res) {
    return upload(req, res, (err) => {
      // se tem algum erro mostra algo
      // errors: [err] aqui vimos oq tem dentro p usar
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new PhotoController();

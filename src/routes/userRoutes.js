import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show); // se liga no params id
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
/**
 *
 */

import { Router } from 'express';
import { createUserHandler, deleteUserHandler, findAllUsersHandler, findUserByIdHandler, updateUserHandler } from './user.controller';

const router = Router();

router.post('/create', createUserHandler);
router.delete('/delete/:id', deleteUserHandler);
router.get('/findAll', findAllUsersHandler);
//@ts-ignore
router.get('/find/:id', findUserByIdHandler);
router.put('/update/:id', updateUserHandler);

export default router;

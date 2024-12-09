import { Router } from 'express';
import { loginHandler, logoutHandler, verifyHandler } from './auth.controller';

const router = Router();

router.post('/login', loginHandler);
router.post('/logout', logoutHandler);

router.get('/verify', verifyHandler);

export default router;

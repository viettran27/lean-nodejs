import express from 'express'
import { body } from 'express-validator';
import { userControler } from '../controllers/index.js';

const router = express.Router()

router.get('/', userControler.getAllUsers)

router.get('/:id', userControler.getDetailUser)

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    userControler.login
)

router.post('/register', userControler.register)

export default router 
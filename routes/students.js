import express from 'express'
import { studentControler } from '../controllers/index.js'
const router = express.Router()

router.get('/', studentControler.getAllStudents)

router.get('/:id', studentControler.getStudentById)

router.post('/', studentControler.insertStudent)

router.patch('/', studentControler.updateStudent)

export default router 
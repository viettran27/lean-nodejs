import { validationResult } from 'express-validator';

const getAllUsers = async (req, res) => {
    res.send('GET users')
}

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req?.body
    res.send('POST login users')
}

const register = async (req, res) => {
    res.send('POST register users')
}

const getDetailUser = async (req, res) => {
    res.send("Get Detail user")
}

export default {
    getAllUsers,
    login,
    register,
    getDetailUser
}
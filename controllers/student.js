const getAllStudents = async (req, res) => {
    res.send('GET students')
}

const getStudentById = async (req, res) => {
    res.send('GET student by id: ' + req?.params?.id ?? "")
}

const updateStudent = async (req, res) => {
    res.send('update student')
}

const insertStudent = async (req, res) => {
    res.send('POST insert students')
}

export default {
    getAllStudents,
    getStudentById,
    updateStudent,
    insertStudent
}
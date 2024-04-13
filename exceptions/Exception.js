import { print, OutputType } from "../helpers/print.js"
export default class Exception extends Error {
    static WRONG_USER_OR_PASS = "Wrong database's username or password"
    static WRONG_SERVER = "Wrong server name connection string"
    static CANNOT_CONNECT = "Can't connect to database"

    constructor(message) {
        super(message)
        print(message, OutputType.ERROR)
    }
}
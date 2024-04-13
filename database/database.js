import mongoose from "mongoose";
import { OutputType, print } from "../helpers/print.js"
import Exception from './../exceptions/Exception.js';
mongoose.set('strictQuery', true);

async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print("Connect mongo successfull", OutputType.SUCCESS);
        return connection
    } catch (error) {
        if (error.code === 8000) {
            throw new Exception(Exception.WRONG_USER_OR_PASS)
        } else if (error.code === "ENOTFOUND") {
            throw new Exception(Exception.WRONG_SERVER)
        }
        debugger
        throw new Exception(Exception.CANNOT_CONNECT)
    }
}

export default connect

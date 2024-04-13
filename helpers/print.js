import chalk from "chalk";

class OutputType {
    static INFORMATION = "INFORMATION"
    static SUCCESS = "SUCCESS"
    static WARNING = "WARNING"
    static ERROR = "ERROR"
}

const Output = {
    "INFORMATION": (message) => console.log(chalk.white(message)),
    "SUCCESS": (message) => console.log(chalk.green(message)),
    "WARNING": (message) => console.log(chalk.yellow(message)),
    "ERROR": (message) => console.log(chalk.red(message))
}

const print = (message, outputType) => {
    Output[outputType](message)
}

export { print, OutputType }
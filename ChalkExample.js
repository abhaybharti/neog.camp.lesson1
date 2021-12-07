// Chalk is terminal styling library

import chalk from "chalk";

const log = console.log;

//Combine multiple style and normal string
log(chalk.blue.bold("Hello") + " World" + chalk.red("!"));

//Nest Style
log(chalk.red("Hello", chalk.underline.bgBlue(" World") + "!"));

//Template Literal
log(`CPU : ${chalk.red("90%")}`);

//Define your Theme
const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); //orange color
console.log(error("Error in Line"));
console.log(warning("Warning in Line"));

//String Substitution
const name = "Abc";

console.log(chalk.green("Hello %s"), name);

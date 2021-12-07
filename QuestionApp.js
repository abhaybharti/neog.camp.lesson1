import readLineSync from "readline-sync";
import chalk from "chalk";

const log = console.log();
const warning = chalk.hex("#FFAA0");
const error = chalk.red;
const right = chalk.green;

var flagPrint = false;
const welcomeMessage =
  chalk.cyan(
    "*******************************************************************\n \x09 \x09 \x09"
  ) +
  chalk.green("Welcome to the show") +
  "\n  \x09 \x09 \x09 " +
  chalk.magenta.bold("WHO KNOWS INDIA") +
  chalk.cyan(
    " \n*******************************************************************"
  );
console.log(welcomeMessage);

var scoreRecordHolder = [
  {
    playerName: "Abhay",
    score: 5,
  },
  {
    playerName: "Awanish",
    score: 2,
  },
];
var questionBank = [
  {
    questionText: "Where is capital of India",
    answer: "Delhi",
  },
  {
    questionText: "When did India got independence",
    answer: "1947",
  },

  {
    questionText: "Where is capital of Bihar",
    answer: "Patna",
  },
  {
    questionText: "What is called India national flag",
    answer: "tiranga",
  },
  {
    questionText: "What is name of indian national animal",
    answer: "lion",
  },
  {
    questionText: "What is name of indian national game",
    answer: "hockey",
  },
  {
    questionText: "What is full form of JS",
    answer: "javascript",
  },
];

var score = 0;
function askQuestionAndcheckAnswer(question, answer) {
  var userAnswer = readLineSync.question(question + " : ");
  if (userAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
    score++;
    console.log(right("Congratulations !!!"));
  } else if (userAnswer.toLocaleLowerCase() !== answer.toLocaleLowerCase()) {
    console.log(error("So sorry !!! , Wrong Answer"));
  }
  checkIfExistingScoreRecordIsBroken(score);
}

for (var iteration = 0; iteration < questionBank.length; iteration++) {
  askQuestionAndcheckAnswer(
    questionBank[iteration].questionText,
    questionBank[iteration].answer
  );
}

printFinalScore();
function printFinalScore() {
  console.log(".......................");
  console.log(chalk.yellow("Hi , Your final score is "), score);
}

function checkIfExistingScoreRecordIsBroken(score, flagPrint) {
  for (
    var scoreIteration = 0;
    scoreIteration < scoreRecordHolder.length;
    scoreIteration++
  ) {
    if (scoreRecordHolder[scoreIteration].score < score) {
      console.log(
        chalk.blue(
          "Congratulations !!! , you surpassed existing record of user : " +
            chalk.blue(scoreRecordHolder[scoreIteration].playerName) +
            " , and score is : " +
            chalk.blue(scoreRecordHolder[scoreIteration].score)
        )
      );
    }
  }
}

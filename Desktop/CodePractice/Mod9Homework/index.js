const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
  `#<README.MD GENERATOR>${
    answers.title
  }

##Cementing thine eternal legacy

  With this arcane software, you too can instantly introduce the purpose of thine holy code.

  -To help others verbally express themselves in a concise yet precise manner.
  -To help share relevant information.
  -${
    answers.location
  }
  ${
    answers.hobby
  }
  ${
    answers.food
  }
  ${
    answers.github
  }
  ${
    answers.linkedin
  }
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'How wouid you like to automate your introduction?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Do you pray to our lord and saviour, Imperator Caesar Lucius Domitius Aurelian Augustus?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

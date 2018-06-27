const readLine = require('readline');
const util = require('util');
// a wrapper around process.stdout and process.stdin.  which implies that it adds more functionality to those methods

var rl = readLine.createInterface(process.stdin, process.stdout);

rl.question('what is your name? ', name => {
  rl.setPrompt(`${name} how old are you? `);
  rl.prompt();

  rl.on('line', age => {
    if (age < 18) {
      rl.close();
      util.log(
        `${name.trim()} because you are ${age} years old, you cannot proceed`,
      );
    } else {
      util.log(
        `${name} is great that you are ${age} years old, because now you can enjoy yourself`,
      );
      rl.close();
    }
  });

  console.log(name.toString());
});

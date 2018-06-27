const execute = require('child_process').exec;

execute('ls', (error, stdout) => {
  if (error) return error;

  console.log(stdout);
});

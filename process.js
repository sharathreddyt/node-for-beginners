// console.log(process.argv);

// var flag = process.argv.indexOf('--user');
// console.log(process.argv[flag + 1])
process.stdout.write('ask me nothing');

process.stdin.on('data', function(answer) {
  console.log(answer.toString());
  process.exit();
});

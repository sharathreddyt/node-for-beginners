const fs = require('fs');

fs.rmdir('./views', err => {
  if (err) return err;
});

try {
  fs.unlinkSync('./modules/data.html');
} catch (error) {
  console.log('====================================');
  console.log(error);
  console.log('====================================');
}

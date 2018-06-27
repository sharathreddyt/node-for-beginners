const axios = require('axios');

let username = 'edwin';
axios
  .get('https://api.github.com/users/' + username)
  .then(res => {
    console.log(res.data.blog);
  })
  .catch(error => {
    console.log(error);
  });

// let myPromise = new Promise((resolve, reject) => {
//   let isComplete = true;
//   if (isComplete) {
//     resolve('this is resolved/complete/success');
//   } else {
//     reject('this is rejected/incomplete/error');
//   }
// });

// myPromise
//   .then(result => {
//     console.log('====================================');
//     console.log(result);
//     console.log('====================================');
//   })
//   .catch(error => {
//     console.log('====================================');
//     console.log(error);
//     console.log('====================================');
//   });
// console.log('====================================');
// console.log('hey this is great');
// console.log('====================================');

// next lecture

// let turnOnComputer = () => {
//   return new Promise((resolve, reject) => {
//     resolve('computer is on');
//   });
// };
// let openBrowser = result => {
//   return new Promise((resolve, reject) => {
//     resolve('browser is open' + result);
//   });
// };
// let go = result => {
//   return new Promise((resolve, reject) => {
//     resolve('go to google' + result);
//   });
// };

// turnOnComputer()
//   .then(result => {
//     return openBrowser(result);
//   })
//   .then(result => {
//     return go(result);
//   })
//   .then(result => {
//     console.log('====================================');
//     console.log(result);
//     console.log('====================================');
//   });

//NEXT LECTURE

let turnOnComputer = () => {
  return new Promise((resolve, reject) => {
    resolve('computer is off/rejected');
  });
};
let openBrowser = result => {
  return new Promise((resolve, reject) => {
    resolve('browser is open' + result);
  });
};
let go = result => {
  return new Promise((resolve, reject) => {
    resolve('go to google' + result);
  });
};

// turnOnComputer()
//   .then(result => {
//     return openBrowser(result);
//   })

//   .then(result => {
//     return go(result);
//   })
//   .then(result => {
//     console.log('====================================');
//     console.log(result);
//     console.log('====================================');
//   })
//   .catch(err => {
//     console.log('====================================');
//     console.log(err);
//     console.log('====================================');
//   });

Promise.all([turnOnComputer(), openBrowser(), go()]).then(() => {
  console.log('====================================');
  console.log('all these functions are done');
  console.log('====================================');
});

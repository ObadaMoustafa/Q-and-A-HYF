const GOOGLE = "https://www.google.com";
const NEWS = "https://www.news.google.com";

// /* b, after, c */
// Promise.race([
//   fetch(GOOGLE).then(function b() {
//     console.log("b");
//   }),
//   fetch(GOOGLE).then(function c() {
//     console.log("c");
//   }),
// ]).then(function after() {
//   console.log("after");
// });

/* c, after, b */
// Promise.race([
//   fetch(NEWS).then(function b() {
//     console.log("b");
//   }),
//   fetch(GOOGLE).then(function c() {
//     console.log("c");
//   }),
// ]).then(function after() {
//   console.log("after");
// });

let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 100);
});

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("some error");
  }, 50);
});

Promise.race([myPromise1, myPromise2])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

/* Eryani/Ozgur/Daniil/Doga/Omer/Yunus
 promise 2 Rejected
Ahmed
 promise 1 Resolved */

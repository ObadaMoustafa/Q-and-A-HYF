function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("the promise is resolved");
    }, 2000);
  });
}
promise().then(null).catch(console.log);

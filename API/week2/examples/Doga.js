/* 
setTimeout in JavaScript is not executed in parallel and does not use a thread to fire[1][2]. It calls a function or specified piece of code once the timer expires[3][4]. setTimeout is not "safe" as it can escape the timeout parameter passed into Script..run()[5].
*/

try {
  setTimeout(function () {
    try {
      noSuchVariable;
    } catch (error) {
      console.log("not working from setTimeout");
    }
  }, 1000);
} catch (e) {
  console.log("not working");
}

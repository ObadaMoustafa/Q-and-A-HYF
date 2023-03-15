/* 
Daniil:
  What about HTTP errors? Do we still need to write some logic to throw an error if status >= 400

AbdulRahman:
  1-how can you handle errors that occur within an async function?
  2-How can you ensure that your async function returns a Promise that is properly resolved or rejected?
*/

// https://dummyjson.com/products/1

async function fetchDate(url) {
  const res = await fetch(url);
  console.log("gave response ✅");
  console.log(res);
  if (res.status >= 400)
    throw new Error(`HTTP req ERROR ${res.status}: ${res.statusText}`);
  return await res.json();
}

// function fetchData2(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => {
//         console.log("gave response ✅");
//         console.log(res);
//         if (!res.ok) {
//           reject(Error(`HTTP req ERROR ${res.status}: ${res.statusText}`));
//           return;
//         }
//         return res.json();
//       })
//       .then(resolve)
//       .catch(reject);
//   });
// }

// fetchData2("https://dummyjson.com/producssssts/1")
//   .then(console.log)
//   .catch((err) => {
//     console.log("from catch block");
//     console.log("Error happened", err.message);
//   });

(async function () {
  try {
    const data = await fetchDate("https://dummxdfvsdfyjson.com/?q=sjdfhlskdjf");
    console.log("we got data", data);
  } catch (error) {
    console.log("error happened");
    console.log(error.message);
  }
})();

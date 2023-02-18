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
  if (!res.ok)
    throw new Error(`HTTP req ERROR ${res.status}: ${res.statusText}`);
  return await res.json();
}

function fetchData2(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        console.log("gave response ✅");
        console.log(res);
        if (!res.ok) {
          throw new Error(`HTTP req ERROR ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then(resolve);
  });
}

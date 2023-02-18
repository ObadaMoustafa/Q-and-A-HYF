// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + token,
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => {
//     // handle response
//   })
//   .catch((error) => {
//     // handle error
//   });

fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
    description: "it's awesome",
  }),
}).then((res) => {
  console.log("submitted successfully");
});

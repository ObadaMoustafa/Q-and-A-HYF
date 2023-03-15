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
  method: "GET",
  APIKEY: "adsjfhasd",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
    description: "it's awesome",
    price: 150,
  }),
})
  .then((res) => {
    console.log("submitted successfully");
    return res.json();
  })
  .then((data) => {
    console.log("the title of product is", data.title);
  })
  .catch((err) => console.log(err.message));

function test() {
  console.log("hi 1");
  console.log(" hi 2");

  setTimeout(() => console.log("hi 4"), 5000);

  new Promise((resolve, reject) => resolve("hi promise")).then((message) =>
    console.log(message)
  );

  setTimeout(() => console.log("hi 3"), 0);

  console.log("hi 5");
}

test();

/* 
Nojdar/Omar
"hi1", h2,hi5,hi4,hi3

Jalal/Doga/Ahmed
hi1, hi2, hi5, hi Promise, hi4, hi3


*/

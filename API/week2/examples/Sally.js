/* 
Hello,
Could you talk more about Json files?
In this example i am using a command with .json but what is the logic behind it? 
*/
function searchShow(query = "batman") {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log("we've got our data");
      console.log(jsonData);
      const stringData = JSON.stringify(jsonData[0]);
      console.log(stringData);
      const parsedData = JSON.parse(stringData);
      console.log(parsedData.score);
    });
}

window.onload = () => {
  const searchFieldElement = document.getElementById("searchField");
  searchFieldElement.onchange = (event) => {
    searchShow(searchFieldElement.value);
  };
};

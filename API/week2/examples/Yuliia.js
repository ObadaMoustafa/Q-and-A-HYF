const API_KEY = "511f8a79d61754bf6d85e93d46b60674";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const locationName = input.value;
  const url = `${BASE_URL}weather?q=${locationName}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationName.textContent = data.name;
    })
    .catch((error) => console.error(error));
});

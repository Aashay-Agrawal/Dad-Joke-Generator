const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");

const apikey = "";

const options = {
  method: "GET",
  Headers: {
    "X-Api-Key": apikey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  const response = await fetch(apiURL, options);
  const data = await response.json();

  jokeE1.innertext = data[0].joke;
}

btnE1.addEventListener("click", getJoke);

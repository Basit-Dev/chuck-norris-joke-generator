// Set variables
const getJokeEl = document.getElementById("display-jokes");
const btnCta = document.getElementById("get-jokes");

// Get URL
const apiUrl = "https://api.chucknorris.io/jokes/random";

// Get joke from network and return json data
async function getJoke() {
  let response = await fetch(apiUrl);
  if (!response.ok) {
    throw new `HTTP error! status: ${response.status}`();
  } else {
    let result = await response.json();
    console.log(result.value);
    return result.value;
  }
}

// Call the promise when user clicks button
btnCta.addEventListener("click", function () {
  getJoke()
    .then(result => {
      getJokeEl.innerText = result;
    })
    .catch(e => {
      getJokeEl.innerText = "Network error please try again!";
      console.log(`${e} catch`);
    });
});

const jokeContainer = document.querySelector("#joke");
const nextJokeBtn = document.querySelector("#next-joke-btn");

window.addEventListener("DOMContentLoaded", () => getJoke());

nextJokeBtn.addEventListener("click", () => getJoke());

const getJoke = async () => {
  await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      jokeContainer.innerHTML = `- ${result.joke} -`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

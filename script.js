const factText = document.getElementById("fact");
const btn = document.getElementById("btn");

function randomFact() {
  let fc = facts[Math.floor(Math.random() * facts.length)];
  factText.innerHTML = fc;
}

btn.addEventListener('click', event => {
  randomFact();
});

const facts = [
  "The sky is blue",
  "Competitive arts used to be in the olympics",
  "Stop signs used to be yellow",
  "There was a successful Tinder match in Antarctica in 2014",
  "Too much water can kill you",
  "The hottest temperature ever recorded \non Earth was 2 billion degrees kelvin"
];

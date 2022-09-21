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
  "The hottest temperature ever recorded \non Earth was 2 billion degrees kelvin",
  "Apex Legends is the best battle royale game",
  "You are living",
  "Someone just died",
  "1 in 5,000 north Atlantic lobsters are born bright blue",
  "There are 10 human body parts that are only 3 letters long (eye hip arm leg ear toe jaw rib lip gum)",
  "A skunk's smell can be detected by a human a mile away",
  "The word 'lethologica' describes the state of not being able to remember the word you want"
];

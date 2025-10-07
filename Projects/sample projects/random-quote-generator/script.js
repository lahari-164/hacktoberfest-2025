const quotes = [
  "The best way to predict the future is to invent it.",
  "Do what you can, with what you have, where you are.",
  "Dream big. Start small. Act now.",
  "Every moment is a fresh beginning.",
  "It always seems impossible until it’s done."
];

document.getElementById('btn').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
});

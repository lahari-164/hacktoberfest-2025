const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6", "#33FFF0"];

document.getElementById("changeColorBtn").addEventListener("click", function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById("colorName").textContent = "Current Color: " + randomColor;
});

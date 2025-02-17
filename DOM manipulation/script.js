const container = document.querySelector("#container");

const red = document.createElement("p");
const blue = document.createElement("h3");

const blackDiv = document.createElement("div");
const divH1 = document.createElement("h1");
const divP = document.createElement("p");


blackDiv.style.background = "pink"
blackDiv.style.height = "300px"
blackDiv.style.border = "1px solid black"

divH1.textContent = "Hey I'm a div!"
divP.textContent = "ME TOO!"

blackDiv.appendChild(divH1)
blackDiv.appendChild(divP)

red.textContent = "Hey I'm red!"
red.style.color = "red";

blue.textContent = "I'm a blue h3!"
blue.style.color = "blue";

btn.onclick = () => alert("Hello World")



container.appendChild(red);
container.appendChild(blue);
container.appendChild(blackDiv)



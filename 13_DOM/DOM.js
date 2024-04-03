const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content); 

const para1 = document.createElement("p");
para1.classList.add("para1");
para1.style.color = "red";
para1.textContent = "Hey I'm red!";

container.appendChild(para1); 

const heading3 = document.createElement("h3");
heading3.classList.add("heading3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!"

container.appendChild(heading3);

const blackDiv = document.createElement("div");
content.classList.add("blackDiv");
blackDiv.style.backgroundColor = "pink";
blackDiv.style.borderStyle = "solid";
blackDiv.style.borderWidth = "5px";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

blackDiv.appendChild(heading1);
blackDiv.appendChild(para2);

container.appendChild(blackDiv);


const container = document.querySelector('#container');

// a <p> with red text that says “Hey I’m red!”
const createP = document.createElement('p');
createP.textContent = "Hey I'm red!";
createP.style.color='red';
container.appendChild(createP);

// an <h3> with blue text that says “I’m a blue h3!”
const createH3 = document.createElement('h3');
createH3.textContent = "I'm a blue h3!";
createH3.style.color='blue';
container.appendChild(createH3);

// a <div> with a black border and pink background color with the following elements inside of it:
const createDiv = document.createElement('div');
createDiv.style.border = "thin solid black";
createDiv.style.backgroundColor='pink';

// another <h1> that says “I’m in a div”
const createH1 = document.createElement('h1');
createH1.textContent="I'm in a div";
createDiv.appendChild(createH1);

// a <p> that says “ME TOO!”
const anotherP = document.createElement('p');
anotherP.textContent="ME TOO!";
createDiv.appendChild(anotherP);

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

container.appendChild(createDiv);
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
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


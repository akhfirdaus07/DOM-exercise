const container = document.querySelector('#container');

const createP = document.createElement('p');
createP.textContent = 'Hey I’m red!';
createP.style.color='red';

container.appendChild(createP);
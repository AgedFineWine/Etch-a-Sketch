for (let num = 0; num < 16 * 16; num++) {
   const container = document.querySelector('.container');
    let newDiv = document.createElement('div');
    newDiv.classList.add('square-div');
    container.appendChild(newDiv);
}

const chooseColor = () => Math.floor((Math.random() * 255));
const squareDiv = document.querySelectorAll('.square-div');

squareDiv.forEach(reference => reference.addEventListener('mouseover', () => {
    reference.style.background = `rgb(${chooseColor()}, ${chooseColor()}, ${chooseColor()})`;
}));

const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    const container = document.querySelector('.container');
    let lengthNumber = prompt('Enter the number of squares per side:');
    while (lengthNumber > 100) {
        lengthNumber = prompt('Enter the number of squares per side:');
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    for (let num = 0; num < lengthNumber; num++) {
        const container = document.querySelector('.container');
         let newDiv = document.createElement('div');
         newDiv.classList.add('square-div');
         container.appendChild(newDiv);
     }
});
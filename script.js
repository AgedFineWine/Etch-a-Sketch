const chooseColor = () => Math.floor((Math.random() * 255));

const createCanvas = lengthNumber => {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (let row=0; row < lengthNumber**2; row++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('square-div');
        container.appendChild(newDiv);
    }
    container.style.setProperty('--length', lengthNumber);
    const squareDiv = document.querySelectorAll('.square-div');
    squareDiv.forEach(reference => reference.addEventListener('mouseover', () => {
        reference.style.background = `rgb(${chooseColor()}, ${chooseColor()}, ${chooseColor()})`;
    }));
}

const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    let lengthNumber = prompt('Enter the number of squares per side:');
    while (lengthNumber > 100) {
        lengthNumber = prompt('Enter the number of squares per side:');
    }

    createCanvas(lengthNumber);
});

createCanvas(16);
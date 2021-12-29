const container = document.querySelector('#container');
const btnRainbow = document.querySelector('#btnRainbow');
const btnColor = document.querySelector('#btnColor');

// RAINBOW BUTTON
let btnRainbowClicked = false;
let btnColorClicked = false;

function getRandomColor () {
    const hexadecimalArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let randomColor = '#';
    for (let c = 0; c<6; c++) {
        let randomIndex = Math.floor(Math.random() * hexadecimalArray.length);
        let randomElement = hexadecimalArray[randomIndex];
        randomColor += randomElement;
    }
    return randomColor;
}

btnRainbow.addEventListener('click', () => {
    btnColorClicked = false;
    btnRainbowClicked = true;
})

btnColor.addEventListener('click', () => {
    btnRainbowClicked = false;
    btnColorClicked = true;
})

function bcgColor () {
    if (btnRainbowClicked == true) {
        return getRandomColor();
    } else if (btnColorClicked == true) {
        return 'black';
    } else {
        return 'black';
    }
}

// GRID
function makeGrid(rows, cols) {
    if  (document.getElementsByClassName('gridItem').length > 0) {
        container.innerHTML = '';
    }

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridItem';
    }
    
    elementsGrid = document.getElementsByClassName('gridItem');
    for (let i = 0; i < elementsGrid.length; i++) {
        elementsGrid[i].addEventListener('mouseover', () => {
            elementsGrid[i].style.backgroundColor = bcgColor();
        })
    }
}

makeGrid(16, 16);

// RESET BUTTON
const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', () => {
    for (let i = 0; i < elementsGrid.length; i++) {
        elementsGrid[i].style.backgroundColor = 'white';
    }
})

// SLIDER
let slider = document.getElementById("myRange");
let outputSlider = document.getElementById("sliderValue");
outputSlider.innerHTML = slider.value;

slider.onchange = function() {
    outputSlider.innerHTML = this.value;
    makeGrid(this.value, this.value)
}
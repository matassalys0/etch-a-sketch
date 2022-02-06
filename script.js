"use strict"

const colors = ['black', 'red', 'blue', 'yellow', 'pink',
'white', 'green', 'violet', 'brown', 'wheat'];

const etchContainer = document.querySelector('.etch-container');

let boxColor = '#000000' 
let boxColorRandom = false;
let gridSize = 16;
let divHeight = etchContainer.clientHeight / gridSize;
let colWidth =  etchContainer.clientWidth / gridSize;

function paintDiv(e) {
    if(!boxColorRandom)
    e.target.style.backgroundColor = boxColor;
    else
    {
        boxColor = colors[Math.floor(Math.random()*colors.length)];
        e.target.style.backgroundColor = boxColor;
    }
}

function changeBoxColor(e) { 
    if(e.srcElement.classList.contains('color-picker')) 
        boxColor = e.srcElement.value;
    else {
        boxColor = this.style.backgroundColor;
        boxColorRandom = false;
    }
}

function changeBoxColorRandom(e) {
    boxColorRandom = true;
}

//this for loop is used to create the rows
function createEtch(e = undefined) {
    
    if(e != undefined && (e.srcElement.classList.contains('slider') || e.srcElement.classList.contains('size-change-btn'))) {
        gridSize = e.srcElement.value;
        divHeight = etchContainer.clientHeight / gridSize;
        colWidth =  etchContainer.clientWidth / gridSize;
    }
    
    etchContainer.innerHTML = "";
    for(let i = 0; i <= gridSize - 1; i++) {

        let rowDiv = document.createElement('div');
        rowDiv.style.height =  divHeight + "px";
        rowDiv.classList.add('container-row');
        rowDiv.id = 'row-' + i;
        etchContainer.appendChild(rowDiv);
    
        //for loop is used to add 'squares' to the rows
        for(let j = 0; j <= gridSize - 1; j++) {
            let colDiv = document.createElement('div');
            colDiv.classList.add('container-col');
            colDiv.style.width = colWidth + 'px';
            colDiv.id = 'row-' + i + 'col-' + j;
            rowDiv.appendChild(colDiv);
        }
    }

    invokeDivs();

}

function invokeDivs() {
    const canvasDivs = document.querySelectorAll('.container-col');

    canvasDivs.forEach(div => {
        div.addEventListener('mouseenter', paintDiv);
    });
}

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', createEtch);

const sliderValue = document.querySelector('.slider-value');
sliderValue.textContent = `${gridSize}x${gridSize}`;

const slider = document.querySelector('.slider');
slider.addEventListener('input', sliderChange);

function sliderChange(e) {
    sliderValue.textContent = `${e.srcElement.value}x${e.srcElement.value}`;
    createEtch(e);
}

const sizeChangeBtns = document.querySelectorAll('.size-change-btn');
sizeChangeBtns.forEach(btn => {
    btn.addEventListener('click', createEtch);
})

const colorChangeBtns = document.querySelectorAll('.color-box');
colorChangeBtns.forEach(btn => {
    btn.addEventListener('click', changeBoxColor);
})

const randomChangeBtn = document.querySelector('.random-color-box');
randomChangeBtn.addEventListener('click', changeBoxColorRandom);

const colorPicker = document.querySelector('.color-picker');
colorPicker.addEventListener('input', changeBoxColor);

createEtch();

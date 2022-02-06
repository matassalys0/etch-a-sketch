"use strict"

const etchContainer = document.querySelector('.etch-container');
//Setting the height for 90% of the screen  
let gridSize = 16;
let divHeight = etchContainer.clientHeight / gridSize;
let colWidth =  etchContainer.clientWidth / gridSize;

//this for loop is used to create the rows
function paintDiv(e) {
    e.target.style.backgroundColor = 'black';
}

function createEtch(e = undefined) {
    if(e != undefined && e.srcElement.classList.contains('slider')) {
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
    addRoundedCorners();
   
}

//This function adds rounded corners to the corner divs of the etch-a-sketch to fit with the border.
function addRoundedCorners() {
    const topLeftDiv = document.querySelector(`#row-${0}col-${0}`);
    const topRightDiv = document.querySelector(`#row-${0}col-${gridSize - 1}`);
    const bottomLeftDiv = document.querySelector(`#row-${gridSize - 1}col-${0}`);
    const bottomRightDiv = document.querySelector(`#row-${gridSize - 1}col-${gridSize - 1}`);

    topRightDiv.style.borderTopRightRadius = '20px';
    topLeftDiv.style.borderTopLeftRadius = '20px';
    bottomLeftDiv.style.borderBottomLeftRadius = '20px';
    bottomRightDiv.style.borderBottomRightRadius = '20px';
}

function invokeDivs() {
    const canvasDivs = document.querySelectorAll('.container-col');

    canvasDivs.forEach(div => {
        div.addEventListener('mouseenter', paintDiv);
    });
}

createEtch();

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
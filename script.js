"use strict"

const etchContainer = document.querySelector('.etch-container');
//Setting the height for 90% of the screen  
const divHeight = etchContainer.offsetHeight / 16;
const colWidth =  etchContainer.offsetWidth / 16;

//this for loop is used to create the rows
function paintDiv(e) {
    e.target.style.backgroundColor = 'black';
}

function createEtch() {
    etchContainer.innerHTML = "";
    for(let i = 0; i <= 15; i++) {

        let rowDiv = document.createElement('div');
        rowDiv.style.height =  divHeight + "px";
        rowDiv.classList.add('container-row');
        rowDiv.id = 'row-' + i;
        etchContainer.appendChild(rowDiv);
    
        //for loop is used to add 'squares' to the rows
        for(let j = 0; j <= 15; j++) {
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

createEtch();

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', createEtch);


"use strict"

const mainContainer = document.querySelector('.container');
//Setting the height for 90% of the screen  
const divHeight = 0.9 * window.innerHeight / 16;
const colWidth = 0.9 * window.innerWidth / 16;

//for loop is used to create the rows
for(let i = 0; i <= 15; i++) {

    let rowDiv = document.createElement('div');
    rowDiv.style.height =  divHeight + "px";
    rowDiv.classList.add('container-row');
    rowDiv.id = 'row-' + i;
    mainContainer.appendChild(rowDiv);

    //for loop is used to add divs to the rows
    for(let j = 0; j <= 15; j++) {
        let colDiv = document.createElement('div');
        colDiv.style.width = colWidth + 'px';
        colDiv.id = 'row-' + i + 'col-' + j;
        rowDiv.appendChild(colDiv);
    }
}
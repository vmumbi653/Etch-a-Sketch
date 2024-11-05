const container = document.getElementById('container');

let gridSize = 256;

//create square divs
function makeDivs(num) {
    for(let i=0;i<(num*num);i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}
makeDivs(16);
//divs are showing on DOM

// add event listeners for the buttons

const reset = document.querySelector('.resetBtn');

reset.addEventListener('click', function(){
    let grid = +prompt('Please input a number to set the grid: ');

    if(grid <= 100) {
        resetBtn(grid);
    } else {
        return prompt('Invalid number. Please return a number less than or equal to 100');
    }

    // resetBtn();
    // grid.classList.add('square');
    // container.appendChild(grid);

    // if(grid <= 100) {
    //     makeDivs(grid);
    // } else {
    //     return prompt('Invalid number. Please return a number less than or equal to 100');
    // }
});

//do clear button as well//*

function resetBtn(grid) {
    container.innerHTML = ''; //clear existing grid

    for(let i=0;i<(grid*grid);i++){
        let grd = document.createElement('div');
        grd.classList.add('square');
        container.appendChild(grd);

    }
}


//create hover effect
const square = document.querySelectorAll('.square');

//use forEach() to iterate through the Nodelist

square.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = randomColor();
});

});

square.forEach(square => {
    square.addEventListener('mouseout', function() {
        square.style.backgroundColor =randomColor();
    });
});

//generate random colors

function randomColor() {
    let color = [];

    for(let i=0;i<3;i++){
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb(' + color.join(',') + ')';
}
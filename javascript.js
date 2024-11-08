const container = document.getElementById('container');

const sqr = document.querySelector('.square');
 let gridSize = 16;
 const containerSize = 400;

//create square divs
// function makeDivs(num) {
//     for(let i=0;i<(num*num);i++) {
//         let square = document.createElement('div');
//         square.classList.add('square');
//         container.appendChild(square);
//     }
// }
// makeDivs();
// //divs are showing on DOM

function makeDivs(num) {  
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;
    const squareSize = Math.floor(containerSize / num);

     container.textContent = '';

    for (let i =0; i < num ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square);
}
//create hover effect
const square = document.querySelectorAll('.square');

//use forEach() to iterate through the Nodelist

square.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = randomColor();
});

});

// square.forEach(square => {
//     square.addEventListener('mouseout', function() {
//         square.style.backgroundColor =randomColor();
//     });
// });

//generate random colors

function randomColor() {
    let color = [];

    for(let i=0;i<3;i++){
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb(' + color.join(',') + ')';
}

}
makeDivs(gridSize);

//select buttons and add event listeners
const reset = document.querySelector('.resetBtn');
reset.addEventListener('click', resetGrid);

function resetGrid() {
    let grid = parseInt(prompt('Please input a number to set the grid: '));

    if(grid == NaN || grid < 1 || grid > 100) {
        return prompt('Invalid number. Please return a number less than or equal to 100');
    }else {
        makeDivs(grid);
    }
    gridSize = grid;
}

// makeDivs(gridSize);

// makeDivs(16);

// // add event listeners for the buttons

// const clearBtn = document.querySelector('.clearBtn');

// clearBtn.addEventListener('click', clearGrid);

// function clearSquare(square) {
//     square.backgroundColor = 'antiquewhite';

// }

// function clearGrid() {
//     // let squares = document.querySelectorAll('.square');

//     square.forEach(square => {
//         clearSquare(square);
//     });
// }


// const reset = document.querySelector('.resetBtn');

// document.addEventListener('DOMContentLoaded', function() {



// reset.addEventListener('click', function(){
//     let grid = +prompt('Please input a number to set the grid: ');
   
//     if(grid <= 100) {
//         resetBtn(grid);
//     } else {
//         return prompt('Invalid number. Please return a number less than or equal to 100');
//     }
// });
// })

// function resetBtn(grid) {
//     container.innerHTML = ''; //clear existing grid

//     for(let i=0;i<(grid*grid);i++){
//         let grd = document.createElement('div');
//         grd.classList.add('square');
//         container.appendChild(grd);
//     }
// }








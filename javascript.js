const container = document.getElementById('container');

//create square divs
function makeDivs(num) {
    for(let i=0;i<num;i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}
makeDivs(256);
//divs are showing on DOM

//create hover effect
const square = document.querySelectorAll('.square');

//use forEach() to iterate through the Nodelist

square.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = 'red';
});

});




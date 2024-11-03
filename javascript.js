const container = document.getElementById('container');


//testrun for one div//
// let div = document.createElement('div');
// container.appendChild(div);

// div.setAttribute('style', 'width:16px', 'height:16px', 'border:2px solid');


function makeDivs(numDivs) {
    for(let i=0;i<=numDivs;i++) {
        let box = document.createElement('div');
        container.appendChild(box);

    }
}
makeDivs(256);
    
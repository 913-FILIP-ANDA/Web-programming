
function loadTable() {
    let placed = [];
    for (let number = 1; number < 16; number++) {
        let cell = Math.floor(Math.random() * 16) + 1;
        while (placed.includes(cell)) {
            cell = Math.floor(Math.random() * 16) + 1;
        }
        let image = new Image();
        image.src = "img/lena" + number.toString() + ".jpg";
        document.getElementById(cell.toString()).append(image);
        placed.push(cell);
    }
}


function cellIsEmpty(id) {
    return document.getElementById(id).innerHTML === '';
}

function swapValues(firstElem, secondELem) {
    [document.getElementById(firstElem).innerHTML, document.getElementById(secondELem).innerHTML] =
        [document.getElementById(secondELem).innerHTML, document.getElementById(firstElem).innerHTML];
}

function move(id) {
    if (cellIsEmpty(id)) {
        return;
    }
    //bottom pos
    if (id + 4 <= 16 && cellIsEmpty(id + 4)) {
        swapValues(id, id + 4);
        return;
    }
    //top pos
    if (id - 4 > 0 && cellIsEmpty(id - 4)) {
        swapValues(id, id - 4);
        return;
    }
    //right pos
    if (id + 1 <= 16 && cellIsEmpty(id + 1)) {
        swapValues(id, id + 1);
        return;
    }
    //left pos
    if (id - 1 > 0 && cellIsEmpty(id - 1)) {
        swapValues(id, id - 1);
    }

  
}

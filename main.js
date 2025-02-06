let drinksActive = false;
let forrettActive = false;
let baguActive = false;
let hovedActive = false;

function closeFDrink(){
    if (drinksActive){
        showDrink()
    } 
}

function closeFForr() {
    if (forrettActive) {
        showForr()
    }
}

function closeFBagu() {
    if (baguActive) {
        showBagu()
    }
}

function closeFHoved() {
    if (hovedActive) {
        showHoved()
    }
}

function showDrink() {
    closeFBagu()
    closeFForr()
    closeFHoved()
    console.log("hellow world");
    let T = document.getElementById("drinks");
    if (T.style.display === 'block') {
        T.style.display = 'none';
        drinksActive = false;
    } else {
        T.style.display = 'block';
        drinksActive = true;
    }
}

function showForr() {
    closeFDrink()
    closeFBagu()
    closeFHoved()
    let T = document.getElementById("forretter");
    if (T.style.display === 'block') {
        T.style.display = 'none';
        forrettActive = false;
    } else {
        T.style.display = 'block';
        forrettActive = true;
    }
}

function showHoved() {
    closeFBagu()
    closeFDrink()
    closeFForr()
    let T = document.getElementById("hovedretter");
    if (T.style.display === 'block') {
        T.style.display = 'none';
        hovedActive = false;
    } else {
        T.style.display = 'block';
        hovedActive = true;
    }
}

function showBagu() {
    closeFHoved()
    closeFDrink()
    closeFForr()
    let T = document.getElementById("baguetter");
    if (T.style.display === 'block') {
        T.style.display = 'none';
        baguActive = false;
    } else {
        T.style.display = 'block';
        baguActive = true;
    }
}
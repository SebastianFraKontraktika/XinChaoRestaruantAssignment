let drinksActive = false;
let forrettActive = false;
let baguActive = false;
let hovedActive = false;
let spesActive = false;
let sushiActive = false;

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
function closeFSpes() {
    if (spesActive) {
        showSpes()
    }
}
function closeFSushi() {
    if (sushiActive) {
        showSushi()
    }
}

function showDrink() {
    closeFBagu()
    closeFForr()
    closeFHoved()
    closeFSpes()
    closeFSushi()
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
    closeFSpes()
    closeFSushi()
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
    closeFSpes()
    closeFSushi()
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
    closeFSpes()
    closeFSushi()
    let T = document.getElementById("baguetter");
    if (T.style.display === 'block') {
        T.style.display = 'none';
        baguActive = false;
    } else {
        T.style.display = 'block';
        baguActive = true;
    }
}
function showSpes() {
    closeFHoved()
    closeFDrink()
    closeFForr()
    closeFBagu()
    closeFSushi()
    let T = document.getElementById("spesialmeny");
    if (T.style.display === 'block') {
        T.style.display = 'none';
        spesActive = false;
    } else {
        T.style.display = 'block';
        spesActive = true;
    }
}
function showSushi() {
    closeFHoved()
    closeFDrink()
    closeFForr()
    closeFBagu()
    closeFSpes()
    let T = document.getElementById("sushi");
    if (T.style.display === 'block') {
        T.style.display = 'none';
        sushiActive = false;
    } else {
        T.style.display = 'block';
        sushiActive = true;
    }
}
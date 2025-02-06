function showDrink() {
    console.log("hellow world")
    console.log(document.getElementsByClassName("menyKlasse").length)
    let T = document.getElementById("drinks");
    if (T.style.display === 'block') {
        T.style.display = 'none';
    } else {
        T.style.display = 'block';
    }
}

function showForr() {
    let T = document.getElementById("forretter");
    if (T.style.display === 'block') {
        T.style.display = 'none';
    } else {
        T.style.display = 'block';
    }
}
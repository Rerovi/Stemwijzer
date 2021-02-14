const eensBttn = document.getElementById("eens");
const geenBttn = document.getElementById("geen");
const oneensBttn = document.getElementById("oneens");
const overslaBttn = document.getElementById("overslaan");
const terugBttn = document.getElementById("terug");
const buttons = document.getElementsByClassName("button");

const titel = document.getElementById("vraag");
const titelTekst = document.getElementById("vraag-tekst");

let answerCount = 0;
let answerObj = {};

let count = Object.keys(subjects).length;

for (let i = 0; i < count; i++) {
    answerObj[i + 1] = "";
}

eensBttn.onclick = eens;
geenBttn.onclick = geen;
oneensBttn.onclick = oneens;
overslaBttn.onclick = overslaan;
terugBttn.onclick = vraagTerug;

geenBttn.style.display = "none";
oneensBttn.style.display = "none";
overslaBttn.style.display = "none";

function eens() {
    if (answerCount == 0) {
        eensBttn.innerHTML = "Eens";
        geenBttn.style.display = "inline-block";
        oneensBttn.style.display = "inline-block";
        overslaBttn.style.display = "inline-block";
    } else {
        answerObj[answerCount] = "eens";
    }
    volgendeVraag();
}

function geen() {
    answerObj[answerCount] = "geen";
    volgendeVraag()
}

function oneens() {
    answerObj[answerCount] = "oneens";
    volgendeVraag();
}

function overslaan() {
    answerObj[answerCount] = "overgeslagen";
    volgendeVraag();
}

function volgendeVraag() {
    console.log(answerObj);
    console.log("volgende");
    answerCount++;
    for (let i = 0; i < count; i++) {
         if (answerCount == count + 1){
             alert("dat waren alle vragen");
             answerCount = 0;
             titel.innerHTML = "";
             titelTekst.innerHTML = "";
        }  else if (answerCount - 1 == i) {
             titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
             titelTekst.innerHTML = subjects[answerCount - 1].statement;
        }
    }
    for (let a = 0; a < buttons.length; a++) {
        buttons[a].style.backgroundColor = "gray";
    }
}

function vraagTerug() {
    if (answerCount == 1) {
        alert("Dit is de eerste vraag");
    } else {
        answerCount--;
        console.log("vraag terug");
        titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
        titelTekst.innerHTML = subjects[answerCount - 1].statement;
        if (answerObj[answerCount] == "eens") {
            eensBttn.style.backgroundColor = "blue";
            geenBttn.style.backgroundColor = "gray";
            oneensBttn.style.backgroundColor = "gray";
        } else if (answerObj[answerCount] == "geen") {
            eensBttn.style.backgroundColor = "gray";
            geenBttn.style.backgroundColor = "blue";
            oneensBttn.style.backgroundColor = "gray";
        } else if (answerObj[answerCount] == "oneens") {
            eensBttn.style.backgroundColor = "gray";
            geenBttn.style.backgroundColor = "gray";
            oneensBttn.style.backgroundColor = "blue";
        }
    }
}


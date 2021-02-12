const eensBttn = document.getElementById("eens");
const geenBttn = document.getElementById("geen");
const oneensBttn = document.getElementById("oneens");
const overslaBttn = document.getElementById("overslaan");
const terugBttn = document.getElementById("terug");

const titel = document.getElementById("vraag");
const titelTekst = document.getElementById("vraag-tekst");

let answerArr = [0, 0, 0];
let answerCount = 0;
let answerObj = {};

let count = Object.keys(subjects).length;

for (let i = 0; i < count; i++) {
    answerObj[i + 1] = "";
}

console.log(answerObj);

eensBttn.onclick = eens;
geenBttn.onclick = geen;
oneensBttn.onclick = oneens;
overslaBttn.onclick = volgendeVraag;
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
    }
    answerObj[answerCount] = "eens";
    console.log(answerObj);
    volgendeVraag();
}

function geen() {
    answerObj[answerCount] = "geen";
    console.log(answerObj);
    volgendeVraag()
}

function oneens() {
    answerObj[answerCount] = "oneens";
    console.log(answerObj);
    volgendeVraag();
}

function volgendeVraag() {
    answerCount++;
    for (let i = 0; i < count; i++) {
        if (answerCount - 1 == i) {
            titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
            titelTekst.innerHTML = subjects[answerCount - 1].statement;
        } else if (answerCount == count + 1) {
            alert("dat waren alle vragen");
            answerArr = [0, 0, 0];
            answerCount = 0;
            titel.innerHTML = "";
            titelTekst.innerHTML = "";
        }
    }
}

function vraagTerug() {
    answerCount--;
    console.log("vraag terug");
    titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
    titelTekst.innerHTML = subjects[answerCount - 1].statement;
}


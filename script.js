const eensBttn = document.getElementById("eens");
const geenBttn = document.getElementById("geen");
const oneensBttn = document.getElementById("oneens");
const overslaBttn = document.getElementById("overslaan");
const terugBttn = document.getElementById("terug");

const titel = document.getElementById("vraag");
const titelTekst = document.getElementById("vraag-tekst");

let answerArr = [0, 0, 0];
let answerCount = 0;

eensBttn.onclick = eens;
geenBttn.onclick = geen;
oneensBttn.onclick = oneens;
overslaBttn.onclick = overslaan;
terugBttn.onclick = vraagTerug;

function eens() {
    console.log("Vraag eens");
    answerArr[0]++;
    console.log(answerArr);
    volgendeVraag();
}

function geen() {
    console.log("Vraag geen van beide");
    answerArr[1]++;
    console.log(answerArr);
    volgendeVraag()
}

function oneens() {
    console.log("Vraag is oneens");
    answerArr[2]++;
    console.log(answerArr);
    volgendeVraag();
}

function overslaan() {
    console.log("Vraag overgeslagen");
    volgendeVraag();
}

function volgendeVraag() {
    answerCount++;
    console.log("volgende vraag");
    for (var i = 0; i < subjects.length; i++) {
        if (answerCount-1 == i) {
            titel.innerHTML = answerCount+". "+subjects[answerCount-1].title;
            titelTekst.innerHTML = subjects[answerCount-1].statement;
        } else if(answerCount == subjects.length+1){
            alert("dat waren alle vragen");
            answerCount = 0;
            titel.innerHTML = "";
            titelTekst.innerHTML = "";
        }
    }
}

function vraagTerug() {
    console.log("vraag terug");
}


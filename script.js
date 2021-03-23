const eensBttn = document.getElementById("eens");
const geenBttn = document.getElementById("geen");
const oneensBttn = document.getElementById("oneens");
const overslaBttn = document.getElementById("overslaan");
const terugBttn = document.getElementById("terug");
const buttons = document.getElementsByClassName("button");
const progressieBalk = document.getElementById("progressie");

const titel = document.getElementById("vraag");
const titelTekst = document.getElementById("vraag-tekst");
const lijst = document.getElementById("uitslag-lijst");
const primairBox = document.getElementById("primair");
const secundairBox = document.getElementById("secundair");

let count = Object.keys(subjects).length;
let answerCount = 0;
let answerObj = {};
let score = {};
let sort = [];
let check;

geenBttn.style.display = "none";
oneensBttn.style.display = "none";
overslaBttn.style.display = "none";
terugBttn.style.display = "none";

oneensBttn.onclick = () => antwoord('contra');
geenBttn.onclick = () => antwoord('none');
eensBttn.onclick = () => antwoord('pro');
overslaBttn.onclick = () => antwoord('overslaan');

function partijSelectie() {
    for (let i = 0; i < parties.length; i++) {
        if (primairBox.checked && secundairBox.checked) {
            check = "beide";
            score[parties[i].name] = 0;
        } else if (secundairBox.checked) {
            check = "secundair";
            if (parties[i].size <= 10) {
                score[parties[i].name] = 0;
            } else {
            }
        } else if (primairBox.checked) {
            check = "primair";
            if (parties[i].size >= 10) {
                score[parties[i].name] = 0;
            } else {
            }
        }
    }
    console.log(score);
}

function knopKleur() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "gray";
    }
    if (answerObj[answerCount - 1] == "pro") {
        eensBttn.style.backgroundColor = "blue";
    } else if (answerObj[answerCount - 1] == "none") {
        geenBttn.style.backgroundColor = "blue";
    } else if (answerObj[answerCount - 1] == "contra") {
        oneensBttn.style.backgroundColor = "blue";
    }
}

function antwoord(antwoord) {
    if (primairBox.checked || secundairBox.checked) {
        partijSelectie();
        if (antwoord == "overslaan") {
            answerObj[answerCount - 1] = "";
            console.log("overslaan");
            answerCount++;
            console.log(answerCount);
        } else {
            if (answerCount == 0) {
                answerCount++;
                eensBttn.innerHTML = "Eens";
                lijst.innerHTML = "";
                geenBttn.style.display = "inline-block";
                oneensBttn.style.display = "inline-block";
                overslaBttn.style.display = "inline-block";
                terugBttn.style.display = "inline-block";
            } else {
                knopKleur();
                answerObj[answerCount - 1] = antwoord;
                answerCount++;
                console.log(answerObj);
                console.log(answerCount);
            }
        }
        if (answerCount == count + 1) {
            partijBerekening();
            eindscherm();
            console.log(answerObj);
            console.log(answerCount);
        } else {
            titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
            titelTekst.innerHTML = subjects[answerCount - 1].statement;
            knopKleur()
        }
    } else {
        alert("U moet minstens 1 optie aanklikken!");
    }
}

function vraagTerug() {
    answerCount--;
    console.log(answerCount);
    titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
    titelTekst.innerHTML = subjects[answerCount - 1].statement;
    knopKleur();
}

function partijBerekening() {
    for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < subjects[i].parties.length; j++) {
            if (answerObj[i] == subjects[i].parties[j].position) {
                console.log(score);
                score[subjects[i].parties[j].name]++;
            }
        }
    }
    for (let key in score) {
        score[key] = score[key] / subjects.length * 100;
        score[key] = Math.round(score[key] * 100) / 100;

    }
}

function sorteerObject() {
    console.log(sort);
    for (let key in score) {
        sort.push([key, score[key]]);
    }
    sort.sort(function (a, b) {
        return b[1] - a[1];
    });
}

function verwijder() {
    titel.innerText = "";
    titelTekst.innerText = "";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
}

function eindscherm() {
    sorteerObject();
    verwijder();
    var lijstItems = [];
    titel.innerHTML = "Uitslagen!";
    for (let i = 0; i < Object.keys(sort).length; i++) {
        if (Number.isNaN(sort[i][1])) {
            delete sort[i];
        }
        lijstItems[i] = document.createElement("LI");
        lijst.appendChild(lijstItems[i]);
        lijstItems[i].innerHTML = sort[i][0] + " " + sort[i][1] + "%";
    }
}



const eensBttn = document.getElementById("eens");
const geenBttn = document.getElementById("geen");
const oneensBttn = document.getElementById("oneens");
const overslaBttn = document.getElementById("overslaan");
const terugBttn = document.getElementById("terug");
const buttons = document.getElementsByClassName("button");
const progressieBalk = document.getElementById("progressie");

const titel = document.getElementById("vraag");
const titelTekst = document.getElementById("vraag-tekst");

let answerCount = 0;
let answerObj = {};
let score = [];

for (let i = 0; i < parties.length; i++) {
    score[i] = {
        naam: parties[i].name,
        punten: 0,
    }
}

let count = Object.keys(subjects).length;

geenBttn.style.display = "none";
oneensBttn.style.display = "none";
overslaBttn.style.display = "none";
terugBttn.style.display = "none";


function antwoord(antwoord) {
    if (antwoord == "overslaan") {
        answerObj[answerCount - 1] = "";
        console.log("overslaan");
        answerCount++;
        console.log(answerCount);
    } else {
        if (answerCount == 0) {
            answerCount++;
            eensBttn.innerHTML = "Eens";
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


}

function vraagTerug() {
    answerCount--;
    console.log(answerCount);
    titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
    titelTekst.innerHTML = subjects[answerCount - 1].statement;
    knopKleur();
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

function partijBerekening() {
    for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < subjects[i].parties.length; j++) {
            if (answerObj[i] == subjects[i].parties[j].position) {
                for (let l = 0; l < score.length; l++) {
                    score[l].punten = score[l].punten + 1;
                }
            }
        }
    }

    // for (let m = 0; m < subjects.length; m++) {
    //     score[m].punten = score[m].punten / subjects.length * 100;
    // }
    console.log(score);
}

function eindscherm() {
    verwijder();
}

function verwijder() {
    titel.innerText = "";
    titelTekst.innerText = "";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
}

// function match() {
//     for (let m = 0; m < subjects.length; m++) {
//         for (let i = 0; i < subjects[m].parties.length; i++) {
//             if (answers[m] == subjects[m].parties[i].position) {
//                 for (let p = 0; p < scores.length; p++) {
// //                     if (subjects[m].parties[i].name == scores[p].name) {
//                         if (questions[m].important) {
//                             scores[p].score = scores[p].score + 2;
//                         } else {
//                             scores[p].score = scores[p].score + 1;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

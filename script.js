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

let count = Object.keys(subjects).length;

for (let i = 0; i < count; i++) {
    answerObj[i] = "";
}
geenBttn.style.display = "none";
oneensBttn.style.display = "none";
overslaBttn.style.display = "none";
terugBttn.style.display = "none";


function antwoord(antwoord) {
    if (antwoord == "overslaan") {
        console.log("overslaan");
        answerCount++;
        console.log(answerCount);
    } else {
        if (answerCount == count) {
            partijBerekening();
        } else if (answerCount == 0) {
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
    titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
    titelTekst.innerHTML = subjects[answerCount - 1].statement;
    knopKleur()

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
    alert("laatste vraag");
}

// function eens() {
//     if (answerCount == 0) {
//         eensBttn.innerHTML = "Eens";
//         geenBttn.style.display = "inline-block";
//         oneensBttn.style.display = "inline-block";
//         overslaBttn.style.display = "inline-block";
//         progressieBalk.style.display = "inline-block";
//     } else {
//         answerObj[answerCount] = "eens";
//     }
//     volgendeVraag();
// }
//
// // function geen() {
// //     answerObj[answerCount] = "geen";
// //     volgendeVraag()
// // }
// //
// // function oneens() {
// //     answerObj[answerCount] = "oneens";
// //     volgendeVraag();
// // }
// //
// // function overslaan() {
// //     answerObj[answerCount] = "overgeslagen";
// //     volgendeVraag();
// // }


// function vraagTerug() {
//     if (answerCount == 1) {
//         alert("Dit is de eerste vraag");
//     } else {
//         answerCount--;
//         console.log("vraag terug");
//         titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
//         titelTekst.innerHTML = subjects[answerCount - 1].statement;
//         if (answerObj[answerCount] == "eens") {
//             eensBttn.style.backgroundColor = "blue";
//             geenBttn.style.backgroundColor = "gray";
//             oneensBttn.style.backgroundColor = "gray";
//         } else if (answerObj[answerCount] == "geen") {
//             eensBttn.style.backgroundColor = "gray";
//             geenBttn.style.backgroundColor = "blue";
//             oneensBttn.style.backgroundColor = "gray";
//         } else if (answerObj[answerCount] == "oneens") {
//             eensBttn.style.backgroundColor = "gray";
//             geenBttn.style.backgroundColor = "gray";
//             oneensBttn.style.backgroundColor = "blue";
//         }
//     }
// }

// overslaBttn.onclick = overslaan;
// terugBttn.onclick = vraagTerug;
//
// geenBttn.style.display = "none";
// oneensBttn.style.display = "none";
// overslaBttn.style.display = "none";


const eensBttn = document.getElementById("eens");
const geenBttn = document.getElementById("geen");
const oneensBttn = document.getElementById("oneens");
const overslaBttn = document.getElementById("overslaan");
const terugBttn = document.getElementById("terug");
const buttons = document.getElementsByClassName("button");

const titel = document.getElementById("vraag");
const titelTekst = document.getElementById("vraag-tekst");
const lijst = document.getElementById("uitslag-lijst");
const primairBox = document.getElementById("primair");
const secundairBox = document.getElementById("secundair");

let count = Object.keys(subjects).length;
let stop = true;
let answerCount = 0;
let answerObj = {};
let weging = {};
let score = {};
let sort = [];
var vraagItems = [];
var lijstLabel = [];
let check;

for (let g = 1; g < subjects.length; g++) {

}

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
}

function vraagWegingen() {
    stop = false;
    titel.innerHTML = "Zijn er nog onderwerpen die u belangrijk vindt?";
    titelTekst.innerHTML = "Aangevinkte instellingen tellen extra mee bij het berekenen van uw resultaat.";
    for (let i = 0; i < Object.keys(subjects).length; i++) {
        lijstLabel[i] = document.createElement("label");
        vraagItems[i] = document.createElement("INPUT");
        lijstLabel[i].for = i;
        lijstLabel[i].innerHTML = subjects[i].title;
        vraagItems[i].name = subjects[i].title;
        vraagItems[i].id = i;
        vraagItems[i].type = "checkbox";

        lijst.appendChild(vraagItems[i]);
        lijst.appendChild(lijstLabel[i]);
        lijst.appendChild(document.createElement("BR"));

        vraagItems[i].innerHTML = subjects[i].title;
    }
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
        lijst.innerHTML = "";
        if (stop == true) {
            vraagWegingen();
        } else if (stop == false) {
            for (let i = 0; i < vraagItems.length; i++) {
                if (vraagItems[i].checked) {
                    weging[i] = 2;
                } else {
                    weging[i] = 1;
                }
            }
            partijSelectie();
            if (stop == true) {
            } else if (stop == false) {
                if (antwoord == "overslaan") {
                    answerObj[answerCount - 1] = "";
                    answerCount++;
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
                    }
                }
                if (answerCount == count + 1) {
                    partijBerekening();
                    eindscherm();
                } else {
                    titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
                    titelTekst.innerHTML = subjects[answerCount - 1].statement;
                    knopKleur();
                }
            }
        } else {
            alert("U moet 1 optie kiezen");
        }
    }
}

function vraagTerug() {
    if (answerCount = 1) {
        let beginvraag = confirm("Dit is de eerste vraag, weet u zeker dat u wilt stoppen?");
        if (beginvraag == true) {
            location.reload();
        } else {
        }
    } else {
        answerCount--;
        titel.innerHTML = answerCount + ". " + subjects[answerCount - 1].title;
        titelTekst.innerHTML = subjects[answerCount - 1].statement;
        knopKleur();
    }
}

function partijBerekening() {
    for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < subjects[i].parties.length; j++) {
            if (answerObj[i] == subjects[i].parties[j].position) {
                score[parties[j].name] = weging[i];
            }
        }
    }
    for (let key in score) {
        score[key] = score[key] / subjects.length * 100;
        score[key] = Math.round(score[key] * 100) / 100;

    }
}

function sorteerObject() {
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
    let lijstItems = [];
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






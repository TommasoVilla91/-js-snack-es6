// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

const bicycles = [
    {
        name: "Atala",
        weight: 20
    },
    {
        name: "Bianchi",
        weight: 13
    },
    {
        name: "Cinelli",
        weight: 8
    },
    {
        name: "BMC",
        weight: 11
    }
];

// partiamo dal presupposto che sia la prima la più leggera
let lightweight = bicycles[0];

// ciclo per estrarre il peso delle altre 3
for (let i = 1; i < bicycles.length; i++) {
    const bike = bicycles[i];

    // se è minore allora stampo
    if (bike.weight < lightweight.weight) {
        lightweight = bike;
    }
}
console.log(lightweight);


// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const clubTeams = [
    {
        name: "Milan",
        score: 0,
        recFouls: 0
    },
    {
        name: "Real Madrid",
        score: 0,
        recFouls: 0
    },
    {
        name: "Bayen Munchen",
        score: 0,
        recFouls: 0
    },
    {
        name: "Benfica",
        score: 0,
        recFouls: 0    
    }
];

// arrow function per generare numeri random
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// associare funzione a variabili punteggi e falli
const numScore = getRandomInt(0, 115);
const numFouls = getRandomInt(0, 50);

// ciclo for per estrarre valori attuali di puntegi e falli
let scoreElem = "";
let foulsElem = "";
for (let i = 0; i < clubTeams.length; i++) {
    const scoreItem = clubTeams[i];
    const foulsItem = clubTeams[i];

    scoreElem = scoreItem.score;
    foulsElem = foulsItem.recFouls;

    console.log(scoreElem, foulsElem);
}

// associare i numeri random alla chiavi di punteggi e falli

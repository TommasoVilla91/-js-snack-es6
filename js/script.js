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

// ciclo for per associare funzione a variabili punteggi e falli
for (let i = 0; i < clubTeams.length; i++) {
    const team = clubTeams[i];

    team.score = getRandomInt(0, 115);
    team.recFouls = getRandomInt(0, 50);

    console.log(`punteggio: ${team.score}, falli subiti: ${team.recFouls}`);
}

// creare array di nomi e array di falli subiti
let namesId = [];
let recFoulsId = [];
for (let i = 0; i < clubTeams.length; i++) {
    const team = clubTeams[i];
    namesId.push(team.name);
    recFoulsId.push(team.recFouls);
}
console.log(namesId, recFoulsId)

// fondere i due array
function fusion(namesArray, foulsArray) {
    const namesAndFouls = [];
    for (let i = 0; i < namesArray.length; i++) {
        const curNames = namesArray[i];
        const curFouls = foulsArray[i];
        namesAndFouls.push(curNames, curFouls);
    }
    return namesAndFouls;
}
console.log(fusion(namesId, recFoulsId));

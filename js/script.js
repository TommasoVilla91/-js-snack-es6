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


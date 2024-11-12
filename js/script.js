// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

const bicicles = [
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

const lightweights = [];
for (let i = 0; i < bicicles.length; i++) {
    const bike = bicicles[i];
    lightweights.push(bike.weight);
}
console.log(lightweights)

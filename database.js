const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE |
sqlite3.OPEN_CREATE, (err) => {
if (err) {
console.error(err.message);
} else {
console.log('Connecté à la base de données SQLite.');
db.run(`CREATE TABLE IF NOT EXISTS personnes (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nom TEXT NOT NULL,
adresse TEXT
)`, (err) => {
if (err) {
console.error(err.message);
} else {
    
// Insertion de données initiales
//const personnes = ['Bob', 'Alice', 'Charlie'];
//personnes.forEach((nom) => {

const personnes = [
    {nom: 'Bob', adresse: '123 rue de Bob'}, 
    {nom: 'Alice', adresse: '456 rue d\'Alice'},
    {nom: 'Charlie', adresse: '789 rue de Charlie'}
    ];
personnes.forEach((personne) => {
db.run(`INSERT INTO personnes (nom , adresse) VALUES (?,?)`, [personne.nom , personne.adresse]);
});
}0
});
}
});

module.exports = db; 

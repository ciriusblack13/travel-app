import { Mezzo, Utente, Citta } from './classes';

// Creazione mezzi
const bici1 = new Mezzo('bici', 'B001');
const scooter1 = new Mezzo('scooter', 'S001');
const monopattino1 = new Mezzo('monopattino', 'M001');

// Creazione utenti
const utente1 = new Utente('Mario', 'Rossi', 'mario@email.com', 'carta');
const utente2 = new Utente('Luigi', 'Verdi', 'luigi@email.com', 'paypal');

// Creazione città
const milano = new Citta('Milano');

// Test funzionalità
milano.aggiungiMezzo(bici1);
milano.aggiungiMezzo(scooter1);
milano.aggiungiMezzo(monopattino1);

try {
    utente1.prenotaMezzo(bici1);
    utente2.prenotaMezzo(bici1); // Dovrebbe generare un errore
} catch (error) {
    console.error('Errore:', error.message);
}

console.log('Stato mezzi:', milano.elencoMezzi.map(m => ({
    tipo: m.tipo,
    id: m.id,
    stato: m.stato
})));
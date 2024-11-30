import { IMezzo, IUtente, ICitta } from './interface';

export class Mezzo implements IMezzo {
    constructor(
        public tipo: 'bici' | 'scooter' | 'monopattino',
        public id: string,
        public stato: 'disponibile' | 'in uso' = 'disponibile'
    ) {}

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'in uso') {
            throw new Error('Mezzo già in uso');
        }
        this.stato = 'in uso';
        console.log(`Mezzo ${this.id} assegnato a ${utente.nome} ${utente.cognome}`);
    }
}

export class Utente implements IUtente {
    constructor(
        public nome: string,
        public cognome: string,
        public email: string,
        public metodoPagamento: string
    ) {}

    prenotaMezzo(mezzo: IMezzo): void {
        mezzo.assegnaUtente(this);
    }
}

export class Citta implements ICitta {
    constructor(
        public nome: string,
        public elencoMezzi: IMezzo[] = []
    ) {}

    aggiungiMezzo(mezzo: IMezzo): void {
        this.elencoMezzi.push(mezzo);
        console.log(`Nuovo mezzo aggiunto a ${this.nome}: ${mezzo.tipo} (ID: ${mezzo.id})`);
    }
}
export interface IMezzo {
    tipo: 'bici' | 'scooter' | 'monopattino';
    id: string;
    stato: 'disponibile' | 'in uso';
    assegnaUtente(utente: IUtente): void;
}

export interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    prenotaMezzo(mezzo: IMezzo): void;
}

export interface ICitta {
    nome: string;
    elencoMezzi: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}
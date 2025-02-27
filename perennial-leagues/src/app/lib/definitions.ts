export interface DataProp<T> {
    name: string;
    key: keyof T;
    type: 'text' | 'number' | 'select' | 'Object';
    fields?: DataProp<never>[]; //campi del tipo Object
    apiEndpoint?: string; //Se è un select con endpoint
    optionValue?: string; //Valore delle sotto-opzioni, 'nome' di default
    optionLabel?: string; //Descrizione delle sotto-opzioni, 'nome' di default
    subKey?: string, //chiave aggiuntiva, nel caso di Object e quindi relazioni molti a molti.
    render?: (item: unknown) => unknown; //modalità di render personalizzata, chiamare una funzione a cui vengono restituiti tutti i valori dell'oggetto
    className?: (item: unknown) => unknown; //sovrascrittura con classe dal file TypeScript, chiamare una funzione a cui vengono restituiti tutti i valori dell'oggetto
}

export type DataProps<T> = DataProp<T>[];

export interface Summary {
    detentore: string;
    sfidante: string;
    risultato: string;
    competizione: string;
    data: Date;
    durata: number;
}

export interface Team {
    squadra: string;
    stats:{
        regni: number;
        durataCombinata: number;
        durataMedia: number;
      };
    colors: {
        primary: string;
        secondary: string;
    };
}

export interface Squadra {
    squadra: string;
    regni: number;
    durata: number;
    media: number;
    colore_primario: string;
    colore_secondario: string;
    league: string;
    difese: number;
    media_difese: number;
    sfide: number;
}

export interface BlogPost {
    id: number;
    title: string;
    extract: string;
    body: string;
    author: string;
    date: Date;
    call_to_action: string;
}

export interface Match {
    detentore: string;
    sfidante: string;
    risultato: string;
    note: string;
    data: Date;
    durata: number;
    league: string;
    home: string;
    away: string;
    outcome: string;
    numero: number;
}
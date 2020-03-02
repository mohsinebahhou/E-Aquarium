import { Bassin } from './bassin';
export interface Secteur  {
    id : number;
    nom : string;
    localisation : string;
    bassins : Array<Bassin>;
}


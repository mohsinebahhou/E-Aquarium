import { Animal } from './animal';

export interface Bassin  {

    id : number;
    nom : string;
    capacite : number;
    volume : number;
    etat : string;
    animaux : Array<Animal>;

}

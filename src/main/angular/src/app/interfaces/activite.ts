import { Employe } from './employe';
export interface Activite  {

    id : number;
    nom : string;
    jour : string;
    heureDebut : string;
    heureFin : string;
    activitePublic : boolean;
    idBassin : number;
    idSecteur : number;
    employes : Array<Employe>;

}


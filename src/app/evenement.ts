export interface Evenement {
    _id? : string,
    nom: string,
    prenom : string,
    sport : string,
    amphitheatre : {ville : string, pays : string}
    date : string,
    positionement : {section : string, ranger : number, siege : number},
    nombrePlace: number,
    guichetFermer: Boolean,
    prix : number,
    rabais : number,
    vedette : Boolean,
    joueurEtoile? : [{nom : string, prenom : string, age : number}],
    tags? : string
}

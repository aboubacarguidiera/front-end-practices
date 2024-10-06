export class ProductItem{
    id: number
    nom: string 
    imageUrl : string 
    prix : number 
    categorie : string
    description : string 
    stock: number

constructor(id: number,nom: string, imageUrl: string, prix: number, categorie: string, description: string, stock:number) {
    this.id = id;
    this.nom = nom;
    this.imageUrl = imageUrl;
    this.prix = prix;
    this.categorie = categorie;
    this.description = description;
    this.stock = stock;
}}
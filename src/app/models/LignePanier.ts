import { ProductItem } from "./ProductItem";

export class LignePanier{
    product:ProductItem;
    quantite: number
    constructor(product : ProductItem, quantite: number) {
        this.product = product;
        this.quantite = quantite;}
    
}
import { Component } from '@angular/core';
import { ProductItem } from '../models/ProductItem';
import { ProduitItemComponent } from "../produit-item/produit-item.component";
import { LignePanier } from '../models/LignePanier';
import { NavbarComponent } from '../navbar/navbar.component';
import { PanierComponent } from '../panier/panier.component';
import { NgFor , NgIf } from '@angular/common';

@Component({
  selector: 'app-list-produits',
  standalone: true,
  imports: [ProduitItemComponent, NavbarComponent, PanierComponent],
  templateUrl: './list-produits.component.html',
  styleUrl: './list-produits.component.css'
})
export class ListProduitsComponent {
  products : ProductItem[] = [
    new ProductItem(1,"Lipstick","https://i.pinimg.com/564x/4b/77/82/4b7782f4b7d1a980c0a2a3a1472b0949.jpg",
      99, "Beauty", "Red lipstick for women", 20
    ),
    new ProductItem(2,"Computer","computer.jpeg",
      10000, "Mobile", "PC for students cheap",100
    ),
    new ProductItem(3,"Car", "car.jpg", 
      9999, "Driving", "Red car speed",50
    ),
    new ProductItem(4,"MotorBike", "https://i.pinimg.com/564x/fb/74/ea/fb74ea6831a47a665ea82d5802765f46.jpg",
      7722, "Driving", "Monsters",0
    ),
    /* Nouveaux produits
    new ProductItem("Smartphone", "https://i.pinimg.com/564x/87/5a/a8/875aa83294ab612a8a2a0abdb37d8494.jpg", 
      1200, "Electronics", "High-performance smartphone with 5G"
    ),
    new ProductItem("Tablet", "https://i.pinimg.com/564x/23/45/67/23456789.jpg",
      800, "Electronics", "Compact and lightweight tablet"
    ),
    new ProductItem("Watch", "https://i.pinimg.com/564x/34/56/78/34567890.jpg", 
      300, "Accessories", "Luxury wristwatch with leather strap"
    ),
    new ProductItem("Headphones", "https://i.pinimg.com/564x/45/67/89/45678901.jpg",
      150, "Audio", "Noise-cancelling wireless headphones"
    ),
    new ProductItem("Gaming Console", "console.jpg", 
      500, "Gaming", "Next-gen gaming console with 4K support"
    ),
    new ProductItem("Camera", "camera.jpg", 
      1500, "Photography", "Professional DSLR camera with lens kit"
    ),
    new ProductItem("Electric Scooter", "scooter.jpg", 
      850, "Driving", "Electric scooter with long battery life"
    ),
    new ProductItem("Backpack", "e5825e63e4c98339c3c7c8969453e5dc.jpg", 
      120, "Accessories", "Durable travel backpack with multiple compartments"
    )*/
  ];
   
   detailProduit : LignePanier[] = []
   displayPanier : boolean = false;



   
   onProductAdded(product:ProductItem){
    const existingProduct = this.detailProduit.find(item =>item.product.id===product.id)
    if(existingProduct){
      existingProduct.quantite++
    }
    else{
      const newLignePanier = new LignePanier(product, 1);
      this.detailProduit.push(newLignePanier);

    }
    console.log(this.detailProduit);

  }
 showPanier(e:boolean){
  this.displayPanier= e;
 }
}

import { MatTableModule } from '@angular/material/table';
import { Component, Input, OnInit } from '@angular/core';
import { LignePanier } from '../models/LignePanier';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgFor, MatTableModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit{
  @Input() detailsPanier!:LignePanier[];
  displayedColumns: string[] = ['description', 'prix', 'quantite', 'total'];
  ngOnInit(): void {
    //console.log('Je suis dans panier' + this.detailsPanier);
    

  }
  getTotalPrice(): number {
    return this.detailsPanier.reduce((acc, item) => acc + (item.quantite * item.product.prix), 0);
}

}

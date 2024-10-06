import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { ProductItem } from '../models/ProductItem';

@Component({
  selector: 'app-produit-item',
  standalone: true,
  imports: [],
  templateUrl: './produit-item.component.html',
  styleUrl: './produit-item.component.css'
})
export class ProduitItemComponent {
  @Input() product!: ProductItem 
  @Output() selectedProduct = new EventEmitter<ProductItem>

  addToPanier(){
    this.selectedProduct.emit(this.product)
  }
  getColor(): string{
    if(this.product.stock==0){
      return "red"
    }
    else{
      return "green"
    }
    
  }
  getState():string{
    if(this.product.stock==0){
      return "En rupture de stock"
    }
    else{
      return "en stock"
    }
    

  }
}

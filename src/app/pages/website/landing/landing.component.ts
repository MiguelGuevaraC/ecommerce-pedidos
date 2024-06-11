import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data.map(product => ({
        ...product,
        quantity: 1
      }));
    });
  }

  incrementStock(product: Product) {
    if (product.quantity! < product.stock) {
      product.quantity!++;
    }
  }

  decrementStock(product: Product) {
    if (product.quantity! > 1) {
      product.quantity!--;
    }
  }

  addToCart(product: Product) {
    console.log(`Se agregó ${product.quantity} de ${product.name} al carrito`);
  }

  getProductImage(route: string){
    return this.productService.getProductImage(route);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// Interfaces
import { Product } from '../../../interfaces/product';
import { Category } from '../../../interfaces/category';

// Services
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    LayoutComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  categories: Category[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    purchase_price: 0,
    sale_price: 0,
    stock: 0,
    category: { id: 0, name: '', images: [] },
    images: []
  };
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
    });
  }

  getCategories() {
    this.categoryService.getCategory().subscribe(response => {
      this.categories = response.data;
    });
  }

  getProductImage(route: string){
    return this.productService.getProductImage(route);
  }

}

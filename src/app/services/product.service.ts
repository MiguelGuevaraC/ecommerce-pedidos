import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constant } from "./config";
import { Observable} from 'rxjs';
import { ProductResponse } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})

export class ProductService{

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<ProductResponse>(Constant.BASE_URL + Constant.METHODS.GET_ALL_PRODUCT);
  }

  getProductsByCategory(id: number){
    return this.http.get<ProductResponse>(Constant.BASE_URL + Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY + id);
  }

  getProductById(productId: number){
    return this.http.get<ProductResponse>(Constant.BASE_URL + Constant.METHODS.GET_PRODUCT_BY_ID + productId);
  }

  getProductImage(route: string){
    return Constant.BASE_BACK + route;
  }

}

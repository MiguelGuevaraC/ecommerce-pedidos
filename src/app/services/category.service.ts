import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constant } from "./config";
import { CategoryResponse } from "../interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService{
  constructor(private http: HttpClient){}

  getCategory(){
    return this.http.get<CategoryResponse>(Constant.BASE_URL + Constant.METHODS.GET_ALL_CATEGORY);
  }

}

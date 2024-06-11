import { Image } from "./image";

export interface CategoryResponse{
  data: Category[]
}

export interface Category{
  id: number,
  name: string,
  images: Image[];
}

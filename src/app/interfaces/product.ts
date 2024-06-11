import { Category } from "./category"
import { Image } from "./image"

export interface ProductResponse{
  data: Product[]
}

export interface Product {
  id: number,
  name: string,
  description: string,
  purchase_price: number,
  sale_price: number,
  stock: number,
  category: Category,
  images: Image[],
  quantity?: number
}

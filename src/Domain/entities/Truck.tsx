import { Movement } from "./Movement";
import { Product } from "./Product";

export interface Truck {
  id?: string;
  name: string;
  brand: string;
  description: string;
  movements?: Movement[]
  products?: Product[]
}

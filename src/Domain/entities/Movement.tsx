import { Product } from "./Product";
import { Truck } from "./Truck";
import { User } from "./User";

export interface Movement {
  id?: string;
  product_id: string;
  user_id: string;
  truck_id: string;
  date_time?:number;
  quantity: number;
  reason: string;
  product: Product[];
  user?: User;
  truck: Truck[];
}

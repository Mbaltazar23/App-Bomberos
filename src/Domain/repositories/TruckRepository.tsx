import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { Truck } from "../entities/Truck";

export interface TruckRepository {
  getAll(): Promise<Truck[]>;
  create(truck: Truck): Promise<ResponseApiBombero>;
  update(truck: Truck): Promise<ResponseApiBombero>;
  remove(truck: Truck): Promise<ResponseApiBombero>;
}

import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { Movement } from "../entities/Movement";
import { Truck } from "../entities/Truck";

export interface MovementRepository {
  findByMovementsForTruck(id_user:string): Promise<Truck[]>
  create(movement: Movement): Promise<ResponseApiBombero>;
  update(movement: Movement): Promise<ResponseApiBombero>;
  remove(movement: Movement): Promise<ResponseApiBombero>;
}

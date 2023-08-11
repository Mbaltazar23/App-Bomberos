import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { Movement } from "../entities/Movement";

export interface MovementRepository {
  findByMovementsForUser(id_user:string): Promise<Movement[]>;
  create(movement: Movement): Promise<ResponseApiBombero>;
  update(movement: Movement): Promise<ResponseApiBombero>;
  remove(movement: Movement): Promise<ResponseApiBombero>;
}

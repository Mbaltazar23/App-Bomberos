import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { User } from "../entities/User";

export interface UserRepository {
  getAll(user:User): Promise<User[]>;
  create(user: User): Promise<ResponseApiBombero>;
  update(user: User): Promise<ResponseApiBombero>;
  remove(user: User): Promise<ResponseApiBombero>;
}

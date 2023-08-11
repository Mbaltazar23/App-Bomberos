import { AxiosError } from "axios";
import { Movement } from "../../Domain/entities/Movement";
import { User } from "../../Domain/entities/User";
import { MovementRepository } from "../../Domain/repositories/MovementRepository";
import { ApiBombero } from "../sources/remote/api/ApiBombero";
import { ResponseApiBombero } from "../sources/remote/models/ResponseApiBombero";

export class MovementRepositoryImpl implements MovementRepository {
  async findByMovementsForUser(id_user: string): Promise<Movement[]> {
    try {
      const response = await ApiBombero.get<Movement[]>(
        `/movement/findByUser/${id_user}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }

  async create(movement: Movement): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.post<ResponseApiBombero>(
        "/movement/create",
        movement
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async update(movement: Movement): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.put<ResponseApiBombero>(
        "/movement/update",
        movement
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async remove(movement: Movement): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.delete<ResponseApiBombero>(
        `/movement/delete/${movement.id}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}

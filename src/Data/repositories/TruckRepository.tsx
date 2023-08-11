import { AxiosError } from "axios";
import { ResponseApiBombero } from "../sources/remote/models/ResponseApiBombero";
import { TruckRepository } from "../../Domain/repositories/TruckRepository";
import { ApiBombero } from "../sources/remote/api/ApiBombero";
import { Truck } from "../../Domain/entities/Truck";

export class TruckRepositoryImpl implements TruckRepository {
    
  async getAll(): Promise<Truck[]> {
    try {
      const response = await ApiBombero.get<Truck[]>("/trucks/getAll");
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }

  async create(truck: Truck): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.post<ResponseApiBombero>(
        "/trucks/create",
        truck
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

  async update(truck: Truck): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.put<ResponseApiBombero>(
        "/trucks/update",
        truck
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

  async remove(truck: Truck): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.delete<ResponseApiBombero>(
        `/trucks/delete/${truck.id}`
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

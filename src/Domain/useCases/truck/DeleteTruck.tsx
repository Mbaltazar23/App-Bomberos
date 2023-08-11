import { TruckRepositoryImpl } from "../../../Data/repositories/TruckRepository";
import { Truck } from "../../entities/Truck";

const { remove } = new TruckRepositoryImpl();

export const DeleteTruckUseCase = async (truck: Truck) => {
  return await remove(truck);
};

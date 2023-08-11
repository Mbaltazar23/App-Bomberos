import { TruckRepositoryImpl } from "../../../Data/repositories/TruckRepository";
import { Truck } from "../../entities/Truck";

const { update } = new TruckRepositoryImpl();

export const UpdateTruckUseCase = async (truck: Truck) => {
  return await update(truck);
};

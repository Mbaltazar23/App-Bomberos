import { TruckRepositoryImpl } from "../../../Data/repositories/TruckRepository";
import { Truck } from "../../entities/Truck";

const { create } = new TruckRepositoryImpl();

export const CreateTruckUseCase = async (truck: Truck) => {
  return await create(truck);
};

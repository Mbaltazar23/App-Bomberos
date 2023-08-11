import { TruckRepositoryImpl } from "../../../Data/repositories/TruckRepository";

const { getAll } = new TruckRepositoryImpl();

export const GetAllTruckUseCase = async () => {
  return await getAll();
};

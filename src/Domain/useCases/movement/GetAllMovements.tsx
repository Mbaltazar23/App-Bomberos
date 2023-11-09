import { MovementRepositoryImpl } from "../../../Data/repositories/MovementRepository";

const { findByMovementsForTruck } = new MovementRepositoryImpl();

export const GetAllMovementsUseCase = async (id_user: string) => {
  return await findByMovementsForTruck(id_user);
};

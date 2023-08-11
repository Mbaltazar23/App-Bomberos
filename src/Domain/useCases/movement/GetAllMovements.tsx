import { MovementRepositoryImpl } from "../../../Data/repositories/MovementRepository";

const { findByMovementsForUser } = new MovementRepositoryImpl();

export const GetAllMovementsUseCase = async (id_user: string) => {
  return await findByMovementsForUser(id_user);
};

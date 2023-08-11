import { MovementRepositoryImpl } from "../../../Data/repositories/MovementRepository";
import { Movement } from "../../entities/Movement";

const { update } = new MovementRepositoryImpl();

export const UpdateMovementUseCase = async (movement: Movement) => {
  return await update(movement);
};

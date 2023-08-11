import { MovementRepositoryImpl } from "../../../Data/repositories/MovementRepository";
import { Movement } from "../../entities/Movement";

const { remove } = new MovementRepositoryImpl();

export const DeleteMovementUseCase = async (movement: Movement) => {
  return await remove(movement);
};

import { MovementRepositoryImpl } from "../../../Data/repositories/MovementRepository";
import { Movement } from "../../entities/Movement";

const { create } = new MovementRepositoryImpl();

export const CreateMovementUseCase = async (movement: Movement) => {
  return await create(movement);
};

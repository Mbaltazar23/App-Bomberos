import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";

const { remove } = new UserRepositoryImpl();

export const DeleteUserUseCase = async (user: User) => {
  return await remove(user);
};

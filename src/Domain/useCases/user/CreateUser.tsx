import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";

const { create } = new UserRepositoryImpl();

export const CreateUserUseCase = async (user: User) => {
  return await create(user);
};

import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";

const { getAll } = new UserRepositoryImpl();

export const GetAllUsersUseCase = async (user: User) => {
  return await getAll(user);
};

import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository"
import { User } from "../../entities/User"

const { getAllOperators } = new UserRepositoryImpl()

export const GetAllOperatorsUseCase = async (id_user: string) => {
    return await getAllOperators(id_user)
}

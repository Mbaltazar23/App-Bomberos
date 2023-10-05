import { ResponsibilityRepositoryImpl } from "../../../Data/repositories/ResponsibilityRepository"

const { getAllResponsibilities } = new ResponsibilityRepositoryImpl()

export const GetAllResponsibilitysUseCase = async (id_user: string) => {
    return await getAllResponsibilities(id_user)
}

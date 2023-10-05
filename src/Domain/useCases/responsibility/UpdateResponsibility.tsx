import { ResponsibilityRepositoryImpl } from "../../../Data/repositories/ResponsibilityRepository"
import { Responsibility } from "../../entities/Responsibility"

const { update } = new ResponsibilityRepositoryImpl()

export const UpdateResponsibilityUseCase = async (responsibility: Responsibility) => {
    return await update(responsibility)
}

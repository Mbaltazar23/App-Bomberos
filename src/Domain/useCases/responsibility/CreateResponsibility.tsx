import { ResponsibilityRepositoryImpl } from '../../../Data/repositories/ResponsibilityRepository'
import { Responsibility } from '../../entities/Responsibility'

const { create } = new ResponsibilityRepositoryImpl()

export const CreateResponsibilityUseCase = async (responsability: Responsibility) => {
    return await create(responsability)
}

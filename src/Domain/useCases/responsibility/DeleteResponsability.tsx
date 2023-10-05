import { ResponsibilityRepositoryImpl } from '../../../Data/repositories/ResponsibilityRepository'
import { Responsibility } from '../../entities/Responsibility'

const { remove } = new ResponsibilityRepositoryImpl()

export const DeleteResponsabilityUseCase = async (responsability: Responsibility) => {
    return await remove(responsability)
}

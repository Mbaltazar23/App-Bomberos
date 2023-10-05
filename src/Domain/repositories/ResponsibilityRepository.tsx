import { ResponseApiBombero } from '../../Data/sources/remote/models/ResponseApiBombero'
import { Responsibility } from '../entities/Responsibility'

export interface ResponsibilityRepository {
    getAllResponsibilities(id_user:string): Promise<Responsibility[]>
    create(responsibility: Responsibility): Promise<ResponseApiBombero>;
    update(responsibility: Responsibility): Promise<ResponseApiBombero>
    remove(responsibility: Responsibility): Promise<ResponseApiBombero>
}

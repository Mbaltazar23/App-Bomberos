import { ResponsibilityRepository } from '../../Domain/repositories/ResponsibilityRepository';
import { Responsibility } from '../../Domain/entities/Responsibility';
import { ResponseApiBombero } from '../sources/remote/models/ResponseApiBombero';
import { AxiosError } from 'axios';
import { ApiBombero } from '../sources/remote/api/ApiBombero';

export class ResponsibilityRepositoryImpl implements ResponsibilityRepository {

    async getAllResponsibilities(id_user: string): Promise<Responsibility[]> {
        try {
            const response = await ApiBombero.get<Responsibility[]>(`/responsability/getAll/${id_user}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    };

    async create(responsibility: Responsibility): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.post<ResponseApiBombero>("/responsability/create", responsibility);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseApiBombero = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    };

    async update(responsibility: Responsibility): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.put<ResponseApiBombero>("/responsability/update", responsibility);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseApiBombero = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async remove(responsibility: Responsibility): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.delete<ResponseApiBombero>(`/responsability/delete/${responsibility.id
                }`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseApiBombero = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}

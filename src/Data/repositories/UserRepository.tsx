import { AxiosError } from "axios";
import { ResponseApiBombero } from "../sources/remote/models/ResponseApiBombero";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ApiBombero } from "../sources/remote/api/ApiBombero";
import { User } from "../../Domain/entities/User";

export class UserRepositoryImpl implements UserRepository {

    async getAll(user: User): Promise<User[]> {
        try {
            const response = await ApiBombero.get<User[]>(`/users/getAll/${user.id
                }`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async getAllOperators(id_user: string): Promise<User[]> {
        try {
            const response = await ApiBombero.get<User[]>(`/users/getAllOperators/${id_user}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async create(user: User): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.post<ResponseApiBombero>("/users/create", user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseApiBombero = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async update(user: User): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.put<ResponseApiBombero>("/users/update", user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseApiBombero = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async remove(user: User): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.delete<ResponseApiBombero>(`/users/delete/${user.id
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

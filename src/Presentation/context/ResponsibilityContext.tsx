import { createContext, useState } from "react";
import { GetAllResponsibilitysUseCase } from "../../Domain/useCases/responsibility/GetAllResponsibilitys";
import { DeleteResponsabilityUseCase } from "../../Domain/useCases/responsibility/DeleteResponsability";
import { UpdateResponsibilityUseCase } from "../../Domain/useCases/responsibility/UpdateResponsibility";
import { CreateResponsibilityUseCase } from "../../Domain/useCases/responsibility/CreateResponsibility";
import { GetAllOperatorsUseCase } from "../../Domain/useCases/user/GetAllOperators";
import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { Responsibility } from "../../Domain/entities/Responsibility";
import { User } from "../../Domain/entities/User";

export interface ResponsibilityContextProps {
    operators: User[];
    responsibilitys: Responsibility[];
    getResponsibilitysByUser(id_user: string): Promise<void>
    getAllOperators(id_user: string): Promise<void>
    create(responsibility: Responsibility): Promise<ResponseApiBombero>
    update(responsibility: Responsibility): Promise<ResponseApiBombero>
    remove(responsibility: Responsibility): Promise<ResponseApiBombero>
}

export const ResponsibilityContext = createContext({} as ResponsibilityContextProps);

export const ResponsibilityProvider = ({ children }: any) => {
    const [operators, setOperators] = useState<User[]>([])
    const [responsibilitys, setResponsibilitys] = useState<Responsibility[]>([])

    const getResponsibilitysByUser = async (id_user: string): Promise<void> => {
        const result = await GetAllResponsibilitysUseCase(id_user)
        setResponsibilitys(result)
    }

    const getAllOperators = async (id_user: string) : Promise<void> => {
        const result = await GetAllOperatorsUseCase(id_user);
        setOperators(result)
    }

    const create = async (responsibility: Responsibility): Promise<ResponseApiBombero> => {
        const response = await CreateResponsibilityUseCase(responsibility);
        getResponsibilitysByUser(responsibility.user_id)
        getAllOperators(responsibility.user_id)
        return response;
    }

    const update = async (responsibility: Responsibility): Promise<ResponseApiBombero> => {
        const response = await UpdateResponsibilityUseCase(responsibility)
        getResponsibilitysByUser(responsibility.user_id)
        getAllOperators(responsibility.user_id)
        return response;
    }

    const remove = async (responsibility: Responsibility): Promise<ResponseApiBombero> => {
        const response = await DeleteResponsabilityUseCase(responsibility);
        getResponsibilitysByUser(responsibility.user_id)
        getAllOperators(responsibility.user_id)
        return response
    }

    return (
        <ResponsibilityContext.Provider
            value={{
                operators,
                responsibilitys,
                getResponsibilitysByUser,
                getAllOperators,
                create,
                update,
                remove
            }}>
            {children}
        </ResponsibilityContext.Provider>
    )
}
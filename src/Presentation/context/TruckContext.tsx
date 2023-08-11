import { createContext, useState } from "react";
import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { GetAllTruckUseCase } from "../../Domain/useCases/truck/GetAllTruck";
import { CreateTruckUseCase } from "../../Domain/useCases/truck/CreateTruck";
import { UpdateTruckUseCase } from "../../Domain/useCases/truck/UpdateTruck";
import { DeleteTruckUseCase } from "../../Domain/useCases/truck/DeleteTruck";
import { Truck } from "../../Domain/entities/Truck";

export interface TruckContext {
  trucks: Truck[];
  getAllTrucks(): Promise<void>;
  create(truck: Truck): Promise<ResponseApiBombero>;
  update(truck: Truck): Promise<ResponseApiBombero>;
  remove(truck: Truck): Promise<ResponseApiBombero>;
}

export const TruckContext = createContext({} as TruckContext);

export const TruckProvider = ({ children }: any) => {
  const [trucks, setTrucks] = useState<Truck[]>([]);

  const getAllTrucks = async () => {
    const result = await GetAllTruckUseCase();
    setTrucks(result);
  };

  const create = async (truck: Truck): Promise<ResponseApiBombero> => {
    const response = await CreateTruckUseCase(truck);
    getAllTrucks();
    return response;
  };

  const update = async (truck: Truck): Promise<ResponseApiBombero> => {
    const response = await UpdateTruckUseCase(truck);
    getAllTrucks();
    return response;
  };

  const remove = async (truck: Truck): Promise<ResponseApiBombero> => {
    const response = await DeleteTruckUseCase(truck);
    getAllTrucks();
    return response;
  };

  return (
    <TruckContext.Provider
      value={{
        trucks,
        getAllTrucks,
        create,
        update,
        remove,
      }}
    >
      {children}
    </TruckContext.Provider>
  );
};

import React, { createContext, useState } from "react";
import { GetAllStockProductsUseCase } from "../../Domain/useCases/product/GetAllStockProducts";
import { GetAllMovementsUseCase } from "../../Domain/useCases/movement/GetAllMovements";
import { CreateMovementUseCase } from "../../Domain/useCases/movement/CreateMovement";
import { UpdateMovementUseCase } from "../../Domain/useCases/movement/UpdateMovement";
import { DeleteMovementUseCase } from "../../Domain/useCases/movement/DeleteMovement";
import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { GetAllTruckUseCase } from "../../Domain/useCases/truck/GetAllTruck";
import { Movement } from "../../Domain/entities/Movement";
import { Product } from "../../Domain/entities/Product";
import { Truck } from "../../Domain/entities/Truck";

export interface MovementContextProps {
  movements: Movement[];
  products: Product[];
  trucks: Truck[];
  getAllStockProducts(): Promise<void>;
  getAllTrucks(): Promise<void>;
  getMovementsByUser(id_user: string): Promise<void>;
  create(Movement: Movement): Promise<ResponseApiBombero>;
  update(Movement: Movement): Promise<ResponseApiBombero>;
  remove(Movement: Movement): Promise<ResponseApiBombero>;
}

export const MovementContext = createContext({} as MovementContextProps);

export const MovementProvider = ({ children }: any) => {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [trucks, setTrucks] = useState<Truck[]>([]);

  const getAllStockProducts = async (): Promise<void> => {
    const result = await GetAllStockProductsUseCase();
    setProducts(result);
  };

  const getAllTrucks = async (): Promise<void> => {
    const result = await GetAllTruckUseCase();
    setTrucks(result);
  };

  const getMovementsByUser = async (id_user: string) => {
    const result = await GetAllMovementsUseCase(id_user);
    setMovements(result);
  };

  const create = async (movement: Movement): Promise<ResponseApiBombero> => {
    const response = await CreateMovementUseCase(movement);
    getMovementsByUser(movement.user_id);
    getAllStockProducts();
    getAllTrucks();
    return response;
  };

  const update = async (movement: Movement): Promise<ResponseApiBombero> => {
    const response = await UpdateMovementUseCase(movement);
    getMovementsByUser(movement.user_id);
    getAllStockProducts();
    getAllTrucks();
    return response;
  };

  const remove = async (movement: Movement): Promise<ResponseApiBombero> => {
    const response = await DeleteMovementUseCase(movement);
    getMovementsByUser(movement.user_id);
    getAllStockProducts();
    getAllTrucks();
    return response;
  };

  return (
    <MovementContext.Provider
      value={{
        movements,
        products,
        trucks,
        getMovementsByUser,
        getAllStockProducts,
        getAllTrucks,
        create,
        update,
        remove,
      }}
    >
      {children}
    </MovementContext.Provider>
  );
};

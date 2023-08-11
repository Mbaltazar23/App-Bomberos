import { ProductRepositoryImp } from "../../../Data/repositories/ProductRepository";

const { getAllProductsByStock } = new ProductRepositoryImp();

export const GetAllStockProductsUseCase = async () => {
  return await getAllProductsByStock();
};

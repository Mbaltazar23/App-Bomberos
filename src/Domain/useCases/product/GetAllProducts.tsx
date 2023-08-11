import { ProductRepositoryImp } from "../../../Data/repositories/ProductRepository";

const { getAll } = new ProductRepositoryImp();
export const GetAllProductsUseCase = async () => {
  return await getAll();
};

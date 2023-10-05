import React, { useState } from "react";
import { UpdateWithImagesProductUseCase } from "../../Domain/useCases/product/UpdateWithImagesProduct";
import { GetAllProductsUseCase } from "../../Domain/useCases/product/GetAllProducts";
import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { CreateProductUseCase } from "../../Domain/useCases/product/CreateProduct";
import { DeleteProductUseCase } from "../../Domain/useCases/product/DeleteProduct";
import { UpdateProductUseCase } from "../../Domain/useCases/product/UpdateProduct";
import { createContext } from "react";
import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from "expo-image-picker";

export interface ProductContextProps {
  products: Product[];
  getAllProducts(): Promise<void>;
  create(
    product: Product,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiBombero>;
  updateWithImages(
    product: Product,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiBombero>;
  update(product: Product): Promise<ResponseApiBombero>;
  remove(product: Product): Promise<ResponseApiBombero>;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async (): Promise<void> => {
    const result = await GetAllProductsUseCase();
    setProducts(result);
  };


  const create = async (
    product: Product,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiBombero> => {
    const response = await CreateProductUseCase(product, file);
    getAllProducts();
    return response;
  };

  const update = async (product: Product): Promise<ResponseApiBombero> => {
    const response = await UpdateProductUseCase(product);
    getAllProducts();
    return response;
  };

  const updateWithImages = async (
    product: Product,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiBombero> => {
    const response = await UpdateWithImagesProductUseCase(product, file);
    getAllProducts();
    return response;
  };

  const remove = async (product: Product): Promise<ResponseApiBombero> => {
    const response = await DeleteProductUseCase(product);
    getAllProducts();
    return response;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getAllProducts,
        create,
        updateWithImages,
        update,
        remove,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

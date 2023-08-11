import { Product } from "../../Domain/entities/Product";
import { ResponseApiBombero } from "../sources/remote/models/ResponseApiBombero";
import { ProductRepository } from "../../Domain/repositories/ProductRepository";
import { AxiosError } from "axios";
import mime from "mime"
import * as ImagePicker from "expo-image-picker";
import {
  ApiBombero,
  ApiBomberoWithImage,
} from "../sources/remote/api/ApiBombero";

export class ProductRepositoryImp implements ProductRepository {
  
  async getAll(): Promise<Product[]> {
    try {
      const response = await ApiBombero.get<Product[]>("/products/getAll"
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve([]);
    }
  }

  async getAllProductsByStock(): Promise<Product[]> {
    try {
      const response = await ApiBombero.get<Product[]>("/products/getAllStock"
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve([]);
    }
  }

  async create(
    product: Product,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiBombero> {
    try {
      let data = new FormData();
      data.append("image", {
        uri: file.uri,
        // @ts-ignore
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      });

      data.append("product", JSON.stringify(product));
      const response = await ApiBomberoWithImage.post<ResponseApiBombero>(
        "/products/create",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async update(product: Product): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.put<ResponseApiBombero>(
        "/products/update",
        product
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async updateWithImages(
    product: Product,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApiBombero> {
    try {
      let data = new FormData();

      data.append("image", {
        uri: file.uri,
        // @ts-ignore
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      });
      data.append("product", JSON.stringify(product));
      const response = await ApiBomberoWithImage.put<ResponseApiBombero>(
        "/products/updateWithImages",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async remove(product: Product): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.delete<ResponseApiBombero>(
        `/products/delete/${product.id}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiBombero = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}

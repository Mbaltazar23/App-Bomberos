import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import * as ImagePicker from "expo-image-picker";
import { Product } from "../entities/Product";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getAllProductsByStock(): Promise<Product[]>
  create(
    product: Product,
    files: ImagePicker.ImageInfo
  ): Promise<ResponseApiBombero>;
  update(product: Product): Promise<ResponseApiBombero>;
  updateWithImages(
    product: Product,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiBombero>;

  remove(product: Product): Promise<ResponseApiBombero>;
}

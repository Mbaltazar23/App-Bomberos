import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiBombero } from "../sources/remote/api/ApiBombero";
import { ResponseApiBombero } from "../sources/remote/models/ResponseApiBombero";

export class AuthRepositoryImpl implements AuthRepository {
	
  async login(email: string, password: string): Promise<ResponseApiBombero> {
    try {
      const response = await ApiBombero.post<ResponseApiBombero>(
        "/users/login",
        {
          email: email,
          password: password,
        }
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

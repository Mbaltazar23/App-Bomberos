import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";

export interface AuthRepository {

  login(email: string, password: string): Promise<ResponseApiBombero>;

}

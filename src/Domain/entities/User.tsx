import { Rol } from "./Rol";

export interface User {
  id?: string;
  name: string;
  username: string;
  password: string;
  id_rol?: string;
  session_token?: string;
  roles: Rol[];
}

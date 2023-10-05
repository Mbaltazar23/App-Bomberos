import { User } from "./User";

export interface Responsibility {
    id?: string;
    user_id?: string;
    supervisor_id: string;
    date_time?: number;
    user_name?: string;
    username?: string;
    rol_user?: string;
    supervisor: User[]
}

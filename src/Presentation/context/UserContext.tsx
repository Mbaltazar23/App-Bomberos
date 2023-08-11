import React, { createContext, useEffect, useState } from "react";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";
import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { GetAllUsersUseCase } from "../../Domain/useCases/user/GetAllUsers";
import { CreateUserUseCase } from "../../Domain/useCases/user/CreateUser";
import { UpdateUserUseCase } from "../../Domain/useCases/user/UpdateUser";
import { DeleteUserUseCase } from "../../Domain/useCases/user/DeleteUser";
import { User } from "../../Domain/entities/User";

export const userInitialState: User = {
  id: "",
  name: "",
  username: "",
  password: "",
  session_token: "",
  roles: [],
};

export interface UserConextProps {
  user: User;
  users: User[];
  getAllUsers(): Promise<void>;
  create(user: User): Promise<ResponseApiBombero>;
  update(user: User): Promise<ResponseApiBombero>;
  remove(user: User): Promise<ResponseApiBombero>;
  saveUserSesion: (user: User) => Promise<void>;
  getUserSession: () => Promise<void>;
  removeUserSession: () => Promise<void>;
}

export const UserConext = createContext({} as UserConextProps);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(userInitialState);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUserSession();
  }, []);

  const getAllUsers = async (): Promise<void> => {
    const result = await GetAllUsersUseCase(user);
    setUsers(result);
  };

  const create = async (user: User): Promise<ResponseApiBombero> => {
    const response = await CreateUserUseCase(user);
    getAllUsers();
    return response;
  };

  const update = async (user: User): Promise<ResponseApiBombero> => {
    const response = await UpdateUserUseCase(user);
    getAllUsers();
    return response;
  };

  const remove = async (user: User): Promise<ResponseApiBombero> => {
    const response = await DeleteUserUseCase(user);
    getAllUsers();
    return response;
  };

  const saveUserSesion = async (user: User) => {
    await SaveUserLocalUseCase(user);
    setUser(user);
  };

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };

  const removeUserSession = async () => {
    await RemoveUserLocalUseCase();
    setUser(userInitialState);
  };

  return (
    <UserConext.Provider
      value={{
        user,
        users,
        getAllUsers,
        create,
        update,
        remove,
        saveUserSesion,
        getUserSession,
        removeUserSession,
      }}
    >
      {children}
    </UserConext.Provider>
  );
};

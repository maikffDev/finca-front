import { IUser, IUserRequest } from "../types/user";
import { BASE_API_URL } from "./api";

const USER_ENDPOINT = "/users";

export const createUser = async (user: IUserRequest): Promise<IUser> => {
  const response = await BASE_API_URL.post(USER_ENDPOINT, user);
  return response.data;
};

export const getUserById = async (userId: number): Promise<IUser> => {
  const response = await BASE_API_URL.get(`${USER_ENDPOINT}/${userId}`);
  return response.data;
};

export const getUserByUsername = async (username: string): Promise<IUser> => {
  const response = await BASE_API_URL.get(`${USER_ENDPOINT}/getByUsername/${username}`);
  return response.data;
};

export const updateUser = async (userId: number, user: IUserRequest): Promise<IUser> => {
  const response = await BASE_API_URL.put(`${USER_ENDPOINT}/${userId}`, user);
  return response.data;
};

export const deleteUser = async (userId: number): Promise<IUser> => {
  const response = await BASE_API_URL.delete(`${USER_ENDPOINT}/${userId}`);
  return response.data;
};

export const logicalDeletionUser = async (userId: number): Promise<IUser> => {
  const response = await BASE_API_URL.delete(`${USER_ENDPOINT}/logicalDeletion/${userId}`);
  return response.data;
};
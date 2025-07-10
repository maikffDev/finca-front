import axios from "axios";
import { IUser, IUserRequest } from "../types/user";


const BASE_URL = "http://localhost:8080/api/users";

export const createUser = async (user: IUserRequest): Promise<IUser> => {
  const response = await axios.post(BASE_URL, user);
  return response.data;
};

export const getUserById = async (userId: number): Promise<IUser> => {
  const response = await axios.get(`${BASE_URL}/${userId}`);
  return response.data;
};

export const getUserByUsername = async (username: string): Promise<IUser> => {
  const response = await axios.get(`${BASE_URL}/getByUsername/${username}`);
  return response.data;
};

export const updateUser = async (userId: number, user: IUserRequest): Promise<IUser> => {
  const response = await axios.put(`${BASE_URL}/${userId}`, user);
  return response.data;
};

export const deleteUser = async (userId: number): Promise<IUser> => {
  const response = await axios.delete(`${BASE_URL}/${userId}`);
  return response.data;
};

export const logicalDeletionUser = async (userId: number): Promise<IUser> => {
  const response = await axios.delete(`${BASE_URL}/logicalDeletion/${userId}`);
  return response.data;
};
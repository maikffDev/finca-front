// src/api/finca-api.ts
import type { IFinca, IFincaRequest } from "../types/finca";

import { BASE_API_URL } from "./api";


const FINCA_ENDPOINT = "/fincas";

export const createFinca = async (finca: IFincaRequest): Promise<IFinca> => {
  const response = await BASE_API_URL.post(FINCA_ENDPOINT, finca);
  return response.data;
};

export const getAllFincas = async (): Promise<IFinca[]> => {
  const response = await BASE_API_URL.get(FINCA_ENDPOINT);
  return response.data;
};

export const getFincaById = async (fincaId: number): Promise<IFinca> => {
  const response = await BASE_API_URL.get(`${FINCA_ENDPOINT}/${fincaId}`);
  return response.data;
};

export const getFincaByUsername = async (username: string): Promise<IFinca> => {
  const response = await BASE_API_URL.get(`${FINCA_ENDPOINT}/getByUser/${username}`);
  return response.data;
};

export const updateFinca = async (fincaId: number, finca: IFincaRequest): Promise<IFinca> => {
  const response = await BASE_API_URL.put(`${FINCA_ENDPOINT}/${fincaId}`, finca);
  return response.data;
};

export const deleteFinca = async (fincaId: number): Promise<IFinca> => {
  const response = await BASE_API_URL.delete(`${FINCA_ENDPOINT}/${fincaId}`);
  return response.data;
};

export const logicalDeletionFinca = async (fincaId: number): Promise<IFinca> => {
  const response = await BASE_API_URL.delete(`${FINCA_ENDPOINT}/logicalDeletion/${fincaId}`);
  return response.data;
};

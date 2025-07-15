export interface IFinca {
  id: number;
  name: string;
  location: string;
  pricePerHour: string;
  active: boolean;
  imagesUrls:string[];
}

export interface IFincaResponse {
  id: number;
  name: string;
  location: string;
  pricePerHour: string;
  active: boolean;
  imagesUrls:string[];
}

export interface IFincaRequest {
  name: string;
  ubication: string;
  pricePerHour: string;
  active?: boolean;
}
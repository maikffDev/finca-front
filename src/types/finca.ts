export interface IFinca {
  id: number;
  name: string;
  location: string;
  pricePerHour: string;
  active: boolean;
}

export interface IFincaRequest {
  name: string;
  ubication: string;
  pricePerHour: string;
  active?: boolean;
}
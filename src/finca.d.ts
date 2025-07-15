export interface Imagen {
  url: string;
}

export interface Amenity {
  nombre: string;
}

export interface Comentario {
  id: number;
  usuario: string;
  mensaje: string;
}

export interface Finca {
  id: number;
  name: string;
  location: string;
  description: string;
  pricePerHour: string;
  schemaIni: string;
  schemaEnd: string;
  imagenes: { id: number; url: string }[];
  amenitis: { id: number; nombre: string }[];
  comentarios: Comentario[];
}


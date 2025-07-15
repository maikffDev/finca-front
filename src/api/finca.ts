import { Finca } from "../../src/finca";

export async function getFincaById(id: string): Promise<Finca> {
  const res = await fetch(`/api/fincas/${id}`);
  if (!res.ok) throw new Error("Error al obtener la finca");
  return res.json();
}
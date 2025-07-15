import type { IFinca } from "../types/finca";

const fincasMock: IFinca[] = [
  {
    id: 1,
    name: "Finca Los Olivos",
    location: "Mendoza",
    pricePerHour: "1500",
    active: true,
    imagesUrls: [
      "https://ucarecdn.com/6d2901b5-633f-45ac-9e12-d7e21d06a7c2/-/preview/"
    ]
  },
  {
    id: 2,
    name: "Finca El Amanecer",
    location: "Tucumán",
    pricePerHour: "1200",
    active: true,
    imagesUrls: [
      "https://www.sublimespain.com/wp-content/uploads/Finca-in-Spain.jpg"
    ]
  },
  {
    id: 3,
    name: "Finca Las Cumbres",
    location: "San Luis",
    pricePerHour: "1350",
    active: false,
    imagesUrls: [
      "https://www.fincasquindio.com.co/wp-content/uploads/2022/02/finca_tipica_quindio.jpg"
    ]
  }
];

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const mockFincaService = {
  getAllFincas: async (): Promise<IFinca[]> => {
    await delay(800);
    return fincasMock;
  },
  getFincaById: async (id: number): Promise<IFinca | null> => {
    await delay(500);
    return fincasMock.find(f => f.id === id) || null;
  },
  createFinca: async (newFinca: IFinca): Promise<IFinca> => {
    await delay(500);
    fincasMock.push(newFinca);
    return newFinca;
  }
};


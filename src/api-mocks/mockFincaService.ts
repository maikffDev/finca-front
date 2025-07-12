import { IFinca } from "../types/finca";

const fincasMock: IFinca[] = [
  {
    id: 1,
    name: "Finca Los Olivos",
    location: "Mendoza",
    pricePerHour: "1500",
    active: true,
    imagesUrls: [
      "https://example.com/finca-olivos-1.jpg",
      "https://example.com/finca-olivos-2.jpg"
    ]
  },
  {
    id: 2,
    name: "Finca El Amanecer",
    location: "Tucumán",
    pricePerHour: "1200",
    active: true,
    imagesUrls: [
      "https://example.com/finca-amanecer.jpg"
    ]
  },
  {
    id: 3,
    name: "Finca Las Cumbres",
    location: "San Luis",
    pricePerHour: "1350",
    active: false,
    imagesUrls: []
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


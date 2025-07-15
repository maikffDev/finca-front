import {
  Card,
  CardContent,
  Button,
  TextField,
  Avatar,
  IconButton,
  InputAdornment,
  Typography,
  Box,
  Container,
} from "@mui/material"

import { Search, Person, MoreVert } from "@mui/icons-material"
import img from "../../assets/fotoFincas.jpg"

  interface ActiveReservation {
  id: string
  price: number
  propertyName: string
  reviewerName: string
  reviewerAvatar?: string
  date: string
}

interface PreviousReservation {
  id: string
  propertyName: string
  location: string
  price: string
  description: string
  image: string
  avatar: string
  avatarLetter: string
}

const activeReservations: ActiveReservation[] = [
  {
    id: "1",
    price: 450000,
    propertyName: 'Finca "Los Hermanos"',
    reviewerName: "Reviewer name",
    date: "Date",
  },
  {
    id: "2",
    price: 655000,
    propertyName: 'Finca "Las Heras"',
    reviewerName: "Reviewer name",
    date: "Date",
  },
  {
    id: "3",
    price: 215000,
    propertyName: 'Finca "Amanecer"',
    reviewerName: "Reviewer name",
    date: "Date",
  },
]

const previousReservations: PreviousReservation[] = [
  {
    id: "1",
    propertyName: "Finca 1",
    location: "Ubicación",
    price: "PRECIO",
    description: "Descripción",
    image: img,
    avatar: "/placeholder-user.jpg",
    avatarLetter: "A",
  },
  {
    id: "2",
    propertyName: "Finca 1",
    location: "Ubicación",
    price: "PRECIO",
    description: "Descripción",
    image: img,
    avatar: "/placeholder-user.jpg",
    avatarLetter: "A",
  },
  {
    id: "3",
    propertyName: "Finca 1",
    location: "Ubicación",
    price: "PRECIO",
    description: "Descripción",
    image: img,
    avatar: "/placeholder-user.jpg",
    avatarLetter: "A",
  },
]

//NOTA DE FACU: COMO UN BOLU HICE EL USERPROFILE EN LUGAR DEL HOME
export default function UserProfilePage() {
  const formatPrice = (price: number): string => {
    return `$${price.toLocaleString()}`
  }

  return (
    <div className="bg-[#173753] min-h-screen" style={{ overflowY: "auto" }}>
     
      <Box className="bg-slate-700 px-6 py-4">
        <Container maxWidth="xl">
          <div className="flex items-center justify-between">
           
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Typography variant="h5" className="text-slate-700 font-bold">
                  G
                </Typography>
              </div>
            </div>

           
            <div className="flex-1 max-w-md mx-8">
              <TextField
                fullWidth
                placeholder="Buscar"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search className="text-gray-400 w-4 h-4" />
                    </InputAdornment>
                  ),
                  className: "bg-white rounded-full",
                  style: { borderRadius: "9999px" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "9999px",
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </div>

            <IconButton className="bg-white hover:bg-gray-100 w-12 h-12">
              <Person className="text-slate-700" />
            </IconButton>
          </div>
        </Container>
      </Box>

     
      <Container maxWidth="xl" className="px-6 py-8">
   
        <Box className="mb-12">
          <div className="bg-gray-100 rounded-3xl p-8">
            <Typography variant="h3" className="text-center text-blue-400 mb-8 font-light tracking-wider">
              Reservas Activas
            </Typography>

            <Box className="flex flex-wrap -mx-3">
              {activeReservations.map((reservation) => (
                <div key={reservation.id} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                  <Card className="bg-white rounded-2xl shadow-sm border-0" elevation={1}>
                    <CardContent className="p-6">
                      <Box className="mb-4">
                        <Typography variant="h4" className="font-semibold text-gray-900 mb-1">
                          {formatPrice(reservation.price)}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                          {reservation.propertyName}
                        </Typography>
                      </Box>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar
                            className="w-8 h-8 bg-gray-200 text-gray-600"
                            sx={{ width: 32, height: 32, fontSize: "0.75rem" }}
                          >
                            {reservation.reviewerName.charAt(0)}
                          </Avatar>
                          <div>
                            <Typography variant="body2" className="font-medium text-gray-900">
                              {reservation.reviewerName}
                            </Typography>
                            <Typography variant="caption" className="text-gray-500">
                              {reservation.date}
                            </Typography>
                          </div>
                        </div>

                        <Button
                          size="small"
                          variant="contained"
                          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-1 text-xs normal-case"
                          sx={{
                            backgroundColor: "#f97316",
                            "&:hover": {
                              backgroundColor: "#ea580c",
                            },
                            borderRadius: "9999px",
                            textTransform: "none",
                            fontSize: "0.75rem",
                          }}
                        >
                          cancelar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Box>
          </div>
        </Box>

        
        <Box>
          <Typography variant="h3" className="text-center text-white mb-8 font-light tracking-wider">
            Reservas previas
          </Typography>

          <Box className="flex flex-wrap -mx-3">
            {previousReservations.map((reservation) => (
              <div key={reservation.id} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <Card className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden" elevation={3}>
                  <Box className="p-4 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar
                          className="w-8 h-8 bg-blue-100 text-blue-600"
                          sx={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#dbeafe",
                            color: "#2563eb",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                          }}
                        >
                          {reservation.avatarLetter}
                        </Avatar>
                        <div>
                          <Typography variant="body2" className="font-semibold text-gray-900">
                            {reservation.propertyName}
                          </Typography>
                          <Typography variant="caption" className="text-gray-500">
                            {reservation.location}
                          </Typography>
                        </div>
                      </div>
                      <IconButton size="small" className="w-6 h-6">
                        <MoreVert className="w-4 h-4 text-gray-400" />
                      </IconButton>
                    </div>
                  </Box>

                  <Box className="p-0">
                    <div className="relative p-4">
                      <img
                        src={reservation.image || "/placeholder.svg"}
                        alt={reservation.propertyName}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </div>

                    <Box className="p-4">
                      <Box className="mb-4">
                        <Typography variant="body2" className="font-semibold text-gray-900 mb-1">
                          {reservation.price}
                        </Typography>
                        <Typography variant="caption" className="text-gray-600">
                          {reservation.description}
                        </Typography>
                      </Box>

                      <Button
                        fullWidth
                        variant="contained"
                        className="bg-slate-700 hover:bg-slate-800 text-white rounded-full normal-case"
                        sx={{
                          backgroundColor: "#334155",
                          "&:hover": {
                            backgroundColor: "#1e293b",
                          },
                          borderRadius: "9999px",
                          textTransform: "none",
                          fontSize: "0.875rem",
                          paddingY: "8px",
                        }}
                      >
                        Información
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </div>
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  )
}

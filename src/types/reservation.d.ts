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
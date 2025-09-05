export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isPopular?: boolean;
  ingredients?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  displayOrder: number;
}

export interface RestaurantHours {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
}
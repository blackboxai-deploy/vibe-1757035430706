import { MenuItem, MenuCategory, RestaurantHours, ContactInfo } from '@/types/menu';

export const menuCategories: MenuCategory[] = [
  {
    id: 'tacos',
    name: 'Tacos',
    description: 'Authentic Mexican tacos made fresh daily',
    displayOrder: 1,
  },
  {
    id: 'sides',
    name: 'Sides & Appetizers',
    description: 'Perfect accompaniments to your meal',
    displayOrder: 2,
  },
  {
    id: 'drinks',
    name: 'Beverages',
    description: 'Refreshing drinks and traditional Mexican beverages',
    displayOrder: 3,
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to your Mexican feast',
    displayOrder: 4,
  },
];

export const menuItems: MenuItem[] = [
  // Tacos
  {
    id: 'taco-carnitas',
    name: 'Tacos de Carnitas',
    description: 'Slow-cooked pork shoulder with cilantro, onions, and salsa verde',
    price: 45,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d57c690-9ac9-4060-831b-50e0d2839b34.png',
    category: menuCategories[0],
    isPopular: true,
    ingredients: ['Pork shoulder', 'Corn tortillas', 'Cilantro', 'White onions', 'Salsa verde'],
  },
  {
    id: 'taco-pollo',
    name: 'Tacos de Pollo',
    description: 'Grilled chicken with avocado, pico de gallo, and chipotle sauce',
    price: 42,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ff254f8-7699-41c3-bf51-69fe57ff0249.png',
    category: menuCategories[0],
    ingredients: ['Grilled chicken', 'Corn tortillas', 'Avocado', 'Pico de gallo', 'Chipotle sauce'],
  },
  {
    id: 'taco-carne-asada',
    name: 'Tacos de Carne Asada',
    description: 'Grilled beef with guacamole, salsa roja, and Mexican crema',
    price: 48,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/381b4210-cb29-43ce-940f-e04bd6159569.png',
    category: menuCategories[0],
    isSpicy: true,
    ingredients: ['Grilled beef', 'Corn tortillas', 'Guacamole', 'Salsa roja', 'Mexican crema'],
  },
  {
    id: 'taco-pescado',
    name: 'Tacos de Pescado',
    description: 'Fresh fish with cabbage slaw, lime, and creamy cilantro sauce',
    price: 46,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4c42b4e-4b6a-4b2c-85f9-89a52612db13.png',
    category: menuCategories[0],
    ingredients: ['Fresh white fish', 'Corn tortillas', 'Cabbage slaw', 'Lime', 'Cilantro cream'],
  },
  {
    id: 'taco-veggie',
    name: 'Tacos Vegetarianos',
    description: 'Grilled vegetables with black beans, cheese, and salsa verde',
    price: 38,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9ec5715-3412-4d01-a1b3-d8d0d6c416c3.png',
    category: menuCategories[0],
    isVegetarian: true,
    ingredients: ['Mixed vegetables', 'Black beans', 'Cheese', 'Corn tortillas', 'Salsa verde'],
  },

  // Sides & Appetizers
  {
    id: 'guacamole',
    name: 'Guacamole Tradicional',
    description: 'Fresh avocados with lime, cilantro, and jalapeños, served with tortilla chips',
    price: 32,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f2a6f006-56b6-40c9-8940-5ce1cfbead54.png',
    category: menuCategories[1],
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 'quesadillas',
    name: 'Quesadillas',
    description: 'Cheese quesadillas with choice of chicken or vegetables',
    price: 35,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db53be4c-e25d-4e9b-be84-0cc13c014f9d.png',
    category: menuCategories[1],
  },
  {
    id: 'elote',
    name: 'Elote Mexicano',
    description: 'Grilled corn with mayo, cheese, chili powder, and lime',
    price: 25,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd2f7dde-014b-4200-8022-d2edcba6b3e3.png',
    category: menuCategories[1],
    isVegetarian: true,
  },
  {
    id: 'nachos',
    name: 'Nachos Supremos',
    description: 'Tortilla chips with cheese, jalapeños, sour cream, and salsa',
    price: 40,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c51ea10d-1317-4bd2-a12f-8fde029c5d5c.png',
    category: menuCategories[1],
    isVegetarian: true,
  },

  // Drinks
  {
    id: 'horchata',
    name: 'Horchata',
    description: 'Traditional rice and cinnamon drink',
    price: 20,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf09472a-4f61-40f4-9674-8ea552dc98c1.png',
    category: menuCategories[2],
    isVegetarian: true,
  },
  {
    id: 'agua-fresca',
    name: 'Agua Fresca',
    description: 'Fresh fruit water (Watermelon, Pineapple, or Tamarind)',
    price: 18,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/608452ca-63bc-4813-80d4-e472ee9234f6.png',
    category: menuCategories[2],
    isVegetarian: true,
  },
  {
    id: 'mexican-coke',
    name: 'Mexican Coca-Cola',
    description: 'Classic Coke made with cane sugar in glass bottle',
    price: 15,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c08860ff-a453-4ef4-be3e-104137f99a5e.png',
    category: menuCategories[2],
  },
  {
    id: 'limonada',
    name: 'Limonada',
    description: 'Fresh limeade with mint',
    price: 16,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0f012eac-20e5-4b82-bc6d-ae1acc624458.png',
    category: menuCategories[2],
    isVegetarian: true,
  },

  // Desserts
  {
    id: 'flan',
    name: 'Flan Casero',
    description: 'Homemade caramel custard',
    price: 28,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8377453b-3802-4e8e-b91d-dcc8030665a7.png',
    category: menuCategories[3],
    isVegetarian: true,
  },
  {
    id: 'churros',
    name: 'Churros con Chocolate',
    description: 'Fresh churros with cinnamon sugar and chocolate dipping sauce',
    price: 30,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/404d04f8-f73d-494b-bfea-bf2981d1c7a9.png',
    category: menuCategories[3],
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 'tres-leches',
    name: 'Tres Leches Cake',
    description: 'Traditional three-milk cake with whipped cream',
    price: 32,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f45d37f6-5f69-4abe-83eb-18b15747f11a.png',
    category: menuCategories[3],
    isVegetarian: true,
  },
];

export const restaurantHours: RestaurantHours[] = [
  { day: 'Monday', open: '11:00', close: '22:00' },
  { day: 'Tuesday', open: '11:00', close: '22:00' },
  { day: 'Wednesday', open: '11:00', close: '22:00' },
  { day: 'Thursday', open: '11:00', close: '22:30' },
  { day: 'Friday', open: '11:00', close: '23:00' },
  { day: 'Saturday', open: '12:00', close: '23:00' },
  { day: 'Sunday', open: '12:00', close: '21:00' },
];

export const contactInfo: ContactInfo = {
  phone: '+212 524-123-456',
  email: 'info@tacosafi.ma',
  address: {
    street: 'Avenue Mohammed V, Quartier Administratif',
    city: 'Safi',
    country: 'Morocco',
    postalCode: '46000',
  },
  socialMedia: {
    facebook: 'https://facebook.com/tacosafi',
    instagram: 'https://instagram.com/taco_safi',
  },
};
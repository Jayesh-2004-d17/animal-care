export type ServiceCategory = 
  | 'Veterinary Clinics'
  | 'Animal Hospitals'
  | 'Pet Boarding'
  | 'Diagnostics'
  | 'Ambulance'
  | 'Animal NGOs';

export type PetType = 'Dogs' | 'Cats' | 'Birds' | 'Exotic Pets' | 'All Animals';

export interface Doctor {
  name: string;
  qualification: string;
  experience: string;
  specialty: string;
}

export interface Review {
  id: string;
  author: string;
  petName: string;
  petType: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Provider {
  id: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  address: string;
  locality: string;
  city: string;
  phone: string;
  emergencyPhone?: string;
  email: string;
  rating: number;
  reviewCount: number;
  image: string;
  fallbackGradient: string;
  isOpenNow: boolean;
  is24x7: boolean;
  homeVisits: boolean;
  timings: string;
  consultationFee?: string;
  facilities: string[];
  specialties: string[];
  supportedPets: PetType[];
  doctors?: Doctor[];
  about: string;
  reviews: Review[];
  verified: boolean;
  distanceKm?: number;
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: string; // 'All' | ServiceCategory
  selectedCity: string;
  minRating: number;
  onlyOpenNow: boolean;
  only24x7: boolean;
  onlyHomeVisits: boolean;
  petType: string;
}

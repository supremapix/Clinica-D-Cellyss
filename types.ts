
export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image?: string;
  icon: string;
  isNew?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  treatment: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum LocationType {
  NEIGHBORHOOD = 'bairro',
  CITY = 'cidade'
}

export interface LocationData {
  name: string;
  type: LocationType;
}

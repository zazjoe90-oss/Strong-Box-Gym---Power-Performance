
export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface ClassSession {
  id: string;
  name: string;
  time: string;
  trainer: string;
  day: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface LocationBranch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  amenities: string[];
}

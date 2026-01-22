
import { Trainer, ClassSession, MembershipPlan, BlogPost, Testimonial, LocationBranch } from './types';

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Marcus Thorne',
    specialty: 'CrossFit & Strength',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80',
    bio: 'Former athlete with 10+ years of experience in high-intensity training.'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    specialty: 'Yoga & Flexibility',
    image: 'https://images.unsplash.com/photo-1552196564-97e849930562?w=800&q=80',
    bio: 'Specializing in mobility and mindfulness to build a resilient body and mind.'
  },
  {
    id: '3',
    name: 'David Rossi',
    specialty: 'Powerlifting',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    bio: 'Helping individuals break plateaus and reach their ultimate strength potential.'
  }
];

export const SCHEDULE: ClassSession[] = [
  { id: '1', name: 'WOD (Workout of Day)', time: '06:00 AM', trainer: 'Marcus Thorne', day: 'Monday', level: 'Advanced' },
  { id: '2', name: 'Foundation Yoga', time: '08:30 AM', trainer: 'Sarah Chen', day: 'Monday', level: 'Beginner' },
  { id: '3', name: 'Power Hour', time: '05:00 PM', trainer: 'David Rossi', day: 'Monday', level: 'Intermediate' },
  { id: '4', name: 'MetCon Blast', time: '06:30 PM', trainer: 'Marcus Thorne', day: 'Tuesday', level: 'Intermediate' },
  { id: '5', name: 'Olympic Lifting', time: '07:00 AM', trainer: 'David Rossi', day: 'Wednesday', level: 'Advanced' },
  { id: '6', name: 'Active Recovery', time: '09:00 AM', trainer: 'Sarah Chen', day: 'Thursday', level: 'Beginner' },
];

export const MEMBERSHIPS: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Rookie Box',
    price: '$79',
    period: 'month',
    features: ['Access to basic equipment', '2 Classes per week', 'Locker access', 'Mobile App access']
  },
  {
    id: 'pro',
    name: 'Warrior Box',
    price: '$129',
    period: 'month',
    recommended: true,
    features: ['Unlimited equipment access', 'Unlimited Classes', '1 Personal Training session/mo', 'Nutrition guide', 'Sauna access']
  },
  {
    id: 'elite',
    name: 'Champion Box',
    price: '$199',
    period: 'month',
    features: ['24/7 Access', 'Unlimited everything', '4 Personal Training sessions/mo', 'Customized Meal Plans', 'Guest passes included']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Reasons Why CrossFit is for Everyone',
    excerpt: 'Debunking the myth that CrossFit is only for elite athletes.',
    date: 'Oct 12, 2023',
    author: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
    category: 'CrossFit'
  },
  {
    id: 'b2',
    title: 'Mastering the Deadlift: Proper Form Guide',
    excerpt: 'Avoid injury and lift more with these essential technique tips.',
    date: 'Nov 05, 2023',
    author: 'David Rossi',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    category: 'Strength'
  },
  {
    id: 'b3',
    title: 'Recovery: The Secret to Muscle Growth',
    excerpt: 'Why what you do outside the gym is as important as what you do inside.',
    date: 'Dec 01, 2023',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    category: 'Recovery'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'James Wilson',
    role: 'Member since 2021',
    content: 'The community at Strong Box is unmatched. I\'ve never pushed myself harder or felt more supported.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
  },
  {
    id: 't2',
    name: 'Elena Rodriguez',
    role: 'Corporate Professional',
    content: 'Finding a gym that fits my busy schedule was tough until I found Strong Box. Their early morning classes are a life saver.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
  }
];

export const LOCATIONS: LocationBranch[] = [
  {
    id: 'al-jazi',
    name: 'Strong Box Al Jazi',
    address: 'Al Jazi Gardens, West Bay, Doha, Qatar',
    phone: '+974 4455 6677',
    email: 'aljazi@strongboxqatar.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!1s0x3e45c490a6f23b7b:0x5e2c7c5b6e7f8e3!2sAl+Jazi+Gardens!5m2!1sen!2sqa',
    amenities: ['CrossFit Box', 'Yoga Studio', 'Olympic Lifting Area', 'Swimming Pool Access']
  },
  {
    id: 'lusail',
    name: 'Strong Box Doha Sports Park',
    address: 'Doha Sports Park, Lusail, Qatar',
    phone: '+974 4455 6688',
    email: 'lusail@strongboxqatar.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!1s0x3e45c43a6d9d0e81:0x49c93a7d2d3e0b7b!2sDoha+Sports+Park!5m2!1sen!2sqa',
    amenities: ['Outdoor Training', 'Functional Fitness', 'Kids Programs', 'Changing Rooms']
  }
];

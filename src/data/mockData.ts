import { Provider, ServiceCategory } from '../types';

export const CATEGORIES: {
  name: ServiceCategory;
  shortDesc: string;
  iconName: string;
  providerCount: number;
  highlight: string;
}[] = [
  {
    name: 'Veterinary Clinics',
    shortDesc: 'Routine check-ups, vaccines, and OPD consultations for dogs, cats & exotic pets.',
    iconName: 'Stethoscope',
    providerCount: 142,
    highlight: 'Consultations from ₹400'
  },
  {
    name: 'Animal Hospitals',
    shortDesc: 'Multi-specialty centers with 24/7 ICU, operating theatres, and trauma recovery.',
    iconName: 'Building2',
    providerCount: 68,
    highlight: '24/7 Emergency Care'
  },
  {
    name: 'Pet Boarding',
    shortDesc: 'Cage-free luxury pet resorts, daycare play zones, and hygienic boarding stays.',
    iconName: 'Home',
    providerCount: 89,
    highlight: 'Verified Caretakers'
  },
  {
    name: 'Diagnostics',
    shortDesc: 'Digital X-Rays, high-res ultrasound, blood pathology, and microbiology labs.',
    iconName: 'Activity',
    providerCount: 54,
    highlight: 'Same-day Digital Reports'
  },
  {
    name: 'Ambulance',
    shortDesc: 'Rapid animal emergency transport with oxygen support and trauma attendants.',
    iconName: 'Truck',
    providerCount: 31,
    highlight: 'Average response: 18 min'
  },
  {
    name: 'Animal NGOs',
    shortDesc: 'Non-profit animal shelters, stray rescue operations, free sterilizations & adoption.',
    iconName: 'HeartHandshake',
    providerCount: 46,
    highlight: 'Community Rescue'
  }
];

export const CITIES = [
  'All Locations',
  'Bangalore',
  'Mumbai',
  'Delhi NCR',
  'Hyderabad',
  'Pune',
  'Chennai'
];

export const SAMPLE_PROVIDERS: Provider[] = [
  {
    id: 'prov-1',
    name: 'PawCare Advanced Veterinary Clinic',
    category: 'Veterinary Clinics',
    tagline: 'Comprehensive wellness, pediatric vaccination, and gentle preventive care',
    address: '42, 100 Feet Road, 4th Block, Koramangala',
    locality: 'Koramangala',
    city: 'Bangalore',
    phone: '+91 98450 12389',
    email: 'hello@pawcareclinic.com',
    rating: 4.9,
    reviewCount: 348,
    image: '/images/hero_veterinary_care_1794316388830.jpg',
    fallbackGradient: 'from-emerald-50 to-teal-100',
    isOpenNow: true,
    is24x7: false,
    homeVisits: true,
    timings: '09:00 AM - 09:00 PM (Mon-Sun)',
    consultationFee: '₹500',
    facilities: ['In-house Pharmacy', 'Vaccination Suite', 'Dental Prophylaxis', 'Digital Records', 'Pet Grooming Lounge'],
    specialties: ['Canine Dermatology', 'Feline Internal Medicine', 'Puppy Deworming & Vaccination', 'Geriatric Pet Health'],
    supportedPets: ['Dogs', 'Cats', 'Birds'],
    doctors: [
      {
        name: 'Dr. Shalini Menon, BVSc & AH',
        qualification: 'Master of Veterinary Surgery (Gold Medalist)',
        experience: '12 years experience',
        specialty: 'Companion Animal Medicine & Soft Tissue Surgery'
      },
      {
        name: 'Dr. Arun Varma, MVSc',
        qualification: 'Veterinary Internal Medicine Specialist',
        experience: '8 years experience',
        specialty: 'Feline Infectious Diseases & Dermatology'
      }
    ],
    about: 'PawCare is a modern boutique veterinary clinic focused on low-stress examinations and preventive healthcare. We maintain state-of-the-art diagnostic instruments and an in-clinic veterinary pharmacy ensuring prompt relief for your furry companions.',
    reviews: [
      {
        id: 'rev-1',
        author: 'Priya Sharma',
        petName: 'Milo',
        petType: 'Golden Retriever',
        rating: 5,
        date: '3 days ago',
        comment: 'Dr. Shalini was incredibly patient with Milo during his ear infection treatment. The clinic is spotless and calm, not noisy like other places.'
      },
      {
        id: 'rev-2',
        author: 'Rohan Deshmukh',
        petName: 'Bella',
        petType: 'Persian Cat',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Dedicated cat-friendly exam area made a huge difference. Highly recommend their home vaccination service as well!'
      }
    ],
    verified: true,
    distanceKm: 1.2
  },
  {
    id: 'prov-2',
    name: 'Apex 24/7 Animal Trauma & Specialty Hospital',
    category: 'Animal Hospitals',
    tagline: 'Round-the-clock emergency ICU, surgical theater, and inpatient telemetry',
    address: '88, Outer Ring Road, Bellandur',
    locality: 'Bellandur',
    city: 'Bangalore',
    phone: '+91 80 4912 8800',
    emergencyPhone: '+91 80 4912 8899',
    email: 'emergency@apexanimallife.org',
    rating: 4.8,
    reviewCount: 612,
    image: '/images/hospital_emergency_care_1794316390086.jpg',
    fallbackGradient: 'from-blue-50 to-teal-100',
    isOpenNow: true,
    is24x7: true,
    homeVisits: false,
    timings: 'Open 24 Hours, 7 Days a Week',
    consultationFee: '₹800 (Day) / ₹1,200 (Emergency)',
    facilities: ['Dedicated ICU Cages', 'Oxygen Generator Matrix', 'Orthopedic Operating Suite', 'Blood Bank', 'Isolation Ward'],
    specialties: ['Trauma & Critical Care', 'Orthopedic Fracture Repair', 'Cardiology & Echo', 'Endoscopy & Laparoscopy'],
    supportedPets: ['Dogs', 'Cats', 'Birds', 'Exotic Pets'],
    doctors: [
      {
        name: 'Dr. Vikramaditya Sen, MVSc, PhD',
        qualification: 'Fellow in Veterinary Critical Care (FEVCC)',
        experience: '18 years experience',
        specialty: 'Trauma Resuscitation & Neurosurgery'
      },
      {
        name: 'Dr. Nandini Ray, BVSc',
        qualification: 'Emergency Veterinary Clinician',
        experience: '7 years experience',
        specialty: 'Poisoning Management & Intensive Monitoring'
      }
    ],
    about: 'Apex 24/7 Animal Hospital is equipped with level-1 emergency facilities for small and exotic animals. With on-site diagnostic ultrasound, automated blood analyzers, and dedicated ventilators, our critical response team stands ready 24 hours a day.',
    reviews: [
      {
        id: 'rev-3',
        author: 'Karan Grover',
        petName: 'Simba',
        petType: 'German Shepherd',
        rating: 5,
        date: '1 week ago',
        comment: 'Simba suffered a snake encounter at 2 AM. The team at Apex had antivenom ready before we even pulled into the driveway. They saved his life.'
      }
    ],
    verified: true,
    distanceKm: 3.4
  },
  {
    id: 'prov-3',
    name: 'Whiskers & Paws Luxury Pet Boarding Resort',
    category: 'Pet Boarding',
    tagline: 'Cage-free climate-controlled suites, splash pool, and 24/7 webcam access',
    address: 'Survey 14, Harlur Off Sarjapur Road',
    locality: 'Sarjapur Road',
    city: 'Bangalore',
    phone: '+91 97312 90111',
    email: 'bookings@whiskersandpawsresort.in',
    rating: 4.9,
    reviewCount: 220,
    image: '/images/pet_boarding_resort_1794316390466.jpg',
    fallbackGradient: 'from-amber-50 to-emerald-100',
    isOpenNow: true,
    is24x7: false,
    homeVisits: false,
    timings: '07:30 AM - 08:30 PM (Pickup & Drop)',
    consultationFee: '₹950 / day (All inclusive)',
    facilities: ['Private Cozy Cabins', 'Grassy Agility Yard', 'Heated Splash Pool', 'Live App Webcam Stream', 'On-call Vet Coverage'],
    specialties: ['Socialization Playgroups', 'Senior Dog Care', 'Raw & Customized Pet Diets', 'Medication Administration'],
    supportedPets: ['Dogs', 'Cats'],
    doctors: [
      {
        name: 'Dr. Rashmi Nair (Consulting Vet)',
        qualification: 'BVSc, Certified Animal Behaviorist',
        experience: '10 years experience',
        specialty: 'Canine Stress Management & Nutrition'
      }
    ],
    about: 'Designed by animal welfare architects, Whiskers & Paws offers an anxiety-free holiday for your pets while you travel. Every pet enjoys 4 structured play sessions daily, orthopedic bedding, hygienic sanitization protocols, and continuous CCTV monitoring.',
    reviews: [
      {
        id: 'rev-4',
        author: 'Ayesha Merchant',
        petName: 'Cookie & Brownie',
        petType: 'Labradors',
        rating: 5,
        date: '5 days ago',
        comment: 'First time leaving our duo for a 10-day trip abroad. The live camera access and hourly updates on WhatsApp gave us complete peace of mind!'
      }
    ],
    verified: true,
    distanceKm: 5.1
  },
  {
    id: 'prov-4',
    name: 'RapidRescue 24/7 Animal Ambulance Service',
    category: 'Ambulance',
    tagline: 'Equipped critical care transit with oxygen tanks, stretcher and paramedic vet support',
    address: 'Central Emergency Dispatch Hub, Indiranagar',
    locality: 'Indiranagar',
    city: 'Bangalore',
    phone: '+91 99000 88911',
    emergencyPhone: '+91 99000 88911',
    email: 'dispatch@rapidrescuevet.org',
    rating: 4.9,
    reviewCount: 184,
    image: '/images/animal_ambulance_rescue_1794316391823.jpg',
    fallbackGradient: 'from-emerald-50 to-teal-100',
    isOpenNow: true,
    is24x7: true,
    homeVisits: true,
    timings: '24/7 Instant Emergency Dispatch',
    consultationFee: '₹600 Base Dispatch + ₹30/km',
    facilities: ['Pressurized Oxygen Cylinder', 'Hydraulic Animal Stretcher', 'Multiparameter Monitor', 'Intravenous Infusion Kit', 'Emergency Crash Box'],
    specialties: ['Accident Rescue Transit', 'Non-ambulatory Dog Transfer', 'Pre-hospital Stabilization', 'ICU Inter-facility Transfer'],
    supportedPets: ['Dogs', 'Cats', 'All Animals'],
    doctors: [
      {
        name: 'Vikas Rao (Lead Paramedic)',
        qualification: 'Certified Veterinary Emergency Responder',
        experience: '9 years active fieldwork',
        specialty: 'Canine CPR & Immobilization'
      }
    ],
    about: 'RapidRescue operates a fleet of customized veterinary ambulances across metropolitan clusters. Each van is staffed with a trained veterinary technician and loaded with airway management kits, suction units, and medical splints to stabilize critical patients en route to tertiary animal hospitals.',
    reviews: [
      {
        id: 'rev-5',
        author: 'Sandeep Kulkarni',
        petName: 'Rusty (Community Dog)',
        petType: 'Indie Dog',
        rating: 5,
        date: 'Yesterday',
        comment: 'They arrived within 15 minutes of my call when a community dog was hit by a car. Handled the fractured dog with supreme gentleness and rushed him straight to surgery.'
      }
    ],
    verified: true,
    distanceKm: 2.8
  },
  {
    id: 'prov-5',
    name: 'PetVison Diagnostic Imaging & Molecular Lab',
    category: 'Diagnostics',
    tagline: 'High-definition digital radiology, 4D veterinary ultrasound, and blood pathology',
    address: '15, 5th Cross, Malleshwaram',
    locality: 'Malleshwaram',
    city: 'Bangalore',
    phone: '+91 80 2344 1920',
    email: 'reports@petvisiondiagnostics.com',
    rating: 4.7,
    reviewCount: 195,
    image: '/images/clinic_vet_care_1794316389212.jpg',
    fallbackGradient: 'from-teal-50 to-cyan-100',
    isOpenNow: true,
    is24x7: false,
    homeVisits: true,
    timings: '08:00 AM - 08:00 PM (Sample collection till 6 PM)',
    consultationFee: 'Blood Tests from ₹650',
    facilities: ['Direct Digital X-Ray (DR)', 'Echocardiography Doppler', 'Automated Hematology Analyzer', 'Histopathology Unit', 'Home Sample Phlebotomy'],
    specialties: ['Abdominal Sonography', 'Thyroid & Hormone Panels', 'Tick-borne Fever Profiling', 'Biopsy Cytology'],
    supportedPets: ['Dogs', 'Cats', 'Birds', 'Exotic Pets'],
    doctors: [
      {
        name: 'Dr. Sneha Hegde, MVSc (Pathology)',
        qualification: 'Diplomate in Clinical Veterinary Pathology',
        experience: '14 years experience',
        specialty: 'Clinical Cytology & Hematology Interpretation'
      }
    ],
    about: 'PetVision is a specialized referral diagnostic center trusted by over 200 veterinary clinics. We provide high-contrast digital X-rays, detailed abdominal ultrasound scans, and rapid hematology profiles with same-day digital report delivery directly to your phone and treating vet.',
    reviews: [
      {
        id: 'rev-6',
        author: 'Geeta Nair',
        petName: 'Bruno',
        petType: 'Beagle',
        rating: 5,
        date: '4 days ago',
        comment: 'Got Bruno’s complete ultrasound report within 2 hours. The radiologist was calm and explained the findings clearly to us before sending the file to our doctor.'
      }
    ],
    verified: true,
    distanceKm: 4.0
  },
  {
    id: 'prov-6',
    name: 'Voice for Voiceless Animal Rescue NGO',
    category: 'Animal NGOs',
    tagline: 'Community animal rescue, stray sterilization, emergency trauma shelter & adoption',
    address: 'Plot 7, Green Sanctuary Lane, Yelahanka',
    locality: 'Yelahanka',
    city: 'Bangalore',
    phone: '+91 91100 24200',
    emergencyPhone: '+91 91100 24200',
    email: 'rescue@voiceforvoiceless.org',
    rating: 4.9,
    reviewCount: 420,
    image: '/images/hero_veterinary_care_1794316388830.jpg',
    fallbackGradient: 'from-emerald-50 to-green-100',
    isOpenNow: true,
    is24x7: true,
    homeVisits: false,
    timings: 'Rescue Helpline: 24/7 | Shelter Visits: 10 AM - 5 PM',
    consultationFee: 'Free (Donations Welcome)',
    facilities: ['Rehabilitation Kennels', 'Free ABC (Sterilization) Center', 'Paralyzed Dog Wheelchair Sanctuary', 'Adoption Desk', 'Stray Feeding Units'],
    specialties: ['Stray Dog Rescues', 'Cruelty Intervention & Legal Aid', 'Puppy & Kitten Adoption', 'Vaccination Drives'],
    supportedPets: ['Dogs', 'Cats', 'All Animals'],
    doctors: [
      {
        name: 'Dr. Ananth Murthy, BVSc',
        qualification: 'Honorary Chief Medical Officer',
        experience: '15 years animal welfare experience',
        specialty: 'Shelter Medicine & Orthopedic Rehab'
      }
    ],
    about: 'A registered animal welfare trust caring for injured, abandoned, and distressed street animals. We operate an active helpline, a recovery sanctuary with over 180 permanent resident dogs, and run weekend adoption camps connecting rescued puppies with loving families.',
    reviews: [
      {
        id: 'rev-7',
        author: 'Arjun Nambiar',
        petName: 'Penny (Adopted Indie)',
        petType: 'Indie Dog',
        rating: 5,
        date: '1 month ago',
        comment: 'We adopted Penny through Voice for Voiceless. She was fully vaccinated, spayed, and healthy. Truly commendable devotion by their volunteers!'
      }
    ],
    verified: true,
    distanceKm: 8.5
  },
  {
    id: 'prov-7',
    name: 'St. Francis Specialty Veterinary PolyClinic',
    category: 'Veterinary Clinics',
    tagline: 'Holistic pet medicine, dental cleanings, soft-tissue surgery, and kitten care',
    address: '104, Hill Road, Bandra West',
    locality: 'Bandra West',
    city: 'Mumbai',
    phone: '+91 22 2642 9880',
    email: 'care@stfrancisvet.in',
    rating: 4.8,
    reviewCount: 289,
    image: '/images/clinic_vet_care_1794316389212.jpg',
    fallbackGradient: 'from-teal-50 to-emerald-100',
    isOpenNow: true,
    is24x7: false,
    homeVisits: true,
    timings: '09:30 AM - 08:30 PM (Closed Thursday)',
    consultationFee: '₹600',
    facilities: ['Modern Sterilization Unit', 'Dental Scaler', 'Pet Microchipping', 'Weight Management Clinic', 'Prescription Diet Corner'],
    specialties: ['Geriatric Dog Care', 'Dental Cleanings', 'Dermatology & Allergy Testing', 'Wellness Examinations'],
    supportedPets: ['Dogs', 'Cats'],
    doctors: [
      {
        name: 'Dr. Cyrus Bharucha, BVSc & AH',
        qualification: 'Small Animal Medicine Specialist',
        experience: '16 years experience',
        specialty: 'Canine Endocrinology & Geriatric Care'
      }
    ],
    about: 'Established over 15 years ago, St. Francis provides compassionate, individualized clinical care in Mumbai. We believe in evidence-based medicine, transparent treatment plans, and continuous pet parent education.',
    reviews: [
      {
        id: 'rev-8',
        author: 'Farah Contractor',
        petName: 'Mochi',
        petType: 'Shih Tzu',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Dr. Cyrus has been caring for Mochi since puppyhood. Thorough diagnostics and never over-prescribes antibiotics.'
      }
    ],
    verified: true,
    distanceKm: 2.1
  },
  {
    id: 'prov-8',
    name: 'Canine Haven Boarding & Daycare Farm',
    category: 'Pet Boarding',
    tagline: 'Spacious 2-acre green farm stay with natural swimming pond and agility trails',
    address: 'Village Mandi, Near Chattarpur Farms',
    locality: 'Chattarpur',
    city: 'Delhi NCR',
    phone: '+91 98112 34567',
    email: 'info@caninehavenfarms.com',
    rating: 4.8,
    reviewCount: 172,
    image: '/images/pet_boarding_resort_1794316390466.jpg',
    fallbackGradient: 'from-emerald-50 to-teal-100',
    isOpenNow: true,
    is24x7: false,
    homeVisits: false,
    timings: '08:00 AM - 07:00 PM',
    consultationFee: '₹850 / day',
    facilities: ['2-Acre Open Run', 'Filtered Swimming Lagoon', 'Individual AC Cabins', 'Nutritional Kitchen', '24/7 Caretaker Onsite'],
    specialties: ['Energy Burn Play sessions', 'Separation Anxiety Support', 'Pack Socialization', 'Swimming Therapy'],
    supportedPets: ['Dogs'],
    doctors: [
      {
        name: 'Dr. Amit Chauhan',
        qualification: 'Visiting Veterinary Consultant',
        experience: '11 years experience',
        specialty: 'Preventive Care & Hydration Therapy'
      }
    ],
    about: 'Canine Haven is an open-air retreat where energetic dogs can run, swim, and make friends under watchful professional supervision. All boarding guests receive individualized feeding plans and bedtime cuddles.',
    reviews: [
      {
        id: 'rev-9',
        author: 'Sameer Tyagi',
        petName: 'Thor',
        petType: 'Rottweiler',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Thor had the absolute time of his life swimming in their pond. He came back exhausted and happy!'
      }
    ],
    verified: true,
    distanceKm: 6.8
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Search a Service',
    description: 'Select your city, pet type, or specific care requirement—from routine vet checks to urgent 24/7 trauma clinics or ambulance transport.',
    badge: 'Step 1'
  },
  {
    step: '02',
    title: 'Compare Verified Providers',
    description: 'Review transparent doctor credentials, emergency equipment, consultation charges, verified pet-parent ratings, and distance.',
    badge: 'Step 2'
  },
  {
    step: '03',
    title: 'Contact or Book Instantly',
    description: 'Directly dial emergency helplines, book priority clinic time slots, or request home visits with instant digital confirmation.',
    badge: 'Step 3'
  }
];

export const TESTIMONIALS = [
  {
    quote: "When our puppy developed acute gastroenteritis at midnight, Practo for Animals immediately pinpointed Apex 24/7 Hospital. The doctor was briefed before we arrived.",
    author: "Rohit & Megha Kapoor",
    pet: "Pet parents of 'Leo' (Shih Tzu)",
    city: "Bangalore"
  },
  {
    quote: "Finding cage-free boarding for my anxious rescue cat used to take days of phone calls. The verified video tours and reviews made choosing Whiskers & Paws effortless.",
    author: "Tanvi Sheth",
    pet: "Pet parent of 'Kulfi' (Cat)",
    city: "Mumbai"
  },
  {
    quote: "As an animal NGO founder, this platform connects us with donors and emergency rescuers in minutes. It is an indispensable lifesaver for community stray animals.",
    author: "Sunita Jacob",
    pet: "Trustee, Animal Hope Foundation",
    city: "Delhi NCR"
  }
];

export type Language = 'en' | 'hi' | 'mr';

export type ServiceCategory = 
  | 'all'
  | 'certificates'
  | 'revenue'
  | 'education'
  | 'welfare'
  | 'health'
  | 'agriculture'
  | 'identity';

export interface LocalizedString {
  en: string;
  hi: string;
  mr: string;
}

export interface LocalizedStringList {
  en: string[];
  hi: string[];
  mr: string[];
}

export interface DocumentItem {
  id: string;
  name: LocalizedString;
  mandatory: boolean;
  description: LocalizedString;
  acceptableAlternatives?: LocalizedStringList;
}

export interface ApplicationStep {
  stepNumber: number;
  title: LocalizedString;
  details: LocalizedString;
  mode: 'online' | 'offline' | 'both';
}

export interface OfficialLink {
  title: LocalizedString;
  url: string;
  portalName: string;
  level: 'Central' | 'Maharashtra' | 'Uttar Pradesh' | 'All India';
}

export interface ServiceItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  categoryName: LocalizedString;
  title: LocalizedString;
  department: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  estimatedDays: LocalizedString;
  fee: LocalizedString;
  validity: LocalizedString;
  eligibility: LocalizedStringList;
  documents: DocumentItem[];
  steps: ApplicationStep[];
  officialLinks: OfficialLink[];
  importantNotice: LocalizedString;
  keywords: string[]; // For robust multilingual search matching
}

export type ProviderType = 'aaple_sarkar' | 'csc' | 'jan_seva' | 'suvidha_kiosk' | 'mahaonline';

export interface ServiceProvider {
  id: string;
  name: LocalizedString;
  type: ProviderType;
  typeLabel: LocalizedString;
  state: string;
  district: LocalizedString;
  taluka: LocalizedString;
  address: LocalizedString;
  landmark: LocalizedString;
  operatingHours: LocalizedString;
  workingDays: LocalizedString;
  languagesSpoken: string[];
  rating: number;
  reviewCount: number;
  wheelchairAccessible: boolean;
  biometricAuthAvailable: boolean;
  servicesSupported: string[]; // service IDs
  tokenPrefix: string;
  sampleDisclaimer: LocalizedString;
}

export type RequestStatus = 'Submitted' | 'In Progress' | 'Verification Pending' | 'Completed';

export interface StatusHistoryEntry {
  status: RequestStatus;
  timestamp: string;
  note: string;
}

export interface DemoServiceRequest {
  id: string;
  tokenNumber: string;
  serviceId: string;
  serviceTitle: string;
  providerId: string;
  providerName: string;
  providerDistrict: string;
  applicantName: string;
  applicantPhone: string;
  assistanceType: 'document_check' | 'form_filling' | 'status_inquiry' | 'grievance';
  preferredSlot: string;
  preferredLanguage: Language;
  notes?: string;
  status: RequestStatus;
  statusHistory: StatusHistoryEntry[];
  submittedAt: string;
}

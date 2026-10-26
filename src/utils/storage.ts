import type { DemoServiceRequest, RequestStatus } from '../types';

const STORAGE_KEY = 'suvidha4c_demo_requests_v1';

const INITIAL_SAMPLE_REQUESTS: DemoServiceRequest[] = [
  {
    id: 'req-sample-001',
    tokenNumber: 'SUVIDHA-2026-84912',
    serviceId: 'srv-income-cert',
    serviceTitle: 'Income Certificate (1 Year / 3 Years)',
    providerId: 'prov-aaple-sarkar-dadar',
    providerName: 'Aaple Sarkar Seva Kendra (VLE Center #104)',
    providerDistrict: 'Mumbai Suburban',
    applicantName: 'Rameshwar Patil (Demo)',
    applicantPhone: '98200XXXXX',
    assistanceType: 'document_check',
    preferredSlot: 'Morning (10:00 AM - 01:00 PM)',
    preferredLanguage: 'mr',
    notes: 'Need verification of 3-year salary slip and Talathi panchanama format.',
    status: 'In Progress',
    submittedAt: '2026-10-24 11:30 AM',
    statusHistory: [
      {
        status: 'Submitted',
        timestamp: '2026-10-24 11:30 AM',
        note: 'Demo request registered at Aaple Sarkar Dadar kiosk.'
      },
      {
        status: 'In Progress',
        timestamp: '2026-10-25 02:15 PM',
        note: 'Scrutiny of income proof and self-declaration under review by desk operator.'
      }
    ]
  },
  {
    id: 'req-sample-002',
    tokenNumber: 'SUVIDHA-2026-39104',
    serviceId: 'srv-caste-cert',
    serviceTitle: 'Caste Certificate (SC / ST / VJNT / OBC / SBC)',
    providerId: 'prov-csc-pune-shivajinagar',
    providerName: 'Digital Seva Kendra (CSC Facilitation Hub #287)',
    providerDistrict: 'Pune',
    applicantName: 'Sunita Gaikwad (Demo)',
    applicantPhone: '94210XXXXX',
    assistanceType: 'form_filling',
    preferredSlot: 'Afternoon (01:30 PM - 04:30 PM)',
    preferredLanguage: 'hi',
    notes: 'Grandfather 1967 school leaving certificate scanned and ready.',
    status: 'Verification Pending',
    submittedAt: '2026-10-22 04:10 PM',
    statusHistory: [
      {
        status: 'Submitted',
        timestamp: '2026-10-22 04:10 PM',
        note: 'Demo token generated for CSC Pune hub.'
      },
      {
        status: 'In Progress',
        timestamp: '2026-10-23 10:00 AM',
        note: 'Genealogy family tree scanned and affidavit entered.'
      },
      {
        status: 'Verification Pending',
        timestamp: '2026-10-25 05:00 PM',
        note: 'SDO office verification scheduled.'
      }
    ]
  }
];

export const loadDemoRequests = (): DemoServiceRequest[] => {
  if (typeof window === 'undefined') return INITIAL_SAMPLE_REQUESTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_REQUESTS));
      return INITIAL_SAMPLE_REQUESTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_SAMPLE_REQUESTS;
  } catch (err) {
    console.error('Failed to load demo requests from localStorage', err);
    return INITIAL_SAMPLE_REQUESTS;
  }
};

export const saveDemoRequest = (
  newRequest: Omit<DemoServiceRequest, 'id' | 'tokenNumber' | 'status' | 'statusHistory' | 'submittedAt'>
): DemoServiceRequest => {
  const requests = loadDemoRequests();
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  const tokenNumber = `SUVIDHA-2026-${randomSuffix}`;
  const now = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  const fullRequest: DemoServiceRequest = {
    ...newRequest,
    id: `req-${Date.now()}`,
    tokenNumber,
    status: 'Submitted',
    submittedAt: now,
    statusHistory: [
      {
        status: 'Submitted',
        timestamp: now,
        note: 'Demo assistance token successfully registered.'
      }
    ]
  };

  const updated = [fullRequest, ...requests];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save demo request', err);
  }

  return fullRequest;
};

export const advanceRequestStatus = (requestId: string): DemoServiceRequest[] => {
  const requests = loadDemoRequests();
  const statusCycle: RequestStatus[] = [
    'Submitted',
    'In Progress',
    'Verification Pending',
    'Completed'
  ];

  const now = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  const updated = requests.map(req => {
    if (req.id !== requestId) return req;

    const currentIndex = statusCycle.indexOf(req.status);
    const nextStatus = statusCycle[(currentIndex + 1) % statusCycle.length];

    const notesMap: Record<RequestStatus, string> = {
      Submitted: 'Reset back to initial submission stage (Demo simulation).',
      'In Progress': 'Documents scrutinised by center operator; online form processing initiated.',
      'Verification Pending': 'Application documents transmitted to competent authority for field verification.',
      Completed: 'Digital certificate issued or demo consultation successfully finished.'
    };

    return {
      ...req,
      status: nextStatus,
      statusHistory: [
        ...req.statusHistory,
        {
          status: nextStatus,
          timestamp: now,
          note: notesMap[nextStatus]
        }
      ]
    };
  });

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update request', err);
  }

  return updated;
};

export const deleteDemoRequest = (requestId: string): DemoServiceRequest[] => {
  const requests = loadDemoRequests();
  const updated = requests.filter(r => r.id !== requestId);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to delete request', err);
  }
  return updated;
};

export const clearAllDemoRequests = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear requests', err);
  }
};

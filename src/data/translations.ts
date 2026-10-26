import type { Language } from '../types';

export interface UIStrings {
  // Brand & Header
  appTitle: string;
  appSubtitle: string;
  nationalMotto: string;
  prototypeNotice: string;
  prototypeBadge: string;
  navServices: string;
  navProviders: string;
  navTrack: string;
  navVoiceGuide: string;
  navBookAssistance: string;

  // Hero Section
  heroHeading: string;
  heroHighlight: string;
  heroSubheading: string;
  searchPlaceholder: string;
  voiceSearchBtn: string;
  clearSearch: string;
  voicePromptBadge: string;
  popularSearchesLabel: string;
  quickPrompts: string[];

  // Voice Assistant Modal
  voiceModalTitle: string;
  voiceModalListening: string;
  voiceModalInstruction: string;
  voiceModalSupportedLangs: string;
  voiceModalTranscriptLabel: string;
  voiceModalStop: string;
  voiceModalStart: string;
  voiceModalNotSupported: string;
  voiceModalErrorPermission: string;
  voiceModalErrorNoSpeech: string;
  voiceModalClose: string;
  voiceModalSpeakNow: string;
  voiceModalMatchFound: string;
  voiceModalNoMatch: string;

  // Audio checklist readout
  listenChecklist: string;
  stopAudio: string;
  playingAudio: string;
  audioNotSupported: string;

  // Advisory Banner
  advisoryTitle: string;
  advisoryText: string;
  advisoryLearnMore: string;

  // Service Categories
  categoriesTitle: string;
  categoriesSubtitle: string;
  allCategories: string;
  catCertificates: string;
  catRevenue: string;
  catEducation: string;
  catWelfare: string;
  catHealth: string;
  catAgriculture: string;
  catIdentity: string;

  // Service Directory
  servicesHeading: string;
  servicesSubtitle: string;
  filterAllDepartments: string;
  servicesFoundCount: string;
  viewDetails: string;
  viewChecklist: string;
  deptLabel: string;
  timeLabel: string;
  feeLabel: string;
  validityLabel: string;
  noServicesFound: string;
  resetFilters: string;

  // Service Detail Modal
  serviceDetailTitle: string;
  aboutService: string;
  eligibilityCriteria: string;
  requiredDocuments: string;
  mandatoryTag: string;
  optionalTag: string;
  acceptableProof: string;
  checkedCount: string;
  checklistProgressNote: string;
  applicationSteps: string;
  stepOnline: string;
  stepOffline: string;
  officialPortalsTitle: string;
  externalLinkNotice: string;
  officialPortalBadge: string;
  bookAssistanceForThis: string;
  printChecklist: string;
  closeModal: string;

  // Provider Directory
  providersHeading: string;
  providersSubtitle: string;
  providerDisclaimer: string;
  filterByDistrict: string;
  filterByType: string;
  allDistricts: string;
  allTypes: string;
  providerCardSampleBadge: string;
  hoursLabel: string;
  languagesLabel: string;
  servicesOfferedLabel: string;
  wheelchairAccessible: string;
  biometricDeviceAvailable: string;
  requestAssistanceBtn: string;
  noProvidersFound: string;

  // Request & Tracking Dashboard
  trackingHeading: string;
  trackingSubtitle: string;
  trackingDisclaimer: string;
  activeRequestsCount: string;
  searchTokenPlaceholder: string;
  filterByStatus: string;
  allStatuses: string;
  statusSubmitted: string;
  statusInProgress: string;
  statusVerificationPending: string;
  statusCompleted: string;
  tokenIdLabel: string;
  applicantLabel: string;
  centerLabel: string;
  serviceNameLabel: string;
  dateLabel: string;
  statusTimelineLabel: string;
  simulateAdvanceStatus: string;
  deleteRequest: string;
  noRequestsTitle: string;
  noRequestsSubtitle: string;
  createSampleRequestBtn: string;
  clearAllRequests: string;

  // Demo Booking Modal
  bookingModalTitle: string;
  bookingModalSubtitle: string;
  bookingDisclaimer: string;
  selectServiceLabel: string;
  selectCenterLabel: string;
  applicantNameLabel: string;
  applicantPhoneLabel: string;
  applicantPhoneHelp: string;
  assistanceTypeLabel: string;
  typeDocCheck: string;
  typeFormFilling: string;
  typeStatusInquiry: string;
  typeGrievance: string;
  preferredSlotLabel: string;
  slotMorning: string;
  slotAfternoon: string;
  slotEvening: string;
  notesLabel: string;
  notesPlaceholder: string;
  submitRequestBtn: string;
  submitting: string;
  bookingSuccessTitle: string;
  bookingSuccessMessage: string;
  yourTokenNumber: string;
  copyToken: string;
  tokenCopied: string;
  viewInDashboard: string;
  bookAnother: string;

  // Footer
  footerAboutTitle: string;
  footerAboutText: string;
  footerOfficialPortalsTitle: string;
  footerNationalPortal: string;
  footerAapleSarkar: string;
  footerDigiLocker: string;
  footerServicePlus: string;
  footerAccessibilityTitle: string;
  footerAccessibilityText: string;
  footerDisclaimerText: string;
  copyrightText: string;
}

export const translations: Record<Language, UIStrings> = {
  en: {
    appTitle: 'Suvidha4C Voice Assist',
    appSubtitle: 'Citizen Services, Document Guidance & Center Facilitator',
    nationalMotto: 'Accessible Public Governance for Every Citizen',
    prototypeNotice: 'Demonstration Prototype • Open Civic Accessibility Project',
    prototypeBadge: 'DEMO PROTOTYPE',
    navServices: 'Services Directory',
    navProviders: 'Facilitation Centers',
    navTrack: 'Track Demo Request',
    navVoiceGuide: 'Voice Assistant',
    navBookAssistance: 'Book Assistance',

    heroHeading: 'Discover Citizen Services with Simple Steps &',
    heroHighlight: 'Voice Assistance',
    heroSubheading: 'Understand official certificates, verified document checklists, and connect with local citizen service kiosks (CSC & Aaple Sarkar Seva Kendras) across India.',
    searchPlaceholder: 'Search service e.g., Income Certificate, Caste, Ration Card, Scholarship...',
    voiceSearchBtn: 'Search by Voice',
    clearSearch: 'Clear',
    voicePromptBadge: 'Try Speaking in English, हिंदी, or मराठी',
    popularSearchesLabel: 'Frequently Requested:',
    quickPrompts: [
      'Income Certificate',
      'Caste Certificate',
      'Domicile & Nationality',
      'MahaDBT Scholarship',
      'Ration Card Updates',
      'PM Kisan Samman Nidhi'
    ],

    voiceModalTitle: 'Voice Search Assistant',
    voiceModalListening: 'Listening to your voice...',
    voiceModalInstruction: 'Speak clearly into your microphone in English, Hindi, or Marathi.',
    voiceModalSupportedLangs: 'Active Speech Engine: ',
    voiceModalTranscriptLabel: 'What we heard:',
    voiceModalStop: 'Stop Listening',
    voiceModalStart: 'Tap to Speak',
    voiceModalNotSupported: 'Web Speech API is not supported in this browser. Please use the text search bar below.',
    voiceModalErrorPermission: 'Microphone permission was denied. Please allow microphone access in your browser settings or use text search.',
    voiceModalErrorNoSpeech: 'No speech was detected. Please click the button and speak again.',
    voiceModalClose: 'Close',
    voiceModalSpeakNow: 'Listening... Please speak your service inquiry now.',
    voiceModalMatchFound: 'Found matching citizen service:',
    voiceModalNoMatch: 'Could not match an exact service title. Showing closest search results.',

    listenChecklist: 'Listen to Requirements (Voice Readout)',
    stopAudio: 'Stop Audio',
    playingAudio: 'Reading requirements aloud...',
    audioNotSupported: 'Text-to-speech audio playback is not supported by your browser.',

    advisoryTitle: 'Important Citizen Advisory & Disclaimer',
    advisoryText: 'This web application is an educational prototype developed to make citizen services more understandable. Information is illustrative. Always verify current fees, required affidavits, and application rules on the official Central and State government portals (such as Aaple Sarkar, ServicePlus, and India.gov.in).',
    advisoryLearnMore: 'Official Portals Directory',

    categoriesTitle: 'Service Categories',
    categoriesSubtitle: 'Browse commonly requested government welfare schemes and official certificates',
    allCategories: 'All Categories',
    catCertificates: 'Certificates & Attestation',
    catRevenue: 'Revenue & Land Records',
    catEducation: 'Scholarships & Education',
    catWelfare: 'Social Welfare & Pensions',
    catHealth: 'Health & Family Welfare',
    catAgriculture: 'Farmer & Agriculture Support',
    catIdentity: 'Civil Identity & Registrations',

    servicesHeading: 'Citizen Services Directory',
    servicesSubtitle: 'Clear document checklists, estimated issuance timelines, and step-by-step guides',
    filterAllDepartments: 'All Departments',
    servicesFoundCount: 'services found',
    viewDetails: 'View Checklist & Steps',
    viewChecklist: 'Document Checklist',
    deptLabel: 'Department',
    timeLabel: 'Est. Timeline',
    feeLabel: 'Statutory Fee',
    validityLabel: 'Validity',
    noServicesFound: 'No services match your search term or filter.',
    resetFilters: 'Reset All Filters',

    serviceDetailTitle: 'Service Information & Document Guidance',
    aboutService: 'About This Service',
    eligibilityCriteria: 'Eligibility Criteria',
    requiredDocuments: 'Document Checklist (Mark What You Have)',
    mandatoryTag: 'Mandatory',
    optionalTag: 'If Applicable',
    acceptableProof: 'Acceptable Alternatives',
    checkedCount: 'documents ready out of',
    checklistProgressNote: 'You can check off the documents you have prepared to bring to the center.',
    applicationSteps: 'Step-by-Step Application Procedure',
    stepOnline: 'Online Method',
    stepOffline: 'At Seva Kendra / Tehsil',
    officialPortalsTitle: 'Official Verification & Portals',
    externalLinkNotice: 'Always verify and file actual legal applications on these government portals:',
    officialPortalBadge: 'Official Government Portal',
    bookAssistanceForThis: 'Request Demo Center Assistance',
    printChecklist: 'Print / Save Checklist',
    closeModal: 'Close',

    providersHeading: 'Facilitation Center Directory',
    providersSubtitle: 'Locate sample Common Service Centers (CSC) and Aaple Sarkar Seva Kendras for assisted digital filing',
    providerDisclaimer: 'Notice: These profiles are realistic demonstration centers created for prototype testing. No real phone numbers or live government booking systems are connected.',
    filterByDistrict: 'Filter by District',
    filterByType: 'Center Type',
    allDistricts: 'All Districts',
    allTypes: 'All Center Types',
    providerCardSampleBadge: 'Sample Facilitation Center',
    hoursLabel: 'Hours',
    languagesLabel: 'Assistance Languages',
    servicesOfferedLabel: 'Key Supported Services',
    wheelchairAccessible: 'Wheelchair Accessible Ground Floor',
    biometricDeviceAvailable: 'Aadhaar Biometric eKYC Device',
    requestAssistanceBtn: 'Request Demo Assistance',
    noProvidersFound: 'No centers match the chosen filters.',

    trackingHeading: 'Demo Request & Assistance Tracker',
    trackingSubtitle: 'Track your locally generated assistance tokens and observe typical civic workflow stages',
    trackingDisclaimer: 'Demonstration Tracker: Data is stored securely in your browser (localStorage) and persists across page reloads. This does not interface with any real government application or state database.',
    activeRequestsCount: 'Saved Demo Requests',
    searchTokenPlaceholder: 'Search by Token Number (e.g., SUVIDHA-2026-...)',
    filterByStatus: 'Filter by Status',
    allStatuses: 'All Statuses',
    statusSubmitted: 'Submitted',
    statusInProgress: 'In Progress',
    statusVerificationPending: 'Verification Pending',
    statusCompleted: 'Completed',
    tokenIdLabel: 'Token Number',
    applicantLabel: 'Applicant',
    centerLabel: 'Facilitation Center',
    serviceNameLabel: 'Service Requested',
    dateLabel: 'Created On',
    statusTimelineLabel: 'Status Lifecycle',
    simulateAdvanceStatus: 'Advance Status Stage (Demo)',
    deleteRequest: 'Delete',
    noRequestsTitle: 'No Demonstration Requests Yet',
    noRequestsSubtitle: 'Submit a demo request from any service or provider card to see how citizens track their assistance tokens.',
    createSampleRequestBtn: 'Create a Sample Request Now',
    clearAllRequests: 'Clear All Requests',

    bookingModalTitle: 'Request Center Assistance (Demo)',
    bookingModalSubtitle: 'Schedule an assisted application slot at a sample facilitation kiosk',
    bookingDisclaimer: 'Safety & Privacy Note: This is a demonstration form. Do NOT enter real Aadhaar numbers, PAN numbers, or sensitive financial data. Only mock test data is stored locally in your browser.',
    selectServiceLabel: 'Select Government Service',
    selectCenterLabel: 'Preferred Facilitation Center',
    applicantNameLabel: 'Applicant Name (Demo)',
    applicantPhoneLabel: 'Demo Mobile Number',
    applicantPhoneHelp: 'For prototype simulation only (e.g. 98000 00000)',
    assistanceTypeLabel: 'Nature of Assistance Needed',
    typeDocCheck: 'Document Pre-Verification & Scrutiny',
    typeFormFilling: 'Assisted Online Application & Form Filling',
    typeStatusInquiry: 'Application Status Follow-up',
    typeGrievance: 'Grievance or Objection Clarification',
    preferredSlotLabel: 'Preferred Visit Slot',
    slotMorning: 'Morning (10:00 AM - 01:00 PM)',
    slotAfternoon: 'Afternoon (01:30 PM - 04:30 PM)',
    slotEvening: 'Late Afternoon (04:30 PM - 06:30 PM)',
    notesLabel: 'Special Notes / Queries (Optional)',
    notesPlaceholder: 'Mention if you need translation assistance or specific queries...',
    submitRequestBtn: 'Generate Demo Assistance Token',
    submitting: 'Generating Token...',
    bookingSuccessTitle: 'Demo Assistance Token Created!',
    bookingSuccessMessage: 'Your demonstration request has been saved in localStorage. You can track its status below.',
    yourTokenNumber: 'Your Demonstration Token Number:',
    copyToken: 'Copy Token',
    tokenCopied: 'Copied!',
    viewInDashboard: 'View in Tracker Dashboard',
    bookAnother: 'Book Another Assistance',

    footerAboutTitle: 'Suvidha4C Voice Assist Project',
    footerAboutText: 'An accessible, trilingual civic technology initiative designed to bridge information gaps for Indian citizens applying for essential government certificates and welfare benefits.',
    footerOfficialPortalsTitle: 'Official Government Portals',
    footerNationalPortal: 'National Portal of India (india.gov.in)',
    footerAapleSarkar: 'Aaple Sarkar MahaOnline (aaplesarkar.mahaonline.gov.in)',
    footerDigiLocker: 'DigiLocker Document Wallet (digilocker.gov.in)',
    footerServicePlus: 'ServicePlus Central Portal (serviceonline.gov.in)',
    footerAccessibilityTitle: 'Civic Accessibility Standards',
    footerAccessibilityText: 'Designed for accessibility with high-contrast text, trilingual voice search, text-to-speech audio guides, and clear multi-device responsive layout.',
    footerDisclaimerText: 'Disclaimer: Suvidha4C Voice Assist is an independent educational and demonstration technology prototype. It is NOT affiliated with or endorsed by the Government of India or any State Government. For all legal filings, citizens must visit official state portals.',
    copyrightText: 'Suvidha4C Voice Assist • Built for Indian Citizen Accessibility'
  },
  hi: {
    appTitle: 'सुविधा 4C व्हॉइस असिस्ट',
    appSubtitle: 'नागरिक सेवाएं, दस्तावेज मार्गदर्शन एवं केंद्र सहायक',
    nationalMotto: 'प्रत्येक नागरिक के लिए सुलभ लोक प्रशासन',
    prototypeNotice: 'प्रदर्शन प्रोटोटाइप • खुला नागरिक सुलभता प्रोजेक्ट',
    prototypeBadge: 'डेमो प्रोटोटाइप',
    navServices: 'सेवा निर्देशिका',
    navProviders: 'सुविधा केंद्र',
    navTrack: 'डेमो अनुरोध ट्रैक करें',
    navVoiceGuide: 'आवाज सहायक',
    navBookAssistance: 'सहायता बुक करें',

    heroHeading: 'सरकारी नागरिक सेवाओं की सरल जानकारी पाएं और',
    heroHighlight: 'आवाज से खोजें',
    heroSubheading: 'आय, जाति, निवास प्रमाण पत्र, छात्रवृत्ति और लोक कल्याणकारी योजनाओं की सटीक दस्तावेज सूची समझें और नजदीकी जन सेवा केंद्रों (CSC) से जुड़ें।',
    searchPlaceholder: 'सेवा खोजें जैसे आय प्रमाण पत्र, जाति प्रमाण पत्र, राशन कार्ड, छात्रवृत्ति...',
    voiceSearchBtn: 'आवाज से खोजें (माइक)',
    clearSearch: 'हटाएं',
    voicePromptBadge: 'हिंदी, मराठी या अंग्रेजी में बोलकर खोजें',
    popularSearchesLabel: 'अक्सर खोजी जाने वाली सेवाएं:',
    quickPrompts: [
      'आय प्रमाण पत्र',
      'जाति प्रमाण पत्र',
      'निवास प्रमाण पत्र',
      'छात्रवृत्ति योजना',
      'राशन कार्ड में नाम जोड़ना',
      'पीएम किसान सम्मान निधि'
    ],

    voiceModalTitle: 'ध्वनि खोज सहायक (Voice Search)',
    voiceModalListening: 'आपकी आवाज सुनी जा रही है...',
    voiceModalInstruction: 'कृपया अपने माइक्रोफोन में हिंदी, मराठी या अंग्रेजी में स्पष्ट बोलें।',
    voiceModalSupportedLangs: 'सक्रिय भाषा इंजन: ',
    voiceModalTranscriptLabel: 'पहचाने गए शब्द:',
    voiceModalStop: 'सुनना बंद करें',
    voiceModalStart: 'बोलने के लिए दबाएं',
    voiceModalNotSupported: 'इस ब्राउज़र में वेब स्पीच सुविधा उपलब्ध नहीं है। कृपया नीचे दिए गए सर्च बार में लिखकर खोजें।',
    voiceModalErrorPermission: 'माइक्रोफोन की अनुमति नहीं मिली। कृपया ब्राउज़र सेटिंग्स में माइक की अनुमति दें या लिखकर खोजें।',
    voiceModalErrorNoSpeech: 'कोई आवाज सुनाई नहीं दी। कृपया बटन दबाकर दोबारा बोलें।',
    voiceModalClose: 'बंद करें',
    voiceModalSpeakNow: 'सुन रहे हैं... कृपया अपनी सेवा का नाम बोलें।',
    voiceModalMatchFound: 'संबंधित नागरिक सेवा मिली:',
    voiceModalNoMatch: 'सटीक शीर्षक नहीं मिला। मिलते-जुलते परिणाम दिखाए जा रहे हैं।',

    listenChecklist: 'दस्तावेज आवश्यकताएं सुनें (आवाज में)',
    stopAudio: 'आवाज बंद करें',
    playingAudio: 'दस्तावेज सूची पढ़कर सुनाई जा रही है...',
    audioNotSupported: 'इस ब्राउज़र में ऑडियो पढ़कर सुनाने की सुविधा समर्थित नहीं है।',

    advisoryTitle: 'महत्वपूर्ण नागरिक परामर्श एवं अस्वीकरण',
    advisoryText: 'यह वेब एप्लिकेशन नागरिक सेवाओं को आसानी से समझाने के लिए बनाया गया एक प्रदर्शन प्रोटोटाइप है। यह जानकारी केवल मार्गदर्शन के लिए है। आवेदन शुल्क, शपथ पत्र और अंतिम नियमों की पुष्टि हमेशा आधिकारिक सरकारी पोर्टलों (जैसे Aaple Sarkar, ServicePlus, India.gov.in) पर करें।',
    advisoryLearnMore: 'आधिकारिक पोर्टल सूची',

    categoriesTitle: 'सेवा श्रेणियां',
    categoriesSubtitle: 'प्रमुख सरकारी प्रमाणपत्रों और कल्याणकारी योजनाओं की सूची देखें',
    allCategories: 'सभी श्रेणियां',
    catCertificates: 'प्रमाणपत्र एवं सत्यापन',
    catRevenue: 'राजस्व एवं भूमि अभिलेख',
    catEducation: 'छात्रवृत्ति एवं शिक्षा',
    catWelfare: 'सामाजिक कल्याण एवं पेंशन',
    catHealth: 'स्वास्थ्य एवं परिवार कल्याण',
    catAgriculture: 'किसान एवं कृषि सहायता',
    catIdentity: 'नागरिक पहचान एवं पंजीकरण',

    servicesHeading: 'नागरिक सेवा निर्देशिका',
    servicesSubtitle: 'दस्तावेजों की स्पष्ट चेकलिस्ट, अनुमानित कार्य दिवस और चरण-दर-चरण आवेदन विधि',
    filterAllDepartments: 'सभी विभाग',
    servicesFoundCount: 'सेवाएं उपलब्ध',
    viewDetails: 'चेकलिस्ट एवं प्रक्रिया देखें',
    viewChecklist: 'दस्तावेज चेकलिस्ट',
    deptLabel: 'विभाग',
    timeLabel: 'अनुमानित समय',
    feeLabel: 'सरकारी शुल्क',
    validityLabel: 'वैधता',
    noServicesFound: 'आपकी खोज के अनुसार कोई सेवा नहीं मिली।',
    resetFilters: 'फ़िल्टर रीसेट करें',

    serviceDetailTitle: 'सेवा विवरण एवं दस्तावेज मार्गदर्शन',
    aboutService: 'इस सेवा के बारे में',
    eligibilityCriteria: 'पात्रता मापदंड',
    requiredDocuments: 'आवश्यक दस्तावेज चेकलिस्ट (जो आपके पास हैं उन्हें चुनें)',
    mandatoryTag: 'अनिवार्य',
    optionalTag: 'यदि लागू हो',
    acceptableProof: 'मान्य वैकल्पिक दस्तावेज',
    checkedCount: 'तैयार दस्तावेज (कुल में से):',
    checklistProgressNote: 'केंद्र जाने से पहले आप तैयार किए गए दस्तावेजों पर सही का निशान लगा सकते हैं।',
    applicationSteps: 'चरणबद्ध आवेदन प्रक्रिया',
    stepOnline: 'ऑनलाइन आवेदन विधि',
    stepOffline: 'जन सेवा केंद्र / तहसील पर',
    officialPortalsTitle: 'आधिकारिक सत्यापन एवं पोर्टल लिंक',
    externalLinkNotice: 'वास्तविक कानूनी आवेदन हमेशा इन अधिकृत सरकारी पोर्टलों पर करें:',
    officialPortalBadge: 'अधिकृत सरकारी पोर्टल',
    bookAssistanceForThis: 'डेमो केंद्र सहायता का अनुरोध करें',
    printChecklist: 'चेकलिस्ट प्रिंट / सुरक्षित करें',
    closeModal: 'बंद करें',

    providersHeading: 'नागरिक सुविधा केंद्र निर्देशिका',
    providersSubtitle: 'डिजिटल फॉर्म भरने और मार्गदर्शन के लिए कॉमन सर्विस सेंटर (CSC) व जन सेवा केंद्र देखें',
    providerDisclaimer: 'सूचना: यह प्रोटोटाइप परीक्षण हेतु तैयार किए गए यथार्थवादी नमूना (डेमो) केंद्र हैं। इनसे कोई वास्तविक फोन नंबर या सरकारी प्रणाली जुड़ी नहीं है।',
    filterByDistrict: 'जिले के अनुसार चुनें',
    filterByType: 'केंद्र का प्रकार',
    allDistricts: 'सभी जिले',
    allTypes: 'सभी केंद्र प्रकार',
    providerCardSampleBadge: 'नमूना सुविधा केंद्र',
    hoursLabel: 'समय',
    languagesLabel: 'सहायता की भाषाएं',
    servicesOfferedLabel: 'प्रमुख सेवाएं',
    wheelchairAccessible: 'भूतल पर व्हीलचेयर सुलभता उपलब्ध',
    biometricDeviceAvailable: 'आधार बायोमेट्रिक सत्यापन यंत्र उपलब्ध',
    requestAssistanceBtn: 'डेमो सहायता अनुरोध करें',
    noProvidersFound: 'चयनित फ़िल्टर के अनुसार कोई केंद्र नहीं मिला।',

    trackingHeading: 'डेमो अनुरोध एवं टोकन ट्रैकर',
    trackingSubtitle: 'स्थानीय रूप से बनाए गए सहायता टोकन की स्थिति और नागरिक कार्यप्रवाह चरण देखें',
    trackingDisclaimer: 'प्रदर्शन ट्रैकर: यह डेटा आपके ब्राउज़र के localStorage में सुरक्षित रहता है और पेज रीफ्रेश करने पर भी बना रहता है। यह किसी सरकारी सर्वर से जुड़ा नहीं है।',
    activeRequestsCount: 'सहेजे गए डेमो अनुरोध',
    searchTokenPlaceholder: 'टोकन संख्या खोजें (जैसे SUVIDHA-2026-...)',
    filterByStatus: 'स्थिति के अनुसार चुनें',
    allStatuses: 'सभी स्थितियां',
    statusSubmitted: 'सबमिट किया गया',
    statusInProgress: 'प्रगति पर है',
    statusVerificationPending: 'सत्यापन लंबित',
    statusCompleted: 'पूर्ण / स्वीकृत',
    tokenIdLabel: 'टोकन संख्या',
    applicantLabel: 'आवेदक का नाम',
    centerLabel: 'सुविधा केंद्र',
    serviceNameLabel: 'वांछित सेवा',
    dateLabel: 'अनुरोध दिनांक',
    statusTimelineLabel: 'प्रक्रिया इतिहास',
    simulateAdvanceStatus: 'अगले चरण पर ले जाएं (डेमो सिमुलेशन)',
    deleteRequest: 'हटाएं',
    noRequestsTitle: 'अभी तक कोई डेमो अनुरोध नहीं है',
    noRequestsSubtitle: 'किसी सेवा या केंद्र से डेमो अनुरोध दर्ज करें ताकि आप टोकन ट्रैकिंग का अनुभव देख सकें।',
    createSampleRequestBtn: 'एक नमूना अनुरोध अभी बनाएं',
    clearAllRequests: 'सभी अनुरोध हटाएं',

    bookingModalTitle: 'केंद्र सहायता अनुरोध (डेमो)',
    bookingModalSubtitle: 'नागरिक सुविधा कियोस्क पर फॉर्म भरने का समय निर्धारित करें',
    bookingDisclaimer: 'सुरक्षा एवं गोपनीयता सूचना: यह केवल एक प्रदर्शन फॉर्म है। अपना असली आधार नंबर, पैन नंबर या बैंक विवरण दर्ज न करें। केवल नमूना परीक्षण डेटा स्थानीय ब्राउज़र में रहता है।',
    selectServiceLabel: 'सरकारी सेवा चुनें',
    selectCenterLabel: 'पसंदीदा सुविधा केंद्र',
    applicantNameLabel: 'आवेदक का नाम (डेमो)',
    applicantPhoneLabel: 'डेमो मोबाइल नंबर',
    applicantPhoneHelp: 'केवल प्रोटोटाइप परीक्षण हेतु (उदा. 98000 00000)',
    assistanceTypeLabel: 'आवश्यक सहायता का प्रकार',
    typeDocCheck: 'दस्तावेजों की पूर्व-जांच एवं सत्यापन',
    typeFormFilling: 'ऑनलाइन फॉर्म भरने में सहायता',
    typeStatusInquiry: 'आवेदन स्थिति की जानकारी',
    typeGrievance: 'आपत्ति या निवारण स्पष्टीकरण',
    preferredSlotLabel: 'सुविधाजनक समय स्लॉट',
    slotMorning: 'सुबह (10:00 पूर्वाह्न - 01:00 अपराह्न)',
    slotAfternoon: 'दोपहर (01:30 अपराह्न - 04:30 अपराह्न)',
    slotEvening: 'शाम (04:30 अपराह्न - 06:30 अपराह्न)',
    notesLabel: 'विशेष टिप्पणी / प्रश्न (वैकल्पिक)',
    notesPlaceholder: 'यदि आपको भाषा सहायता या अन्य जानकारी चाहिए तो लिखें...',
    submitRequestBtn: 'डेमो टोकन नंबर बनाएं',
    submitting: 'टोकन बनाया जा रहा है...',
    bookingSuccessTitle: 'डेमो सहायता टोकन सफलतापूर्वक तैयार!',
    bookingSuccessMessage: 'आपका अनुरोध ब्राउज़र के localStorage में सहेज दिया गया है। आप इसे नीचे ट्रैक कर सकते हैं।',
    yourTokenNumber: 'आपकी डेमो टोकन संख्या:',
    copyToken: 'टोकन कॉपी करें',
    tokenCopied: 'कॉपी हो गया!',
    viewInDashboard: 'ट्रैकर डैशबोर्ड में देखें',
    bookAnother: 'अन्य सहायता अनुरोध करें',

    footerAboutTitle: 'सुविधा 4C व्हॉइस असिस्ट पहल',
    footerAboutText: 'भारतीय नागरिकों को आवश्यक प्रमाण पत्र और सरकारी योजनाओं की सटीक जानकारी प्रदान करने हेतु एक सुलभ, त्रिभाषी लोक-प्रौद्योगिकी प्रोटोटाइप।',
    footerOfficialPortalsTitle: 'अधिकृत सरकारी पोर्टल',
    footerNationalPortal: 'भारत का राष्ट्रीय पोर्टल (india.gov.in)',
    footerAapleSarkar: 'आपले सरकार महाऑनलाइन (aaplesarkar.mahaonline.gov.in)',
    footerDigiLocker: 'डिजिलॉकर डिजिटल दस्तावेज (digilocker.gov.in)',
    footerServicePlus: 'सर्विसप्लस राष्ट्रीय पोर्टल (serviceonline.gov.in)',
    footerAccessibilityTitle: 'नागरिक सुलभता मानक',
    footerAccessibilityText: 'उच्च कंट्रास्ट, त्रिभाषी आवाज खोज, टेक्स्ट-टू-स्पीच ध्वनि मार्गदर्शन और सभी मोबाइल व कंप्यूटर पर सहज उपयोग हेतु निर्मित।',
    footerDisclaimerText: 'अस्वीकरण: सुविधा 4C व्हॉइस असिस्ट एक स्वतंत्र शैक्षिक एवं तकनीकी प्रोटोटाइप है। इसका भारत सरकार या किसी राज्य सरकार से कोई आधिकारिक संबंध नहीं है। कानूनी आवेदन हेतु संबंधित सरकारी पोर्टल पर ही जाएं।',
    copyrightText: 'सुविधा 4C व्हॉइस असिस्ट • भारतीय नागरिकों की सुलभता हेतु निर्मित'
  },
  mr: {
    appTitle: 'सुविधा 4C व्हॉइस असिस्ट',
    appSubtitle: 'नागरी सेवा, कागदपत्र मार्गदर्शन आणि केंद्र सहाय्यक',
    nationalMotto: 'प्रत्येक नागरिकासाठी सुलभ लोकप्रशासन',
    prototypeNotice: 'प्रात्यक्षिक प्रोटोटाइप • खुला नागरी सुलभता प्रकल्प',
    prototypeBadge: 'डेमो प्रोटोटाइप',
    navServices: 'सेवा निर्देशिका',
    navProviders: 'सुविधा केंद्रे',
    navTrack: 'डेमो अर्ज ट्रॅक करा',
    navVoiceGuide: 'आवाज सहाय्यक',
    navBookAssistance: 'मदत नोंदवा',

    heroHeading: 'सरकारी नागरी सेवांची अचूक माहिती मिळवा आणि',
    heroHighlight: 'आवाजाने शोधा',
    heroSubheading: 'उत्पन्न दाखला, जातीचा दाखला, अधिवास (डोमिसाईल), शिष्यवृत्ती आणि शासकीय योजनांसाठी लागणाऱ्या कागदपत्रांची अचूक यादी समजून घ्या व आपले सरकार सेवा केंद्रांशी जोडा.',
    searchPlaceholder: 'सेवा शोधा उदा. उत्पन्न दाखला, जातीचा दाखला, रेशन कार्ड, शिष्यवृत्ती...',
    voiceSearchBtn: 'आवाजाने शोधा (माइक)',
    clearSearch: 'हटवा',
    voicePromptBadge: 'मराठी, हिंदी किंवा इंग्रजीत बोलून शोधा',
    popularSearchesLabel: 'वारंवार शोधल्या जाणाऱ्या सेवा:',
    quickPrompts: [
      'उत्पन्न दाखला',
      'जातीचा दाखला',
      'अधिवास व राष्ट्रीयत्व',
      'महाडीबीटी शिष्यवृत्ती',
      'रेशन कार्ड नाव जोडणे',
      'पीएम किसान सन्मान निधी'
    ],

    voiceModalTitle: 'ध्वनी शोध सहाय्यक (Voice Search)',
    voiceModalListening: 'तुमचा आवाज ऐकला जात आहे...',
    voiceModalInstruction: 'कृपया मायक्रोफोनमध्ये मराठी, हिंदी किंवा इंग्रजीत स्पष्ट बोला.',
    voiceModalSupportedLangs: 'सक्रिय भाषा इंजिन: ',
    voiceModalTranscriptLabel: 'ऐकलेले शब्द:',
    voiceModalStop: 'ऐकणे थांबवा',
    voiceModalStart: 'बोलण्यासाठी दाबा',
    voiceModalNotSupported: 'या ब्राउझरमध्ये वेब स्पीच तंत्रज्ञान समर्थित नाही. कृपया खाली दिलेल्या शोध चौकटीत लिहून शोधा.',
    voiceModalErrorPermission: 'मायक्रोफोनची परवानगी नाकारली गेली आहे. कृपया ब्राउझर सेटिंग्जमध्ये माइक सुरू करा किंवा लिहून शोधा.',
    voiceModalErrorNoSpeech: 'कोणताही आवाज ऐकू आला नाही. कृपया बटण दाबून पुन्हा बोला.',
    voiceModalClose: 'बंद करा',
    voiceModalSpeakNow: 'ऐकत आहोत... कृपया तुमच्या सेवेचे नाव उच्चारा.',
    voiceModalMatchFound: 'संबंधित नागरी सेवा सापडली:',
    voiceModalNoMatch: 'अचूक नाव सापडले नाही. जवळचे शोध निकाल दाखवत आहोत.',

    listenChecklist: 'कागदपत्रांची यादी ऐका (आवाजात)',
    stopAudio: 'आवाज बंद करा',
    playingAudio: 'कागदपत्रांची यादी वाचून दाखवली जात आहे...',
    audioNotSupported: 'या ब्राउझरमध्ये ऑडिओ वाचून दाखवण्याची सुविधा उपलब्ध नाही.',

    advisoryTitle: 'महत्त्वपूर्ण नागरी सूचना व अस्वीकरण',
    advisoryText: 'हे वेब ॲप्लिकेशन नागरिकांना शासकीय सेवा सहजपणे समजावून सांगण्यासाठी बनवलेले एक प्रात्यक्षिक प्रोटोटाइप आहे. ही माहिती मार्गदर्शनासाठी आहे. चालू शासकीय शुल्क, आवश्यक शपथपत्रे आणि अटींची खात्री अधिकृत सरकारी संकेतस्थळांवर (उदा. आपले सरकार, ServicePlus, India.gov.in) नक्की करा.',
    advisoryLearnMore: 'अधिकृत सरकारी संकेतस्थळे',

    categoriesTitle: 'सेवा संवर्ग',
    categoriesSubtitle: 'सर्वसामान्य शासकीय दाखले आणि कल्याणकारी योजनांची वर्गवारी',
    allCategories: 'सर्व संवर्ग',
    catCertificates: 'दाखले व प्रमाणपत्रे',
    catRevenue: 'महसूल व जमीन अभिलेख',
    catEducation: 'शिष्यवृत्ती व शिक्षण',
    catWelfare: 'सामाजिक न्याय व पेन्शन',
    catHealth: 'आरोग्य व कुटुंब कल्याण',
    catAgriculture: 'शेतकरी व कृषी योजना',
    catIdentity: 'नागरी ओळख व नोंदणी',

    servicesHeading: 'नागरी सेवा निर्देशिका',
    servicesSubtitle: 'कागदपत्रांची स्पष्ट यादी, अपेक्षित कामाचे दिवस आणि अर्ज करण्याची टप्प्याटप्प्याने पद्धत',
    filterAllDepartments: 'सर्व विभाग',
    servicesFoundCount: 'सेवा उपलब्ध',
    viewDetails: 'कागदपत्रे व पद्धत पहा',
    viewChecklist: 'कागदपत्रे चेकलिस्ट',
    deptLabel: 'विभाग',
    timeLabel: 'कामाचा कालावधी',
    feeLabel: 'शासकीय शुल्क',
    validityLabel: 'वैधता',
    noServicesFound: 'तुमच्या शोधानुसार कोणतीही सेवा सापडली नाही.',
    resetFilters: 'फिल्टर रीसेट करा',

    serviceDetailTitle: 'सेवा तपशील व कागदपत्र मार्गदर्शन',
    aboutService: 'या सेवेविषयी',
    eligibilityCriteria: 'पात्रतेचे निकष',
    requiredDocuments: 'आवश्यक कागदपत्रांची चेकलिस्ट (तुमच्याकडे असलेली निवडा)',
    mandatoryTag: 'अनिवार्य',
    optionalTag: 'लागू असल्यास',
    acceptableProof: 'मान्य पर्यायी कागदपत्रे',
    checkedCount: 'तयार कागदपत्रे (एकूण पैकी):',
    checklistProgressNote: 'केंद्रावर जाण्यापूर्वी तुम्ही गोळा केलेल्या कागदपत्रांवर टिकमार्क करू शकता.',
    applicationSteps: 'अर्ज करण्याची टप्प्याटप्प्याने पद्धत',
    stepOnline: 'ऑनलाईन पद्धत',
    stepOffline: 'आपले सरकार / सेतू केंद्रावर',
    officialPortalsTitle: 'अधिकृत पडताळणी व संकेतस्थळ दुवे',
    externalLinkNotice: 'कायदेशीर व अंतिम अर्ज नेहमी या अधिकृत सरकारी पोर्टलवरच सादर करा:',
    officialPortalBadge: 'अधिकृत शासकीय पोर्टल',
    bookAssistanceForThis: 'डेमो केंद्राकडे मदतीची नोंदणी करा',
    printChecklist: 'चेकलिस्ट प्रिंट / सेव्ह करा',
    closeModal: 'बंद करा',

    providersHeading: 'नागरी सुविधा केंद्र निर्देशिका',
    providersSubtitle: 'डिजिटल अर्ज भरण्यासाठी आपले सरकार सेवा केंद्र, सीएससी (CSC) आणि महाऑनलाइन केंद्र शोधा',
    providerDisclaimer: 'सूचना: ही प्रात्यक्षिक चाचणीसाठी तयार केलेली वास्तवदर्शी नमूना केंद्रे आहेत. यांच्याशी कोणताही प्रत्यक्ष फोन नंबर किंवा थेट शासकीय यंत्रणा जोडलेली नाही.',
    filterByDistrict: 'जिल्ह्यानुसार निवडा',
    filterByType: 'केंद्राचा प्रकार',
    allDistricts: 'सर्व जिल्हे',
    allTypes: 'सर्व केंद्र प्रकार',
    providerCardSampleBadge: 'नमूना सुविधा केंद्र',
    hoursLabel: 'कामाची वेळ',
    languagesLabel: 'मदतीची भाषा',
    servicesOfferedLabel: 'प्रमुख सहाय्य सेवा',
    wheelchairAccessible: 'तळमजल्यावर व्हीलचेअरची सुविधा उपलब्ध',
    biometricDeviceAvailable: 'आधार बायोमेट्रिक पडताळणी यंत्र उपलब्ध',
    requestAssistanceBtn: 'डेमो मदतीची नोंदणी करा',
    noProvidersFound: 'निवडलेल्या निकषांनुसार कोणतेही केंद्र सापडले नाही.',

    trackingHeading: 'डेमो अर्ज व टोकन ट्रॅकर',
    trackingSubtitle: 'स्थानिक पातळीवर तयार केलेल्या टोकनची सद्यस्थिती आणि टप्पे पहा',
    trackingDisclaimer: 'प्रात्यक्षिक ट्रॅकर: हा डेटा तुमच्या ब्राउझरच्या localStorage मध्ये सुरक्षित राहतो आणि पेज रिफ्रेश केल्यानंतरही कायम राहतो. हे कोणत्याही शासकीय सर्व्हरशी जोडलेले नाही.',
    activeRequestsCount: 'जतन केलेले डेमो अर्ज',
    searchTokenPlaceholder: 'टोकन क्रमांकाने शोधा (उदा. SUVIDHA-2026-...)',
    filterByStatus: 'स्थितीनुसार निवडा',
    allStatuses: 'सर्व स्थिती',
    statusSubmitted: 'अर्ज सादर झाला',
    statusInProgress: 'प्रक्रियेत आहे',
    statusVerificationPending: 'पडताळणी प्रलंबित',
    statusCompleted: 'पूर्ण / मंजूर',
    tokenIdLabel: 'टोकन क्रमांक',
    applicantLabel: 'अर्जदाराचे नाव',
    centerLabel: 'सुविधा केंद्र',
    serviceNameLabel: 'मागितलेली सेवा',
    dateLabel: 'नोंदणी तारीख',
    statusTimelineLabel: 'प्रक्रिया इतिहास',
    simulateAdvanceStatus: 'पुढील टप्प्यावर न्या (डेमो सिमुलेशन)',
    deleteRequest: 'हटवा',
    noRequestsTitle: 'अद्याप कोणतेही डेमो अर्ज नाहीत',
    noRequestsSubtitle: 'नागरिक आपल्या टोकनची स्थिती कशी पाहतात हे अनुभवण्यासाठी एका सेवेतून डेमो अर्ज नोंदवा.',
    createSampleRequestBtn: 'एक नमूना अर्ज त्वरित तयार करा',
    clearAllRequests: 'सर्व अर्ज हटवा',

    bookingModalTitle: 'केंद्र मदत नोंदणी (डेमो)',
    bookingModalSubtitle: 'नागरी सुविधा केंद्रात अर्ज भरण्यासाठी वेळ निश्चित करा',
    bookingDisclaimer: 'सुरक्षा व गोपनीयता सूचना: हा फक्त प्रात्यक्षिक फॉर्म आहे. आपला मूळ आधार नंबर, पॅन नंबर किंवा बँक खात्याची माहिती टाकू नका. फक्त चाचणी माहिती ब्राउझरमध्ये जतन होते.',
    selectServiceLabel: 'शासकीय सेवा निवडा',
    selectCenterLabel: 'पसंतीचे सुविधा केंद्र',
    applicantNameLabel: 'अर्जदाराचे नाव (डेमो)',
    applicantPhoneLabel: 'डेमो मोबाईल नंबर',
    applicantPhoneHelp: 'फक्त प्रोटोटाइप चाचणीसाठी (उदा. 98000 00000)',
    assistanceTypeLabel: 'आवश्यक मदतीचे स्वरूप',
    typeDocCheck: 'कागदपत्रांची पूर्व-तपासणी व पडताळणी',
    typeFormFilling: 'ऑनलाईन फॉर्म भरून घेणे',
    typeStatusInquiry: 'अर्जाच्या स्थितीची माहिती',
    typeGrievance: 'तक्रार निवारण किंवा आक्षेप स्पष्टीकरण',
    preferredSlotLabel: 'सोयीची वेळ',
    slotMorning: 'सकाळ (10:00 AM - 01:00 PM)',
    slotAfternoon: 'दुपार (01:30 PM - 04:30 PM)',
    slotEvening: 'संध्याकाळ (04:30 PM - 06:30 PM)',
    notesLabel: 'विशेष सूचना / प्रश्न (पर्यायी)',
    notesPlaceholder: 'भाषा साहाय्य किंवा अन्य शंका असल्यास नमूद करा...',
    submitRequestBtn: 'डेमो टोकन क्रमांक तयार करा',
    submitting: 'टोकन तयार होत आहे...',
    bookingSuccessTitle: 'डेमो मदत टोकन यशस्वीरीत्या तयार!',
    bookingSuccessMessage: 'तुमचा अर्ज ब्राउझरच्या localStorage मध्ये जतन केला आहे. तुम्ही खाली तो ट्रॅक करू शकता.',
    yourTokenNumber: 'तुमचा डेमो टोकन क्रमांक:',
    copyToken: 'टोकन कॉपी करा',
    tokenCopied: 'कॉपी झाले!',
    viewInDashboard: 'ट्रॅकर डॅशबोर्डमध्ये पहा',
    bookAnother: 'दुसरी मदत नोंदवा',

    footerAboutTitle: 'सुविधा 4C व्हॉइस असिस्ट प्रकल्प',
    footerAboutText: 'भारतीय नागरिकांना आवश्यक दाखले व शासकीय योजनांची अचूक माहिती देण्यासाठी बनवलेला सुलभ, त्रिभाषी लोक-तंत्रज्ञान प्रोटोटाइप.',
    footerOfficialPortalsTitle: 'अधिकृत शासकीय संकेतस्थळे',
    footerNationalPortal: 'भारताचे राष्ट्रीय पोर्टल (india.gov.in)',
    footerAapleSarkar: 'आपले सरकार महाऑनलाइन (aaplesarkar.mahaonline.gov.in)',
    footerDigiLocker: 'डिजिलॉकर डिजिटल कागदपत्रे (digilocker.gov.in)',
    footerServicePlus: 'सर्व्हिसप्लस राष्ट्रीय पोर्टल (serviceonline.gov.in)',
    footerAccessibilityTitle: 'नागरी सुलभता निकष',
    footerAccessibilityText: 'वाचनीय फॉन्ट, त्रिभाषी आवाज शोध, मजकूर-ते-आवाज (Text-to-speech) ऑडिओ मार्गदर्शन आणि मोबाईलवर सहज चालणारे डिझाइन.',
    footerDisclaimerText: 'अस्वीकरण: सुविधा 4C व्हॉइस असिस्ट हा एक स्वतंत्र शैक्षणिक व तंत्रज्ञान प्रोटोटाइप आहे. याचा भारत सरकार किंवा कोणत्याही राज्य शासनाशी थेट अधिकृत संबंध नाही. अधिकृत अर्जासाठी सरकारी पोर्टललाच भेट द्या.',
    copyrightText: 'सुविधा 4C व्हॉइस असिस्ट • भारतीय नागरिकांच्या सुलभतेसाठी निर्मित'
  }
};

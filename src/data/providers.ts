import type { ServiceProvider } from '../types';

export const providersData: ServiceProvider[] = [
  {
    id: 'prov-aaple-sarkar-dadar',
    name: {
      en: 'Aaple Sarkar Seva Kendra (VLE Center #104)',
      hi: 'आपले सरकार सेवा केंद्र (वीएलई केंद्र #104)',
      mr: 'आपले सरकार सेवा केंद्र (व्हीएलई केंद्र #१०४)'
    },
    type: 'aaple_sarkar',
    typeLabel: {
      en: 'Aaple Sarkar Seva Kendra',
      hi: 'आपले सरकार सेवा केंद्र',
      mr: 'आपले सरकार सेवा केंद्र'
    },
    state: 'Maharashtra',
    district: {
      en: 'Mumbai Suburban',
      hi: 'मुंबई उपनगर',
      mr: 'मुंबई उपनगर'
    },
    taluka: {
      en: 'Dadar West / G-North',
      hi: 'दादर पश्चिम / जी-उत्तर',
      mr: 'दादर पश्चिम / जी-उत्तर'
    },
    address: {
      en: 'Shop 4, Ground Floor, Civic Facilitation Complex, NC Kelkar Road, Dadar West',
      hi: 'दुकान 4, भूतल, नागरिक सुविधा संकुल, एन सी केळकर मार्ग, दादर पश्चिम',
      mr: 'दुकान क्र. ४, तळमजला, नागरी सुविधा संकुल, एन. सी. केळकर मार्ग, दादर पश्चिम'
    },
    landmark: {
      en: 'Near Dadar Railway Station (West) & Shivaji Park',
      hi: 'दादर रेलवे स्टेशन (पश्चिम) व शिवाजी पार्क के समीप',
      mr: 'दादर रेल्वे स्थानक (पश्चिम) व शिवाजी पार्क जवळ'
    },
    operatingHours: {
      en: '09:30 AM to 06:30 PM',
      hi: 'प्रातः 09:30 से सायं 06:30',
      mr: 'सकाळी ०९:३० ते संध्याकाळी ०६:३०'
    },
    workingDays: {
      en: 'Monday to Saturday (Closed on 2nd & 4th Saturday)',
      hi: 'सोमवार से शनिवार (द्वितीय व चतुर्थ शनिवार अवकाश)',
      mr: 'सोमवार ते शनिवार (दुसरा व चौथा शनिवार सुट्टी)'
    },
    languagesSpoken: ['Marathi', 'Hindi', 'English'],
    rating: 4.8,
    reviewCount: 342,
    wheelchairAccessible: true,
    biometricAuthAvailable: true,
    servicesSupported: [
      'srv-income-cert',
      'srv-caste-cert',
      'srv-domicile-cert',
      'srv-non-creamy-layer',
      'srv-mahadbt-scholarship',
      'srv-senior-citizen'
    ],
    tokenPrefix: 'MUM-DAD',
    sampleDisclaimer: {
      en: 'Demonstration Profile: Illustrative civic center created for prototype evaluation. No real telephonic hotline is active.',
      hi: 'प्रदर्शन प्रोफाइल: यह प्रोटोटाइप मूल्यांकन हेतु बनाया गया नमूना केंद्र है। कोई वास्तविक फोन हेल्पलाइन सक्रिय नहीं है।',
      mr: 'प्रात्यक्षिक प्रोफाइल: प्रोटोटाइप चाचणीसाठी तयार केलेले नमूना केंद्र. कोणताही प्रत्यक्ष फोन नंबर कार्यरत नाही.'
    }
  },
  {
    id: 'prov-csc-pune-shivajinagar',
    name: {
      en: 'Digital Seva Kendra (CSC Facilitation Hub #287)',
      hi: 'डिजिटल सेवा केंद्र (सीएससी सुविधा हब #287)',
      mr: 'डिजिटल सेवा केंद्र (सीएससी सुविधा केंद्र #२८७)'
    },
    type: 'csc',
    typeLabel: {
      en: 'Common Services Centre (CSC)',
      hi: 'कॉमन सर्विसेज सेंटर (सीएससी)',
      mr: 'कॉमन सर्व्हिसेस सेंटर (सीएससी)'
    },
    state: 'Maharashtra',
    district: {
      en: 'Pune',
      hi: 'पुणे',
      mr: 'पुणे'
    },
    taluka: {
      en: 'Haveli / Shivajinagar',
      hi: 'हवेली / शिवाजीनगर',
      mr: 'हवेली / शिवाजीनगर'
    },
    address: {
      en: 'Cabin 2B, Tahsil Office Sub-Center, FC Road Junction, Shivajinagar, Pune',
      hi: 'केबिन 2बी, तहसील कार्यालय उप-केंद्र, एफसी रोड जंक्शन, शिवाजीनगर, पुणे',
      mr: 'केबिन २-बी, तहसील कार्यालय उपकेंद्र, एफसी रोड जंक्शन, शिवाजीनगर, पुणे'
    },
    landmark: {
      en: 'Opposite Modern College & Near Shivajinagar Bus Stand',
      hi: 'मॉडर्न कॉलेज के सामने व शिवाजीनगर बस स्टैंड के निकट',
      mr: 'मॉडर्न कॉलेज समोर व शिवाजीनगर बस स्थानकाजवळ'
    },
    operatingHours: {
      en: '10:00 AM to 07:00 PM',
      hi: 'प्रातः 10:00 से सायं 07:00',
      mr: 'सकाळी १०:०० ते संध्याकाळी ०७:००'
    },
    workingDays: {
      en: 'All 7 Days Open (Sunday 10 AM to 2 PM for eKYC)',
      hi: 'सातों दिन खुला (रविवार प्रातः 10 से दोपहर 2 तक ई-केवाईसी हेतु)',
      mr: 'आठवड्याचे सर्व दिवस सुरू (रविवारी सकाळी १० ते दुपारी २ ई-केवायसीसाठी)'
    },
    languagesSpoken: ['Marathi', 'Hindi', 'English'],
    rating: 4.9,
    reviewCount: 512,
    wheelchairAccessible: true,
    biometricAuthAvailable: true,
    servicesSupported: [
      'srv-income-cert',
      'srv-caste-cert',
      'srv-domicile-cert',
      'srv-non-creamy-layer',
      'srv-mahadbt-scholarship',
      'srv-ration-card',
      'srv-pm-kisan'
    ],
    tokenPrefix: 'PUN-SHV',
    sampleDisclaimer: {
      en: 'Demonstration Profile: Illustrative civic center created for prototype evaluation. No real telephonic hotline is active.',
      hi: 'प्रदर्शन प्रोफाइल: यह प्रोटोटाइप मूल्यांकन हेतु बनाया गया नमूना केंद्र है। कोई वास्तविक फोन हेल्पलाइन सक्रिय नहीं है।',
      mr: 'प्रात्यक्षिक प्रोफाइल: प्रोटोटाइप चाचणीसाठी तयार केलेले नमूना केंद्र. कोणताही प्रत्यक्ष फोन नंबर कार्यरत नाही.'
    }
  },
  {
    id: 'prov-jan-seva-lucknow',
    name: {
      en: 'Jan Seva Kendra (e-District Facilitation Unit)',
      hi: 'जन सेवा केंद्र (ई-डिस्ट्रिक्ट नागरिक सुविधा इकाई)',
      mr: 'जन सेवा केंद्र (ई-डिस्ट्रिक्ट नागरी सुविधा केंद्र)'
    },
    type: 'jan_seva',
    typeLabel: {
      en: 'Jan Seva Kendra (UP e-District)',
      hi: 'जन सेवा केंद्र (उत्तर प्रदेश)',
      mr: 'जन सेवा केंद्र'
    },
    state: 'Uttar Pradesh',
    district: {
      en: 'Lucknow',
      hi: 'लखनऊ',
      mr: 'लखनौ'
    },
    taluka: {
      en: 'Sadar / Hazratganj',
      hi: 'सदर / हजरतगंज',
      mr: 'सदर / हजरतगंज'
    },
    address: {
      en: 'Booth 12, Vikas Bhawan Annexe, Near Collectorate, Hazratganj, Lucknow',
      hi: 'बूथ 12, विकास भवन एनेक्सी, कलेक्ट्रेट के पास, हजरतगंज, लखनऊ',
      mr: 'बूथ क्र. १२, विकास भवन, जिल्हाधिकारी कार्यालयाजवळ, हजरतगंज, लखनौ'
    },
    landmark: {
      en: 'Adjacent to Head Post Office & Gandhi Ashram',
      hi: 'प्रधान डाकघर एवं गांधी आश्रम के निकट',
      mr: 'मुख्य टपाल कार्यालय व गांधी आश्रम जवळ'
    },
    operatingHours: {
      en: '09:00 AM to 06:00 PM',
      hi: 'प्रातः 09:00 से सायं 06:00',
      mr: 'सकाळी ०९:०० ते संध्याकाळी ०६:००'
    },
    workingDays: {
      en: 'Monday to Saturday',
      hi: 'सोमवार से शनिवार',
      mr: 'सोमवार ते शनिवार'
    },
    languagesSpoken: ['Hindi', 'English'],
    rating: 4.7,
    reviewCount: 289,
    wheelchairAccessible: true,
    biometricAuthAvailable: true,
    servicesSupported: [
      'srv-income-cert',
      'srv-caste-cert',
      'srv-domicile-cert',
      'srv-ration-card',
      'srv-pm-kisan',
      'srv-senior-citizen'
    ],
    tokenPrefix: 'LKO-HAZ',
    sampleDisclaimer: {
      en: 'Demonstration Profile: Illustrative civic center created for prototype evaluation. No real telephonic hotline is active.',
      hi: 'प्रदर्शन प्रोफाइल: यह प्रोटोटाइप मूल्यांकन हेतु बनाया गया नमूना केंद्र है। कोई वास्तविक फोन हेल्पलाइन सक्रिय नहीं है।',
      mr: 'प्रात्यक्षिक प्रोफाइल: प्रोटोटाइप चाचणीसाठी तयार केलेले नमूना केंद्र. कोणताही प्रत्यक्ष फोन नंबर कार्यरत नाही.'
    }
  },
  {
    id: 'prov-suvidha-thane-east',
    name: {
      en: 'Suvidha Citizen Kiosk (Thane Municipal Zone 2)',
      hi: 'सुविधा नागरिक कियोस्क (ठाणे महानगरपालिका प्रभाग 2)',
      mr: 'सुविधा नागरी किऑस्क (ठाणे महानगरपालिका प्रभाग २)'
    },
    type: 'suvidha_kiosk',
    typeLabel: {
      en: 'Suvidha Citizen Kiosk',
      hi: 'सुविधा नागरिक कियोस्क',
      mr: 'सुविधा नागरी किऑस्क'
    },
    state: 'Maharashtra',
    district: {
      en: 'Thane',
      hi: 'ठाणे',
      mr: 'ठाणे'
    },
    taluka: {
      en: 'Thane East / Station Area',
      hi: 'ठाणे पूर्व / स्टेशन परिसर',
      mr: 'ठाणे पूर्व / स्टेशन परिसर'
    },
    address: {
      en: 'Ward Office Building, Ground Floor Counter 3, Kopri Road, Thane East',
      hi: 'वार्ड कार्यालय भवन, भूतल काउंटर 3, कोपरी रोड, ठाणे पूर्व',
      mr: 'प्रभाग समिती कार्यालय, तळमजला काउंटर ३, कोपरी रोड, ठाणे पूर्व'
    },
    landmark: {
      en: '2 Minutes walk from Thane Railway Station Platform 10 Exit',
      hi: 'ठाणे रेलवे स्टेशन प्लेटफार्म 10 निकास से 2 मिनट की दूरी',
      mr: 'ठाणे रेल्वे स्टेशन फलाट क्र. १० बाहेरून २ मिनिटांच्या अंतरावर'
    },
    operatingHours: {
      en: '09:00 AM to 05:30 PM',
      hi: 'प्रातः 09:00 से सायं 05:30',
      mr: 'सकाळी ०९:०० ते संध्याकाळी ०५:३०'
    },
    workingDays: {
      en: 'Monday to Friday',
      hi: 'सोमवार से शुक्रवार',
      mr: 'सोमवार ते शुक्रवार'
    },
    languagesSpoken: ['Marathi', 'Hindi', 'English'],
    rating: 4.6,
    reviewCount: 198,
    wheelchairAccessible: true,
    biometricAuthAvailable: false,
    servicesSupported: [
      'srv-income-cert',
      'srv-domicile-cert',
      'srv-ration-card',
      'srv-senior-citizen'
    ],
    tokenPrefix: 'THN-EST',
    sampleDisclaimer: {
      en: 'Demonstration Profile: Illustrative civic center created for prototype evaluation. No real telephonic hotline is active.',
      hi: 'प्रदर्शन प्रोफाइल: यह प्रोटोटाइप मूल्यांकन हेतु बनाया गया नमूना केंद्र है। कोई वास्तविक फोन हेल्पलाइन सक्रिय नहीं है।',
      mr: 'प्रात्यक्षिक प्रोफाइल: प्रोटोटाइप चाचणीसाठी तयार केलेले नमूना केंद्र. कोणताही प्रत्यक्ष फोन नंबर कार्यरत नाही.'
    }
  },
  {
    id: 'prov-mahaonline-nagpur',
    name: {
      en: 'MahaOnline Citizen Facilitator (Sitabuldi Hub)',
      hi: 'महाऑनलाइन नागरिक सहायक केंद्र (सीताबर्डी हब)',
      mr: 'महाऑनलाइन नागरी सहाय्य केंद्र (सीताबर्डी हब)'
    },
    type: 'mahaonline',
    typeLabel: {
      en: 'MahaOnline Facilitation Center',
      hi: 'महाऑनलाइन सुविधा केंद्र',
      mr: 'महाऑनलाइन सुविधा केंद्र'
    },
    state: 'Maharashtra',
    district: {
      en: 'Nagpur',
      hi: 'नागपुर',
      mr: 'नागपूर'
    },
    taluka: {
      en: 'Nagpur Urban / Sitabuldi',
      hi: 'नागपुर शहर / सीताबर्डी',
      mr: 'नागपूर शहर / सीताबर्डी'
    },
    address: {
      en: 'Complex 14, Commercial Center, Main Road, Sitabuldi, Nagpur',
      hi: 'परिसर 14, वाणिज्यिक केंद्र, मुख्य मार्ग, सीताबर्डी, नागपुर',
      mr: 'संकुल क्र. १४, व्यापारी केंद्र, मुख्य रस्ता, सीताबर्डी, नागपूर'
    },
    landmark: {
      en: 'Near Sitabuldi Metro Interchange & Fort Entrance',
      hi: 'सीताबर्डी मेट्रो स्टेशन व किला प्रवेश द्वार के समीप',
      mr: 'सीताबर्डी मेट्रो स्थानक व किल्ला प्रवेशद्वाराजवळ'
    },
    operatingHours: {
      en: '10:00 AM to 06:30 PM',
      hi: 'प्रातः 10:00 से सायं 06:30',
      mr: 'सकाळी १०:०० ते संध्याकाळी ०६:३०'
    },
    workingDays: {
      en: 'Monday to Saturday',
      hi: 'सोमवार से शनिवार',
      mr: 'सोमवार ते शनिवार'
    },
    languagesSpoken: ['Marathi', 'Hindi', 'English'],
    rating: 4.8,
    reviewCount: 412,
    wheelchairAccessible: true,
    biometricAuthAvailable: true,
    servicesSupported: [
      'srv-income-cert',
      'srv-caste-cert',
      'srv-domicile-cert',
      'srv-non-creamy-layer',
      'srv-mahadbt-scholarship',
      'srv-pm-kisan'
    ],
    tokenPrefix: 'NGP-SIT',
    sampleDisclaimer: {
      en: 'Demonstration Profile: Illustrative civic center created for prototype evaluation. No real telephonic hotline is active.',
      hi: 'प्रदर्शन प्रोफाइल: यह प्रोटोटाइप मूल्यांकन हेतु बनाया गया नमूना केंद्र है। कोई वास्तविक फोन हेल्पलाइन सक्रिय नहीं है।',
      mr: 'प्रात्यक्षिक प्रोफाइल: प्रोटोटाइप चाचणीसाठी तयार केलेले नमूना केंद्र. कोणताही प्रत्यक्ष फोन नंबर कार्यरत नाही.'
    }
  },
  {
    id: 'prov-csc-baramati-rural',
    name: {
      en: 'Gram Panchayat Sangram Kendra (CSC Rural VLE)',
      hi: 'ग्राम पंचायत संग्राम केंद्र (सीएससी ग्रामीण वीएलई)',
      mr: 'ग्रामपंचायत संग्राम केंद्र (सीएससी ग्रामीण व्हीएलई)'
    },
    type: 'csc',
    typeLabel: {
      en: 'Gram Panchayat Citizen Kiosk',
      hi: 'ग्राम पंचायत नागरिक कियोस्क',
      mr: 'ग्रामपंचायत नागरी किऑस्क'
    },
    state: 'Maharashtra',
    district: {
      en: 'Pune',
      hi: 'पुणे',
      mr: 'पुणे'
    },
    taluka: {
      en: 'Baramati Rural',
      hi: 'बारामती ग्रामीण',
      mr: 'बारामती ग्रामीण'
    },
    address: {
      en: 'Gram Panchayat Building, Main Bazar Chawk, Malegaon BK, Baramati',
      hi: 'ग्राम पंचायत भवन, मुख्य बाजार चौक, मालेगांव बुद्रुक, बारामती',
      mr: 'ग्रामपंचायत इमारत, मुख्य बाजार चौक, माळेगाव बुद्रुक, बारामती'
    },
    landmark: {
      en: 'Beside Cooperative Society & Primary Health Sub-Center',
      hi: 'सहकारी सोसायटी एवं प्राथमिक स्वास्थ्य केंद्र के पास',
      mr: 'विकास सोसायटी व प्राथमिक आरोग्य उपकेंद्राशेजारी'
    },
    operatingHours: {
      en: '08:30 AM to 05:30 PM',
      hi: 'प्रातः 08:30 से सायं 05:30',
      mr: 'सकाळी ०८:३० ते संध्याकाळी ०५:३०'
    },
    workingDays: {
      en: 'Monday to Saturday (Early morning for farmers)',
      hi: 'सोमवार से शनिवार (किसानों की सुविधा हेतु प्रातः जल्दी)',
      mr: 'सोमवार ते शनिवार (शेतकऱ्यांच्या सोयीसाठी सकाळी लवकर)'
    },
    languagesSpoken: ['Marathi', 'Hindi'],
    rating: 4.9,
    reviewCount: 275,
    wheelchairAccessible: true,
    biometricAuthAvailable: true,
    servicesSupported: [
      'srv-income-cert',
      'srv-caste-cert',
      'srv-pm-kisan',
      'srv-ration-card',
      'srv-senior-citizen'
    ],
    tokenPrefix: 'BRM-MAL',
    sampleDisclaimer: {
      en: 'Demonstration Profile: Illustrative civic center created for prototype evaluation. No real telephonic hotline is active.',
      hi: 'प्रदर्शन प्रोफाइल: यह प्रोटोटाइप मूल्यांकन हेतु बनाया गया नमूना केंद्र है। कोई वास्तविक फोन हेल्पलाइन सक्रिय नहीं है।',
      mr: 'प्रात्यक्षिक प्रोफाइल: प्रोटोटाइप चाचणीसाठी तयार केलेले नमूना केंद्र. कोणताही प्रत्यक्ष फोन नंबर कार्यरत नाही.'
    }
  }
];

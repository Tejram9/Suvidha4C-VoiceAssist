import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-income-cert',
    slug: 'income-certificate',
    category: 'revenue',
    categoryName: {
      en: 'Revenue & Land Records',
      hi: 'राजस्व एवं भूमि अभिलेख',
      mr: 'महसूल व जमीन अभिलेख'
    },
    title: {
      en: 'Income Certificate (1 Year / 3 Years)',
      hi: 'आय प्रमाण पत्र (1 वर्ष / 3 वर्ष)',
      mr: 'उत्पन्न दाखला (१ वर्ष / ३ वर्षे)'
    },
    department: {
      en: 'Revenue Department / Tahsildar Office',
      hi: 'राजस्व विभाग / तहसीलदार कार्यालय',
      mr: 'महसूल विभाग / तहसीलदार कार्यालय'
    },
    shortDescription: {
      en: 'Official revenue document certifying the annual family income for scholarships, fee concessions, and welfare schemes.',
      hi: 'छात्रवृत्ति, शिक्षण शुल्क छूट और सरकारी योजनाओं के लिए परिवार की वार्षिक आय प्रमाणित करने वाला दस्तावेज।',
      mr: 'शिष्यवृत्ती, शैक्षणिक सवलती आणि शासकीय योजनांसाठी कुटुंबाचे वार्षिक उत्पन्न प्रमाणित करणारा अधिकृत दाखला.'
    },
    fullDescription: {
      en: 'An Income Certificate is an official document issued by the State Revenue Department (Tahsildar / Sub-Divisional Officer) verifying the total annual income of an individual or family from all declared sources (agriculture, salary, business, daily wages). It is essential for availing government welfare schemes, college fee concessions, and school scholarships.',
      hi: 'आय प्रमाण पत्र राज्य के राजस्व विभाग द्वारा जारी किया जाने वाला एक अधिकृत दस्तावेज है जो सभी स्रोतों से आवेदक अथवा उसके परिवार की वार्षिक आय को सत्यापित करता है। यह विभिन्न सरकारी अनुदानों, ईबीसी रियायतों और छात्रवृत्ति योजनाओं के लिए अत्यंत आवश्यक है।',
      mr: 'उत्पन्न दाखला हा राज्य शासनाच्या महसूल विभागामार्फत (तहसीलदार अथवा उपविभागीय अधिकारी) दिला जाणारा दाखला आहे. या द्वारे अर्जदार किंवा त्यांच्या कुटुंबाचे सर्व मार्गांनी मिळणारे वार्षिक उत्पन्न प्रमाणित केले जाते. शैक्षणिक सवलती, महाडीबीटी शिष्यवृत्ती आणि शासकीय योजनांसाठी हा दाखला अनिवार्य असतो.'
    },
    estimatedDays: {
      en: '7 to 15 Working Days',
      hi: '7 से 15 कार्य दिवस',
      mr: '७ ते १५ कामकाजाचे दिवस'
    },
    fee: {
      en: '₹33 to ₹55 (Statutory Govt / Kendra Fee)',
      hi: '₹33 से ₹55 (शासकीय / केंद्र सुविधा शुल्क)',
      mr: '₹३३ ते ₹५५ (शासकीय व सेवा केंद्र शुल्क)'
    },
    validity: {
      en: 'Valid up to 31st March of the respective financial year (1 or 3 Years as issued)',
      hi: 'संबंधित वित्तीय वर्ष के 31 मार्च तक मान्य (जारी अवधि के अनुसार 1 या 3 वर्ष)',
      mr: 'संबंधित आर्थिक वर्षाच्या ३१ मार्चपर्यंत वैध (१ किंवा ३ वर्षांसाठी)'
    },
    eligibility: {
      en: [
        'Applicant or parent/guardian must be a resident of the respective State/District.',
        'Must possess legitimate proof of annual earnings or salary slip / employer certificate.',
        'Agricultural land holders must submit 7/12 & 8A extract with Talathi income report.'
      ],
      hi: [
        'आवेदक या अभिभावक संबंधित राज्य/जिले का मूल निवासी होना चाहिए।',
        'वार्षिक आय का वैध प्रमाण (वेतन पर्ची / आयकर रिटर्न / तलाठी रिपोर्ट) होना आवश्यक है।',
        'कृषक परिवारों हेतु 7/12 व 8अ उतारा एवं पटवारी रिपोर्ट प्रस्तुत करनी होती है।'
      ],
      mr: [
        'अर्जदार अथवा पालक संबंधित राज्य किंवा जिल्ह्याचे रहिवासी असावेत.',
        'वार्षिक उत्पन्नाचा वैध पुरावा (वेतन प्रमाणपत्र / आयटीआर / तलाठी अहवाल) असणे आवश्यक.',
        'शेतजमीन असल्यास ७/१२ व ८-अ उतारा व तलाठी यांचा पंचनामा अहवाल आवश्यक.'
      ]
    },
    documents: [
      {
        id: 'inc-doc-1',
        name: {
          en: 'Proof of Identity (Any One)',
          hi: 'पहचान का प्रमाण (कोई एक)',
          mr: 'ओळखीचा पुरावा (कोणताही एक)'
        },
        mandatory: true,
        description: {
          en: 'Aadhaar Card, Voter Identity Card, Passport, or PAN Card of applicant/head of family.',
          hi: 'आधार कार्ड, मतदाता पहचान पत्र, पासपोर्ट अथवा पैन कार्ड।',
          mr: 'आधार कार्ड, मतदार ओळखपत्र, पासपोर्ट किंवा पॅन कार्ड.'
        },
        acceptableAlternatives: {
          en: ['Aadhaar Card', 'Voter ID', 'Passport', 'Driving License', 'MNREGA Job Card'],
          hi: ['आधार कार्ड', 'मतदाता पहचान पत्र', 'पासपोर्ट', 'ड्राइविंग लाइसेंस'],
          mr: ['आधार कार्ड', 'मतदार ओळखपत्र', 'पासपोर्ट', 'वाहन चालवण्याचा परवाना']
        }
      },
      {
        id: 'inc-doc-2',
        name: {
          en: 'Proof of Address (Any One)',
          hi: 'पते का प्रमाण (कोई एक)',
          mr: 'पत्त्याचा पुरावा (कोणताही एक)'
        },
        mandatory: true,
        description: {
          en: 'Ration Card, Electricity Bill (not older than 3 months), Water Bill, or Property Tax Receipt.',
          hi: 'राशन कार्ड, बिजली बिल (3 माह से अधिक पुराना न हो), पानी का बिल या हाउस टैक्स रसीद।',
          mr: 'रेशन कार्ड, वीज बिल (३ महिन्यांपेक्षा जुने नसावे), पाणी बिल किंवा घरपट्टी पावती.'
        },
        acceptableAlternatives: {
          en: ['Ration Card', 'Electricity Bill', 'Telephone Bill', 'Rent Agreement with Police Verification'],
          hi: ['राशन कार्ड', 'बिजली बिल', 'टेलीफोन बिल', 'पंजीकृत किरायानामा'],
          mr: ['रेशन कार्ड', 'लाईट बिल', 'टेलिफोन बिल', 'नोंदणीकृत भाडे करारनामा']
        }
      },
      {
        id: 'inc-doc-3',
        name: {
          en: 'Income Proof / Salary Certificate / Talathi Report',
          hi: 'आय का प्रमाण / वेतन पर्ची / पटवारी रिपोर्ट',
          mr: 'उत्पन्नाचा पुरावा / वेतन प्रमाणपत्र / तलाठी अहवाल'
        },
        mandatory: true,
        description: {
          en: 'Form 16 or Salary Slip from Employer (salaried), ITR acknowledgement (business), or Talathi / Patwari inquiry report (agriculture/daily wages).',
          hi: 'वेतनभोगी हेतु फॉर्म 16 या वेतन पर्ची; व्यवसाय हेतु आयकर रिटर्न; कृषक हेतु पटवारी/तलाठी जांच रिपोर्ट।',
          mr: 'नोकरदारांसाठी फॉर्म १६ किंवा वेतन पावती; व्यावसायिकांसाठी आयटीआर; शेतकरी/मजूर वर्गासाठी तलाठी पंचनामा अहवाल.'
        }
      },
      {
        id: 'inc-doc-4',
        name: {
          en: 'Self-Declaration Form / Affidavit',
          hi: 'स्व-घोषणा पत्र / शपथ पत्र',
          mr: 'स्वयंघोषणापत्र / प्रतिज्ञापत्र'
        },
        mandatory: true,
        description: {
          en: 'Signed self-declaration stating family income from all sources as per prescribed government format.',
          hi: 'निर्धारित प्रारूप में परिवार की कुल आय घोषित करने वाला हस्ताक्षरित स्व-घोषणा पत्र।',
          mr: 'शासनाच्या विहित नमुन्यातील सही केलेले स्वयंघोषणापत्र.'
        }
      },
      {
        id: 'inc-doc-5',
        name: {
          en: 'Passport Size Photograph',
          hi: 'पासपोर्ट आकार की रंगीन फोटो',
          mr: 'पासपोर्ट आकाराचा रंगीत फोटो'
        },
        mandatory: true,
        description: {
          en: 'Recent colored passport photograph with white background (5KB to 20KB for online upload).',
          hi: 'सफेद पृष्ठभूमि वाली हाल की रंगीन फोटो।',
          mr: 'पांढऱ्या पार्श्वभूमीवरील अलीकडील रंगीत पासपोर्ट फोटो.'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Gather Document Checklist',
          hi: 'कागदपत्र सूची तैयार करें',
          mr: 'कागदपत्रांची पूर्तता करा'
        },
        details: {
          en: 'Collect address proof, ID proof, income evidence (salary slip/Talathi report) and signed self-declaration form.',
          hi: 'पहचान पत्र, निवास प्रमाण, आय प्रमाण (वेतन पर्ची या पटवारी रिपोर्ट) और स्व-घोषणा पत्र एकत्र करें।',
          mr: 'ओळखपत्र, पत्त्याचा पुरावा, उत्पन्नाचा पुरावा (पगार पावती / तलाठी अहवाल) आणि स्वयंघोषणापत्र गोळा करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Submit Application Online or at Kendra',
          hi: 'ऑनलाइन या नजदीकी केंद्र पर आवेदन करें',
          mr: 'ऑनलाईन अथवा केंद्रावर अर्ज नोंदवा'
        },
        details: {
          en: 'Log in to Aaple Sarkar / ServicePlus state portal, select Revenue Department -> Income Certificate, fill details, upload scanned documents and pay the prescribed fee.',
          hi: 'आपले सरकार / सर्विसप्लस पोर्टल पर जाएं, आय प्रमाण पत्र चुनें, विवरण भरें, दस्तावेज अपलोड करें और निर्धारित शुल्क का भुगतान करें।',
          mr: 'आपले सरकार किंवा सर्विसप्लस पोर्टलवर नोंदणी करा, महसूल विभाग -> उत्पन्न दाखला निवडा, माहिती भरा, कागदपत्रे अपलोड करून शुल्क भरा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Scrutiny & Verification by Revenue Officer',
          hi: 'राजस्व अधिकारी द्वारा जांच एवं सत्यापन',
          mr: 'मंडळ अधिकारी व तहसीलदार तपासणी'
        },
        details: {
          en: 'Circle Officer / Nayab Tahsildar reviews submitted documents and approves or requests additional clarification.',
          hi: 'नायब तहसीलदार अथवा राजस्व निरीक्षक दस्तावेजों की जांच करते हैं और रिपोर्ट प्रस्तुत करते हैं।',
          mr: 'मंडळ अधिकारी व नायब तहसीलदार कागदपत्रांची पडताळणी करून मंजुरी अहवाल सादर करतात.'
        },
        mode: 'both'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Download Digitally Signed Certificate',
          hi: 'डिजिटल हस्ताक्षरित प्रमाण पत्र डाउनलोड करें',
          mr: 'डिजिटल स्वाक्षरीचा दाखला डाऊनलोड करा'
        },
        details: {
          en: 'Upon approval, download the digitally signed certificate with QR code directly from the portal or collect it from your Kendra.',
          hi: 'स्वीकृति मिलने पर क्यूआर कोड युक्त डिजिटल हस्ताक्षरित प्रमाण पत्र पोर्टल से डाउनलोड करें या केंद्र से प्राप्त करें।',
          mr: 'मंजुरीनंतर क्यूआर कोड असलेला डिजिटल स्वाक्षरीचा दाखला पोर्टलवरून डाउनलोड करा किंवा केंद्रावरून प्राप्त करा.'
        },
        mode: 'both'
      }
    ],
    officialLinks: [
      {
        title: {
          en: 'Aaple Sarkar MahaOnline (Maharashtra)',
          hi: 'आपले सरकार महाऑनलाइन (महाराष्ट्र)',
          mr: 'आपले सरकार महाऑनलाइन (महाराष्ट्र)'
        },
        url: 'https://aaplesarkar.mahaonline.gov.in',
        portalName: 'Aaple Sarkar',
        level: 'Maharashtra'
      },
      {
        title: {
          en: 'National Portal of India Services',
          hi: 'भारत का राष्ट्रीय पोर्टल सेवाएं',
          mr: 'भारताचे राष्ट्रीय पोर्टल सेवा'
        },
        url: 'https://services.india.gov.in',
        portalName: 'National Services Portal',
        level: 'All India'
      },
      {
        title: {
          en: 'ServicePlus Central e-District Gateway',
          hi: 'सर्विसप्लस ई-डिस्ट्रिक्ट गेटवे',
          mr: 'सर्व्हिसप्लस ई-डिस्ट्रिक्ट पोर्टल'
        },
        url: 'https://serviceonline.gov.in',
        portalName: 'ServicePlus',
        level: 'Central'
      }
    ],
    importantNotice: {
      en: 'Note: Rules and required income slabs vary between State governments. Please verify details on your respective State portal before final submission.',
      hi: 'सूचना: आय सीमा और आवश्यक शपथ पत्र राज्य सरकार के नियमानुसार भिन्न हो सकते हैं। अंतिम आवेदन से पहले अपने राज्य के आधिकारिक पोर्टल पर पुष्टि करें।',
      mr: 'टीप: उत्पन्नाचे निकष आणि आवश्यक प्रतिज्ञापत्रे राज्य शासनाच्या नियमांनुसार बदलू शकतात. अंतिम अर्ज करण्यापूर्वी अधिकृत पोर्टलवर खात्री करा.'
    },
    keywords: [
      'income certificate', 'utpanna dakhla', 'aay praman patra', 'income proof', 'tahsildar', 'salary certificate',
      'उत्पन्न दाखला', 'आय प्रमाण पत्र', 'तहसीलदार', 'पगार दाखला', 'उत्पन्न', 'aay', 'income'
    ]
  },
  {
    id: 'srv-caste-cert',
    slug: 'caste-certificate',
    category: 'certificates',
    categoryName: {
      en: 'Certificates & Attestation',
      hi: 'प्रमाणपत्र एवं सत्यापन',
      mr: 'दाखले व प्रमाणपत्रे'
    },
    title: {
      en: 'Caste Certificate (SC / ST / VJNT / OBC / SBC)',
      hi: 'जाति प्रमाण पत्र (अनुसूचित जाति / जनजाति / अन्य पिछड़ा वर्ग)',
      mr: 'जातीचा दाखला (SC / ST / VJNT / OBC / SBC)'
    },
    department: {
      en: 'Social Justice & Special Assistance Department / SDO',
      hi: 'सामाजिक न्याय एवं विशेष सहायता विभाग / उपजिलाधिकारी',
      mr: 'सामाजिक न्याय व विशेष सहाय्य विभाग / उपविभागीय अधिकारी (SDO)'
    },
    shortDescription: {
      en: 'Formal certificate establishing membership of a recognized backward community, essential for reservations and welfare programs.',
      hi: 'आरक्षण, छात्रवृत्ति और सरकारी योजनाओं के लाभ हेतु निर्धारित समुदाय की सदस्यता प्रमाणित करने वाला दस्तावेज।',
      mr: 'आरक्षण, शैक्षणिक सवलती आणि शासकीय कल्याणकारी योजनांसाठी जात प्रमाणित करणारा अधिकृत दाखला.'
    },
    fullDescription: {
      en: 'A Caste Certificate is a legally recognized document issued by the Competent Authority (Sub-Divisional Magistrate / SDO / Deputy Collector) affirming that a person belongs to a specific Scheduled Caste (SC), Scheduled Tribe (ST), Vimukta Jati / Nomadic Tribes (VJNT), or Other Backward Classes (OBC). Crucial for school/college admissions, competitive exams, and government job reservations.',
      hi: 'जाति प्रमाण पत्र सक्षम प्राधिकारी द्वारा जारी किया जाने वाला एक विधिक दस्तावेज है जो यह प्रमाणित करता है कि व्यक्ति किसी विशिष्ट अनुसूचित जाति, अनुसूचित जनजाति अथवा अन्य पिछड़े वर्ग से संबंधित है। यह शैक्षणिक संस्थानों में प्रवेश और नौकरियों में आरक्षण हेतु आवश्यक होता है।',
      mr: 'जातीचा दाखला हा सक्षम प्राधिकाऱ्यांमार्फत (उपविभागीय दंडाधिकारी / उपविभागीय अधिकारी) दिला जाणारा कायदेशीर दाखला आहे. या द्वारे संबंधित व्यक्ती विहित अनुसूचित जाती, अनुसूचित जमाती, विमुक्त जाती व भटक्या जमाती किंवा इतर मागासवर्गातील असल्याचा अधिकृत पुरावा मिळतो.'
    },
    estimatedDays: {
      en: '21 to 45 Working Days',
      hi: '21 से 45 कार्य दिवस',
      mr: '२१ ते ४५ कामकाजाचे दिवस'
    },
    fee: {
      en: '₹33 to ₹65 (Statutory Portal / CSC Fee)',
      hi: '₹33 से ₹65 (शासकीय एवं सुविधा शुल्क)',
      mr: '₹३३ ते ₹६५ (शासकीय व सेवा केंद्र शुल्क)'
    },
    validity: {
      en: 'Lifetime validity (Caste validity certificate may be required separately for higher education/jobs)',
      hi: 'आजीवन वैध (उच्च शिक्षा अथवा नौकरी हेतु अलग से जाति वैधता प्रमाण पत्र की आवश्यकता हो सकती है)',
      mr: 'आजीवन वैध (उच्च शिक्षण किंवा शासकीय सेवेसाठी जात पडताळणी प्रमाणपत्र - Caste Validity स्वतंत्रपणे आवश्यक असते)'
    },
    eligibility: {
      en: [
        'Applicant must belong to a community recognized in the State or Central reservation lists.',
        'Must provide documentary genealogical evidence of blood relation (father, grandfather, paternal uncle).',
        'Caste cut-off date document (e.g. 1950 for SC/ST, 1961 for VJNT, 1967 for OBC in Maharashtra).'
      ],
      hi: [
        'आवेदक राज्य अथवा केंद्र सरकार की अधिसूचित आरक्षित सूची के समुदाय का होना चाहिए।',
        'पैतृक रक्त संबंध (पिता, दादा, चाचा) के जाति संबंधी पुराने दस्तावेज प्रस्तुत करना अनिवार्य है।',
        'कट-ऑफ दिनांक पूर्व का प्रमाण पत्र/अभिलेख (जैसे एससी/एसटी हेतु 1950, ओबीसी हेतु 1967)।'
      ],
      mr: [
        'अर्जदार राज्य किंवा केंद्र शासनाच्या अधिसूचित आरक्षित प्रवर्गातील असणे आवश्यक.',
        'रक्ताच्या नात्यातील (वडील, आजोबा, काका) जुने जात नोंद असलेले पुरावे आवश्यक.',
        'मानक दिनांकापूर्वीचा पुरावा (उदा. SC/ST साठी १९५०, VJNT साठी १९६१, OBC साठी १९६७).'
      ]
    },
    documents: [
      {
        id: 'cst-doc-1',
        name: {
          en: "Applicant's School Leaving Certificate (TC)",
          hi: 'आवेदक का स्कूल लीविंग सर्टिफिकेट / टीसी',
          mr: 'अर्जदाराचा शाळा सोडल्याचा दाखला (टी.सी.)'
        },
        mandatory: true,
        description: {
          en: 'Original / certified copy of School Leaving Certificate explicitly stating the caste and sub-caste.',
          hi: 'स्पष्ट रूप से जाति एवं उपजाति दर्ज स्कूल छोड़ने का प्रमाण पत्र (स्थानांतरण प्रमाण पत्र)।',
          mr: 'जात आणि पोटजात स्पष्टपणे नमूद असलेला शाळा सोडल्याचा मूळ किंवा प्रमाणित दाखला.'
        }
      },
      {
        id: 'cst-doc-2',
        name: {
          en: "Father's / Grandfather's School Leaving Certificate or Birth Extract",
          hi: 'पिता या दादाजी का स्कूल टीसी अथवा जन्म अभिलेख',
          mr: 'वडिलांचा / आजोबांचा शाळा सोडल्याचा दाखला किंवा जन्म नोंद'
        },
        mandatory: true,
        description: {
          en: 'Historic school record, birth register extract, or service book entry reflecting caste prior to statutory cut-off year.',
          hi: 'कट-ऑफ वर्ष से पूर्व का पिता या दादाजी का जाति दर्शाने वाला विद्यालय रिकॉर्ड या जन्म प्रमाण।',
          mr: 'मानक दिनांकापूर्वीचा वडिलांचा किंवा आजोबांचा जात नमूद असलेला शाळेचा दाखला किंवा जन्म नोंद उतारा.'
        }
      },
      {
        id: 'cst-doc-3',
        name: {
          en: 'Aadhaar Card and Identity Proof',
          hi: 'आधार कार्ड एवं पहचान का प्रमाण',
          mr: 'आधार कार्ड व ओळखीचा पुरावा'
        },
        mandatory: true,
        description: {
          en: 'Aadhaar Card of the applicant and father/guardian.',
          hi: 'आवेदक तथा पिता/अभिभावक का आधार कार्ड।',
          mr: 'अर्जदार आणि वडील/पालक यांचे आधार कार्ड.'
        }
      },
      {
        id: 'cst-doc-4',
        name: {
          en: 'Genealogy Affidavit (Vanshavali) on Stamp Paper',
          hi: 'वंशावली शपथ पत्र (स्टाम्प पेपर पर)',
          mr: 'वंशावळ प्रतिज्ञापत्र (स्टॅम्प पेपरवर)'
        },
        mandatory: true,
        description: {
          en: 'Family tree depicting relation with the relative whose historic caste proof is attached, duly notarized.',
          hi: 'पैतृक रक्त संबंध दर्शाने वाली नोटरीकृत वंशावली तालिका।',
          mr: 'ज्या नातेवाईकाचा जुना जात पुरावा जोडला आहे त्यांच्याशी रक्ताचे नाते दर्शवणारी नोटरीकृत वंशावळ.'
        }
      },
      {
        id: 'cst-doc-5',
        name: {
          en: 'Proof of Residence in the State on Cut-off Date',
          hi: 'कट-ऑफ वर्ष पर राज्य में निवास का प्रमाण',
          mr: 'मानक दिनांकास संबंधित राज्यात वास्तव्याचा पुरावा'
        },
        mandatory: false,
        description: {
          en: 'Old land records (7/12 extract), property tax receipt, or census record prior to cut-off year.',
          hi: 'पुराना भू-अभिलेख, खतौनी, गृहकर पावती या 1950/1967 पूर्व का अधिवास साक्ष्य।',
          mr: 'जुना ७/१२ उतारा, घरपट्टी पावती किंवा मानक दिनांकापूर्वीचे जुने महसूल अभिलेख.'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Prepare Family Tree & Old Caste Records',
          hi: 'वंशावली एवं पुराने जात अभिलेख एकत्रित करें',
          mr: 'वंशावळ व जुने जात पुरावे गोळा करा'
        },
        details: {
          en: 'Locate paternal relative school records, birth extracts, and prepare the notarized family genealogy chart.',
          hi: 'पिता/दादाजी के पुराने स्कूल रिकॉर्ड व जन्म अभिलेख प्राप्त कर वंशावली शपथ पत्र तैयार कराएं।',
          mr: 'वडिलांचे किंवा आजोबांचे जुने पुरावे मिळवून विहित नमुन्यात वंशावळ तयार करून नोटरी करून घ्या.'
        },
        mode: 'both'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Submit Application via Aaple Sarkar / ServicePlus',
          hi: 'ऑनलाइन पोर्टल पर आवेदन जमा करें',
          mr: 'ऑनलाईन पोर्टलवर अर्ज सादर करा'
        },
        details: {
          en: 'Register on the state portal, select Caste Certificate under Revenue/Social Justice, upload clear scanned PDF copies of proofs.',
          hi: 'पोर्टल पर जाति प्रमाण पत्र सेवा चुनें, विवरण भरें, प्रमाण पत्रों की स्कैन कॉपी अपलोड करें और पावती प्राप्त करें।',
          mr: 'पोर्टलवर नोंदणी करून सामाजिक न्याय/महसूल विभाग अंतर्गत जातीचा दाखला अर्ज भरा आणि सर्व कागदपत्रे अपलोड करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Field Inquiry & Committee Scrutiny',
          hi: 'क्षेत्रीय जांच एवं उपजिलाधिकारी सत्यापन',
          mr: 'क्षेत्रीय चौकशी व उपविभागीय अधिकारी तपासणी'
        },
        details: {
          en: 'Tahsildar / Sub-Divisional Officer conducts inquiry into genealogy and community records.',
          hi: 'तहसीलदार व उपविभागीय अधिकारी वंशावली और सामाजिक अभिलेखों का सत्यापन करते हैं।',
          mr: 'तहसीलदार व उपविभागीय अधिकारी (SDO) यांच्यामार्फत वंशावळ आणि मूळ कागदपत्रांची पडताळणी होते.'
        },
        mode: 'both'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Issuance with Digital Signature & Barcode',
          hi: 'डिजिटल हस्ताक्षरित प्रमाण पत्र जारी होना',
          mr: 'डिजिटल स्वाक्षरीसह दाखला प्राप्त करा'
        },
        details: {
          en: 'Download the permanent caste certificate with digital seal, or collect the certificate with holo-sticker from your Seva Kendra.',
          hi: 'डिजिटल सील युक्त प्रमाण पत्र डाउनलोड करें अथवा अपने सुविधा केंद्र से प्राप्त करें।',
          mr: 'डिजिटल स्वाक्षरीचा जातीचा दाखला डाऊनलोड करा अथवा आपल्या केंद्रावरून मूळ प्रत मिळवा.'
        },
        mode: 'both'
      }
    ],
    officialLinks: [
      {
        title: {
          en: 'Aaple Sarkar MahaOnline Citizen Services',
          hi: 'आपले सरकार महाऑनलाइन नागरिक सेवाएं',
          mr: 'आपले सरकार महाऑनलाइन नागरी सेवा'
        },
        url: 'https://aaplesarkar.mahaonline.gov.in',
        portalName: 'Aaple Sarkar',
        level: 'Maharashtra'
      },
      {
        title: {
          en: 'National Portal of India Caste Services',
          hi: 'भारत का राष्ट्रीय पोर्टल जाति प्रमाण पत्र',
          mr: 'भारताचे राष्ट्रीय पोर्टल जात दाखला'
        },
        url: 'https://www.india.gov.in',
        portalName: 'India.gov.in',
        level: 'All India'
      },
      {
        title: {
          en: 'DigiLocker Digital Document Repository',
          hi: 'डिजिलॉकर सरकारी दस्तावेज वॉलेट',
          mr: 'डिजिलॉकर डिजिटल कागदपत्रे'
        },
        url: 'https://www.digilocker.gov.in',
        portalName: 'DigiLocker',
        level: 'Central'
      }
    ],
    importantNotice: {
      en: 'Special Advisory: Caste Certificate alone does NOT equal Caste Validity. For admission to professional courses (Engineering, Medical) and reserved government posts, a Caste Validity Certificate (जातीची वैधता) must be obtained from the Scrutiny Committee.',
      hi: 'विशेष सूचना: केवल जाति प्रमाण पत्र ही जाति वैधता नहीं है। व्यावसायिक पाठ्यक्रमों (इंजीनियरिंग, मेडिकल) व आरक्षित सरकारी पदों के लिए छानबीन समिति से जाति वैधता प्रमाण पत्र लेना आवश्यक है।',
      mr: 'विशेष सूचना: केवळ जातीचा दाखला असणे म्हणजे जात पडताळणी नव्हे. व्यावसायिक अभ्यासक्रम (अभियांत्रिकी, वैद्यकीय) व शासकीय नोकरीतील आरक्षणासाठी जात पडताळणी समितीकडून जात वैधता प्रमाणपत्र (Caste Validity) मिळवणे आवश्यक असते.'
    },
    keywords: [
      'caste certificate', 'jaticha dakhla', 'jati praman patra', 'obc', 'sc', 'st', 'vjnt', 'sdo', 'reservation',
      'जातीचा दाखला', 'जाति प्रमाण पत्र', 'जात प्रमाणपत्र', 'ओबीसी', 'एससी', 'एसटी', 'आरक्षण', 'caste'
    ]
  },
  {
    id: 'srv-domicile-cert',
    slug: 'domicile-certificate',
    category: 'certificates',
    categoryName: {
      en: 'Certificates & Attestation',
      hi: 'प्रमाणपत्र एवं सत्यापन',
      mr: 'दाखले व प्रमाणपत्रे'
    },
    title: {
      en: 'Domicile & Nationality Certificate',
      hi: 'निवास एवं राष्ट्रीयता प्रमाण पत्र (डोमिसाइल)',
      mr: 'अधिवास व राष्ट्रीयत्व प्रमाणपत्र (डोमिसाईल)'
    },
    department: {
      en: 'Revenue Department / Sub-Divisional Officer',
      hi: 'राजस्व विभाग / उपजिलाधिकारी',
      mr: 'महसूल विभाग / उपविभागीय अधिकारी (SDO)'
    },
    shortDescription: {
      en: 'Certifies continuous residence of 15+ years in the state and Indian citizenship for college quota and state government employment.',
      hi: 'राज्य में 15 या अधिक वर्षों से निरंतर निवास और भारतीय नागरिकता प्रमाणित करने वाला प्रमुख दस्तावेज।',
      mr: 'राज्यात सलग १५ वर्षे वास्तव्य आणि भारतीय नागरिकत्व सिद्ध करणारे महत्त्वाचे प्रमाणपत्र.'
    },
    fullDescription: {
      en: 'A Domicile and Nationality Certificate is issued to prove that an individual is an Indian national and has resided in the concerned State for a continuous period of at least 15 years. It is indispensable for claiming State Quota seats in NEET, JEE, CET, government scholarships, and recruitment in state public services.',
      hi: 'निवास एवं राष्ट्रीयता प्रमाण पत्र यह सिद्ध करता है कि आवेदक भारतीय नागरिक है और संबंधित राज्य में न्यूनतम 15 वर्षों से निरंतर निवास कर रहा है। नीट, जेईई, राज्य सीईटी तथा सरकारी नौकरियों में राज्य कोटा पाने के लिए यह अनिवार्य होता है।',
      mr: 'अधिवास व राष्ट्रीयत्व प्रमाणपत्र हे संबंधित व्यक्ती भारतीय नागरिक असून संबंधित राज्यात सलग १५ वर्षांपेक्षा जास्त काळ वास्तव्यास असल्याचे कायदेशीररीत्या प्रमाणित करते. राज्य कोट्यातील वैद्यकीय, अभियांत्रिकी प्रवेश आणि शासकीय नोकऱ्यांसाठी हे अत्यंत आवश्यक आहे.'
    },
    estimatedDays: {
      en: '15 Working Days',
      hi: '15 कार्य दिवस',
      mr: '१५ कामकाजाचे दिवस'
    },
    fee: {
      en: '₹33 to ₹50',
      hi: '₹33 से ₹50',
      mr: '₹३३ ते ₹५०'
    },
    validity: {
      en: 'Lifetime validity (Unless citizenship or residence is revoked)',
      hi: 'आजीवन वैध',
      mr: 'आजीवन वैध'
    },
    eligibility: {
      en: [
        'Applicant must have resided continuously in the State for minimum 15 years.',
        'Minor applicants may produce domicile/residence evidence of parents.',
        'Must possess Indian citizenship proof.'
      ],
      hi: [
        'आवेदक का संबंधित राज्य में कम से कम 15 वर्ष का निरंतर निवास होना चाहिए।',
        'नाबालिग आवेदक अपने माता-पिता के 15 वर्षीय निवास प्रमाण के आधार पर आवेदन कर सकते हैं।',
        'भारतीय नागरिकता का वैध प्रमाण होना अनिवार्य है।'
      ],
      mr: [
        'अर्जदाराचे संबंधित राज्यात किमान सलग १५ वर्षे वास्तव्य असावे.',
        'अज्ञान (Minor) अर्जदारांसाठी पालकांचे १५ वर्षांचे वास्तव्य पुरावे ग्राह्य धरले जातात.',
        'भारतीय नागरिकत्वाचा वैध पुरावा असणे आवश्यक.'
      ]
    },
    documents: [
      {
        id: 'dom-doc-1',
        name: {
          en: '15 Years Residence Proof in State (Cumulative Records)',
          hi: '15 वर्षों के निवास का प्रमाण (क्रमिक रिकॉर्ड)',
          mr: 'राज्यातील १५ वर्षांच्या वास्तव्याचा पुरावा'
        },
        mandatory: true,
        description: {
          en: 'School/College Leaving Certificates covering 15 years, historic electricity bills, old ration cards, or registered rent/house deeds.',
          hi: '15 वर्षों की अवधि दर्शाने वाले स्कूल टीसी, पुराने बिजली बिल, पुराना राशन कार्ड या हाउस टैक्स रसीद।',
          mr: 'सलग १५ वर्षे दर्शवणारे शाळेचे दाखले, जुने वीज बिल, जुने रेशन कार्ड, किंवा घरपट्टी पावत्या.'
        }
      },
      {
        id: 'dom-doc-2',
        name: {
          en: 'Proof of Age and Birth Place',
          hi: 'आयु एवं जन्म स्थान का प्रमाण',
          mr: 'वय व जन्मठिकाणाचा पुरावा'
        },
        mandatory: true,
        description: {
          en: 'Birth Certificate issued by Municipal Corporation / Gram Panchayat or School Leaving Certificate.',
          hi: 'नगर निगम या ग्राम पंचायत द्वारा जारी जन्म प्रमाण पत्र अथवा स्कूल टीसी।',
          mr: 'महानगरपालिका/ग्रामपंचायत जन्म दाखला किंवा शाळा सोडल्याचा दाखला.'
        }
      },
      {
        id: 'dom-doc-3',
        name: {
          en: 'Aadhaar Card and Passport Photograph',
          hi: 'आधार कार्ड एवं पासपोर्ट फोटो',
          mr: 'आधार कार्ड व पासपोर्ट फोटो'
        },
        mandatory: true,
        description: {
          en: 'Applicant Aadhaar Card with updated biometric records and recent passport size photo.',
          hi: 'आवेदक का आधार कार्ड तथा हालिया रंगीन फोटो।',
          mr: 'अर्जदाराचे आधार कार्ड आणि अलीकडील रंगीत पासपोर्ट फोटो.'
        }
      },
      {
        id: 'dom-doc-4',
        name: {
          en: 'Affidavit for Domicile (Form Annexure)',
          hi: 'निवास शपथ पत्र (निर्धारित प्रारूप)',
          mr: 'अधिवास प्रतिज्ञापत्र'
        },
        mandatory: true,
        description: {
          en: 'Notarized self-declaration confirming 15 years uninterrupted residence and non-possession of domicile of another state.',
          hi: 'नोटरीकृत शपथ पत्र जिसमें 15 वर्ष के निरंतर निवास व अन्य किसी राज्य का डोमिसाइल न होने की घोषणा हो।',
          mr: 'राज्यात १५ वर्षे वास्तव्य असल्याबाबत आणि इतर कोणत्याही राज्याचे डोमिसाईल नसल्याबाबतचे प्रतिज्ञापत्र.'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Compile Continuous 15-Year Evidence',
          hi: '15 वर्ष के निवास प्रमाण पत्र संकलित करें',
          mr: 'सलग १५ वर्षांचे पुरावे गोळा करा'
        },
        details: {
          en: 'Collate continuous school certificates from 1st standard to 10th/12th, or father’s residence records.',
          hi: 'कक्षा 1 से 10वीं/12वीं तक के स्कूल टीसी अथवा पिता के निवास दस्तावेज व्यवस्थित करें।',
          mr: 'पहिली ते १० वी/१२ वी पर्यंतचे शाळेचे दाखले अथवा पालकांचे वास्तव्याचे जुने पुरावे गोळा करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 2,
        title: {
          en: 'File Application Online / At Seva Kendra',
          hi: 'पोर्टल अथवा सेवा केंद्र पर फॉर्म भरें',
          mr: 'पोर्टलवर किंवा सेवा केंद्रात अर्ज भरा'
        },
        details: {
          en: 'Apply through Aaple Sarkar / State e-District portal and upload identity, birth, and residence certificates.',
          hi: 'आपले सरकार अथवा राज्य ई-डिस्ट्रिक्ट पोर्टल पर आवेदन कर दस्तावेज अपलोड करें।',
          mr: 'आपले सरकार किंवा ई-डिस्ट्रिक्ट पोर्टलवर नोंदणी करून सर्व कागदपत्रे अपलोड करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Verification by Revenue Authorities',
          hi: 'राजस्व विभाग द्वारा सत्यापन',
          mr: 'महसूल अधिकाऱ्यांमार्फत पडताळणी'
        },
        details: {
          en: 'Tahsildar / Sub-Divisional Officer verifies residence criteria and cross-checks documents.',
          hi: 'तहसीलदार कार्यालय 15 वर्षीय निवास साक्ष्यों की जांच करता है।',
          mr: 'तहसीलदार कार्यालयाकडून १५ वर्षांच्या पुराव्यांची तपासणी केली जाते.'
        },
        mode: 'both'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Receive Domicile & Nationality Certificate',
          hi: 'डिजिटल प्रमाण पत्र प्राप्त करें',
          mr: 'डिजिटल स्वाक्षरीचे प्रमाणपत्र प्राप्त करा'
        },
        details: {
          en: 'Download the digitally signed certificate or obtain the physical attested copy from the center.',
          hi: 'डिजिटल हस्ताक्षरित प्रमाण पत्र डाउनलोड करें।',
          mr: 'क्यूआर कोड असलेले अधिकृत अधिवास प्रमाणपत्र डाऊनलोड करा.'
        },
        mode: 'both'
      }
    ],
    officialLinks: [
      {
        title: {
          en: 'Aaple Sarkar MahaOnline Citizen Services',
          hi: 'आपले सरकार महाऑनलाइन पोर्टल',
          mr: 'आपले सरकार महाऑनलाइन पोर्टल'
        },
        url: 'https://aaplesarkar.mahaonline.gov.in',
        portalName: 'Aaple Sarkar',
        level: 'Maharashtra'
      },
      {
        title: {
          en: 'ServicePlus National Citizen Platform',
          hi: 'सर्विसप्लस नागरिक सेवा पोर्टल',
          mr: 'सर्व्हिसप्लस राष्ट्रीय पोर्टल'
        },
        url: 'https://serviceonline.gov.in',
        portalName: 'ServicePlus',
        level: 'Central'
      }
    ],
    importantNotice: {
      en: 'Crucial Legal Condition: A citizen can only hold ONE State Domicile in India at any given time. Holding dual domicile certificates is punishable under Indian law.',
      hi: 'महत्वपूर्ण विधिक नियम: एक भारतीय नागरिक के पास एक समय में केवल एक ही राज्य का डोमिसाइल हो सकता है। दो राज्यों का डोमिसाइल रखना कानूनन अपराध है।',
      mr: 'महत्त्वाची कायदेशीर नोंद: एका वेळी एकाच राज्याचे अधिवास प्रमाणपत्र बाळगता येते. दोन राज्यांचे डोमिसाईल असणे कायद्यानुसार गुन्हा आहे.'
    },
    keywords: [
      'domicile certificate', 'nationality', 'adivas dakhla', 'niwas praman patra', '15 years residence', 'neet', 'cet',
      'अधिवास प्रमाणपत्र', 'डोमिसाईल', 'निवास प्रमाण पत्र', 'राष्ट्रीयत्व', 'वास्तव्य दाखला', 'domicile'
    ]
  },
  {
    id: 'srv-non-creamy-layer',
    slug: 'non-creamy-layer-certificate',
    category: 'certificates',
    categoryName: {
      en: 'Certificates & Attestation',
      hi: 'प्रमाणपत्र एवं सत्यापन',
      mr: 'दाखले व प्रमाणपत्रे'
    },
    title: {
      en: 'Non-Creamy Layer Certificate (NCL)',
      hi: 'नॉन-क्रीमी लेयर प्रमाण पत्र (ओबीसी / एसबीसी / वीजेएनटी)',
      mr: 'नॉन क्रिमीलेअर प्रमाणपत्र (NCL)'
    },
    department: {
      en: 'Revenue / Sub-Divisional Magistrate (SDM/SDO)',
      hi: 'राजस्व विभाग / उपजिला मजिस्ट्रेट',
      mr: 'महसूल विभाग / उपविभागीय अधिकारी (SDO)'
    },
    shortDescription: {
      en: 'Certifies that an OBC/VJNT applicant does not belong to the affluent (creamy) section, required for reservation quota benefits.',
      hi: 'ओबीसी/एसबीसी वर्ग के उम्मीदवारों के लिए आरक्षण लाभ हेतु आवश्यक प्रमाण पत्र जो यह सत्यापित करता है कि वार्षिक पारिवारिक आय निर्धारित सीमा (₹8 लाख) से कम है।',
      mr: 'ओबीसी/एसबीसी/व्हीजेएनटी प्रवर्गातील उमेदवारांसाठी आरक्षणाचा प्रत्यक्ष लाभ मिळण्यासाठी कुटुंबाचे उत्पन्न विहित मर्यादेत असल्याचे प्रमाणपत्र.'
    },
    fullDescription: {
      en: 'A Non-Creamy Layer Certificate is mandatory for OBC, VJNT, and SBC candidates seeking admission into higher educational institutions or appointment to reserved government posts. It validates that the gross annual income of the applicant’s parents for the preceding three consecutive financial years is below the statutory ceiling (currently ₹8 Lakhs per annum).',
      hi: 'नॉन-क्रीमी लेयर प्रमाण पत्र अन्य पिछड़ा वर्ग (ओबीसी) के अभ्यर्थियों के लिए शिक्षा और सरकारी नौकरियों में आरक्षण का लाभ उठाने हेतु आवश्यक होता है। यह सिद्ध करता है कि माता-पिता की पिछले 3 वित्तीय वर्षों की सकल आय ₹8 लाख की निर्धारित सीमा से कम है।',
      mr: 'नॉन क्रिमीलेअर प्रमाणपत्र हे इतर मागास प्रवर्ग (OBC), विमुक्त जाती व भटक्या जमाती (VJNT) आणि विशेष मागास प्रवर्ग (SBC) यांच्यासाठी आरक्षणाच्या लाभासाठी अनिवार्य असते. पालकांचे मागील सलग ३ वर्षांचे वार्षिक उत्पन्न शासनाने ठरवून दिलेल्या मर्यादेच्या (सध्या ₹८ लाख) आत असल्याचे हे प्रमाणपत्र सिद्ध करते.'
    },
    estimatedDays: {
      en: '21 Working Days',
      hi: '21 कार्य दिवस',
      mr: '२१ कामकाजाचे दिवस'
    },
    fee: {
      en: '₹33 to ₹65',
      hi: '₹33 से ₹65',
      mr: '₹३३ ते ₹६५'
    },
    validity: {
      en: 'Valid for 1 or 3 Financial Years as printed on certificate',
      hi: 'प्रमाण पत्र पर मुद्रित 1 या 3 वित्तीय वर्षों हेतु मान्य',
      mr: 'दाखल्यावर नमूद केलेल्या १ किंवा ३ आर्थिक वर्षांसाठी वैध'
    },
    eligibility: {
      en: [
        'Applicant must already possess a valid Caste Certificate in OBC / VJNT / SBC categories.',
        'Parents’ gross annual income from non-agricultural sources must be below ₹8 Lakhs for the last 3 financial years.',
        'Parents must not hold high constitutional or Class I/II government positions before age 40.'
      ],
      hi: [
        'आवेदक के पास पहले से वैध ओबीसी/वीजेएनटी जाति प्रमाण पत्र होना चाहिए।',
        'माता-पिता की पिछले 3 वर्षों की गैर-कृषि वार्षिक आय ₹8 लाख से कम होनी चाहिए।',
        'माता-पिता उच्च संवैधानिक अथवा वर्ग-1/2 सरकारी पद पर 40 वर्ष की आयु से पूर्व नियुक्त न हुए हों।'
      ],
      mr: [
        'अर्जदाराकडे आधीच वैध जातीचा दाखला (OBC/VJNT/SBC) असणे आवश्यक.',
        'पालकांचे मागील ३ वर्षांचे एकूण वार्षिक उत्पन्न विहित मर्यादेच्या (₹८ लाख) आत असावे.',
        'पालक वर्ग-१ किंवा वर्ग-२ अधिकारी पदावर ४० वर्षांपूर्वी नियुक्त झालेले नसावेत.'
      ]
    },
    documents: [
      {
        id: 'ncl-doc-1',
        name: {
          en: 'Valid Caste Certificate of Applicant',
          hi: 'आवेदक का मूल जाति प्रमाण पत्र',
          mr: 'अर्जदाराचा मूळ जातीचा दाखला'
        },
        mandatory: true,
        description: {
          en: 'Digitally signed caste certificate issued by competent authority.',
          hi: 'सक्षम अधिकारी द्वारा जारी जाति प्रमाण पत्र की प्रति।',
          mr: 'सक्षम प्राधिकाऱ्याने दिलेला डिजिटल जातीचा दाखला.'
        }
      },
      {
        id: 'ncl-doc-2',
        name: {
          en: 'Income Proof of Parents for Past 3 Consecutive Financial Years',
          hi: 'माता-पिता की पिछले 3 वित्तीय वर्षों की आय का प्रमाण',
          mr: 'पालकांचा मागील सलग ३ आर्थिक वर्षांचा उत्पन्नाचा पुरावा'
        },
        mandatory: true,
        description: {
          en: 'Form 16 / ITR returns / Tahsildar income certificate for the last 3 financial years.',
          hi: 'पिछले 3 वर्षों का फॉर्म 16, आयकर रिटर्न अथवा तहसीलदार आय प्रमाण पत्र।',
          mr: 'मागील ३ वर्षांचे फॉर्म १६, आयटीआर पावती किंवा तहसीलदार यांचा ३ वर्षांचा उत्पन्नाचा दाखला.'
        }
      },
      {
        id: 'ncl-doc-3',
        name: {
          en: 'Aadhaar Card and Ration Card',
          hi: 'आधार कार्ड एवं राशन कार्ड',
          mr: 'आधार कार्ड व रेशन कार्ड'
        },
        mandatory: true,
        description: {
          en: 'Family ration card showing relationship and applicant Aadhaar card.',
          hi: 'परिवार का राशन कार्ड और आवेदक का आधार कार्ड।',
          mr: 'नातेसंबंध दर्शवणारे रेशन कार्ड आणि आधार कार्ड.'
        }
      },
      {
        id: 'ncl-doc-4',
        name: {
          en: 'Self-Declaration Form regarding Creamy Layer Criteria',
          hi: 'क्रीमी लेयर शर्तों से संबंधित स्व-घोषणा पत्र',
          mr: 'नॉन क्रिमीलेअर अटींबाबतचे स्वयंघोषणापत्र'
        },
        mandatory: true,
        description: {
          en: 'Prescribed government format declaring non-creamy layer status.',
          hi: 'निर्धारित प्रारूप में क्रीमी लेयर में न होने का घोषणा पत्र।',
          mr: 'शासनाच्या विहित नमुन्यातील स्वयंघोषणापत्र.'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Obtain 3-Year Income Proofs & Caste Certificate',
          hi: '3 वर्षों के आय प्रमाण व जाति प्रमाण पत्र तैयार रखें',
          mr: '३ वर्षांचे उत्पन्न पुरावे व जातीचा दाखला तयार ठेवा'
        },
        details: {
          en: 'Collect Form 16 / ITR or 3-year Tahsildar income certificate alongside existing caste certificate.',
          hi: 'माता-पिता के 3 वर्षों के आय दस्तावेज और जाति प्रमाण पत्र तैयार करें।',
          mr: 'पालकांचे मागील ३ वर्षांचे उत्पन्नाचे पुरावे आणि जातीचा दाखला एकत्र करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Apply on State Portal / Seva Kendra',
          hi: 'पोर्टल अथवा सेवा केंद्र से ऑनलाइन आवेदन करें',
          mr: 'पोर्टलवर किंवा सेवा केंद्रातून ऑनलाईन अर्ज करा'
        },
        details: {
          en: 'Select Non-Creamy Layer Certificate, enter parents’ occupational details and income breakdown, and upload documents.',
          hi: 'पोर्टल पर नॉन-क्रीमी लेयर सेवा चुनें, आय विवरण भरें और दस्तावेज अपलोड करें।',
          mr: 'पोर्टलवर नॉन क्रिमीलेअर सेवा निवडून पालकांच्या व्यवसायाची व ३ वर्षांच्या उत्पन्नाची माहिती भरा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Revenue Verification & SDM Approval',
          hi: 'राजस्व जांच एवं उपजिलाधिकारी अनुमोदन',
          mr: 'महसूल पडताळणी व उपविभागीय अधिकारी मंजुरी'
        },
        details: {
          en: 'SDO / SDM reviews income eligibility and verifies exemption from creamy layer parameters.',
          hi: 'उपजिला मजिस्ट्रेट आय सीमा का परीक्षण कर अनुमोदन प्रदान करते हैं।',
          mr: 'उपविभागीय अधिकारी (SDO) उत्पन्नाच्या निकषांची तपासणी करून दाखला मंजूर करतात.'
        },
        mode: 'both'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Download Barcoded NCL Certificate',
          hi: 'बारकोड युक्त एनसीएल प्रमाण पत्र डाउनलोड करें',
          mr: 'बारकोडयुक्त नॉन क्रिमीलेअर दाखला डाऊनलोड करा'
        },
        details: {
          en: 'Download digitally verified certificate with validity date clearly stated.',
          hi: 'पोर्टल से डिजिटल प्रमाण पत्र डाउनलोड करें।',
          mr: 'वैधता कालावधी नमूद असलेला डिजिटल स्वाक्षरीचा दाखला डाऊनलोड करा.'
        },
        mode: 'both'
      }
    ],
    officialLinks: [
      {
        title: {
          en: 'Aaple Sarkar MahaOnline Portal',
          hi: 'आपले सरकार पोर्टल',
          mr: 'आपले सरकार पोर्टल'
        },
        url: 'https://aaplesarkar.mahaonline.gov.in',
        portalName: 'Aaple Sarkar',
        level: 'Maharashtra'
      },
      {
        title: {
          en: 'ServicePlus Central e-District Services',
          hi: 'सर्विसप्लस केंद्रीय पोर्टल',
          mr: 'सर्व्हिसप्लस केंद्रीय पोर्टल'
        },
        url: 'https://serviceonline.gov.in',
        portalName: 'ServicePlus',
        level: 'Central'
      }
    ],
    importantNotice: {
      en: 'Crucial Reminder: Check the validity period of your NCL Certificate before competitive exams and admission season. Certificates are typically valid up to 31st March of the respective year.',
      hi: 'महत्वपूर्ण ध्यान दें: प्रतियोगी परीक्षाओं व प्रवेश प्रक्रिया से पहले अपने प्रमाण पत्र की वैधता तिथि अवश्य जांचें। यह सामान्यतः वित्तीय वर्ष की 31 मार्च तक मान्य होता है।',
      mr: 'महत्त्वाची सूचना: प्रवेश प्रक्रिया किंवा परीक्षेपूर्वी आपल्या नॉन क्रिमीलेअर दाखल्याचा वैधता कालावधी तपासा. सामान्यतः ३१ मार्च रोजी याची मुदत संपते.'
    },
    keywords: [
      'non creamy layer', 'ncl', 'obc certificate', 'creamy layer', 'income limit 8 lakh', 'vjnt', 'sbc',
      'नॉन क्रिमीलेअर', 'एनसीएल', 'नॉन क्रीमी लेयर', 'ओबीसी आरक्षण', 'ncl certificate'
    ]
  },
  {
    id: 'srv-mahadbt-scholarship',
    slug: 'post-matric-scholarship',
    category: 'education',
    categoryName: {
      en: 'Scholarships & Education',
      hi: 'छात्रवृत्ति एवं शिक्षा',
      mr: 'शिष्यवृत्ती व शिक्षण'
    },
    title: {
      en: 'Post-Matric Scholarship (MahaDBT & NSP)',
      hi: 'मैट्रिकोत्तर छात्रवृत्ति एवं शिक्षण शुल्क प्रतिपूर्ति योजना',
      mr: 'मॅट्रिकोत्तर शिष्यवृत्ती व शिक्षण शुल्क प्रतिपूर्ती (MahaDBT)'
    },
    department: {
      en: 'Directorate of Higher Education / Social Justice Department',
      hi: 'उच्च शिक्षा निदेशालय / सामाजिक न्याय एवं अधिकारिता विभाग',
      mr: 'उच्च व तंत्रशिक्षण संचालनालय / सामाजिक न्याय विभाग'
    },
    shortDescription: {
      en: 'Direct Benefit Transfer (DBT) scholarship and tuition fee reimbursement for SC, ST, OBC, EBC, and minority students.',
      hi: 'अनुसूचित जाति, जनजाति, पिछड़ा वर्ग और आर्थिक रूप से कमजोर छात्रों के लिए कॉलेज ट्यूशन फीस प्रतिपूर्ति व भत्ता।',
      mr: 'मागासवर्गीय, आर्थिकदृष्ट्या दुर्बल (EBC) व अल्पसंख्याक विद्यार्थ्यांसाठी महाविद्यालयीन शैक्षणिक शुल्क माफी व निर्वाह भत्ता.'
    },
    fullDescription: {
      en: 'Post-Matric Scholarships offer tuition and examination fee reimbursement alongside maintenance allowances to students pursuing 11th, 12th, Diploma, Degree, and Postgraduate courses. Disbursed directly into the student’s Aadhaar-seeded bank account through the state MahaDBT or National Scholarship Portal (NSP).',
      hi: 'मैट्रिकोत्तर छात्रवृत्ति योजना के अंतर्गत 11वीं, 12वीं, डिप्लोमा, स्नातक एवं स्नातकोत्तर के पात्र विद्यार्थियों को शिक्षण शुल्क प्रतिपूर्ति और निर्वाह भत्ता दिया जाता है। यह राशि सीधे विद्यार्थी के आधार से लिंक बैंक खाते में डीबीटी द्वारा भेजी जाती है।',
      mr: 'मॅट्रिकोत्तर शिष्यवृत्ती योजनेअंतर्गत ११ वी, १२ वी, पदविका (Diploma), पदवी व पदव्युत्तर अभ्यासक्रमांसाठी प्रवेश घेतलेल्या पात्र विद्यार्थ्यांना शिक्षण शुल्क, परीक्षा शुल्क आणि निर्वाह भत्ता दिला जातो. ही रक्कम थेट विद्यार्थ्याच्या आधार संलग्न बँक खात्यात (DBT) जमा होते.'
    },
    estimatedDays: {
      en: 'College & Dept Verification within 30-60 Days',
      hi: 'कॉलेज एवं विभाग द्वारा सत्यापन 30 से 60 दिन में',
      mr: 'महाविद्यालय व विभागीय पडताळणी ३० ते ६० दिवसांत'
    },
    fee: {
      en: 'Free Application (₹0 Govt Fee, nominal ₹20-₹40 Kendra scan charge)',
      hi: 'निःशुल्क सरकारी आवेदन (केंद्रावर केवल स्कैनिंग शुल्क)',
      mr: 'शासकीय शुल्क मोफत (केंद्रावर नाममात्र फॉर्म भरणे शुल्क)'
    },
    validity: {
      en: 'Renewable every academic year',
      hi: 'प्रत्येक शैक्षणिक वर्ष में नवीनीकरण योग्य',
      mr: 'प्रत्येक शैक्षणिक वर्षासाठी नूतनीकरण आवश्यक'
    },
    eligibility: {
      en: [
        'Enrolled in a recognized college/university in post-matric courses.',
        'Family income within prescribed scheme ceilings (e.g., up to ₹2.5 Lakh for SC/ST, up to ₹8 Lakh for EBC/OBC with NCL).',
        'Student must have an active bank account seeded with Aadhaar for NPCI mapper DBT.'
      ],
      hi: [
        'मान्यता प्राप्त कॉलेज/विश्वविद्यालय में 11वीं या उच्च कक्षा में अध्ययनरत होना चाहिए।',
        'परिवार की वार्षिक आय योजना के निर्धारित स्लैब के भीतर होनी चाहिए।',
        'विद्यार्थी का स्वयं का बैंक खाता आधार व एनपीसीआई मैपर से लिंक होना अनिवार्य है।'
      ],
      mr: [
        'मान्यताप्राप्त महाविद्यालयात ११ वी किंवा पुढील उच्च शिक्षण अभ्यासक्रमात प्रवेशित असावा.',
        'कुटुंबाचे वार्षिक उत्पन्न विहित मर्यादेत असावे (उदा. SC/ST साठी ₹२.५ लाखांपर्यंत, EBC/OBC साठी ₹८ लाखांपर्यंत).',
        'विद्यार्थ्याचे स्वतःचे बँक खाते आधार व एनपीसीआय (NPCI) मॅपरशी लिंक असणे बंधनकारक.'
      ]
    },
    documents: [
      {
        id: 'sch-doc-1',
        name: {
          en: 'Current Academic Year College Fee Receipt & Admission Letter',
          hi: 'वर्तमान शैक्षणिक वर्ष की कॉलेज फीस रसीद व प्रवेश पत्र',
          mr: 'चालू शैक्षणिक वर्षाची कॉलेज फी पावती व प्रवेश पत्र'
        },
        mandatory: true,
        description: {
          en: 'Official receipt showing fees paid and admission allotment letter.',
          hi: 'कॉलेज द्वारा जारी आधिकारिक शुल्क रसीद।',
          mr: 'महाविद्यालयाने दिलेली अधिकृत फी पावती व प्रवेश पत्र.'
        }
      },
      {
        id: 'sch-doc-2',
        name: {
          en: 'Previous Year Marksheet (SSC / HSC / Semester)',
          hi: 'पिछली कक्षा की अंकतालिका',
          mr: 'मागील शैक्षणिक वर्षाची गुणपत्रिका (मार्कशीट)'
        },
        mandatory: true,
        description: {
          en: 'Marksheets of previous qualifying examinations without gap, or gap certificate if applicable.',
          hi: 'उत्तीर्ण कक्षा की मूल अंकतालिका (गैप होने पर गैप शपथ पत्र)।',
          mr: 'मागील वर्षाची गुणपत्रिका (शिक्षणात खंड असल्यास गॅप सर्टिफिकेट).'
        }
      },
      {
        id: 'sch-doc-3',
        name: {
          en: 'Income Certificate of Current Financial Year (Tahsildar Issued)',
          hi: 'चालू वित्तीय वर्ष का तहसीलदार द्वारा जारी आय प्रमाण पत्र',
          mr: 'चालू आर्थिक वर्षाचा तहसीलदार यांचा उत्पन्नाचा दाखला'
        },
        mandatory: true,
        description: {
          en: 'Valid income certificate showing gross family earnings.',
          hi: 'सक्षम अधिकारी द्वारा निर्गत आय प्रमाण पत्र।',
          mr: 'तहसीलदार कार्यालयाने दिलेला चालू आर्थिक वर्षाचा उत्पन्नाचा दाखला.'
        }
      },
      {
        id: 'sch-doc-4',
        name: {
          en: 'Caste Certificate and Domicile Certificate',
          hi: 'जाति प्रमाण पत्र एवं निवास प्रमाण पत्र',
          mr: 'जातीचा दाखला व अधिवास (डोमिसाईल) प्रमाणपत्र'
        },
        mandatory: true,
        description: {
          en: 'Caste certificate (for reserved category applicants) and domicile certificate of state.',
          hi: 'आरक्षित वर्ग हेतु जाति प्रमाण पत्र तथा राज्य का निवास प्रमाण पत्र।',
          mr: 'आरक्षित प्रवर्गासाठी जातीचा दाखला व अधिवास प्रमाणपत्र.'
        }
      },
      {
        id: 'sch-doc-5',
        name: {
          en: 'Aadhaar Seeded Bank Account Passbook Copy',
          hi: 'आधार लिंक बैंक पासबुक की प्रति',
          mr: 'आधार संलग्न बँक पासबुक प्रत'
        },
        mandatory: true,
        description: {
          en: 'Bank passbook front page showing IFSC code, account number and active NPCI DBT status.',
          hi: 'बैंक पासबुक जिसमें स्पष्ट खाता संख्या व आईएफएससी कोड दर्ज हो।',
          mr: 'खाते क्रमांक व आयएफएससी कोड स्पष्ट दिसणारे बँक पासबुक.'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Verify Aadhaar-NPCI Bank Seeding',
          hi: 'आधार-बैंक खाता लिंकिंग की जांच करें',
          mr: 'बँक खात्याशी आधार लिंक असल्याचे तपासा'
        },
        details: {
          en: 'Ensure your active bank account is linked to Aadhaar on NPCI mapping so DBT disbursements do not fail.',
          hi: 'सुनिश्चित करें कि आपका बैंक खाता आधार व एनपीसीआई से मैप है ताकि छात्रवृत्ति का पैसा सीधे आ सके।',
          mr: 'बँकेत जाऊन खात्याला आधार व एनपीसीआय (NPCI) मॅपर लिंक असल्याची खात्री करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Register on MahaDBT / National Scholarship Portal',
          hi: 'महाडीबीटी अथवा राष्ट्रीय छात्रवृत्ति पोर्टल पर पंजीकरण करें',
          mr: 'महाडीबीटी किंवा राष्ट्रीय शिष्यवृत्ती पोर्टलवर नोंदणी करा'
        },
        details: {
          en: 'Create a student profile using Aadhaar eKYC, enter academic and parent details, and upload certified documents.',
          hi: 'आधार ओटीपी द्वारा प्रोफाइल बनाएं, शैक्षणिक विवरण भरें और दस्तावेज अपलोड करें।',
          mr: 'आधार ओटीपीने नोंदणी करा, शैक्षणिक माहिती भरा आणि आवश्यक कागदपत्रे अपलोड करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 3,
        title: {
          en: 'College Scrutiny & Forwarding',
          hi: 'कॉलेज स्तर पर सत्यापन एवं अग्रेषण',
          mr: 'महाविद्यालयीन पडताळणी'
        },
        details: {
          en: 'College nodal officer verifies physical fee receipts and admission eligibility on the portal.',
          hi: 'कॉलेज के नोडल अधिकारी आपके दस्तावेजों की ऑनलाइन जांच कर विभाग को अग्रेषित करते हैं।',
          mr: 'महाविद्यालयातील शिष्यवृत्ती विभाग कागदपत्रे तपासून अर्ज शासनाकडे वर्ग करतो.'
        },
        mode: 'both'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Departmental Approval & Direct Benefit Transfer',
          hi: 'विभागीय स्वीकृति एवं डीबीटी भुगतान',
          mr: 'विभागीय मंजुरी व थेट बँक खात्यात रक्कम जमा'
        },
        details: {
          en: 'Approved fee amount is directly reimbursed to the institute and maintenance allowance is credited to the student.',
          hi: 'स्वीकृति के उपरांत शिक्षण शुल्क कॉलेज को और निर्वाह भत्ता छात्र के खाते में सीधे ट्रांसफर हो जाता है।',
          mr: 'मंजुरीनंतर शैक्षणिक शुल्क कॉलेजला व निर्वाह भत्ता थेट विद्यार्थ्याच्या बँक खात्यात जमा होतो.'
        },
        mode: 'both'
      }
    ],
    officialLinks: [
      {
        title: {
          en: 'MahaDBT Scholarship Portal (Maharashtra)',
          hi: 'महाडीबीटी छात्रवृत्ति पोर्टल (महाराष्ट्र)',
          mr: 'महाडीबीटी शिष्यवृत्ती पोर्टल (महाराष्ट्र)'
        },
        url: 'https://mahadbt.maharashtra.gov.in',
        portalName: 'MahaDBT',
        level: 'Maharashtra'
      },
      {
        title: {
          en: 'National Scholarship Portal (Government of India)',
          hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (भारत सरकार)',
          mr: 'राष्ट्रीय शिष्यवृत्ती पोर्टल (भारत सरकार)'
        },
        url: 'https://scholarships.gov.in',
        portalName: 'NSP Portal',
        level: 'Central'
      }
    ],
    importantNotice: {
      en: 'Crucial Deadline Notice: Students must strictly submit applications before the declared annual cutoff dates on the portal to avoid loss of reimbursement.',
      hi: 'अंतिम तिथि ध्यान दें: छात्रवृत्ति के लिए निर्धारित अंतिम तारीख से पहले आवेदन अवश्य पूरा करें।',
      mr: 'महत्त्वाची मुदत सूचना: शैक्षणिक शुल्काच्या परताव्यासाठी पोर्टलवरील अंतिम मुदतीपूर्वी अर्ज सादर करणे बंधनकारक आहे.'
    },
    keywords: [
      'scholarship', 'mahadbt', 'nsp', 'post matric', 'tuition fee reimbursement', 'ebc', 'student aid',
      'शिष्यवृत्ती', 'महाडीबीटी', 'छात्रवृत्ति', 'फी माफी', 'scholarship form'
    ]
  },
  {
    id: 'srv-ration-card',
    slug: 'ration-card-services',
    category: 'welfare',
    categoryName: {
      en: 'Social Welfare & Pensions',
      hi: 'सामाजिक कल्याण एवं पेंशन',
      mr: 'सामाजिक न्याय व पेन्शन'
    },
    title: {
      en: 'Ration Card Services (Member Addition / Modification)',
      hi: 'राशन कार्ड सेवाएं (सदस्य का नाम जोड़ना / सुधार)',
      mr: 'रेशन कार्ड सेवा (नाव समाविष्ट करणे / सुधारणा)'
    },
    department: {
      en: 'Food, Civil Supplies and Consumer Protection Department',
      hi: 'खाद्य, नागरिक आपूर्ति एवं उपभोक्ता संरक्षण विभाग',
      mr: 'अन्न, नागरी पुरवठा व ग्राहक संरक्षण विभाग'
    },
    shortDescription: {
      en: 'Add a newborn child or newlywed spouse to your family ration card, modify address, or apply for duplicate cards under NFSA.',
      hi: 'राष्ट्रीय खाद्य सुरक्षा अधिनियम के तहत राशन कार्ड में नए सदस्य (नवविवाहिता/बच्चे) का नाम जोड़ें अथवा विवरण सुधारें।',
      mr: 'कुटुंबातील नवीन सदस्याचे (नवविवाहित सून / बाळ) नाव रेशन कार्डमध्ये समाविष्ट करणे किंवा पत्ता बदलणे.'
    },
    fullDescription: {
      en: 'The Food and Civil Supplies Department allows citizens to modify household ration card details under the National Food Security Act (NFSA). Common services include adding a spouse after marriage, adding a newborn child upon birth certificate registration, deleting deceased members, or splitting family cards.',
      hi: 'खाद्य एवं नागरिक आपूर्ति विभाग द्वारा नागरिकों को राशन कार्ड में नए सदस्यों का नाम जोड़ने, विवाह उपरांत नाम दर्ज कराने, मृत व्यक्ति का नाम हटाने और पता संशोधन की सुविधा प्रदान की जाती है। यह सार्वजनिक वितरण प्रणाली (PDS) द्वारा रियायती खाद्यान्न प्राप्त करने हेतु आवश्यक है।',
      mr: 'अन्न व नागरी पुरवठा विभागामार्फत रेशन कार्डमध्ये कुटुंबातील सदस्यांची नावे समाविष्ट करणे, लग्न झालेल्या सुनेचे नाव जोडणे, मृत व्यक्तीचे नाव वगळणे किंवा रेशन दुकान बदलणे या सेवा दिल्या जातात. राष्ट्रीय अन्न सुरक्षा योजनेचा (NFSA) लाभ मिळण्यासाठी हे गरजेचे असते.'
    },
    estimatedDays: {
      en: '15 to 30 Working Days',
      hi: '15 से 30 कार्य दिवस',
      mr: '१५ ते ३० कामकाजाचे दिवस'
    },
    fee: {
      en: '₹20 to ₹50',
      hi: '₹20 से ₹50',
      mr: '₹२० ते ₹५०'
    },
    validity: {
      en: 'Continuous with annual dynamic eKYC verification',
      hi: 'वार्षिक आधार ई-केवाईसी द्वारा निरंतर मान्य',
      mr: 'वार्षिक आधार ई-केवायसी पडताळणीसह निरंतर वैध'
    },
    eligibility: {
      en: [
        'Family must possess an active existing Ration Card (APL/BPL/AAY).',
        'New member must not be registered on any other ration card across India.',
        'Aadhaar card is mandatory for all members above 5 years.'
      ],
      hi: [
        'परिवार के पास पहले से वैध राशन कार्ड होना चाहिए।',
        'नए सदस्य का नाम पूरे भारत में किसी अन्य राशन कार्ड में दर्ज नहीं होना चाहिए।',
        'सभी सदस्यों का आधार कार्ड होना आवश्यक है।'
      ],
      mr: [
        'कुटुंबाकडे आधीच अधिकृत रेशन कार्ड असणे आवश्यक.',
        'नवीन सदस्याचे नाव देशातील इतर कोणत्याही रेशन कार्डवर नसावे.',
        'सर्व सदस्यांचे आधार कार्ड असणे अनिवार्य.'
      ]
    },
    documents: [
      {
        id: 'rc-doc-1',
        name: {
          en: 'Original Existing Ration Card Copy',
          hi: 'वर्तमान राशन कार्ड की मूल प्रति',
          mr: 'सध्याच्या रेशन कार्डची प्रत'
        },
        mandatory: true,
        description: {
          en: 'Clear copy of all pages of existing booklet showing card number and head of family.',
          hi: 'राशन कार्ड के सभी पृष्ठों की प्रति।',
          mr: 'सध्याच्या रेशन कार्डाच्या पहिल्या व आतील पानांची प्रत.'
        }
      },
      {
        id: 'rc-doc-2',
        name: {
          en: 'Birth Certificate (for Child) OR Deletion Certificate (for Spouse)',
          hi: 'जन्म प्रमाण पत्र (बच्चे हेतु) अथवा नाम विलोपन प्रमाण पत्र (विवाह उपरांत)',
          mr: 'जन्म दाखला (लहान मुलांसाठी) किंवा नाव कमी केल्याचा दाखला (विवाहितेसाठी)'
        },
        mandatory: true,
        description: {
          en: 'Municipal/Gram Panchayat birth certificate for child, or official ration deletion/surrender certificate from previous home for newly married spouse.',
          hi: 'नवजात शिशु हेतु जन्म प्रमाण पत्र; विवाहिता हेतु मायके के राशन कार्ड से नाम कटने का विलोपन प्रमाण पत्र।',
          mr: 'लहान मुलांसाठी जन्म दाखला; नवविवाहित सुनेसाठी माहेरच्या रेशन कार्डवरून नाव कमी केल्याचा दाखला (Deletion Certificate).'
        }
      },
      {
        id: 'rc-doc-3',
        name: {
          en: 'Aadhaar Card of the New Member',
          hi: 'नए सदस्य का आधार कार्ड',
          mr: 'नवीन सदस्याचे आधार कार्ड'
        },
        mandatory: true,
        description: {
          en: 'Aadhaar card of the person whose name is being incorporated.',
          hi: 'शामिल किए जाने वाले व्यक्ति का आधार कार्ड।',
          mr: 'नाव जोडल्या जाणाऱ्या सदस्याचे आधार कार्ड.'
        }
      },
      {
        id: 'rc-doc-4',
        name: {
          en: 'Marriage Certificate (for Wife / Husband)',
          hi: 'विवाह प्रमाण पत्र (विवाहित सदस्य हेतु)',
          mr: 'विवाह नोंदणी प्रमाणपत्र (मॅरेज सर्टिफिकेट)'
        },
        mandatory: false,
        description: {
          en: 'Government registered marriage certificate or marriage invitation card / affidavit.',
          hi: 'पंजीकृत विवाह प्रमाण पत्र अथवा नोटरीकृत विवाह शपथ पत्र।',
          mr: 'अधिकृत विवाह नोंदणी दाखला किंवा विवाह पत्रिका प्रतिज्ञापत्र.'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Obtain Deletion Certificate (if moving from another card)',
          hi: 'पूर्व राशन कार्ड से विलोपन प्रमाण पत्र लें',
          mr: 'मागील रेशन कार्डवरून नाव कमी केल्याचा दाखला घ्या'
        },
        details: {
          en: 'For marriage cases, first apply to remove name from parent’s ration card and obtain the official Deletion Slip.',
          hi: 'विवाह की स्थिति में पहले मायके के राशन कार्ड से नाम कटवाकर विलोपन पर्ची प्राप्त करें।',
          mr: 'लग्नानंतर सासरच्या रेशन कार्डवर नाव लावण्यासाठी आधी माहेरच्या रेशन कार्डवरून नाव कमी केल्याचा दाखला मिळवा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Submit Application Online (RCMS) or at Supply Office / Kendra',
          hi: 'आरसीएमएस पोर्टल अथवा आपूर्ति कार्यालय में आवेदन करें',
          mr: 'आरसीएमएस पोर्टलवर किंवा पुरवठा कार्यालयात अर्ज करा'
        },
        details: {
          en: 'Fill Form 8 (addition of member) on the state Food Supplies portal and upload birth or deletion certificate with Aadhaar.',
          hi: 'राज्य खाद्य पोर्टल पर फॉर्म 8 भरें और जन्म प्रमाण पत्र अथवा विलोपन प्रमाण पत्र अपलोड करें।',
          mr: 'अन्न पुरवठा पोर्टलवर विहित नमुना अर्ज भरून आधार व जन्म/विलोपन दाखला जोडा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Scrutiny by Food Inspector / Supply Officer',
          hi: 'आपूर्ति निरीक्षक द्वारा भौतिक सत्यापन',
          mr: 'राशन पुरवठा निरीक्षक तपासणी'
        },
        details: {
          en: 'Supply Officer verifies database to ensure member is not duplicated on another card.',
          hi: 'निरीक्षक यह जांचते हैं कि सदस्य का नाम अन्यत्र किसी कार्ड पर सक्रिय तो नहीं है।',
          mr: 'पुरवठा निरीक्षक डेटाबेस तपासून इतर कुठेही दुबार नाव नसल्याची खात्री करतात.'
        },
        mode: 'both'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Card Updated & Grain Entitlement Revised',
          hi: 'राशन कार्ड अपडेट व खाद्यान्न कोटा संशोधन',
          mr: 'रेशन कार्ड अपडेट व धान्याचा कोटा वाढ'
        },
        details: {
          en: 'Member is added into RCMS database and electronic ration quota is updated at your Fair Price Shop (FPS).',
          hi: 'नाम जुड़ने के पश्चात कोटेदार के ई-पॉस मशीन में नए सदस्य का राशन कोटा जुड़ जाता है।',
          mr: 'डेटाबेसमध्ये नाव समाविष्ट होऊन रास्त भाव दुकानाच्या (Ration Shop) ई-पॉस मशीनवर वाढीव कोटा सुरू होतो.'
        },
        mode: 'both'
      }
    ],
    officialLinks: [
      {
        title: {
          en: 'Maha Food & Civil Supplies Portal',
          hi: 'महाराष्ट्र खाद्य एवं नागरिक आपूर्ति विभाग',
          mr: 'महाराष्ट्र अन्न, नागरी पुरवठा पोर्टल'
        },
        url: 'https://mahafood.gov.in',
        portalName: 'MahaFood',
        level: 'Maharashtra'
      },
      {
        title: {
          en: 'National Food Security Portal (NFSA)',
          hi: 'राष्ट्रीय खाद्य सुरक्षा पोर्टल',
          mr: 'राष्ट्रीय अन्न सुरक्षा पोर्टल (NFSA)'
        },
        url: 'https://nfsa.gov.in',
        portalName: 'NFSA India',
        level: 'All India'
      }
    ],
    importantNotice: {
      en: 'Aadhaar Biometric eKYC Mandatory: All ration card holders must complete their Aadhaar biometric eKYC at their local Fair Price Shop to prevent cancellation of rations.',
      hi: 'आधार ई-केवाईसी अनिवार्य: राशन कार्ड धारकों को राशन दुकान पर जाकर ई-पॉस मशीन द्वारा बायोमेट्रिक ई-केवाईसी कराना अनिवार्य है।',
      mr: 'आधार ई-केवायसी बंधनकारक: रेशन धान्य सुरळीत मिळण्यासाठी सर्व सदस्यांचे रास्त भाव दुकानात बायोमेट्रिक ई-केवायसी पूर्ण असणे आवश्यक आहे.'
    },
    keywords: [
      'ration card', 'ration card name addition', 'ration card nav jodne', 'nfsa', 'food supply', 'ration card dukan',
      'रेशन कार्ड', 'राशन कार्ड', 'रेशन कार्ड सुधारणा', 'रेशन कार्ड नाव जोडणे', 'ration'
    ]
  },
  {
    id: 'srv-pm-kisan',
    slug: 'pm-kisan-samman-nidhi',
    category: 'agriculture',
    categoryName: {
      en: 'Farmer & Agriculture Support',
      hi: 'किसान एवं कृषि सहायता',
      mr: 'शेतकरी व कृषी योजना'
    },
    title: {
      en: 'PM-Kisan Samman Nidhi & Farmer Assistance',
      hi: 'प्रधानमंत्री किसान सम्मान निधि योजना (ई-केवाईसी एवं नया पंजीकरण)',
      mr: 'पीएम किसान सन्मान निधी योजना (नोंदणी व ई-केवायसी)'
    },
    department: {
      en: 'Ministry of Agriculture & Farmers Welfare / State Agriculture Dept',
      hi: 'कृषि एवं किसान कल्याण मंत्रालय / राज्य कृषि विभाग',
      mr: 'कृषी व शेतकरी कल्याण मंत्रालय / राज्य कृषी विभाग'
    },
    shortDescription: {
      en: 'Annual income support of ₹6,000 in three installments for landholding farmer families along with state top-up.',
      hi: 'जमीन धारक किसान परिवारों को प्रति वर्ष ₹6,000 की वित्तीय सहायता तथा राज्य की नमो शेतकरी योजना का लाभ।',
      mr: 'जमीनधारक शेतकरी कुटुंबांना प्रतिवर्ष ₹६,००० चे थेट आर्थिक सहाय्य व राज्य शासनाची नमो शेतकरी योजना.'
    },
    fullDescription: {
      en: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector scheme with 100% funding from the Government of India. It provides financial support of ₹6,000 per year in three equal four-monthly installments to all cultivable landholding farmer families, credited directly into their Aadhaar-linked bank accounts.',
      hi: 'प्रधानमंत्री किसान सम्मान निधि भारत सरकार की एक प्रमुख योजना है जिसके अंतर्गत पात्र किसान परिवारों को प्रति वर्ष ₹6,000 की आर्थिक मदद तीन समान किस्तों (₹2,000 प्रत्येक) में सीधे बैंक खाते में भेजी जाती है। महाराष्ट्र में राज्य सरकार द्वारा अतिरिक्त ₹6,000 नमो शेतकरी योजना द्वारा प्रदान किए जाते हैं।',
      mr: 'पंतप्रधान किसान सन्मान निधी (PM-KISAN) योजनेअंतर्गत पात्र शेतकरी कुटुंबांना दरवर्षी ₹६,००० चे आर्थिक सहाय्य ३ हप्त्यांमध्ये (प्रत्येकी ₹२,०००) थेट बँक खात्यात दिले जाते. महाराष्ट्रात राज्य शासनाकडून नमो शेतकरी महासन्मान निधीद्वारे अतिरिक्त ₹६,००० चा लाभ मिळून एकूण ₹१२,००० वार्षिक सहाय्य मिळते.'
    },
    estimatedDays: {
      en: 'Verification within 15-30 Days before next installment cycle',
      hi: 'आगामी किस्त चक्र से पूर्व 15 से 30 दिन में सत्यापन',
      mr: 'पुढील हप्ता वितरित होण्यापूर्वी १५ ते ३० दिवसांत पडताळणी'
    },
    fee: {
      en: 'Free on portal (₹15 CSC eKYC service charge)',
      hi: 'पोर्टल पर निःशुल्क (सीएससी पर ₹15 ई-केवाईसी शुल्क)',
      mr: 'पोर्टलवर मोफत (सीएससी केंद्रावर ₹१५ ई-केवायसी शुल्क)'
    },
    validity: {
      en: 'Continuous upon maintaining active landholding and valid eKYC',
      hi: 'सक्रिय भू-अभिलेख एवं ई-केवाईसी के साथ निरंतर जारी',
      mr: 'जमीन धारणा व बायोमेट्रिक ई-केवायसी कायम असेपर्यंत निरंतर'
    },
    eligibility: {
      en: [
        'Farmer family must possess cultivable agricultural land registered in their name.',
        'Must complete OTP or Biometric based Aadhaar eKYC.',
        'Institutional landholders and income tax payers in previous year are excluded.'
      ],
      hi: [
        'किसान के नाम पर खेती योग्य भूमि का वैध अभिलेख (खतौनी/7/12) दर्ज होना चाहिए।',
        'आधार ई-केवाईसी पूर्ण होना अनिवार्य है।',
        'संस्थागत भू-स्वामी तथा आयकर दाता इस योजना के पात्र नहीं हैं।'
      ],
      mr: [
        'शेतकऱ्याच्या स्वतःच्या नावावर शेतजमिनीचा ७/१२ व ८-अ उतारा नोंदणीकृत असावा.',
        'आधार ई-केवायसी पूर्ण असणे बंधनकारक.',
        'आयकर भरणारे आणि घटनात्मक पदांवरील व्यक्ती या योजनेसाठी अपात्र आहेत.'
      ]
    },
    documents: [
      {
        id: 'pmk-doc-1',
        name: {
          en: 'Land Records (7/12 Extract, 8A Extract / Khatauni)',
          hi: 'भू-अभिलेख (खतौनी / 7/12 व 8अ उतारा)',
          mr: 'शेतजमिनीचा ७/१२ व ८-अ उतारा'
        },
        mandatory: true,
        description: {
          en: 'Updated land record showing applicant’s name and survey number.',
          hi: 'आवेदक के नाम दर्ज अद्यतन भू-अभिलेख।',
          mr: 'अर्जदाराचे नाव व खाते क्रमांक असलेला चालू वर्षाचा ७/१२ व ८-अ उतारा.'
        }
      },
      {
        id: 'pmk-doc-2',
        name: {
          en: 'Aadhaar Card Linked with Active Mobile Number',
          hi: 'मोबाइल नंबर से लिंक आधार कार्ड',
          mr: 'मोबाईल नंबर लिंक असलेले आधार कार्ड'
        },
        mandatory: true,
        description: {
          en: 'Aadhaar card for OTP-based eKYC and biometric identity check.',
          hi: 'ओटीपी सत्यापन हेतु आधार कार्ड।',
          mr: 'ओटीपी पडताळणीसाठी आधार कार्ड.'
        }
      },
      {
        id: 'pmk-doc-3',
        name: {
          en: 'Bank Account Seeded with NPCI for Direct Benefit Transfer',
          hi: 'एनपीसीआई मैप बैंक खाता पासबुक',
          mr: 'डीबीटीसाठी आधार संलग्न बँक पासबुक'
        },
        mandatory: true,
        description: {
          en: 'Bank account with active DBT enabling for credit of installments.',
          hi: 'बैंक पासबुक जिसमें डीबीटी सक्रिय हो।',
          mr: 'थेट लाभ हस्तांतरणासाठी (DBT) आधार संलग्न असलेले बँक खाते.'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Land Seeding & Document Verification',
          hi: 'भू-अभिलेख लिंकिंग एवं सत्यापन',
          mr: 'जमीन नोंदीची तपासणी (Land Seeding)'
        },
        details: {
          en: 'Verify on PM-Kisan portal that Land Seeding status is marked "YES" using your 7/12 details.',
          hi: 'पोर्टल पर जांचें कि लैंड सीडिंग की स्थिति हां (YES) है।',
          mr: 'पीएम किसान पोर्टलवर जाऊन लँड सीडिंग (Land Seeding) "YES" असल्याची खात्री करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Complete Aadhaar eKYC Online or at CSC',
          hi: 'आधार ई-केवाईसी पूरा करें',
          mr: 'आधार ई-केवायसी पूर्ण करा'
        },
        details: {
          en: 'Complete biometric fingerprint eKYC at a CSC center or OTP-based eKYC on the PM-Kisan portal.',
          hi: 'सीएससी केंद्र पर अंगूठा लगाकर अथवा पोर्टल पर ओटीपी द्वारा ई-केवाईसी पूर्ण करें।',
          mr: 'सीएससी केंद्रावर बायोमेट्रिक फिंगरप्रिंट द्वारे किंवा पोर्टलवर ओटीपी द्वारे ई-केवायसी करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Bank Account NPCI Mapping',
          hi: 'बैंक खाते को एनपीसीआई से लिंक करें',
          mr: 'बँक खाते एनपीसीआय मॅपरशी जोडा'
        },
        details: {
          en: 'Visit bank branch or post office to ensure Aadhaar is mapped to your primary savings account.',
          hi: 'बैंक शाखा में जाकर सुनिश्चित करें कि खाता डीबीटी हेतु सक्रिय है।',
          mr: 'बँकेत जाऊन खात्याला डीबीटीसाठी एनपीसीआय मॅपिंग सक्रिय असल्याची खात्री करा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Receive Installment Credit Alerts',
          hi: 'किस्त राशि सीधे बैंक खाते में प्राप्त करें',
          mr: 'हप्त्याची रक्कम खात्यात जमा'
        },
        details: {
          en: 'Every 4 months, ₹2,000 Central + state share is deposited directly with SMS notification.',
          hi: 'प्रति 4 माह में किस्त की राशि सीधे बैंक खाते में जमा होती है।',
          mr: 'दर ४ महिन्यांनी केंद्र व राज्य शासनाचे हप्ते थेट बँक खात्यात जमा होतात.'
        },
        mode: 'both'
      }
    ],
    officialLinks: [
      {
        title: {
          en: 'PM-Kisan Official National Portal',
          hi: 'पीएम किसान राष्ट्रीय आधिकारिक पोर्टल',
          mr: 'पीएम किसान राष्ट्रीय पोर्टल'
        },
        url: 'https://pmkisan.gov.in',
        portalName: 'PM Kisan Portal',
        level: 'All India'
      },
      {
        title: {
          en: 'MahaDBT Farmer Schemes (Maharashtra)',
          hi: 'महाडीबीटी किसान योजनाएं (महाराष्ट्र)',
          mr: 'महाडीबीटी शेतकरी योजना (महाराष्ट्र)'
        },
        url: 'https://mahadbt.maharashtra.gov.in/Farmer/Login/Login',
        portalName: 'MahaDBT Farmer',
        level: 'Maharashtra'
      }
    ],
    importantNotice: {
      en: 'Mandatory Requirement: All three statuses—Land Seeding, eKYC, and Aadhaar Bank Account Seeding—must show "YES" on the PM Kisan portal for installments to release.',
      hi: 'अनिवार्य शर्त: किस्त पाने के लिए लैंड सीडिंग, ई-केवाईसी और आधार बैंक सीडिंग तीनों का YES होना आवश्यक है।',
      mr: 'महत्त्वाची अट: हप्ता जमा होण्यासाठी पोर्टलवर लँड सीडिंग, ई-केवायसी आणि बँक आधार सीडिंग या तिन्ही बाबी "YES" असणे अनिवार्य आहे.'
    },
    keywords: [
      'pm kisan', 'farmer scheme', 'kisan samman nidhi', 'ekyc', 'land seeding', 'namo shetkari', '7/12',
      'पीएम किसान', 'शेतकरी योजना', 'किसान सम्मान निधि', 'नमो शेतकरी', 'ई-केवायसी', 'kisan'
    ]
  },
  {
    id: 'srv-senior-citizen',
    slug: 'senior-citizen-card',
    category: 'welfare',
    categoryName: {
      en: 'Social Welfare & Pensions',
      hi: 'सामाजिक कल्याण एवं पेंशन',
      mr: 'सामाजिक न्याय व पेन्शन'
    },
    title: {
      en: 'Senior Citizen Identity Card & Pension',
      hi: 'वरिष्ठ नागरिक पहचान पत्र एवं वृद्धावस्था पेंशन योजना',
      mr: 'ज्येष्ठ नागरिक ओळखपत्र व श्रावणबाळ / संजय गांधी पेन्शन'
    },
    department: {
      en: 'Social Justice & Special Assistance Department',
      hi: 'सामाजिक न्याय एवं अधिकारिता विभाग',
      mr: 'सामाजिक न्याय व विशेष सहाय्य विभाग'
    },
    shortDescription: {
      en: 'Official identity card for citizens aged 60+ for travel concessions, hospital priority, and monthly old-age pension.',
      hi: '60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों के लिए यात्रा रियायत, अस्पताल सुविधा व मासिक पेंशन हेतु पहचान पत्र।',
      mr: '६० वर्षे पूर्ण झालेल्या नागरिकांसाठी बस प्रवास सवलत, शासकीय रुग्णालयात प्राधान्य व मासिक निवृत्तीवेतनासाठी अधिकृत ओळखपत्र.'
    },
    fullDescription: {
      en: 'The Senior Citizen Identity Card serves as conclusive proof of age and residential status for individuals who have reached 60 years of age. It entitles holders to travel concessions (such as free or half-ticket travel on State Transport MSRTC / UPSRTC buses), separate queues at government offices, priority medical consultations, and eligibility for state social security pensions (Shravanbal Yojana / Indira Gandhi National Old Age Pension Scheme).',
      hi: 'वरिष्ठ नागरिक पहचान पत्र 60 वर्ष अथवा उससे अधिक आयु के व्यक्तियों के लिए जारी किया जाता है। इसके माध्यम से राज्य परिवहन की बसों में रियायती यात्रा, अस्पतालों में त्वरित उपचार, आयकर लाभ तथा मासिक वृद्धावस्था पेंशन योजनाओं का लाभ प्राप्त होता है।',
      mr: 'ज्येष्ठ नागरिक ओळखपत्र हे ६० वर्षे व त्याहून अधिक वय असलेल्या नागरिकांना शासनामार्फत दिले जाते. यामुळे एसटी महामंडळाच्या बस प्रवासात मोफत किंवा ५०% सवलत, शासकीय रुग्णालयांत ज्येष्ठ नागरिक कक्षात प्राधान्य, आणि श्रावणबाळ किंवा इंदिरा गांधी वृद्धापकाळ पेन्शन योजनेचा लाभ मिळतो.'
    },
    estimatedDays: {
      en: '7 to 15 Working Days',
      hi: '7 से 15 कार्य दिवस',
      mr: '७ ते १५ कामकाजाचे दिवस'
    },
    fee: {
      en: '₹20 to ₹50',
      hi: '₹20 से ₹50',
      mr: '₹२० ते ₹५०'
    },
    validity: {
      en: 'Lifetime validity',
      hi: 'आजीवन वैध',
      mr: 'आजीवन वैध'
    },
    eligibility: {
      en: [
        'Citizen must have completed 60 years of age on the date of application.',
        'Must be a permanent resident of the respective State.',
        'For monthly pension schemes, family income must be below prescribed poverty / BPL limits.'
      ],
      hi: [
        'आवेदक की आयु 60 वर्ष पूरी होनी चाहिए।',
        'संबंधित राज्य का स्थायी निवासी होना चाहिए।',
        'मासिक पेंशन योजनाओं के लिए पारिवारिक आय गरीबी रेखा (बीपीएल) सीमा के भीतर होनी चाहिए।'
      ],
      mr: [
        'अर्जाच्या दिनांकास अर्जदाराचे वय ६० वर्षे पूर्ण असणे आवश्यक.',
        'संबंधित राज्याचे कायमस्वरूपी रहिवासी असावेत.',
        'मासिक पेन्शन योजनेसाठी (श्रावणबाळ/संजय गांधी) कौटुंबिक उत्पन्न विहित मर्यादेत असावे.'
      ]
    },
    documents: [
      {
        id: 'snr-doc-1',
        name: {
          en: 'Age Proof (Any One)',
          hi: 'आयु का प्रमाण (कोई एक)',
          mr: 'वयाचा पुरावा (कोणताही एक)'
        },
        mandatory: true,
        description: {
          en: 'School Leaving Certificate, Birth Certificate, Passport, PAN Card, or Govt Medical Officer Age Certificate.',
          hi: 'स्कूल टीसी, जन्म प्रमाण पत्र, पैन कार्ड, अथवा सरकारी अस्पताल के डॉक्टर द्वारा आयु प्रमाण पत्र।',
          mr: 'शाळा सोडल्याचा दाखला, जन्म दाखला, पॅन कार्ड किंवा शासकीय वैद्यकीय अधिकाऱ्यांचा वयाचा दाखला.'
        }
      },
      {
        id: 'snr-doc-2',
        name: {
          en: 'Proof of Residence (Aadhaar / Voter ID / Electricity Bill)',
          hi: 'निवास का प्रमाण (आधार / वोटर आईडी / बिजली बिल)',
          mr: 'रहिवासी पुरावा (आधार / मतदार ओळखपत्र / वीज बिल)'
        },
        mandatory: true,
        description: {
          en: 'Valid proof showing local residential address.',
          hi: 'स्थानीय निवास का वैध प्रमाण।',
          mr: 'स्थानिक वास्तव्याचा वैध पुरावा.'
        }
      },
      {
        id: 'snr-doc-3',
        name: {
          en: 'Medical Certificate with Blood Group',
          hi: 'रक्त समूह युक्त मेडिकल प्रमाण पत्र',
          mr: 'रक्तगट (Blood Group) नमूद असलेले वैद्यकीय प्रमाणपत्र'
        },
        mandatory: true,
        description: {
          en: 'Doctor’s certificate stating blood group and any chronic illness details for emergency use.',
          hi: 'रजिस्टर डॉक्टर द्वारा रक्त समूह व स्वास्थ्य विवरण।',
          mr: 'नोंदणीकृत डॉक्टरांकडून रक्तगट व आरोग्याबाबतचे साधे प्रमाणपत्र.'
        }
      },
      {
        id: 'snr-doc-4',
        name: {
          en: 'Passport Size Photographs (2 Copies)',
          hi: 'पासपोर्ट साइज रंगीन फोटो (2 प्रतियां)',
          mr: 'पासपोर्ट आकाराचे रंगीत फोटो (२ प्रती)'
        },
        mandatory: true,
        description: {
          en: 'Recent passport sized colored photos for identity card fabrication.',
          hi: 'पहचान पत्र हेतु हालिया फोटो।',
          mr: 'ओळखपत्रावर लावण्यासाठी अलीकडील २ रंगीत फोटो.'
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Gather Age Proof & Blood Group Report',
          hi: 'आयु प्रमाण व ब्लड ग्रुप रिपोर्ट तैयार करें',
          mr: 'वयाचा पुरावा व रक्तगट प्रमाणपत्र घ्या'
        },
        details: {
          en: 'Prepare document showing birth date (PAN/TC/Aadhaar) and visit a registered doctor for blood group endorsement.',
          hi: 'जन्म तिथि दर्शाने वाला दस्तावेज और डॉक्टर से ब्लड ग्रुप प्रमाण पत्र लें।',
          mr: 'जन्मदिनांक दर्शवणारे ओळखपत्र आणि डॉक्टरांकडून रक्तगटाचा दाखला घ्या.'
        },
        mode: 'both'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Submit Application via Seva Kendra or Tahsil Office',
          hi: 'सेवा केंद्र अथवा तहसील में फॉर्म जमा करें',
          mr: 'सेवा केंद्रात किंवा तहसील कार्यालयात अर्ज सादर करा'
        },
        details: {
          en: 'Submit senior citizen application form with emergency contact details.',
          hi: 'आपातकालीन संपर्क विवरण के साथ फॉर्म सेवा केंद्र पर जमा करें।',
          mr: 'आपत्कालीन संपर्कासह विहित नमुन्यातील अर्ज सेवा केंद्रात भरा.'
        },
        mode: 'both'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Social Welfare Verification',
          hi: 'समाज कल्याण विभाग द्वारा सत्यापन',
          mr: 'समाजकल्याण विभागामार्फत पडताळणी'
        },
        details: {
          en: 'Social Welfare Officer verifies age documentation and authorizes card printing.',
          hi: 'अधिकारी आयु साक्ष्यों की पुष्टि कर कार्ड जारी करने की अनुमति देते हैं।',
          mr: 'अधिकारी वयाचे पुरावे तपासून ओळखपत्र वितरणाची मंजुरी देतात.'
        },
        mode: 'both'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Receive Laminated Identity Card',
          hi: 'लेमिनेटेड वरिष्ठ नागरिक कार्ड प्राप्त करें',
          mr: 'लॅमिनेटेड ज्येष्ठ नागरिक ओळखपत्र प्राप्त करा'
        },
        details: {
          en: 'Collect laminated ID card with seal for travel concessions and healthcare benefits.',
          hi: 'रियायती यात्रा व लाभ हेतु लेमिनेटेड कार्ड प्राप्त करें।',
          mr: 'एसटी प्रवास सवलत व इतर लाभांसाठी लॅमिनेटेड ओळखपत्र मिळवा.'
        },
        mode: 'both'
      }
    ],
    officialLinks: [
      {
        title: {
          en: 'Social Justice Department Portal (Maharashtra)',
          hi: 'सामाजिक न्याय विभाग (महाराष्ट्र)',
          mr: 'सामाजिक न्याय विभाग (महाराष्ट्र)'
        },
        url: 'https://sjsa.maharashtra.gov.in',
        portalName: 'SJSA Maharashtra',
        level: 'Maharashtra'
      },
      {
        title: {
          en: 'National Portal for Senior Citizens',
          hi: 'वरिष्ठ नागरिकों हेतु राष्ट्रीय पोर्टल',
          mr: 'ज्येष्ठ नागरिकांसाठी राष्ट्रीय पोर्टल'
        },
        url: 'https://socialjustice.gov.in',
        portalName: 'Social Justice Ministry',
        level: 'Central'
      }
    ],
    importantNotice: {
      en: 'Concession Advisory: Show this card along with Aadhaar at State Road Transport (ST) ticket counters to avail citizen travel concessions.',
      hi: 'यात्रा परामर्श: राज्य परिवहन (एसटी) टिकट काउंटर पर यह पहचान पत्र दिखाकर निर्धारित छूट का लाभ लें।',
      mr: 'प्रवास सवलत सूचना: एसटी बस प्रवासाच्या वेळी वाहकाला (कंडक्टर) हे ओळखपत्र व आधार दाखवून सवलतीचा लाभ घेता येतो.'
    },
    keywords: [
      'senior citizen card', 'vridha pension', 'jyeshtha nagarik', 'old age card', 'st bus concession', 'shravanbal',
      'ज्येष्ठ नागरिक ओळखपत्र', 'वृद्धावस्था पेंशन', 'श्रावणबाळ योजना', 'एसटी सवलत', 'senior citizen'
    ]
  }
];

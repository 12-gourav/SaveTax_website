import img1 from "../assets/icons/itr.png";
import gst from "../assets/icons/gst.png";
import tds from "../assets/icons/tds.png";
import roc from "../assets/icons/roc.png";
import red from "../assets/icons/red_icon.png";
import card1 from "../assets/icons/card1.png";
import calc from "../assets/icons/calc.png";
import pedit from "../assets/icons/p-edit.png";
import oedit from "../assets/icons/o-edit.png";
import rr from "../assets/icons/rr.png";
import grr from "../assets/icons/grr.png";
import prr from "../assets/icons/prr.png";
import brr from "../assets/icons/brr.png";
import support from "../assets/icons/support.png";

export const serviceData = [
  {
    id: "income-tax-returns",
    title: "Income Tax Returns (ITR Filing)",
    category: "Compliance",
    short_description:
      "Accurate and hassle-free filing of your annual income tax returns.",
    long_description:
      "We provide professional ITR filing services for salaried employees, freelancers, professionals, and businesses. Our experts ensure timely filing, maximize deductions, and prevent penalties.",
    benefits: [
      "Avoid penalties for late filing",
      "Claim eligible deductions and refunds",
      "Maintain financial compliance",
      "Proof of income for loans and visas",
    ],
    seo: {
      meta_title: "Income Tax Return Filing Online | Save Tax",
      meta_description:
        "File your Income Tax Returns online with expert support. Hassle-free ITR filing for salaried, business, and professionals with maximum deductions.",
      keywords: [
        "ITR filing",
        "Income Tax Return India",
        "ITR online",
        "Save Tax filing",
      ],
    },
    color: "oklch(97% 0.014 254.604)",
    textColor: "oklch(62.3% 0.214 259.815)",
    img: img1,
  },
  {
    id: "gst-returns",
    title: "GST Returns Filing",
    category: "Compliance",
    short_description:
      "Seamless GST return filing for businesses of all sizes.",
    long_description:
      "We handle GST return filing including GSTR-1, GSTR-3B, and annual returns. Our experts ensure accuracy and compliance while helping businesses avoid penalties.",
    benefits: [
      "Avoid interest and late fees",
      "Ensure smooth input tax credit claims",
      "Stay fully GST compliant",
      "Maintain credibility with customers",
    ],
    seo: {
      meta_title: "GST Returns Filing Online | Save Tax",
      meta_description:
        "Expert GST return filing services including GSTR-1, GSTR-3B & annual filing. Ensure compliance, claim ITC & avoid penalties with Save Tax.",
      keywords: ["GST filing", "GSTR-3B", "GSTR-1 filing", "GST return online"],
    },
    color: "oklch(96.9% 0.016 293.756)",
    textColor: "oklch(60.6% 0.25 292.717)",
    img: gst,
  },
  {
    id: "tds-returns",
    title: "TDS Returns Filing",
    category: "Compliance",
    short_description: "Accurate quarterly TDS return filing for businesses.",
    long_description:
      "We help businesses and professionals file TDS returns on time, ensuring proper credit of tax to deductees and preventing penalties.",
    benefits: [
      "Avoid interest and penalties",
      "Maintain compliance with IT Act",
      "Smooth employeeOrvendor credit availability",
      "Quarterly compliance without hassle",
    ],
    seo: {
      meta_title: "TDS Return Filing Services | Save Tax",
      meta_description:
        "File quarterly TDS returns accurately with Save Tax. Avoid penalties, ensure compliance, and provide smooth credit for employees & vendors.",
      keywords: [
        "TDS return filing",
        "quarterly TDS",
        "TDS online India",
        "TDS compliance",
      ],
    },
    color: "oklch(98% 0.016 73.684)",
    textColor: "oklch(70.5% 0.213 47.604)",
    img: tds,
  },
  {
    id: "roc-annual-returns",
    title: "ROC Annual Returns",
    category: "Compliance",
    short_description:
      "Annual compliance filing with the Registrar of Companies.",
    long_description:
      "Our experts manage filing of annual returns and financial statements with the MCA to ensure your company OR LLP remains compliant.",
    benefits: [
      "Avoid company strike-off",
      "Stay compliant with Companies Act",
      "Protect directors from legal issues",
      "Maintain corporate credibility",
    ],
    seo: {
      meta_title: "ROC Annual Return Filing | Save Tax",
      meta_description:
        "Stay compliant with MCA by filing ROC annual returns. Professional support for companies & LLPs to avoid penalties and maintain credibility.",
      keywords: [
        "ROC annual return",
        "MCA compliance",
        "LLP annual filing",
        "company annual return",
      ],
    },
    color: "oklch(98.2% 0.018 155.826)",
    textColor: "oklch(79.2% 0.209 151.711)",
    img: roc,
  },
  {
    id: "ptrc-ptec",
    title: "PTRC OR PTEC Payment & Returns",
    category: "Compliance",
    short_description: "Professional tax registration and return filing.",
    long_description:
      "We assist businesses with PTRC (Professional Tax Registration Certificate) and PTEC (Professional Tax Enrollment Certificate) registration, payments, and return filing.",
    benefits: [
      "Avoid penalties for delay",
      "Ensure full compliance with state laws",
      "Smooth salary processing",
      "Hassle-free business operations",
    ],
    seo: {
      meta_title: "PTRC PTEC Registration & Return Filing | Save Tax",
      meta_description:
        "Register and file PTRCOrPTEC returns easily with Save Tax. Ensure professional tax compliance for businesses and avoid penalties.",
      keywords: [
        "PTRC filing",
        "PTEC registration",
        "professional tax India",
        "PTRC returns",
      ],
    },
    color: "oklch(97.1% 0.013 17.38)",
    textColor: "oklch(63.7% 0.237 25.331)",
    img: red,
  },
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Book Keeping",
    category: "Other Services",
    short_description:
      "Comprehensive accounting and bookkeeping services for businesses of all sizes.",
    long_description:
      "We manage daily accounting, ledger maintenance, and financial reporting to help businesses stay organized and compliant with tax and statutory requirements.",
    benefits: [
      "Accurate financial records",
      "Timely reporting",
      "Simplified tax preparation",
      "Enhanced business decision making",
    ],
    seo: {
      meta_title: "Accounting and Bookkeeping Services | Save Tax",
      meta_description:
        "Professional accounting and bookkeeping services for businesses of all sizes. Ensure accurate records, compliance, and smooth financial operations.",
      keywords: [
        "accounting services",
        "bookkeeping",
        "financial reporting",
        "business accounts India",
      ],
    },
    color: "oklch(98.2% 0.018 155.826)",
    textColor: "oklch(79.2% 0.209 151.711)",
    img: calc,
  },
  {
    id: "pan-tan-application",
    title: "PANOrTAN Application",
    category: "Other Services",
    short_description: "Seamless application for PAN and TAN registration.",
    long_description:
      "We assist individuals and businesses in applying for PAN and TAN, ensuring quick processing and compliance with tax regulations.",
    benefits: [
      "Quick issuance",
      "Avoids tax compliance issues",
      "Necessary for business and salary processing",
    ],
    seo: {
      meta_title: "PAN TAN Application Services | Save Tax",
      meta_description:
        "Apply for PAN and TAN effortlessly with Save Tax. Quick processing and full compliance for individuals and businesses.",
      keywords: [
        "PAN application",
        "TAN registration",
        "tax compliance India",
        "PAN online",
      ],
    },
    color: "oklch(97% 0.014 254.604)",
    textColor: "oklch(62.3% 0.214 259.815)",
    img: card1,
  },
  {
    id: "aadhaar-update",
    title: "Aadhaar Card Update",
    category: "Other Services",
    short_description: "Update your Aadhaar details easily.",
    long_description:
      "We help you update your Aadhaar information such as address, mobile number, and name, ensuring your records remain accurate.",
    benefits: [
      "Keep government records updated",
      "Necessary for banking and tax compliance",
      "Avoid identity mismatches",
    ],
    seo: {
      meta_title: "Aadhaar Card Update Services | Save Tax",
      meta_description:
        "Update your Aadhaar card details easily with Save Tax. Ensure your records are accurate and compliant with government requirements.",
      keywords: [
        "Aadhaar update",
        "Aadhaar correction",
        "update Aadhaar online",
        "Aadhaar services",
      ],
    },
    color: "oklch(96.9% 0.016 293.756)",
    textColor: "oklch(60.6% 0.25 292.717)",
    img: pedit,
  },
  {
    id: "dsc-application",
    title: "DSC Application",
    category: "Other Services",
    short_description:
      "Digital Signature Certificate application for individuals and businesses.",
    long_description:
      "We facilitate DSC application for secure digital authentication required in filing tax returns, MCA filings, and e-signing documents.",
    benefits: [
      "Secure digital transactions",
      "Compliant with legal requirements",
      "Essential for online filings",
    ],
    seo: {
      meta_title: "DSC Digital Signature Application | Save Tax",
      meta_description:
        "Apply for Digital Signature Certificate (DSC) for secure online filings, e-signing, and MCA compliance with Save Tax services.",
      keywords: [
        "DSC application",
        "Digital Signature Certificate India",
        "e-sign DSC",
        "DSC online",
      ],
    },
    color: "oklch(98% 0.016 73.684)",
    textColor: "oklch(70.5% 0.213 47.604)",
    img: oedit,
  },
  {
    id: "gst-registration",
    title: "GST Registration",
    category: "Registrations",
    short_description: "Register your business under GST with ease.",
    long_description:
      "We guide businesses through the GST registration process, ensuring all compliance requirements are met for smooth business operations.",
    benefits: [
      "Legally compliant business operations",
      "Eligible for input tax credit",
      "Smooth invoicing and tax filings",
    ],
    seo: {
      meta_title: "GST Registration Online | Save Tax",
      meta_description:
        "Get your business GST registered quickly and hassle-free with Save Tax. Ensure compliance and enjoy input tax credit benefits.",
      keywords: [
        "GST registration",
        "GST online",
        "business GST India",
        "GST compliance",
      ],
    },
    color: "oklch(98.2% 0.018 155.826)",
    textColor: "oklch(79.2% 0.209 151.711)",
    img: grr,
  },
  {
    id: "iso-registration",
    title: "ISO Registration",
    category: "Registrations",
    short_description: "Obtain ISO certification for your business.",
    long_description:
      "We assist companies in obtaining ISO certification, improving credibility, quality standards, and customer trust.",
    benefits: [
      "Enhances brand reputation",
      "Ensures quality management standards",
      "Opens business opportunities",
    ],
    seo: {
      meta_title: "ISO Certification Services | Save Tax",
      meta_description:
        "Get ISO certification for your business to improve quality standards, credibility, and customer trust with Save Tax.",
      keywords: [
        "ISO certification",
        "ISO registration",
        "quality certification India",
        "ISO services",
      ],
    },
    color: "oklch(97.1% 0.013 17.38)",
    textColor: "oklch(63.7% 0.237 25.331)",
    img: rr,
  },
  {
    id: "company-formation",
    title: "Company Formation",
    category: "Registrations",
    short_description:
      "Complete support for forming Private Limited, LLP, or Partnership.",
    long_description:
      "We handle all aspects of company formation, from name approval to registration, PANOrTAN, and GST, making the setup process hassle-free.",
    benefits: [
      "Quick incorporation",
      "Compliance with MCA rules",
      "Foundation for business growth",
    ],
    seo: {
      meta_title: "Company Formation Services | Save Tax",
      meta_description:
        "Form your Private Limited, LLP, or Partnership company quickly and compliantly with Save Tax. Expert guidance for smooth registration.",
      keywords: [
        "company formation",
        "business incorporation India",
        "LLP registration",
        "private limited company registration",
      ],
    },
    color: "oklch(96.9% 0.016 293.756)",
    textColor: "oklch(60.6% 0.25 292.717)",
    img: pedit,
  },
  {
    id: "huf-partnership-registration",
    title: "HUFOrPartnership Registration",
    category: "Registrations",
    short_description: "Legal registration of HUF or partnership entities.",
    long_description:
      "We assist in registering HUFs and partnerships, ensuring legal compliance and smooth business operations.",
    benefits: [
      "Legally recognized entity",
      "Easier financial transactions",
      "Required for taxation and compliance",
    ],
    seo: {
      meta_title: "HUF and Partnership Registration | Save Tax",
      meta_description:
        "Register HUF and Partnership entities legally and compliantly with Save Tax services. Ensure smooth operations and tax compliance.",
      keywords: [
        "HUF registration",
        "partnership registration India",
        "legal entity registration",
        "business registration",
      ],
    },
    color: "oklch(97% 0.014 254.604)",
    textColor: "oklch(62.3% 0.214 259.815)",
    img: img1,
  },
  {
    id: "iec-registration",
    title: "IEC (Import & Export License)",
    category: "Registrations",
    short_description: "Obtain Import & Export Code for your business.",
    long_description:
      "We guide businesses in obtaining IEC for importOrexport operations, enabling trade without regulatory hassles. Obtain Import & Export Code for your business.",
    benefits: [
      "Legally compliant trade",
      "Required for customs clearance",
      "Smooth international business operations",
    ],
    seo: {
      meta_title: "Import Export Code (IEC) Registration | Save Tax",
      meta_description:
        "Obtain IEC for importOrexport business operations legally and smoothly with Save Tax. Comply with customs & trade regulations.",
      keywords: [
        "IEC registration",
        "Import Export Code India",
        "IEC license",
        "import export registration",
      ],
    },
    color: "oklch(97.7% 0.017 320.058)",
    textColor: "oklch(74% 0.238 322.16)",
    img: prr,
  },
  {
    id: "msme-registration",
    title: "MSME (Business Registration)",
    category: "Registrations",
    short_description: "Register your business under MSME for benefits.",
    long_description:
      "We help businesses register under MSME to avail subsidies, tax benefits, and government schemes. Register your business under MSME for benefits.",
    benefits: [
      "Access to government benefits",
      "Easier funding and credit",
      "Official recognition as MSME",
    ],
    seo: {
      meta_title: "MSME Registration Services | Save Tax",
      meta_description:
        "Register your business under MSME easily with Save Tax. Avail government benefits, subsidies, and tax advantages for your enterprise.",
      keywords: [
        "MSME registration",
        "MSME benefits",
        "business registration India",
        "MSME online",
      ],
    },
    color: "oklch(98.4% 0.003 247.858)",
    textColor: "oklch(20.8% 0.042 265.755)",
    img: brr,
  },
  {
    id: "gumasta-license",
    title: "Gumasta (Shop) License",
    category: "Registrations",
    short_description:
      "Obtain trade license for shops and commercial establishments.",
    long_description:
      "We facilitate obtaining Gumasta license ensuring your business is legally allowed to operate in local jurisdiction.",
    benefits: [
      "Legal compliance for shopOrbusiness",
      "Avoid fines and penalties",
      "Necessary for business operations",
    ],
    seo: {
      meta_title: "Gumasta License Registration | Save Tax",
      meta_description:
        "Obtain Gumasta shop license legally and easily with Save Tax. Ensure compliance for your business operations.",
      keywords: [
        "Gumasta license",
        "shop license registration",
        "trade license India",
        "business license",
      ],
    },
    color: "oklch(96.9% 0.016 293.756)",
    textColor: "oklch(60.6% 0.25 292.717)",
    img: pedit,
  },
  {
    id: "fssai-license",
    title: "FSSAI (Food) License",
    category: "Registrations",
    short_description: "Food business license registration and compliance.",
    long_description:
      "We help food business owners obtain FSSAI license ensuring compliance with food safety regulations. Food business license registration and compliance.",
    benefits: [
      "Ensure food safety compliance",
      "Legal operation of food business",
      "Build customer trust",
    ],
    seo: {
      meta_title: "FSSAI License Registration | Save Tax",
      meta_description:
        "Get FSSAI license for your food business easily and legally with Save Tax. Ensure compliance and build customer trust.",
      keywords: [
        "FSSAI license",
        "food license registration",
        "FSSAI online",
        "food business compliance",
      ],
    },
    color: "oklch(98% 0.016 73.684)",
    textColor: "oklch(70.5% 0.213 47.604)",
    img: oedit,
  },
  {
    id: "trademark-patent",
    title: "Trademark Or Patent Registration",
    category: "Registrations",
    short_description: "Protect your brand, invention, or product legally.",
    long_description:
      "We assist in filing trademarks and patents to safeguard intellectual property, prevent infringement, and strengthen brand value.",
    benefits: [
      "Legal protection of brand and inventions",
      "Prevents unauthorized use",
      "Enhances business value",
    ],
    seo: {
      meta_title: "Trademark and Patent Registration | Save Tax",
      meta_description:
        "Protect your brand, inventions, or products legally with Save Tax. Trademark and patent registration made easy and compliant.",
      keywords: [
        "trademark registration",
        "patent filing",
        "intellectual property India",
        "brand protection",
      ],
    },
    color: "oklch(97% 0.014 254.604)",
    textColor: "oklch(62.3% 0.214 259.815)",
    img: img1,
  },
  {
    id: "contact-help",
    title: "Contact Or Help",
    category: "Support",
    short_description: "Reach out for queries, assistance, or guidance.",
    long_description:
      "Our support team is ready to assist with any questions, clarifications, or guidance regarding services, compliance, or registrations.",
    benefits: [
      "Prompt assistance",
      "Clarification on processes",
      "Support for smooth service experience",
    ],
    seo: {
      meta_title: "Contact Save Tax | Customer Support & Help",
      meta_description:
        "Reach out to Save Tax support team for assistance with compliance, registration, and other services. Quick and reliable help.",
      keywords: [
        "contact support Save Tax",
        "customer help India",
        "compliance support",
        "service assistance",
      ],
    },
    img: support,
    color: "oklch(97% 0.014 254.604)",
    textColor: "oklch(62.3% 0.214 259.815)",
  },
];

export const serviceCategory = [
  {
    id: 1,
    icon: <i className="bx bxs-shield-alt-2"></i>,
    title: "Compliance",
  },
  {
    id: 1,
    icon: <i className="bx bxs-user-account"></i>,
    title: "Other Services",
  },
  {
    id: 1,
    icon: <i className="bx bx-buildings"></i>,
    title: "Registrations",
  },
  {
    id: 1,
    icon: <i className="bx bx-support"></i>,
    title: "Support",
  },
];

export const circularServices = [
  {
    id: "1",
    color: "oklch(70.5% 0.213 47.604)",
    bg: "oklch(98% 0.016 73.684)",
    short:
      "Save Tax – Your trusted partner for simple, reliable, and stress-free tax solutions.",
    long: [
      {
        id: "a",
        title: "Trusted Expertise",
        dis: "Backed by experienced tax professionals ensuring accuracy and compliance.",
      },
      {
        id: "b",
        title: "Reliable Support",
        dis: "Always available to guide you with consistent and dependable service.",
      },
      {
        id: "c",
        title: "Secure Process",
        dis: "Your financial data is handled with complete confidentiality and care.",
      },
    ],
  },
  {
    id: "2",
    short: "Proficiency that delivers expert solutions tailored to your needs.",
    color: "oklch(58.5% 0.233 277.117)",
    bg: "oklch(96.2% 0.018 272.314)",
    long: [
      {
        id: "a",
        title: "Error-Free Filing",
        dis: "We ensure every detail is precise to avoid penalties or delays.",
      },
      {
        id: "b",
        title: "Regulation Compliance",
        dis: "Always updated with the latest tax laws and government guidelines.",
      },
      {
        id: "c",
        title: "Attention to Detail",
        dis: "Every document is carefully reviewed to guarantee accuracy.",
      },
    ],
  },
  {
    id: "3",
    short: "Accuracy that ensures error-free tax filing every time.",
    color: "oklch(72.3% 0.219 149.579)",
    bg: "oklch(98.2% 0.018 155.826)",
    long: [
      {
        id: "a",
        title: "Smart Tools",
        dis: "AI-powered tools simplify tax filing and reduce manual errors.",
      },
      {
        id: "b",
        title: "Time-Saving",
        dis: "Automated workflows speed up the entire tax filing process.",
      },
      {
        id: "c",
        title: "Seamless Integration",
        dis: "Easy integration with financial data for smooth operations.",
      },
    ],
  },
  {
    id: "4",
    short: "Knowledge that keeps you ahead in tax planning and compliance.",
    color: "oklch(65.6% 0.241 354.308)",
    bg: "oklch(97.1% 0.014 343.198)",
    long: [
      {
        id: "a",
        title: "Skilled Experts",
        dis: "Handled by qualified professionals with proven tax expertise.",
      },
      {
        id: "b",
        title: "Tailored Solutions",
        dis: "We adapt strategies to meet your unique tax requirements.",
      },
      {
        id: "c",
        title: "Professional Approach",
        dis: "Every case is managed with precision and dedication.",
      },
    ],
  },
  {
    id: "5",
    short: "Automation that makes tax filing faster and hassle-free.",
    color: "oklch(64.5% 0.246 16.439)",
    bg: "oklch(96.9% 0.015 12.422)",
    long: [
      {
        id: "a",
        title: "Updated Insights",
        dis: "We stay current with changing tax rules and regulations.",
      },
      {
        id: "b",
        title: "Informed Guidance",
        dis: "Receive expert advice backed by in-depth tax knowledge.",
      },
      {
        id: "c",
        title: "Educational Support",
        dis: "We help you understand taxes better for smarter decisions.",
      },
    ],
  },
  {
    id: "6",
    short: "Insights that empower better financial and tax decisions.",
    color: "oklch(70.7% 0.165 254.624)",
    bg: "oklch(97% 0.014 254.604)",
    long: [
      {
        id: "a",
        title: "Data-Driven Insights",
        dis: "Clear reports and analytics to help you save more efficiently.",
      },
      {
        id: "b",
        title: "Future Planning",
        dis: "Insights that prepare you for upcoming tax obligations.",
      },
      {
        id: "c",
        title: "Strategic Advantage",
        dis: "Turn financial data into strategies for maximum tax benefits.",
      },
    ],
  },
];

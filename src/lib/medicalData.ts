export interface Hospital {
  name: string;
  bnName: string;
  division: string;
  district: string;
  upazila: string;
  contact: string;
  location: string;
  type: 'Govt' | 'Private';
}

export const medicalData: Hospital[] = [
  // Dhaka
  {
    name: "Dhaka Medical College Hospital",
    bnName: "ঢাকা মেডিকেল কলেজ হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Shahbagh",
    contact: "02-9669340",
    location: "https://goo.gl/maps/DhakaMed",
    type: "Govt"
  },
  {
    name: "BIRDEM General Hospital",
    bnName: "বারডেম জেনারেল হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Shahbagh",
    contact: "02-9661551",
    location: "https://goo.gl/maps/BIRDEM",
    type: "Private"
  },
  {
    name: "Evercare Hospital Dhaka",
    bnName: "এভারকেয়ার হাসপাতাল ঢাকা",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Bashundhara",
    contact: "10678",
    location: "https://goo.gl/maps/EvercareDhaka",
    type: "Private"
  },
  {
    name: "LabAid Specialized Hospital",
    bnName: "ল্যাবএইড স্পেশালাইজড হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Dhanmondi",
    contact: "10606",
    location: "https://goo.gl/maps/LabAid",
    type: "Private"
  },
  {
    name: "Ibn Sina Specialized Hospital",
    bnName: "ইবনে সিনা স্পেশালাইজড হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Dhanmondi",
    contact: "10615",
    location: "https://goo.gl/maps/IbnSina",
    type: "Private"
  },
  {
    name: "Shaheed Suhrawardy Medical College Hospital",
    bnName: "শহীদ সোহরাওয়ার্দী মেডিকেল কলেজ হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Sher-e-Bangla Nagar",
    contact: "02-9130800",
    location: "https://goo.gl/maps/SuhrawardyMed",
    type: "Govt"
  },
  {
    name: "Enam Medical College Hospital",
    bnName: "এনাম মেডিকেল কলেজ হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Savar",
    contact: "01716-358146",
    location: "https://goo.gl/maps/EnamMed",
    type: "Private"
  },
  {
    name: "United Hospital",
    bnName: "ইউনাইটেড হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Gulshan",
    contact: "10666",
    location: "https://goo.gl/maps/UnitedH",
    type: "Private"
  },
  {
    name: "Sir Salimullah Medical College Hospital",
    bnName: "স্যার সলিমুল্লাহ মেডিকেল কলেজ হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Mitford",
    contact: "02-7319002",
    location: "https://goo.gl/maps/Mitford",
    type: "Govt"
  },
  {
    name: "Square Hospital",
    bnName: "স্কয়ার হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Panthapath",
    contact: "10616",
    location: "https://goo.gl/maps/SquareH",
    type: "Private"
  },
  // Chittagong
  {
    name: "Chittagong Medical College Hospital",
    bnName: "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল",
    division: "Chittagong",
    district: "Chittagong",
    upazila: "Panchlaish",
    contact: "031-619400",
    location: "https://goo.gl/maps/CtgMed",
    type: "Govt"
  },
  {
    name: "Evercare Hospital Chattogram",
    bnName: "এভারকেয়ার হাসপাতাল চট্টগ্রাম",
    division: "Chittagong",
    district: "Chittagong",
    upazila: "Ananya Residential Area",
    contact: "09612310663",
    location: "https://goo.gl/maps/EvercareCtg",
    type: "Private"
  },
  {
    name: "Imperial Hospital Limited",
    bnName: "ইম্পেরিয়াল হাসপাতাল লিমিটেড",
    division: "Chittagong",
    district: "Chittagong",
    upazila: "Pahartali",
    contact: "09612-247247",
    location: "https://goo.gl/maps/ImperialCtg",
    type: "Private"
  },
  {
    name: "Chattogram Maa-O-Shishu Hospital",
    bnName: "চট্টগ্রাম মা ও শিশু হাসপাতাল",
    division: "Chittagong",
    district: "Chittagong",
    upazila: "Agrabad",
    contact: "031-718645",
    location: "https://goo.gl/maps/MaaOShishuCtg",
    type: "Govt"
  },
  {
    name: "Cox's Bazar Medical College Hospital",
    bnName: "কক্সবাজার মেডিকেল কলেজ হাসপাতাল",
    division: "Chittagong",
    district: "Cox's Bazar",
    upazila: "Cox's Bazar Sadar",
    contact: "0341-63554",
    location: "https://goo.gl/maps/CoxMed",
    type: "Govt"
  },
  // Rajshahi
  {
    name: "Rajshahi Medical College Hospital",
    bnName: "রাজশাহী মেডিকেল কলেজ হাসপাতাল",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Rajpari",
    contact: "0721-772150",
    location: "https://goo.gl/maps/RajMed",
    type: "Govt"
  },
  {
    name: "Islami Bank Hospital Rajshahi",
    bnName: "ইসলামী ব্যাংক হাসপাতাল রাজশাহী",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Laxmipur",
    contact: "0721-772161",
    location: "https://goo.gl/maps/IBHRajshahi",
    type: "Private"
  },
  {
    name: "Rajshahi Royal Hospital",
    bnName: "রাজশাহী রয়েল হাসপাতাল",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Laxmipur",
    contact: "0721-772165",
    location: "https://goo.gl/maps/RoyalH",
    type: "Private"
  },
  {
    name: "Chapai Nawabganj 250 Bed Hospital",
    bnName: "চাঁপাইনবাবগঞ্জ ২৫০ শয্যা জেলা হাসপাতাল",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "0781-52416",
    location: "https://goo.gl/maps/ChapaiGen2",
    type: "Govt"
  },
  {
    name: "Gomostapur Upazila Health Complex",
    bnName: "গোমস্তাপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Gomostapur",
    contact: "0782-356111",
    location: "https://goo.gl/maps/GomostapurUHC",
    type: "Govt"
  },
  {
    name: "Shibganj Upazila Health Complex",
    bnName: "শিবগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Shibganj",
    contact: "0782-356222",
    location: "https://goo.gl/maps/ShibganjUHC",
    type: "Govt"
  },
  {
    name: "Nachole Upazila Health Complex",
    bnName: "নাচোল উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Nachole",
    contact: "0782-356333",
    location: "https://goo.gl/maps/NacholeUHC",
    type: "Govt"
  },
  {
    name: "Bholahat Upazila Health Complex",
    bnName: "ভোলাহাট উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Bholahat",
    contact: "0782-356444",
    location: "https://goo.gl/maps/BholahatUHC",
    type: "Govt"
  },
  {
    name: "Chapai Nawabganj Eye Hospital",
    bnName: "চাঁপাইনবাবগঞ্জ চক্ষু হাসপাতাল",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "0781-51234",
    location: "https://goo.gl/maps/ChapaiEye",
    type: "Private"
  },
  {
    name: "Christian Mission Hospital",
    bnName: "খ্রিস্টান মিশন হাসপাতাল",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Sreerampur",
    contact: "0721-772164",
    location: "https://goo.gl/maps/MissionH",
    type: "Private"
  },
  {
    name: "Shaheed Ziaur Rahman Medical College",
    bnName: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ",
    division: "Rajshahi",
    district: "Bogra",
    upazila: "Bogra Sadar",
    contact: "051-66045",
    location: "https://goo.gl/maps/BograMed",
    type: "Govt"
  },
  {
    name: "Barind Medical College & Hospital",
    bnName: "বরিন্দ মেডিকেল কলেজ ও হাসপাতাল",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Rajpari",
    contact: "0721-776701",
    location: "https://www.google.com/maps/search/?api=1&query=Barind+Medical+College+Hospital+Rajshahi",
    type: "Private"
  },
  {
    name: "Popular Diagnostic Center Rajshahi",
    bnName: "পপুলার ডায়াগনস্টিক সেন্টার রাজশাহী",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Laxmipur",
    contact: "09613-787811",
    location: "https://www.google.com/maps/search/?api=1&query=Popular+Diagnostic+Center+Rajshahi",
    type: "Private"
  },
  {
    name: "LabAid Diagnostic Rajshahi",
    bnName: "ল্যাবএইড ডায়াগনস্টিক রাজশাহী",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Laxmipur",
    contact: "01766-661234",
    location: "https://www.google.com/maps/search/?api=1&query=LabAid+Diagnostic+Rajshahi",
    type: "Private"
  },
  {
    name: "Ibn Sina Diagnostic Rajshahi",
    bnName: "ইবনে সিনা ডায়াগনস্টিক রাজশাহী",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Laxmipur",
    contact: "01766-663344",
    location: "https://www.google.com/maps/search/?api=1&query=Ibn+Sina+Diagnostic+Rajshahi",
    type: "Private"
  },
  {
    name: "Zamzam Hospital",
    bnName: "জমজম হাসপাতাল",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Laxmipur",
    contact: "0721-771122",
    location: "https://www.google.com/maps/search/?api=1&query=Zamzam+Hospital+Rajshahi",
    type: "Private"
  },
  {
    name: "Modern Medical Center Chapai Nawabganj",
    bnName: "মডার্ন মেডিকেল সেন্টার চাঁপাইনবাবগঞ্জ",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "01711-123456",
    location: "https://www.google.com/maps/search/?api=1&query=Modern+Medical+Center+Chapai+Nawabganj",
    type: "Private"
  },
  {
    name: "Sadem Diagnostic & Hospital",
    bnName: "সাদেম ডায়াগনস্টিক ও হাসপাতাল",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "01712-345678",
    location: "https://www.google.com/maps/search/?api=1&query=Sadem+Diagnostic+And+Hospital+Chapai+Nawabganj",
    type: "Private"
  },
  {
    name: "Al-Sunnah Hospital & Diagnostic Center",
    bnName: "আল-সুন্নাহ হাসপাতাল ও ডায়াগনস্টিক সেন্টার",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "01713-121212",
    location: "https://www.google.com/maps/search/?api=1&query=Al-Sunnah+Hospital+Chapai+Nawabganj",
    type: "Private"
  },
  {
    name: "Rajshahi Blood Transfusion Center",
    bnName: "রাজশাহী ব্লাড ট্রান্সফিউশন সেন্টার",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Rajpari",
    contact: "0721-772150",
    location: "https://www.google.com/maps/search/?api=1&query=Rajshahi+Medical+College+Hospital+Blood+Bank",
    type: "Govt"
  },
  {
    name: "Galaxy Diagnostic & Hospital",
    bnName: "গ্যালাক্সি ডায়াগনস্টিক ও হাসপাতাল",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Laxmipur",
    contact: "01711-404040",
    location: "https://www.google.com/maps/search/?api=1&query=Galaxy+Diagnostic+And+Hospital+Rajshahi",
    type: "Private"
  },
  {
    name: "Prime Diagnostic Center",
    bnName: "প্রাইম ডায়াগনস্টিক সেন্টার",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Laxmipur",
    contact: "01712-505050",
    location: "https://www.google.com/maps/search/?api=1&query=Prime+Diagnostic+Center+Rajshahi",
    type: "Private"
  },
  {
    name: "Mother & Child Care Center Rajshahi",
    bnName: "মা ও শিশু কল্যাণ কেন্দ্র রাজশাহী",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Rajpari",
    contact: "0721-774455",
    location: "https://www.google.com/maps/search/?api=1&query=Mother+And+Child+Care+Center+Rajshahi",
    type: "Govt"
  },
  {
    name: "Chapai Nawabganj Blood Bank",
    bnName: "চাঁপাইনবাবগঞ্জ ব্লাড ব্যাংক",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "0781-52416",
    location: "https://www.google.com/maps/search/?api=1&query=Chapai+Nawabganj+Modern+Sadar+Hospital",
    type: "Govt"
  },
  {
    name: "Seva Diagnostic Center",
    bnName: "সেবা ডায়াগনস্টিক সেন্টার",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "01714-303030",
    location: "https://www.google.com/maps/search/?api=1&query=Seva+Diagnostic+Center+Chapai+Nawabganj",
    type: "Private"
  },
  {
    name: "Amana Hospital Chapai",
    bnName: "আমানা হাসপাতাল চাঁপাইনবাবগঞ্জ",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "01715-606060",
    location: "https://www.google.com/maps/search/?api=1&query=Amana+Hospital+Chapai+Nawabganj",
    type: "Private"
  },
  {
    name: "Nawabganj Modern Clinic",
    bnName: "নবাবগঞ্জ মডার্ন ক্লিনিক",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "01716-707070",
    location: "https://www.google.com/maps/search/?api=1&query=Nawabganj+Modern+Clinic+Chapai+Nawabganj",
    type: "Private"
  },
  // Sylhet
  {
    name: "Sylhet MAG Osmani Medical College Hospital",
    bnName: "সিলেট এমএজি ওসমানী মেডিকেল কলেজ হাসপাতাল",
    division: "Sylhet",
    district: "Sylhet",
    upazila: "Sylhet Sadar",
    contact: "0821-713667",
    location: "https://goo.gl/maps/SylMed",
    type: "Govt"
  },
  {
    name: "Al Haramain Hospital",
    bnName: "আল হারামাইন হাসপাতাল",
    division: "Sylhet",
    district: "Sylhet",
    upazila: "Sobhanighat",
    contact: "0821-723123",
    location: "https://goo.gl/maps/AlHaramain",
    type: "Private"
  },
  {
    name: "Mount Adora Hospital",
    bnName: "মাউন্ট এডোরা হাসপাতাল",
    division: "Sylhet",
    district: "Sylhet",
    upazila: "Nayasarak",
    contact: "09612-300300",
    location: "https://goo.gl/maps/MountAdora",
    type: "Private"
  },
  // Khulna
  {
    name: "Khulna Medical College Hospital",
    bnName: "খুলনা মেডিকেল কলেজ হাসপাতাল",
    division: "Khulna",
    district: "Khulna",
    upazila: "Boyra",
    contact: "041-760350",
    location: "https://goo.gl/maps/KhulMed",
    type: "Govt"
  },
  {
    name: "City Medical College Hospital",
    bnName: "সিটি মেডিকেল কলেজ হাসপাতাল",
    division: "Khulna",
    district: "Khulna",
    upazila: "Sona Danga",
    contact: "041-810600",
    location: "https://goo.gl/maps/CityMedKhulna",
    type: "Private"
  },
  // Barisal
  {
    name: "Sher-e-Bangla Medical College Hospital",
    bnName: "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল",
    division: "Barisal",
    district: "Barisal",
    upazila: "Band Road",
    contact: "0431-2173547",
    location: "https://goo.gl/maps/BarMed",
    type: "Govt"
  },
  {
    name: "BellView Medical Services",
    bnName: "বেলভিউ মেডিকেল সার্ভিসেস",
    division: "Barisal",
    district: "Barisal",
    upazila: "Sadar Road",
    contact: "0431-64532",
    location: "https://goo.gl/maps/BellViewBarisal",
    type: "Private"
  },
  // Rangpur
  {
    name: "Rangpur Medical College Hospital",
    bnName: "রংপুর মেডিকেল কলেজ হাসপাতাল",
    division: "Rangpur",
    district: "Rangpur",
    upazila: "Rangpur Sadar",
    contact: "0521-65040",
    location: "https://goo.gl/maps/RangMed",
    type: "Govt"
  },
  {
    name: "Doctor's Community Hospital",
    bnName: "ডক্টরস কমিউনিটি হাসপাতাল",
    division: "Rangpur",
    district: "Rangpur",
    upazila: "Rangpur Sadar",
    contact: "0521-61122",
    location: "https://goo.gl/maps/DoctorsCommRangpur",
    type: "Private"
  },
  // Mymensingh
  {
    name: "Mymensingh Medical College Hospital",
    bnName: "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল",
    division: "Mymensingh",
    district: "Mymensingh",
    upazila: "Charpara",
    contact: "091-66510",
    location: "https://goo.gl/maps/MymMed",
    type: "Govt"
  },
  {
    name: "Sodesh Hospital",
    bnName: "স্বদেশ হাসপাতাল",
    division: "Mymensingh",
    district: "Mymensingh",
    upazila: "Charpara",
    contact: "01711-122233",
    location: "https://goo.gl/maps/SodeshMym",
    type: "Private"
  },
  {
    name: "Community Based Medical College Hospital",
    bnName: "কমিউনিটি বেজড মেডিকেল কলেজ হাসপাতাল",
    division: "Mymensingh",
    district: "Mymensingh",
    upazila: "Winnerpar",
    contact: "091-62846",
    location: "https://goo.gl/maps/CBMCMym",
    type: "Private"
  },
  {
    name: "Barisal General Hospital",
    bnName: "বরিশাল জেনারেল হাসপাতাল",
    division: "Barisal",
    district: "Barisal",
    upazila: "Bandi Road",
    contact: "0431-2173547",
    location: "https://goo.gl/maps/BarisalGen",
    type: "Govt"
  },
  {
    name: "Islami Bank Community Hospital Rangpur",
    bnName: "ইসলামী ব্যাংক কমিউনিটি হাসপাতাল রংপুর",
    division: "Rangpur",
    district: "Rangpur",
    upazila: "Dhap",
    contact: "0521-65415",
    location: "https://goo.gl/maps/IBCHRangpur",
    type: "Private"
  },
  // Chittagong (Additional)
  {
    name: "Comilla Medical College Hospital",
    bnName: "কুমিল্লা মেডিকেল কলেজ হাসপাতাল",
    division: "Chittagong",
    district: "Comilla",
    upazila: "Comilla Sadar",
    contact: "081-65561",
    location: "https://goo.gl/maps/ComillaMed",
    type: "Govt"
  },
  {
    name: "Noakhali Medical College",
    bnName: "নোয়াখালী মেডিকেল কলেজ",
    division: "Chittagong",
    district: "Noakhali",
    upazila: "Begumganj",
    contact: "0321-62501",
    location: "https://goo.gl/maps/NoakhaliMed",
    type: "Govt"
  },
  // Rangpur (Additional)
  {
    name: "M Abdur Rahim Medical College Hospital",
    bnName: "এম আব্দুর রহিম মেডিকেল কলেজ হাসপাতাল",
    division: "Rangpur",
    district: "Dinajpur",
    upazila: "Dinajpur Sadar",
    contact: "0531-65121",
    location: "https://goo.gl/maps/DinajpurMed",
    type: "Govt"
  },
  // Khulna (Additional)
  {
    name: "Kushtia Medical College",
    bnName: "কুষ্টিয়া মেডিকেল কলেজ",
    division: "Khulna",
    district: "Kushtia",
    upazila: "Kushtia Sadar",
    contact: "071-62021",
    location: "https://goo.gl/maps/KushtiaMed",
    type: "Govt"
  },
  // Dhaka (Additional)
  {
    name: "Faridpur Medical College Hospital",
    bnName: "ফরিদপুর মেডিকেল কলেজ হাসপাতাল",
    division: "Dhaka",
    district: "Faridpur",
    upazila: "Faridpur Sadar",
    contact: "0631-62621",
    location: "https://goo.gl/maps/FaridpurMed",
    type: "Govt"
  },
  {
    name: "Gopalganj 250 Bed General Hospital",
    bnName: "গোপালগঞ্জ ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল",
    division: "Dhaka",
    district: "Gopalganj",
    upazila: "Gopalganj Sadar",
    contact: "02-6685331",
    location: "https://goo.gl/maps/GopalganjGen",
    type: "Govt"
  },
  {
    name: "Narayanganj 300 Bed Hospital",
    bnName: "নারায়ণগঞ্জ ৩০০ শয্যা হাসপাতাল",
    division: "Dhaka",
    district: "Narayanganj",
    upazila: "Narayanganj Sadar",
    contact: "02-7646193",
    location: "https://goo.gl/maps/Narayanganj300",
    type: "Govt"
  },
  {
    name: "Tangail General Hospital",
    bnName: "টাঙ্গাইল জেনারেল হাসপাতাল",
    division: "Dhaka",
    district: "Tangail",
    upazila: "Tangail Sadar",
    contact: "0921-64016",
    location: "https://goo.gl/maps/TangailGen",
    type: "Govt"
  },
  {
    name: "Gazipur Shaheed Tajuddin Ahmad Medical College",
    bnName: "গাজীপুর শহীদ তাজউদ্দীন আহমদ মেডিকেল কলেজ",
    division: "Dhaka",
    district: "Gazipur",
    upazila: "Gazipur Sadar",
    contact: "02-9252119",
    location: "https://goo.gl/maps/GazipurMed",
    type: "Govt"
  },
  {
    name: "Feni 250 Bed General Hospital",
    bnName: "ফেনী ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল",
    division: "Chittagong",
    district: "Feni",
    upazila: "Feni Sadar",
    contact: "0331-74026",
    location: "https://goo.gl/maps/FeniGen",
    type: "Govt"
  },
  {
    name: "Brahmanbaria General Hospital",
    bnName: "ব্রাহ্মণবাড়িয়া জেনারেল হাসপাতাল",
    division: "Chittagong",
    district: "Brahmanbaria",
    upazila: "Brahmanbaria Sadar",
    contact: "0851-58310",
    location: "https://goo.gl/maps/BbariaGen",
    type: "Govt"
  },
  {
    name: "Chandpur General Hospital",
    bnName: "চাঁদপুর জেনারেল হাসপাতাল",
    division: "Chittagong",
    district: "Chandpur",
    upazila: "Chandpur Sadar",
    contact: "0841-63161",
    location: "https://goo.gl/maps/ChandpurGen",
    type: "Govt"
  },
  {
    name: "Abdul Malek Ukil Medical College",
    bnName: "আব্দুল মালেক উকিল মেডিকেল কলেজ",
    division: "Chittagong",
    district: "Noakhali",
    upazila: "Noakhali Sadar",
    contact: "0321-61011",
    location: "https://goo.gl/maps/NoakhaliMed2",
    type: "Govt"
  },
  {
    name: "Pabna General Hospital",
    bnName: "পাবনা জেনারেল হাসপাতাল",
    division: "Rajshahi",
    district: "Pabna",
    upazila: "Pabna Sadar",
    contact: "0731-66016",
    location: "https://goo.gl/maps/PabnaGen",
    type: "Govt"
  },
  {
    name: "Naogaon General Hospital",
    bnName: "নওগাঁ জেনারেল হাসপাতাল",
    division: "Rajshahi",
    district: "Naogaon",
    upazila: "Naogaon Sadar",
    contact: "0741-62416",
    location: "https://goo.gl/maps/NaogaonGen",
    type: "Govt"
  },
  {
    name: "Sirajganj 250 Bed Hospital",
    bnName: "সিরাজগঞ্জ ২৫০ শয্যা হাসপাতাল",
    division: "Rajshahi",
    district: "Sirajganj",
    upazila: "Sirajganj Sadar",
    contact: "0751-62416",
    location: "https://goo.gl/maps/SirajganjGen",
    type: "Govt"
  },
  {
    name: "Satkhira Medical College Hospital",
    bnName: "সাতক্ষীরা মেডিকেল কলেজ হাসপাতাল",
    division: "Khulna",
    district: "Satkhira",
    upazila: "Satkhira Sadar",
    contact: "0471-63416",
    location: "https://goo.gl/maps/SatkhiraMed",
    type: "Govt"
  },
  {
    name: "Jessore General Hospital",
    bnName: "যশোর জেনারেল হাসপাতাল",
    division: "Khulna",
    district: "Jessore",
    upazila: "Jessore Sadar",
    contact: "0421-68416",
    location: "https://goo.gl/maps/JessoreGen",
    type: "Govt"
  },
  {
    name: "Habiganj Sadar Hospital",
    bnName: "হবিগঞ্জ সদর হাসপাতাল",
    division: "Sylhet",
    district: "Habiganj",
    upazila: "Habiganj Sadar",
    contact: "0831-52416",
    location: "https://goo.gl/maps/HabiganjGen",
    type: "Govt"
  },
  {
    name: "Moulvibazar 250 Bed Hospital",
    bnName: "মৌলভীবাজার ২৫০ শয্যা হাসপাতাল",
    division: "Sylhet",
    district: "Moulvibazar",
    upazila: "Moulvibazar Sadar",
    contact: "0861-52416",
    location: "https://goo.gl/maps/MoulvibazarGen",
    type: "Govt"
  },
  {
    name: "Sunamganj Sadar Hospital",
    bnName: "সুনামগঞ্জ সদর হাসপাতাল",
    division: "Sylhet",
    district: "Sunamganj",
    upazila: "Sunamganj Sadar",
    contact: "0871-61416",
    location: "https://goo.gl/maps/SunamganjGen",
    type: "Govt"
  },
  {
    name: "Patuakhali Medical College Hospital",
    bnName: "পটুয়াখালী মেডিকেল কলেজ হাসপাতাল",
    division: "Barisal",
    district: "Patuakhali",
    upazila: "Patuakhali Sadar",
    contact: "0441-62416",
    location: "https://goo.gl/maps/PatuakhaliMed",
    type: "Govt"
  },
  {
    name: "Bhola 250 Bed Hospital",
    bnName: "ভোলা ২৫০ শয্যা হাসপাতাল",
    division: "Barisal",
    district: "Bhola",
    upazila: "Bhola Sadar",
    contact: "0491-61416",
    location: "https://goo.gl/maps/BholaGen",
    type: "Govt"
  },
  {
    name: "Thakurgaon Sadar Hospital",
    bnName: "ঠাকুরগাঁও সদর হাসপাতাল",
    division: "Rangpur",
    district: "Thakurgaon",
    upazila: "Thakurgaon Sadar",
    contact: "0561-52416",
    location: "https://goo.gl/maps/ThakurgaonGen",
    type: "Govt"
  },
  {
    name: "Kurigram Sadar Hospital",
    bnName: "কুড়িগ্রাম সদর হাসপাতাল",
    division: "Rangpur",
    district: "Kurigram",
    upazila: "Kurigram Sadar",
    contact: "0581-61416",
    location: "https://goo.gl/maps/KurigramGen",
    type: "Govt"
  },
  {
    name: "Netrokona Sadar Hospital",
    bnName: "নেত্রকোণা সদর হাসপাতাল",
    division: "Mymensingh",
    district: "Netrokona",
    upazila: "Netrokona Sadar",
    contact: "0951-61416",
    location: "https://goo.gl/maps/NetrokonaGen",
    type: "Govt"
  },
  {
    name: "Sherpur Sadar Hospital",
    bnName: "শেরপুর সদর হাসপাতাল",
    division: "Mymensingh",
    district: "Sherpur",
    upazila: "Sherpur Sadar",
    contact: "0931-61416",
    location: "https://goo.gl/maps/SherpurGen",
    type: "Govt"
  },
  {
    name: "Kishoreganj 250 Bed General Hospital",
    bnName: "কিশোরগঞ্জ ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল",
    division: "Dhaka",
    district: "Kishoreganj",
    upazila: "Kishoreganj Sadar",
    contact: "0941-61516",
    location: "https://goo.gl/maps/KishoreganjGen",
    type: "Govt"
  },
  {
    name: "Munshiganj Sadar Hospital",
    bnName: "মুন্সীগঞ্জ সদর হাসপাতাল",
    division: "Dhaka",
    district: "Munshiganj",
    upazila: "Munshiganj Sadar",
    contact: "02-7611111",
    location: "https://goo.gl/maps/MunshiganjGen",
    type: "Govt"
  },
  {
    name: "Manikganj Sadar Hospital",
    bnName: "মানিকগঞ্জ সদর হাসপাতাল",
    division: "Dhaka",
    district: "Manikganj",
    upazila: "Manikganj Sadar",
    contact: "02-7711111",
    location: "https://goo.gl/maps/ManikganjGen",
    type: "Govt"
  },
  {
    name: "Rajbari Sadar Hospital",
    bnName: "রাজবাড়ী সদর হাসপাতাল",
    division: "Dhaka",
    district: "Rajbari",
    upazila: "Rajbari Sadar",
    contact: "0641-65416",
    location: "https://goo.gl/maps/RajbariGen",
    type: "Govt"
  },
  {
    name: "Madaripur Sadar Hospital",
    bnName: "মাদারীপুর সদর হাসপাতাল",
    division: "Dhaka",
    district: "Madaripur",
    upazila: "Madaripur Sadar",
    contact: "0661-61416",
    location: "https://goo.gl/maps/MadaripurGen",
    type: "Govt"
  },
  {
    name: "Shariatpur Sadar Hospital",
    bnName: "শরীয়তপুর সদর হাসপাতাল",
    division: "Dhaka",
    district: "Shariatpur",
    upazila: "Shariatpur Sadar",
    contact: "0601-61416",
    location: "https://goo.gl/maps/ShariatpurGen",
    type: "Govt"
  },
  {
    name: "Lakshmipur Sadar Hospital",
    bnName: "লক্ষ্মীপুর সদর হাসপাতাল",
    division: "Chittagong",
    district: "Lakshmipur",
    upazila: "Lakshmipur Sadar",
    contact: "0381-61416",
    location: "https://goo.gl/maps/LakshmipurGen",
    type: "Govt"
  },
  {
    name: "Rangamati Sadar Hospital",
    bnName: "রাঙ্গামাটি সদর হাসপাতাল",
    division: "Chittagong",
    district: "Rangamati",
    upazila: "Rangamati Sadar",
    contact: "0351-61416",
    location: "https://goo.gl/maps/RangamatiGen",
    type: "Govt"
  },
  {
    name: "Khagrachari Sadar Hospital",
    bnName: "খাগড়াছড়ি সদর হাসপাতাল",
    division: "Chittagong",
    district: "Khagrachari",
    upazila: "Khagrachari Sadar",
    contact: "0371-61416",
    location: "https://goo.gl/maps/KhagrachariGen",
    type: "Govt"
  },
  {
    name: "Bandarban Sadar Hospital",
    bnName: "বান্দরবান সদর হাসপাতাল",
    division: "Chittagong",
    district: "Bandarban",
    upazila: "Bandarban Sadar",
    contact: "0361-61416",
    location: "https://goo.gl/maps/BandarbanGen",
    type: "Govt"
  },
  {
    name: "Bogra Mohasthangarh Hospital",
    bnName: "বগুড়া মহাস্থানগড় হাসপাতাল",
    division: "Rajshahi",
    district: "Bogra",
    upazila: "Bogra Sadar",
    contact: "051-61416",
    location: "https://goo.gl/maps/BograGen2",
    type: "Govt"
  },
  {
    name: "Joypurhat Sadar Hospital",
    bnName: "জয়পুরহাট সদর হাসপাতাল",
    division: "Rajshahi",
    district: "Joypurhat",
    upazila: "Joypurhat Sadar",
    contact: "0571-61416",
    location: "https://goo.gl/maps/JoypurhatGen",
    type: "Govt"
  },
  {
    name: "Natore Sadar Hospital",
    bnName: "নাটোর সদর হাসপাতাল",
    division: "Rajshahi",
    district: "Natore",
    upazila: "Natore Sadar",
    contact: "0771-61416",
    location: "https://goo.gl/maps/NatoreGen",
    type: "Govt"
  },
  {
    name: "Bagerhat Sadar Hospital",
    bnName: "বাগেরহাট সদর হাসপাতাল",
    division: "Khulna",
    district: "Bagerhat",
    upazila: "Bagerhat Sadar",
    contact: "0468-62416",
    location: "https://goo.gl/maps/BagerhatGen",
    type: "Govt"
  },
  {
    name: "Jhenaidah Sadar Hospital",
    bnName: "ঝিনাইদহ সদর হাসপাতাল",
    division: "Khulna",
    district: "Jhenaidah",
    upazila: "Jhenaidah Sadar",
    contact: "0451-62416",
    location: "https://goo.gl/maps/JhenaidahGen",
    type: "Govt"
  },
  {
    name: "Magura Sadar Hospital",
    bnName: "মাগুরা সদর হাসপাতাল",
    division: "Khulna",
    district: "Magura",
    upazila: "Magura Sadar",
    contact: "0488-62416",
    location: "https://goo.gl/maps/MaguraGen",
    type: "Govt"
  },
  {
    name: "Meherpur Sadar Hospital",
    bnName: "মেহেরপুর সদর হাসপাতাল",
    division: "Khulna",
    district: "Meherpur",
    upazila: "Meherpur Sadar",
    contact: "0791-62416",
    location: "https://goo.gl/maps/MeherpurGen",
    type: "Govt"
  },
  {
    name: "Chuadanga Sadar Hospital",
    bnName: "চুয়াডাঙ্গা সদর হাসপাতাল",
    division: "Khulna",
    district: "Chuadanga",
    upazila: "Chuadanga Sadar",
    contact: "0761-62416",
    location: "https://goo.gl/maps/ChuadangaGen",
    type: "Govt"
  },
  {
    name: "Narail Sadar Hospital",
    bnName: "নড়াইল সদর হাসপাতাল",
    division: "Khulna",
    district: "Narail",
    upazila: "Narail Sadar",
    contact: "0481-62416",
    location: "https://goo.gl/maps/NarailGen",
    type: "Govt"
  },
  {
    name: "Jhalokati Sadar Hospital",
    bnName: "ঝালকাঠি সদর হাসপাতাল",
    division: "Barisal",
    district: "Jhalokati",
    upazila: "Jhalokati Sadar",
    contact: "0498-62416",
    location: "https://goo.gl/maps/JhalokatiGen",
    type: "Govt"
  },
  {
    name: "Pirojpur Sadar Hospital",
    bnName: "পিরোজপুর সদর হাসপাতাল",
    division: "Barisal",
    district: "Pirojpur",
    upazila: "Pirojpur Sadar",
    contact: "0461-62416",
    location: "https://goo.gl/maps/PirojpurGen",
    type: "Govt"
  },
  {
    name: "Barguna Sadar Hospital",
    bnName: "বরগুনা সদর হাসপাতাল",
    division: "Barisal",
    district: "Barguna",
    upazila: "Barguna Sadar",
    contact: "0448-62416",
    location: "https://goo.gl/maps/BargunaGen",
    type: "Govt"
  },
  {
    name: "Lalmonirhat Sadar Hospital",
    bnName: "লালমনিরহাট সদর হাসপাতাল",
    division: "Rangpur",
    district: "Lalmonirhat",
    upazila: "Lalmonirhat Sadar",
    contact: "0591-61416",
    location: "https://goo.gl/maps/LalmonirhatGen",
    type: "Govt"
  },
  {
    name: "Panchagarh Sadar Hospital",
    bnName: "পঞ্চগড় সদর হাসপাতাল",
    division: "Rangpur",
    district: "Panchagarh",
    upazila: "Panchagarh Sadar",
    contact: "0568-61416",
    location: "https://goo.gl/maps/PanchagarhGen",
    type: "Govt"
  },
  {
    name: "Narsingdi Sadar Hospital",
    bnName: "নরসিংদী সদর হাসপাতাল",
    division: "Dhaka",
    district: "Narsingdi",
    upazila: "Narsingdi Sadar",
    contact: "02-9462416",
    location: "https://goo.gl/maps/NarsingdiGen",
    type: "Govt"
  },
  {
    name: "Jamalpur Sadar Hospital",
    bnName: "জামালপুর সদর হাসপাতাল",
    division: "Mymensingh",
    district: "Jamalpur",
    upazila: "Jamalpur Sadar",
    contact: "0981-61416",
    location: "https://goo.gl/maps/JamalpurGen",
    type: "Govt"
  },
  {
    name: "Gaibandha Sadar Hospital",
    bnName: "গাইবান্ধা সদর হাসপাতাল",
    division: "Rangpur",
    district: "Gaibandha",
    upazila: "Gaibandha Sadar",
    contact: "0541-51416",
    location: "https://goo.gl/maps/GaibandhaGen",
    type: "Govt"
  },
  {
    name: "Chapai Nawabganj Sadar Hospital",
    bnName: "চাঁপাইনবাবগঞ্জ সদর হাসপাতাল",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    contact: "0781-52416",
    location: "https://goo.gl/maps/ChapaiGen",
    type: "Govt"
  },
  {
    name: "Savar Upazila Health Complex",
    bnName: "সাভার উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Savar",
    contact: "02-7741111",
    location: "https://goo.gl/maps/SavarUHC",
    type: "Govt"
  },
  {
    name: "Dhamrai Upazila Health Complex",
    bnName: "ধামরাই উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Dhamrai",
    contact: "02-7731111",
    location: "https://goo.gl/maps/DhamraiUHC",
    type: "Govt"
  },
  {
    name: "Kaliakair Upazila Health Complex",
    bnName: "কালিয়াকৈর উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Dhaka",
    district: "Gazipur",
    upazila: "Kaliakair",
    contact: "02-9221111",
    location: "https://goo.gl/maps/KaliakairUHC",
    type: "Govt"
  },
  {
    name: "Nilphamari Sadar Hospital",
    bnName: "নীলফামারী সদর হাসপাতাল",
    division: "Rangpur",
    district: "Nilphamari",
    upazila: "Nilphamari Sadar",
    contact: "0551-61416",
    location: "https://goo.gl/maps/NilphamariGen",
    type: "Govt"
  },
  {
    name: "Hathazari Upazila Health Complex",
    bnName: "হাটহাজারী উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Chittagong",
    district: "Chittagong",
    upazila: "Hathazari",
    contact: "031-681111",
    location: "https://goo.gl/maps/HathazariUHC",
    type: "Govt"
  },
  {
    name: "Sitakunda Upazila Health Complex",
    bnName: "সীতাকুণ্ড উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Chittagong",
    district: "Chittagong",
    upazila: "Sitakunda",
    contact: "031-691111",
    location: "https://goo.gl/maps/SitakundaUHC",
    type: "Govt"
  },
  {
    name: "Putiya Upazila Health Complex",
    bnName: "পুঠিয়া উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Putiya",
    contact: "0721-781111",
    location: "https://goo.gl/maps/PutiyaUHC",
    type: "Govt"
  },
  {
    name: "Fakirhat Upazila Health Complex",
    bnName: "ফকিরহাট উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Khulna",
    district: "Bagerhat",
    upazila: "Fakirhat",
    contact: "0465-356001",
    location: "https://goo.gl/maps/FakirhatUHC",
    type: "Govt"
  },
  {
    name: "Golapganj Upazila Health Complex",
    bnName: "গোলাপগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স",
    division: "Sylhet",
    district: "Sylhet",
    upazila: "Golapganj",
    contact: "0822-771111",
    location: "https://goo.gl/maps/GolapganjUHC",
    type: "Govt"
  },
  {
    name: "Mount Adora Hospital (Akhalia)",
    bnName: "মাউন্ট এডোরা হাসপাতাল (আখালিয়া)",
    division: "Sylhet",
    district: "Sylhet",
    upazila: "Akhalia",
    contact: "01787-691234",
    location: "https://goo.gl/maps/MountAdoraAkhalia",
    type: "Private"
  },
  {
    name: "Popular Diagnostic Center",
    bnName: "পপুলার ডায়াগনস্টিক সেন্টার",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Dhanmondi",
    contact: "09613-787801",
    location: "https://goo.gl/maps/PopularDhanmondi",
    type: "Private"
  },
  {
    name: "Green Life Medical College Hospital",
    bnName: "গ্রিন লাইফ মেডিকেল কলেজ হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Dhanmondi",
    contact: "02-9612345",
    location: "https://goo.gl/maps/GreenLife",
    type: "Private"
  },
  {
    name: "Central Hospital",
    bnName: "সেন্ট্রাল হাসপাতাল",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Dhanmondi",
    contact: "02-9660015",
    location: "https://goo.gl/maps/CentralHospital",
    type: "Private"
  },
  {
    name: "Brahmanya Specialized Hospital",
    bnName: "ব্রাহ্মণ্য স্পেশালাইজড হাসপাতাল",
    division: "Chittagong",
    district: "Brahmanbaria",
    upazila: "Bbaria Sadar",
    contact: "01711-223344",
    location: "https://goo.gl/maps/BbariaPrivate",
    type: "Private"
  },
  {
    name: "Laksam General Hospital",
    bnName: "লাকসাম জেনারেল হাসপাতাল",
    division: "Chittagong",
    district: "Comilla",
    upazila: "Laksam",
    contact: "081-12345",
    location: "https://goo.gl/maps/LaksamGen",
    type: "Private"
  },
  {
    name: "TMSS Medical College Hospital",
    bnName: "টিএমএসএস মেডিকেল কলেজ হাসপাতাল",
    division: "Rajshahi",
    district: "Bogra",
    upazila: "Thengamara",
    contact: "051-65719",
    location: "https://goo.gl/maps/TMSSBogra",
    type: "Private"
  },
  {
    name: "Zia Heart Foundation",
    bnName: "জিয়া হার্ট ফাউন্ডেশন",
    division: "Rangpur",
    district: "Dinajpur",
    upazila: "Dinajpur Sadar",
    contact: "0531-65432",
    location: "https://goo.gl/maps/ZiaHeart",
    type: "Private"
  },
  {
    name: "CDI Hospital",
    bnName: "সিডিআই হাসপাতাল",
    division: "Khulna",
    district: "Jessore",
    upazila: "Jessore Sadar",
    contact: "0421-12345",
    location: "https://goo.gl/maps/CDIJessore",
    type: "Private"
  }
];

export const divisions = [...new Set(medicalData.map(h => h.division))];
export const getDistricts = (division: string) => [...new Set(medicalData.filter(h => h.division === division).map(h => h.district))];
export const getUpazilas = (district: string) => [...new Set(medicalData.filter(h => h.district === district).map(h => h.upazila))];

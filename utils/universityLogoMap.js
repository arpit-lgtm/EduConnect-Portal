// Complete University Logo Mapping
// Maps database university names to exact logo filenames

const universityLogoMap = {
  // IIMs - All present
  'IIM Ahmedabad': 'IIM Ahmedabad.png',
  'IIM Amritsar': 'IIM Amritsar.png',
  'IIM Bangalore': 'IIM Bangalore.png',
  'IIM Bodh Gaya': 'IIM Bodh Gaya.png',
  'IIM Calcutta': 'IIM Calcutta.png',
  'IIM Indore': 'IIM Indore.png',
  'IIM Jammu': 'IIM Jammu.png',
  'IIM Kashipur': 'IIM Kashipur.png',
  'IIM Kozhikode': 'IIM Kozhikode.png',
  'IIM Lucknow': 'IIM Lucknow.png',
  'IIM Mumbai': 'IIM Mumbai.png',
  'IIM Nagpur': 'IIM Nagpur.png',
  'IIM Raipur': 'IIM Raipur.png',
  'IIM Ranchi': 'IIM Ranchi.png',
  'IIM Rohtak': 'IIM Rohtak.png',
  'IIM Sambalpur': 'IIM Sambalpur.png',
  'IIM Shillong': 'IIM Shillong.png',
  'IIM Sirmaur': 'IIM Sirmaur.png',
  'IIM Trichy': 'IIM Trichy.png',
  'IIM Udaipur': 'IIM Udaipur.png',
  'IIM Visakhapatnam': 'IIM Visakhapatnam.png',

  // IITs - All present
  'IIT Bombay': 'IIT Bombay.png',
  'IIT Delhi': 'IIT Delhi.png',
  'IIT Guwahati': 'IIT Guwahati.png',
  'IIT Hyderabad': 'IIT Hyderabad.png',
  'IIT Jodhpur': 'IIT Jodhpur.png',
  'IIT Kanpur': 'IIT Kanpur.png',
  'IIT Kharagpur': 'IIT Kharagpur.png',
  'IIT Madras': 'IIT Madras.png',
  'IIT Roorkee': 'IIT Roorkee.png',
  'IIT Ropar': 'IIT Ropar.png',
  'IIT Varanasi': 'IIT Varanasi.png',

  // IIITs
  'IIIT Bangalore': 'IIIT Bangalore.png',
  'IIIT Dharwad': 'IIIT Dharwad.png',

  // IISc
  'Iisc Bangalore': 'Iisc Bangalore.png',
  'IISc Bangalore': 'Iisc Bangalore.png',

  // DY Patil - Multiple variations (Mumbai vs Pune)
  'D.Y. Patil University Navi Mumbai (Online)': 'DY Patil University Navi Mumbai.png',
  'D.Y. Patil University (Online)': 'DY Patil Vidyapeeth Pune.png', // This one is in Pune
  'DY Patil University': 'DY Patil University Mumbai.png',
  'DY Patil University Navi Mumbai': 'DY Patil University Navi Mumbai.png',
  'D.Y. Patil Vidyapeeth': 'DY Patil Vidyapeeth Pune.png',
  'DY Patil Vidyapeeth': 'DY Patil Vidyapeeth Pune.png',
  'DY Patil University Pune': 'DY Patil Vidyapeeth Pune.png',
  'DY Patil Pune': 'DY Patil Vidyapeeth Pune.png',

  // O P Jindal / JGU
  'O P Jindal Global University': 'O P Jindal University.png',
  'O P Jindal University': 'O P Jindal University.png',
  'Jgu (Online) Coursera': 'O P Jindal University.png',

  // DDU
  'DDU Deen Dayal Upadhyay Gorakhpur (Online)': 'Deen Dayal Upadhyay Gorakhpur.png',
  'Deen Dayal Upadhyay Gorakhpur': 'Deen Dayal Upadhyay Gorakhpur.png',

  // English And Foreign Languages
  'English And Foreign Languages University (Distance Education)': 'English And Foreign Languages Universit.png',
  'English and Foreign Languages University': 'English And Foreign Languages Universit.png',
  'EFLU': 'English And Foreign Languages Universit.png',

  // ESGCI
  'ESGCI - École Supérieure de Gestion et Commerce International': 'ESGCI School of Business.png',
  'ESGCI School of Business': 'ESGCI School of Business.png',
  'ESGCI': 'ESGCI School of Business.png',

  // Alagappa
  'Alagappa University (Distance Education)': 'Alagappa University.png',
  'Alagappa University': 'Alagappa University.png',

  // Aligarh Muslim University
  'Aligarh Muslim University (Online)': 'Aligarh Muslim University.png',
  'Aligarh Muslim University': 'Aligarh Muslim University.png',

  // Amity - All variations
  'Amity University (Distance Education)': 'Amity University.png',
  'Amity University (Online)': 'Amity University.png',
  'Amity University': 'Amity University.png',

  // Amrita
  'Amrita University (Online)': 'Amrita University.png',
  'Amrita University': 'Amrita University.png',

  // Andhra
  'Andhra University (Distance Education)': 'Andhra University.png',
  'Andhra University (Online)': 'Andhra University.png',
  'Andhra University': 'Andhra University.png',

  // Anna
  'Anna University (Distance Education)': 'Anna University.png',
  'Anna University': 'Anna University.png',

  // Annamalai
  'Annamalai (Distance Education)': 'Annamalai University.png',
  'Annamalai University': 'Annamalai University.png',

  // Anucde
  'Anucde Acharya Nagarjuna (Distance Education)': 'Anucde Acharya Nagarjuna University.png',
  'Anucde Acharya Nagarjuna University': 'Anucde Acharya Nagarjuna University.png',

  // Bharath
  'Bharath Institute of Higher Education and Research': 'Bharath Institute of Higher Education and Research.png',
  'BIHER (Bharath Institute)': 'Bharath Institute of Higher Education and Research.png',
  'BIHER': 'Bharath Institute of Higher Education and Research.png',

  // Bharathiar
  'Bharathiar University (Distance Education)': 'Bharathiar University.png',
  'Bharathiar University': 'Bharathiar University.png',

  // Bharathidasan
  'Bharathidasan University (Distance Education)': 'Bharathidasan University.png',
  'Bharathidasan University': 'Bharathidasan University.png',

  // Bimtech
  'Bimtech Greater Noida': 'BIMTECH University.png',
  'BIMTECH University': 'BIMTECH University.png',

  // Birchwood
  'Birchwood University': 'Birchwood University Online.png',
  'Birchwood University Online': 'Birchwood University Online.png',

  // BITS
  'BITS Pilani': 'BITS Pilani.png',

  // Chandigarh
  'Chandigarh University Distance': 'Chandigarh University.png',
  'Chandigarh University (Online)': 'Chandigarh University.png',
  'Chandigarh University': 'Chandigarh University.png',

  // Chaudhary Charan Singh
  'Chaudhary Charan Singh University (Online)': 'Chaudhary Charan Singh University.png',
  'Chaudhary Charan Singh University': 'Chaudhary Charan Singh University.png',

  // Chitkara
  'Chitkara University (Online)': 'Chitkara University.png',
  'Chitkara University': 'Chitkara University.png',

  // Deakin
  'Deakin University Melbourne': 'Deakin University.png',
  'Deakin University': 'Deakin University.png',

  // Dibrugarh
  'Dibrugarh University (Distance Education)': 'Dibrugarh University.png',
  'Dibrugarh University': 'Dibrugarh University.png',

  // Du Sol / Delhi University
  'Du Sol': 'University of Delhi.png',
  'University of Delhi': 'University of Delhi.png',

  // Duke
  'Duke University - Fuqua School of Business': 'Duke Corporate Education.png',

  // Durham
  'Durham University': 'Durham University.png',

  // Gitam
  'Gitam University (Distance Education)': 'Gitam University.png',
  'Gitam University': 'Gitam University.png',

  // Harvard
  'Harvard University (Online)': 'Harvard University.png',
  'Harvard University': 'Harvard University.png',

  // HPU
  'HPU Himachal Pradesh University (Distance Education)': 'Himachal Pradesh University.png',
  'Himachal Pradesh University': 'Himachal Pradesh University.png',

  // IGNOU
  'IGNOU': 'IGNOU.png',

  // Ideku Kerala
  'Ideku Kerala University (Distance Education)': 'Ideku Kerala University.png',
  'Ideku Kerala University': 'Ideku Kerala University.png',

  // IMT
  'Imt Center For Distance Learning': 'Imt Center For Distance Learning.png',
  'IMT Ghaziabad': 'IMT Ghaziabad.png',

  // Indian Management School
  'Indian Management School And Research Centre': 'Indian Management School And Research Centre.png',

  // Jain
  'Jain University (Distance Education)': 'Jain University.png',
  'Jain University (Online)': 'Jain University.png',
  'Jain University': 'Jain University.png',

  // Jamia Hamdard
  'Jamia Hamdard (Online)': 'Jamia Hamdard University.png',
  'Jamia Hamdard University': 'Jamia Hamdard University.png',

  // Jamia Millia Islamia
  'Jamia Millia Islamia (Distance Education)': 'Jamia Millia Islamia University.png',
  'Jamia Millia Islamia (Online)': 'Jamia Millia Islamia University.png',
  'Jamia Millia Islamia University (Online)': 'Jamia Millia Islamia University.png',
  'Jamia Millia Islamia University': 'Jamia Millia Islamia University.png',

  // Jammu
  'Jammu University (Distance Education)': 'Jammu University.png',
  'Jammu University': 'Jammu University.png',

  // JNU
  'Jnu Jawaharlal Nehru University Delhi': 'Jawaharlal Nehru University Delhi.png',
  'Jawaharlal Nehru University Delhi': 'Jawaharlal Nehru University Delhi.png',

  // Kakatiya
  'Kakatiya University (Distance Education)': 'Kakatiya University.png',
  'Kakatiya University': 'Kakatiya University.png',

  // Kalinga
  'Kalinga University Engineering': 'Kalinga University.png',
  'Kalinga University': 'Kalinga University.png',

  // Kalyani
  'Kalyani University (Distance Education)': 'Kalyani University.png',
  'Kalyani University': 'Kalyani University.png',

  // KIIT
  'KIIT University (Online)': 'KIIT University.png',
  'KIIT University': 'KIIT University.png',

  // Kurukshetra
  'Kuk Dde Kurukshetra University (Distance Education)': 'Kurukshetra University.png',
  'Kurukshetra University (Online)': 'Kurukshetra University.png',
  'Kurukshetra University': 'Kurukshetra University.png',

  // Kuvempu
  'Kuvempu University (Distance Education)': 'Kuvempu University.png',
  'Kuvempu University': 'Kuvempu University.png',

  // Liberty
  'Liberty University': 'Liberty University.png',

  // Lingayas
  'Lingayas Vidyapeeth': 'Lingaya\'s University.png',
  'Lingaya\'s University': 'Lingaya\'s University.png',

  // Liverpool
  'Liverpool John Moores University': 'Liverpool John Moores University.png',

  // LPU / Lovely Professional
  'Lovely Professional University (Distance Education)': 'Lovely Professional University.png',
  'Lovely Professional University (Online)': 'Lovely Professional University.png',
  'Lovely Professional University': 'Lovely Professional University.png',
  'LPU University': 'Lovely Professional University.png',

  // LIBA
  'Loyola Institute Of Business Administration': 'LIBA.png',

  // Lucknow
  'Lucknow University': 'Lucknow University.png',

  // Madras
  'Madras University (Distance Education)': 'Madras University.png',
  'Madras University': 'Madras University.png',

  // Maharishi Markandeshwar
  'Maharishi Markandeshwar University (Online)': 'Maharishi Markandeshwar University.png',
  'Maharishi Markandeshwar University': 'Maharishi Markandeshwar University.png',

  // Manipal
  'Manipal University': 'Manipal University.png',
  'Mahe Manipal': 'Mahe Manipal.png',

  // Manav Rachna
  'Manav Rachna University (Online)': 'Manav Racha University.png',
  'Manav Racha University': 'Manav Racha University.png',
  'Manav Rachna University': 'Manav Racha University.png',

  // Manonmaniam Sundaranar
  'Manonmaniam Sundaranar University (Distance Education)': 'Manonmaniam Sundaranar University.png',
  'Manonmaniam Sundaranar University': 'Manonmaniam Sundaranar University.png',

  // Maulana Azad
  'Manuu Maulana Azad National Urdu University Distance': 'Manuu Maulana Azad National Urdu University.png',
  'Manuu Maulana Azad National Urdu University': 'Manuu Maulana Azad National Urdu University.png',

  // Madurai Kamaraj
  'Mku Madurai Kamaraj University (Distance Education)': 'Madurai Kamaraj University.png',
  'Madurai Kamaraj University': 'Madurai Kamaraj University.png',

  // Mizoram
  'Mizoram University (Online)': 'Mizoram University.png',
  'Mizoram University': 'Mizoram University.png',

  // Mumbai
  'Mumbai University (Distance Education)': 'Mumbai University.png',
  'Mumbai University': 'Mumbai University.png',

  // Nalsar
  'Nalsar University Of Law (Distance Education)': 'Nalsar University Of Law.png',
  'Nalsar University Of Law': 'Nalsar University Of Law.png',

  // National University of Singapore
  'National University of Singapore Business School': 'National University of Singapore Business School.png',

  // NMIMS
  'NMIMS (Online)': 'NMIMS University.png',
  'NMIMS University': 'NMIMS University.png',

  // Osmania
  'Osmania University (Distance Education)': 'Osmania University.png',
  'Osmania University': 'Osmania University.png',

  // Oxford
  'Oxford Saïd Business School': 'Oxford Said Business School.png',

  // Parul
  'Parul University (Online)': 'Parul University.png',
  'Parul University': 'Parul University.png',

  // Periyar
  'Periyar University (Distance Education)': 'Periyar University.png',
  'Periyar University': 'Periyar University.png',

  // Pondicherry
  'Pudde Pondicherry University (Distance Education)': 'Pudde Pondicherry.png',
  'Pudde Pondicherry': 'Pudde Pondicherry.png',

  // Punjabi
  'Punjabi University (Distance Education)': 'Punjabi University.png',
  'Punjabi University': 'Punjabi University.png',

  // Purdue
  'Purdue University': 'Purdue University.png',

  // Rabindra Bharati
  'Rbudde Rabindra Bharati University (Distance Education)': 'Rabindra Bharati University.png',
  'Rabindra Bharati University': 'Rabindra Bharati University.png',

  // Rotman
  'Rotman School of Management': 'Rotman School of Management.png',

  // Sharda
  'Sharda University (Online)': 'Sharda University.png',
  'Sharda University': 'Sharda University.png',

  // Shivaji
  'Shivaji University (Distance Education)': 'Shivaji University.png',
  'Shivaji University': 'Shivaji University.png',

  // Shobhit
  'Shobhit University (Online)': 'Shobhit University.png',
  'Shobhit University': 'Shobhit University.png',

  // Sikkim Manipal
  'Sikkim Manipal University': 'Sikkim Manipal University.png',

  // SPMVV
  'SPMVV (Distance Education)': 'SPMVV University.png',
  'SPMVV University': 'SPMVV University.png',

  // SRM
  'SRM University (Online) Sikkim': 'SRM University.png',
  'SRM University': 'SRM University.png',

  // SSBM
  'SSBM Geneva - Swiss School of Business and Management': 'SSBM.png',

  // Subharti
  'Subharti University (Distance Education)': 'Subharti University.png',
  'Subharti University': 'Subharti University.png',

  // Suresh Gyan Vihar
  'Suresh Gyan Vihar (Distance Education)': 'Suresh Gryan Vihar University.png',
  'Sgvu Engineering': 'Suresh Gryan Vihar University.png',
  'Suresh Gryan Vihar University': 'Suresh Gryan Vihar University.png',

  // Sri Venkateswara
  'SVU DDE Sri Venkateswara (Distance Education)': 'SVU DDE Sri Venkateswara University.png',
  'Svu Gajraula Wilp': 'SVU DDE Sri Venkateswara University.png',
  'SVU DDE Sri Venkateswara University': 'SVU DDE Sri Venkateswara University.png',

  // Svyasa
  'Svyasa (Distance Education)': 'Svyasa University.png',
  'Svyasa University': 'Svyasa University.png',

  // Symbiosis
  'Symbiosis Distance Learning': 'Symbiosis SCDL.png',
  'Symbiosis SCDL': 'Symbiosis SCDL.png',

  // Calicut
  'University Of Calicut (Distance Education)': 'University Of Calicut.png',
  'University Of Calicut': 'University Of Calicut.png',

  // Dallas
  'University Of Dallas': 'University Of Dallas.png',

  // Hyderabad
  'University Of Hyderabad (Distance Education)': 'University Of Hyderabad.png',

  // Kashmir
  'University Of Kashmir (Distance Education)': 'University Of Kashmir.png',
  'University Of Kashmir': 'University Of Kashmir.png',

  // Michigan
  'University Of Michigan Flint': 'University Of Michigan Flint.png',

  // Mysore
  'Uom University Of Mysore (Distance Education)': 'University Of Mysore.png',
  'University Of Mysore': 'University Of Mysore.png',

  // South Florida
  'University Of South Florida': 'University Of South Florida.png',

  // UPES
  'UPES CCE Center For Continuing Education': 'UPES Online.png',
  'UPES Online': 'UPES Online.png',
  'UPES University': 'UPES Online.png',

  // Woolf / Upgrad
  'Upgrad College UK Woolf': 'Woolf University.png',
  'Woolf University': 'Woolf University.png',

  // Uttaranchal
  'Uttaranchal University (Online)': 'Uttaranchal University.png',
  'Uttaranchal University': 'Uttaranchal University.png',

  // Vignan
  'Vignan University (Online)': 'Vignan\'s University.png',
  'Vignan\'s University': 'Vignan\'s University.png',
  'Vignans University': 'Vignan\'s University.png',

  // VIT
  'VIT (Online)': 'VIT University.png',
  'VIT University': 'VIT University.png',

  // Walden
  'Walden University': 'Walden University.png',

  // Westcliff
  'Westcliff University': 'Westcliff University.png',

  // XIM
  'XIM University Bhubaneswar': 'XIM University Bhubaneswar.png',

  // Other universities
  'Atlas Skilltech University': 'Atlas Skilltech University.png',
  'Cornell University': 'Cornell University.png',
  'Edgewood University': 'Edgewood University.png',
  'Galgotia University': 'Galgotia University.png',
  'Galgotias University': 'Galgotia University.png', // Database has "Galgotias" but logo is "Galgotia"
  'Galgotias University Online': 'Galgotia University.png',
  'Galgotias Online': 'Galgotia University.png',
  'GIM': 'GIM.png',
  'GLA University': 'GLA University.png',
  'Golden Gate University': 'Golden Gate University.png',
  'GGU': 'Golden Gate University.png',
  'Graphic Era University': 'Graphic Era University.png',
  'Guru Kashi University': 'Guru Kashi University.png',
  'Harappa School of Leadership': 'Harappa School of Leadership.png',
  'K J Somaiya Institute': 'K J Somaiya Institute.png',
  'MICA': 'MICA.png',
  'Michigan State University': 'Michigan State University.png',
  'MIT University': 'MIT University.png',
  'MIT School of Distance Education Pune': 'MIT University.png',
  'Mody University': 'Mody University.png',
  'Paris School of Business': 'Paris School of Business.png',
  'Presidency University': 'Presidency University.png',
  'Queen Margaret University': 'Queen Margaret University.png',
  'Rushford Business School': 'Rushford Business School.png',
  'S.P. Jain Institute': 'S.P. Jain Institute.png',
  'Sanskriti University Engineering': 'Sanskriti University Engineering.png',
  'Shoolini University': 'Shoolini University.png',
  'Shri Venkateshwara University': 'Shri Venkateshwara University.png',
  'Indian Statistical Institute': 'Indian Statistical Institute.png',
  'The Wharton School': 'The Wharton School.png',
  'University of Applied Management': 'University of Applied Management.png',
  'University of Maryland': 'University of Maryland.png',
  'University of Toledo': 'University of Toledo.png',
  'Vivekananda Global University': 'Vivekananda Global University.png',
  
  // German Universities
  'Technical University of Munich (TUM)': 'technical-university-of-munich.png',
  'Heidelberg University': 'heidelberg-university.png',
  'Humboldt University of Berlin': 'humboldt-university-of-berlin.png',
  'RWTH Aachen University': 'rwth-aachen-university.png',
  'Ludwig Maximilian University of Munich (LMU)': 'ludwig-maximilian-university-of-munich.png',
  'Free University of Berlin': 'free-university-of-berlin.png',
  'Karlsruhe Institute of Technology (KIT)': 'karlsruhe-institute-of-technology.png',
  'Technical University of Berlin (TU Berlin)': 'technical-university-of-berlin.png'
};

// Helper function to get university logo with fuzzy matching
// Returns the FULL PATH to the logo image
function getUniversityLogo(universityName) {
  let logoFilename = null;

  // Direct match
  if (universityLogoMap[universityName]) {
    logoFilename = universityLogoMap[universityName];
    return `/images/universities/${logoFilename}`;
  }

  // Try to find partial match (case-insensitive)
  const nameToMatch = universityName.toLowerCase();
  for (const [key, value] of Object.entries(universityLogoMap)) {
    if (key.toLowerCase() === nameToMatch) {
      return `/images/universities/${value}`;
    }
  }

  // Remove common suffixes like (Online), (Distance Education), etc.
  const cleanName = universityName
    .replace(/\s*\(Online\)\s*/gi, '')
    .replace(/\s*\(Distance Education\)\s*/gi, '')
    .replace(/\s*\(Distance\)\s*/gi, '')
    .replace(/\s*\(Deemed\)\s*/gi, '')
    .replace(/\s*\(Deemed University\)\s*/gi, '')
    .trim();

  // Try cleaned name in the map
  if (universityLogoMap[cleanName]) {
    return `/images/universities/${universityLogoMap[cleanName]}`;
  }

  // Try partial match with cleaned name
  const cleanNameLower = cleanName.toLowerCase();
  for (const [key, value] of Object.entries(universityLogoMap)) {
    if (key.toLowerCase() === cleanNameLower) {
      return `/images/universities/${value}`;
    }
  }

  // Fuzzy match: normalize keys and cleaned name (remove punctuation, extra spaces)
  const normalizeForMatch = (s) => s.toLowerCase().replace(/[\W_]+/g, ' ').replace(/\s+/g, ' ').trim();
  const cleanNormalized = normalizeForMatch(cleanName);
  for (const [key, value] of Object.entries(universityLogoMap)) {
    const keyNormalized = normalizeForMatch(key);
    if (keyNormalized === cleanNormalized || keyNormalized.includes(cleanNormalized) || cleanNormalized.includes(keyNormalized)) {
      return `/images/universities/${value}`;
    }
  }

  // Fallback to cleaned filename
  return `/images/universities/${cleanName}.png`;
}

module.exports = universityLogoMap;
module.exports.getUniversityLogo = getUniversityLogo;
module.exports.universityLogoMap = universityLogoMap;

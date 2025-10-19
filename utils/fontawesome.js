import { library } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { 
    faFacebookF, 
    faInstagram, 
    faLinkedinIn, 
    faYoutube, 
    faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import {
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

// Tell Font Awesome to skip adding the CSS automatically since it's already imported above
config.autoAddCss = false;

// Add icons to the library for use across the application
library.add(
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faYoutube,
    faWhatsapp,
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt,
    faPaperPlane
);
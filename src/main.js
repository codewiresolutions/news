import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationDot,faPuzzlePiece,faClock} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope,faPhone,faHeart,faPen,faDrawPolygon,faPalette,faStar} from '@fortawesome/free-solid-svg-icons';
import { faUtensils,faLemon,faPenRuler,faBook,faArrowRotateLeft,faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faFlickr } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker,faFan} from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faLocationDot,faEnvelope,faPhone,faFacebook,faTwitter,faFlickr,faPuzzlePiece,faClock);
library.add(faHeart,faPen,faDrawPolygon,faPalette,faStar,faUtensils,faLemon);
library.add(faPenRuler,faBook,faArrowRotateLeft,faCoffee,faMapMarker,faFan,faFacebookF);
library.add(faQuoteLeft);
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')

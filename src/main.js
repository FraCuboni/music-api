import { createApp } from 'vue'
import App from './App.vue'
// Router
import router from '../router'
// Sass
import './style.scss'
// FontAwesome
import '@fortawesome/fontawesome-free/css/all.css'
// Font
import '@fontsource/inter'


createApp(App).use(router).mount('#app')
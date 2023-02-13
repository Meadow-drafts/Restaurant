import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './css/style.css'
import mitt from 'mitt';
const emitter = mitt();


const app = createApp(App)
app.use(router)
app.mount('#app')
app.config.globalProperties.emitter = emitter;

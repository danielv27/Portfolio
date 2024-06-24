import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Buefy from 'buefy'


const app = createApp(App)
// @ts-expect-error
app.use(Buefy)
app.mount('#app')
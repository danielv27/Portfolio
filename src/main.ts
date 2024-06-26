import { createApp } from 'vue'
import {MotionPlugin} from '@vueuse/motion'
import VNetworkGraph from "v-network-graph"
import './style.css'
import App from './App.vue'
const app = createApp(App)
app.use(MotionPlugin);
app.use(VNetworkGraph)
app.mount('#app')
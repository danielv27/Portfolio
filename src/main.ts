import {createApp} from 'vue'
import {MotionPlugin} from '@vueuse/motion'
import VNetworkGraph from "v-network-graph"
import './style.css'
import App from './App.vue'
import {OhVueIcon, addIcons} from "oh-vue-icons";
import * as SimpleIcons from "oh-vue-icons/icons/si";
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'; // optional for styling

const app = createApp(App)

const Si = Object.values({ ...SimpleIcons });
addIcons(...Si);

app.component('VIcon', OhVueIcon)
app.use(VueTippy);
app.use(MotionPlugin);
app.use(VNetworkGraph)

app.mount('#app')
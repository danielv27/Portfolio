import {createApp} from 'vue'
import {MotionPlugin} from '@vueuse/motion'
import VNetworkGraph from "v-network-graph"
import './style.css'
import App from './App.vue'
import {OhVueIcon, addIcons} from "oh-vue-icons";
import * as SI from "oh-vue-icons/icons/si";
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'; // optional for styling

const app = createApp(App)

addIcons(
    SI.SiGithub,
    SI.SiLinkedin,
    SI.SiVuedotjs,
    SI.SiReact,
    SI.SiTypescript,
    SI.SiTailwindcss,
    SI.SiFlutter,
    SI.SiDocker,
    SI.SiLinux,
    SI.SiAmazonaws,
    SI.SiLaravel,
    SI.SiDjango,
    SI.SiFirebase,
    SI.SiExpress,
    SI.SiVite,
    SI.SiWebpack,
    SI.SiTestinglibrary,
);

app.component('VIcon', OhVueIcon)
app.use(VueTippy);
app.use(MotionPlugin);
app.use(VNetworkGraph)

app.mount('#app')
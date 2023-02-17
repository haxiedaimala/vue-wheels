import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import GIcon from './components/GIcon.vue';

const app = createApp(App);
app.component('g-icon', GIcon);
app.mount('#app');

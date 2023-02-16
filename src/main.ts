import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import Icon from './components/Icon.vue';

const app = createApp(App);
app.component('g-icon', Icon);
app.mount('#app');

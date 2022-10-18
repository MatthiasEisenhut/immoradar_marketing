import { createApp } from 'vue';
import Vue3SmoothScroll from 'vue3-smooth-scroll';

import App from './App.vue';

import './assets/style.css';

const app = createApp(App);

app.use(Vue3SmoothScroll, {
  updateHistory: false,
  duration: 200,
});

app.mount('#app');

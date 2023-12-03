// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import BootstrapVueNext from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App);

// Set up Axios
app.config.globalProperties.$axios = axios.create({
  baseURL: 'http://localhost:8000', // Update with your Laravel API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

app.use(router);

app.use(BootstrapVueNext);
// app.use(IconsPlugin);


app.mount('#app');

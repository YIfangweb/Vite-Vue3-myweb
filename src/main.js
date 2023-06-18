import { createApp } from 'vue'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import router from './router'
import { inject } from '@vercel/analytics';
 

inject();

const app = createApp(App);


app.use(router);
app.use(Vue3Lottie);

app.mount('#app');

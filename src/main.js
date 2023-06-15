import { createApp } from 'vue'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import router from './router'

const app = createApp(App);


app.use(router);
app.use(Vue3Lottie);


app.mount('#app');

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import regPrimeVue from './vendor/primevue.js';
import i18n from './i18n.js';

import '@/assets/fonts/roboto/roboto.css';
import '@/styles/main.scss';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@/assets/css/materialdesignicons.min.css';

(async function () {
    const app = createApp(App);
    app.use(createPinia());

    app.use(router);
    app.use(await i18n());
    regPrimeVue(app);
    app.mount('#app');
})();

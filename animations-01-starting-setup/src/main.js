import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import router from './router.js';

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

//prevents the animation from playing on first load/refresh of page
router.isReady().then(() => {
  app.mount('#app');
});

// app.mount('#app');

import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

//global components, means all gets loaded , which could bog down loading time
app.component('base-badge', BaseBadge);

app.mount('#app');

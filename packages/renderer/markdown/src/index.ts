import { createApp } from "vue";

import App from '/MK/App.vue';

console.log('%cindex.ts line:5 App', 'color: #007acc;', createApp);

createApp(App).mount('#app')
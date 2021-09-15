import { createApp } from 'vue';
import App from '@/App.vue';
// import router from '/@/router';
import { ipcRenderer } from 'electron';

createApp(App)
  // .use(router)
  .mount('#app');
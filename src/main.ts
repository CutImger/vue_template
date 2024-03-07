import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'amfe-flexible';
import router from './router'; 

// 引入文件
import './style.css';
import App from './App';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');

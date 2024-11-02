import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
createApp(App).use(router).mount('#app');
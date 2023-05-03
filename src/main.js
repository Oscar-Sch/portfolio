import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router'

const app=createApp(App);
app.use(router);
app.config.unwrapInjectedRef = true
app.mount("#app")
// createApp(App).use(router).mount('#app')

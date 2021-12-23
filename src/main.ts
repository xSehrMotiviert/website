import { createApp } from 'vue'
// My ide said there's some weird error but it compiles so im just ignoring it
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

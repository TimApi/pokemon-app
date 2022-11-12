import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  piniaPluginPersistedstate from "pinia-plugin-persistedstate"

import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




import App from './App.vue'
import router from './router'

import "../src/assets/scss/main.scss";



const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.mount('#app')



import "bootstrap/dist/js/bootstrap.js"

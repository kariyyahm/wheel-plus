import "./lib/wheel.scss";
import "./index.scss";
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Router from './router'
// import './lib/svg.js'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'

const app = createApp(App)
app.use(Router)
app.mount('#app')
app.component("Markdown", Markdown)





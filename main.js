import App from './App'
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import setupI18n from './locale/index'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  setupI18n(app)
  return {
    app,
	Pinia
  }
}

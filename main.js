import App from './App'
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  return {
    app,
	Pinia
  }
}

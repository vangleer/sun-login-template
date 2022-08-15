// 国际化 json 文件，文件内容详见下面的示例
import { createI18n } from 'vue-i18n'
import en from './en.json'
import zh from './zh.json'
const messages = {
	en,
	'zh': zh
}
let i18nConfig = {
  locale: uni.getLocale() || 'zh', // 获取已设置的语言
  messages
}
export const i18n = createI18n(i18nConfig)

export function changeLocale(locale) {
	i18n.global.locale = locale
}

export const t = (key) => i18n.global.t(key)

export default function setupI18n(app) {
	app.use(i18n)
}
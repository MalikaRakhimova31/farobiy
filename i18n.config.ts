import uz from './locales/uz'
import en from './locales/en'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'uz',
  messages: {
    uz,
    en
  }
}))


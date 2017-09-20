import { types } from 'mobx-state-tree';

const LanguageStore = types
  .model('LanguageStore', {
    language: types.optional(types.string, 'en')
  })
  .views(self => ({
    get currentLanguage() {
      return self.language;
    },
    get resource() {
      switch (self.language) {
        case 'en':
          return {
            hello: 'Hi!'
          };
        case 'es':
          return {
            hello: '¡Hola!'
          };
        default:
          return {
            hello: 'Hi!'
          };
      }
    }
  }))
  .actions(self => ({
    changeLanguageTo(language) {
      self.language = language;
    }
  }));

// Singleton exports
const languageStore = LanguageStore.create({ language: 'en' });

// Exports
export default languageStore;

import { Translations } from '@emartech/angular-translate';
const translations = require('./default-translations.json');

export class TranslationFactory {
    static getTranslations(): Translations {
        return translations;
    }
}

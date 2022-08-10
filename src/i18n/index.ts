import i18next from 'i18next';
import en from './translations/en-us/translations.json';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	resources: {
		en
	}
});

export default i18next;

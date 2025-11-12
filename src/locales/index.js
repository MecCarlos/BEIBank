// src/locales/index.js
import en from './en/common.json';
import fr from './fr/common.json';
import es from './es/common.json';
import pt from './pt/common.json';
import nl from './nl/common.json';
import it from './it/common.json';
import de from './de/common.json';

export const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  pt: { translation: pt },
  nl: { translation: nl },
  it: { translation: it },
  de: { translation: de }
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];
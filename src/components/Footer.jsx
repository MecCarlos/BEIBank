import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "../components/style/Footer.css"; 
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// Liste des langues depuis votre configuration
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

function Footer() {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'fr');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
    };

    return (
        <>
            <section className="footer-container">
                {/* Partie supérieure : Logo + Langues */}
                <div className="footer-top">
                    <div className="footer-logo">
                        BEI
                    </div>
                    <div className="language-switcher">
                        {languages.map((lang) => (
                            <button 
                                key={lang.code}
                                className={`language-btn ${currentLanguage === lang.code ? 'active' : ''}`}
                                onClick={() => changeLanguage(lang.code)}
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Partie médiane : Liens légaux + Réseaux sociaux */}
                <div className="footer-middle">
                    <div className="legal-links">
                        <a href="/avis-legal">{t('legalNotice')}</a>
                        <a href="/cookies">{t('cookies')}</a>
                        <a href="/donnees-personnelles">{t('personalData')}</a>
                        <a href="/conditions-utilisation">{t('termsOfUse')}</a>
                        <a href="/confidentialite">{t('privacy')}</a>
                    </div>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>

                {/* Partie inférieure : Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} BEI. {t('allRightsReserved')}</p>
                </div>
            </section> 
        </>
    );
}

export default Footer;
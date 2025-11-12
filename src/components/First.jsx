import React from 'react';
import { useTranslation } from 'react-i18next';
import user from "../assets/image/user.jpg"; 
import "../components/style/First.css"; 
import { MdOutlineContentCopy } from "react-icons/md";
import RippleButton from './RippleButton.jsx';



function First() {
    const { t, i18n } = useTranslation();
    
    return (
        // Conteneur principal de la section
        <section className="first-container">    
            {/* Colonne de gauche : Texte et Boutons */}
            <article className="first-content">
                {/* Petit Titre / Label */}
                <h4 className="first-h4">
                    {t('first_h4')}
                </h4>

                {/* Titre principal */}
                <h1 className="first-h1">
                    {t('first_h1')}
                </h1>

                {/* Paragraphe descriptif */}
                <p className="first-p">
                    {t('first_p_part1')}
                    <span className="text-highlight"> {t('first_p_highlight')}</span>
                    <br />
                    {t('first_p_part2')}
                </p>

                {/* Zone des codes et infos */}
                <div className="first-promo"> 
                    <div className="promo-item">
                        <MdOutlineContentCopy className="promo-icon" />
                        <p className="promo-code">{t('first_promo_copy')}</p>
                    </div>
                    <div className="promo-item">
                        <p className="promo-info">{t('first_promo_info')}</p>
                    </div>
                </div>

                <div className="first-cta-buttons"> 
                    {/* Bouton Primaire */}
                    <RippleButton className="cta-primary">
                        {t('first_cta_primary')}
                    </RippleButton>
                    {/* Bouton Secondaire */}
                    <RippleButton className="cta-secondary">
                        {t('first_cta_secondary')}
                    </RippleButton>
                </div>
            </article>

            {/* Colonne de droite : Image */}
            <aside className="first-image-wrapper">
                <img src={user} alt={t('image_alt_user')} className="first-img" /> 
                {/* J'ai ajouté une clé de traduction pour le texte alternatif de l'image */}
            </aside>
            
        </section>
    );
}

export default First;
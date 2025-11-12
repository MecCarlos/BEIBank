import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import "../components/style/femme.css"; 
import joy from "../assets/image/femme.png"; 
import RippleButton from './RippleButton';
import { GiWorld } from "react-icons/gi";
import { IoMdWifi } from "react-icons/io";
import { SiSpringsecurity } from "react-icons/si";

function Femme() {
    const { t, i18n } = useTranslation();
 
    return (
        <>
            <section className="femme-container">
                
                {/* Bloc Contenu */}
                <div className="femme-content"> 
                    <div className="content-wrapper">
                        <h1>Si vous êtes jeune, vous avez encore plus d'avantages</h1>

                        <p>
                            Avec votre <span>Compte Jeune</span>, vous recevez la carte de débit <strong>Aqua Máxima</strong>, sans frais partout dans le monde et sans limite de dépenses. De plus, vous bénéficiez d'une connexion internet mobile illimitée grâce à l'<span>eSIM Holafly</span> et <span>de nombreux autres avantages exclusifs</span>.
                        </p>
                        
                        <RippleButton className="cta-primary-femme">
                            <i className="ri-user-add-line me-2"></i>
                            Devenez client BEI
                        </RippleButton>
                    </div>
                </div>


                {/* Bloc Image avec overlay dégradé */}
                <div className="femme-image-container">
                    <img src={joy} alt="Jeunes bénéficiant des avantages BEI" />
                    <div className="image-overlay"></div>
                </div> 
                

            </section> 
        </>
    );
}

export default Femme;
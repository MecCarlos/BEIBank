import React from 'react';
import { useTranslation } from 'react-i18next';
import "../components/style/Ado.css"; 
import joy from "../assets/image/joy1.png"; 
import RippleButton from './RippleButton';
import { GiWorld } from "react-icons/gi";
import { IoMdWifi } from "react-icons/io";
import { SiSpringsecurity } from "react-icons/si";

function Ado() {
    const { t, i18n } = useTranslation();
 
    return (
        <>
            <section className="Ado-container">
                
                {/* Bloc Image avec overlay dégradé */}
                <div className="Ado-image-container">
                    <img src={joy} alt="Jeunes bénéficiant des avantages BEI" />
                    <div className="Ado-image-overlay"></div>
                </div> 
                
                {/* Bloc Contenu */}
                <div className="Ado-content"> 
                    <div className="Ado-content-wrapper">
                        <h1>Si vous êtes jeune, vous avez encore plus d'avantages</h1>

                        <p>
                            Avec votre <span>Compte Jeune</span>, vous recevez la carte de débit <strong>Aqua Máxima</strong>, sans frais partout dans le monde et sans limite de dépenses. De plus, vous bénéficiez d'une connexion internet mobile illimitée grâce à l'<span>eSIM Holafly</span> et <span>de nombreux autres avantages exclusifs</span>.
                        </p>
                        
                        <div className="Ado-features-grid">
                            <div className="Ado-feature-item">
                                <GiWorld />
                                <span>Sans frais à l'international</span>
                            </div>
                            <div className="Ado-feature-item">
                                <IoMdWifi />
                                <span>Internet mobile illimité</span>
                            </div>
                            <div className="Ado-feature-item">
                                <SiSpringsecurity />
                                <span>Sécurité garantie</span>
                            </div>
                        </div>

                        <RippleButton className="cta-primary-Ado">
                            Devenez client BEI
                        </RippleButton>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Ado;
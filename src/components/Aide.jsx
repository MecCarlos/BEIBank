import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImArrowUpRight2 } from "react-icons/im";
import { FaMobileAlt, FaUsers, FaLightbulb } from "react-icons/fa";
// Import du CSS
import "../components/style/Aide.css"; 

function Aide() {
    const { t, i18n } = useTranslation();
    
    // Définition des données - 3 cartes seulement
    const cards = [
        { 
            icon: <FaMobileAlt />,
            title: "Bureaux et logiciels automatiques", 
            desc: "Gérez facilement vos finances et accédez à des services bancaires avancés.",
            stitle: "Toujour près de vous",
        },
        { 
            icon: <FaUsers />,
            title: "Centre d'aide", 
            desc: "Obtenez des réponses rapides à vos questions grâce à notre API dédiée aux entreprises.",
            stitle: "Support 24/7",
        },
        { 
            icon: <FaLightbulb />,
            title: "Une aide urgente est necessaire.", 
            desc: "Accédez à des ressources et des conseils pour lancer et développer votre entreprise.",
            stitle: "Conseils d'experts",
        },
    ];
    
    return (
        <section className="aide-container">
            {/* Zone de Titre */}
            <header className="aide-header">
                <h1 className="aide-main-title">
                    Pouvons-nous vous <span className="title-accent">aider</span> ?
                </h1>
                <div className="title-decoration"></div>
            </header>

            {/* Conteneur des 3 cartes */}
            <div className="aide-cards-grid">
                {cards.map((card, index) => (
                    <div key={index} className="aide-card">
                        {/* Icône en haut avec fond */}
                        <div className="card-icon-top">
                            <div className="icon-circle">
                                {card.icon}
                            </div>
                        </div>
                        
                        {/* Contenu */}
                        <div className='card-content'>
                            <div className="card-header">
                                <h3>{card.title}</h3>
                            </div>
                            
                            <div className="card-description">
                                <p>{card.desc}</p>
                            </div>
                            
                            <div className="card-footer">
                                <div className="stitle-container">
                                    <span className="stitle-badge">{card.stitle}</span>
                                </div>
                                <button className="aide-btn">
                                    <span>En savoir plus</span>
                                    <div className="btn-arrow">
                                        <ImArrowUpRight2 />
                                    </div>
                                </button>
                            </div>
                        </div>
                        
                        {/* Effets de bordure */}
                        <div className="card-border"></div>
                        <div className="card-shine"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Aide;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMobileAlt, FaUsers, FaLightbulb } from "react-icons/fa";
// Import du CSS
import "../components/style/outil.css"; 

function Outil() {
    const { t, i18n } = useTranslation();
    
    // Définition des données - 3 cartes seulement
    const cards = [
        { 
            icon: <FaMobileAlt />,
            title: "Gérez les opérations quotidiennes de votre entreprise depuis votre appareil mobile.", 
            desc: "Avec des informations et un suivi en temps réel de vos ventes.",
            stitle: "BBVA Mon Entreprise",
        },
        { 
            icon: <FaUsers />,
            title: "Améliorez l'expérience de vos clients et fournisseurs", 
            desc: "Des solutions financières innovantes pour dynamiser davantage votre entreprise.",
            stitle: "API pour les entreprises",
        },
        { 
            icon: <FaLightbulb />,
            title: "Donnez vie à toutes vos idées et à tous vos projets.", 
            desc: "Démarrez vos projets étape par étape avec toutes les informations nécessaires.",
            stitle: "Guide de l'entrepreneuriat",
        },
    ];
    
    return (
        <section className="outil-section">
            {/* Zone de Titre */}
            <header className="outil-header">
                <h1 className="outil-main-title">
                    Avec tous les <span className="outil-title-highlight">outils</span> à votre disposition
                </h1>
                <p className="outil-subtitle">
                    Découvrez nos solutions complètes pour optimiser la gestion de votre entreprise
                </p>
            </header>

            {/* Conteneur des 3 cartes */}
            <div className="outil-cards-grid">
                {cards.map((card, index) => (
                    <div key={index} className="outil-card">
                        {/* Titre en haut */}
                        <div className="outil-card-header">
                            <h4>{card.title}</h4>
                        </div>
                        
                        {/* Icône au centre */}
                        <div className="outil-card-icon-center">
                            <div className="outil-icon-wrapper">
                                {card.icon}
                            </div>
                        </div>
                        
                        {/* Contenu en bas */}
                        <div className='outil-text-zone'>
                            <div className="outil-content-main">
                                <p>{card.desc}</p>
                            </div>
                            
                            <div className="outil-card-footer">
                                <span className="outil-stitle">{card.stitle}</span>
                            </div>
                        </div>
                        
                        <div className="outil-card-hover-effect"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Outil;
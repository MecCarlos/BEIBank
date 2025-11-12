import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImArrowUpRight2 } from "react-icons/im";
// Import des images
import i1 from "../assets/image/i1.jpg"; 
import i2 from "../assets/image/i2.jpg"; 
import i3 from "../assets/image/i5.jpg"; 
// Import du CSS
import "../components/style/Carousel3.css"; 

function Carousel3() {
    const { t, i18n } = useTranslation();
    
    // Définition des données - 3 cartes seulement
    const cards = [
        { 
            img: i1, 
            title: "Cela commence sans effort", 
            desc: "Accélez votre croissance grace à des décisions basées sur des données concrètes.",
            gradient: "linear-gradient(135deg, #000080 0%, #4169E1 100%)"
        },
        { 
            img: i2, 
            title: "Effectuer des paiements avec simplicité", 
            desc: "Gagner en visibilité pour prendre les meilleures décisions d'achat ou de vente.",
            gradient: "linear-gradient(135deg, #000080 0%, #6A5ACD 100%)"
        },
        { 
            img: i3, 
            title: "Envoyer et recevez de l'argent instantanément", 
            desc: "Gestion des transactions, vente et facturation dans un seul outil.",
            gradient: "linear-gradient(135deg, #000080 0%, #483D8B 100%)"
        },
    ];
    
    return (
        <section className="carousel3-container">
            {/* Zone de Titre */}
            <header className="carousel3-header">
                <p className="carousel3-h3">
                    C'est bien dans le style de la BEI de vous faciliter la vie.
                </p>
                <p className="carousel3-h5">
                    La <span className="carousel3-text-highlight">Banque Économie Internationale</span>, pour des activités visant à accélérer votre croissance.
                </p>
            </header>

            {/* Conteneur des 3 cartes */}
            <div className="carousel3-cards-grid">
                {cards.map((card, index) => (
                    <div key={index} className="carousel3-promo-card">
                        <div className="carousel3-card-image-container">
                            <img src={card.img} alt={card.title} className="carousel3-card-image"/>
                            <div 
                                className="carousel3-card-overlay"
                                style={{ background: card.gradient }}
                            ></div>
                        </div>
                        <div className='carousel3-text-zone'>
                            <h4>{card.title}</h4>
                            <p>{card.desc}</p>
                            <button className="carousel3-discover-btn">
                                Découvrez cette formule 
                                <ImArrowUpRight2 className='carousel3-fleche'/>
                            </button>
                        </div>
                        <div className="carousel3-card-hover-effect"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Carousel3;
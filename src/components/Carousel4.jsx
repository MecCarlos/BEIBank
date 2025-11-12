import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImArrowUpRight2 } from "react-icons/im";
import "../components/style/Carousel4.css";
// Import des images
import i1 from "../assets/image/i1.jpg"; 
import i2 from "../assets/image/i2.jpg"; 
import i3 from "../assets/image/i5.jpg"; 
import i4 from "../assets/image/i6.jpg";
// Import du CSS
import "../components/style/Carousel4.css"; 

function Carousel4() {
    const { t, i18n } = useTranslation();
    
    // Définition des données - 4 cartes comme dans Carousel3
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
        { 
            img: i4, 
            title: "Regler vos factures en sécurité", 
            desc: "Simplifiez vos opérations de trésorerie et vos paiements quotidiens.",
            gradient: "linear-gradient(135deg, #000080 0%, #4B0082 100%)"
        },
    ];
    
    return (
        <section className="carousel4-container">
            {/* Zone de Titre */}
            <header className="carousel4-header">
                <p className="carousel4-h3">
                    C'est bien dans le style de la BEI de vous faciliter la vie.
                </p>
                <p className="carousel4-h5">
                    La <span className="carousel4-text-highlight">Banque Économie Internationale</span>, pour des activités visant à accélérer votre croissance.
                </p>
            </header>

            {/* Conteneur des 4 cartes */}
            <div className="carousel4-cards-grid">
                {cards.map((card, index) => (
                    <div key={index} className="carousel4-promo-card">
                        <div className="carousel4-card-image-container">
                            <img src={card.img} alt={card.title} className="carousel4-card-image"/>
                            <div 
                                className="carousel4-card-overlay"
                                style={{ background: card.gradient }}
                            ></div>
                        </div>
                        <div className='carousel4-text-zone'>
                            <h4>{card.title}</h4>
                            <p>{card.desc}</p>
                            <button className="carousel4-discover-btn">
                                Découvrez cette formule 
                                <ImArrowUpRight2 className='carousel4-fleche'/>
                            </button>
                        </div>
                        <div className="carousel4-card-hover-effect"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Carousel4;
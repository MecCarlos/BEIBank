import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    FaExchangeAlt,
    FaBolt,
    FaCreditCard,
    FaHome, 
    FaChartPie,
    FaRegLifeRing
} from 'react-icons/fa';
import RippleButton from './RippleButton';
import "../components/style/Blue.css"; 

// Définition des données des services
const servicesData = [
    { 
        title: "Changer de banque", 
        description: "Transférez facilement vos comptes chez nous. Profitez de notre service de mobilité bancaire pour une transition douce, gérée de A à Z par nos équipes, sans frais ni paperasse inutile.", 
        icon: FaExchangeAlt 
    },
    { 
        title: "Un prêt en ligne rapide", 
        description: "Obtenez un financement express pour vos projets personnels ou professionnels. Demande 100% en ligne, réponse de principe en moins de 24 heures et fonds disponibles rapidement.", 
        icon: FaBolt 
    },
    { 
        title: "Une carte de débit ou de crédit", 
        description: "Choisissez la carte adaptée à votre usage : carte de débit standard pour le quotidien ou carte de crédit Gold avec assurances voyages et plafonds ajustables pour plus de liberté.", 
        icon: FaCreditCard 
    },
    { 
        title: "Trouver une maison", 
        description: "Accédez à nos prêts hypothécaires compétitifs. Nos experts en crédit immobilier vous accompagnent pour définir votre capacité d'emprunt et sécuriser le financement de votre future propriété.", 
        icon: FaHome 
    },
    { 
        title: "Crédit d'épargne et investissement", 
        description: "Optimisez votre capital grâce à des solutions d'épargne fiscalement avantageuses et diversifiez vos placements sur les marchés financiers avec l'aide de nos conseillers dédiés.", 
        icon: FaChartPie 
    },
    { 
        title: "Assurance", 
        description: "Protégez votre patrimoine et votre famille. Nous vous proposons une gamme complète d'assurances (auto, habitation, santé, vie) avec des garanties complètes et des primes ajustées à vos besoins.", 
        icon: FaRegLifeRing 
    },
];

function Blue() {
    const { t, i18n } = useTranslation();
 
    return (
        <>
            <section className="blue-container">
                {/* Zone de Titre */}
                <header className="blue-header">
                    <p className="blue-h3">
                        Que pouvons-nous faire pour vous ?
                    </p>
                    <p className="blue-h5">
                        La <span className="blue-text-highlight">Banque Économie Internationale</span>, pour des activités visant à accélérer votre croissance.
                    </p>
                </header>

                {/* Conteneur des services (2 lignes de 3) */}
                <div className="blue-services-grid">
                    {servicesData.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div key={index} className="blue-service-card">
                                <div className="blue-service-header">
                                    <h4 className="blue-service-title">{service.title}</h4>
                                    <IconComponent className="blue-service-icon" />
                                </div>
                                <p className="blue-service-description">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section> 
            
            <div className="blue-cta-final">
                <h3>Ouvrez un compte en ligne sans frais avec 730€ la première année</h3>
                <div className="blue-cta-buttons"> 
                    <RippleButton className="cta-primary">
                        Devenez client BEI
                    </RippleButton>
                    <RippleButton className="cta-secondary">
                        Consulter votre compte en ligne
                    </RippleButton>
                </div>
            </div>
        </>
    );
}

export default Blue;
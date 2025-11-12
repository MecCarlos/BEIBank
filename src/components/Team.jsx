import React from 'react';
import { useTranslation } from 'react-i18next';
import "../components/style/team.css"; 
import { CgTimer } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";
import { BsCalculator } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import work from "../assets/image/team1.jpg";

function Team() {
    const { t, i18n } = useTranslation();
 
    return (
        <>
            <section className="team-container">
                <h3>À vos côtés, dès le début</h3>
                <div className="team-content"> 
                    {/* Colonne gauche */}
                    <div className='img-box left'>
                        <div className='feature-card'>
                            <CgTimer className="feature-icon" />
                            <h4>Ayez accès à des liquidités lorsque vous en avez le plus besoin.</h4>
                            <p>
                                Financez vos paiements les plus fréquents, tenez vos comptes à jour ou recevez un paiement anticipé sur vos factures.
                            </p>
                            <p className="product-tag left">Produits de financement</p>
                        </div>

                        <div className='feature-card'>
                            <GiWallet className="feature-icon" />
                            <h4>Proposez à vos clients la possibilité de payer avec Bizum.</h4>
                            <p>
                                Rapide et sans carte, vous pouvez recevoir des <span>paiements sécurisés et illimités</span>, quelle que soit la taille de votre entreprise.
                            </p>
                            <p className="product-tag left">Produits de financement</p>
                        </div>
                    </div>
                    
                    {/* Image centrale */}
                    <div className="center-img">
                        <img src={work} alt="Travail d'équipe" />
                    </div>

                    {/* Colonne droite */}
                    <div className='img-box right'>
                        <div className='feature-card'>
                            <BsCalculator className="feature-icon" />
                            <h4>Encaisser les paiements dans votre entreprise ou où que vous soyez.</h4>
                            <p>
                                Quel que soit votre secteur d'activité, vos clients pourront <span>payer facilement</span>, en plusieurs fois ou en devises étrangères si nécessaire.
                            </p>
                            <p className="product-tag">Produits de financement</p>
                        </div>

                        <div className='feature-card'>
                            <IoPhonePortraitOutline className="feature-icon" />
                            <h4>Gérez toutes vos tâches avec votre téléphone portable</h4>
                            <p>
                                De n'importe où et via l'application, vous pouvez consulter, effectuer et signer vos transactions.                            
                            </p>
                            <p className="product-tag">Application mobile</p>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Team;
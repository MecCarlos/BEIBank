import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImArrowUpRight2 } from "react-icons/im";
// Import du CSS
import "../components/style/Liens.css"; 

function Liens() {
    const { t, i18n } = useTranslation();
    

    return (
        <section className="liens-container">
            <div className="liens-content">
                <div className="lien-column">
                    <h4 className="column-title">BEI Plus</h4>
                    <ul className="links-list">
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Prêts aux entreprises</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Financement de projets</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Infrastructures durables</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="lien-column">
                    <h4 className="column-title">Le dernier</h4>
                    <ul className="links-list">
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les mineurs</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les jeunes</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les séniors</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les groupes</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Sécurité</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Podcast</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Santé financière</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="lien-column">
                    <h4 className="column-title">Calculatrices et simulateurs</h4>
                    <ul className="links-list">
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les mineurs</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les jeunes</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les séniors</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les groupes</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Sécurité</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Podcast</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Santé financière</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div className="lien-column">
                    <h4 className="column-title">Services public</h4>
                    <ul className="links-list">
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les mineurs</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les jeunes</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les séniors</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>BEI pour les groupes</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Sécurité</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Podcast</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                        <li className="link-item">
                            <a href="#" className="link">
                                <span>Santé financière</span>
                                <ImArrowUpRight2 className="link-arrow" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Liens;
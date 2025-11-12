import React from 'react';
import { useTranslation } from 'react-i18next';
import "../components/style/Groupe.css"; 
import { FaUserGroup } from "react-icons/fa6";
import groupe from "../assets/image/groupe2.png";

function Groupe() {
    const { t, i18n } = useTranslation();
 
    return (
        <>
            <section className="groupe-container">
                <div className="groupe-content"> 
                    <div className='icon-box'>
                        <img src={groupe} alt="Équipe dédiée" />
                    </div>
                    <div className="content-wrapper">
                        <h3>À vos côtés, dès le début</h3>
                        <p>
                            Dès le premier instant,  <span>vous disposerez d'un gestionnaire et d'une équipe spécialisée dédiés à vous et à votre entreprise </span>,  pour vous accompagner et répondre à toutes vos questions.
                        </p>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Groupe;
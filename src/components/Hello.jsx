import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import video from "../assets/videos/bs.webm"
import Topbar from "./Topbar"; 
import "./style/Hello.css";

// --- NOUVEAU COMPOSANT POUR LE TEXTE ANIMÉ ---
const TextAnimator = ({ texts }) => {
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150;
    const deletingSpeed = 80;
    const pauseTime = 1500;

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[index];
            const updatedText = isDeleting
                ? fullText.substring(0, currentText.length - 1)
                : fullText.substring(0, currentText.length + 1);

            setCurrentText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, index, texts]);

    return (
        <span className="rotating-text">{currentText}</span>
    );
};
// ---------------------------------------------


function Hello() {
    const { t } = useTranslation();
    
    // Les mots à animer, par exemple :
    const rotatingTexts = [
        t('l\'innovation'),
        t('le climat'),
        t('les PME'),
        t('l\'avenir'),
        t('la croissance')
    ];

    return (
        <div className="hero-container">
            {/* 1. Vidéo en fond et Dégradé */}
            <video className="background-video" src={video} autoPlay loop muted playsInline />
            <div className="video-overlay"></div>

            <Topbar /> 

            <div className="hero-content">
                <div className="animation-box">
                    {/* <h1 className="main-title">{t('BEI')}</h1>  */}
                    <h1 className="subtitle">
                        {t('votre partenaire pour')} <TextAnimator texts={rotatingTexts} />
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Hello;
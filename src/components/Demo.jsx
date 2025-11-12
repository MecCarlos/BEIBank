import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import "../components/style/demo.css"; 
import RippleButton from './RippleButton';
import demo1 from "../assets/image/phone.png";
import demo2 from "../assets/image/phone2.png";
import demo3 from "../assets/image/phone.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Demo() {
    const { t, i18n } = useTranslation();
    
    const [activeSlide, setActiveSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            title: "Avec quelqu'un pour vous guider",
            subtitle: "Mode discret",
            description: "Blue est notre assistant IA et il est disponible pour vous aider, dans tous vos besoins, à tout moment et tous les jours",
            image: demo1,
            buttonText: "Devenez client BEI",
            secondaryButtonText: "Consulter votre compte en ligne"
        },
        {
            id: 2,
            title: "Gestion intelligente de vos finances",
            subtitle: "Analytique avancée",
            description: "Notre IA analyse vos habitudes de dépenses et vous propose des recommandations personnalisées pour optimiser votre budget",
            image: demo2,
            buttonText: "Découvrir l'analytique",
            secondaryButtonText: "Voir mes statistiques"
        },
        {
            id: 3,
            title: "Sécurité renforcée 24h/24",
            subtitle: "Protection IA",
            description: "Notre système de sécurité intelligent détecte et prévient les activités suspectes en temps réel pour protéger votre compte",
            image: demo3,
            buttonText: "Activer la protection",
            secondaryButtonText: "En savoir plus"
        }
    ];

    const intervalRef = useRef(null);

    const nextSlide = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 5000);
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [nextSlide]);

    const resetAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(nextSlide, 5000);
    };

    return (
        <section className="demo-container">
            <div className="demo-carousel-wrapper">
                {/* Slides */}
                <div className="demo-slides-container">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`demo-slide ${index === activeSlide ? 'demo-active' : ''} ${
                                index < activeSlide ? 'demo-prev' : index > activeSlide ? 'demo-next' : ''
                            }`}
                        >
                            <div className="demo-slide-content">
                                <div className="demo-text-content">
                                    <h6>{slide.subtitle}</h6>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    
                                    <div className="demo-cta-buttons"> 
                                        <RippleButton className="demo-cta-primary">
                                            {slide.buttonText}
                                        </RippleButton>
                                        <RippleButton className="demo-cta-secondary">
                                            {slide.secondaryButtonText}
                                        </RippleButton>
                                    </div>
                                </div>
                                
                                <div className="demo-image-content">
                                    <img src={slide.image} alt={slide.title} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contrôles de navigation */}
                <div className="demo-carousel-controls">
                    <button 
                        className="demo-control-btn demo-prev-btn" 
                        onClick={() => { prevSlide(); resetAutoPlay(); }}
                        aria-label="Slide précédent"
                    >
                        <IoIosArrowBack />
                    </button>
                    
                    <button 
                        className="demo-control-btn demo-next-btn" 
                        onClick={() => { nextSlide(); resetAutoPlay(); }}
                        aria-label="Slide suivant"
                    >
                        <IoIosArrowForward />
                    </button>
                </div>

                {/* Indicateurs de slide */}
                <div className="demo-slide-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`demo-indicator ${index === activeSlide ? 'demo-active' : ''}`}
                            onClick={() => { goToSlide(index); resetAutoPlay(); }}
                            aria-label={`Aller au slide ${index + 1}`}
                        >
                            <div className="demo-indicator-progress"></div>
                        </button>
                    ))}
                </div>

                {/* Compteur de slides */}
                <div className="demo-slide-counter">
                    <span className="demo-current-slide">{activeSlide + 1}</span>
                    <span className="demo-divider">/</span>
                    <span className="demo-total-slides">{slides.length}</span>
                </div>
            </div>
        </section> 
    );
}

export default Demo;
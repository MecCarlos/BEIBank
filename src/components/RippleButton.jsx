// // Fichier: ./RippleButton.jsx

// import React, { useState } from 'react';

// // 🚨 DÉCLARATION DU COMPOSANT FONCTIONNEL
// const RippleButton = ({ children, className, ...props }) => {
    
//     // Le hook d'état doit être à l'intérieur du composant
//     const [rippleStyle, setRippleStyle] = useState({});

//     const handleMouseEnter = (event) => {
//         const button = event.currentTarget;
//         const rect = button.getBoundingClientRect();
        
//         // Calcul de la position de départ (centre du survol)
//         const size = Math.max(rect.width, rect.height) * 2;
//         const x = event.clientX - rect.left - size / 2;
//         const y = event.clientY - rect.top - size / 2;
        
//         // Mise à jour du style pour déclencher l'expansion
//         setRippleStyle({
//             top: y,
//             left: x,
//             width: size,
//             height: size,
//             transform: 'scale(1)',
//             opacity: 1,
//             transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
//         });
//     };

//     const handleMouseLeave = () => {
//         // Déclenche la "rétractation"
//         setRippleStyle(prev => ({
//             ...prev,
//             transform: 'scale(0)', 
//             opacity: 0,
//             transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
//         }));
//     };

//     return (
//         <button 
//             className={`cta-btn ${className}`} 
//             onMouseEnter={handleMouseEnter} 
//             onMouseLeave={handleMouseLeave}
//             {...props}
//         >
//             <span
//                 className="cta-ripple-fill"
//                 style={rippleStyle}
//             />
            
//             <span className="cta-content-wrapper">
//                  {children}
//             </span>
//         </button>
//     );
// };


// export default RippleButton;




// Fichier: ./RippleButton.jsx
import React, { useState } from 'react';

const RippleButton = ({ children, className, ...props }) => {
    const [rippleStyle, setRippleStyle] = useState({});
    const [isHovered, setIsHovered] = useState(false);

    const createRipple = (event, isEntering) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        
        // Calcul de la position depuis le point de souris
        const size = Math.max(rect.width, rect.height) * 2;
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        setRippleStyle({
            top: y,
            left: x,
            width: size,
            height: size,
            transform: isEntering ? 'scale(1)' : 'scale(0)',
            opacity: isEntering ? 1 : 0,
            transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
        });
    };

    const handleMouseEnter = (event) => {
        setIsHovered(true);
        createRipple(event, true);
    };

    const handleMouseLeave = (event) => {
        setIsHovered(false);
        createRipple(event, false);
    };

    return (
        <button 
            className={`cta-btn ${className}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <span
                className="cta-ripple-fill"
                style={rippleStyle}
            />
            
            <span className="cta-content-wrapper">
                 {children}
            </span>
        </button>
    );
};

export default RippleButton;
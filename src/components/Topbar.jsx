import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo.png";
import "../components/style/Topbar.css";

function Topbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const menuRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

  const languages = [
    { code: "fr", flag: "https://flagcdn.com/fr.svg", name: "Français" },
    { code: "en", flag: "https://flagcdn.com/gb.svg", name: "English" },
    { code: "es", flag: "https://flagcdn.com/es.svg", name: "Español" },
    { code: "de", flag: "https://flagcdn.com/de.svg", name: "Deutsch" },
    { code: "it", flag: "https://flagcdn.com/it.svg", name: "Italiano" },
    { code: "nl", flag: "https://flagcdn.com/nl.svg", name: "Nederlands" },
    { code: "pt", flag: "https://flagcdn.com/pt.svg", name: "Português" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Fonction pour vérifier si un lien est actif
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Fermer les menus en cliquant dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`topbar ${isScrolled ? "topbar-scrolled" : ""}`}>
        {/* Logo + Menu */}
        <div className="topbar-left">
          <Link to="/" className="topbar-logo-link">
            <img src={logo} className="logo" alt="OXBank Logo" />
          </Link>
          <nav className="topbar-nav">
            <Link
              to="/"
              className={`nav-link ${
                isActiveLink("/") ? "nav-link-active" : ""
              }`}
            >
              {t("home")}
            </Link>
            <Link
              to="/services"
              className={`nav-link ${
                isActiveLink("/services") ? "nav-link-active" : ""
              }`}
            >
              {t("services")}
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                isActiveLink("/about") ? "nav-link-active" : ""
              }`}
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                isActiveLink("/contact") ? "nav-link-active" : ""
              }`}
            >
              {t("contact")}
            </Link>
          </nav>
        </div>

        {/* Partie droite */}
        <div className="topbar-right">
          {/* Sélecteur de langue */}
          <div className="language-selector" ref={languageRef}>
            <button
              className="language-btn"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <img src={currentLanguage.flag} alt="" className="flag" />
              <span className="language-code">
                {currentLanguage.code.toUpperCase()}
              </span>
            </button>

            {isLanguageOpen && (
              <div className="language-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className="language-option"
                  >
                    <img src={lang.flag} alt="" className="flag" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bouton Login mobile */}
          <Link to="/login" className="login-btn-responsive">
            {t("login")}
          </Link>

          {/* Boutons connexion desktop */}
          <div className="auth-buttons">
            <Link to="/login" className="login-btn ls_btn">
              {t("login")}
            </Link>
            <Link to="/signup" className="signup-btn ls_btn">
              {t("signup")}
            </Link>
          </div>

          {/* Menu hamburger mobile */}
          <button className="hamburger" onClick={() => setIsMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Menu mobile slide from right */}
        <div
          ref={menuRef}
          className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}
        >
          <div className="mobile-menu-header">
            <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
              ×
            </button>
          </div>

          <nav className="mobile-nav">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`mobile-nav-link ${
                isActiveLink("/") ? "mobile-nav-link-active" : ""
              }`}
            >
              {t("home")}
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`mobile-nav-link ${
                isActiveLink("/services") ? "mobile-nav-link-active" : ""
              }`}
            >
              {t("services")}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`mobile-nav-link ${
                isActiveLink("/about") ? "mobile-nav-link-active" : ""
              }`}
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`mobile-nav-link ${
                isActiveLink("/contact") ? "mobile-nav-link-active" : ""
              }`}
            >
              {t("contact")}
            </Link>

            <div className="nav-separator"></div>

            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-nav-link"
            >
              {t("login")}
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-nav-link mobile-nav-signup"
            >
              {t("signup")}
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Topbar;

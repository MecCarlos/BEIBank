import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../components/style/Login.css";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

function Login() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire:", formData);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          {/* En-tête */}
          <div className="login-header">
            <h2 className="login-title">{t("login.title", "Connexion")}</h2>
            <p className="login-subtitle">
              {t("login.subtitle", "Accédez à votre compte BEI")}
            </p>
          </div>

          {/* Connexion sociale */}
          <div className="login-social">
            <button type="button" className="login-social-btn login-google-btn">
              <FaGoogle className="login-social-icon" />
            </button>
            <button type="button" className="login-social-btn login-apple-btn">
              <FaApple className="login-social-icon" />
            </button>
          </div>

          {/* Champ email */}
          <div className="login-form-group">
            <label htmlFor="email" className="login-form-label">
              {t("login.email", "Adresse email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("login.emailPlaceholder", "votre@email.com")}
              className="login-form-input"
              required
            />
          </div>

          {/* Champ mot de passe */}
          <div className="login-form-group">
            <div className="login-password-header">
              <label htmlFor="password" className="login-form-label">
                {t("login.password", "Mot de passe")}
              </label>
              <Link to="/forgot-password" className="login-forgot-password">
                {t("login.forgotPassword", "Mot de passe oublié ?")}
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t("login.passwordPlaceholder", "Votre mot de passe")}
              className="login-form-input"
              required
            />
          </div>

          {/* Options */}
          <div className="login-form-options">
            <label className="login-checkbox-container">
              <input type="checkbox" className="login-checkbox" />
              <span className="login-checkmark"></span>
              {t("login.rememberMe", "Se souvenir de moi")}
            </label>
          </div>

          {/* Bouton de connexion */}
          <button type="submit" className="login-submit-btn">
            {t("login.signIn", "Se connecter")}
          </button>
        </form>

        {/* Pied de page */}
        <div className="login-footer">
          <p className="login-signup-text">
            {t("login.noAccount", "Vous n'avez pas de compte ?")}{" "}
            <Link to="/signup" className="login-signup-link">
              {t("login.createAccount", "Créer un compte")}
            </Link>
          </p>
          <Link to="/">
            <FaArrowLeftLong className="login-back-icon" />
        </Link>
        </div>
      </div>

    </div>
  );
}

export default Login;
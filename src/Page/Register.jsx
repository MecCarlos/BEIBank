import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

function Register() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{}}>
      <h2>Login</h2>
      {/* 
          Identité et Contact :

Nom(s) et prénom(s).

Date et lieu de naissance.

Nationalité.

Adresse e-mail et numéro de téléphone portable.

Adresse postale complète de résidence (avec preuve de résidence).

Situation Personnelle :

Situation familiale (célibataire, marié, etc.).

Nombre d'enfants à charge (parfois).

Situation Professionnelle et Fiscale :

Statut professionnel (salarié, indépendant, retraité, étudiant, etc.).

Nom et adresse de l'employeur (pour les salariés).

Revenus annuels (ou fourchette de revenus).

Pays de résidence fiscale. */}
    </div>
  );
}

export default Register;

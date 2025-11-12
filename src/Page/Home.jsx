import React from 'react';
import { useTranslation } from 'react-i18next';
import Hello from '../components/Hello';
import Section1 from '../components/First';
import Section8 from '../components/Groupe';
import Outil from '../components/Outils';
import Aide from '../components/Aide';
import Liens from '../components/Liens';
import Carousel4 from '../components/Carousel4';
import Blue from '../components/Blue';
import Ado from '../components/Ado';
import Demo from '../components/Demo';
import Femme from '../components/Femme';
import Carousel3 from '../components/Carousel3';
import Team from '../components/Team';
import Footer from '../components/Footer';
import video from "../assets/videos/bs.webm"



function Home() {
    const { t, i18n } = useTranslation();
    
    return (
        <div style={{}}>
          <Hello/>

          {/* <video src={video} autoPlay controls="loop" style={{width: "100%"}}/> */}
          
          <Section1/>

          <Carousel4/>

          <Blue/>

          <Ado />

          <Demo/>

          <Carousel3 />

          <Femme />

          <Team />

          <Section8 />

          <Outil/>

          <Aide/>

          <Liens/>

          <Footer/>


        </div>
    );
}

export default Home; 
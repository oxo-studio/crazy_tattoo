import './App.css';

import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Testimonials from './components/testimonials';
import SezioneFinale from './components/sezionefinale';
import Footer from './components/footer';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import Seo from './components/seo/Seo.jsx';
import SplashScreen from './components/SlashScreen.jsx'; // ✅ Importa SplashScreen

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['it', 'en', 'fr'],
    fallbackLng: "it",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
  });

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    i18n.changeLanguage('it');

    // Tempo di durata dello splash (già incluso nello SplashScreen)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Seo />
      <NavBar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
      <SezioneFinale />
      <Footer />
    </>
  );
}

export default App;

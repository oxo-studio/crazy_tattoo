import './App.css';
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

i18n
  .use(initReactI18next) // Passa i18n a React
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
      loadPath: 'assets/locales/{{lng}}/translation.json', // Assicurati che i file siano in public/locales/
    },
  });

function App() {
  return (
    <>
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

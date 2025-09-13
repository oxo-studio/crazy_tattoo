
import NavBar from "../components/navbar";

import emailjs from "@emailjs/browser";
import Sezionefinale from '../components/sezionefinale';
import Footer from '../components/footer';


import { useTranslation, } from "react-i18next";
import gsap from "gsap";

import "leaflet/dist/leaflet.css";
import Mappa from '../components/Mappa'
import { useEffect, useRef } from "react";



function Contatti() {

  const {t} = useTranslation();

  const sectionRef = useRef(null)
  const sectionRefDue = useRef(null)
  const contattiUno = useRef([])
  const contattiUnoPunto = useRef([])
  const contattiDue = useRef([])
  const contattiTre = useRef([])
  const contattiQuatro = useRef([])

    const splitText = (text, ref) => {
    ref.current = []; // Pulisce il ref prima di riempirlo
    return text.split('').map((char, i) => (
      <span
        key={i}
        ref={(el) => (ref.current[i] = el)}
        className="inline-block whitespace-nowrap"
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(()=>{
   
     const animateLetters = (letters, delay = 0) => {
      gsap.fromTo(
        letters,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };
     const animateLetters2 = (letters, delay = 0) => {
      gsap.fromTo(
        letters,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRefDue.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    animateLetters(contattiUno.current)
    animateLetters(contattiUnoPunto.current,0.2)
    animateLetters(contattiDue.current,0.4)
    animateLetters2(contattiTre.current)
    animateLetters2(contattiQuatro.current)
  },[])


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_d1kjc8f",
      "template_w8cuqnl",
      e.target,
      "UruDroFqgckgp1flO"
    )
    .then(
      (result) => {
        console.log("Email inviata con successo!", result.text);
        alert("Email inviata con successo!");
      },
      (error) => {
        console.error("Errore nell'invio dell'email:", error);
        alert(`Errore nell'invio dell'email: ${error.text || error.message}`);
      }
    );

  };


  

  return (
    <>
      <NavBar />
      
      <Mappa/>
     

      {/* Form Richiedi Appuntamento */}
      <div  className="w-full max-w-5xl mx-auto p-6 rounded-md shadow-md -mt-[-80px]">
        <form onSubmit={sendEmail}>
          <div className="space-y-12">
            <div className="border-b border-red-600 pb-12" ref={sectionRef}>
              <h2 className="text-white climate-crisis text-2xl  md:text-4xl lg:text-5xl mb-1 text-center">
             {splitText(t("contatti_1"),contattiUno)}
              </h2>
              <h2 className="text-white climate-crisis text-2xl  md:text-4xl lg:text-5xl mb-6 text-center">
             {splitText(t("contatti_1.5"),contattiUnoPunto)}
              </h2>
              <p className="mt-1 text-white courgette-regular text-2xl ml-[20px] md:text-3xl lg:text-4xl text-center">
                {splitText(t("contatti_2"),contattiDue)}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                {/* Nome */}
                <div className="sm:col-span-3">
                  <label htmlFor="nome" className="block text-sm font-medium text-white courgette-regular">
    
                {t("contatti_3")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Inserisci il tuo nome"
                      required
                    />
                  </div>
                </div>

                {/* Cognome */}
                <div className="sm:col-span-3">
                  <label htmlFor="cognome" className="block text-sm font-medium text-white courgette-regular">
                    {t("contatti_4")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="cognome"
                      name="cognome"
                      type="text"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Inserisci il tuo cognome"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-white courgette-regular">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Inserisci la tua email"
                      required
                    />
                  </div>
                </div>

                {/* telefono */}
                <div className="sm:col-span-3">
                  <label htmlFor="telefono" className="block text-sm font-medium text-white courgette-regular">
                  {t("contatti_5")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="telefono"
                      name="telefono"
                      type="text"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Inserisci il tuo telefono"
                      required
                    />
                  </div>
                </div>
               

                {/* Messaggio */}
                <div className="sm:col-span-6">
                  <label htmlFor="messaggio" className="block text-sm font-medium text-white courgette-regular">
                    {t("contatti_6")}
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows="5"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Scrivi qui il tuo messaggio..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Checkbox Privacy */}
                <div className="sm:col-span-6">
                  <div className="flex items-start">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      required
                    />
                    <label htmlFor="privacy" className="ml-3 text-sm text-white courgette-regular">
                      {t("contatti_7")} <a href="http://localhost:5174/privacy" className="underline">policy privacy</a>.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
             {t("contatti_8")}
            </button>
          </div>
        </form>
      </div>

      {/* Form Lavora con Noi */}
      <div className="w-full max-w-4xl mx-auto p-6 rounded-md shadow-md mt-20 mb-12">
        <form onSubmit={sendEmail}>
          <div className="space-y-12">
            <div className="border-b border-red-600 pb-12" ref={sectionRefDue}>
              <h2 className="text-white climate-crisis text-2xl md:text-4xl lg:text-5xl mb-6 text-center">
              {splitText(t("contatti_9"),contattiTre)}
              </h2>
              <p className="mt-1 text-white courgette-regular text-2xl md:text-3xl lg:text-4xl text-center">
               {splitText(t("contatti_10"),contattiQuatro)}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                {/* Nome */}
                <div className="sm:col-span-3">
                  <label htmlFor="nome" className="block text-sm font-medium text-white courgette-regular">
                    {t("contatti_3")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Inserisci il tuo nome"
                      required
                    />
                  </div>
                </div>

                {/* Cognome */}
                <div className="sm:col-span-3">
                  <label htmlFor="cognome" className="block text-sm font-medium text-white courgette-regular">
                    {t("contatti_4")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="cognome"
                      name="cognome"
                      type="text"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Inserisci il tuo cognome"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-white courgette-regular">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Inserisci la tua email"
                      required
                    />
                  </div>
                </div>

                {/* telefono */}
                <div className="sm:col-span-3">
                  <label htmlFor="telefono" className="block text-sm font-medium text-white courgette-regular">
                 {t("contatti_5")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="telefono"
                      name="telefono"
                      type="text"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Inserisci il tuo telefono"
                      required
                    />
                  </div>
                </div>

                {/* text area*/}
                <div className="sm:col-span-6">
                  <label htmlFor="messaggio" className="block text-sm font-medium text-white courgette-regular">
                   {t("contatti_6")}
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows="5"
                      className="block w-full rounded-md bg-white text-black shadow-sm placeholder-gray-600"
                      placeholder="Scrivi qui il tuo messaggio..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <div className="flex items-start">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      required
                    />
                    <label htmlFor="privacy" className="ml-3 text-sm text-white courgette-regular">
                     {t("contatti_7")} <a href="http://localhost:5174/privacy" className="underline">policy privacy</a>.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
             {t("contatti_8")}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-60 ">
        <Sezionefinale />
      </div>

      <Footer></Footer>
    </>
  );
}

export default Contatti;


import React, { useEffect, useRef } from 'react';
import NavBar from "../components/navbar";

import emailjs from "@emailjs/browser";
import Sezionefinale from '../components/sezionefinale';
import Footer from '../components/footer';

import i18n, { use } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import "leaflet/dist/leaflet.css";
import Mappa from '../components/Mappa'



function Contatti() {

  const {t} = useTranslation();

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
      <div  className="w-full max-w-4xl mx-auto p-6 rounded-md shadow-md -mt-[-80px]">
        <form onSubmit={sendEmail}>
          <div className="space-y-12">
            <div className="border-b border-red-600 pb-12">
              <h2 className="text-white climate-crisis text-2xl md:text-4xl lg:text-5xl mb-6 text-center">
             {t("contatti_1")}
              </h2>
              <p className="mt-1 text-white courgette-regular text-2xl md:text-3xl lg:text-4xl text-center">
                {t("contatti_2")}
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
            <div className="border-b border-red-600 pb-12">
              <h2 className="text-white climate-crisis text-2xl md:text-4xl lg:text-5xl mb-6 text-center">
              {t("contatti_9")}
              </h2>
              <p className="mt-1 text-white courgette-regular text-2xl md:text-3xl lg:text-4xl text-center">
               {t("contatti_10")}
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

import React from "react";
import './sezionefinale.css'

import i18n, { use } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

function SezioneFinale() {
   
    const {t} = useTranslation();

    return (
        <div className="w-full -mt-24 mb-20">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-6 relative items-start">
                {/* Contattaci */}
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-10 h-10 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <h2 className="text-3xl text-white lg:text-4xl md:text-3xl sm:text-2xl climate-crisis mb-4">{t("contattaci")}</h2>
                    <p className="courgette-regular text-2xl lg:text-2xl md:text-3xl sm:text-2xl">3791022541</p>
                </div>

                {/* Linee Responsivo */}
                <div className="hidden md:block absolute top-[20%] bottom-[20%] left-1/3 border-l-2 border-red-500"></div>
                <div className="block md:hidden border-t-2 border-red-500 w-3/5 mx-auto my-2"></div>

                {/* Orari */}
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-10 h-10 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h2 className="text-3xl text-white lg:text-4xl md:text-3xl sm:text-2xl climate-crisis mb-4">{t("orari")}</h2>
                    <p className="courgette-regular text-2xl lg:text-2xl md:text-3xl sm:text-2xl">Lun-Sab 12.00 - 18.00</p>
                    <p className="text-sm courgette-regular">Orari variabili su appuntamento</p>
                </div>

                {/* Linee Responsivo */}
                <div className="hidden md:block absolute top-[20%] bottom-[20%] left-2/3 border-l-2 border-red-500"></div>
                <div className="block md:hidden border-t-2 border-red-500 w-3/5 mx-auto my-2"></div>

                {/* Dove siamo */}
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-white w-10 h-10 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <h2 className="text-3xl text-white lg:text-4xl md:text-3xl sm:text-2xl climate-crisis mb-4">{t("dove")}</h2>
                    <p className="courgette-regular text-2xl lg:text-2xl md:text-3xl sm:text-2xl">Via Briniani 8, Brugnato SP</p>
                </div>
            </div>
        </div>
    );
}

export default SezioneFinale;

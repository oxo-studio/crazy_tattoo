import {useEffect} from "react";
import NavBar from "../components/navbar";
import ArteImg from '../img/arte.jpg';
import Footer from '../components/footer'


import { useTranslation,  } from "react-i18next";



function Privacy() {

    const {t} = useTranslation();

    useEffect(()=>{
        window.scrollTo(0,0);
    })

    return (
        <>
            <NavBar />
            <div className="w-full flex flex-col items-center justify-start">
                <div className="relative w-full">
                    <img 
                        src={ArteImg} 
                        alt="Arte" 
                        className="w-full h-auto max-h-[650px] object-cover" 
                    />
                    {/* Testo sovrapposto */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl climate-crisis text-center px-4 py-2 rounded-md ombre">
                            Privacy & Policy
                        </h1>
                    </div>
                </div>
            </div>

        <div className="flex flex-col p-28 courgette-regular text-2xl">
            <p>{t("policy_1")}</p>
            <h2 className="mt-5 text-2xl climate-crisis">{t("policy_2")}</h2>
            <p className="mt-2">{t("policy_3")}</p>
            <h2 className="mt-5 text-2xl climate-crisis">{t("policy_4")}</h2>
            <p className="mt-2">{t("policy_5")}</p>
            <h1 className="mt-5 text-3xl climate-crisis">{t("policy_6")}</h1>
            <p className="mt-3"> {t("policy_7")}
                   <a className="underline" href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop?redirectslug=Attivare+e+disattivare+i+cookie&redirectlocale=it">Mozilla Firefox</a> ,
                   <a className="underline" href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"> Apple Safari</a> ,
                   <a className="underline" href="https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies">Google Chrome</a>  , 
                   <a className="underline" href="https://support.microsoft.com/it-it/windows/gestire-i-cookie-in-microsoft-edge-visualizzare-consentire-bloccare-eliminare-e-usare-168dab11-0753-043d-7c16-ede5947fc64d"> Microsoft Explorer</a> .</p>
             <p className="mt-7">{t("policy_8")}</p>
             <p className="mt-7">{t("policy_9")} <a className="underline" href="https://www.youronlinechoices.com/">Your Online Choices</a>.{t("policy_10")}</p>
             <h1 className="climate-crisis mt-8 text-3xl">{t("policy_11")}</h1>
              <p className="mt-7">Crazy n'Tina Tattoo</p>
              <p className="mt-2">Via Briniati 8, Brugnato(SP)</p>
              <p className="mt-2">Tel. - 3791022541</p>
              <p className="mt-2">Cod.Fis./ P.Iva - 01571420114 </p>
              <p className="mt-2"> Email -  crazyandtinatattoo@gmail.com</p>
              <p className="mt-7">{t("policy_12")}</p>
               <p className="mt-7">{t("policy_13")}</p>

        </div>

        <Footer></Footer>

        </>
    );
}

export default Privacy;


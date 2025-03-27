import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Immagine2 from '../img/immagine2.jpg';
import Immagine1 from '../img/immagine1.jpeg';
import { useTranslation } from "react-i18next";

// Registra ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

function Section3() {
    const { t } = useTranslation();

    useEffect(() => {
        // Controlla se la larghezza dello schermo è maggiore di 768px
      {
            // Effetto parallasse per l'immagine
            gsap.to(".paralax-image2", {
                y: 200,
                ease: "none",
                scrollTrigger: {
                    trigger: ".image2-container",
                    start: "top bottom",
                    scrub: true,
                    end: "bottom top",
                }
            });

            // Effetto parallasse per il testo
            gsap.to(".paralax-test2", {
                y: -1300,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section2-content",
                    start: "top bottom",
                    scrub: true,
                    end: "bottom top",
                }
            });

            // Animazione delle immagini con entrata (simile a Section1)
            gsap.fromTo(
                ".paralax-image2",
                { opacity: 0, scale: 0.8 }, // Stato iniziale
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".image2-container",
                        start: "top 80%", // Inizia l'animazione quando l'immagine entra nel viewport
                        toggleActions: "play none none none",
                        scrub: true,
                    },
                }
            );

            // Animazione del testo senza stagger
            gsap.fromTo(
                ".paralax-test2 h2, .paralax-test2 p",
                { y: 100, opacity: 0 }, // Stato iniziale
                {
                    y: 0, // Posizione finale
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        start: "top 50%", // L'animazione inizia prima, appena metà della sezione è visibile
                        toggleActions: "play none none none",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div className="section mb-10">
            <div className="section2-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-24">
                {/* Container delle immagini */}
                <div className="image2-container relative flex justify-center items-center gap-6 flex-wrap pb-8">
                    <img 
                        src={Immagine1} 
                        alt="Immagine Crazy Rana" 
                        className="paralax-image2 background-image2 shadow-lg w-full sm:w-1/2 md:w-2/4 lg:w-2/4 lg:block md:block"
                    />
                    <img 
                        src={Immagine2} 
                        alt="Immagine New School" 
                        className="paralax-image2 marginesotto background-image3 shadow-lg w-96 sm:w-1/2 md:w-1/3 lg:w-2/2 hidden lg:block md:block mb-96"
                    />
                </div>

                {/* Testo sovrapposto */}
                <div className="paralax-test2 text-center sotto2 mt-[850px] lg:mt-[400px] z-20">
                    <h2 className="text-center marginesopra overlay-title climate-crisis text-white text-3xl lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-8 mx-auto ombre">
                       {t('section_3_h2')}
                    </h2>
                    <p className="text-center overlay-subtitle courgette-regular text-gray-300 text-2xl lg:text-4xl md:text-4xl sm:text-3xl leading-relaxed max-w-3xl lg:max-w-6xl mb-8 mx-auto ombre">
                    {t('section_3_p')}
                    </p>

                    <div className="animate-bounce">
                        <Link 
                            to="/gallery"
                            className="ombre courgette-regular text-2xl lg:text-4xl md:text-4xl sm:text-3xl animate-bounce"
                        >
                            Gallery
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;

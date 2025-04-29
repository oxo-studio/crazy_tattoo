import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Resident from '../components/resident';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import Studio2 from '../img/studio2.jpg';
import Studio1 from '../img/studio1.jpg';
import crazy from '../img/crazyyy.jpg'



import { useTranslation, } from "react-i18next";





gsap.registerPlugin(ScrollTrigger);



function ChiSiamo() {

    const {t}= useTranslation();
    useEffect(() => {
        // Effetto parallasse per l'immagine
        gsap.to(".paralax-imgstudio", {
            y: 200,
            ease: "none",
            scrollTrigger: {
                trigger: ".image2-container",
                start: "top bottom",
                scrub: 1, // Scrub morbido per un effetto fluido
                end: "bottom top",
                markers: false, // Disabilita i markers per il debug
            },
        });

        gsap.to('.hero-parallax-bg', {
            y: '30%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,  // Effetto morbido
            },
        });

        // Effetto parallasse per il testo
        gsap.to(".paralax-testostudio", {
            y: -800,
            ease: "none",
            scrollTrigger: {
                trigger: ".section2-content",
                start: "top bottom",
                scrub: 1, // Scrub per testo
                end: "bottom top",
                markers: false,
            },
        });

        // Animazione senza spostamento verticale per le immagini all'interno di .image2-container
        gsap.fromTo(
            ".image2-container img",
            { opacity: 0 }, // Stato iniziale (solo opacità, senza movimento verticale)
            {
                opacity: 1,
                duration: 1.5,
                stagger: 0.3, // Ritardo progressivo tra le immagini
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".image2-container",
                    start: "top 80%", // Inizia l'animazione quando le immagini sono visibili nel viewport
                    toggleActions: "play none none reverse", // Comportamento di animazione
                    markers: false, // Disabilita i markers per il debug
                },
            }
        );

    }, []);

    return (
        <>
            <NavBar />
            <div className="w-full flex flex-col items-center justify-start">
          
            <div className="relative w-full h-screen">
            <img
    src={crazy}
    alt="Immagine tatuatore con studio"
    className="w-full h-full absolute transform sm:translate-x-[100px] md:translate-x-0"
/>


    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>


  
                    {/* Testo sovrapposto */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl climate-crisis text-center px-4 py-2 rounded-md ombre">
                            Chi Siamo
                        </h1>
                       </div>
                      
                </div>
            </div>
            

            <div className="section2">
                <div className="section2-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-24">
                    {/* Container delle immagini */}
                    <div className="image2-container relative flex justify-center items-center gap-6 flex-wrap pb-8">
                        <img
                            src={Studio1}
                            alt="Immagine studio con postazione accoglienza"
                            className="paralax-imgstudio background-image2 shadow-lg w-full sm:w-1/2 md:w-2/4 lg:w-2/4 hidden lg:block md:block"
                        />
                        <img
                            src={Studio2}
                            alt="Immagine studio con gran angolo e vista completa"
                            className="paralax-imgstudio background-image3 shadow-lg w-96 sm:w-1/2 md:w-1/3 lg:w-2/2"
                        />
                    </div>

                    {/* Testo sovrapposto */}
                    <div className="paralax-testostudio mt-[400px] sm:mt-[500px] lg:mt-[500px]  text-center">
                        <h2 className="text-center overlay-title climate-crisis text-white text-3xl lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-8 mx-auto ombre">
                            {t("chisiamo_1")}
                        </h2>
                        <p className="text-center overlay-subtitle courgette-regular text-gray-300 text-2xl lg:text-4xl md:text-4xl sm:text-3xl leading-relaxed max-w-3xl lg:max-w-6xl mb-8 mx-auto ombre">
                    {t("chisiamo_2")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Move Resident component above Footer */}
            <Resident /> {/* Resident component now above Footer */}
            <Footer /> {/* Footer below Resident component */}
        </>
    );
}

export default ChiSiamo;

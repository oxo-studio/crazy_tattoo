import  { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./section1.css";
import arteImg from "../img/arte.jpg";
import Fulmine from '../img/fulmine.svg';

import { useTranslation,  } from "react-i18next";
import Container from "./Container";




gsap.registerPlugin(ScrollTrigger);

function Section1() {

    const {t} = useTranslation();

    useEffect(() => {
        // Effetto parallasse immagine
        gsap.to(".parallax-image", {
            y: 300,
            ease: "none",
            scrollTrigger: {
                trigger: ".image-container",
                start: "top bottom",
                scrub: true,
                end: "bottom top",
            },
        });

        // Effetto parallasse testo
        gsap.to(".parallax-text", {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: ".image-container",
                start: "top bottom",
                scrub: true,
                end: "bottom top",
            },
        });

        // Animazione iniziale per immagine
        gsap.fromTo(
            ".parallax-image",
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".parallax-image",
                    start: "top 90%",
                    toggleActions: "play none none none",
                    immediateRender: false,
                },
            }
        );

        // Animazione iniziale per testo (stagger)
        gsap.fromTo(
            ".parallax-text h2, .parallax-text p",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".parallax-text",
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                    immediateRender: false,
                },
            }
        );

        // Animazione per il link "Chi siamo"
        gsap.fromTo(
            ".parallax-text .link-chi-siamo",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".parallax-text",
                    start: "top 80%",
                    toggleActions: "play none none none",
                    immediateRender: false,
                },
            }
        );
    }, []);

 

    return (
        <>
        <Container>
            <div className="section1 relative -mb-28 md:mb-28  ">
                <div className="section1-content relative">
                    {/* Contenitore immagine */}
                    <div className="relative w-full overflow-visible wrap">
                        {/* Immagine del fulmine */}
                        <img
                            src={Fulmine}
                            alt="Illustrazione di fulmine artistico"
                            className="absolute opacity-30 top-[-400%] right-[-15%] lg:top-[-190%] md:top-[-300%] lg:right-[-15%] sm:right-[-15%] z-[-1] w-[190rem] h-[190rem] rotate-[30deg] filter invert-[0.8] sepia-[1] saturate-[20] hue-rotate-[90deg]"
                        />

                        {/* Immagine principale */}
                        <img
                            src={arteImg}
                            alt="Studio tatuaggi Val di Vara - Opere d'arte in Liguria"
                            className="parallax-image  object-cover h-80 w-80 sm:h-[300px] md:h-[400px] lg:h-[500px] text-3xl lg:text-4xl md:text-3xl sm:w-3/4 md:w-2/2 lg:max-w-6xl  lg:mt-10"
                        />
                    </div>

                    {/* Testo sopra */}
                    <div className="parallax-text -mt-56 md:-mt-16 sm:-mt-96 ">
                        <h2 className="  overlay-title climate-crisis text-3xl lg:text-6xl md:text-5xl sm:text-3xl  lg:mb-[150px] sm:mb-[-90px] mb-[-1000px] ombre">
                        {t( 'section1_h2')}
                        </h2>
                        <p className="pt-5 overlay-subtitle courgette-regular text-2xl lg:text-4xl md:text-4xl sm:text-2xl lg:mt-[-200px] md:mt-[-150px] sm:mt-[-50px] mt-[-100px] ombre">
                        {t( 'section_1')}
                        </p>
            
                       
                    </div>
                    
                </div>
                
            </div>

            </Container>
          
        </>
    );
}

export default Section1;

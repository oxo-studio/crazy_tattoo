import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./section1.css";
import arteImg from "../img/arte.jpg";

import { useTranslation } from "react-i18next";
import Container from "./Container";


gsap.registerPlugin(ScrollTrigger);

function Section1() {
    const { t } = useTranslation();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.matchMedia({
            // Mobile first
            "(max-width: 767px)": function () {
                gsap.to(".parallax-text", {
                    y: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".image-container",
                        start: "top bottom",
                        scrub: true,
                        end: "bottom top",
                    },
                });
            },
    
            // Tablet
            "(min-width: 768px) and (max-width: 1023px)": function () {
                gsap.to(".parallax-text", {
                    y: -900, // molto più in alto su tablet (md)
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".image-container",
                        start: "top bottom",
                        scrub: true,
                        end: "bottom top",
                    },
                });
            },
    
            // Desktop
            "(min-width: 1024px)": function () {
                gsap.to(".parallax-text", {
                    y: -300,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".image-container",
                        start: "top bottom",
                        scrub: true,
                        end: "bottom top",
                    },
                });
            },
        });
    
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
    }, []);

  
    

    return (
        <Container>
            <div className="section1 relative -mb-28 md:mb-28">
                <div className="section1-content relative">
                    <div className="relative w-full overflow-visible wrap">
                       

                        {/* Aggiungi 'sm:static' per disabilitare le animazioni su mobile */}
                        <img
                            src={arteImg}
                            alt="Studio tatuaggi Val di Vara - Opere d'arte in Liguria"
                            className="parallax-image object-cover h-80 w-full sm:h-[300px] md:h-[400px] lg:h-[500px] text-3xl lg:text-4xl md:text-3xl sm:w-3/4 md:w-2/2 lg:max-w-6xl lg:mt-10 sm:static"
                        />
                    </div>

                    {/* Modifica per il testo, visibile solo sui dispositivi mobili */}
                    <div className="parallax-text md:relative sm:absolute sm:top-0 sm:left-0 sm:w-full sm:text-center sm:pt-10">
                        <h2 className="spostati overlay-title climate-crisis text-3xl lg:text-6xl md:text-5xl sm:text-3xl lg:mb-[150px] sm:mb-[-90px] md:mt-[-10px] ombre sm:text-white ">
                            {t("section1_h2")}
                        </h2>
                        <p className="pt-5 sotto overlay-subtitle courgette-regular text-2xl lg:text-4xl md:text-4xl sm:text-2xl lg:-mt-[-200px] md:mb-[100px] sm:mt-[0px] mt-[-100px] ombre sm:text-white sm:mb-[-50px]">
                            {t("section_1")}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Section1;

import  { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

function Testimonials() {
    
    const {t}= useTranslation()
    
    const testimonials = [
        {
            text: t('testimonial_1'),
            author: "Sambito Andrea",
        },
        {
            text: t('testimonial_2'),
            author: "Davide Pezzani",
        },
        {
            text: t('testimonial_3'),
            author: "Rebecca De Pietri",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const containerRef = useRef(null);

    

    // Attivare GSAP ScrollTrigger per l'animazione
    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current, // Il div che attiva l'animazione
                start: "top 150%", // Inizia l'animazione quando il div è visibile all'80%
                toggleActions: "play none none none"
 // L'animazione parte solo una volta
            },
        });

        timeline
            .fromTo(
                title1Ref.current,
                { x: "100%", opacity: 0 },
                { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
            )
            .fromTo(
                title2Ref.current,
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
                "<" // Esegui le due animazioni in parallelo
            );
    }, []);

    // Cambia testimonianza automaticamente ogni 5 secondi
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 9000); // Cambio ogni 9 secondi

        return () => clearInterval(intervalId); // Pulisce l'intervallo quando il componente viene smontato
    }, [testimonials.length]);

    // Funzione per passare alla testimonianza precedente
    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Funzione per passare alla testimonianza successiva
    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center h-auto text-center mt-[-70px]">
            {/* Titolo con doppio livello */}
            <div className="relative mt-[-690px] lg:mt-[-700px] md:mt-[-600px] sm:mt-[-700px] mb-10 md:mb-10 lg:mb-12">
                <h1
                    ref={title1Ref}
                    className="climate-crisis text-4xl sm:text-7xl lg:text-9xl font-bold text-stone-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    Testimonials
                </h1>
                <h1
                    ref={title2Ref}
                    className="climate-crisis text-3xl sm:text-5xl lg:text-7xl font-bold text-white relative"
                >
                    Testimonials
                </h1>
            </div>

            <div className="text-container flex flex-col items-center justify-center max-w-screen-lg mx-auto md:mb-[100px] mb-52 px-4">
                <div className="flex items-center space-x-4">
                    {/* Icona per passare alla testimonianza precedente */}
                    <svg
                        onClick={prevTestimonial}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 cursor-pointer hover:text-gray-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>

                    {/* Testimonianza corrente */}
                    <div className="testimonial-content px-4 md:mb-36">
                        <p className="text-column courgette-regular text-2xl lg:text-3xl md:text-3xl sm:text-2xl mb-5 text-justify">
                            {testimonials[currentIndex].text}
                        </p>
                        <h3 className="climate-crisis text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                            {testimonials[currentIndex].author}
                        </h3>
                    </div>

                    {/* Icona per passare alla testimonianza successiva */}
                    <svg
                        onClick={nextTestimonial}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;

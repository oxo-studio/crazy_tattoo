import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import NavBar from "../components/navbar";
import Passione from '../img/passione.jpg';
import Footer from '../components/footer';

import Immagine1 from '../img/immagine1.jpeg';
import Immagine2 from '../img/immagine2.jpg';
import Immagine3 from '../img/immagine3.png';

import Chiara1 from '../img/Chi1.jpg';
import Chiara2 from '../img/chi2.jpg';
import Chiara3 from '../img/chi3.jpg';

import Crazy1 from '../img/crazy1.jpg';
import Crazy2 from '../img/crazy2.jpg';
import Crazy3 from '../img/crazy3.jpg';

// Dati delle categorie
const categories = [
    {
        name: 'Crazy',
        images: [
            { src: Immagine1 },
            { src: Immagine2 },
            { src: Immagine3 },
            { src: Crazy1 },
            { src: Crazy2 },
            { src: Crazy3 },
        ],
    },
    {
        name: 'GUEST',
        isGuest: true,
        images: [],
    },
    {
        name: 'Chiara',
        images: [
            { src: Chiara1 },
            { src: Chiara2 },
            { src: Chiara3 },
        ],
    },
];

function Gallery() {
    const galleryRefs = useRef(categories.map(() => []));
    const residentRefs = useRef([]);
    const guestRefs = useRef([]);
    const nameRefs = useRef([]);

    useEffect(() => {
        // Animazioni per titoli
        residentRefs.current.forEach((ref) => {
            gsap.fromTo(ref, { x: '-50%', opacity: 0 }, { x: 0, opacity: 1, duration: 2, ease: 'power4.out', scrollTrigger: { trigger: ref, start: 'top 80%' } });
        });

        guestRefs.current.forEach((ref) => {
            gsap.fromTo(ref, { x: '50%', opacity: 0 }, { x: 0, opacity: 1, duration: 2, ease: 'power4.out', scrollTrigger: { trigger: ref, start: 'top 80%' } });
        });

        nameRefs.current.forEach((ref) => {
            gsap.fromTo(ref, { x: '50%', opacity: 0 }, { x: 0, opacity: 1, duration: 3, ease: 'power4.out', scrollTrigger: { trigger: ref, start: 'top 80%' } });
        });

        // Animazione immagini
        const animate = (elements) => {
            gsap.to(elements, { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power4.out" });
        };

        const observer = new IntersectionObserver((entries) => {
            const visibleItems = [];
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    visibleItems.push(entry.target);
                    observer.unobserve(entry.target);
                }
            });
            if (visibleItems.length) animate(visibleItems);
        }, { threshold: 0.5 });

        galleryRefs.current.forEach((categoryRefs) => categoryRefs.forEach((el) => el && observer.observe(el)));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <NavBar />

            {/* Immagine di sfondo con titolo */}
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 z-[1]" />
                <img src={Passione} alt="Arte" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl climate-crisis text-center px-4 py-2 rounded-md ombre">
                        Gallery
                    </h1>
                </div>
            </div>

            {/* Galleria */}
            <div className="categories-container">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="category-section my-12">
                        {/* Sezione RESIDENT */}
                        {(category.name === "Crazy" || category.name === "Tina") && (
                            <div className="resident-section text-center lg:-mb-16 md:-mb-14 sm:-mb-10 -mb-[20px] text-stone-700"
                                ref={(el) => (residentRefs.current[categoryIndex] = el)}>
                                <h2 className="resident-title climate-crisis font-bold lg:text-[9rem] md:text-[6rem] sm:text-[5rem] text-[3rem] leading-none">
                                    RESIDENT
                                </h2>
                            </div>
                        )}

                        {/* Sezione GUEST */}
                        {category.isGuest && (
                            <div className="guest-section text-center my-8 lg:-mb-44 md:-mb-40 sm:-mb-36 -mb-[200px] text-stone-700"
                                ref={(el) => (guestRefs.current[categoryIndex] = el)}>
                                <h2 className="guest-title climate-crisis font-bold lg:text-[10rem] md:text-[8rem] sm:text-[7rem] text-[4rem] leading-none">
                                    GUEST
                                </h2>
                            </div>
                        )}

                        {/* Titolo della categoria */}
                        {!category.isGuest && (
                            <h2 className="text-5xl lg:text- md:text-10xl sm:text-6xl climate-crisis ombre text-center font-bold text-white"
                                ref={(el) => (nameRefs.current[categoryIndex] = el)}>
                                {category.name}
                            </h2>
                        )}

                        {/* Galleria di immagini */}
                        <div className="gallery-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                            {category.images.map((image, index) => (
                                <div key={index} className="gallery-item relative opacity-0 translate-y-10"
                                    ref={(el) => (galleryRefs.current[categoryIndex][index] = el)}>
                                    <img src={image.src} alt="" className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Gallery;

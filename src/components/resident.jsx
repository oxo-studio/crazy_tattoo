import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Crazyr from '../img/crazyr.jpg'
import { useTranslation } from "react-i18next";
import chiara2 from '../img/chiara2.jpeg'

gsap.registerPlugin(ScrollTrigger);

function Resident() {

  const {t}= useTranslation()

  useLayoutEffect(() => {
    gsap.set(".animate-item", { opacity: 0, x: 0 });

    gsap.utils.toArray(".animate-item").forEach((item, index) => {
      const direction = index % 2 === 0 ? -200 : 200;

      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: direction,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: window.innerWidth < 768 ? "top 95%" : "top 85%",
            end: window.innerWidth < 768 ? "bottom 60%" : "bottom 80%",
            toggleActions: "play none none none",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-400px] lg:mt-[-400px] md:mt-[-350px] mb-10">

        <h1 className="lg:text-[9rem] md:text-[7rem] sm:text-[5rem] text-5xl lg:-mb-44 md:-mb-36 sm:-mb-32 -mb-32 text-stone-700 text-center mt-20 climate-crisis animate-item">
          Residents
        </h1>
        <h1 className="ombre text-4xl md:text-5xl lg:text-8xl font-extrabold text-white text-center mb-20 mt-[110px] sm:mt-20 climate-crisis animate-item">
          Residents
        </h1>

        {/* Sezione 1 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-28 animate-item">
          <div className="w-full sm:w-1/2">
            <img
              src={Crazyr}
              alt="Immagine crazy in primo piamo"
              className="w-full h-[450px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-4 climate-crisis">
              Crazy
            </h1>
            <p className="text-white leading-relaxed courgette-regular mb-14 text-justify text-2xl lg:text-3xl">
              {t('resident_crazy')}
            </p>
          </div>
        </div>

        <h1 className="lg:text-[9rem] md:text-[7rem] sm:text-[5rem] text-[4rem] lg:-mb-40 md:-mb-32 sm:-mb-28 -mb-[90px] text-stone-700 text-center mt-20 climate-crisis animate-item">
          Guest
        </h1>
        <h1 className="ombre text-4xl md:text-5xl lg:text-8xl font-extrabold text-white text-center mb-20 climate-crisis animate-item">
          Guest
        </h1>

        {/* Sezione 3 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-28 animate-item">
          <div className="w-full sm:w-1/2">
            <img
              src={chiara2}
              alt="Chiara la piercer in primo piano"
              className="w-full h-[450px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-4 climate-crisis">
              Chiara
            </h1>
            <p className="text-white leading-relaxed courgette-regular mb-14 text-justify text-2xl lg:text-3xl">
              {t('resident_chiara')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resident;

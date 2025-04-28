import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Img1 from '../img/crazy.ritratto.jpg';
import './hero.css';





gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.to('.hero-parallax-bg', {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="hero-section relative isolate overflow-hidden min-h-screen flex flex-col justify-end">
     <div className="hero-parallax-bg absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2)), url(${Img1})`,
  }}
>
      <img src={Img1} alt="Crazy N Tina Tattoo background" className="sr-only" />
    </div>

      <div className="relative mx-auto text-center text-white pb-11 sm:pb-20 md:pb-20 lg:pb-40 md:-mb-[-130px] lg:-mb-24">
        <h1 className="ombre text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight climate-crisis">
          CRAZY N TINA TATTOO
        </h1>
        <p className="mt-8 ombre text-3xl sm:text-base md:text-4xl lg:text-5xl courgette-regular">
          {t('hero_h2')}
        </p>
        <div className="mt-8 animate-bounce">
          <Link
            to="/contatti"
            className="text-3xl ombre sm:text-base md:text-4xl lg:text-4xl font-semibold text-white courgette-regular animate-bounce link chisiamo"
          >
            {t('prenota_hero')}
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Img1 from '../img/crazy.ritratto.jpg';
import './hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();

  // Refs per lettere e sezione
  const titleRef = useRef([]);
  const subtitleRef = useRef([]);
  const prenotaRef = useRef([])
  const sectionRef = useRef(null);

  // Funzione per splittare testo in lettere
  const splitText = (text, ref) => {
    ref.current = []; // Pulisce il ref prima di riempirlo
    return text.split('').map((char, i) => (
      <span
        key={i}
        ref={(el) => (ref.current[i] = el)}
        className="inline-block whitespace-nowrap"
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(() => {
    // Animazione parallax background
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

    // Funzione animazione lettere
    const animateLetters = (letters, delay = 0) => {
      gsap.fromTo(
        letters,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    // Avvia le animazioni
    animateLetters(titleRef.current);
    animateLetters(subtitleRef.current, 0.3);
    animateLetters(prenotaRef.current,0.9)
  }, []);

  return (
    <div
      ref={sectionRef}
      className="hero-section relative isolate overflow-hidden min-h-screen flex flex-col justify-end"
    >
      <div
        className="hero-parallax-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2)), url(${Img1})`,
        }}
      >
        <img
          src={Img1}
          alt="Crazy N Tina Tattoo background"
          className="sr-only"
        />
      </div>

      <div className="relative mx-auto text-center text-white pb-11 sm:pb-20 md:pb-20 lg:pb-40 md:-mb-[-70px] lg:-mb-24">
        <h1 className="ombre text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight climate-crisis">
          {splitText('CRAZY N TINA TATTOO', titleRef)}
        </h1>

        <p className="mt-8 ombre text-3xl sm:text-base md:text-4xl lg:text-5xl courgette-regular">
          {splitText(t('hero_h2'), subtitleRef)}
        </p>

        <div className="mt-8 animate-bounce">
          <Link
            to="/contatti"
            className="text-3xl ombre sm:text-base md:text-4xl lg:text-4xl font-semibold text-white courgette-regular animate-bounce link chisiamo"
          >
            {splitText (t('prenota_hero'),prenotaRef)}
          </Link>
        </div>
      </div>
    </div>
  );
}

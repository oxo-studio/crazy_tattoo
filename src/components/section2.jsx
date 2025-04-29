import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Figma from '../img/figma.svg';
import Frame from '../img/Frame 1.svg';
import Frame4 from '../img/Frame4.svg';

import { useTranslation } from "react-i18next";
import Container from './Container'

gsap.registerPlugin(ScrollTrigger);



function Section2() {
  const { t } = useTranslation();

  

  useEffect(() => {
    gsap.utils.toArray(".section2-column").forEach((column) => {
      gsap.fromTo(
        column,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: column,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (

    <Container>
    <div className="section2-grid w-full mt-28 grid grid-cols-1 md:grid-cols-3 gap-x-10 text-center items-center justify-center">
      {[
        { img: Figma, title: "Design", text: t("designe") },
        { img: Frame, title: "Cover-Up", text: t("cover_up") },
        { img: Frame4, title: "Piercing", text: t("piercing") }
      ].map((item, index) => (
        <div key={index} className="section2-column flex flex-col items-center justify-center mt-[100px]">
          <img src={item.img} alt={item.title} className="mb-4 w-20 md:w-24 lg:w-28 lg:mt-[-50px] md:mt-[-125px] " />
          <h1 className="climate-crisis text-white text-3xl md:text-4xl mb-3">{item.title}</h1>
          <p className="courgette-regular text-xl md:text-2xl md:mb-[150px] ">{item.text}</p>
        </div>
      ))}
    </div>
    </Container>
  );
}

export default Section2;

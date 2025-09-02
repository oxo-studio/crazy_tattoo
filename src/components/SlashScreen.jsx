import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SplashScreen = ({ onFinish }) => {
  const animRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animazione iniziale del logo
    if (animRef.current) {
      gsap.fromTo(
        animRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }

    // Caricamento da 0 a 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish(); // Chiusura dello splash
          return 100;
        }
        return prev + 1;
      });
    }, 30); // 20ms × 100 = 2000ms (2 secondi)

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-black text-white"
      style={{
        perspective: '1000px',
      }}
    >
      <div
        ref={animRef}
        className="pointer-events-none mb-6"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src="/src/img/crazy-newlogosplash.svg"
          alt="Logo"
          width="700"
          height="700"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <div className="text-xl font-mono tracking-widest">
        Loading... {progress}%
      </div>
    </div>
  );
};

export default SplashScreen;

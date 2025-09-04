import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Oxo from '../img/oxobiancologo.svg';

function Footer() {
  return (
    <footer className="bg-neutral-700 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Sezione sinistra: Info */}
        <div className="text-sm sm:text-base text-center sm:text-left">
          <p>©2024 Crazy n'Tina Tattoo - Tutti i diritti riservati</p>
          <p>
            P.IVA 01571420114 – <Link to="/privacy" className="underline hover:text-red-500">Privacy & Cookie Policy</Link>
          </p>
          <p>Creato da Oxo Studio</p>
        </div>

        {/* Sezione destra: Icone */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-red-700 transition duration-300"
          >
            <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-red-700 transition duration-300"
          >
            <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>

          {/* Logo Oxo */}
<a
  href="https://oxostudio.it"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Oxo Studio"
  className="transition duration-300"
>
<img 
src={Oxo} 
height={70} 
width={70} 
alt="Oxo Logo" />
</a>


        </div>
      </div>
    </footer>
  );
}

export default Footer;

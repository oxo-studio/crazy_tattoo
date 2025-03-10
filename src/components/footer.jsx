
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-neutral-700 text-white py-6 px-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                {/* Prima sezione: Testo a sinistra */}
                <div className="text-sm sm:text-base">
                    <p>©2024 Crazy n'Tina tattoo tutti i diritti riservati</p>
                    <p>
                    P.Iva - 01571420114- <Link to='/privacy'>Privacy & Cookie Policy</Link>
                    </p>
                    <p>Creato da Poli Matteo</p>
                </div>

                {/* Seconda sezione: Icone a destra */}
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-700 transition duration-300"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="w-10 h-10" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-700 transition duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

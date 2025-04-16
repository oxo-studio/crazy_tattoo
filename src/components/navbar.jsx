import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import i18next from 'i18next'; 
import WorldFlag from 'react-world-flags';
import './navbar.css'


import { useTranslation,  } from "react-i18next";





const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'FR', 
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'GB',
  },
  {
    code: 'it',
    name: 'Italiano',
    country_code: 'IT',
  },
];



export default function NavBar() {

  const {t} = useTranslation();


  const navigation = [
    { name: 'HOME', href: '/', className: 'link home climate-crisis ombre' },
    { name: t("nav_1"), href: '/chisiamo', className: 'link chisiamo climate-crisis ombre' },
    { name: 'GALLERY', href: '/gallery', className: 'link gallery climate-crisis ombre' },
    { name: t("nav_2"), href: '/contatti', className: 'link contatti climate-crisis ombre' },
  ];



  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();


  const savedLang = localStorage.getItem('language') || 'it';
  const [selectedLanguage, setSelectedLanguage] = useState(savedLang);

 
  const handleLanguageChange = (langCode) => {
    setSelectedLanguage(langCode); 
    i18next.changeLanguage(langCode);
    localStorage.setItem('language', langCode); 
  };

  
  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className="relative bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1 ml-3">
            <a href="https://www.facebook.com/profile.php?id=61561658697524&locale=it_IT" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-4xl text-white  hover:text-red-600 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/crazyandtinatattoo/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl text-white ml-4 hover:text-red-600 transition duration-300" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="link hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${item.className} ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-trasparent px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-800">
                  <WorldFlag code={languages.find((lang) => lang.code === selectedLanguage)?.country_code} className="w-6 h-6 mr-2" />
                  <span>{languages.find((lang) => lang.code === selectedLanguage)?.name}</span> 
                  <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-white " />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-trasparent shadow-lg border  ring-1 ring-black/5 transition focus:outline-none"
              >
                <div className="py-1">
                  {languages.map((language) => (
                    <MenuItem key={language.code} onClick={() => handleLanguageChange(language.code)}>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-white  hover:bg-gray-800"
                      >
                        <WorldFlag code={language.country_code} className="w-6 h-6 mr-2" />
                        {language.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden  ">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto text-white   bg-zinc-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
             
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 left-1/2  transform -translate-x-1/2 -m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y text-white">
                <div className="space-y-2 py-6 mobile-menu-links ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${item.className} ${location.pathname === item.href ? 'active' : ''} -mx-3 block rounded-lg px-3 py-2 text-base`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex justify-center space-x-3">
                  <a href="https://www.facebook.com/profile.php?id=61561658697524&locale=it_IT" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-4xl hover:text-red-600 transition duration-300" />
                  </a>
                  <a href="https://www.instagram.com/crazyandtinatattoo/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-4xl hover:text-red-600 transition duration-300" />
                  </a>
                </div>
                <div className="py-6 text-center items-center">
                  <p className="courgette-regular py-2">Contatti - 3791022541</p>
                  <p className="courgette-regular py-2">Lun-Sab 12.00 - 18.00</p>
                  <p className="courgette-regular">Via Briniani 8, Brugnato SP</p>
                </div>
              </div>
            </div>

            <div className="py-6">
               <div className="flex flex-col items-center space-y-4">
                  <p className="text-white font-semibold courgette-regular">{t("lingue_mobile")}</p>
                     <div className="flex space-x-4">
                     {languages.map((language) => (
                     <button
                        key={language.code}
                           onClick={() => handleLanguageChange(language.code)}
                           className={`flex items-center px-3 py-2 rounded-md text-white hover:bg-gray-700 transition ${
                           selectedLanguage === language.code ? 'bg-gray-700' : ''
                             }`}
                             >
                       <WorldFlag code={language.country_code} className="w-6 h-6 mr-2" />
                       {language.name}
                       </button>
                        ))}
                  </div>
                      </div>
                          </div>

            
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

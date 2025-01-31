import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  {
    label: "Services",
    href: "#",
    ariaLabel: "Services",
    children: [
      { label: "Embroidery", href: "/custom-embroidery-services-high-volume/", ariaLabel: "Embroidery" },
      { label: "Screen Printing", href: "/screen-printing-dirrect-to-guarment/", ariaLabel: "Screen Printing" },
      { label: "DTG", href: "/los-angeles-screen-printing-direct-to-garment-dtg/", ariaLabel: "DTG" },
      { label: "Digital Sublimation", href: "/los-angeles-digital-sublimation-printing/", ariaLabel: "Digital Sublimation" },
      { label: "Heat Transfer", href: "/los-angeles-heat-transfer/", ariaLabel: "Heat Transfer" },
      { label: "Cut & Sew", href: "/cut-and-sew/", ariaLabel: "Cut & Sew" },
    ],
  },
  { label: "Gallery", href: "../custom-embroidery-services", ariaLabel: "Gallery" },
  { label: "Events", href: "/onsite-live-embroidery-events-los-angeles/", ariaLabel: "Events" },
  { label: "Free Quote", href: "/free-quote/", ariaLabel: "Free Quote" },
  { label: "About Us", href: "/about-us/", ariaLabel: "About Us" },
  { label: "Contact", href: "/contact-us/", ariaLabel: "Contact" },
];

export const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-black lg:bg-blackTransparent z-40 lg:backdrop-blur-xl bg-opacity-70" aria-label="Main navigation">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        
        {/* Desktop Main Menu */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="hidden lg:flex h-full pl-4 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel, children }) => (
              <div key={label} className="relative" onMouseEnter={() => children && setSubMenuOpen(true)} onMouseLeave={() => children && setSubMenuOpen(false)}>
                <a
                  className="text-white lg:text-base text-2xl leading-6 mr-2 ml-2 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2 flex items-center"
                  href={href}
                  aria-label={ariaLabel}
                >
                  {label}
                  {children && (
                    <span className="ml-1">
                      {subMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  )}
                </a>

                {/* Dropdown Menu for "Services" */}
                {children && (
                  <AnimatePresence>
                    {subMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        className="absolute mt-2 w-48 shadow-lg rounded-lg py-2 z-20 flex flex-col bg-black"
                        style={{ left: "-40px" }}
                      >
                        {children.map((child) => (
                          <div key={child.label} className="px-4 py-2">
                            <a href={child.href} className="text-white text-lg hover:bg-gray-700 transition duration-300 rounded-md block text-center">
                              {child.label}
                            </a>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a className="text-white border border-gray-700 rounded-xl bg-bgDark2 hover:bg-bgDark3 px-6 py-2 text-sm flex" href="tel:+13235843000">
              Call: (323) 584-3000
            </a>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex flex-col px-2 py-3 border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
            <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-black z-50 w-full items-center gap-6 pb-10 border-y border-gray-700 pt-10">
              {navbarLinks.map(({ label, href, ariaLabel, children }) => (
                <div key={label} className="relative">
                  <a
                    href={href}
                    className="text-white text-xl leading-6 cursor-pointer font-medium hover:scale-110 transition duration-300 flex items-center"
                    onClick={() => setIsOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {label}
                    {children && (
                      <span className="ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    )}
                  </a>
                  {children && subMenuOpen && (
                    <ul className="pl-4">
                      {children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} className="text-white text-lg py-1 block hover:scale-110 transition duration-300" onClick={() => setIsOpen(false)}>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <a className="text-white border border-gray-700 rounded-xl px-6 py-2 flex" href="tel:+13235843000">
                Call: (323) 584-3000
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

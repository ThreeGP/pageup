import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import oskbudvipImage from "../assets/oskbudvip.png";
import tomwagImage from "../assets/tomwag.png";
import okekelImage from "../assets/okekel.png";
import narapieImage from "../assets/narapie.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Osk.BudVip",
      image: oskbudvipImage,
      description:
        "Nowoczesna strona dla firmy budowlano-stolarskiej, prezentująca profesjonalne usługi budowlane i wykończeniowe.",
      photoDescription:
        "Zrzut ekranu strony głównej OskBudVip przedstawiający eleganckie wykończenie wnętrz",
    },
    {
      id: 2,
      title: "TOMWAG",
      image: tomwagImage,
      description:
        "Strona firmowa dla rodzinnej firmy specjalizującej się w serwisie i modernizacji wag przemysłowych.",
      photoDescription:
        "Strona główna TOMWAG pokazująca profesjonalny sprzęt wagowy i usługi serwisowe",
    },
    {
      id: 3,
      title: "Okekel",
      image: okekelImage,
      description:
        "Dynamiczna strona artysty muzycznego z integracją Spotify i nowoczesnym designem w stylu neonowym.",
      photoDescription:
        "Neonowy interfejs strony Okekel z widocznym odtwarzaczem muzyki i galerią artysty",
    },
    {
      id: 4,
      title: "NaRapie",
      image: narapieImage,
      description:
        "Portal informacyjny o polskiej scenie hip-hopowej z zaawansowanym systemem kategoryzacji treści.",
      photoDescription:
        "Strona główna portalu NaRapie prezentująca najnowsze newsy ze świata hip-hopu",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio realizacji stron www | PageUP</title>
        <meta
          name="description"
          content="Zobacz nasze realizacje: nowoczesne strony internetowe dla firm, sklepy, projekty WordPress, no-code i custom. PageUP – agencja webowa dla biznesu."
        />
        <meta
          name="keywords"
          content="portfolio, realizacje, strony internetowe, strony www dla firm, projekty WordPress, agencja webowa, nowoczesne strony www"
        />
        <link rel="canonical" href="https://pageup.pl/portfolio" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Portfolio realizacji stron www | PageUP"
        />
        <meta
          property="og:description"
          content="Zobacz nasze realizacje: nowoczesne strony internetowe dla firm, sklepy, projekty WordPress, no-code i custom. PageUP – agencja webowa dla biznesu."
        />
        <meta property="og:url" content="https://pageup.pl/portfolio" />
        <meta property="og:image" content="https://pageup.pl/logo-title.png" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="PageUP" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portfolio realizacji stron www | PageUP"
        />
        <meta
          name="twitter:description"
          content="Zobacz nasze realizacje: nowoczesne strony internetowe dla firm, sklepy, projekty WordPress, no-code i custom. PageUP – agencja webowa dla biznesu."
        />
        <meta name="twitter:image" content="https://pageup.pl/logo-title.png" />
        {/* Structured Data: CollectionPage */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio PageUP",
            "description": "Portfolio realizacji stron internetowych PageUP",
            "url": "https://pageup.pl/portfolio"
          }
        `}</script>
      </Helmet>
      <div>
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-secondary-700 via-secondary-800 to-primary-900">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/5"
                initial={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  scale: 0.8,
                  opacity: 0.1,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 30, 0],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                }}
              />
            ))}
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="mb-6 text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-300 font-serif">
                Portfolio
              </h1>
              <p className="max-w-2xl mx-auto mb-8 text-xl font-light text-white/90">
                Odkryj nasze najnowsze projekty i zobacz, jak pomagamy firmom
                osiągać sukces w cyfrowym świecie poprzez kreatywne i skuteczne
                rozwiązania.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Content */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <AnimatePresence>
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="group"
                  >
                    <div className="overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative overflow-hidden h-[300px]">
                        <img
                          src={project.image}
                          alt={project.photoDescription}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col flex-grow p-6">
                        <h3 className="mb-2 text-xl font-bold font-serif text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="mb-6 text-sm text-gray-600 flex-grow">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/5"
                initial={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  scale: 0.8,
                  opacity: 0.1,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 30, 0],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                }}
              />
            ))}
          </div>

          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-300">
                Gotowy, aby rozpocząć swój projekt?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Skontaktuj się z nami już dziś i dowiedz się, jak możemy pomóc
                Twojej firmie osiągnąć sukces online. Razem stworzymy cyfrowe
                rozwiązanie, które wyróżni Twoją markę.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-white text-primary-800 hover:shadow-lg hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 group"
              >
                Skontaktuj się z nami
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;

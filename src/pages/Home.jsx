import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
// import TrustedCompany from "../components/TrustedCompany";

const Home = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Nowoczesne Technologie",
      description:
        "Tworzymy strony wykorzystując najnowsze frameworki i technologie, które zwiększają wydajność i funkcjonalność Twojej witryny.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      title: "Unikalny Design",
      description:
        "Każdy projekt jest wyjątkowy i dostosowany do potrzeb Twojej marki. Tworzymy strony, które wyróżniają się na tle konkurencji.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      title: "Błyskawiczna Wydajność",
      description:
        "Optymalizujemy każdy aspekt Twojej strony, aby ładowała się błyskawicznie i zapewniała płynne działanie na wszystkich urządzeniach.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Pełna Responsywność",
      description:
        "Twoja strona będzie doskonale wyglądać i działać na każdym urządzeniu - od smartfonów po duże monitory desktopowe.",
    },
  ];

  const testimonials = [
    {
      name: "Dawid Rzeźnik",
      position: "CEO, QńCorp",
      content:
        "Współpraca z PageUp to była najlepsza decyzja dla naszego biznesu. Nasza nowa strona zwiększyła konwersję o 35% w ciągu pierwszych trzech miesięcy!",
      avatar: "/avatars/avatar-1.jpg",
    },
    {
      name: "Patryk Bandurski",
      position: "Właściciel, Studia Muzycznego",
      content:
        "Profesjonalizm, kreatywność i terminowość - to cechy, które wyróżniają PageUp. Polecam każdemu, kto szuka najwyższej jakości.",
      avatar: "/avatars/avatar-2.jpg",
    },
    {
      name: "Łukasz Tuszyński",
      position: "Dyrektor Marketingu, Sklep Wędkarski",
      content:
        "Nasza firmowa strona internetowa została kompletnie przebudowana i efekt przeszedł nasze oczekiwania. Dziękujemy za wsparcie na każdym etapie!",
      avatar: "/avatars/avatar-3.jpg",
    },
  ];

  const stats = [
    { value: "100%", label: "zadowolonych klientów", icon: "🌟" },
    { value: "100+", label: "zrealizowanych projektów", icon: "🚀" },
    { value: "6+", label: "lat doświadczenia", icon: "⏱️" },
    { value: "24/7", label: "wsparcie techniczne", icon: "🛠️" },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Nowoczesne tworzenie stron internetowych dla firm | PageUP
        </title>
        <meta
          name="description"
          content="PageUP – nowoczesne strony www dla firm. Tworzenie stron internetowych, WordPress, no-code, mobile-first. Agencja webowa dla biznesu. Skuteczne projektowanie stron."
        />
        <meta
          name="keywords"
          content="tworzenie stron internetowych, strony www dla firm, strony WordPress, projektowanie stron, agencja webowa, strona internetowa dla firm, nowoczesne strony www"
        />
        <link rel="canonical" href="https://pageup.pl/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nowoczesne tworzenie stron internetowych dla firm | PageUP"
        />
        <meta
          property="og:description"
          content="Tworzymy szybkie, responsywne strony www dla firm. WordPress, React, no-code. Agencja webowa PageUP – skuteczne projektowanie stron internetowych."
        />
        <meta property="og:url" content="https://pageup.pl/" />
        <meta property="og:image" content="https://pageup.pl/logo-title.png" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="PageUP" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nowoczesne tworzenie stron internetowych dla firm | PageUP"
        />
        <meta
          name="twitter:description"
          content="Tworzenie stron www dla firm – WordPress, React, no-code. Agencja webowa PageUP. Nowoczesne projektowanie stron internetowych."
        />
        <meta name="twitter:image" content="https://pageup.pl/logo-title.png" />
        {/* Structured Data: Organization, WebSite, Service */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PageUP",
            "url": "https://pageup.pl/",
            "logo": "https://pageup.pl/logo-title.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+48 664 109 616",
              "contactType": "customer service",
              "areaServed": "PL, EU",
              "availableLanguage": ["pl", "en"]
            },
            "sameAs": [
              "https://facebook.com/pageup",
              "https://linkedin.com/company/pageup"
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PageUP",
            "url": "https://pageup.pl/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://pageup.pl/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tworzenie stron internetowych, strony www dla firm, strony WordPress, projektowanie stron, agencja webowa, strona internetowa dla firm",
            "provider": {
              "@type": "Organization",
              "name": "PageUP",
              "url": "https://pageup.pl/"
            },
            "areaServed": ["PL", "EU"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://pageup.pl/"
            }
          }
        `}</script>
      </Helmet>
      <div>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary-500/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 400 + 50}px`,
                  height: `${Math.random() * 400 + 50}px`,
                  animationDuration: `${Math.random() * 30 + 20}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 bg-pattern opacity-10"></div>

          <div className="container-custom relative h-full py-20 md:py-32 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-[1.3]">
                  <span className="text-gradient-alt2">
                    Twoja Wizja,
                    <br />
                    Nasza Realizacja
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/90 mb-8 max-w-xl">
                  Tworzymy niestandardowe strony internetowe, które nie tylko
                  wyglądają wspaniale, ale również zwiększają rozpoznawalność
                  Twojej marki i pomagają osiągnąć realne wyniki biznesowe.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="btn btn-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 group"
                  >
                    Rozpocznij projekt
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                  <Link
                    to="/services"
                    className="btn btn-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    Poznaj nasze usługi
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105"
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-100">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/80 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex justify-center"
              >
                {/* <TrustedCompany /> */}
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => {
              document.getElementById("features").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <svg
              className="w-10 h-10 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="section py-20 md:py-32 bg-white">
          <div className="container-custom">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-20 relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gradient-alt animate-gradient relative z-10 leading-snug pb-2">
                Co zyskujesz wybierając nas?
              </h2>
              <p className="text-secondary-600 text-lg max-w-2xl mx-auto relative z-10 mt-4">
                Połączenie wiedzy technicznej, kreatywnego projektowania i
                zorientowanego na wyniki podejścia pozwala nam tworzyć wyjątkowe
                rozwiązania internetowe.
              </p>
            </motion.div>

            {/* Animated background elements */}
            <div className="absolute top-1/2 right-10 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl -z-10"></div>
            <div className="absolute bottom-1/2 left-10 w-64 h-64 bg-accent-100 rounded-full opacity-30 blur-3xl -z-10"></div>

            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  className="group perspective"
                >
                  <motion.div
                    className="card h-full flex flex-col group-hover:border-primary-500 border border-transparent transition-all duration-500 hover:shadow-2xl rounded-2xl overflow-hidden bg-white relative animated-bg"
                    whileHover={{
                      rotateY: [0, 5, 0, -5, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }}
                  >
                    {/* Card background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Moving particle background */}
                    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full bg-primary-500/5"
                          animate={{
                            y: [0, -30, 0],
                            x: [0, 15, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: Math.random() * 8 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                          }}
                          style={{
                            bottom: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 60 + 20}px`,
                            height: `${Math.random() * 60 + 20}px`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Animated glow elements */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-xl -z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 20, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative z-10 p-6 flex flex-col h-full">
                      <motion.div
                        className="text-primary-600 mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300"
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                          transition: { duration: 0.5 },
                        }}
                      >
                        {feature.icon}
                      </motion.div>

                      <h3
                        className={`text-xl font-bold mb-3 text-center font-serif bg-clip-text text-transparent bg-gradient-to-r ${
                          index === 0
                            ? "from-primary-600 to-primary-400"
                            : index === 1
                            ? "from-blue-600 to-primary-400"
                            : index === 2
                            ? "from-primary-600 to-accent-500"
                            : "from-accent-500 to-accent-300"
                        } animate-gradient`}
                      >
                        {feature.title}
                      </h3>

                      <motion.p
                        className="text-secondary-600 text-center"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {feature.description}
                      </motion.p>

                      <motion.div
                        className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-6 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />

                      <motion.div
                        className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center text-sm text-primary-600 font-medium flex items-center justify-center"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Moving decorative elements */}
            <motion.div
              className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-primary-100/50 blur-xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </section>

        {/* Process Section */}
        <section className="section py-20 md:py-32 bg-gradient-to-b from-white to-secondary-50">
          <div className="container-custom relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full opacity-30 blur-3xl -z-10"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20 relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gradient-alt animate-gradient relative z-10 leading-snug pb-2">
                Jak pracujemy?
              </h2>
              <p className="text-secondary-600 text-lg max-w-2xl mx-auto relative z-10 mt-4">
                Nasz przejrzysty proces gwarantuje, że Twój projekt zostanie
                zrealizowany zgodnie z oczekiwaniami, na czas i w ramach
                budżetu.
              </p>
            </motion.div>

            {/* Card Carousel */}
            <div className="relative max-w-4xl mx-auto perspective">
              {/* Step indicators */}
              <div className="flex justify-between mb-10 px-3 relative">
                {[1, 2, 3, 4].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center space-y-1 cursor-pointer z-10"
                    onClick={() => {
                      // Znajdź aktualnie widoczną kartę
                      const visibleCardIndex = Array.from(
                        document.querySelectorAll(".process-card")
                      ).findIndex(
                        (card) =>
                          window.getComputedStyle(card).display !== "none"
                      );

                      if (visibleCardIndex !== index) {
                        const currentCard =
                          document.querySelectorAll(".process-card")[
                            visibleCardIndex
                          ];
                        const targetCard =
                          document.querySelectorAll(".process-card")[index];

                        // Animacja wyjścia
                        currentCard.style.transition =
                          "transform 0.5s ease, opacity 0.5s ease";
                        if (visibleCardIndex < index) {
                          // Wyjeżdża w lewo jeśli idziemy do przodu
                          currentCard.style.transform =
                            "translateX(-50px) rotateY(-10deg)";
                        } else {
                          // Wyjeżdża w prawo jeśli cofamy się
                          currentCard.style.transform =
                            "translateX(50px) rotateY(10deg)";
                        }
                        currentCard.style.opacity = "0";

                        // Aktualizujemy podświetlenie kroków
                        document
                          .querySelectorAll(".step-indicator")
                          .forEach((indicator, i) => {
                            if (i <= index) {
                              indicator.classList.remove("bg-gray-300");
                              indicator.classList.add(
                                "bg-gradient-to-r",
                                "from-primary-600",
                                "to-primary-500"
                              );
                            } else {
                              indicator.classList.remove(
                                "bg-gradient-to-r",
                                "from-primary-600",
                                "to-primary-500"
                              );
                              indicator.classList.add("bg-gray-300");
                            }
                          });

                        document
                          .querySelectorAll(".step-title")
                          .forEach((title, i) => {
                            if (i <= index) {
                              title.classList.remove("text-gray-500");
                              title.classList.add("text-primary-600");
                            } else {
                              title.classList.remove("text-primary-600");
                              title.classList.add("text-gray-500");
                            }
                          });

                        // Aktualizujemy pasek postępu - płynniejsza animacja
                        const progressBar = document.getElementById(
                          "process-progress-bar"
                        );

                        // Dostosowane wartości, aby bar kończył się dokładnie na punktach
                        const progressValues = [
                          "0%",
                          "33.33%",
                          "66.66%",
                          "100%",
                        ];
                        progressBar.style.width = progressValues[index];

                        setTimeout(() => {
                          // Ukrywamy poprzednią kartę i resetujemy jej styl
                          currentCard.style.display = "none";
                          currentCard.style.transform = "";
                          currentCard.style.opacity = "";

                          // Pokazujemy wybraną kartę
                          targetCard.style.display = "block";
                          targetCard.style.transition =
                            "transform 0.5s ease, opacity 0.5s ease";

                          if (visibleCardIndex < index) {
                            // Wjeżdża z prawej jeśli idziemy do przodu
                            targetCard.style.transform =
                              "translateX(50px) rotateY(10deg)";
                          } else {
                            // Wjeżdża z lewej jeśli cofamy się
                            targetCard.style.transform =
                              "translateX(-50px) rotateY(-10deg)";
                          }

                          targetCard.style.opacity = "0";

                          // Animacja wejścia
                          setTimeout(() => {
                            targetCard.style.transform = "";
                            targetCard.style.opacity = "";
                          }, 50);
                        }, 300);
                      }
                    }}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold step-indicator ${
                        index === 0
                          ? "bg-gradient-to-r from-primary-600 to-primary-500"
                          : "bg-gray-300"
                      }`}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      {step}
                    </motion.div>
                    <div
                      className={`text-xs font-medium step-title ${
                        index === 0 ? "text-primary-600" : "text-gray-500"
                      }`}
                    >
                      {index === 0
                        ? "Konsultacja"
                        : index === 1
                        ? "Projektowanie"
                        : index === 2
                        ? "Wdrożenie"
                        : "Wsparcie"}
                    </div>
                  </motion.div>
                ))}

                {/* Loading bar between points */}
                <div
                  className="absolute top-5 left-0 right-0 h-1 bg-gray-200/50 -z-1"
                  style={{
                    left: "25px",
                    right: "25px",
                    margin: "0 auto",
                    borderRadius: "9999px",
                  }}
                >
                  <motion.div
                    id="process-progress-bar"
                    className="h-full bg-gradient-to-r from-primary-600 via-accent-500 to-primary-400 rounded-full shadow-lg"
                    initial={{ width: "0%" }}
                    animate={{ width: "0%" }}
                    style={{
                      width: "0%",
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                      transition: "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </div>
              </div>

              {/* Cards */}
              <div className="relative h-96 perspective">
                {[
                  {
                    title: "Konsultacja",
                    desc: "Poznajemy Twoje potrzeby, cele i oczekiwania. Przeprowadzamy dokładny wywiad, aby zrozumieć Twoją wizję i zaplanować najlepsze rozwiązanie.",
                    icon: "🔍",
                    color: "from-blue-500 to-blue-400",
                    features: [
                      "Analiza wymagań projektu",
                      "Badanie grupy docelowej",
                      "Określenie celów biznesowych",
                      "Ustalenie harmonogramu działań",
                    ],
                  },
                  {
                    title: "Projektowanie",
                    desc: "Tworzymy projekty graficzne dopasowane do Twojej marki. Dbamy o każdy detal, ergonomię i przyjazność dla użytkownika.",
                    icon: "✏️",
                    color: "from-purple-500 to-purple-400",
                    features: [
                      "Moodboard i kierunek stylistyczny",
                      "Szkice interfejsu użytkownika",
                      "Prototypowanie i testy",
                      "Dopracowanie ostatecznego designu",
                    ],
                  },
                  {
                    title: "Wdrożenie",
                    desc: "Przekształcamy projekty w funkcjonalną stronę internetową. Implementujemy wszystkie funkcje i treści zgodnie z projektem.",
                    icon: "💻",
                    color: "from-primary-500 to-primary-400",
                    features: [
                      "Kodowanie strony zgodne ze standardami",
                      "Optymalizacja pod kątem wydajności",
                      "Testowanie na różnych urządzeniach",
                      "Wdrożenie i konfiguracja",
                    ],
                  },
                  {
                    title: "Wsparcie",
                    desc: "Zapewniamy ciągłe wsparcie i rozwój Twojej strony. Monitorujemy wydajność i reagujemy na zmieniające potrzeby.",
                    icon: "🚀",
                    color: "from-accent-500 to-accent-400",
                    features: [
                      "Regularne aktualizacje i poprawki",
                      "Monitorowanie wydajności",
                      "Analityka i optymalizacja",
                      "Rozwój i nowe funkcjonalności",
                    ],
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className={`absolute top-0 left-0 right-0 process-card ${
                      index === 0 ? "block" : "hidden"
                    }`}
                    initial={{ opacity: 0, rotateY: -10, z: -100 }}
                    animate={{ opacity: 1, rotateY: 0, z: 0 }}
                    exit={{ opacity: 0, rotateY: 10, z: -100 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 0.5,
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
                      <div
                        className={`h-2 bg-gradient-to-r ${step.color}`}
                      ></div>
                      <div className="p-8">
                        <div className="flex flex-col md:flex-row md:items-start mb-6">
                          <motion.div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} text-white text-3xl flex items-center justify-center shadow-lg mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0`}
                            whileHover={{
                              scale: 1.1,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 },
                            }}
                          >
                            {step.icon}
                          </motion.div>
                          <div>
                            <h3
                              className={`text-2xl font-bold mb-2 font-serif bg-clip-text text-transparent bg-gradient-to-r ${
                                index === 0
                                  ? "from-blue-700 to-blue-500"
                                  : index === 1
                                  ? "from-purple-700 to-purple-500"
                                  : index === 2
                                  ? "from-primary-700 to-primary-500"
                                  : "from-accent-700 to-accent-500"
                              } animate-gradient text-center md:text-left`}
                            >
                              Krok {index + 1}: {step.title}
                            </h3>
                            <p className="text-secondary-600 text-center md:text-left">
                              {step.desc}
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 space-y-4">
                          {step.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                            >
                              <svg
                                className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Minimalistic navigation buttons */}
                        <div className="mt-8 flex justify-end space-x-4">
                          <motion.button
                            className={`w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 ${
                              index === 0
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-100 cursor-pointer"
                            }`}
                            whileHover={index > 0 ? { scale: 1.1 } : {}}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (index > 0) {
                                // Przejdź do poprzedniej karty
                                document
                                  .querySelectorAll(".step-indicator")
                                  [index - 1].click();
                              }
                            }}
                          >
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                              ></path>
                            </svg>
                          </motion.button>
                          <motion.button
                            className={`w-8 h-8 rounded-full flex items-center justify-center bg-primary-500 text-white ${
                              index === 3
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-primary-600 cursor-pointer"
                            }`}
                            whileHover={index < 3 ? { scale: 1.1 } : {}}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (index < 3) {
                                // Przejdź do następnej karty
                                document
                                  .querySelectorAll(".step-indicator")
                                  [index + 1].click();
                              }
                            }}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              ></path>
                            </svg>
                          </motion.button>
                        </div>

                        {/* Card decoration elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                          <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill={
                                index === 0
                                  ? "#3b82f6"
                                  : index === 1
                                  ? "#8b5cf6"
                                  : index === 2
                                  ? "#0891b2"
                                  : "#f59e0b"
                              }
                              d="M45.9,-77.2C60.3,-69.2,73.5,-59.2,81.7,-45.6C89.9,-32,93,-14.9,91.8,1.3C90.6,17.5,85.1,33,76.3,46.2C67.5,59.5,55.3,70.6,41.5,78.3C27.7,86,13.9,90.5,-0.9,92C-15.7,93.4,-31.4,91.9,-42.7,83.9C-53.9,76,-60.7,61.5,-62.7,47.1C-64.7,32.6,-62,18.2,-63.9,3.9C-65.8,-10.4,-72.3,-20.8,-70.9,-30.9C-69.5,-41,-60.3,-50.7,-48.8,-59.2C-37.3,-67.7,-23.6,-74.8,-8.6,-76.9C6.5,-79,22.9,-76.2,37.5,-77.1C52.1,-78.1,65,-79,45.9,-77.2Z"
                              transform="translate(100 100)"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section py-20 md:py-32 bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20 relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-300 relative z-10 leading-snug pb-2">
                Co mówią o nas klienci?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto relative z-10 mt-4">
                Naszym największym sukcesem są zadowoleni klienci, którzy
                chętnie polecają nasze usługi innym.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 h-full flex flex-col hover:bg-white/20 transition-colors duration-300 transform hover:scale-105 hover:shadow-xl">
                    <div className="mb-4 text-primary-300 text-4xl">"</div>
                    <p className="text-white/90 italic mb-6 flex-grow">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 rounded-full opacity-30 blur-3xl -z-10"></div>

          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white/10"
                      animate={{
                        y: [0, -30, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: Math.random() * 8 + 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5,
                      }}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 200 + 50}px`,
                        height: `${Math.random() * 200 + 50}px`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gradient animate-gradient relative z-10 leading-tight">
                    Gotowy na stworzenie czegoś
                    <br />
                    naprawdę wyjątkowego?
                  </h2>
                  <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto relative z-10">
                    Dołącz do grona zadowolonych klientów i pozwól nam
                    przekształcić Twoją wizję w rzeczywistość. Razem stworzymy
                    coś niepowtarzalnego!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to="/contact"
                      className="btn btn-xl bg-white text-primary-600 hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 group inline-flex items-center"
                    >
                      Rozpocznijmy współpracę
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                    <Link
                      to="/services"
                      className="btn btn-xl bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
                    >
                      Zobacz nasze usługi
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

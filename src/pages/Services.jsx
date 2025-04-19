import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = [
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
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: "Tworzenie Stron WWW",
      description:
        "Niestandardowe strony internetowe i aplikacje internetowe tworzone przy użyciu nowoczesnych technologii i najlepszych praktyk.",
      features: [
        "Responsywny design",
        "Kompatybilność z różnymi przeglądarkami",
        "Optymalizacja SEO",
        "Optymalizacja wydajności",
      ],
      gradient: "from-primary-600 to-primary-400",
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
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: "Rozwiązania Mobilne",
      description:
        "Strony i aplikacje zoptymalizowane pod kątem urządzeń mobilnych i interakcji dotykowych.",
      features: [
        "Podejście mobile-first",
        "Interfejsy przyjazne dotykowo",
        "Aplikacje progresywne (PWA)",
        "Kompatybilność z różnymi platformami",
      ],
      gradient: "from-blue-600 to-primary-500",
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
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
      title: "Sklepy Internetowe",
      description:
        "Pełnofunkcyjne sklepy internetowe z bezpiecznym przetwarzaniem płatności i zarządzaniem zapasami.",
      features: [
        "Bezpieczna integracja płatności",
        "Zarządzanie zapasami",
        "Przetwarzanie zamówień",
        "Analityka klientów",
      ],
      gradient: "from-primary-600 to-accent-500",
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
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      title: "Marketing Cyfrowy",
      description:
        "Kompleksowe rozwiązania marketingu cyfrowego, które zwiększają Twoją obecność online.",
      features: [
        "Optymalizacja SEO",
        "Marketing w mediach społecznościowych",
        "Strategia treści",
        "Analityka i raportowanie",
      ],
      gradient: "from-accent-500 to-accent-300",
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
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      title: "Bezpieczeństwo",
      description:
        "Środki bezpieczeństwa klasy korporacyjnej chroniące Twoje cyfrowe zasoby.",
      features: [
        "Certyfikaty SSL",
        "Audyty bezpieczeństwa",
        "Ochrona danych",
        "Regularne aktualizacje",
      ],
      gradient: "from-purple-600 to-primary-400",
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
      title: "Optymalizacja Wydajności",
      description:
        "Optymalizacja wydajności Twojej strony dla lepszego doświadczenia użytkownika i wyższych pozycji w rankingach.",
      features: [
        "Optymalizacja szybkości",
        "Rozwiązania cachingowe",
        "Integracja CDN",
        "Monitorowanie wydajności",
      ],
      gradient: "from-primary-500 to-blue-600",
    },
  ];

  // Referencja do głównego kontenera i sekcji hero
  const mainRef = useRef(null);
  const heroRef = useRef(null);

  // Pobieramy pozycję scrollowania
  const { scrollY } = useScroll();

  // Precyzyjne transformacje dla efektu parallax
  const backgroundY = useTransform(scrollY, [0, 800], ["0%", "40%"]);
  const backgroundScale = useTransform(scrollY, [0, 800], [1, 1.5]);
  const backgroundOpacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  // Powolna animacja gradientu dla płynnego efektu
  const [gradientAngle, setGradientAngle] = useState(120);

  useEffect(() => {
    // Wolniejsza zmiana kąta gradientu, aby nie powodować lagów
    const interval = setInterval(() => {
      setGradientAngle((prev) => {
        const newAngle = prev + 0.05;
        return newAngle >= 360 ? 0 : newAngle;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Animacja dla elementów strony
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Usługi tworzenia stron www | PageUP</title>
        <meta
          name="description"
          content="Kompleksowe usługi: tworzenie stron internetowych, strony WordPress, no-code, headless, optymalizacja SEO. Agencja webowa PageUP – nowoczesne rozwiązania dla firm."
        />
        <meta
          name="keywords"
          content="tworzenie stron internetowych, strony www dla firm, strony WordPress, projektowanie stron, agencja webowa, strona internetowa dla firm, nowoczesne strony www, usługi webowe"
        />
        <link rel="canonical" href="https://pageup.pl/uslugi" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Usługi tworzenia stron www | PageUP"
        />
        <meta
          property="og:description"
          content="Kompleksowe usługi: tworzenie stron internetowych, strony WordPress, no-code, headless, optymalizacja SEO. Agencja webowa PageUP – nowoczesne rozwiązania dla firm."
        />
        <meta property="og:url" content="https://pageup.pl/uslugi" />
        <meta property="og:image" content="https://pageup.pl/logo-title.png" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="PageUP" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Usługi tworzenia stron www | PageUP"
        />
        <meta
          name="twitter:description"
          content="Kompleksowe usługi: tworzenie stron internetowych, strony WordPress, no-code, headless, optymalizacja SEO. Agencja webowa PageUP – nowoczesne rozwiązania dla firm."
        />
        <meta name="twitter:image" content="https://pageup.pl/logo-title.png" />
        {/* Structured Data: Service */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tworzenie stron internetowych, strony www dla firm, strony WordPress, projektowanie stron, agencja webowa, strona internetowa dla firm, usługi webowe",
            "provider": {
              "@type": "Organization",
              "name": "PageUP",
              "url": "https://pageup.pl/"
            },
            "areaServed": ["PL", "EU"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://pageup.pl/uslugi"
            }
          }
        `}</script>
      </Helmet>
      <div className="relative min-h-screen" ref={mainRef}>
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
          {/* Animowane elementy tła */}
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative z-10 leading-snug pb-2 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500">
                Nasze Usługi
              </h1>
              <p className="max-w-2xl mx-auto mb-8 text-xl font-light text-white/90">
                Kompleksowe rozwiązania cyfrowe dla potrzeb Twojego biznesu
              </p>
            </motion.div>
          </div>
        </section>

        {/* Static decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large gradient circles */}
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-primary-50/20 to-accent-50/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-tr from-accent-50/20 to-primary-50/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

          {/* Diagonal stripes pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] -z-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
            }}
          ></div>

          {/* Decorative squares */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-primary-100/30 rounded-xl transform rotate-12 -z-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 border-2 border-accent-100/30 rounded-xl transform -rotate-12 -z-10"></div>

          {/* Additional gradient shapes */}
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-primary-100/20 to-transparent rounded-full blur-xl -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tr from-accent-100/20 to-transparent rounded-full blur-xl -z-10"></div>

          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-50/10 to-transparent -z-10"></div>
          <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-accent-50/10 to-transparent -z-10"></div>

          {/* Additional decorative elements */}
          <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary-100/30 rounded-full transform rotate-45 -z-10"></div>
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-accent-100/30 transform rotate-12 -z-10"></div>

          {/* Decorative lines */}
          <div className="absolute top-1/4 right-1/4 w-96 h-1 bg-gradient-to-r from-primary-100/30 to-transparent transform rotate-45 -z-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-1 bg-gradient-to-r from-accent-100/30 to-transparent transform -rotate-45 -z-10"></div>
        </div>

        <div className="relative py-24 z-10">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-2xl bg-gradient-to-br from-primary-100/30 to-accent-100/30"
                animate={{
                  y: [0, -50, 0],
                  x: [0, 50, 0],
                  rotate: [0, 180, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: Math.random() * 15 + 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 120 + 60}px`,
                  height: `${Math.random() * 120 + 60}px`,
                }}
              />
            ))}
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 rounded-full opacity-30 blur-3xl -z-10"></div>

          <div className="container-custom">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  custom={index}
                  className="relative z-10"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="card h-full flex flex-col group hover:border-primary-500 border border-transparent transition-all duration-300 hover:shadow-xl animated-bg">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="text-primary-600 mb-6 w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto group-hover:bg-primary-100 transition-colors duration-300"
                    >
                      {service.icon}
                    </motion.div>
                    <h3
                      className={`text-xl font-serif font-bold mb-4 text-center group-hover:text-primary-600 transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 text-center mb-6 px-6">
                      {service.description}
                    </p>
                    <div className="space-y-2 px-8 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.1 * featureIndex + 0.3,
                            duration: 0.3,
                          }}
                          className="flex items-center text-secondary-700"
                        >
                          <span className={`text-primary-500 mr-2`}>•</span>
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-24 text-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white p-10 rounded-xl shadow-lg relative z-10 overflow-hidden"
            >
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

              <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-6 leading-snug pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-300">
                  Gotowy na współpracę?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto mt-4 text-white/80">
                  Skontaktuj się z nami, aby omówić, jak możemy pomóc Twojemu
                  biznesowi osiągnąć sukces online.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

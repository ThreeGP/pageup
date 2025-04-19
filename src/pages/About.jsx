import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  const values = [
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
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      title: "Innowacja",
      description:
        "Ciągle eksplorujemy nowe technologie i kreatywne rozwiązania, aby być na bieżąco z najnowszymi trendami.",
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Współpraca",
      description:
        "Wierzymy w siłę pracy zespołowej i otwartej komunikacji, które pozwalają osiągać wyjątkowe rezultaty.",
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
      title: "Rozwój",
      description:
        "Jesteśmy zaangażowani w ciągłe doskonalenie naszych umiejętności i pomoc naszym klientom w rozwoju ich firm.",
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
      title: "Zaufanie",
      description:
        "Budujemy trwałe relacje oparte na zaufaniu, przejrzystości i niezawodności.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>O nas – Agencja webowa PageUP</title>
        <meta
          name="description"
          content="Poznaj zespół PageUP – nowoczesna agencja webowa. Tworzymy strony internetowe, WordPress, no-code, custom. Doświadczenie, pasja, skuteczność."
        />
        <meta
          name="keywords"
          content="o nas, agencja webowa, zespół, tworzenie stron internetowych, strony www dla firm, strony WordPress, projektowanie stron, strona internetowa dla firm"
        />
        <link rel="canonical" href="https://pageup.pl/o-nas" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="O nas – Agencja webowa PageUP" />
        <meta
          property="og:description"
          content="Poznaj zespół PageUP – nowoczesna agencja webowa. Tworzymy strony internetowe, WordPress, no-code, custom. Doświadczenie, pasja, skuteczność."
        />
        <meta property="og:url" content="https://pageup.pl/o-nas" />
        <meta property="og:image" content="https://pageup.pl/logo-title.png" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="PageUP" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O nas – Agencja webowa PageUP" />
        <meta
          name="twitter:description"
          content="Poznaj zespół PageUP – nowoczesna agencja webowa. Tworzymy strony internetowe, WordPress, no-code, custom. Doświadczenie, pasja, skuteczność."
        />
        <meta name="twitter:image" content="https://pageup.pl/logo-title.png" />
        {/* Structured Data: AboutPage */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "O nas PageUP",
            "description": "O nas – agencja webowa PageUP",
            "url": "https://pageup.pl/o-nas"
          }
        `}</script>
      </Helmet>
      <div className="page-transition">
        {/* Static decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large geometric shapes */}
          <div className="absolute -top-1/2 -left-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-primary-50/20 to-accent-50/20 transform rotate-45 -z-10"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-accent-50/20 to-primary-50/20 transform rotate-12 -z-10"></div>

          {/* Hexagon pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] -z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23000' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>

          {/* Decorative lines */}
          <div className="absolute top-1/4 right-1/4 w-96 h-1 bg-gradient-to-r from-primary-100/20 to-transparent transform rotate-45 -z-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-1 bg-gradient-to-r from-accent-100/20 to-transparent transform -rotate-45 -z-10"></div>

          {/* Additional shapes */}
          <div className="absolute top-1/2 right-1/3 w-48 h-48 border-2 border-primary-100/20 rounded-full -z-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border-2 border-accent-100/20 transform rotate-45 -z-10"></div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-50/10 to-transparent -z-10"></div>
          <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-accent-50/10 to-transparent -z-10"></div>

          {/* Floating elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-full blur-xl transform rotate-12 -z-10"></div>
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-tr from-accent-100/20 to-primary-100/20 rounded-full blur-xl transform -rotate-12 -z-10"></div>

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>

          {/* Additional decorative elements */}
          <div className="absolute top-1/4 left-1/3 w-48 h-48 border border-primary-100/20 rounded-full transform rotate-45 -z-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border border-accent-100/20 transform rotate-12 -z-10"></div>

          {/* Animated gradient shapes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-primary-50/20 to-accent-50/20 animate-float -z-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 30 + 20}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-700">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>

          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-primary-800/30 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 relative z-10 leading-snug animate-gradient bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                Nasza Historia
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-white/90 relative z-10">
                Jesteśmy grupą uczniów z kierunku Technik Programista,
                pasjonatów tworzenia stron internetowych i aplikacji webowych,
                którzy postanowili połączyć swoją wiedzę i umiejętności w
                projekcie PageUp.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            {/* About Us Content */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gradient-blue relative z-10 leading-snug"
                  >
                    Młodzi programiści z pasją do tworzenia
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-secondary-600 mb-6 relative z-10"
                  >
                    Jako uczniowie technikum na kierunku Technik Programista,
                    łączymy teoretyczną wiedzę zdobytą w szkole z praktycznymi
                    umiejętnościami, które rozwijamy w trakcie dodatkowych
                    projektów.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-secondary-600 mb-6 relative z-10"
                  >
                    Naszą misją jest tworzenie nowoczesnych, funkcjonalnych i
                    estetycznych stron internetowych, które pomagają firmom
                    zaistnieć w świecie cyfrowym. Łączymy najnowsze technologie
                    z kreatywnymi pomysłami, aby dostarczać rozwiązania, które
                    nie tylko świetnie wyglądają, ale również spełniają swoje
                    cele biznesowe.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-secondary-600 relative z-10"
                  >
                    Choć jesteśmy na początku naszej zawodowej drogi, to nasza
                    pasja, zaangażowanie i świeże spojrzenie pozwalają nam
                    tworzyć projekty, które wyróżniają się na tle konkurencji.
                    Każdy projekt traktujemy jako okazję do nauki i doskonalenia
                    naszych umiejętności.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-accent-200 rounded-2xl rotate-3 transform scale-105 opacity-20"></div>
                  <motion.div
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                  >
                    <img
                      src="/about-image.jpg"
                      alt="Zespół PageUp"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Values Section */}
            <div className="relative pt-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20 relative z-10"
              >
                <div className="inline-block px-4 py-1 mb-5 bg-primary-50 rounded-full text-primary-600 text-sm font-medium relative z-20">
                  Nasze Wartości
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gradient-alt relative z-10 leading-snug animate-gradient">
                  Co jest dla nas ważne
                </h2>
                <p className="text-lg text-secondary-600 max-w-2xl mx-auto relative z-10">
                  Nasz zespół kieruje się wartościami, które odzwierciedlają
                  nasze podejście do pracy i relacji z klientami.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <div className="card h-full flex flex-col group hover:border-primary-500 border border-transparent transition-all duration-300 hover:shadow-xl hover-glow relative z-10 bg-white">
                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-primary-600 mb-6 w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto group-hover:bg-primary-100 transition-colors duration-300"
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 text-center font-serif group-hover:text-primary-600 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-secondary-600 text-center px-6">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-24 p-8 md:p-12 bg-secondary-50 rounded-3xl relative overflow-hidden animated-bg"
            >
              <div className="absolute inset-0 bg-pattern opacity-5"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="inline-block px-4 py-1 mb-5 bg-white rounded-full text-primary-600 text-sm font-medium relative z-10">
                      Nasza Edukacja
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gradient-purple relative z-10 leading-snug">
                      Technik Programista - nasza droga zawodowa
                    </h2>
                    <p className="text-secondary-700 relative z-10">
                      Jako uczniowie technikum na kierunku Technik Programista,
                      zdobywamy kompleksowe wykształcenie w zakresie
                      programowania, projektowania baz danych, tworzenia
                      aplikacji webowych i mobilnych oraz wiele innych
                      umiejętności technicznych. Wiedzę teoretyczną uzupełniamy
                      praktycznymi projektami, takimi jak PageUp, które
                      pozwalają nam rozwijać nasze umiejętności w rzeczywistym
                      środowisku.
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="shrink-0 relative z-10"
                  >
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gradient-primary">
                            Technikum
                          </h3>
                          <p className="text-secondary-600">
                            Kierunek: Technik Programista
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

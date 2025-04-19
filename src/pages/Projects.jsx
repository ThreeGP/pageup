import React from "react";
import { Helmet } from "react-helmet-async";

function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Montaż kuchni nowoczesnej",
      description:
        "Kompleksowy montaż nowoczesnej kuchni wraz z wyspą i sprzętem AGD.",
      category: "Kuchnie",
      location: "Czeladź",
      imageUrl: "https://placehold.co/800x600/e6e6e6/808080?text=Kuchnia+1",
    },
    {
      id: 2,
      title: "Remont łazienki",
      description:
        "Pełen remont łazienki, wymiana płytek, armatury i montaż nowej kabiny prysznicowej.",
      category: "Remonty",
      location: "Będzin",
      imageUrl: "https://placehold.co/800x600/e6e6e6/808080?text=Łazienka",
    },
    {
      id: 3,
      title: "Wymiana okien",
      description:
        "Demontaż starych okien i montaż nowych okien PCV z trzyszybowymi pakietami.",
      category: "Stolarka",
      location: "Sosnowiec",
      imageUrl: "https://placehold.co/800x600/e6e6e6/808080?text=Okna",
    },
    {
      id: 4,
      title: "Kuchnia klasyczna",
      description:
        "Montaż klasycznej kuchni z frontami drewnianymi i blatem kamiennym.",
      category: "Kuchnie",
      location: "Dąbrowa Górnicza",
      imageUrl: "https://placehold.co/800x600/e6e6e6/808080?text=Kuchnia+2",
    },
    {
      id: 5,
      title: "Adaptacja poddasza",
      description:
        "Kompleksowa adaptacja poddasza na cele mieszkalne, łącznie z ociepleniem i wykończeniem.",
      category: "Kompleksowe remonty",
      location: "Katowice",
      imageUrl: "https://placehold.co/800x600/e6e6e6/808080?text=Poddasze",
    },
    {
      id: 6,
      title: "Wymiana drzwi wewnętrznych",
      description:
        "Demontaż starych i montaż nowych drzwi wewnętrznych w całym mieszkaniu.",
      category: "Stolarka",
      location: "Czeladź",
      imageUrl: "https://placehold.co/800x600/e6e6e6/808080?text=Drzwi",
    },
  ];

  // Categories for filtering (dynamically generated from projects)
  const categories = [
    "Wszystkie",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <>
      <Helmet>
        <title>Projekty stron internetowych | PageUP</title>
        <meta
          name="description"
          content="Nasze projekty: strony internetowe dla firm, sklepy, WordPress, no-code, custom. Zobacz jak PageUP realizuje nowoczesne strony www dla biznesu."
        />
        <meta
          name="keywords"
          content="projekty, strony internetowe, strony www dla firm, projekty WordPress, agencja webowa, nowoczesne strony www"
        />
        <link rel="canonical" href="https://pageup.pl/projekty" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Projekty stron internetowych | PageUP"
        />
        <meta
          property="og:description"
          content="Nasze projekty: strony internetowe dla firm, sklepy, WordPress, no-code, custom. Zobacz jak PageUP realizuje nowoczesne strony www dla biznesu."
        />
        <meta property="og:url" content="https://pageup.pl/projekty" />
        <meta property="og:image" content="https://pageup.pl/logo-title.png" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="PageUP" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projekty stron internetowych | PageUP"
        />
        <meta
          name="twitter:description"
          content="Nasze projekty: strony internetowe dla firm, sklepy, WordPress, no-code, custom. Zobacz jak PageUP realizuje nowoczesne strony www dla biznesu."
        />
        <meta name="twitter:image" content="https://pageup.pl/logo-title.png" />
        {/* Structured Data: CollectionPage */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Projekty PageUP",
            "description": "Projekty stron internetowych PageUP",
            "url": "https://pageup.pl/projekty"
          }
        `}</script>
      </Helmet>
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Nasze Realizacje
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Poniżej prezentujemy wybrane projekty, które zrealizowaliśmy dla
            naszych klientów. Każda realizacja to połączenie profesjonalizmu,
            jakości i dbałości o szczegóły.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-yellow-400 hover:text-white transition duration-300 focus:outline-none"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold mb-4">
              Masz projekt do realizacji?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić Twoje potrzeby i otrzymać
              bezpłatną wycenę. Nasz zespół jest gotowy, aby pomóc Ci w
              realizacji Twojego projektu.
            </p>
            <a href="/kontakt" className="btn btn-primary inline-block">
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

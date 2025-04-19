import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TrustedCompany = () => {
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

  const trustedCompanies = [
    {
      name: "TechCorp",
      logo: "/company-logos/techcorp.png",
      website: "https://techcorp.com",
    },
    {
      name: "InnovaSolutions",
      logo: "/company-logos/innovasolutions.png",
      website: "https://innovasolutions.com",
    },
    {
      name: "DigitalPro",
      logo: "/company-logos/digitalpro.png",
      website: "https://digitalpro.com",
    },
    {
      name: "FutureWorks",
      logo: "/company-logos/futureworks.png",
      website: "https://futureworks.com",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanyIndex(
        (prevIndex) => (prevIndex + 1) % trustedCompanies.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-gradient animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-300">
          Zaufali nam
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20 blur-3xl" />
        <div className="relative z-10 w-96 max-w-4xl mx-auto filter drop-shadow-lg hover:drop-shadow-xl transition-shadow duration-300 bg-white/10 backdrop-blur-sm p-16 rounded-2xl border border-white/20">
          <div className="border-2 border-dashed border-white/40 rounded-xl p-12 text-white/90 flex items-center justify-center h-[450px] relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.a
                key={currentCompanyIndex}
                href={trustedCompanies[currentCompanyIndex].website}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center hover:bg-white/5 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="h-40 flex items-center justify-center mb-8">
                    <img
                      src={trustedCompanies[currentCompanyIndex].logo}
                      alt={`${trustedCompanies[currentCompanyIndex].name} logo`}
                      className="max-w-[320px] max-h-[160px] w-auto h-auto filter brightness-0 invert opacity-80 transition-all duration-300 hover:opacity-100"
                    />
                  </div>
                  <h3 className="text-3xl font-semibold text-white/90">
                    {trustedCompanies[currentCompanyIndex].name}
                  </h3>
                </div>
              </motion.a>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;

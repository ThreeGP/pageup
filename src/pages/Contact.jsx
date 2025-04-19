import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [showSendOptions, setShowSendOptions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({
        type: "error",
        message: "Wypełnij wszystkie pola formularza.",
      });
      return;
    }

    // Show send options panel instead of immediately sending
    setShowSendOptions(true);
    setStatus({ type: "info", message: "Wybierz sposób wysłania wiadomości" });
  };

  const sendViaMailto = () => {
    try {
      const mailtoLink = `mailto:pageupeu@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Imię: ${formData.name}\nEmail: ${formData.email}\n\nWiadomość:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setStatus({
        type: "success",
        message: "Przekierowanie do klienta pocztowego...",
      });

      // Clear form after small delay
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Przepraszamy, wystąpił błąd. Spróbuj ponownie później.",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setStatus({ type: "", message: "" });
    setShowSendOptions(false);
  };

  const contactInfo = [
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Numer Telefonu",
      content: "+48 664 109 616\n+48 577 335 477",
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
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Adres Email",
      content: "pageupeu@gmail.com",
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
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Godziny Pracy",
      content: "Poniedziałek - Piątek: 9:00 - 17:00\nSobota: 10:00 - 14:00",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt z agencją webową | PageUP</title>
        <meta
          name="description"
          content="Skontaktuj się z nami – PageUP. Tworzenie stron internetowych, WordPress, no-code, custom. Szybka wycena, doradztwo, wsparcie dla firm w Polsce i UE."
        />
        <meta
          name="keywords"
          content="kontakt, agencja webowa, tworzenie stron internetowych, strony www dla firm, strony WordPress, projektowanie stron, strona internetowa dla firm"
        />
        <link rel="canonical" href="https://pageup.pl/kontakt" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kontakt z agencją webową | PageUP" />
        <meta
          property="og:description"
          content="Skontaktuj się z nami – PageUP. Tworzenie stron internetowych, WordPress, no-code, custom. Szybka wycena, doradztwo, wsparcie dla firm w Polsce i UE."
        />
        <meta property="og:url" content="https://pageup.pl/kontakt" />
        <meta property="og:image" content="https://pageup.pl/logo-title.png" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="PageUP" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kontakt z agencją webową | PageUP"
        />
        <meta
          name="twitter:description"
          content="Skontaktuj się z nami – PageUP. Tworzenie stron internetowych, WordPress, no-code, custom. Szybka wycena, doradztwo, wsparcie dla firm w Polsce i UE."
        />
        <meta name="twitter:image" content="https://pageup.pl/logo-title.png" />
        {/* Structured Data: ContactPage */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Kontakt PageUP",
            "description": "Kontakt do agencji webowej PageUP",
            "url": "https://pageup.pl/kontakt"
          }
        `}</script>
      </Helmet>
      <div className="relative min-h-screen bg-white">
        {/* Static decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large gradient circles */}
          <div className="absolute -top-1/2 -right-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-primary-50/20 to-accent-50/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-accent-50/20 to-primary-50/20 rounded-full blur-3xl -z-10"></div>

          {/* Subtle patterns */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
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
        <div className="relative py-20 z-10 mt-10">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gradient-alt animate-gradient relative z-10 leading-snug pb-2">
                Kontakt
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto relative z-10 mt-4">
                Skontaktuj się z nami w sprawie pytań lub zapytań
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
              {/* Contact Information */}
              <div className="lg:col-span-4">
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="card group hover:border-primary-500 border border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-x-1 bg-white">
                        <div className="flex items-start p-6">
                          <div className="text-primary-600 mr-4 group-hover:scale-110 transition-transform duration-300">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 font-serif group-hover:text-primary-600 transition-colors duration-300">
                              {info.title}
                            </h3>
                            <p className="text-secondary-600 whitespace-pre-line">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold mb-4 font-serif">
                    Obserwuj nas
                  </h3>
                  <div className="flex space-x-3">
                    {[
                      { icon: "facebook", href: "#" },
                      { icon: "twitter", href: "#" },
                      { icon: "instagram", href: "#" },
                      { icon: "linkedin", href: "#" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{social.icon}</span>
                        {social.icon === "facebook" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        )}
                        {social.icon === "twitter" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        )}
                        {social.icon === "instagram" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        )}
                        {social.icon === "linkedin" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="card bg-gradient-to-br from-white to-secondary-50 p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="form-label">
                            Twoje Imię
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="Jan Kowalski"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="form-label">
                            Adres Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="jan.kowalski@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="form-label">
                          Temat
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="W czym możemy pomóc?"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="form-label">
                          Wiadomość
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Twoja wiadomość..."
                        ></textarea>
                      </div>
                      <div>
                        {status.message && (
                          <div
                            className={`text-center p-3 rounded-lg mb-4 ${
                              status.type === "success"
                                ? "bg-green-100 text-green-700"
                                : status.type === "error"
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {status.message}
                          </div>
                        )}
                        {!showSendOptions ? (
                          <button
                            type="submit"
                            className="btn bg-gradient-to-r from-primary-600 to-primary-500 text-white w-full hover:from-primary-500 hover:to-primary-400 shadow-md hover:shadow-lg hover:shadow-primary-500/20 transform hover:scale-[1.01] transition-all duration-300"
                          >
                            Wyślij Wiadomość
                          </button>
                        ) : (
                          <div className="space-y-4">
                            <button
                              type="button"
                              onClick={sendViaMailto}
                              className="btn bg-gradient-to-r from-primary-600 to-primary-500 text-white w-full hover:from-primary-500 hover:to-primary-400 shadow-md hover:shadow-lg hover:shadow-primary-500/20 transform hover:scale-[1.01] transition-all duration-300"
                            >
                              Wyślij przez klienta pocztowego
                            </button>
                            <button
                              type="button"
                              onClick={resetForm}
                              className="btn bg-gradient-to-r from-secondary-600 to-secondary-500 text-white w-full hover:from-secondary-500 hover:to-secondary-400 shadow-md hover:shadow-lg hover:shadow-secondary-500/20 transform hover:scale-[1.01] transition-all duration-300"
                            >
                              Anuluj
                            </button>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 relative rounded-xl overflow-hidden h-96 shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438422285!2d20.92111263441431!3d52.233065592519855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1655823461702!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja PageUp"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

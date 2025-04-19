import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundEffect from "./BackgroundEffect";

function Layout({ children }) {
  const location = useLocation();

  // Determine which background variant to use based on the current route
  const getBackgroundVariant = () => {
    const path = location.pathname;

    if (path === "/" || path === "/home") return "home";
    if (path.includes("/about")) return "about";
    if (path.includes("/services")) return "services";
    if (path.includes("/portfolio") || path.includes("/projects"))
      return "portfolio";
    if (path.includes("/contact")) return "contact";

    return "default";
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffect variant={getBackgroundVariant()} />
      <Header />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

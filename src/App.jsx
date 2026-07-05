import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { useReveal } from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <span>{t.footer}</span>
    </footer>
  );
}

function Page() {
  const { lang } = useLanguage();
  useReveal([lang]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}

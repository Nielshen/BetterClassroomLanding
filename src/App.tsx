'use client'

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ImageGallery from './components/ImageGallery';
import { ChevronRight, Hand, Users, LayoutDashboard, Menu } from "lucide-react";
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import AGB from './components/AGB';
import { motion } from "framer-motion";

const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white dark:bg-gray-900 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="flex items-center justify-center" to="/">
          <LayoutDashboard className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">BetterClassroom</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link 
            className="text-sm font-medium hover:text-primary transition-colors" 
            to="/"
            onClick={() => scrollToSection('features')}
          >
            Funktionen
          </Link>
          <Link 
            className="text-sm font-medium hover:text-primary transition-colors" 
            to="/"
            onClick={() => scrollToSection('contact')}
          >
            Kontakt
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md p-4 md:hidden"
        >
          <Link 
            className="block py-2 text-sm font-medium hover:text-primary transition-colors" 
            to="/"
            onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }}
          >
            Funktionen
          </Link>
          <Link 
            className="block py-2 text-sm font-medium hover:text-primary transition-colors" 
            to="/"
            onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
          >
            Kontakt
          </Link>
        </motion.div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="w-full py-6 px-4 md:px-6 border-t">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <p className="text-xs text-gray-500 dark:text-gray-400">2024 BetterClassroom</p>
      <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
        <Link className="text-xs hover:text-primary transition-colors" to="/datenschutz">
          Datenschutz
        </Link>
        <Link className="text-xs hover:text-primary transition-colors" to="/agb">
          Nutzungsbedingungen
        </Link>
        <Link className="text-xs hover:text-primary transition-colors" to="/impressum">
          Impressum
        </Link>
      </nav>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 sm:mt-0">
        Powered by <a href="https://webwai.de" className="hover:text-primary transition-colors">webwai</a>
      </div>
    </div>
  </footer>
);

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-white">
                Digitale Meldungen im Klassenzimmer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Revolutionieren Sie die Interaktion in Ihrem Klassenzimmer. Ermöglichen Sie Schülern, sich digital zu melden, und behalten Sie den Überblick mit unserem innovativen Dashboard.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                onClick={() => scrollToSection('contact')}
              >
                Demo anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">Unsere Funktionen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md"
            >
              <Hand className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Digitale Meldungen</h3>
              <p className="text-gray-500 dark:text-gray-300">Schüler können sich mit einem Klick melden, ohne den Unterricht zu stören.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md"
            >
              <LayoutDashboard className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Lehrer-Dashboard</h3>
              <p className="text-gray-500 dark:text-gray-300">Übersichtliches Dashboard zeigt alle aktiven Meldungen in Echtzeit.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md"
            >
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Sitzplan-Integration</h3>
              <p className="text-gray-500 dark:text-gray-300">Visualisieren Sie die Meldungen auf einem digitalen Sitzplan des Klassenzimmers.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ImageGallery />

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800 dark:text-white">Bereit für die digitale Klassenzimmer Revolution?</h2>
          <p className="text-xl text-center mb-8 text-gray-600 dark:text-gray-300">Erleben Sie BetterClassroom in Aktion. Fordern Sie jetzt Ihre persönliche Demo an!</p>
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:info@betterclassroom.de"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
            >
              Demo anfordern
            </motion.a>
            <p className="text-lg">
              <a href="mailto:info@betterclassroom.de" className="text-primary hover:underline">info@betterclassroom.de</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, School, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

import kurs from '../assets/kurs.png';
import fortischritt from '../assets/fortschritt.png';
import fortschrittFrage from '../assets/fortschrittFrageName.png';

import studentSitz from '../assets/studentSitz.png';
import studentAufgabe from '../assets/studentAufgabe.png';
import studentAufgabeFrage from '../assets/studentAufgabeFrage.png';

const images = [
  { 
    professor: kurs, 
    student: studentSitz,
    profDescription: "Anlegen von einem Kurs/Fach und Aufgaben für die Lernenden erstellen",
    studentDescription: "Sitzplatz im digitalen Klassenzimmer wählen"
  },
  { 
    professor: fortischritt, 
    student: studentAufgabe,
    profDescription: "Das Dashboard zeigt die belegten Sitzplätze und den Fortschritt der Lernenden",
    studentDescription: "Sieht seine Aufgaben"
  },
  { 
    professor: fortschrittFrage, 
    student: studentAufgabeFrage,
    profDescription: "Das Dashboard zeigt eine Übersicht der offenen Fragen",
    studentDescription: "Der Lernende hat die Möglichkeit, die Hand digital zu heben"
  },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // Changed from 5000 to 8000 for slower transitions

    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <section className="w-full py-12 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">So funktioniert's</h2>
        <div className="relative flex justify-center items-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="flex flex-col md:flex-row w-full justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
            >
              <div className="w-full md:w-2/5">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <School className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Lehrenden-Perspektive</h3>
                </div>
                <Card className="overflow-hidden shadow-lg rounded-2xl">
                  <div className="relative">
                    <img
                      src={images[currentIndex].professor}
                      alt={`Lehrenden-Ansicht ${currentIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-xs mt-1 text-gray-200">{images[currentIndex].profDescription}</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="w-full md:w-2/5">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-300" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Lernenden-Perspektive</h3>
                </div>
                <Card className="overflow-hidden shadow-lg rounded-2xl">
                  <div className="relative">
                    <img
                      src={images[currentIndex].student}
                      alt={`Lernenden-Ansicht ${currentIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-xs mt-1 text-gray-200">{images[currentIndex].studentDescription}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="text-center mt-6">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {currentIndex + 1} von {images.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
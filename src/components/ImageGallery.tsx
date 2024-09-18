import { useState } from 'react';
import { ChevronLeft, ChevronRight, School, GraduationCap } from 'lucide-react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-12 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">So funktioniert's</h2>
        <div className="relative flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="w-full md:w-2/5">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <School className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Lehrenden-Perspektive</h3>
            </div>
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={images[currentIndex].professor}
                  alt={`Lehrenden-Ansicht ${currentIndex + 1}`}
                  className="w-full h-auto object-cover"
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
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
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={images[currentIndex].student}
                  alt={`Lernenden-Ansicht ${currentIndex + 1}`}
                  className="w-full h-auto object-cover"
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-xs mt-1 text-gray-200">{images[currentIndex].studentDescription}</p>
                </div>
              </div>
            </Card>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
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
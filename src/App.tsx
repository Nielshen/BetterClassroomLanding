import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Button } from "./components/ui/button"
import ImageGallery from './components/ImageGallery';
import { ChevronRight, Hand, Users, LayoutDashboard } from "lucide-react"
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import AGB from './components/AGB'

function App() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" to="/">
            <LayoutDashboard className="h-6 w-6" />
            <span className="sr-only">ClassroomTech</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link 
              className="text-sm font-medium hover:underline underline-offset-4" 
              to="/"
              onClick={() => scrollToSection('features')}
            >
              Funktionen
            </Link>

            <Link 
              className="text-sm font-medium hover:underline underline-offset-4" 
              to="/"
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
          </Routes>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">2024 BetterClassroom</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" to="/datenschutz">
              Datenschutz
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="/agb">
              Nutzungsbedingungen
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="/impressum">
              Impressum
            </Link>
          </nav>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Powered by <a href="https://webwai.de" className="hover:underline">webwai</a>
          </div>
        </footer>
      </div>
    </Router>
  )
}

function HomePage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Digitale Meldungen im Klassenzimmer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Revolutionieren Sie die Interaktion in Ihrem Klassenzimmer. Ermöglichen Sie Schülern, sich digital zu melden, und behalten Sie den Überblick mit unserem innovativen Dashboard.
              </p>
            </div>
            <div className="space-x-4">
              <Button 
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                onClick={() => scrollToSection('contact')}
              >
                Demo anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="full-width-container w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="content-container">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Unsere Funktionen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Hand className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Digitale Meldungen</h3>
              <p className="text-gray-500 dark:text-gray-400">Schüler können sich mit einem Klick melden, ohne den Unterricht zu stören.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <LayoutDashboard className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Lehrer-Dashboard</h3>
              <p className="text-gray-500 dark:text-gray-400">Übersichtliches Dashboard zeigt alle aktiven Meldungen in Echtzeit.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Sitzplan-Integration</h3>
              <p className="text-gray-500 dark:text-gray-400">Visualisieren Sie die Meldungen auf einem digitalen Sitzplan des Klassenzimmers.</p>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      <section id="features" className="full-width-container w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">

      <ImageGallery />
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Bereit für die digitale Klassenzimmer Revolution?</h2>
          <p className="text-xl text-center mb-8">Erleben Sie BetterClassroom in Aktion. Fordern Sie jetzt Ihre persönliche Demo an!</p>
          <div className="flex flex-col items-center justify-center space-y-4">
            <a
              href="mailto:info@betterclassroom.de"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
            >
              Demo anfordern
            </a>
            <p className="text-lg">
              <a href="mailto:info@betterclassroom.de" className="text-blue-600 hover:underline">info@betterclassroom.de</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
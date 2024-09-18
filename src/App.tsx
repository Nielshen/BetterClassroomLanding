import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Textarea } from "./components/ui/textarea"
import { ChevronRight, Hand, Users, LayoutDashboard } from "lucide-react"

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Formular wurde abgesendet")
  }

  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" to="#">
            <LayoutDashboard className="h-6 w-6" />
            <span className="sr-only">ClassroomTech</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="#features">
              Funktionen
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="#contact">
              Kontakt
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
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
                  <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Demo anfordern
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    to="#contact"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Unsere Funktionen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Kontaktieren Sie uns</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Ihr Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" placeholder="ihre@email.de" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="school">Schule</Label>
                <Input id="school" placeholder="Name Ihrer Schule" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea id="message" placeholder="Ihre Nachricht oder Fragen" required />
              </div>
              <Button type="submit" className="w-full">Anfrage senden</Button>
            </form>
          </div>
        </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 ClassroomTech. Alle Rechte vorbehalten.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Datenschutz
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Nutzungsbedingungen
            </Link>
          </nav>
        </footer>
      </div>
    </Router>
  )
}

export default App
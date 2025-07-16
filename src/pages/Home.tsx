/**
 * Página principal de Fufumanía - Servicios de animación de cumpleaños
 * Incluye todos los servicios, información de contacto y animaciones divertidas
 */

import { useState, useEffect } from 'react'
import '../styles/animations.css'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Phone, 
  ChevronUp, 
  Sparkles, 
  Music, 
  Cake, 
  Gift, 
  Heart, 
  Star,
  Sun,
  Moon,
  PartyPopper,
  Rabbit,
  Wand2,
  Crown,
  FlowerIcon
} from 'lucide-react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)

  // Efecto para mostrar/ocultar el botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Función para scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 min-h-screen">
        
        {/* Header con toggle de tema */}
        <header className="fixed top-0 right-0 z-50 p-4">
          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="icon"
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://pub-cdn.sider.ai/u/U0VEHZ4R064/web-coder/6877fd15711d0815fd43d94e/resource/a2c7216a-0f61-43dc-b874-d28b67c7a686.jpg" 
              alt="Celebración de cumpleaños" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Elementos decorativos animados */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 animate-bounce">
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="absolute top-20 right-20 animate-pulse">
              <Star className="h-6 w-6 text-pink-400" />
            </div>
            <div className="absolute bottom-20 left-20 animate-spin">
              <PartyPopper className="h-10 w-10 text-purple-400" />
            </div>
            <div className="absolute top-1/2 left-1/4 animate-float">
              <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float" style={{animationDelay: '1s'}}>
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
            <div className="absolute bottom-1/3 left-1/2 animate-float" style={{animationDelay: '2s'}}>
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text-glow">
                Fufumanía
              </h1>
              <div className="flex justify-center items-center gap-2 mt-4">
                <Heart className="h-6 w-6 text-red-500 animate-pulse" />
                <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  ¡La mejor animación de cumpleaños!
                </p>
                <Heart className="h-6 w-6 text-red-500 animate-pulse" />
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 text-lg animate-bounce">
                <Rabbit className="h-5 w-5 mr-2" />
                Con amor y corazón para toda la familia
              </Badge>
            </div>

            {/* Botón de contacto principal */}
            <div className="mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-6 w-6 mr-3 animate-pulse" />
                Llámanos: +53 59562001
              </Button>
            </div>
          </div>
        </section>

        {/* Servicios de Animación */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
              Nuestros Servicios de Animación
            </h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
              Profesionales que harán de tu evento una experiencia inolvidable
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Payasos */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 animate-slide-in-left card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:animate-spin">
                    <span className="text-2xl text-white font-bold">🤡</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">Payasos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Risas garantizadas con nuestros payasos profesionales
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Magos */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-800 animate-zoom-in card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Wand2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-purple-600 dark:text-purple-400">Magos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Magia y asombro para todas las edades
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Acróbatas */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 animate-zoom-in card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                    <span className="text-2xl text-white font-bold">🤸</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">Acróbatas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Espectáculo acrobático lleno de emoción
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Mariachis */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-2 border-green-200 dark:border-green-800 animate-slide-in-right card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Music className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-green-600 dark:text-green-400">Mariachis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Música tradicional para alegrar tu evento
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Productos Adicionales */}
        <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
              Productos Especiales
            </h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
              Todo lo que necesitas para hacer tu celebración perfecta
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Kake */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center group-hover:animate-spin">
                    <Cake className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-yellow-600 dark:text-yellow-400">Kake</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Deliciosos pasteles para endulzar tu celebración
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Cajas de Regalos */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-pink-600 dark:text-pink-400">Cajas de Regalos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Sorpresas especiales empaquetadas con amor
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Ramos de Rosas Infinitas */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <FlowerIcon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">Rosas Infinitas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Ramos eternos que perdurarán para siempre
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Cajas de Cervezas */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center group-hover:animate-spin">
                    <span className="text-2xl text-white font-bold">🍺</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-amber-600 dark:text-amber-400">Cajas de Cervezas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Para los adultos que quieren brindar y celebrar
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Galería de Momentos */}
        <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
              Momentos Mágicos
            </h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
              Algunos de nuestros momentos más especiales
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://pub-cdn.sider.ai/u/U0VEHZ4R064/web-coder/6877fd15711d0815fd43d94e/resource/9fd6f4c6-212d-4624-b8bb-d34c9296f511.jpg" 
                  alt="Payaso en fiesta" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Payasos Profesionales</h3>
                    <p className="text-sm">Diversión garantizada</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://pub-cdn.sider.ai/u/U0VEHZ4R064/web-coder/6877fd15711d0815fd43d94e/resource/12172891-a763-4937-bd44-a647b263e820.jpg" 
                  alt="Show de magia" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Espectáculos de Magia</h3>
                    <p className="text-sm">Asombro para todas las edades</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://pub-cdn.sider.ai/u/U0VEHZ4R064/web-coder/6877fd15711d0815fd43d94e/resource/7c64160c-3509-4262-a658-56686e63ee31.jpg" 
                  alt="Mariachis en fiesta" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Mariachis Tradicionales</h3>
                    <p className="text-sm">Música que llega al corazón</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicio de Entregas */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
                La Mejor Animación de Entregas de Granma
              </h2>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-lg">
                <Crown className="h-5 w-5 mr-2" />
                Servicio Premium
              </Badge>
            </div>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 animate-pulse">
                    <Rabbit className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Incluye: Payasos, Magos, Mariachis y Nuestro Conejo Especial
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    En esta familia todos ponemos el corazón y el amor por delante. 
                    <span className="font-semibold text-purple-600 dark:text-purple-400"> Usted escoge cómo quiere que sea su entrega.</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <Heart className="h-8 w-8 text-red-500 animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Con Amor y Dedicación</h4>
                      <p className="text-gray-600 dark:text-gray-300">Cada entrega es única y especial</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <Star className="h-8 w-8 text-yellow-500 animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Personalizado</h4>
                      <p className="text-gray-600 dark:text-gray-300">Adaptamos todo a sus gustos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer con Contacto */}
        <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">¡Contáctanos Ahora!</h2>
            <div className="mb-8">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-6 w-6 mr-3 animate-pulse" />
                +53 59562001
              </Button>
            </div>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Heart className="h-6 w-6 text-red-300 animate-pulse" />
              <p className="text-xl">Fufumanía - Donde la diversión no tiene límites</p>
              <Heart className="h-6 w-6 text-red-300 animate-pulse" />
            </div>
            <p className="text-lg opacity-90">
              © 2024 Fufumanía. Haciendo sonreír a Granma desde el corazón.
            </p>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            size="icon"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  )
}

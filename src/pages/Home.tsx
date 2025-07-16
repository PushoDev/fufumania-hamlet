/**
 * Página principal de Fufumanía - Servicios de animación de cumpleaños
 * Incluye todos los servicios, información de contacto y animaciones divertidas
 */

import { useState, useEffect } from "react";
import "../styles/animations.css";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
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
  FlowerIcon,
} from "lucide-react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Efecto para mostrar/ocultar el botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
        {/* Header con toggle de tema */}
        <header className="fixed top-0 right-0 z-50 p-4">
          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="icon"
            className="transition-transform duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-110"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </header>

        {/* Hero Section */}
        <section className="relative px-4 py-20 overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://pub-cdn.sider.ai/u/U0VEHZ4R064/web-coder/6877fd15711d0815fd43d94e/resource/a2c7216a-0f61-43dc-b874-d28b67c7a686.jpg"
              alt="Celebración de cumpleaños"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Elementos decorativos animados */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 animate-bounce">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="absolute top-20 right-20 animate-pulse">
              <Star className="w-6 h-6 text-pink-400" />
            </div>
            <div className="absolute bottom-20 left-20 animate-spin">
              <PartyPopper className="w-10 h-10 text-purple-400" />
            </div>
            <div className="absolute top-1/2 left-1/4 animate-float">
              <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
            </div>
            <div
              className="absolute top-1/3 right-1/4 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
            <div
              className="absolute bottom-1/3 left-1/2 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-6xl font-bold text-transparent md:text-8xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text animate-text-glow">
                Fufumanía
              </h1>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                <p className="text-2xl font-semibold text-gray-700 md:text-3xl dark:text-gray-300">
                  ¡La mejor animación de cumpleaños!
                </p>
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <Badge className="px-6 py-2 text-lg text-white bg-gradient-to-r from-pink-500 to-purple-500 animate-bounce">
                <Rabbit className="w-5 h-5 mr-2" />
                Con amor y corazón para toda la familia
              </Badge>
            </div>

            {/* Botón de contacto principal */}
            <div className="mb-12">
              <Button
                size="lg"
                className="px-8 py-4 text-xl font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 hover:scale-105 hover:shadow-xl"
              >
                <Phone className="w-6 h-6 mr-3 animate-pulse" />
                Llámanos: +53 59562001
              </Button>
            </div>
          </div>
        </section>

        {/* Servicios de Animación */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold text-center text-gray-800 md:text-5xl dark:text-white">
              Nuestros Servicios de Animación
            </h2>
            <p className="mb-12 text-xl text-center text-gray-600 dark:text-gray-300">
              Profesionales que harán de tu evento una experiencia inolvidable
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Payasos */}
              <Card className="transition-all duration-300 border-2 border-red-200 group hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 dark:border-red-800 animate-slide-in-left card-hover">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full group-hover:animate-spin">
                    <span className="text-2xl font-bold text-white">🤡</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                    Payasos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Risas garantizadas con nuestros payasos profesionales
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Magos */}
              <Card className="transition-all duration-300 border-2 border-purple-200 group hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 dark:border-purple-800 animate-zoom-in card-hover">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full group-hover:animate-pulse">
                    <Wand2 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    Magos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Magia y asombro para todas las edades
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Acróbatas */}
              <Card className="transition-all duration-300 border-2 border-blue-200 group hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 dark:border-blue-800 animate-zoom-in card-hover">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full group-hover:animate-bounce">
                    <span className="text-2xl font-bold text-white">🤸</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    Acróbatas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Espectáculo acrobático lleno de emoción
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Mariachis */}
              <Card className="transition-all duration-300 border-2 border-green-200 group hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 dark:border-green-800 animate-slide-in-right card-hover">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full group-hover:animate-pulse">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-green-600 dark:text-green-400">
                    Mariachis
                  </CardTitle>
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
        <section className="px-4 py-16 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold text-center text-gray-800 md:text-5xl dark:text-white">
              Productos Especiales
            </h2>
            <p className="mb-12 text-xl text-center text-gray-600 dark:text-gray-300">
              Todo lo que necesitas para hacer tu celebración perfecta
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Kake */}
              <Card className="transition-all duration-300 group hover:shadow-xl hover:scale-105 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full group-hover:animate-spin">
                    <Cake className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                    Kake
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Deliciosos pasteles para endulzar tu celebración
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Cajas de Regalos */}
              <Card className="transition-all duration-300 group hover:shadow-xl hover:scale-105 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-pink-500 rounded-full group-hover:animate-bounce">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-pink-600 dark:text-pink-400">
                    Cajas de Regalos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Sorpresas especiales empaquetadas con amor
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Ramos de Rosas Infinitas */}
              <Card className="transition-all duration-300 group hover:shadow-xl hover:scale-105 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full group-hover:animate-pulse">
                    <FlowerIcon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                    Rosas Infinitas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                    Ramos eternos que perdurarán para siempre
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Cajas de Cervezas */}
              <Card className="transition-all duration-300 group hover:shadow-xl hover:scale-105 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500 group-hover:animate-spin">
                    <span className="text-2xl font-bold text-white">🍺</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-amber-600 dark:text-amber-400">
                    Cajas de Cervezas
                  </CardTitle>
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
        <section className="px-4 py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold text-center text-gray-800 md:text-5xl dark:text-white">
              Momentos Mágicos
            </h2>
            <p className="mb-12 text-xl text-center text-gray-600 dark:text-gray-300">
              Algunos de nuestros momentos más especiales
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden transition-all duration-300 transform shadow-lg group rounded-2xl hover:shadow-2xl hover:scale-105">
                <img
                  src="https://pub-cdn.sider.ai/u/U0VEHZ4R064/web-coder/6877fd15711d0815fd43d94e/resource/9fd6f4c6-212d-4624-b8bb-d34c9296f511.jpg"
                  alt="Payaso en fiesta"
                  className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                  <div className="absolute text-white bottom-4 left-4">
                    <h3 className="text-lg font-bold">Payasos Profesionales</h3>
                    <p className="text-sm">Diversión garantizada</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden transition-all duration-300 transform shadow-lg group rounded-2xl hover:shadow-2xl hover:scale-105">
                <img
                  src="https://pub-cdn.sider.ai/u/U0VEHZ4R064/web-coder/6877fd15711d0815fd43d94e/resource/12172891-a763-4937-bd44-a647b263e820.jpg"
                  alt="Show de magia"
                  className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                  <div className="absolute text-white bottom-4 left-4">
                    <h3 className="text-lg font-bold">Espectáculos de Magia</h3>
                    <p className="text-sm">Asombro para todas las edades</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden transition-all duration-300 transform shadow-lg group rounded-2xl hover:shadow-2xl hover:scale-105">
                <img
                  src="https://pub-cdn.sider.ai/u/U0VEHZ4R064/web-coder/6877fd15711d0815fd43d94e/resource/7c64160c-3509-4262-a658-56686e63ee31.jpg"
                  alt="Mariachis en fiesta"
                  className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                  <div className="absolute text-white bottom-4 left-4">
                    <h3 className="text-lg font-bold">
                      Mariachis Tradicionales
                    </h3>
                    <p className="text-sm">Música que llega al corazón</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicio de Entregas */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
                La Mejor Animación de Entregas de Granma
              </h2>
              <Badge className="px-6 py-3 text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500">
                <Crown className="w-5 h-5 mr-2" />
                Servicio Premium
              </Badge>
            </div>

            <Card className="border-2 border-purple-200 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-800">
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
                    <Rabbit className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                    Incluye: Payasos, Magos, Mariachis y Nuestro Conejo Especial
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    En esta familia todos ponemos el corazón y el amor por
                    delante.
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      {" "}
                      Usted escoge cómo quiere que sea su entrega.
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
                    <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        Con Amor y Dedicación
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Cada entrega es única y especial
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
                    <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        Personalizado
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Adaptamos todo a sus gustos
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer con Contacto */}
        <footer className="px-4 py-16 text-white bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-4xl font-bold">¡Contáctanos Ahora!</h2>
            <div className="mb-8">
              <Button
                size="lg"
                className="px-8 py-4 text-xl font-bold text-purple-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
              >
                <Phone className="w-6 h-6 mr-3 animate-pulse" />
                +53 59562001
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Heart className="w-6 h-6 text-red-300 animate-pulse" />
              <p className="text-xl">
                Fufumanía - Donde la diversión no tiene límites
              </p>
              <Heart className="w-6 h-6 text-red-300 animate-pulse" />
            </div>
            <p className="text-lg opacity-90">
              © 2024 Fufumanía. Creado por Pushodev +5355572430.
            </p>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <Button
            onClick={scrollToTop}
            className="fixed z-50 p-3 text-white transition-all duration-300 transform rounded-full shadow-lg bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl hover:scale-110"
            size="icon"
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        )}
      </div>
    </div>
  );
}

import { Mail, Linkedin, Phone } from "lucide-react"

export function BusinessCard() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/modern-logistics-scene-with-cargo-containers--carg.jpg"
          alt="Logística internacional - contenedores, barcos y aviones representando el comercio global"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-16">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-6 md:space-y-8">
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white whitespace-nowrap drop-shadow-lg">
                  DAMIAN SPIROLLARI
                </h1>
                <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-cyan-300 font-medium drop-shadow-md">
                  Especialista en Clasificación Arancelaria
                </p>
              </div>

              {/* Description */}
              <div className="max-w-3xl md:mx-0 text-left">
                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed text-pretty drop-shadow-md">
                  Damián es un Analista de Comercio Exterior con siete años de experiencia, especializado en
                  clasificación arancelaria. A lo largo de su carrera, ha trabajado para empresas de renombre global
                  como Google y General Electric, demostrando una sólida capacidad para gestionar y optimizar
                  operaciones de comercio exterior en entornos complejos.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed text-pretty drop-shadow-md">
                  Su profundo conocimiento de las normativas aduaneras lo convierte en un socio estratégico ideal para
                  empresas que buscan eficiencia y cumplimiento en sus operaciones internacionales.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-8 lg:space-y-12 lg:flex lg:flex-col lg:items-center">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/90 justify-center lg:justify-start">
                  <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full backdrop-blur-sm">
                    <Mail className="w-10 h-10 text-cyan-300" />
                  </div>
                  <span className="text-base md:text-lg lg:text-xl">damian.spirollari@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 justify-center lg:justify-start">
                  <div className="flex items-center justify-center w-16 h-16 bg-lime-500/20 rounded-full backdrop-blur-sm">
                    <Phone className="w-10 h-10 text-lime-300" />
                  </div>
                  <span className="text-base md:text-lg lg:text-xl">+54 9 11 5578-1853</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-center">
                <a
                  href="https://www.linkedin.com/in/damian-andres-spirollari-66547470/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-20 h-20 bg-cyan-500/20 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-colors cursor-pointer"
                >
                  <Linkedin className="w-12 h-12 text-cyan-300" />
                </a>
                <a
                  href="mailto:damian.spirollari@gmail.com"
                  className="flex items-center justify-center w-20 h-20 bg-lime-500/20 backdrop-blur-sm rounded-full hover:bg-lime-500/30 transition-colors cursor-pointer"
                >
                  <Mail className="w-12 h-12 text-lime-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 via-lime-400 to-cyan-500"></div>
    </div>
  )
}

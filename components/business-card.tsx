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
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="max-w-4xl w-full">
          <div className="text-center md:text-left space-y-6 md:space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight drop-shadow-lg">
                DAMIAN SPIROLLARI
              </h1>
              <p className="text-xl md:text-3xl lg:text-4xl text-cyan-300 font-medium drop-shadow-md">
                Especialista en Clasificación Arancelaria
              </p>
            </div>

            {/* Description */}
            <div className="max-w-3xl md:mx-0 text-left">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed text-pretty drop-shadow-md">

                Damián es un Analista de Comercio Exterior con siete años de experiencia, especializado en clasificación arancelaria. 
                A lo largo de su carrera, ha trabajado para empresas de renombre global como Google y General Electric, 
                demostrando una sólida capacidad para gestionar y optimizar operaciones de comercio exterior en entornos complejos.
                </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed text-pretty drop-shadow-md">
                Su profundo conocimiento de las normativas aduaneras lo convierte en un socio estratégico ideal para empresas que buscan 
                eficiencia y cumplimiento en sus operaciones internacionales.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="flex items-center gap-3 text-white/90 justify-center md:justify-start">
                <div className="flex items-center justify-center w-10 h-10 bg-cyan-500/20 rounded-full backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-cyan-300" />
                </div>
                <span className="text-sm md:text-base">damian.spirollari@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 justify-center md:justify-start">
                <div className="flex items-center justify-center w-10 h-10 bg-lime-500/20 rounded-full backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-lime-300" />
                </div>
                <span className="text-sm md:text-base">+54 9 11 5578-1853</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6 md:pt-8 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/damian-andres-spirollari-66547470/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-cyan-500/20 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-colors cursor-pointer"
              >
                <Linkedin className="w-7 h-7 text-cyan-300" />
              </a>
              <a
                href="mailto:damian.spirollari@gmail.com"
                className="flex items-center justify-center w-14 h-14 bg-lime-500/20 backdrop-blur-sm rounded-full hover:bg-lime-500/30 transition-colors cursor-pointer"
              >
                <Mail className="w-7 h-7 text-lime-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 via-lime-400 to-cyan-500"></div>
    </div>
  )
}
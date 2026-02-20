# Código Completo de Componentes - Next.js

## 📁 /app/page.tsx

```tsx
'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import IntroTestimonials from '@/components/IntroTestimonials'
import VideoTestimonials from '@/components/VideoTestimonials'
import TextTestimonials from '@/components/TextTestimonials'
import Footer from '@/components/Footer'
import { ChevronRight } from 'lucide-react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-lime-400 selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <IntroTestimonials />
      <VideoTestimonials />
      <TextTestimonials />
      
      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center bg-black">
        <h3 className="text-xl sm:text-2xl md:text-2xl font-heading text-white mb-4 sm:mb-6 px-2 text-[32px]">
          ¿Ready para la Entrevista?
        </h3>
        <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
          Aprovecha al máximo los 45 minutos para demostrarnos por qué deberías quedar entre los 20 equipos de la Próxima Edición.
        </p>
        <div className="inline-flex items-center gap-2 text-sm sm:text-base text-[#FF3A20] border-b border-[#FF3A20]/30 pb-0.5">
          Nos vemos pronto 🫡 <ChevronRight size={16} className="sm:w-5 sm:h-5" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
```

---

## 📁 /app/layout.tsx

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Novolabs Startup School - Opiniones Reales',
  description: 'Descubrí los resultados que obtuvieron las personas que completaron nuestro Programa y aplicaron el Sistema de Validación Paga™',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
```

---

## 📁 /components/Navbar.tsx

```tsx
'use client'

import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Image 
          src="/images/logo.png" 
          alt="Novolabs" 
          width={160}
          height={40}
          className="h-8 sm:h-10 w-auto" 
        />
      </div>
    </nav>
  )
}
```

---

## 📁 /components/Hero.tsx

```tsx
'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('intro-testimonials')
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pre-header */}
            <span 
              className="inline-block py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs tracking-widest uppercase text-gray-400 mb-4 sm:mb-6 font-heading"
            >
              ¿Qué opinan de Novolabs?
            </span>
            
            {/* Main header */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-6 leading-[1.2] font-heading font-extrabold">
              Opiniones reales de personas que ya pasaron por lo que vos estás pasando.
            </h1>
            
            {/* Sub-header */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto">
              Descubrí los resultados que obtuvieron las personas que completaron nuestro Programa y aplicaron el Sistema de Validación Paga™
            </p>
            
            {/* CTA Button */}
            <button
              onClick={scrollToTestimonials}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(255,58,32)] text-white rounded-full text-base sm:text-lg font-bold font-heading hover:bg-[rgb(255,70,45)] transition-all shadow-lg shadow-[rgb(255,58,32)]/20 hover:shadow-[rgb(255,58,32)]/40 hover:scale-105"
            >
              Ver testimonios
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

---

## 📁 /components/IntroTestimonials.tsx

```tsx
'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Alexy Narváez",
    avatar: "/images/avatarAlexy.png",
    text: "Es un proceso adaptado a cada industria, con acompañamiento real. Aprendí a testear mi idea sin tirar plata antes de tiempo. La comunidad es excelente, todos apoyándose.",
    linkedin: "https://www.linkedin.com/in/alexy-eduardo-narvaez-gonzalez-0958a31a/?originalSubdomain=cl"
  },
  {
    name: "Magdalena Laplacette",
    avatar: "/images/avatarMagdalena.png",
    text: "Los chicos de Novolabs, tanto Dami, Tomi como todo el equipo de mentores, son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo mas importante, desafiandote a ir por todo.",
    linkedin: "https://www.linkedin.com/in/magdalena-laplacette/"
  },
  {
    name: "Hernán Farruggia",
    avatar: "/images/testimonialHernan.png",
    text: "Entré con ideas vagas y salí con un plan claro. Me ayudaron a evitar errores costosos y a enfocarme en lo que realmente importa. Hoy ya tengo tracción real.",
    linkedin: "https://www.linkedin.com/in/hernanfarruggia/"
  }
]

export default function IntroTestimonials() {
  return (
    <section 
      id="intro-testimonials" 
      className="py-12 sm:py-16 md:py-20 bg-[rgb(255,255,255)] px-4 sm:px-6 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-3 sm:mb-4 font-heading font-extrabold">
            Antes de seguir, <span className="text-[rgb(255,58,32)]">leé esto:</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Algunas de las +300 personas que ya pasaron por Novolabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-lime-400/50 transition-colors shadow-sm"
            >
              {/* Header with Avatar and Name */}
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold mb-1">
                    {testimonial.name}
                  </p>
                  {/* Trustpilot Stars and LinkedIn */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00b67a] fill-[#00b67a]" />
                      ))}
                    </div>
                    {testimonial.linkedin && (
                      <a 
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Image 
                          src="/images/linkedinIcon.png" 
                          alt="LinkedIn"
                          width={20}
                          height={20}
                          className="w-5 h-5 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trustpilot Rating */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <div className="inline-flex items-center gap-2">
            <span className="text-black text-base sm:text-lg font-semibold">4.8</span>
            <div className="flex items-center gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b67a] fill-[#00b67a]" />
              ))}
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 fill-gray-300 absolute" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b67a] fill-[#00b67a]" />
                </div>
              </div>
            </div>
            <span className="text-black text-base sm:text-lg">en</span>
            <a 
              href="https://www.trustpilot.com/review/novolabs.xyz?languages=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black text-base sm:text-lg underline hover:text-lime-400 transition-colors font-semibold"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## 📁 /components/VideoTestimonials.tsx

```tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"

const testimonials = [
  {
    id: 7,
    thumbnail: "/images/testimonialMagdalenaHorizontal.png",
    videoUrl: "https://www.youtube.com/embed/ESUN3E3aX3g",
    name: "Magdalena Biassuto",
    industry: "Salud",
    quote: "Mejoré mi idea original y encontré a mi socio tech dentro del Programa..."
  },
  {
    id: 8,
    thumbnail: "/images/testimonialRaulHorizontal.png",
    videoUrl: "https://www.youtube.com/embed/7F4_lbbzPKM",
    name: "Raul Monge",
    industry: "Logística",
    quote: "Conseguí mis primeros 15 clientes recurrentes en menos de 4 meses..."
  },
  {
    id: 9,
    thumbnail: "/images/testimonialRobertoHorizontal.png",
    videoUrl: "https://www.youtube.com/embed/XOs8wzErvVw",
    name: "Roberto Jimenez",
    industry: "Legales",
    quote: "Tengo una idea mucho más sólida y los primeros clientes..."
  },
  {
    id: 10,
    thumbnail: "/images/testimonialLauraHorizontal.png",
    videoUrl: "https://www.youtube.com/embed/83F0dm9QVmY",
    name: "Laura Martinez",
    industry: "Energías Renovables",
    quote: "Me gustó tanto el Programa que le cuento a todos de Novolabs ..."
  },
  {
    id: 11,
    thumbnail: "/images/testimonialValentinHorizontal.png",
    videoUrl: "https://www.youtube.com/embed/_cnUn0Q0uEs",
    name: "Valentín Llorens",
    industry: "Educación",
    quote: "Descubrí una nueva forma de emprender, me cambiaron la cabeza..."
  },
  {
    id: 12,
    thumbnail: "/images/testimonialGabrielHorizontal.png",
    videoUrl: "https://www.youtube.com/embed/uloRdBDJsHw",
    name: "Gabriel Vicentin",
    industry: "Deporte",
    quote: "Ojalá hubiera conocido Novolabs hace muchos años atrás..."
  }
]

export default function VideoTestimonials() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const activeTestimonial = testimonials.find(t => t.id === playingVideo)

  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 bg-neutral-950 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 px-2 font-heading font-extrabold">
              Opiniones reales, <span className="text-[rgb(255,58,32)]">sin humo.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-4">
              Nada mejor que escuchar directamente a los personas que ya pasaron por lo que vos estás pasando ahora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="relative bg-neutral-900 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-lime-400/50 active:scale-[0.98] transition-all w-full touch-manipulation"
                onClick={() => setPlayingVideo(testimonial.id)}
              >
                {/* Industry Badge - Top Left */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 bg-black/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-[10px] sm:text-xs text-white tracking-wide" style={{ letterSpacing: '0.05em' }}>
                    {testimonial.industry}
                  </span>
                  <div className="h-[1px] w-full bg-lime-400/40 mt-1" />
                  <p className="text-white text-xs sm:text-sm mt-2 font-medium">{testimonial.name}</p>
                </div>

                {/* Thumbnail Cover - Horizontal Aspect */}
                <div className="aspect-[16/9] relative">
                  <Image 
                    src={testimonial.thumbnail}
                    alt="Testimonial Cover"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                </div>
                
                {/* Play Button - Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#c4ff00] group-hover:border-[#c4ff00] group-active:bg-[#c4ff00] group-active:border-[#c4ff00] transition-all">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-black group-active:text-black fill-current ml-1" />
                  </div>
                </div>

                {/* Quote - Bottom */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <p className="text-white text-sm sm:text-base md:text-lg leading-snug font-semibold italic">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={playingVideo !== null} onOpenChange={(open) => !open && setPlayingVideo(null)}>
        <DialogContent className="!max-w-md !p-0 bg-transparent border-0 shadow-none [&>button]:hidden" aria-describedby={undefined}>
          <DialogTitle className="sr-only">
            Video Testimonio
          </DialogTitle>
          
          <button 
            onClick={() => setPlayingVideo(null)}
            className="absolute -top-12 right-0 z-50 rounded-full p-2.5 bg-white/90 backdrop-blur-sm text-black hover:bg-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>
          
          {activeTestimonial && (
            <div className="w-full aspect-[9/16] max-h-[80vh] bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={`${activeTestimonial.videoUrl}${activeTestimonial.videoUrl.includes('?') ? '&' : '?'}autoplay=1&fs=1&modestbranding=1&rel=0`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title={`Testimonio de ${activeTestimonial.name}`}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
```

---

## 📁 /components/TextTestimonials.tsx

```tsx
'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Henry",
    avatar: "/images/avatarHenry.png",
    text: "Aprendí metodologías que aplicaré siempre. La parte de validación fue clave para mí: conseguí mis primeros clientes antes de lanzar. Es un programa serio, sin verso.",
    linkedin: "https://www.linkedin.com/in/frangeary/"
  },
  {
    name: "Tatiana Domínguez",
    avatar: "/images/testimonialTatiana.png",
    text: "Nos ayudaron a validar el producto antes de desarrollarlo, ahorramos meses de trabajo. El nivel de feedback es brutal, te dicen la verdad sin filtros.",
    linkedin: "https://www.linkedin.com/in/tatiana-teresa-dominguez-rojas-65392415/"
  },
  {
    name: "Luciano Schillagi",
    avatar: "/images/testimonialLuciano.png",
    text: "Arranqué con dudas enormes sobre mi idea. Hoy tengo claridad total sobre qué hacer y cómo escalar. El equipo de Novolabs es increíble, te empujan a dar lo mejor.",
    linkedin: "https://www.linkedin.com/in/lucianoschillagi/"
  },
  {
    name: "Gerónimo Mársico",
    avatar: "/images/testimonialGeronimo.png",
    text: "Logré pivotar mi proyecto y encontrar product-market fit gracias al programa. La red de contactos que armé acá vale oro. Super recomendable para cualquier founder.",
    linkedin: "https://www.linkedin.com/in/geronimomarsico/"
  },
  {
    name: "Isabel Darsin",
    avatar: "/images/testimonialIsabel.png",
    text: "Los chicos de Novo son excelentes profesionales, tienen muchísima experiencia y un método para emprendedores que garantiza el éxito de tu start-up.",
    linkedin: "https://www.linkedin.com/in/isabeldarsin/"
  },
  {
    name: "Ignacio Ferreira",
    avatar: "/images/testimonialIgnacio.png",
    text: "Me ayudaron a estructurar mi startup desde cero. Aprendí a vender antes de tener producto. El networking con otros founders fue un plus enorme.",
    linkedin: "https://www.linkedin.com/in/ignacio-ferreira/"
  },
  {
    name: "Adrián Dutra",
    avatar: "/images/testimonialAdrian.png",
    text: "Pasé de estar perdido a tener un roadmap claro y ejecutable. Los mentores son cracks, te guían sin darte todo servido. Salís con habilidades reales.",
    linkedin: "https://www.linkedin.com/in/adrian-dutra/"
  },
  {
    name: "Camila Aguado",
    avatar: "/images/testimonialCamila.png",
    text: "Me ayudó de forma práctica y clara a llevar adelante mi emprendimiento. Novo es muy bueno!",
    linkedin: "https://www.linkedin.com/in/camilaaguado/"
  },
  {
    name: "Pol López",
    avatar: "/images/testimonialPol.png",
    text: "El acompañamiento fue increíble, por el conocimiento y la cercanía del equipo. Pero lo mejor es la comunidad: todos comparten, ayudan y suman. Emprender acompañado hace toda la diferencia.",
    linkedin: "https://www.linkedin.com/in/paullopezreyes/"
  },
  {
    name: "Maximiliano Fabián",
    avatar: "/images/testimonialMaximiliano.png",
    text: "El nivel de profundidad en las sesiones es impresionante. Te ayudan a pensar estratégicamente y ejecutar de forma táctica. Los resultados hablan solos.",
    linkedin: "https://www.linkedin.com/in/maxifabian"
  },
  {
    name: "Silvina Fernandez",
    avatar: "/images/testimonialSilvina.png",
    text: "Entre en el programa buscando orientación para poder llevar a cabo mi proyecto… Y al finalizar logre validar mi idea y lanzar mi MVP al mercado. A todos los que estén pensando en emprender no duden en que Novo es la mejor opción.",
    linkedin: "https://www.linkedin.com/in/silfernandez-liderarte/"
  },
  {
    name: "Juan Martín Cavallari",
    avatar: "/images/testimonialJuanMartin.png",
    text: "Novolabs me ayudó a pasar del concepto a la ejecución. Aprendí herramientas concretas que uso todos los días. La comunidad es un diferencial enorme.",
    linkedin: "https://www.linkedin.com/in/juan-mart%C3%ADn-cavallari-b25850ba"
  },
  {
    name: "Lisandro Belmonte",
    avatar: "/images/testimonialLisandro.png",
    text: "Tuve una gran experiencia en Novo, me enseñaron mucho y la comunidad siempre está dispuesta a ayudar. Muy recomendable!!",
    linkedin: "https://www.linkedin.com/in/lisandro-belmonte-942335279/"
  },
  {
    name: "Mercedes Rey",
    avatar: "/images/testimonialMercedes.png",
    text: "Cambió mi forma de pensar los negocios. Aprendí a testear rápido, fallar barato y validar antes de invertir. Hoy mi startup está creciendo gracias a lo que aprendí acá.",
    linkedin: "https://www.linkedin.com/in/mercedes-rey82/"
  },
  {
    name: "Lucas Zoppi",
    avatar: "/images/testimonialLucas.png",
    text: "Arranqué sin un norte claro y salí entendiendo por completo si mi emprendimiento va a funcionar o no. El nivel de atención es excelente y en cada clase me he llevado cosas que no tenía en consideración.",
    linkedin: "https://www.linkedin.com/in/zoppi/"
  }
]

export default function TextTestimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[rgb(255,255,255)] px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-10 sm:mb-12 md:mb-16 text-center font-heading font-extrabold">
          Más y <span className="text-[rgb(255,58,32)]">más testimonios</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-lime-400/50 transition-colors shadow-sm"
            >
              {/* Header with Avatar and Name */}
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold mb-1">
                    {testimonial.name}
                  </p>
                  {/* Trustpilot Stars and LinkedIn */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00b67a] fill-[#00b67a]" />
                      ))}
                    </div>
                    {testimonial.linkedin && (
                      <a 
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Image 
                          src="/images/linkedinIcon.png" 
                          alt="LinkedIn"
                          width={20}
                          height={20}
                          className="w-5 h-5 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 📁 /components/Footer.tsx

```tsx
'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-black border-t border-white/10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <Image 
          src="/images/logo.png" 
          alt="Novolabs" 
          width={140}
          height={32}
          className="h-7 sm:h-8 w-auto" 
        />
        <div className="text-gray-500 text-xs sm:text-sm text-center">
          {currentYear} Novolabs Startup School. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
```

---

## 📁 /app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Font imports */
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap');

@layer base {
  :root {
    --background: #ffffff;
    --foreground: #000000;
  }

  body {
    font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
    font-variation-settings: 'wght' 400;
    background-color: var(--background);
    color: var(--foreground);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Geist', sans-serif;
  }

  p, span, a, div {
    font-family: 'Satoshi', sans-serif;
  }
}

@layer utilities {
  .font-heading {
    font-family: 'Geist', sans-serif;
  }

  .font-sans {
    font-family: 'Satoshi', sans-serif;
  }
}

/* Selection color */
::selection {
  background-color: #c4ff00;
  color: #000000;
}
```

---

## 📁 tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'novolabs-red': 'rgb(255, 58, 32)',
        'lime-400': '#c4ff00',
        'trustpilot-green': '#00b67a',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        heading: ['Geist', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## 📁 package.json (dependencias necesarias)

```json
{
  "name": "novolabs-testimonials",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^14.2.3",
    "lucide-react": "^0.344.0",
    "motion": "^10.18.0",
    "embla-carousel-autoplay": "^8.0.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "typescript": "^5.4.2",
    "@types/node": "^20.11.24",
    "@types/react": "^18.2.61",
    "@types/react-dom": "^18.2.19",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.3"
  }
}
```

---

## 🎯 Notas de Implementación

### Para instalar shadcn/ui components:

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add dialog
```

### Estructura completa de carpetas:

```
novolabs-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── IntroTestimonials.tsx
│   ├── VideoTestimonials.tsx
│   ├── TextTestimonials.tsx
│   ├── Footer.tsx
│   └── ui/
│       └── dialog.tsx
├── public/
│   └── images/
│       ├── logo.png
│       ├── linkedinIcon.png
│       └── ... (todos los avatares y thumbnails)
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

**Nota Final:** Todos los componentes están listos para copy/paste directamente en v0. Solo necesitas crear las carpetas correspondientes y subir las imágenes a `/public/images/`.

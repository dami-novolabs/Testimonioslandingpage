import React, { useState, useEffect, useRef } from 'react';
import { Play, Star, Quote, ChevronRight, CheckCircle, ArrowRight, X, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "./components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import review1 from 'figma:asset/ddd8c550c75ead91d09eb5087516b669919b9e42.png';
import review2 from 'figma:asset/cb868f6104b1716a397ff3d4257da6aae88bd4b0.png';
import review3 from 'figma:asset/e1be36f1e1891a906ff8f6dab4328ad5c01e578e.png';
import review4 from 'figma:asset/fb2e55149f94c0739cd8a464bf30d46c3eb61d63.png';
import review5 from 'figma:asset/555e9d9f5701c2b85723bdec58ac77c882e1f53b.png';
import review6 from 'figma:asset/9a83c13da2719e4a9a1983bf6008a901900d9052.png';
import review7 from 'figma:asset/b7fe7334bf8afdf0d01607927db435413a781cff.png';
import review8 from 'figma:asset/a38b9390bf6773f6d2587e7d7784dd29d7b79695.png';
import review9 from 'figma:asset/84fd57995b966795b9c5e5797e69733bb53e1b29.png';
import review10 from 'figma:asset/10ad59d30fe2c880fa50544745eabb6f369db066.png';
import testimonial1Thumb from 'figma:asset/679ebd8e2b9424a038b7820c9ea692333cadbbeb.png';
import testimonial2Thumb from 'figma:asset/97cf8185de060fa579992219cc66e10c159552da.png';
import testimonial3Thumb from 'figma:asset/e2b1f45e1e7f3262b0dca01fe8193ec073976d7c.png';
import testimonial4Thumb from 'figma:asset/362a783a02ace5aa8228b069c72b04b658efba97.png';
import testimonial5Thumb from 'figma:asset/3d63c19c56dda96d149acbb39733b00ded371818.png';
import testimonial6Thumb from 'figma:asset/011f90c6e17c39d27a21e2c7ae7220a8a89c66ed.png';
import logo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';
import heroVideoThumb from 'figma:asset/1285ebb228475e053fedfecc078cb53ffc8038f5.png';
import pressLogos from 'figma:asset/b18e94961642054321299010f9520f77bb8920b2.png';
import testimonialHernan from 'figma:asset/cc20f02b3368e45eabae3306d5a7f50e9135f793.png';
import testimonialTatiana from 'figma:asset/4d3051c79f854bfcc463fa10ed872e9632c25a4e.png';
import testimonialHenry from 'figma:asset/f4f5f2dc7f11c2aa854a6c5ca4e3dbfca0d0dca7.png';
import testimonialLuciano from 'figma:asset/92034f3f453dcbbcd59dc236074a9ff3dc9a8b2d.png';
import testimonialGeronimo from 'figma:asset/fe6d4fc2f2b788fa313fa171409f26d209cac85a.png';
import testimonialIgnacio from 'figma:asset/cd26386d497430d5b3d55b670351f85a39709627.png';
import testimonialAdrian from 'figma:asset/a9faa141ce6b7072194c3610b313d0098cbabe96.png';
import testimonialPol from 'figma:asset/da64513542d0aaa8ed00a6f2af46d59d767fd194.png';
import testimonialMercedes from 'figma:asset/840f33b8786a470cc038fd116612a6e322f4be2d.png';
import testimonialMaximiliano from 'figma:asset/aa6664c278abde05fecbc925a3ded2b41c7fb1ef.png';
import testimonialJuanMartin from 'figma:asset/8eeba2d5fefc9f40d05ed7f2287c23d746b8336e.png';
import testimonialIsabel from 'figma:asset/3cec8a9aed714105533cf3d6f87782199a5ee850.png';
import testimonialLisandro from 'figma:asset/4c2da2f4c78fc2e2f84966c57313c7d974316967.png';
import testimonialCamila from 'figma:asset/49811de49086e223b178d332ade284d72aaa6e2a.png';
import testimonialLucas from 'figma:asset/41158fbbb7ab4f985f1216401bfd950ab6e6ea1e.png';
import testimonialGabriel from 'figma:asset/32097bd368523a797f28f51e3369d3a76f6cc840.png';
import testimonialSilvina from 'figma:asset/b3ee8196152f5d99415fdff09cbf6c1d5d725b10.png';
import avatarAlexy from 'figma:asset/357fa7d0bd0c713763f827a98c33205e9666498c.png';
import avatarHenry from 'figma:asset/964b10b9ea451d0fd690274625429339b1f2c7f0.png';
import avatarMagdalena from 'figma:asset/d7f6dc7f3678521bf318d48e23e875a7bc7d12b6.png';
import linkedinIcon from 'figma:asset/e280c21258be5c310610d636aa1c8547c9bbf4d9.png';
import testimonialMagdalenaHorizontal from 'figma:asset/26edca017d0b259ab49e6b9b2fb01fba3a4a5b1f.png';
import testimonialRaulHorizontal from 'figma:asset/0ba2a044bcbab16554a443a7fac72d4b2c7a312f.png';
import testimonialRobertoHorizontal from 'figma:asset/4e4b0c8392cb0766884cddd12062ccce9944ae58.png';
import testimonialLauraHorizontal from 'figma:asset/9ac1a6ccf4f8b46511a94807695c5955f8ba4cda.png';
import testimonialValentinHorizontal from 'figma:asset/a5581dba223bb0c9bac7da1e88237b4c316ea876.png';
import testimonialGabrielHorizontal from 'figma:asset/0eab3d0d9a32a51b77ee917ad85ce002873b059e.png';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
      <img src={logo} alt="Novolabs" className="h-8 sm:h-10" />
    </div>
  </nav>
);

const Hero = () => {
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('intro-testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
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
          <span className="inline-block py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs tracking-widest uppercase text-gray-400 mb-4 sm:mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
            ¿Qué opinan de Novolabs?
          </span>
          
          {/* Main header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-6 leading-[1.2]" style={{ fontWeight: 800, fontFamily: 'Geist, sans-serif' }}>
            Opiniones reales de personas que ya pasaron por lo que vos estás pasando.
          </h1>
          
          {/* Sub-header */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto">
            Descubrí los resultados que obtuvieron las personas que completaron nuestro Programa y aplicaron el Sistema de Validación Paga™
          </p>
          
          {/* CTA Button */}
          <button
            onClick={scrollToTestimonials}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(255,58,32)] text-white rounded-full text-base sm:text-lg hover:bg-[rgb(255,70,45)] transition-all shadow-lg shadow-[rgb(255,58,32)]/20 hover:shadow-[rgb(255,58,32)]/40 hover:scale-105"
            style={{ fontWeight: 700, fontFamily: 'Geist, sans-serif' }}
          >
            Ver testimonios
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      thumbnail: testimonial1Thumb,
      videoUrl: "https://www.youtube.com/embed/ESUN3E3aX3g",
      name: "Magdalena Biassuto",
      industry: "Salud",
      quote: "Mejoré mi idea original y encontré a mi socio tech dentro del Programa..."
    },
    {
      id: 2,
      thumbnail: testimonial2Thumb,
      videoUrl: "https://www.youtube.com/embed/7F4_lbbzPKM",
      name: "Raul Monge",
      industry: "Logística",
      quote: "Conseguí mis primeros 15 clientes recurrentes en menos de 4 meses..."
    },
    {
      id: 3,
      thumbnail: testimonial3Thumb,
      videoUrl: "https://www.youtube.com/embed/XOs8wzErvVw",
      name: "Roberto Jimenez",
      industry: "Legales",
      quote: "Tengo una idea mucho más sólida y los primeros clientes..."
    },
     {
      id: 4,
      thumbnail: testimonial4Thumb,
      videoUrl: "https://www.youtube.com/embed/83F0dm9QVmY",
      name: "Laura Martinez",
      industry: "Energías Renovables",
      quote: "Me gustó tanto el Programa que le cuento a todos de Novolabs ..."
    },
    
    {
      id: 5,
      thumbnail: testimonial5Thumb,
      videoUrl: "https://www.youtube.com/embed/_cnUn0Q0uEs",
      name: "Valentín Llorens",
      industry: "Educación",
      quote: "Descubrí una nueva forma de emprender, me cambiaron la cabeza..."
    },
    {
      id: 6,
      thumbnail: testimonial6Thumb,
      videoUrl: "https://www.youtube.com/embed/uloRdBDJsHw",
      name: "Gabriel Vicentin",
      industry: "Deporte",
      quote: "Ojalá hubiera conocido Novolabs hace muchos años atrás..."
    },
  ];

  // Second testimonials array for duplicated section
  const testimonials2 = [
    {
      id: 7,
      thumbnail: testimonialMagdalenaHorizontal,
      videoUrl: "https://www.youtube.com/embed/ESUN3E3aX3g",
      name: "Magdalena Biassuto",
      industry: "Salud",
      quote: "Mejoré mi idea original y encontré a mi socio tech dentro del Programa..."
    },
    {
      id: 8,
      thumbnail: testimonialRaulHorizontal,
      videoUrl: "https://www.youtube.com/embed/7F4_lbbzPKM",
      name: "Raul Monge",
      industry: "Logística",
      quote: "Conseguí mis primeros 15 clientes recurrentes en menos de 4 meses..."
    },
    {
      id: 9,
      thumbnail: testimonialRobertoHorizontal,
      videoUrl: "https://www.youtube.com/embed/XOs8wzErvVw",
      name: "Roberto Jimenez",
      industry: "Legales",
      quote: "Tengo una idea mucho más sólida y los primeros clientes..."
    },
     {
      id: 10,
      thumbnail: testimonialLauraHorizontal,
      videoUrl: "https://www.youtube.com/embed/83F0dm9QVmY",
      name: "Laura Martinez",
      industry: "Energías Renovables",
      quote: "Me gustó tanto el Programa que le cuento a todos de Novolabs ..."
    },
    
    {
      id: 11,
      thumbnail: testimonialValentinHorizontal,
      videoUrl: "https://www.youtube.com/embed/_cnUn0Q0uEs",
      name: "Valentín Llorens",
      industry: "Educación",
      quote: "Descubrí una nueva forma de emprender, me cambiaron la cabeza..."
    },
    {
      id: 12,
      thumbnail: testimonialGabrielHorizontal,
      videoUrl: "https://www.youtube.com/embed/uloRdBDJsHw",
      name: "Gabriel Vicentin",
      industry: "Deporte",
      quote: "Ojalá hubiera conocido Novolabs hace muchos años atrás..."
    },
  ];

  const activeTestimonial = [...testimonials, ...testimonials2].find(t => t.id === playingVideo);

  return (
    <>
      {/* Duplicated Video Testimonials Section - Horizontal Design */}
      <section className="py-12 sm:py-16 md:py-24 bg-neutral-950 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 px-2" style={{ fontWeight: 800, fontFamily: 'Geist, sans-serif' }}>
              Opiniones reales, <span className="text-[rgb(255,58,32)]">sin humo.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-4">
              Nada mejor que escuchar directamente a los personas que ya pasaron por lo que vos estás pasando ahora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {testimonials2.map((testimonial) => (
              <div 
                key={`duplicate-${testimonial.id}`}
                className="relative bg-neutral-900 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-lime-400/50 active:scale-[0.98] transition-all w-full touch-manipulation"
                onClick={() => setPlayingVideo(testimonial.id)}
              >
                {/* Industry Badge - Top Left */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 bg-black/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-[10px] sm:text-xs text-white tracking-wide" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                    {testimonial.industry}
                  </span>
                  <div className="h-[1px] w-full bg-lime-400/40 mt-1" />
                  <p className="text-white text-xs sm:text-sm mt-2" style={{ fontWeight: 500 }}>{testimonial.name}</p>
                </div>

                {/* Thumbnail Cover - Horizontal Aspect */}
                <div className="aspect-[16/9] relative">
                  <img 
                    src={testimonial.thumbnail}
                    alt="Testimonial Cover"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
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
                  <p className="text-white text-sm sm:text-base md:text-lg leading-snug" style={{ fontWeight: 600, fontStyle: 'italic' }}>{testimonial.quote}</p>
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
  );
};

const IntroTestimonials = () => {
  const testimonials = [
    {
      name: "Alexy Narváez",
      avatar: avatarAlexy,
      text: "Es un proceso adaptado a cada industria, con acompañamiento real. Aprendí a testear mi idea sin tirar plata antes de tiempo. La comunidad es excelente, todos apoyándose.",
      linkedin: "https://www.linkedin.com/in/alexy-eduardo-narvaez-gonzalez-0958a31a/?originalSubdomain=cl"
    },

       {
      name: "Magdalena Laplacette",
      avatar: avatarMagdalena,
      text: "Los chicos de Novolabs, tanto Dami, Tomi como todo el equipo de mentores, son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo mas importante, desafiandote a ir por todo.",
      linkedin: "https://www.linkedin.com/in/magdalena-laplacette/"
    },
    {
      name: "Hernán Farruggia",
      avatar: testimonialHernan,
      text: "Entré con ideas vagas y salí con un plan claro. Me ayudaron a evitar errores costosos y a enfocarme en lo que realmente importa. Hoy ya tengo tracción real.",
      linkedin: "https://www.linkedin.com/in/hernanfarruggia/"
    },

  ];

  return (
    <section id="intro-testimonials" className="py-12 sm:py-16 md:py-20 bg-[rgb(255,255,255)] px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-3 sm:mb-4" style={{ fontWeight: 800, fontFamily: 'Geist, sans-serif' }}>
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
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-1" style={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </p>
                  {/* Trustpilot Stars and LinkedIn */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00b67a] fill-[#00b67a]" />
                      ))}
                    </div>
                    {testimonial.linkedin ? (
                      <a 
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img 
                          src={linkedinIcon} 
                          alt="LinkedIn"
                          className="w-5 h-5 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
                        />
                      </a>
                    ) : (
                      <img 
                        src={linkedinIcon} 
                        alt="LinkedIn"
                        className="w-5 h-5 flex-shrink-0"
                      />
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
            <span className="text-black text-base sm:text-lg" style={{ fontWeight: 600 }}>4.8</span>
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
              className="text-black text-base sm:text-lg underline hover:text-lime-400 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TextTestimonials = () => {
  const testimonials = [
    {
      name: "Henry",
      avatar: avatarHenry,
      text: "Aprendí metodologías que aplicaré siempre. La parte de validación fue clave para mí: conseguí mis primeros clientes antes de lanzar. Es un programa serio, sin verso.",
      linkedin: "https://www.linkedin.com/in/frangeary/"
    },
      {
      name: "Tatiana Domínguez",
      avatar: testimonialTatiana,
      text: "Nos ayudaron a validar el producto antes de desarrollarlo, ahorramos meses de trabajo. El nivel de feedback es brutal, te dicen la verdad sin filtros.",
      linkedin: "https://www.linkedin.com/in/tatiana-teresa-dominguez-rojas-65392415/"
    },
    {
      name: "Luciano Schillagi",
      avatar: testimonialLuciano,
      text: "Arranqué con dudas enormes sobre mi idea. Hoy tengo claridad total sobre qué hacer y cómo escalar. El equipo de Novolabs es increíble, te empujan a dar lo mejor.",
      linkedin: "https://www.linkedin.com/in/lucianoschillagi/"
    },
    {
      name: "Gerónimo Mársico",
      avatar: testimonialGeronimo,
      text: "Logré pivotar mi proyecto y encontrar product-market fit gracias al programa. La red de contactos que armé acá vale oro. Super recomendable para cualquier founder.",
      linkedin: "https://www.linkedin.com/in/geronimomarsico/"
    },
      {
      name: "Isabel Darsin",
      avatar: testimonialIsabel,
      text: "Los chicos de Novo son excelentes profesionales, tienen muchísima experiencia y un método para emprendedores que garantiza el éxito de tu start-up.",
      linkedin: "https://www.linkedin.com/in/isabeldarsin/"
    },
    {
      name: "Ignacio Ferreira",
      avatar: testimonialIgnacio,
      text: "Me ayudaron a estructurar mi startup desde cero. Aprendí a vender antes de tener producto. El networking con otros founders fue un plus enorme.",
      linkedin: "https://www.linkedin.com/in/ignacio-ferreira/"
    },
    {
      name: "Adrián Dutra",
      avatar: testimonialAdrian,
      text: "Pasé de estar perdido a tener un roadmap claro y ejecutable. Los mentores son cracks, te guían sin darte todo servido. Salís con habilidades reales.",
      linkedin: "https://www.linkedin.com/in/adrian-dutra/"
    },
    {
      name: "Camila Aguado",
      avatar: testimonialCamila,
      text: "Me ayudó de forma práctica y clara a llevar adelante mi emprendimiento. Novo es muy bueno!",
      linkedin: "https://www.linkedin.com/in/camilaaguado/"
    },
    {
      name: "Pol López",
      avatar: testimonialPol,
      text: "El acompañamiento fue increíble, por el conocimiento y la cercanía del equipo. Pero lo mejor es la comunidad: todos comparten, ayudan y suman. Emprender acompañado hace toda la diferencia.",
      linkedin: "https://www.linkedin.com/in/paullopezreyes/"
    },
    {
      name: "Maximiliano Fabián",
      avatar: testimonialMaximiliano,
      text: "El nivel de profundidad en las sesiones es impresionante. Te ayudan a pensar estratégicamente y ejecutar de forma táctica. Los resultados hablan solos.",
      linkedin: "https://www.linkedin.com/in/maxifabian"
    },
    {
      name: "Silvina Fernandez",
      avatar: testimonialSilvina,
      text: "Entre en el programa buscando orientación para poder llevar a cabo mi proyecto… Y al finalizar logre validar mi idea y lanzar mi MVP al mercado. A todos los que estén pensando en emprender no duden en que Novo es la mejor opción.",
      linkedin: "https://www.linkedin.com/in/silfernandez-liderarte/"
    },
    {
      name: "Juan Martín Cavallari",
      avatar: testimonialJuanMartin,
      text: "Novolabs me ayudó a pasar del concepto a la ejecución. Aprendí herramientas concretas que uso todos los días. La comunidad es un diferencial enorme.",
      linkedin: "https://www.linkedin.com/in/juan-mart%C3%ADn-cavallari-b25850ba"
    },
    {
      name: "Lisandro Belmonte",
      avatar: testimonialLisandro,
      text: "Tuve una gran experiencia en Novo, me enseñaron mucho y la comunidad siempre está dispuesta a ayudar. Muy recomendable!!",
      linkedin: "https://www.linkedin.com/in/lisandro-belmonte-942335279/"
    },
    {
      name: "Mercedes Rey",
      avatar: testimonialMercedes,
      text: "Cambió mi forma de pensar los negocios. Aprendí a testear rápido, fallar barato y validar antes de invertir. Hoy mi startup está creciendo gracias a lo que aprendí acá.",
      linkedin: "https://www.linkedin.com/in/mercedes-rey82/"
    },
 
    {
      name: "Lucas Zoppi",
      avatar: testimonialLucas,
      text: "Arranqué sin un norte claro y salí entendiendo por completo si mi emprendimiento va a funcionar o no. El nivel de atención es excelente y en cada clase me he llevado cosas que no tenía en consideración.",
      linkedin: "https://www.linkedin.com/in/zoppi/"
    },

  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[rgb(255,255,255)] px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-10 sm:mb-12 md:mb-16 text-center font-[Geist]" style={{ fontWeight: 800 }}>
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
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-1" style={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </p>
                  {/* Trustpilot Stars and LinkedIn */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00b67a] fill-[#00b67a]" />
                      ))}
                    </div>
                    {testimonial.linkedin ? (
                      <a 
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img 
                          src={linkedinIcon} 
                          alt="LinkedIn"
                          className="w-5 h-5 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
                        />
                      </a>
                    ) : (
                      <img 
                        src={linkedinIcon} 
                        alt="LinkedIn"
                        className="w-5 h-5 flex-shrink-0"
                      />
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
  );
};

const Footer = () => (
  <footer className="py-8 sm:py-10 md:py-12 bg-black border-t border-white/10 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
      <img src={logo} alt="Novolabs" className="h-7 sm:h-8" />
      <div className="text-gray-500 text-xs sm:text-sm text-center">
         {new Date().getFullYear()} Novolabs Startup School. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-lime-400 selection:text-black overflow-x-hidden">
        {/* Font Loading simulation */}
        <style>
        {`
          @import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap');
          
          .font-heading { 
            font-family: 'Geist', sans-serif; 
          }
          
          body { 
            font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
            font-variation-settings: 'wght' 400;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Geist', sans-serif;
          }
          
          p, span, a, div {
            font-family: 'Satoshi', sans-serif;
          }
        `}
        </style>

      <Navbar />
      <Hero />
      <IntroTestimonials />
      <VideoTestimonials />
      <TextTestimonials />
      
      {/* Final Nurturing CTA - Not a sales CTA, but a community/reassurance one */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center bg-black">
        <h3 className="text-xl sm:text-2xl md:text-2xl font-heading text-white mb-4 sm:mb-6 px-2 text-[32px]">¿Ready para la Entrevista?</h3>
        <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
            Aprovecha al máximo los 45 minutos para demostrarnos por qué deberías quedar entre los 20 equipos de la Próxima Edición.
        </p>
        <div className="inline-flex items-center gap-2 text-sm sm:text-base text-[#FF3A20] border-b border-[#FF3A20]/30 pb-0.5">
            Nos vemos pronto 🫡 <ChevronRight size={16} className="sm:w-5 sm:h-5" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
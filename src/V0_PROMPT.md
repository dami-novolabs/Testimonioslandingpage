# Prompt Optimizado para v0.dev

Copia este texto y pégalo directamente en v0 para generar la landing page:

---

## Prompt para v0:

Necesito crear una landing page para Novolabs Startup School en Next.js 14 con App Router.

### Diseño y Estética:
- Estilo moderno y minimalista
- Colores: Negro (#000), Blanco (#fff), Lime-400 (#c4ff00) como acento, Rojo (#FF3A20) para CTAs
- Fuentes: Geist (headings/títulos) y Satoshi Variable (body text)
- Selection color: lime-400 background, black text

### Estructura de la página:

1. **Navbar** (fixed top, z-50)
   - Background: black/90 con backdrop-blur
   - Logo Novolabs (h-8 sm:h-10)
   - Border bottom: white/10

2. **Hero Section** (centrado, bg-black)
   - Pre-header: "¿Qué opinan de Novolabs?" (uppercase, tracking-widest, bg-white/5)
   - Main heading (font-extrabold, text-3xl → 6xl responsive): "Opiniones reales de personas que ya pasaron por lo que vos estás pasando."
   - Sub-heading: "Descubrí los resultados que obtuvieron las personas que completaron nuestro Programa y aplicaron el Sistema de Validación Paga™"
   - CTA Button (bg-red #FF3A20, rounded-full, con ArrowRight icon): "Ver testimonios"
   - El botón hace scroll suave a la sección #intro-testimonials
   - Usar motion/react para fade-in animation (opacity 0→1, y: 20→0, duration: 0.6s)

3. **IntroTestimonials Section** (id="intro-testimonials", bg-white)
   - Heading: "Antes de seguir, leé esto:" con "leé esto:" en rojo
   - Subheading: "Algunas de las +300 personas que ya pasaron por Novolabs."
   - Grid: 1 col mobile → 3 cols desktop
   - 3 testimonios con:
     - Avatar circular (border-2 border-gray-200)
     - Nombre (font-semibold)
     - 5 estrellas Trustpilot (color #00b67a)
     - Ícono LinkedIn clickeable
     - Texto del testimonio (italic)
   - Footer: Rating "4.8" + 4.5 estrellas visual + "en Trustpilot" (link)

4. **VideoTestimonials Section** (bg-neutral-950)
   - Heading: "Opiniones reales, sin humo." con "sin humo." en rojo
   - Subheading: "Nada mejor que escuchar directamente a los personas que ya pasaron por lo que vos estás pasando ahora."
   - Grid: 1 col mobile → 2 cols desktop
   - 6 testimonios en video, cada card con:
     - Thumbnail horizontal (aspect-ratio 16:9)
     - Badge industria (top-left, bg-black/10, backdrop-blur)
     - Nombre debajo del badge
     - Play button centrado (círculo blanco/10, hover: lime-400, transition suave)
     - Quote en bottom (italic, font-semibold)
   - Al hacer click: abrir Dialog modal con iframe de YouTube (aspect 9:16, autoplay)
   - Botón X para cerrar (absolute -top-12 right-0, rounded-full, bg-white/90)

5. **TextTestimonials Section** (bg-white)
   - Heading: "Más y más testimonios" con "más testimonios" en rojo
   - Grid: 1 col mobile → 3 cols desktop
   - 15 testimonios con misma estructura que IntroTestimonials

6. **Final CTA Section** (bg-black, text-center)
   - Heading: "¿Ready para la Entrevista?"
   - Text: "Aprovecha al máximo los 45 minutos para demostrarnos por qué deberías quedar entre los 20 equipos de la Próxima Edición."
   - Footer text: "Nos vemos pronto 🫡" con ChevronRight icon (color rojo #FF3A20)

7. **Footer** (bg-black, border-top white/10)
   - Logo + Copyright: "2025 Novolabs Startup School. All rights reserved."
   - Flex: column mobile → row desktop

### Datos de Testimonios:

**IntroTestimonials (3):**
```
Alexy Narváez: "Es un proceso adaptado a cada industria, con acompañamiento real. Aprendí a testear mi idea sin tirar plata antes de tiempo. La comunidad es excelente, todos apoyándose."

Magdalena Laplacette: "Los chicos de Novolabs, tanto Dami, Tomi como todo el equipo de mentores, son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo mas importante, desafiandote a ir por todo."

Hernán Farruggia: "Entré con ideas vagas y salí con un plan claro. Me ayudaron a evitar errores costosos y a enfocarme en lo que realmente importa. Hoy ya tengo tracción real."
```

**VideoTestimonials (6):**
```
1. Magdalena Biassuto - Salud - "Mejoré mi idea original y encontré a mi socio tech dentro del Programa..." - https://www.youtube.com/embed/ESUN3E3aX3g

2. Raul Monge - Logística - "Conseguí mis primeros 15 clientes recurrentes en menos de 4 meses..." - https://www.youtube.com/embed/7F4_lbbzPKM

3. Roberto Jimenez - Legales - "Tengo una idea mucho más sólida y los primeros clientes..." - https://www.youtube.com/embed/XOs8wzErvVw

4. Laura Martinez - Energías Renovables - "Me gustó tanto el Programa que le cuento a todos de Novolabs ..." - https://www.youtube.com/embed/83F0dm9QVmY

5. Valentín Llorens - Educación - "Descubrí una nueva forma de emprender, me cambiaron la cabeza..." - https://www.youtube.com/embed/_cnUn0Q0uEs

6. Gabriel Vicentin - Deporte - "Ojalá hubiera conocido Novolabs hace muchos años atrás..." - https://www.youtube.com/embed/uloRdBDJsHw
```

**TextTestimonials (15):**
```
1. Henry: "Aprendí metodologías que aplicaré siempre. La parte de validación fue clave para mí: conseguí mis primeros clientes antes de lanzar. Es un programa serio, sin verso."

2. Tatiana Domínguez: "Nos ayudaron a validar el producto antes de desarrollarlo, ahorramos meses de trabajo. El nivel de feedback es brutal, te dicen la verdad sin filtros."

3. Luciano Schillagi: "Arranqué con dudas enormes sobre mi idea. Hoy tengo claridad total sobre qué hacer y cómo escalar. El equipo de Novolabs es increíble, te empujan a dar lo mejor."

4. Gerónimo Mársico: "Logré pivotar mi proyecto y encontrar product-market fit gracias al programa. La red de contactos que armé acá vale oro. Super recomendable para cualquier founder."

5. Isabel Darsin: "Los chicos de Novo son excelentes profesionales, tienen muchísima experiencia y un método para emprendedores que garantiza el éxito de tu start-up."

6. Ignacio Ferreira: "Me ayudaron a estructurar mi startup desde cero. Aprendí a vender antes de tener producto. El networking con otros founders fue un plus enorme."

7. Adrián Dutra: "Pasé de estar perdido a tener un roadmap claro y ejecutable. Los mentores son cracks, te guían sin darte todo servido. Salís con habilidades reales."

8. Camila Aguado: "Me ayudó de forma práctica y clara a llevar adelante mi emprendimiento. Novo es muy bueno!"

9. Pol López: "El acompañamiento fue increíble, por el conocimiento y la cercanía del equipo. Pero lo mejor es la comunidad: todos comparten, ayudan y suman. Emprender acompañado hace toda la diferencia."

10. Maximiliano Fabián: "El nivel de profundidad en las sesiones es impresionante. Te ayudan a pensar estratégicamente y ejecutar de forma táctica. Los resultados hablan solos."

11. Silvina Fernandez: "Entre en el programa buscando orientación para poder llevar a cabo mi proyecto… Y al finalizar logre validar mi idea y lanzar mi MVP al mercado. A todos los que estén pensando en emprender no duden en que Novo es la mejor opción."

12. Juan Martín Cavallari: "Novolabs me ayudó a pasar del concepto a la ejecución. Aprendí herramientas concretas que uso todos los días. La comunidad es un diferencial enorme."

13. Lisandro Belmonte: "Tuve una gran experiencia en Novo, me enseñaron mucho y la comunidad siempre está dispuesta a ayudar. Muy recomendable!!"

14. Mercedes Rey: "Cambió mi forma de pensar los negocios. Aprendí a testear rápido, fallar barato y validar antes de invertir. Hoy mi startup está creciendo gracias a lo que aprendí acá."

15. Lucas Zoppi: "Arranqué sin un norte claro y salí entendiendo por completo si mi emprendimiento va a funcionar o no. El nivel de atención es excelente y en cada clase me he llevado cosas que no tenía en consideración."
```

### Requisitos Técnicos:
- Next.js 14 con App Router
- TypeScript
- Tailwind CSS con clases responsive (sm:, md:, lg:)
- lucide-react para iconos (Play, Star, ArrowRight, ChevronRight, X)
- motion/react para animaciones (import { motion } from 'motion/react')
- shadcn/ui Dialog component para el modal de video
- Componentes con 'use client' cuando sea necesario (interactividad)
- Usar useState para controlar qué video se está reproduciendo
- Scroll suave con scrollIntoView({ behavior: 'smooth', block: 'start' })

### Estilos importantes:
- Font imports en globals.css:
  ```css
  @import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap');
  ```
- Geist para h1-h6, Satoshi para body text
- Selection: bg-lime-400, text-black
- Hover effects suaves en cards: hover:border-lime-400/50
- Play button hover: bg cambia a lime-400, texto a negro
- Shadows en botón CTA: shadow-lg shadow-[rgb(255,58,32)]/20

### Placeholders de imágenes:
- Logo: usar placeholder Novolabs logo
- Avatares: usar placeholders circulares con iniciales
- Thumbnails videos: usar placeholders con gradient oscuro y play button

Por favor genera la landing page completa, responsiva, con todos los componentes organizados en archivos separados siguiendo las best practices de Next.js 14 App Router.

---

## Prompt Alternativo (Más Corto):

Crea una landing page de testimonios para Novolabs Startup School en Next.js 14:

**Estructura:** Navbar fixed → Hero (centrado, CTA scroll) → 3 Testimonios intro (bg blanco) → 6 Videos horizontales (bg negro, modal) → 15 Testimonios texto (bg blanco) → CTA final → Footer

**Diseño:** Minimalista negro/blanco/lime-400. Fuente Geist (títulos) + Satoshi (body). Hero con animación motion. Videos con Dialog modal YouTube. Grid responsive 1→3 cols. 

**Detalles:** Estrellas Trustpilot (#00b67a), LinkedIn icons, play button hover lime-400, CTAs rojos (#FF3A20), scroll suave.

Incluye todos los testimonios con nombres reales, textos y URLs de YouTube que te pasé arriba.

---

**Consejo:** El primer prompt es más detallado y dará mejores resultados. El segundo es para iteraciones rápidas.

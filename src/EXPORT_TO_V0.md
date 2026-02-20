# Novolabs Startup School - Exportación a v0 (Next.js)

## 📋 Resumen del Proyecto

Landing page para Novolabs Startup School con estética moderna y minimalista.

**Colores principales:**
- Negro (#000000)
- Blanco (#ffffff)
- Lime-400 (#c4ff00) como acento
- Rojo (#FF3A20 / rgb(255,58,32)) para CTAs

**Estructura de la página:**
1. Navbar (fijo)
2. Hero (centrado con CTA scroll)
3. IntroTestimonials (3 testimonios destacados)
4. VideoTestimonials (6 testimonios en video, layout horizontal)
5. TextTestimonials (15+ testimonios en texto)
6. CTA Final
7. Footer

---

## 🎨 Tipografía

### Fuentes utilizadas:
- **Geist** (para títulos/headings): `font-family: 'Geist', sans-serif`
- **Satoshi Variable** (para body text): `font-family: 'Satoshi', sans-serif`

### Imports de fuentes:
```css
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap');
```

---

## 📦 Dependencias NPM

```json
{
  "dependencies": {
    "react": "^18.x",
    "next": "^14.x",
    "lucide-react": "latest",
    "motion": "latest",
    "embla-carousel-autoplay": "latest",
    "@radix-ui/react-dialog": "latest"
  }
}
```

**Componentes UI necesarios (shadcn/ui):**
- Dialog
- Carousel (con Embla Carousel)

---

## 🖼️ Assets e Imágenes

### Logo
- `logo.png` - Logo de Novolabs

### Avatares IntroTestimonials (3):
- `avatarAlexy.png`
- `avatarMagdalena.png`
- `testimonialHernan.png`

### Avatares TextTestimonials (15):
- `avatarHenry.png`
- `testimonialTatiana.png`
- `testimonialLuciano.png`
- `testimonialGeronimo.png`
- `testimonialIsabel.png`
- `testimonialIgnacio.png`
- `testimonialAdrian.png`
- `testimonialCamila.png`
- `testimonialPol.png`
- `testimonialMaximiliano.png`
- `testimonialSilvina.png`
- `testimonialJuanMartin.png`
- `testimonialLisandro.png`
- `testimonialMercedes.png`
- `testimonialLucas.png`

### Thumbnails VideoTestimonials Horizontal (6):
- `testimonialMagdalenaHorizontal.png`
- `testimonialRaulHorizontal.png`
- `testimonialRobertoHorizontal.png`
- `testimonialLauraHorizontal.png`
- `testimonialValentinHorizontal.png`
- `testimonialGabrielHorizontal.png`

### LinkedIn Icon:
- `linkedinIcon.png`

**NOTA:** Todas las imágenes deberán ser subidas a `/public/images/` en Next.js y referenciadas como `/images/[nombre].png`

---

## 🏗️ Estructura de Componentes

### 1. Navbar Component
```tsx
// Navbar fija con logo
// bg-black/90 con backdrop-blur
// Border bottom blanco/10
```

### 2. Hero Component
```tsx
// Layout centrado con:
// - Pre-header: "¿Qué opinan de Novolabs?"
// - Main heading: Opiniones reales
// - Sub-heading: Sistema de Validación Paga™
// - CTA rojo con scroll automático a #intro-testimonials
```

### 3. IntroTestimonials Component
```tsx
// Fondo blanco
// Grid 3 columnas (responsive a 1 col en mobile)
// Cada card con:
// - Avatar circular
// - Nombre
// - 5 estrellas Trustpilot
// - Ícono LinkedIn
// - Texto testimonio
// Footer con rating 4.8 y link a Trustpilot
```

### 4. VideoTestimonials Component
```tsx
// Fondo neutral-950
// Grid 2 columnas (responsive a 1 col en mobile)
// 6 testimonios en video
// Cada card con:
// - Thumbnail horizontal (16:9)
// - Badge industria (top-left)
// - Nombre (top-left)
// - Play button centrado
// - Quote (bottom)
// Modal con iframe YouTube al hacer click
```

### 5. TextTestimonials Component
```tsx
// Fondo blanco
// Grid 3 columnas (responsive a 1 col en mobile)
// 15 testimonios
// Misma estructura que IntroTestimonials
```

### 6. Footer Component
```tsx
// Fondo negro
// Logo + Copyright
```

---

## 📱 Responsive Breakpoints

- Mobile: `< 640px` (sm)
- Tablet: `640px - 768px` (md)
- Desktop: `> 768px` (lg)

**Clases Tailwind responsive usadas:**
- `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- `px-4 sm:px-6`
- `py-12 sm:py-16 md:py-20`
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## 🎬 Funcionalidad de Video Modal

**Lógica:**
1. Estado: `const [playingVideo, setPlayingVideo] = useState<number | null>(null)`
2. Al hacer click en thumbnail → setPlayingVideo(id)
3. Dialog se abre cuando playingVideo !== null
4. iframe de YouTube con autoplay
5. Botón X para cerrar (setPlayingVideo(null))

**YouTube embed URL:**
```
https://www.youtube.com/embed/[VIDEO_ID]?autoplay=1&fs=1&modestbranding=1&rel=0
```

---

## 🔗 Scroll Behavior (Hero CTA)

```tsx
const scrollToTestimonials = () => {
  const testimonialsSection = document.getElementById('intro-testimonials');
  if (testimonialsSection) {
    testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
```

**Importante:** El componente IntroTestimonials debe tener `id="intro-testimonials"`

---

## 🎨 Animaciones con Motion (Framer Motion)

**Hero animations:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**Import:**
```tsx
import { motion } from 'motion/react'
```

---

## 🎯 Datos de Testimonios

### IntroTestimonials (3 personas)

```tsx
[
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
```

### VideoTestimonials (6 videos)

```tsx
[
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
```

### TextTestimonials (15 personas)

```tsx
[
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
```

---

## 🎨 Estilos Globales (globals.css)

```css
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap');

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

.font-heading {
  font-family: 'Geist', sans-serif;
}

/* Selection color */
::selection {
  background-color: #c4ff00;
  color: #000000;
}
```

---

## 🔧 Configuración Tailwind CSS

**Colores custom a agregar en `tailwind.config.ts`:**

```typescript
export default {
  theme: {
    extend: {
      colors: {
        'novolabs-red': 'rgb(255, 58, 32)',
        'lime-400': '#c4ff00',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        heading: ['Geist', 'sans-serif'],
      },
    },
  },
}
```

---

## 📋 Checklist de Migración a v0

### Paso 1: Setup inicial
- [ ] Crear nuevo proyecto Next.js 14
- [ ] Instalar dependencias (lucide-react, motion, embla-carousel)
- [ ] Instalar shadcn/ui components (Dialog, Carousel)

### Paso 2: Assets
- [ ] Crear carpeta `/public/images/`
- [ ] Subir logo.png
- [ ] Subir 3 avatares IntroTestimonials
- [ ] Subir 15 avatares TextTestimonials
- [ ] Subir 6 thumbnails VideoTestimonials
- [ ] Subir linkedinIcon.png

### Paso 3: Estilos
- [ ] Configurar globals.css con imports de fuentes
- [ ] Configurar tailwind.config.ts con colores custom
- [ ] Agregar selection color (lime-400 bg, black text)

### Paso 4: Componentes
- [ ] Crear Navbar component
- [ ] Crear Hero component (con scroll function)
- [ ] Crear IntroTestimonials component
- [ ] Crear VideoTestimonials component (con Dialog modal)
- [ ] Crear TextTestimonials component
- [ ] Crear Footer component

### Paso 5: Datos
- [ ] Agregar datos IntroTestimonials (3)
- [ ] Agregar datos VideoTestimonials (6)
- [ ] Agregar datos TextTestimonials (15)

### Paso 6: Testing
- [ ] Verificar responsive en mobile
- [ ] Verificar scroll suave del CTA Hero
- [ ] Verificar videos se abren correctamente
- [ ] Verificar links de LinkedIn funcionan
- [ ] Verificar animaciones Motion

---

## 💡 Notas Importantes para v0

1. **Imágenes:** En Next.js usar `<Image>` de `next/image` en lugar de `<img>` para mejor performance
   ```tsx
   import Image from 'next/image'
   <Image src="/images/logo.png" alt="Novolabs" width={160} height={40} />
   ```

2. **YouTube iframes:** Usar el componente de Next.js para embeds si existe, o iframe estándar

3. **Metadata SEO:** Agregar metadata en `layout.tsx` o `page.tsx`:
   ```tsx
   export const metadata = {
     title: 'Novolabs Startup School - Opiniones Reales',
     description: 'Descubrí los resultados que obtuvieron las personas que completaron nuestro Programa y aplicaron el Sistema de Validación Paga™'
   }
   ```

4. **Font Optimization:** Next.js puede optimizar fuentes localmente con `next/font`:
   ```tsx
   import { GeistSans } from 'geist/font/sans'
   ```

5. **Scroll behavior:** En Next.js funciona igual que en React estándar, no hay cambios necesarios

6. **Motion/Framer Motion:** Importar como:
   ```tsx
   'use client' // Importante para Next.js App Router
   import { motion } from 'motion/react'
   ```

7. **Client Components:** Todos los componentes con interactividad (useState, onClick, etc.) deben tener `'use client'` en la primera línea

---

## 🚀 Estructura de Archivos Next.js Sugerida

```
/app
  /page.tsx (main page - integra todos los componentes)
  /layout.tsx (root layout con fonts y metadata)
  /globals.css

/components
  /Navbar.tsx
  /Hero.tsx
  /IntroTestimonials.tsx
  /VideoTestimonials.tsx
  /TextTestimonials.tsx
  /Footer.tsx
  /ui
    /dialog.tsx (shadcn)
    /carousel.tsx (shadcn)

/public
  /images
    logo.png
    avatarAlexy.png
    ... (todos los assets)

tailwind.config.ts
package.json
```

---

## 📞 Links Importantes

- **Trustpilot:** https://www.trustpilot.com/review/novolabs.xyz?languages=all
- **Rating Trustpilot:** 4.8/5 estrellas
- **Iconografía:** lucide-react (Play, Star, Quote, ChevronRight, ArrowRight, X, Linkedin)

---

## ✅ Elementos Clave del Diseño

### Navbar
- Altura: `h-14 sm:h-16`
- Logo altura: `h-8 sm:h-10`
- Background: `bg-black/90 backdrop-blur-md`
- Border: `border-b border-white/10`
- Posición: `fixed top-0 z-50`

### Hero
- Padding vertical: `pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20`
- Pre-header: texto uppercase, tracking-widest, bg-white/5
- Main heading: text-3xl → 6xl, font-weight 800, Geist
- CTA button: bg-[rgb(255,58,32)], rounded-full, con shadow

### IntroTestimonials
- Background: blanco
- Grid: 1 col mobile, 3 cols desktop
- Cards: border gray-200, hover:border-lime-400/50
- Estrellas Trustpilot: color #00b67a
- Footer: Rating 4.8 con link a Trustpilot

### VideoTestimonials
- Background: neutral-950
- Grid: 1 col mobile, 2 cols desktop
- Aspect ratio: 16:9
- Play button: bg-white/10, hover:bg-[#c4ff00]
- Modal: vertical (9:16), YouTube iframe con autoplay

### TextTestimonials
- Background: blanco
- Grid: 1 col mobile, 3 cols desktop
- Misma estructura que IntroTestimonials

### Footer
- Background: negro
- Logo + copyright
- Padding: `py-8 sm:py-10 md:py-12`

---

## 🎯 Call to Action Final

Texto:
```
¿Ready para la Entrevista?

Aprovecha al máximo los 45 minutos para demostrarnos por qué deberías quedar entre los 20 equipos de la Próxima Edición.

Nos vemos pronto 🫡
```

---

**Documento generado:** Enero 2025
**Versión:** 1.0
**Plataforma destino:** v0.dev (Next.js 14)

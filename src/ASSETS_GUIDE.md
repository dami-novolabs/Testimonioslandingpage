# Guía de Assets e Imágenes para v0

## 📸 Lista Completa de Assets Necesarios

### 🎨 Organización de Carpetas

```
/public
  /images
    ├── logo.png
    ├── linkedinIcon.png
    │
    ├── /intro-testimonials (3 avatares)
    │   ├── avatarAlexy.png
    │   ├── avatarMagdalena.png
    │   └── testimonialHernan.png
    │
    ├── /video-thumbnails (6 thumbnails horizontales)
    │   ├── testimonialMagdalenaHorizontal.png
    │   ├── testimonialRaulHorizontal.png
    │   ├── testimonialRobertoHorizontal.png
    │   ├── testimonialLauraHorizontal.png
    │   ├── testimonialValentinHorizontal.png
    │   └── testimonialGabrielHorizontal.png
    │
    └── /text-testimonials (15 avatares)
        ├── avatarHenry.png
        ├── testimonialTatiana.png
        ├── testimonialLuciano.png
        ├── testimonialGeronimo.png
        ├── testimonialIsabel.png
        ├── testimonialIgnacio.png
        ├── testimonialAdrian.png
        ├── testimonialCamila.png
        ├── testimonialPol.png
        ├── testimonialMaximiliano.png
        ├── testimonialSilvina.png
        ├── testimonialJuanMartin.png
        ├── testimonialLisandro.png
        ├── testimonialMercedes.png
        └── testimonialLucas.png
```

---

## 🔧 Especificaciones Técnicas

### Logo (logo.png)
- **Formato:** PNG con transparencia
- **Dimensiones recomendadas:** 300x80px (mantener aspect ratio original)
- **Uso:** Navbar y Footer
- **Color:** Blanco sobre fondo transparente
- **Peso:** < 50KB

### LinkedIn Icon (linkedinIcon.png)
- **Formato:** PNG con transparencia
- **Dimensiones:** 24x24px o 48x48px (2x)
- **Uso:** En cada card de testimonio
- **Color:** Azul LinkedIn original (#0077B5) o blanco
- **Peso:** < 5KB

### Avatares (Intro + Text Testimonials - 18 total)
- **Formato:** PNG o JPG
- **Dimensiones:** 200x200px mínimo (cuadrado)
- **Aspect ratio:** 1:1 (circular)
- **Calidad:** Alta (para retina displays)
- **Uso:** Cards de testimonios
- **Peso:** 20-50KB cada uno
- **Estilo:** Foto profesional, fondo neutro preferible

### Thumbnails de Videos (6 horizontales)
- **Formato:** JPG
- **Dimensiones:** 1920x1080px (Full HD) o 1280x720px (HD)
- **Aspect ratio:** 16:9 (horizontal)
- **Calidad:** Alta
- **Uso:** Preview de videos en grid
- **Peso:** 100-300KB cada uno
- **Contenido:** Frame del video con la persona visible, buena iluminación

---

## 📋 Checklist de Exportación desde Figma Make

Si tienes las imágenes en Figma Make, aquí está cómo exportarlas:

### Método 1: Descarga Manual
1. Abre el navegador en la página de Figma Make
2. Abre DevTools (F12 o Ctrl+Shift+I)
3. Ve a la tab "Network"
4. Filtra por "Images" o "PNG"
5. Refresca la página
6. Busca las URLs que empiezan con "figma:asset/..."
7. Click derecho → "Open in new tab"
8. Guarda cada imagen con el nombre correcto

### Método 2: Extracción del Código
Las imágenes en tu App.tsx están referenciadas como:
```tsx
import logo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';
import avatarAlexy from 'figma:asset/357fa7d0bd0c713763f827a98c33205e9666498c.png';
// ... etc
```

**Para obtener la URL real:**
1. Inspecciona el elemento `<img>` en el navegador
2. Copia el atributo `src` (será una URL blob o data URL)
3. Abre esa URL en nueva pestaña
4. Descarga la imagen

### Método 3: Script de Descarga Automática
Ejecuta este script en la consola del navegador mientras estás en Figma Make:

```javascript
// Script para descargar todas las imágenes
const images = document.querySelectorAll('img');
images.forEach((img, index) => {
  const url = img.src;
  const alt = img.alt || `image-${index}`;
  
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${alt}.png`;
      a.click();
    });
});
```

---

## 🎯 Mapeo de Assets (Figma Make → v0)

### Logo
```
Figma: figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png
v0: /images/logo.png
```

### LinkedIn Icon
```
Figma: figma:asset/e280c21258be5c310610d636aa1c8547c9bbf4d9.png
v0: /images/linkedinIcon.png
```

### IntroTestimonials (3)
```
Figma: figma:asset/357fa7d0bd0c713763f827a98c33205e9666498c.png
v0: /images/intro-testimonials/avatarAlexy.png

Figma: figma:asset/d7f6dc7f3678521bf318d48e23e875a7bc7d12b6.png
v0: /images/intro-testimonials/avatarMagdalena.png

Figma: figma:asset/cc20f02b3368e45eabae3306d5a7f50e9135f793.png
v0: /images/intro-testimonials/testimonialHernan.png
```

### VideoTestimonials Thumbnails (6)
```
Figma: figma:asset/26edca017d0b259ab49e6b9b2fb01fba3a4a5b1f.png
v0: /images/video-thumbnails/testimonialMagdalenaHorizontal.png

Figma: figma:asset/0ba2a044bcbab16554a443a7fac72d4b2c7a312f.png
v0: /images/video-thumbnails/testimonialRaulHorizontal.png

Figma: figma:asset/4e4b0c8392cb0766884cddd12062ccce9944ae58.png
v0: /images/video-thumbnails/testimonialRobertoHorizontal.png

Figma: figma:asset/9ac1a6ccf4f8b46511a94807695c5955f8ba4cda.png
v0: /images/video-thumbnails/testimonialLauraHorizontal.png

Figma: figma:asset/a5581dba223bb0c9bac7da1e88237b4c316ea876.png
v0: /images/video-thumbnails/testimonialValentinHorizontal.png

Figma: figma:asset/0eab3d0d9a32a51b77ee917ad85ce002873b059e.png
v0: /images/video-thumbnails/testimonialGabrielHorizontal.png
```

### TextTestimonials Avatares (15)
```
Figma: figma:asset/964b10b9ea451d0fd690274625429339b1f2c7f0.png
v0: /images/text-testimonials/avatarHenry.png

Figma: figma:asset/4d3051c79f854bfcc463fa10ed872e9632c25a4e.png
v0: /images/text-testimonials/testimonialTatiana.png

Figma: figma:asset/92034f3f453dcbbcd59dc236074a9ff3dc9a8b2d.png
v0: /images/text-testimonials/testimonialLuciano.png

Figma: figma:asset/fe6d4fc2f2b788fa313fa171409f26d209cac85a.png
v0: /images/text-testimonials/testimonialGeronimo.png

Figma: figma:asset/3cec8a9aed714105533cf3d6f87782199a5ee850.png
v0: /images/text-testimonials/testimonialIsabel.png

Figma: figma:asset/cd26386d497430d5b3d55b670351f85a39709627.png
v0: /images/text-testimonials/testimonialIgnacio.png

Figma: figma:asset/a9faa141ce6b7072194c3610b313d0098cbabe96.png
v0: /images/text-testimonials/testimonialAdrian.png

Figma: figma:asset/49811de49086e223b178d332ade284d72aaa6e2a.png
v0: /images/text-testimonials/testimonialCamila.png

Figma: figma:asset/da64513542d0aaa8ed00a6f2af46d59d767fd194.png
v0: /images/text-testimonials/testimonialPol.png

Figma: figma:asset/aa6664c278abde05fecbc925a3ded2b41c7fb1ef.png
v0: /images/text-testimonials/testimonialMaximiliano.png

Figma: figma:asset/b3ee8196152f5d99415fdff09cbf6c1d5d725b10.png
v0: /images/text-testimonials/testimonialSilvina.png

Figma: figma:asset/8eeba2d5fefc9f40d05ed7f2287c23d746b8336e.png
v0: /images/text-testimonials/testimonialJuanMartin.png

Figma: figma:asset/4c2da2f4c78fc2e2f84966c57313c7d974316967.png
v0: /images/text-testimonials/testimonialLisandro.png

Figma: figma:asset/840f33b8786a470cc038fd116612a6e322f4be2d.png
v0: /images/text-testimonials/testimonialMercedes.png

Figma: figma:asset/41158fbbb7ab4f985f1216401bfd950ab6e6ea1e.png
v0: /images/text-testimonials/testimonialLucas.png
```

---

## 🔄 Alternativa: Usar Placeholders en v0

Si no tienes tiempo de exportar todas las imágenes, v0 puede generar placeholders:

### Para Avatares:
```tsx
// v0 generará automáticamente avatares con iniciales
<div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
  AN {/* Iniciales */}
</div>
```

### Para Logo:
```tsx
// Placeholder de texto
<div className="text-white text-2xl font-bold">Novolabs</div>
```

### Para Thumbnails de Video:
```tsx
// Placeholder con gradient
<div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
  <Play className="w-16 h-16 text-white" />
</div>
```

**Después puedes reemplazar los placeholders con las imágenes reales.**

---

## 🚀 Optimización de Imágenes (Recomendado)

Antes de subir a v0/Next.js, optimiza las imágenes:

### Herramientas Online:
1. **TinyPNG** (https://tinypng.com/) - Compresión PNG/JPG
2. **Squoosh** (https://squoosh.app/) - Compresión avanzada
3. **ImageOptim** (https://imageoptim.com/) - App de escritorio (Mac)

### Formato recomendado para Next.js:
- **WebP** para mejor compresión (Next.js lo convierte automáticamente)
- Mantener PNG solo para logo con transparencia
- JPG para thumbnails de video

### Scripts de optimización:
```bash
# Usando sharp (Next.js lo incluye)
npm install sharp

# Script Node.js para batch optimization:
const sharp = require('sharp');
const fs = require('fs');

const inputFolder = './images-original';
const outputFolder = './public/images';

fs.readdirSync(inputFolder).forEach(file => {
  sharp(`${inputFolder}/${file}`)
    .resize(800, 800, { fit: 'inside' })
    .webp({ quality: 85 })
    .toFile(`${outputFolder}/${file.replace(/\.(png|jpg)$/, '.webp')}`);
});
```

---

## 📊 Peso Total Estimado

- Logo: 50KB
- LinkedIn Icon: 5KB
- 18 Avatares: ~540KB (30KB c/u)
- 6 Thumbnails: ~1.2MB (200KB c/u)
- **TOTAL: ~1.8MB**

Con optimización WebP: **~900KB** ✅

---

## ✅ Checklist Final de Assets

Antes de importar a v0, verifica que tienes:

- [ ] Logo en PNG transparente
- [ ] LinkedIn icon (puedes usar uno genérico si no tienes)
- [ ] 3 avatares para IntroTestimonials
- [ ] 6 thumbnails horizontales (16:9) para VideoTestimonials
- [ ] 15 avatares para TextTestimonials
- [ ] Todos los archivos renombrados correctamente
- [ ] Imágenes optimizadas (< 2MB total)
- [ ] Estructura de carpetas `/public/images/` creada

---

## 💡 Consejo Pro

Si v0 no permite subir imágenes directamente al inicio:

1. **Genera el código primero** con placeholders
2. **Despliega en Vercel** (v0 hace esto automáticamente)
3. **Sube las imágenes** al repositorio de GitHub después
4. Las imágenes estarán disponibles automáticamente en `/public/images/`

Alternativamente, puedes usar un CDN como:
- **Cloudinary** (gratis hasta 25GB)
- **Imgur** (gratis, pero menos profesional)
- **AWS S3** con CloudFront

Y referenciar las imágenes por URL:
```tsx
<Image src="https://cdn.cloudinary.com/[tu-cuenta]/logo.png" ... />
```

---

**Nota:** Si necesitas ayuda para exportar assets específicos desde Figma Make, déjame saber y te puedo guiar paso a paso.

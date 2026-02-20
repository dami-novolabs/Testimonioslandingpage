# 📦 Paquete Completo de Exportación a v0

## 🎯 Resumen Ejecutivo

Este paquete contiene **todo lo necesario** para clonar tu landing page de Novolabs Startup School desde Figma Make a v0 (Next.js).

---

## 📂 Archivos del Paquete

### 1. **EXPORT_TO_V0.md** 📘
**Documento maestro** con:
- Arquitectura completa del proyecto
- Especificaciones de diseño y colores
- Estructura de componentes
- Datos de todos los testimonios
- Configuración de Tailwind
- Checklist de migración paso a paso

**Úsalo para:** Entender el proyecto completo y como referencia.

---

### 2. **COMPONENTS_CODE.md** 💻
**Código listo para copy/paste** de:
- `/app/page.tsx` (página principal)
- `/app/layout.tsx` (layout raíz)
- `/components/Navbar.tsx`
- `/components/Hero.tsx`
- `/components/IntroTestimonials.tsx`
- `/components/VideoTestimonials.tsx`
- `/components/TextTestimonials.tsx`
- `/components/Footer.tsx`
- `/app/globals.css`
- `tailwind.config.ts`
- `package.json`

**Úsalo para:** Copiar y pegar directamente en v0 o tu proyecto Next.js.

---

### 3. **V0_PROMPT.md** 🤖
**Prompts optimizados para v0**:
- Prompt detallado (máxima precisión)
- Prompt corto (iteraciones rápidas)
- Incluye todos los datos y especificaciones

**Úsalo para:** Pegar directamente en v0.dev y generar la landing page automáticamente.

---

### 4. **ASSETS_GUIDE.md** 🖼️
**Guía completa de assets**:
- Lista de todas las imágenes necesarias (25 total)
- Especificaciones técnicas (dimensiones, formatos, peso)
- Mapeo Figma → v0
- Scripts de descarga y optimización
- Alternativas con placeholders

**Úsalo para:** Exportar y optimizar todas las imágenes.

---

## 🚀 Guía Rápida de Uso

### Opción A: Usar v0 (Recomendado - Más Rápido)

1. **Abre v0.dev** (https://v0.dev)
2. **Copia el prompt** de `/V0_PROMPT.md` (usa el prompt detallado)
3. **Pégalo en v0** y genera
4. **Revisa y ajusta** con el chat de v0
5. **Exporta a GitHub/Vercel** cuando esté listo
6. **Sube las imágenes** a `/public/images/` en tu repo

**Tiempo estimado:** 30-60 minutos

---

### Opción B: Código Manual (Máximo Control)

1. **Crea proyecto Next.js:**
   ```bash
   npx create-next-app@latest novolabs-landing
   cd novolabs-landing
   ```

2. **Instala dependencias:**
   ```bash
   npm install lucide-react motion embla-carousel-autoplay
   npx shadcn-ui@latest init
   npx shadcn-ui@latest add dialog
   ```

3. **Copia el código** de `/COMPONENTS_CODE.md`:
   - Cada componente en su archivo correspondiente
   - `globals.css` y `tailwind.config.ts`

4. **Descarga las imágenes** usando `/ASSETS_GUIDE.md`

5. **Sube imágenes** a `/public/images/`

6. **Ejecuta:**
   ```bash
   npm run dev
   ```

**Tiempo estimado:** 2-3 horas

---

## 📋 Checklist Completo

### Pre-requisitos
- [ ] Cuenta en v0.dev o Node.js instalado
- [ ] Acceso a las imágenes de Figma Make
- [ ] GitHub account (para deployment)

### Paso 1: Generación
- [ ] Generar proyecto con v0 o create-next-app
- [ ] Copiar código de componentes
- [ ] Configurar Tailwind y fonts

### Paso 2: Assets
- [ ] Descargar logo (1)
- [ ] Descargar LinkedIn icon (1)
- [ ] Descargar avatares IntroTestimonials (3)
- [ ] Descargar thumbnails VideoTestimonials (6)
- [ ] Descargar avatares TextTestimonials (15)
- [ ] Optimizar imágenes (TinyPNG/Squoosh)
- [ ] Subir a `/public/images/`

### Paso 3: Testing
- [ ] Verificar navbar fixed funciona
- [ ] Probar scroll del Hero CTA
- [ ] Abrir modales de video (6)
- [ ] Verificar links de LinkedIn
- [ ] Probar responsive mobile
- [ ] Verificar animaciones Motion

### Paso 4: Deployment
- [ ] Push a GitHub
- [ ] Deploy en Vercel
- [ ] Configurar dominio (opcional)
- [ ] Resolver DNS si hay issues (ver nota abajo)

---

## ⚠️ Notas Importantes

### DNS Error 1000 en Cloudflare
Si deployeas en Vercel y usas Cloudflare DNS:
- **Problema:** DNS Error 1000 después de deployment
- **Solución:** En Cloudflare DNS, cambiar el proxy a "DNS only" (nube gris)
- Esto pasó cuando moviste archivos entre workspaces en Figma Make

### Fuentes (Geist y Satoshi)
- Las fuentes se cargan desde Google Fonts y Fontshare
- No necesitas descargarlas localmente
- Si quieres optimizar, usa `next/font` (ver `COMPONENTS_CODE.md`)

### Videos de YouTube
- Los iframes de YouTube cargan con `autoplay=1`
- Algunos navegadores bloquean autoplay → normal
- Los usuarios pueden darle play manualmente si falla

### Imágenes Missing
- Si no tienes tiempo de exportar todas las imágenes, v0 generará placeholders
- Puedes reemplazarlas después sin romper nada

---

## 🎨 Personalización Post-Exportación

Una vez que tengas el proyecto en v0/Next.js, puedes personalizar:

### Colores
Edita `tailwind.config.ts`:
```typescript
colors: {
  'novolabs-red': 'rgb(255, 58, 32)', // Cambia aquí
  'lime-400': '#c4ff00', // O aquí
}
```

### Textos
Todos los textos están hardcoded en los componentes:
- Hero heading/subheading: `/components/Hero.tsx`
- Testimonios: Arrays dentro de cada componente
- CTA final: `/app/page.tsx`

### Añadir más testimonios
1. Agrega objeto al array en el componente
2. Sube la imagen de avatar
3. Actualiza el import

### Videos
Cambia URLs en `VideoTestimonials.tsx`:
```typescript
videoUrl: "https://www.youtube.com/embed/[TU_VIDEO_ID]"
```

---

## 📊 Métricas del Proyecto

### Componentes
- **Total:** 7 componentes
- **Pages:** 1 (page.tsx)
- **Layout:** 1 (layout.tsx)

### Assets
- **Total:** 25 imágenes
- **Peso optimizado:** ~900KB
- **Peso sin optimizar:** ~1.8MB

### Código
- **Líneas de código:** ~800-1000 LOC
- **TypeScript:** 100%
- **Componentes client:** 6 (con interactividad)
- **Componentes server:** 1 (Footer puede ser)

### Performance (estimado)
- **Lighthouse Score:** 90-95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Total Page Size:** < 2.5MB

---

## 🆘 Troubleshooting

### "motion is not defined"
```bash
npm install motion
# Import: import { motion } from 'motion/react'
```

### "Dialog component not found"
```bash
npx shadcn-ui@latest add dialog
```

### Imágenes no cargan
- Verifica que estén en `/public/images/`
- Paths deben ser `/images/[nombre].png` (sin /public)
- Next.js sirve /public como raíz

### Fonts no se ven
- Verifica los imports en `globals.css`
- Asegúrate que `font-heading` y `font-sans` estén en Tailwind config
- Revisa que los inline styles `fontFamily: 'Geist'` estén presentes

### Scroll suave no funciona
- Verifica que el componente tenga `id="intro-testimonials"`
- Debe estar en IntroTestimonials, línea 1 del component

### Video modal no cierra
- Verifica que el Dialog de shadcn esté instalado
- El estado `playingVideo` debe ser `null` para cerrar

---

## 📞 Recursos Adicionales

### Links útiles:
- **v0.dev:** https://v0.dev
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Motion (Framer Motion):** https://motion.dev
- **lucide-react icons:** https://lucide.dev

### CDNs para imágenes:
- **Cloudinary:** https://cloudinary.com (gratis 25GB)
- **Vercel Blob:** https://vercel.com/docs/storage/vercel-blob (integrado)
- **Supabase Storage:** https://supabase.com/docs/guides/storage

### Optimización de imágenes:
- **TinyPNG:** https://tinypng.com
- **Squoosh:** https://squoosh.app
- **ImageOptim:** https://imageoptim.com

---

## ✅ Validación Final

Antes de considerar el proyecto completo, verifica:

### Visual
- [ ] Navbar se queda fijo al hacer scroll
- [ ] Hero tiene animación fade-in
- [ ] Colores: negro/blanco/lime/rojo están correctos
- [ ] Fuentes: Geist en títulos, Satoshi en body
- [ ] Estrellas Trustpilot son verdes (#00b67a)

### Funcional
- [ ] CTA Hero hace scroll suave
- [ ] Videos se abren en modal
- [ ] Modal se cierra con botón X
- [ ] Links de LinkedIn abren en nueva pestaña
- [ ] Link de Trustpilot funciona

### Responsive
- [ ] Mobile (< 640px): 1 columna, textos legibles
- [ ] Tablet (640-768px): transición suave
- [ ] Desktop (> 768px): 3 columnas en testimonios

### Performance
- [ ] Imágenes optimizadas (< 2MB total)
- [ ] No hay errores en consola
- [ ] Página carga en < 3 segundos

---

## 🎉 Resultado Final

Una landing page profesional, moderna y completamente funcional para Novolabs Startup School, lista para:
- ✅ Recibir tráfico real
- ✅ Convertir visitantes
- ✅ Mostrar testimonios de forma impactante
- ✅ Escalar y mantener fácilmente

---

**¡Éxito con la migración a v0!** 🚀

Si tienes preguntas o encuentras algún problema, revisa los documentos detallados o consulta la sección de Troubleshooting.

---

**Documento generado:** Enero 2025  
**Versión:** 1.0  
**Plataforma destino:** v0.dev (Next.js 14)  
**Autor:** Asistente de Figma Make

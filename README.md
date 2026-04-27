# Red Educativa México - Versión HTML Estática

## 📋 Descripción

Este es una versión **completamente estática en HTML** del portal educativo Red Educativa México. Se trata de una réplica visual del sitio original creado con React, pero sin dependencias del backend, completamente funcional como sitio estático.

## 📁 Estructura de Archivos

```
html/
├── index.html                    # Página de inicio principal
├── nosotros.html                 # Página "Acerca de Nosotros"
├── oferta-educativa.html         # Página de programas educativos
├── contacto.html                 # Formulario y datos de contacto
├── noticias.html                 # Sección de noticias
├── sucursales.html               # Ubicaciones de sucursales
├── acuerdo286.html               # Información Acuerdo 286
├── ingles.html                   # Programa de inglés
├── carreras-policiales.html      # Programas de seguridad pública
├── becas.html                    # Información de becas y apoyos
├── login.html                    # Página de inicio de sesión
├── style.css                     # Estilos globales (CSS completo)
├── script.js                     # Interactividad (carrusel, menú móvil, etc.)
└── README.md                     # Este archivo
```

## 🎨 Características Visuales

- **Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y desktops
- **Header Sticky**: Navegación fija en la parte superior
- **Menú Móvil**: Menú hamburguesa funcional para dispositivos móviles
- **Carrusel Automático**: En la página de inicio con control manual
- **Dropdown Menus**: Menús desplegables en la navegación
- **Footer Dinámico**: Con información de contacto y redes sociales
- **Paleta de Colores**: Rojo vino (#9b2247), dorado (#D4AF37) y verdes
- **Tipografía**: System fonts modernos (Segoe UI, Roboto, etc.)

## 🔧 Tecnologías Utilizadas

- **HTML5**: Semántica y estructura
- **CSS3**: Flexbox, Grid, Animaciones
- **JavaScript Vanilla**: Sin dependencias externas
- **Font Awesome 6.4**: Iconografía
- **Google Fonts**: (Opcional, usa system fonts)

## 📱 Componentes Principales

### Header/Navbar
- Top bar con información de contacto
- Logo y navegación principal
- Menú móvil responsive
- Dropdown para "Oferta Educativa"

### Hero Section
- Título principal con gradiente
- Subtítulo descriptivo
- Responsive en todos los tamaños

### Carrusel
- Auto-reproducción cada 5 segundos
- Controles de puntos (dots) clickeables
- Transiciones suaves

### Grillas de Contenido
- Grid responsive que se adapta a cualquier tamaño
- Tarjetas con sombras y efectos hover
- Contenido estático pero editable

### Footer
- Gradiente de rojo vino
- Información de contacto
- Enlaces a redes sociales
- Copyright

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en navegador
Simplemente abre cualquiera de los archivos `.html` en tu navegador (Chrome, Firefox, Edge, Safari, etc.)

### Opción 2: Usar un servidor local
Para evitar problemas CORS, es mejor servir con un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes http-server instalado)
http-server

# Con Live Server (VS Code)
# Instala la extensión "Live Server" y haz clic derecho > Open with Live Server
```

Luego abre `http://localhost:8000` en tu navegador.

## 📄 Páginas Disponibles

| Página | URL | Descripción |
|--------|-----|------------|
| Inicio | `index.html` | Página principal con carrusel y noticias |
| Nosotros | `nosotros.html` | Información sobre la institución |
| Oferta Educativa | `oferta-educativa.html` | Listado de programas |
| Contacto | `contacto.html` | Formulario de contacto (sin backend) |
| Noticias | `noticias.html` | Artículos de noticias |
| Sucursales | `sucursales.html` | Ubicaciones con mapas |
| Acuerdo 286 | `acuerdo286.html` | Información Acuerdo 286 |
| Inglés | `ingles.html` | Programas de idioma |
| Carreras Policiales | `carreras-policiales.html` | Programas especializados |
| Becas | `becas.html` | Información de becas |
| Login | `login.html` | Página de inicio de sesión |

## 🎯 Funcionalidades JavaScript

### Carrusel
```javascript
// Auto-avanza cada 5 segundos
// Puede controlarse con los dots
// Se reinicia al hacer clic en dot
```

### Menú Móvil
```javascript
// Abre/cierra con el botón hamburguesa
// Se cierra al seleccionar un enlace
// Responsive a 768px
```

### Dropdown de Oferta Educativa
```javascript
// Se abre/cierra con clic
// Se cierra al hacer clic fuera
```

## 🎨 Personalización

### Cambiar Colores
Edita el `:root` en `style.css`:

```css
:root {
  --color-wine: #9b2247;  /* Rojo vino */
  --color-gold: #a57f2c;  /* Dorado */
  --color-green: #1e5b4f; /* Verde */
  /* ... más variables */
}
```

### Cambiar Contenido
Todos los textos están en HTML, simplemente busca y reemplaza en los archivos `.html`

### Agregar Nuevas Páginas
1. Copia cualquier página existente (p. ej., `nosotros.html`)
2. Renómbrala según el tema
3. Edita el contenido
4. Añade el enlace en la navegación del header

### Cambiar Imágenes
- Reemplaza las URLs de `placeholder.com` con tus propias imágenes
- O usa imágenes locales: `<img src="images/mi-imagen.jpg">`

## 📝 Notas Importantes

- ⚠️ **Formularios**: Los formularios contacto/login son estáticos (no envían datos)
- ⚠️ **Carrusel**: Usa imágenes de placeholder. Reemplaza con tus propias imágenes
- ✅ **Totalmente funcional**: Todos los enlaces, navegación y efectos funcionan
- ✅ **SEO friendly**: Usa HTML semántico
- ✅ **Rápido**: Sin dependencias externas, carga muy rápidamente

## 🔗 Enlaces Externos

Todos los enlaces a redes sociales y números de teléfono están configurados:

- Facebook: https://web.facebook.com/RedEduMex/
- Instagram: https://www.instagram.com/rededucativamexico/
- TikTok: https://www.tiktok.com/@rededucativamex
- Teléfono: 800 0440 189

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móviles
- ✅ Tablets

## 🎓 Mejoras Futuras

Para convertir esto a un sitio dinámico, podrías:

1. Conectar a una API backend
2. Agregar funcionalidad de formularios
3. Implementar sistema de login real
4. Agregar galería dinámica de noticias
5. Integrar carrito de compra (si aplica)

## 📞 Soporte

Para preguntas sobre esta versión estática, revisa:
1. El código JavaScript en `script.js`
2. Los estilos en `style.css`
3. Cada página HTML para entender su estructura

## 📄 Licencia

Este proyecto es una versión estática de Red Educativa México.

---

**Versión**: 1.0
**Fecha**: Abril 2026
**Autor**: Red Educativa México

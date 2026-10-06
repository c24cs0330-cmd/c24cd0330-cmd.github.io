# SmartPyme — Landing Page

Sitio web de **SmartPyme Consultoría Empresarial** (Ciudad Serdán, Puebla).

## Estructura

```
smartpyme-site/
├── index.html          → Página principal
├── css/
│   └── styles.css      → Estilos y animaciones
├── js/
│   └── main.js         → Menú, scroll reveal y formulario
├── img/
│   ├── smartpyme-logo.png / .svg
│   ├── sp-icon.png / .svg / -512.png
│   └── favicon*.png
└── README.md
```

## Publicar en Netlify

1. Entra a https://app.netlify.com → **Add new site** → **Deploy manually**.
2. Arrastra **toda esta carpeta** (`smartpyme-site`).
3. Listo: obtendrás una URL `https://….netlify.app`.

O sube el contenido a un repositorio de GitHub e importa el proyecto en Netlify (Publish directory: `.`).

## Formulario de contacto

- Los mensajes se envían a: **c24cs0330@cdserdan.tecnm.mx**
- El interesado recibe un correo de confirmación automático.

**Activación (solo una vez):**
1. Publica el sitio en HTTPS.
2. Envía un mensaje de prueba desde el formulario.
3. Abre el correo de FormSubmit en `c24cs0330@cdserdan.tecnm.mx` y confirma el enlace.

> El formulario no funciona abriendo el HTML en local (`file://`).

## Probar en local

Abre `index.html` en el navegador (doble clic o Live Server en VS Code).  
Las animaciones y el diseño se verán; el envío de correo solo en producción.

## Personalización

| Elemento | Archivo |
|----------|---------|
| Textos y secciones | `index.html` |
| Colores, tipografía, animaciones | `css/styles.css` |
| Menú móvil, reveal, envío del form | `js/main.js` |
| Correo destino | `index.html` → `action` del formulario FormSubmit |

© 2026 SmartPyme Consultoría Empresarial · Ciudad Serdán, Puebla

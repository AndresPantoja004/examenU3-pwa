# Documentación del Proyecto Web
**Autor:** Andrés Pantoja

## Descripción General
Este proyecto consiste en un sitio web informativo estructurado mediante un *layout* principal reutilizado en todas las páginas. Cada página cuenta con su propio contenido y estilos personalizados, lo que permite mantener coherencia visual y adaptarse a la temática de cada sección.

## Estructura del Proyecto
- **layout.html** (plantilla base que sirve como estructura para todas las páginas)
- **index.html** (Página de inicio)
- **sobre.html** (Información institucional)
- **oferta-academica.html** (Presenta las ofertas académicas)
- **admision.html** (Proceso de admisión y requisitos)
- **contacto.html** (Formulario de contacto con envío sin recarga)
- **CSS personalizados** (Uno por página o sección especial)

## 1. Layout Base
El layout contiene:
- Encabezado con logotipo y menú de navegación.
- Contenedor principal para insertar el contenido de cada página.
- Pie de página con información de derechos de autor.

Beneficio: Evita la repetición de código HTML común.

---

## 2. Páginas creadas

### 2.1. sobre.html
Página con información institucional y valores de la institución.  
**Estilos personalizados:** Enfocados en mostrar la información de forma clara y agradable, con tipografía legible y secciones bien diferenciadas.

### 2.2. oferta-academica.html
Muestra las diferentes ofertas académicas con tarjetas modernas.  
**Estilos personalizados:** Diseño *grid* con sombras suaves, imágenes destacadas y efectos *hover* para interacción.

### 2.3. admision.html
Explica los requisitos y el proceso de admisión.  
**Estilos personalizados:** Uso de cajas con numeración, colores distintivos y secciones separadas para cada paso.

### 2.4. contacto.html
Formulario de contacto que permite enviar un mensaje sin recargar la página, mostrando un mensaje de confirmación.  
**Estilos personalizados:** Diseño limpio del formulario, campos bien espaciados y un botón de envío moderno.

---

## 3. Funcionalidad de envío sin recarga
En `contacto.html` se implementó un script JavaScript que:
1. Previene la recarga del formulario.
2. Captura el evento de envío.
3. Muestra un mensaje de confirmación sin perder el contenido de la página.

Ejemplo:
```javascript
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Formulario enviado con éxito!");
});
```

---

## 4. Estilos Personalizados
Cada página cuenta con su propio archivo CSS:
- **sobre.css:** Tipografía clara, márgenes amplios.
- **oferta.css:** Tarjetas modernas, disposición en *grid*.
- **admision.css:** Secciones numeradas y organizadas.
- **contacto.css:** Campos de formulario elegantes y botón con transición.

---

## 5. Conclusiones
Gracias a la utilización de un *layout* base, se redujo la repetición de código y se logró un diseño consistente. Las páginas mantienen su identidad visual mediante CSS personalizado. Además, la implementación de JavaScript mejoró la experiencia del usuario al evitar recargas innecesarias.

# John Dalton y la salud visual

Un proyecto escolar sobre cuidado visual, lentes y herramientas de accesibilidad. Incluye prestadores de atención en Pasto, Nariño, y una guía para aprender cómo se construye el sitio.

El portal es informativo. Las pruebas, los probadores de monturas y los contactos de atención llevan a sitios externos. Aquí no se hacen compras ni se toman fotografías.

## Cómo abrir el proyecto

Necesitas **Hugo 0.161.0 o una versión posterior**. Hugo es un programa que une nuestras plantillas para crear páginas HTML. No necesitas instalar Node, paquetes de npm ni un tema.

1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta este comando:

   ```sh
   hugo server
   ```

3. Abre <http://localhost:1313/> en el navegador de tu computador.
4. Para leer la guía, entra a <http://localhost:1313/guia-estudiantes/>.

Hugo actualiza el navegador cuando guardas cambios. Para detenerlo, vuelve a la terminal y presiona `Ctrl+C`.

Si ya tenías Hugo abierto antes de agregar las carpetas del proyecto, detenlo y vuelve a iniciarlo. Evita ejecutar dos servidores que escriban a la vez en `public/`.

## Cómo crear la versión para publicar

Ejecuta:

```sh
hugo
```

Los archivos listos para publicar quedan en `public/`. No edites esa carpeta: Hugo vuelve a crear su contenido.

Si ya conoces la dirección de publicación, indícala al construir el sitio. Conserva la barra final:

```sh
hugo --baseURL https://ejemplo.edu.co/salud-visual/
```

Los enlaces locales usan la función `relURL` de Hugo o la dirección de cada página. Así también funcionan cuando el sitio está dentro de una subcarpeta, como `salud-visual/`.

## Dónde está cada parte

Una **plantilla** es un archivo HTML con instrucciones para Hugo. Un **parcial** es una plantilla pequeña que se incluye dentro de otra.

| Archivo o carpeta | Para qué sirve |
| --- | --- |
| `hugo.toml` | Nombre, idioma y descripción del sitio. |
| `layouts/baseof.html` | Estructura compartida de las páginas. |
| `layouts/home.html` | Orden de las secciones del portal. |
| `layouts/student-guide.html` | Orden de los módulos de la guía. |
| `layouts/_partials/` | Encabezado, pie y herramientas de lectura. |
| `layouts/_partials/sections/` | Textos y estructura de las secciones del portal. |
| `layouts/_partials/guide/` | Explicaciones y ejercicios para estudiantes. |
| `content/guia-estudiantes.md` | Título y selección de la plantilla de la guía. |
| `data/providers.yaml` | Fichas de los prestadores de Pasto. |
| `data/software.yaml` | Fichas de los programas de accesibilidad. |
| `static/css/` | Estilos comunes y estilos de la guía. |
| `static/js/` | Controles de texto e interacciones de la guía. |
| `static/images/` | Logotipo e imágenes locales. |
| `static/examples/` | Ejemplo autónomo y su descarga ZIP. |

Los diseños originales, planes e informes se guardan en `docs/`. Esta carpeta está excluida de Git por acuerdo del proyecto.

## Cómo cambiar un texto o un estilo

Para editar una sección, abre su archivo dentro de `layouts/_partials/sections/`. Por ejemplo, `lenses.html` contiene la información sobre lentes. Cambia el texto, guarda y revisa el navegador.

Los estilos están separados del HTML. `static/css/main.css` contiene la apariencia general. `static/css/guide.css` agrega los estilos propios de la guía. Las variables al comienzo del CSS guardan colores que se reutilizan en varias partes.

El diseño está dirigido a computadores. Mantén el CSS sencillo y revisa que el texto siga disponible al ampliar el navegador. Escribe los comentarios en español y explica el propósito de las decisiones que puedan resultar difíciles de entender.

## Cómo añadir un prestador

Primero confirma su nombre, servicios y dirección en Pasto en una fuente oficial. Después abre `data/providers.yaml` y agrega una ficha con esta estructura:

```yaml
- nombre: Fundación Oftalmológica de Nariño · Fundonar
  servicio: Oftalmología y optometría
  descripcion: Consulta los servicios y canales de atención de la sede de Pasto.
  direccion: Carrera 36 N.º 3 Oeste 70, barrio Colón, Pasto.
  url: https://fundonar.com/sede-pasto/
  fuente: https://fundonar.com/sede-pasto/
  verificado: "18/10/2026"
```

YAML organiza datos mediante nombres y valores. Respeta los espacios de la ficha y no uses tabulaciones. Si un valor contiene `#`, pon el valor completo entre comillas: de otro modo, YAML puede tomar el resto como un comentario. Cambia la fecha cuando vuelvas a consultar la fuente. El portal mostrará la nueva tarjeta sin que tengas que copiar HTML.

No completes datos por suposición. Estar en esta lista no significa que el portal recomiende o califique al prestador. Confirma con él los horarios y condiciones de atención.

## Cómo actualizar un programa de apoyo

Edita `data/software.yaml`. Cada ficha tiene `nombre`, `plataforma`, `descripcion`, `nota`, `url` y `enlace`. El campo `enlace` es el texto del botón. Verifica los cambios en el sitio del responsable del programa; las licencias y plataformas pueden cambiar.

## Cómo mantener el ejemplo descargable

El ejemplo está en `static/examples/pausa-visual/`. Tiene tres archivos: `index.html`, `style.css` y `script.js`. Puedes abrir su HTML directamente en un navegador, sin conexión. El mismo script controla los temporizadores del portal y de la guía; esta última muestra su código para estudiarlo.

Si cambias cualquiera de los tres archivos, vuelve a crear el ZIP. En PowerShell, desde la raíz del proyecto:

```powershell
Compress-Archive -Path static/examples/pausa-visual/* -DestinationPath static/examples/pausa-visual.zip -Force
```

Comprueba que el ZIP se descargue y que el ejemplo funcione después de extraerlo.

## Qué revisar antes de compartir cambios

Construye el sitio con `hugo`. Después recorre ambas páginas con el teclado, comprueba los enlaces y prueba los controles de texto y los temporizadores. Amplía el navegador hasta el 200 por ciento y revisa que no se corten textos ni botones.

El contenido debe seguir disponible sin JavaScript. Los controles que necesitan JavaScript aparecen cuando están preparados. Las páginas no descargan bibliotecas ni fuentes externas para funcionar; los enlaces a otros sitios sí necesitan internet.

Consulta la [documentación oficial de Hugo](https://gohugo.io/documentation/), la [guía de imágenes accesibles de W3C](https://www.w3.org/WAI/tutorials/images/decision-tree/) y la [guía de navegación por teclado de W3C](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) para aprender más.

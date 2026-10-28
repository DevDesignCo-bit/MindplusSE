# Mind+ Sverige — landings
Abre index.html en un navegador. No requiere instalar nada ni conexión a internet.

## Pantallas
- index.html: entrada de móvil, sueco por defecto.
- index.html?lang=en: entrada de móvil en inglés.
- pin.html: PIN en sueco.
- pin.html?lang=en: PIN en inglés.
- terms.html: términos en sueco.
- privacy.html: privacidad en sueco.
- cookies.html: política de cookies en sueco, enlazada desde los términos.
- Diseño móvil y tablet; composición desktop de dos columnas desde 900 px.
- Botones con parpadeo suave; respeta la preferencia de movimiento reducido.
- El selector de idioma traduce todo el texto HTML de las landings. Las etiquetas de habilidades en inglés forman parte de img.png.
- Las páginas legales se muestran en sueco, incluso cuando se accede desde la landing inglesa. La vuelta conserva el idioma y el paso de origen.

## Contenido
Se conservan los PNG originales sin modificar.
Oferta de las referencias: 100 SEK/semana, +18 y STOP Mind+ al 72300.
El teléfono [XXXXXXXXX] se conserva porque falta el número real en la referencia. Sustituir en index.html y pin.html.
No hay dependencias externas, fuentes remotas, analítica ni cookies añadidas por esta maqueta.

## Fuentes legales y alcance
Términos: adaptación al sueco de https://mindplus.store/info/terms (consultado el 28 de octubre de 2026), con los datos del diseño sueco. Se han sustituido los marcadores de país, moneda, periodicidad y precio por Suecia, SEK, semanal y 100. Se ha aplicado +18 de la landing en vez del texto genérico de menores de la web. El apartado de datos personales remite a la política de privacidad en vez de repetir la referencia obsoleta a Data Protection Act 1998.
Privacidad: versión sueca basada en el contenido de Mind+/Slovakia GOODGAMES/Zásady ochrany osobných údajov.png, ya existente en este proyecto, con contacto support@mindplus.store. No se ha podido localizar una Privacy Policy pública accesible en mindplus.store. No es una traducción verificada de una página web de privacidad sueca aprobada.
Cookies: adaptación al sueco de https://mindplus.store/info/cookies.
Las páginas legales reproducen el fondo oscuro, encabezado con flecha y tarjeta clara de la referencia. La navegación vuelve a la landing local.

## Integración pendiente
Este es un frontend estático. No envía SMS, no comprueba PIN y no realiza cobros ni activa suscripciones.
Fortsätt/Continue acepta cualquier valor de móvil sin restricciones de país, formato o longitud y lleva a la maqueta PIN.
Bekräfta/Confirm acepta cualquier PIN y muestra que la verificación no está conectada. No muestra una falsa activación.
Antes de producción, integrar el envío y verificación de PIN con el proveedor, conservar el móvil de forma segura y activar el servicio únicamente tras respuesta válida del backend.
Los puntos de integración están comentados en app.js. No se escriben teléfonos ni PIN en URL, almacenamiento local ni logs.

## Comprobación
JavaScript: sintaxis verificada con node --check. HTML: UTF-8, etiquetas, identificadores y 38 referencias locales verificados sin errores. No ha sido posible realizar la revisión visual en navegador por las restricciones de la vista previa de archivos locales.

# BRIEF DE DISEÑO — Landing de campaña
## smpsinmiedo.pe · Partido Morado · San Martín de Porres 2026

---

## 1. QUÉ ES

Landing page de campaña municipal. Una sola página con scroll y secciones ancladas.
**Mobile-first**: el 90% del tráfico entra por celular, escaneando un QR desde un afiche en la calle.

**Candidato:** Ing. Luis Alberto Flores Roldán — Alcalde de SMP 2027-2030
**Partido:** Partido Morado
**Elección:** 4 de octubre de 2026
**Importante:** el elector marca el LOGO del partido en la cédula, NO un número de lista.

---

## 2. CÓMO LLEGA LA GENTE (define la arquitectura)

Cada afiche en la calle lleva un QR que apunta a un ancla específica de la página.
El vecino escanea una pregunta y debe caer directo en su respuesta.

| Afiche en la calle | Ancla de destino |
|---|---|
| "Haremos que tu casa se revalorice. Averigua cómo" | `#tu-casa` |
| "Descubre cómo haremos que los delincuentes tengan miedo de entrar a tu barrio" | `#seguridad` |
| "¿Por qué la inversión y el trabajo se van a otro distrito?" | `#trabajo` |
| "Nadie te va a botar de tu puesto. Entérate por qué" | `#comerciantes` |
| "Trabajas en la calle y te cobran cupo. Hay una salida" | `#extorsion` |
| "Tu calle no necesita una obra millonaria. Descubre cómo" | `#propuestas` |

**Consecuencia de diseño:** cada sección debe funcionar como entrada independiente. Quien cae a media página tiene que entender dónde está y qué hacer, sin haber leído lo anterior.

---

## 3. IDENTIDAD VISUAL

- **Morado principal:** #6B2D8B
- **Amarillo de acento:** el de las piezas actuales del partido (dorado/amarillo)
- **Logo:** la "M" del Partido Morado — debe aparecer en el header y repetirse en el cierre
- **Tono visual:** popular pero serio. NO corporativo, NO acartonado. Cercano y directo.
- **Referencia:** las piezas actuales de la campaña usan morado sólido con amarillo, tipografía de palo seco condensada en titulares.

**Criterios:**
- Titulares grandes y contundentes: la gente lee parada en un paradero, con prisa.
- Contraste alto. Se va a ver bajo el sol de la calle.
- Carga rápida: muchos usuarios con datos limitados.
- Jerarquía clara: CTA de VOTO en morado sólido; CTA de COMPARTIR en contorno.

---

## 4. FOTOGRAFÍAS

**Ya disponible:** una foto de Luis en polo morado, sonriendo, fondo de cerro poblado.

**Por producir (5 fotos, una sesión de 2h con celular en el distrito):**
1. Retrato principal — Luis medio cuerpo, calle real de SMP, sonrisa, polo morado
2. Luis + Ulises Aguilar (regidor N°3, ex policía) — juntos, sobrios, en calle
3. Luis en mercado con caseras — escuchando, no posando
4. Retrato personal de Luis — más cálido, para la biografía
5. Luis con vecinos en la calle — grupo, ambiente real

**Reglas de imagen:**
- Siempre polo morado, mismo tipo en todas (reconocimiento visual)
- Fondos reales del distrito, NUNCA estudio ni fondo neutro
- Medio cuerpo lo favorece más que el plano entero estático
- La sonrisa en todas, salvo la de seguridad con Ulises (sobriedad, no dureza)
- Luz de mañana o tarde, nunca mediodía

---

## 5. ESTRUCTURA Y CONTENIDO COMPLETO

> El texto está aprobado palabra por palabra. No reescribir.

---

### BLOQUE 1 — INICIO `#inicio`
*Imagen: foto 1 (retrato principal), a pantalla completa o casi*

**Titular:** No más miedo.

**Subtítulo:** En San Martín de Porres vives con miedo. Vamos a cambiar eso.

**Cuerpo (3 líneas, formato de golpe visual, una debajo de otra):**
- El Gobierno tuvo que declarar a SMP en estado de emergencia.
- La extorsión sigue subiendo, aunque nadie quiera nombrarla.
- Y los mismos de siempre, turnándose el municipio.

**Cierre:** Los que hundieron el distrito en el caos y la delincuencia quieren volver. Nosotros venimos con un plan, no con excusas.

**CTA (morado sólido):** Este 4 de octubre, el miedo cambia de bando. Marca la M.

---

### BLOQUE 2 — SEGURIDAD `#seguridad`
*Imagen: foto 2 (Luis + Ulises)*

**Titular:** Aquí el miedo lo van a sentir los delincuentes.

**Subtítulo:** No prometemos salir a repartir golpes. Prometemos algo que funciona: tecnología, sistema de inteligencia y gente que conoce la calle.

**Bullets:**
- **Cámaras + sistema de inteligencia, no promesas.** Vamos a implementar las herramientas para cercar a la delincuencia: cámaras integradas con inteligencia artificial, información cruzada y denuncias que sí llegan. Se acabó el "no hay pruebas": vamos a ponerlas sobre la mesa.
- **Serenazgo persiguiendo mafias, no ambulantes.** Se acabó el operativo que decomisa verduras mientras los extorsionadores caminan tranquilos.
- **Un ex policía en el equipo.** Ulises Aguilar sabe cómo operan y está del lado de los vecinos.

**Cierre:** Luis es ingeniero. Ulises fue policía. Inteligencia y firmeza, juntas.

**CTA (contorno):** Si estás harto de vivir encerrado en tu propia casa, pásale esto a alguien más.

---

### BLOQUE 2b — EXTORSIÓN `#extorsion`
*Imagen: foto 3 (Luis escuchando a comerciante)*
*Nota: es continuación visual del bloque 2, no una sección separada. Mismo bloque, segundo momento.*

**Titular:** Los comerciantes no deberían abrir con miedo.

**Subtítulo:** En este distrito hay gente que paga cupo antes de vender su primer producto. Ningún otro candidato lo nombra. Nosotros sí.

**Bullets:**
- **Un canal de denuncia que sí funciona.** No la línea que nadie usa por miedo: un canal manejado junto con las asociaciones de comerciantes, donde denunciar no te ponga en la mira.
- **El municipio del lado del que trabaja.** Coordinación real con la comisaría y la fiscalía para ir por las redes de cupos, no por el que vende.
- **El que paga cupo no puede crecer.** Primero te protegemos, después te ayudamos a formalizarte. En ese orden.

**Cierre:** El cupo es el impuesto que cobra la mafia. Y se acabó.

**CTA (contorno):** Si conoces a alguien que paga cupo para poder trabajar, esto es por él.

---

### BLOQUE 3 — TU CASA `#tu-casa`
*Imagen: calle residencial real de SMP (puede ser sin Luis)*

**Titular:** Recuperemos el valor de tu barrio.

**Subtítulo:** El miedo no solo te quita tranquilidad. Te quita plata. Y nadie te lo dice.

**Bullets:**
- **¿Quién quiere alquilar donde matan cada semana?** Tu casa, tu cuarto, tu local valen menos cada año que pasa. No porque los cuides mal: porque el distrito se volvió inseguro y nadie hizo nada.
- **Un barrio seguro es un barrio que sube de precio.** Donde la gente puede caminar de noche, los negocios abren, las familias se quedan y las propiedades se revalorizan. Así de simple.
- **Tu patrimonio es lo que te costó toda la vida.** Es tu ahorro, tu herencia, tu respaldo. Y se está devaluando mientras los mismos de siempre se turnan el municipio.

**Cierre:** La inseguridad es un impuesto invisible que le cobran a tu patrimonio. Nosotros lo vamos a eliminar.

**CTA (contorno):** Tu casa vale menos por culpa de ellos. Que tu vecino también lo sepa.

---

### BLOQUE 3b — EL TRABAJO `#trabajo`
*Imagen: zona comercial de SMP o local cerrado*
*Nota: continuación visual del bloque 3. Son las dos caras del mismo argumento.*

**Titular:** El trabajo no llega donde manda el miedo.

**Subtítulo:** ¿Por qué en SMP no hay empleo formal? La respuesta no es la que te dijeron.

**Bullets:**
- **Nadie invierte donde le van a cobrar cupo.** El que iba a abrir un taller, una tienda, un almacén en SMP hace la cuenta y se va a otro distrito. Y se lleva los puestos de trabajo que nunca se crearon aquí.
- **El que ya está adentro paga cupo en vez de contratar.** Cada sol que se lleva la mafia es un sol que no se convierte en un puesto de trabajo para tu hijo.
- **Por eso somos uno de los distritos con más informalidad de Lima.** No es que la gente no quiera trabajar formal. Es que aquí lo formal no llega, y lo que llega tiene que pagar para sobrevivir.

**Cierre:** Cuando el miedo cambie de bando, la inversión vuelve. Y con ella, el trabajo.

**CTA (contorno):** El 4 de octubre lo traemos de vuelta. Muéstrales a tus vecinos cómo.

---

### BLOQUE 4 — COMERCIANTES Y FORMALIZACIÓN `#comerciantes`
*Imagen: foto 3 o foto de mercado con caseras*

**Titular:** Nadie te va a botar de tu puesto.

**Subtítulo:** Llevas años trabajando con el miedo de que un día lleguen y te quiten todo. Eso se acaba.

**Bullets:**
- **Un registro para ayudarte, no para perseguirte.** Vamos a registrar a los comerciantes con un compromiso escrito: ese padrón no se usa para operativos ni para decomisos. Se usa para saber quién eres y cómo ayudarte.
- **Formalizarte va a costar menos.** Hoy sacar tu licencia te cuesta tiempo, plata y vueltas por tres instituciones distintas. Vamos a bajar las tasas y a juntar todos los trámites en una sola ventanilla.
- **Ordenar la calle conversando, no a golpes.** Cualquier reordenamiento se acuerda antes con las asociaciones. Se acabaron los operativos que llegan de sorpresa a llevarse tu mercadería.

**Cierre:** Tú no eres el problema del distrito. Eres el que lo mantiene de pie desde las cuatro de la mañana.

**CTA (contorno):** Alguien de tu familia se levanta a las cuatro para abrir su puesto. Esto es por ella.

---

### BLOQUE 5 — QUIÉN ES LUIS `#luis`
*Imagen: foto 4 (retrato personal, más cálido)*

**Titular:** No venimos del poder. Venimos de donde vienes tú.

**Subtítulo:** Luis Alberto Flores Roldán. Ingeniero. Candidato a alcalde de San Martín de Porres.

**Cuerpo:**
> ⚠️ PENDIENTE — historia de origen de Luis (3-4 líneas): de dónde viene, a qué se dedicaron sus padres, qué le costó llegar donde está, qué lo conecta con SMP.
> Dejar el espacio reservado en el diseño. Es la pieza que más confianza construye de toda la página.

**Bullets:**
- **Un ingeniero que entiende de sistemas, no de repartir favores.** Por eso nuestra propuesta de seguridad es tecnología e información, no promesas de mano dura.
- **Un ex policía que conoce la calle.** Ulises Aguilar sabe cómo operan las bandas por dentro. Esta vez está del lado de los vecinos.
- **Una lista de gente que trabaja.** No somos políticos de carrera turnándose el municipio. Somos vecinos de SMP que decidimos meternos.

**Cierre:** Nunca hemos gobernado este distrito. Te traemos lo que nunca te entregaron: un plan pensado para los vecinos.

**CTA (contorno):** Muchos años nos gobernaron los mismos sin resultados. Esta vez va a ser distinto — pero contigo adentro.

---

### BLOQUE 6 — OTRAS PROPUESTAS `#propuestas`
*Sin foto protagónica. Tarjetas en grilla de 2 columnas, agrupadas por subtítulo.*

**Titular:** Y esto también nos importa.

**Subtítulo:** Porque un distrito no es solo seguridad. Es la vereda por la que caminas, el paradero donde esperas, la calle por la que tu hijo va al colegio.

#### Grupo A — Tu calle, tu barrio
- **Tu calle** — Ese hueco que esquivas todos los días no necesita una obra millonaria. Necesita que alguien lo repare a tiempo. Vamos a tener un equipo municipal propio para eso.
- **Esa esquina peligrosa** — Todos en el barrio sabemos cuál es. Vamos a publicar el mapa de los cruces donde la gente muere atropellada, y a arreglarlos uno por uno.
- **El mototaxi que te lleva a casa** — Es el único que entra a tu calle cuando no hay nada más. Padrón, cursos y rutas claras: ganarse la vida manejando no puede ser un delito.
- **Las obras grandes que vienen** — La Vía Expresa Norte y el Anillo Vial van a mover todo el distrito. Alguien tiene que estar ahí defendiendo que no te perjudiquen a ti.

#### Grupo B — Tu familia
- **Tu hijo y la anemia** — Tamizaje, seguimiento nutricional y educación alimentaria junto con los comedores y el Vaso de Leche de tu zona. Porque un niño con anemia tendrá una desventaja toda la vida.
- **El médico que no llega a tu barrio** — Brigadas móviles y campañas barriales de salud.
- **Los chicos que ni estudian ni trabajan** — Programa de inserción laboral y capacitación técnica con empresas e institutos. Vamos a darles una puerta.
- **Que los chicos vuelvan a la cancha** — Vamos a rehabilitar 50 losas deportivas del distrito. Un chico jugando pelota es un chico que no está en la esquina.
- **Brigada contra la violencia de género** — Orientación legal y psicológica, promotoras en el barrio y derivación rápida al CEM y la policía. Que nadie tenga que aguantar porque no sabe adónde ir.
- **Tu mascota es familia** — Emergencias 24 horas en la clínica veterinaria. Campañas de vacunación y desparasitación gratuitas todo el año. Exoneración de tasas y acceso a la clínica para las asociaciones que rescatan animales.
- **Trabajo para los tuyos** — Un Centro de Empleo de verdad, capacitación técnica y ferias de trabajo que lleguen a tu zona. No un tablón de avisos que nadie mira.

#### Grupo C — Un municipio que no te haga perder el tiempo
- **Tus trámites desde tu casa** — Digitalización y sistema anticorrupción. Cuando el trámite es digital, nadie te puede pedir "algo" para agilizarlo.
- **La plata es tuya** — Vamos a publicar en qué se gasta cada sol del municipio. Tú lo pagas, tú tienes derecho a saberlo.
- **Los proyectos grandes** — Hospital Municipal, Centro Cultural, Complejo Deportivo: vamos a dejar los estudios listos y la primera etapa iniciada. No te vamos a prometer que los inauguramos: te vamos a prometer que arrancan.

**Cierre:** Esto no lo escribimos para conseguir tu voto. Lo escribimos porque vamos a cumplirlo.

**CTA (morado sólido):** Lee el plan completo. Decide con información.
*(Botón de descarga del PDF del plan de gobierno)*

---

### PIE DE PÁGINA
- **Marca la M el 4 de octubre** (grande, morado)
- Logo del Partido Morado
- Enlaces a redes de campaña
- Nota legal si corresponde

---

## 6. REQUISITOS TÉCNICOS

- **Mobile-first**, responsive
- HTML estático, carga rápida (hosting en GitHub Pages o Netlify)
- Cada bloque con su `id` de ancla para los QR
- Parámetro de medición en las URLs de los QR: `?a=casa`, `?a=seguridad`, `?a=trabajo`, etc.
  → permite saber qué afiche funciona mejor
- Sin formularios que pidan datos personales (evita complicaciones legales)
- Botón de descarga del plan de gobierno en PDF

---

## 7. LO QUE NO DEBE APARECER

- Número de lista (no existe: se marca el logo)
- Promesas con plazos que no están en este documento
- Cifras de presupuesto del plan de gobierno
- Fotos de archivo genéricas o de personas que no son del distrito
- Ataques con nombre propio a otros candidatos
- Lenguaje técnico o de gabinete

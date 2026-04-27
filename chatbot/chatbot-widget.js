// ============================================================
// chatbot-widget.js - Widget flotante para Red Educativa México
// ============================================================

(function() {
    // --------------------------------------------------------------
    // 1. KNOWLEDGE BASE COMPLETA (70+ ítems)
    // --------------------------------------------------------------
    const KNOWLEDGE_BASE = [
        { "titulo": "Saludo", "intencion": "saludo", "entidades": [], "keywords": ["hola","buenos dias","buenas tardes","buenas noches","hey","que tal","saludos","buen dia","buena tarde","buena noche"], "respuesta": "¡Hola! 👋 Soy el asistente virtual de Red Educativa México. ¿Sobre qué programa te gustaría información? Puedo ayudarte con bachillerato, carreras ejecutivas, inglés, titulación por experiencia, entre otros." },
        { "titulo": "Oferta Educativa General", "intencion": "info_general", "entidades": [], "keywords": ["oferta educativa","programas","que puedo estudiar","que ofrecen","estudios","educacion","carreras","cursos","programas disponibles","que programas tienen"], "respuesta": "Red Educativa México ofrece:\n\n Bachillerato\n• Acuerdo 286 (8 semanas, +18 años)\n• Bachillerato 2 años (con especialidades tech)\n\n Carreras Ejecutivas (2.5 años, 100% virtual)\n• Administración, Mercadotecnia, Derecho, Contaduría\n• Ingenierías: Industrial, Software, Datos, Ciberseguridad\n\n Otros\n• Titulación por Experiencia Laboral\n• Inglés A1 (20 semanas)\n\n¿Sobre cuál programa te gustaría más información?" },
        { "titulo": "Diferencia Bachilleratos", "intencion": "info_general", "entidades": ["bachillerato"], "keywords": ["bachillerato","prepa","preparatoria","que bachillerato","cual bachillerato","tipos de bachillerato","bachillerato general"], "respuesta": "Tenemos dos opciones:\n\n Bachillerato 286\n• 8 semanas intensivas\n• Para mayores de 18 años\n• 100% virtual o híbrido\n\n Bachillerato 2 años\n• 2 años completos\n• Para menores de 18 años\n• Especialidades tecnológicas\n\n¿Sobre cuál te gustaría más detalles?" },
        { "titulo": "Información Bachillerato 286", "intencion": "info_general", "entidades": ["bachillerato 286","acuerdo 286","prepa 286"], "keywords": ["bachillerato 286","prepa 286","preparatoria 286","acuerdo 286","que es bachillerato 286"], "respuesta": " Bachillerato 286\n\n• Duración: 8 semanas intensivas\n• Edad: Exclusivo para mayores de 18 años\n• Modalidad: 100% virtual o híbrida\n• Horario: Sesiones en vivo lunes y martes\n• Estructura: 5 módulos integrales\n\nIdeal para obtener tu certificado de manera rápida y eficiente.\n\n¿Te gustaría saber los requisitos?" },
        { "titulo": "Requisitos Bachillerato 286", "intencion": "requisitos", "entidades": ["bachillerato 286","acuerdo 286","prepa 286"], "keywords": ["requisitos 286","documentos 286","inscripcion 286","necesito para 286","que necesito para 286","papeles 286"], "respuesta": "Requisitos para Bachillerato 286:\n\n• Identificación oficial (INE)\n• CURP\n• Acta de nacimiento\n• Certificado de secundaria\n• Comprobante de pago\n\nProceso de inscripción:\n1. Reúne los documentos\n2. Contacta a nuestro equipo\n3. Realiza el pago correspondiente\n4. Recibe tu acceso a la plataforma" },
        { "titulo": "Modalidades Bachillerato 286", "intencion": "info_general", "entidades": ["bachillerato 286"], "keywords": ["modalidad 286","virtual 286","hibrida 286","como es 286","formato 286"], "respuesta": "Modalidades del Bachillerato 286:\n\nOpción 100% Virtual:\n• Sesiones en vivo lunes y martes\n• Acompañamiento constante del tutor\n• Acceso 24/7 a materiales\n• Foros de discusión y apoyo\n\nOpción Híbrida:\n• Combina lo mejor de ambas modalidades\n• Sesiones presenciales opcionales\n• Flexibilidad para adaptarse a tu ritmo\n\nAmbas modalidades garantizan la misma calidad educativa y el mismo certificado oficial." },
        { "titulo": "Información Bachillerato 2 años", "intencion": "info_general", "entidades": ["bachillerato 2 años","prepa 2 años"], "keywords": ["bachillerato 2 años","prepa 2 años","preparatoria 2 años","bachillerato dos años"], "respuesta": " Bachillerato en 2 años\n\n• Duración: 2 años completos\n• Edad: Para menores de 18 años (estudiantes que concluyeron secundaria)\n• Enfoque: Competencias digitales y tecnológicas\n• Especialidades: Programación, Ciberseguridad, IA, Análisis de Datos\n\nPrepara para los retos del siglo XXI combinando educación tradicional con habilidades digitales.\n\n¿Te gustaría conocer las especialidades disponibles?" },
        { "titulo": "Requisitos Bachillerato 2 años", "intencion": "requisitos", "entidades": ["bachillerato 2 años","prepa 2 años"], "keywords": ["requisitos bachillerato 2 años","documentos bachillerato 2 años","inscripcion bachillerato 2 años","que necesito para bachillerato 2 años"], "respuesta": "Requisitos para Bachillerato en 2 años:\n\n• Acta de nacimiento\n• CURP\n• Certificado de secundaria\n• Hoja de datos de los padres/tutores\n• Identificación oficial del estudiante\n\nProceso especial para menores:\n• Entrevista con padres o tutores\n• Evaluación de madurez académica\n• Orientación vocacional incluida\n\n¿Te gustaría programar una cita para más información?" },
        { "titulo": "Especialidades Bachillerato 2 años", "intencion": "info_general", "entidades": ["bachillerato 2 años"], "keywords": ["especialidades bachillerato","tecnologias bachillerato","ramas bachillerato","carreras bachillerato"], "respuesta": " Especialidades Tecnológicas del Bachillerato en 2 años:\n\nProgramación y Desarrollo\n• Lenguajes de programación\n• Desarrollo web y móvil\n• Bases de datos\n• Metodologías ágiles\n\nCiberseguridad\n• Protección de sistemas\n• Ética digital\n• Análisis de vulnerabilidades\n• Prevención de ciberataques\n\nInteligencia Artificial\n• Machine Learning básico\n• Algoritmos inteligentes\n• Procesamiento de datos\n• Aplicaciones prácticas\n\nAnálisis de Datos\n• Estadística aplicada\n• Visualización de datos\n• Herramientas analíticas\n• Toma de decisiones basada en datos" },
        { "titulo": "Información Carreras Ejecutivas", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["carreras ejecutivas","licenciaturas ejecutivas","carreras profesionales"], "respuesta": " Carreras Ejecutivas\n\n• Duración: 2 años y 6 meses\n• Edad: Para mayores de 18 años (sin límite máximo)\n• Modalidad: 100% virtual\n• Horario: Sábados 9:00-13:00 hrs (en vivo)\n• Titulación: Licenciatura oficial\n\nDiseñadas para profesionales que trabajan, combinando teoría con práctica.\n\n¿Te gustaría conocer las carreras disponibles?" },
        { "titulo": "Oferta Carreras Ejecutivas Detallada", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["que carreras ejecutivas","lista carreras","carreras disponibles","licenciaturas disponibles","oferta carreras ejecutivas"], "respuesta": " Nuestra oferta completa de Carreras Ejecutivas:\n\nAdministración y Negocios:\n• Administración\n• Mercadotecnia Digital\n• Contaduría Pública\n\nDerecho:\n• Derecho\n\nEducación:\n• Ciencias de la Educación\n\nIngenierías:\n• Ingeniería Industrial\n• Ingeniería en Desarrollo de Software\n• Ingeniería en Ciencias de Datos\n• Ciberseguridad\n\nTodas las carreras tienen una duración de 2 años y medio, son 100% virtuales con clases en vivo los sábados, y otorgan titulación oficial." },
        { "titulo": "Modalidad Carreras Ejecutivas", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["modalidad ejecutivas","horario ejecutivas","como funcionan ejecutivas","virtual ejecutivas","clases ejecutivas"], "respuesta": " Modalidad de Carreras Ejecutivas:\n\n• 100% Virtual: Todas las clases en línea\n• Horario: Sábados de 9:00 a 13:00 hrs\n• Formato: Clases en vivo por Zoom/Teams\n• Duración: 2 años y 6 meses\n• Frecuencia: Una sesión semanal de 4 horas\n\nVentajas:\n• Compatible con trabajo\n• Sin traslados\n• Flexibilidad horaria\n• Interacción en tiempo real\n• Grabaciones disponibles\n\nIdeal para profesionales que desean superarse sin dejar de trabajar." },
        { "titulo": "Información Titulación por Experiencia", "intencion": "info_general", "entidades": ["titulacion experiencia"], "keywords": ["titulacion","experiencia laboral","titulo por experiencia"], "respuesta": " Titulación por Experiencia Laboral\n\n• Edad mínima: Generalmente 21 años o más\n• Requisito: Experiencia laboral comprobable (mínimo 3 años)\n• Beneficio: Obtén tu título profesional sin necesidad de cursar toda la carrera\n• Proceso: Evaluación teórica y práctica de tus conocimientos\n\n¿Te gustaría saber si calificas para este programa?" },
        { "titulo": "Requisitos Titulación Experiencia", "intencion": "requisitos", "entidades": ["titulacion experiencia"], "keywords": ["requisitos titulacion","documentos titulacion","que necesito titulacion","papeles experiencia"], "respuesta": " Requisitos para Titulación por Experiencia:\n\nDocumentos básicos:\n• Acta de nacimiento\n• CURP\n• INE o identificación oficial\n• Certificado de bachillerato\n• Fotografía oficial\n\nDocumentos profesionales:\n• Curriculum Vitae actualizado\n• Portafolio de evidencias laborales\n• Cartas de recomendación\n• Constancias de empleo\n• Certificados de cursos/diplomados\n\nExperiencia requerida: Mínimo 3 años en el área profesional correspondiente." },
        { "titulo": "Proceso Titulación Detallado", "intencion": "info_general", "entidades": ["titulacion experiencia"], "keywords": ["proceso titulacion","como funciona titulacion","evaluacion titulacion","examen titulacion","sinodales","caso practico"], "respuesta": " Proceso de Titulación por Experiencia:\n\nFase 1: Evaluación Inicial\n• Revisión de documentación\n• Análisis de experiencia laboral\n• Determinación de área de titulación\n\nFase 2: Evaluación Teórica\n• Examen de opción múltiple\n• Evaluación de conocimientos específicos\n• Duración: 2-3 horas\n\nFase 3: Evaluación Práctica\n• Resolución de caso real\n• Presentación de solución\n• Defensa de metodología\n\nFase 4: Réplica ante Sinodales\n• Presentación formal\n• Respuesta a preguntas\n• Evaluación final\n\nResultado: Título profesional oficial reconocido por la SEP." },
        { "titulo": "Curso de Inglés", "intencion": "info_general", "entidades": ["ingles"], "keywords": ["ingles","curso de ingles","aprender ingles","idioma ingles"], "respuesta": "🇺🇸 Curso de Inglés A1\n\n• Duración: 20 semanas\n• Edad: Abierto a todas las edades\n• Horario: Lunes a viernes (grupos matutinos y vespertinos)\n• Modalidad: Virtual con clases en vivo\n• Nivel: Inglés básico (principiante)\n• Certificación: Diploma oficial\n\nIdeal para adquirir bases sólidas del idioma inglés.\n\n¿Te gustaría conocer los horarios disponibles?" },
        { "titulo": "Requisitos Inglés", "intencion": "requisitos", "entidades": ["ingles"], "keywords": ["requisitos ingles","documentos ingles","inscripcion ingles","que necesito ingles"], "respuesta": " Requisitos para el Curso de Inglés:\n\n• Identificación oficial (INE)\n• CURP\n• Acta de nacimiento (opcional)\n• Comprobante de pago\n\nNo se requieren conocimientos previos - El curso está diseñado para principiantes absolutos.\n\nProceso de inscripción:\n1. Contacta a nuestro equipo\n2. Realiza evaluación diagnóstica gratuita\n3. Formaliza tu inscripción\n4. Recibe acceso a la plataforma" },
        { "titulo": "Horario Inglés", "intencion": "horario", "entidades": ["ingles"], "keywords": ["horario ingles","cuando clases ingles","dias ingles","hora ingles"], "respuesta": " Horario del Curso de Inglés A1:\n\n• Días: Lunes a viernes\n• Duración: 20 semanas consecutivas\n• Horario: Grupos matutinos y vespertinos disponibles\n• Modalidad: Clases en vivo por Zoom\n\nHorarios disponibles:\n• Matutino: 9:00 - 11:00 hrs\n• Vespertino: 18:00 - 20:00 hrs\n\nLas clases incluyen práctica oral, ejercicios interactivos y tareas para casa. Todas las sesiones se graban para quienes no puedan asistir en vivo." },
        { "titulo": "Horario de Atención", "intencion": "horario", "entidades": [], "keywords": ["horario","atencion","abren","abierto","hora","dias","horario atencion","cuando atienden"], "respuesta": " Horario de Atención - Red Educativa México:\n\n• Lunes a viernes: 9:00 a 18:00 hrs\n• Sábados: 9:00 a 14:00 hrs\n• Domingos: Cerrado\n\nCanales de atención:\n•  Teléfono: 800 0440 189\n•  Correo: admin@rededucativamexico.org\n• 💬 Chat en línea (este chatbot)\n\n¡Estamos aquí para ayudarte!" },
        { "titulo": "Ubicación y Contacto", "intencion": "ubicacion", "entidades": [], "keywords": ["ubicacion","direccion","donde estan","mapa","oficina","sede","donde ubicados"], "respuesta": " Ubicación - Red Educativa México\n\nPuedes visitarnos en:\nhttps://maps.app.goo.gl/A4yqkdpVhbaVfoJD8\n\nDirección completa:\nAv Teopanzolco 101, Teopanzolco, 62283 Cuernavaca, Mor.\n\n¿Prefieres contactarnos por teléfono o correo electrónico?" },
        { "titulo": "Teléfono de Contacto", "intencion": "telefono", "entidades": [], "keywords": ["telefono","numero","llamar","contacto telefonico","telefono atencion","numero telefono"], "respuesta": " Teléfono de Contacto\n\n• Número principal: 800 0440 189\n• Horario: Lunes a viernes, 9:00 a 18:00 hrs\nOtros medios de contacto:\n•  Correo: admin@rededucativamexico.org\n\n¡Llámanos! Nuestro equipo está listo para atenderte." },
        { "titulo": "Correo Electrónico", "intencion": "correo", "entidades": [], "keywords": ["correo","email","contacto correo","correo electronico","escribir","email contacto"], "respuesta": " Correo Electrónico de Contacto\n\n• Correo principal: admin@rededucativamexico.org\n• Tiempo de respuesta: 24-48 horas hábiles\n\nOtros medios de contacto:\n•  Teléfono: 800 0440 189\n•  Oficina: Av. Teopanzolco 101, Teopanzolco, 62283 Cuernavaca, Mor.\n\nEnvíanos tu consulta y te responderemos lo antes posible. ¡Estamos para servirte!" },
        { "titulo": "Costos e Información Económica", "intencion": "costo", "entidades": [], "keywords": ["costo","precio","colegiatura","pago","cuanto cuesta","cuánto cuesta","tarifas","precios"], "respuesta": " Información sobre Costos\n\nPara recibir información detallada sobre costos y colegiaturas de nuestros programas:\n\n Teléfono: 800 0440 189\n Correo: admin@rededucativamexico.org\n\nFactores que influyen en el costo:\n• Programa seleccionado\n• Modalidad de estudio\n• Duración del programa\n\nNuestro equipo te proporcionará información personalizada y opciones de pago." },
        { "titulo": "Becas y Descuentos", "intencion": "costo", "entidades": [], "keywords": ["becas","descuentos","ayudas","financiamiento","pago facil","beca","descuento"], "respuesta": " Becas y Descuentos Disponibles\n\nOfrecemos diferentes opciones de apoyo económico:\n\n• Descuentos por puntualidad\n• Becas por rendimiento académico\n• Descuentos familiares\n• Planes de pago accesibles\n• Financiamiento educativo\n\n¿Cómo aplicar?\nContacta a nuestro equipo de admisiones para conocer los requisitos específicos y opciones disponibles para tu caso particular.\n\n 800 0440 189\n admin@rededucativamexico.org" },
        { "titulo": "Proceso de Inscripción General", "intencion": "requisitos", "entidades": [], "keywords": ["inscripcion","como inscribirme","proceso inscripcion","como matricularme","pasos inscripcion"], "respuesta": " Proceso de Inscripción General\n\nPaso 1: Elige tu programa de interés\nPaso 2: Reúne los documentos requeridos\nPaso 3: Contacta a nuestro equipo de admisiones\nPaso 4: Realiza evaluación diagnóstica (si aplica)\nPaso 5: Formaliza tu inscripción y pago" },
        { "titulo": "Plataforma Virtual", "intencion": "info_general", "entidades": [], "keywords": ["plataforma","virtual","online","sistema","acceso","como entro","login"], "respuesta": " Nuestra Plataforma Virtual\n\n• Acceso 24/7: Disponible en cualquier momento\n• Interfaz intuitiva: Fácil de navegar\n• Recursos multimedia: Videos, presentaciones, material descargable\n• Clases en vivo: Integradas con Zoom\n• Seguimiento académico: Calificaciones y progreso en tiempo real\n\nDespués de tu inscripción, recibirás las credenciales de acceso y un tutorial completo de la plataforma." },
        { "titulo": "Certificaciones y Títulos", "intencion": "info_general", "entidades": [], "keywords": ["certificacion","titulo","diploma","reconocimiento","validez","oficial","sep"], "respuesta": " Certificaciones y Títulos\n\nTodos nuestros programas otorgan:\n\n• Títulos oficiales reconocidos por la SEP\n• Certificados digitales verificables\n• Diplomas físicos con sello oficial\n• Registro en el Sistema Nacional de Educación\n\nValidez nacional en toda la República Mexicana." },
        { "titulo": "Apoyo y Tutorías", "intencion": "info_general", "entidades": [], "keywords": ["apoyo","tutorias","ayuda","asesoria","acompanamiento","soporte","tutores"], "respuesta": " Apoyo Académico y Tutorías\n\nContamos con un completo sistema de apoyo:\n\n• Tutores especializados por materia\n• Horarios de asesoría personalizados\n• Atención individual por chat, email o teléfono\n• Material complementario adicional\n• Seguimiento continuo de tu progreso\n\nTu éxito académico es nuestra prioridad. ¡No estás solo en tu proceso de aprendizaje!" },
        { "titulo": "Información de Inscripción", "intencion": "inscripcion", "entidades": [], "keywords": ["inscribirme","como inscribirme","inscripcion","inscribir","matricularme","como matricularme","proceso inscripcion","como empezar","como registrarme","quiero inscribirme","como me inscribo"], "respuesta": " Proceso de Inscripción\n\nPara inscribirte en cualquiera de nuestros programas, tienes estas opciones:\n\n1.  Llámanos: 800 0440 189 (L-V 9:00-18:00 hrs)\n2.  Envíanos tu información: Completa el formulario en nuestro sitio web\n\n¡Te contactaremos para guiarte en el proceso completo!" },
        { "titulo": "Proceso de Inscripción Detallado", "intencion": "inscripcion", "entidades": [], "keywords": ["pasos inscripcion","como inscribirse paso a paso","proceso inscripcion detallado","guia inscripcion","procedimiento inscripcion","que hacer para inscribirse"], "respuesta": " Proceso de Inscripción Detallado\n\nPaso 1: Elige tu programa\nRevisa nuestra oferta educativa y decide qué programa se ajusta a tus necesidades.\n\nPaso 2: Reúne la documentación\n• Acta de nacimiento (original y copia)\n• CURP\n• Identificación oficial\n• Certificado de estudios previos\n• Comprobante de domicilio\n\nPaso 3: Contacta a admisiones\nPuedes llamarnos al 800 0440 189, enviar un correo a admin@rededucativamexico.org o escribir por WhatsApp.\n\nPaso 4: Evaluación diagnóstica\nAlgunos programas requieren una breve evaluación para conocer tu nivel.\n\nPaso 5: Formaliza tu inscripción\nRealiza el pago correspondiente y firma la documentación.\n\nPaso 6: Recibe tus accesos\nEn un plazo de 24-48 horas recibirás tus credenciales para la plataforma virtual." },
        { "titulo": "Documentos para Inscripción por Programa", "intencion": "requisitos", "entidades": ["bachillerato 286","bachillerato 2 años","carreras ejecutivas","ingles","titulacion experiencia"], "keywords": ["documentos especificos","que documentos para cada programa","requisitos por programa","papeles necesarios por carrera"], "respuesta": " Documentación Específica por Programa\n\nPara Bachillerato 286 y Bachillerato 2 años:\n• Acta de nacimiento\n• CURP\n• Certificado de secundaria\n• Identificación oficial (del estudiante o tutor)\n\nPara Carreras Ejecutivas:\n• Acta de nacimiento\n• CURP\n• Certificado de bachillerato\n• Identificación oficial\n• Currículum vitae (recomendado)\n\nPara Curso de Inglés:\n• Identificación oficial\n• CURP\n• No se requiere certificado previo\n\nPara Titulación por Experiencia:\n• Acta de nacimiento\n• CURP\n• Identificación oficial\n• Certificado de bachillerato\n• Constancias laborales\n• Portafolio de evidencias\n• Cartas de recomendación" },
        { "titulo": "Fechas de Inicio de Cursos", "intencion": "horario", "entidades": ["bachillerato 286","bachillerato 2 años","carreras ejecutivas","ingles"], "keywords": ["fechas inicio","cuando empiezan","inicio cursos","calendario","próxima convocatoria","fechas inscripcion"], "respuesta": " Fechas de Inicio de Programas\n\nLas fechas de inicio varían según el programa y la demanda. Para obtener información actualizada y precisa, te recomendamos contactarnos directamente:\n\n Teléfono: 800 0440 189\n Correo: admin@rededucativamexico.org\n\nNuestro equipo te proporcionará las fechas exactas de la próxima convocatoria y resolverá cualquier duda." },
        { "titulo": "Equivalencias y Revalidación de Estudios", "intencion": "info_general", "entidades": ["bachillerato 286","bachillerato 2 años","carreras ejecutivas"], "keywords": ["equivalencias","revalidacion","convalidar","homologar estudios","reconocimiento estudios","transferencia externa"], "respuesta": " Equivalencias y Revalidación\n\nSi has estudiado previamente en otra institución, puedes solicitar la revalidación de materias o estudios parciales.\n\nRequisitos:\n• Certificado de estudios parciales o totales\n• Programas de estudio sellados por la institución de origen\n• Solicitud formal de revalidación\n\nProceso:\n1. Entregas la documentación en nuestra oficina\n2. El área académica evalúa la equivalencia\n3. Recibes un dictamen con las materias acreditadas\n4. Continúas tus estudios desde el punto correspondiente\n\nNota: La revalidación aplica para bachillerato y carreras ejecutivas, siempre que la institución de origen tenga reconocimiento oficial.\n\n¿Quieres más información sobre este proceso para tu caso específico?" },
        { "titulo": "Problemas Técnicos con la Plataforma", "intencion": "soporte", "entidades": [], "keywords": ["problema tecnico","no puedo entrar","falla plataforma","error sistema","no carga","no funciona"], "respuesta": "Soporte Técnico\n\nSi tienes problemas con la plataforma virtual, sigue estos pasos:\n\n1. Verifica tu conexión a internet\n2. Limpia la caché del navegador o prueba con otro navegador (Chrome, Firefox, Edge)\n4. en la página de inicio\n5. Si el error persiste, contacta a soporte técnico:\n   •  800 0440 189 (opción 2)\n   •  sistemas.redmex@gmail.com\n\n Te contactaremos lo antes posible." },
        { "titulo": "Requisitos Generales", "intencion": "requisitos", "entidades": [], "keywords": ["requisitos","documentos","inscripción","necesito","que necesito","papeles","tramites"], "respuesta": " Requisitos Generales\n\nLos requisitos varían según el programa. En términos generales, se solicita:\n\n• Acta de nacimiento\n• CURP\n• Identificación oficial\n• Certificado de estudios previos (secundaria para bachillerato, bachillerato para carreras)\n• Comprobante de domicilio\n\nPara requisitos específicos de cada programa, por favor indícame cuál te interesa (Bachillerato 286, Bachillerato 2 años, Carreras Ejecutivas, Inglés, Titulación por Experiencia).\n\n¿Sobre qué programa te gustaría conocer los requisitos detallados?" },
        { "titulo": "Requisitos por Edad", "intencion": "requisitos", "entidades": [], "keywords": ["edad","menor edad","mayor edad","años","requisito edad","puedo estudiar si tengo","edad minima","edad maxima","limite edad","soy menor","soy mayor","para adultos","para jovenes","para niños"], "respuesta": "👥 Requisitos por Edad según el Programa\n\nEs importante que conozcas los rangos de edad para cada uno de nuestros programas:\n\n Bachillerato 286\n• Exclusivo para mayores de 18 años\n• Diseñado para adultos que buscan terminar su preparatoria de forma rápida\n\n Bachillerato 2 años\n• Para menores de 18 años (estudiantes que salen de secundaria)\n• Ideal para jóvenes que desean continuar sus estudios con especialidades tecnológicas\n\n Carreras Ejecutivas\n• Para mayores de 18 años\n• No hay límite de edad máxima\n• Perfecto para profesionales que trabajan\n\n🇺🇸 Curso de Inglés\n• Abierto a todas las edades\n• Grupos separados por niveles, no por edad\n\n Titulación por Experiencia\n• Para mayores de 21 años (generalmente)\n• Se requiere experiencia laboral comprobable\n\n¿Tienes alguna edad en específico? Puedo orientarte mejor sobre qué programa se ajusta a ti." },
        { "titulo": "Inscripciones Abiertas", "intencion": "inscripcion", "entidades": [], "keywords": ["inscripciones abiertas","están abiertas las inscripciones","ya puedo inscribirme","cuándo abren inscripciones","fechas de inscripción","periodo de inscripción","convocatoria abierta","hay cupo","cupo disponible"], "respuesta": " Inscripciones Abiertas\n\nActualmente tenemos inscripciones abiertas para todos nuestros programas. Los periodos de inscripción son continuos, con inicios de cursos programados regularmente.\n\nProgramas con disponibilidad inmediata:\n• Bachillerato 286\n• Bachillerato 2 años\n• Carreras Ejecutivas\n• Curso de Inglés\n• Titulación por Experiencia\n\nPara conocer fechas exactas de próximo inicio, contáctanos:\n📞 800 0440 189\n📧 admin@rededucativamexico.org" },
        { "titulo": "Costo de Inscripción", "intencion": "costo", "entidades": [], "keywords": ["costo inscripción","precio inscripción","cuánto cuesta inscribirse","pago de inscripción","tarifa de inscripción","inscripción precio","costo para inscribirme"], "respuesta": " Costo de Inscripción\n\nEl costo de inscripción varía según el programa que elijas. Tenemos diferentes montos, puedes contactarnos para conocerlos." },
        { "titulo": "Inscripción en Línea", "intencion": "inscripcion", "entidades": [], "keywords": ["inscripción en línea","inscribirme por internet","registro online","inscripción virtual","inscripción por página web","formulario de inscripción","inscripción digital"], "respuesta": " Inscripción en Línea\n\nPuedes iniciar tu proceso de inscripción de forma totalmente digital:\n\nPasos para inscripción en línea:\n1. Contáctanos por WhatsApp o correo\n o  Completa el formulario digital y nosotros te contactaremos" },
        { "titulo": "Inscripción Presencial", "intencion": "ubicacion", "entidades": [], "keywords": ["inscripción presencial","inscribirme en persona","oficinas para inscribirse","dirección para inscripción","venir a inscribirme","inscripción física"], "respuesta": " Inscripción Presencial\n\nPuedes realizar tu inscripción directamente en nuestras oficinas:\n\nDirección:\nAv. Domingo Diez 1520, San Cristobal, 62230 Cuernavaca, Mor.\n\nHorario de atención:\n• Lunes a viernes: 9:00 a 18:00 hrs\n• Sábados: 9:00 a 14:00 hrs\n\nTe recomendamos agendar una cita previa." },
        { "titulo": "Requisitos de Edad por Programa", "intencion": "requisitos", "entidades": ["bachillerato 286","bachillerato 2 años","carreras ejecutivas","ingles","titulacion experiencia"], "keywords": ["edad bachillerato 286","edad bachillerato 2 años","edad carreras ejecutivas","edad ingles","edad titulacion","requisito edad por programa"], "respuesta": " Requisitos de Edad por Programa\n\nBachillerato 286:\n• Exclusivo para mayores de 18 años\n• No hay límite máximo\n\nBachillerato 2 años:\n• Para menores de 18 años (generalmente 15-17 años)\n• Estudiantes que concluyeron secundaria\n\nCarreras Ejecutivas:\n• Para mayores de 18 años\n• Sin límite máximo\n\nCurso de Inglés:\n• Abierto a todas las edades\n\nTitulación por Experiencia:\n• Mínimo 25 años (por la experiencia laboral requerida)\n• Sin límite máximo" },
        { "titulo": "Bachillerato General", "intencion": "info_general", "entidades": ["bachillerato"], "keywords": ["bachillerato general","prepa general","preparatoria normal","bachillerato tradicional","estudiar prepa","terminar prepa"], "respuesta": " Bachillerato General\n\nEn Red Educativa México ofrecemos dos modalidades de bachillerato, ambas con validez oficial:\n\nBachillerato 286 (para adultos):\n• 8 semanas intensivas\n• Modalidad 100% virtual\n• Para mayores de 18 años\n• Certificado oficial SEP\n\nBachillerato 2 años (para jóvenes):\n• 2 años de duración\n• Especialidades tecnológicas\n• Para menores de 18 años\n• Enfoque en competencias digitales" },
        { "titulo": "Carreras en Administración", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["administración","administracion de empresas","licenciatura en administracion","carrera de administración","estudiar administración"], "respuesta": " Carreras en Administración\n\nOfrecemos Licenciatura en Administración en modalidad ejecutiva:\n\nDetalles:\n• Duración: 2 años 6 meses\n• Modalidad: 100% virtual\n• Clases: Sábados 9:00-13:00 hrs\n\nPlan de estudios incluye:\n• Administración estratégica\n• Gestión de recursos humanos\n• Finanzas corporativas\n• Marketing digital\n• Emprendimiento\n• Liderazgo y negociación\n\nCampo laboral:\n• Gerente administrativo\n• Consultor empresarial\n• Director de operaciones\n• Emprendedor" },
        { "titulo": "Carreras en Mercadotecnia", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["mercadotecnia","marketing","publicidad","licenciatura en mercadotecnia","carrera de marketing","mercadotecnia digital"], "respuesta": " Carreras en Mercadotecnia Digital\n\nOfrecemos Licenciatura en Mercadotecnia Digital con enfoque práctico:\n\nDetalles:\n• Duración: 2 años 6 meses\n• Modalidad: 100% virtual\n• Clases: Sábados 9:00-13:00 hrs\n\nPlan de estudios incluye:\n• Marketing estratégico\n• Redes sociales y community management\n• SEO/SEM y analytics\n• Publicidad digital\n• Comportamiento del consumidor\n• E-commerce\n\nCampo laboral:\n• Director de marketing digital\n• Community manager\n• Especialista en SEM/SEO\n• Analista de métricas" },
        { "titulo": "Carreras en Derecho", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["derecho","abogado","licenciatura en derecho","carrera de derecho","estudiar leyes","ciencias jurídicas"], "respuesta": " Carreras en Derecho\n\nOfrecemos Licenciatura en Derecho en modalidad ejecutiva:\n\nDetalles:\n• Duración: 2 años 6 meses\n• Modalidad: 100% virtual\n• Clases: Sábados 9:00-13:00 hrs\n\nPlan de estudios incluye:\n• Derecho constitucional\n• Derecho civil y mercantil\n• Derecho penal\n• Derecho laboral\n• Juicios orales\n• Amparo\n\nCampo laboral:\n• Abogado litigante\n• Asesor jurídico empresarial\n• Consultor legal\n• Funcionario público" },
        { "titulo": "Carreras en Contaduría", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["contaduría","contaduria publica","contador","licenciatura en contaduría","carrera de contabilidad","estudiar contabilidad"], "respuesta": " Carreras en Contaduría \n\nOfrecemos Licenciatura en Contaduría :\n\nDetalles:\n• Duración: 2 años 6 meses\n• Modalidad: 100% virtual\n• Clases: Sábados 9:00-13:00 hrs\n\nPlan de estudios incluye:\n• Contabilidad financiera\n• Contabilidad de costos\n• Auditoría\n• Derecho fiscal\n• Finanzas corporativas\n• Ética profesional\n\nCampo laboral:\n• Contador general\n• Auditor interno/externo\n• Consultor fiscal\n• Director financiero" },
        { "titulo": "Ingeniería Industrial", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["ingeniería industrial","industrial","ingeniero industrial","carrera industrial","estudiar ingeniería industrial"], "respuesta": " Ingeniería Industrial\n\nOfrecemos Ingeniería Industrial en modalidad ejecutiva:\n\nDetalles:\n• Duración: 2 años 6 meses\n• Modalidad: 100% virtual\n• Clases: Sábados 9:00-13:00 hrs\n\nPlan de estudios incluye:\n• Gestión de procesos\n• Logística y cadena de suministro\n• Control de calidad\n• Ergonomía y seguridad\n• Planeación estratégica\n• Optimización de recursos\n\nCampo laboral:\n• Gerente de operaciones\n• Supervisor de producción\n• Consultor en mejora continua\n• Analista de procesos" },
        { "titulo": "Ingeniería en Software", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["ingeniería en software","desarrollo de software","programación","ingeniero en software","carrera de software","estudiar programación"], "respuesta": " Ingeniería en Desarrollo de Software\n\nOfrecemos Ingeniería en Desarrollo de Software:\n\nDetalles:\n• Duración: 2 años 6 meses\n• Modalidad: 100% virtual\n• Clases: Sábados 9:00-13:00 hrs\n\nPlan de estudios incluye:\n• Programación (Java, Python, JavaScript)\n• Desarrollo web y móvil\n• Bases de datos\n• Metodologías ágiles\n• Arquitectura de software\n• Ciberseguridad\n\nCampo laboral:\n• Desarrollador full stack\n• Arquitecto de software\n• Líder técnico\n• Consultor TI" },
        { "titulo": "Ingeniería en Datos", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["ciencia de datos","ingeniería en datos","data science","big data","analítica de datos","estudiar datos","ingeniero de datos"], "respuesta": " Ingeniería en Ciencias de Datos\n\nOfrecemos Ingeniería en Ciencias de Datos:\n\nDetalles:\n• Duración: 2 años 6 meses\n• Modalidad: 100% virtual\n• Clases: Sábados 9:00-13:00 hrs\n\nPlan de estudios incluye:\n• Estadística avanzada\n• Machine Learning\n• Python para datos\n• Visualización de datos\n• Big Data\n• Inteligencia de negocios\n\nCampo laboral:\n• Científico de datos\n• Analista de big data\n• Ingeniero de machine learning\n• Business intelligence" },
        { "titulo": "Ciberseguridad", "intencion": "info_general", "entidades": ["carreras ejecutivas"], "keywords": ["ciberseguridad","seguridad informática","hacking ético","seguridad digital","carrera ciberseguridad","estudiar ciberseguridad"], "respuesta": " Ingeniería en Ciberseguridad\n\nOfrecemos Ingeniería en Ciberseguridad:\n\nDetalles:\n• Duración: 2 años 6 meses\n• Modalidad: 100% virtual\n• Clases: Sábados 9:00-13:00 hrs\n\nPlan de estudios incluye:\n• Seguridad en redes\n• Ethical hacking\n• Criptografía\n• Auditoría de seguridad\n• Respuesta a incidentes\n• Gobierno y cumplimiento\n\nCampo laboral:\n• Analista de seguridad\n• Ethical hacker\n• Consultor en ciberseguridad\n• Oficial de seguridad " },
        { "titulo": "Bachillerato para Adultos", "intencion": "info_general", "entidades": ["bachillerato 286"], "keywords": ["bachillerato para adultos","prepa para adultos","terminar prepa siendo adulto","bachillerato para mayores","prepa en 8 semanas","bachillerato rápido adultos"], "respuesta": " Bachillerato para Adultos (Acuerdo 286)\n\nDiseñado especialmente para personas mayores de 18 años que desean concluir su preparatoria de forma rápida:\n\nCaracterísticas:\n• Duración: 8 semanas intensivas\n• Modalidad: 100% virtual o híbrida\n• Horario flexible (sesiones en vivo lunes y martes)\n• Validez oficial SEP\n\nVentajas:\n• Compatible con trabajo\n• Sin necesidad de asistir diario\n• Acompañamiento personalizado\n• Material descargable 24/7\n\nPerfecto para:\n• Adultos trabajadores\n• Personas que dejaron truncos sus estudios\n• Quienes necesitan el certificado rápido" },
        { "titulo": "Bachillerato Tecnológico", "intencion": "info_general", "entidades": ["bachillerato 2 años"], "keywords": ["bachillerato tecnológico","prepa tecnológica","bachillerato con especialidad","prepa con carrera técnica","bachillerato técnico"], "respuesta": " Bachillerato Tecnológico (2 años)\n\nPreparatoria con especialidades tecnológicas para jóvenes:\n\nCaracterísticas:\n• Duración: 2 años\n• Para menores de 18 años\n• Enfoque en competencias digitales\n• Certificado oficial SEP\n\nEspecialidades disponibles:\n• Programación y Desarrollo\n• Ciberseguridad\n• Inteligencia Artificial\n• Análisis de Datos\n\nVentajas:\n• Sales con carrera técnica\n• Preparación para universidad\n• Habilidades demandadas\n• Proyectos prácticos" },
        { "titulo": "Reportar Problema Técnico", "intencion": "soporte", "entidades": [], "keywords": ["reportar problema","bug","error en plataforma","fallo sistema","algo no funciona","queja técnica","reporte de error"], "respuesta": " Reportar Problema Técnico\n\nPara reportar fallas técnicas, proporciona la siguiente información:\n\nDatos necesarios:\n• Nombre completo\n• Correo registrado\n• Programa que estudias\n• Descripción detallada del problema\n• Captura de pantalla (si aplica)\n• Qué navegador usas (Chrome, Firefox, etc.)\n• Qué dispositivo (computadora, teléfono, tablet)\n\nCanales de reporte:\n📧 sistemas.redmex@gmail.com\n📞 800 0440 189 (opción 2)\n\nTiempo de respuesta:\n 24-48 hrs hábiles" },
        { "titulo": "Validez Oficial SEP", "intencion": "info_general", "entidades": [], "keywords": ["validez oficial","reconocimiento sep","titulo oficial","sep","secretaría educación","rvoe","acuerdo sep"], "respuesta": " Validez Oficial SEP\n\nTodos nuestros programas cuentan con Reconocimiento de Validez Oficial de Estudios otorgado por la Secretaría de Educación Pública.\n\nEsto significa:\n• Tus estudios son válidos en todo México" },
        { "titulo": "Duración de Programas", "intencion": "info_general", "entidades": [], "keywords": ["duración programas","cuánto dura","tiempo de estudio","años de carrera","cuántos años","periodo escolar"], "respuesta": " Duración de Programas\n\nBachillerato:\n• Acuerdo 286: 8 semanas intensivas\n• Bachillerato 2 años: 2 años (6 semestres)\n\nCarreras Ejecutivas:\n• Todas las licenciaturas e ingenierías: 2 años 6 meses (9 cuatrimestres)\n\nCursos:\n• Inglés A1: 20 semanas (5 meses)\n• Cursos cortos: 4-8 semanas según el tema\n\nTitulación:\n• Proceso completo: 2-3 meses aproximadamente\n\n¿Sobre qué programa específico quieres conocer la duración?" },
        { "titulo": "Perfil de Ingreso", "intencion": "requisitos", "entidades": [], "keywords": ["perfil de ingreso","que necesito saber","conocimientos previos","preparación necesaria","nivel requerido","puedo entrar si"], "respuesta": " Perfil de Ingreso por Programa\n\nBachillerato 286:\n• Secundaria concluida\n• Mayores de 18 años\n• Ganas de terminar prepa rápido\n• No requiere conocimientos previos específicos\n\nBachillerato 2 años:\n• Secundaria concluida\n• Menores de 18 años\n• Interés por tecnología\n• Evaluación diagnóstica de nivelación\n\nCarreras Ejecutivas:\n• Bachillerato concluido\n• Mayores de 18 años\n• Experiencia laboral (deseable)\n• Interés en el área seleccionada\n\nInglés:\n• No requiere conocimientos previos\n• Todas las edades\n• Evaluación diagnóstica gratuita\n\nTitulación:\n• Bachillerato concluido\n• 3+ años experiencia laboral\n• Documentación comprobable" },
        { "titulo": "Perfil de Egreso", "intencion": "info_general", "entidades": [], "keywords": ["perfil de egreso","que aprendo","que voy a saber","habilidades adquiridas","qué sé al terminar","competencias"], "respuesta": " Perfil de Egreso por Programa\n\nBachillerato 286 y 2 años:\n• Competencias comunicativas\n• Pensamiento crítico y matemático\n• Habilidades digitales básicas\n• Preparación para educación superior\n\nCarreras Ejecutivas (generales):\n• Capacidad de análisis y solución de problemas\n• Toma de decisiones basada en datos\n• Liderazgo y trabajo en equipo\n• Comunicación efectiva\n• Ética profesional\n• Adaptación al cambio\n\nEspecífico por carrera:\n• Administración: Gestión de recursos\n• Mercadotecnia: Estrategias digitales\n• Derecho: Argumentación jurídica\n• Contaduría: Análisis financiero\n• Ingenierías: Soluciones tecnológicas" },
        { "titulo": "Titulación y Cédula", "intencion": "info_general", "entidades": [], "keywords": ["cédula profesional","titulo profesional","cómo me titulo","proceso de titulación","obtener título","registro de título"], "respuesta": " Titulación y Cédula Profesional\n\nAl concluir tus estudios, te guiamos en todo el proceso:\n\nProceso de titulación:\n1. Concluir todas las materias del plan\n2. Realizar el examen practico ya la presentacion oral de tu caso.\n3. Esperar los resultados de tu evaluacion\n4. listo ya solo espera de 30 a 90 dias para recibir tu certificado" },
        { "titulo": "Despedida", "intencion": "despedida", "entidades": [], "keywords": ["adiós","adios","hasta luego","nos vemos","bye","chao","hasta pronto","me voy","que tengas buen día","cuídate","hasta la vista","luego","nos hablamos"], "respuesta": "¡Hasta luego! Fue un placer ayudarte. Si tienes más preguntas, no dudes en contactarnos. ¡Que tengas un excelente día! 😊" },
        { "titulo": "Agradecimiento", "intencion": "agradecimiento", "entidades": [], "keywords": ["gracias","muchas gracias","te agradezco","gracias por tu ayuda","agradecido","thanks","thank you","mil gracias","gracias totales"], "respuesta": "¡De nada! Estoy aquí para ayudarte. Si necesitas más información, no dudes en preguntar. 😊" }
    ];

    // --------------------------------------------------------------
    // 2. FUNCIONES DE PROCESAMIENTO DE TEXTO
    // --------------------------------------------------------------
    function normalize(text) {
        if (!text) return "";
        let normalized = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalized.toLowerCase().trim().replace(/[¿?¡!.,;:()]/g, "");
    }

    function stem(word) {
        if (word.length < 3) return word;
        const sufijos = ["ando","endo","ar","er","ir","as","es","is","os","a","e","o","an","en","in","on","aron","ieron","aba","ada","ido","ado","iendo","ando"];
        let stemmed = word;
        for (let suf of sufijos) {
            if (stemmed.endsWith(suf) && stemmed.length - suf.length >= 3) {
                stemmed = stemmed.slice(0, -suf.length);
                break;
            }
        }
        return stemmed || word;
    }

    function levenshtein(a, b) {
        const dp = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
        for (let i = 0; i <= a.length; i++) dp[i][0] = i;
        for (let j = 0; j <= b.length; j++) dp[0][j] = j;
        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                const cost = a[i-1] === b[j-1] ? 0 : 1;
                dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + cost);
            }
        }
        return dp[a.length][b.length];
    }

    function detectarIntencionAvanzada(mensajeNormalizado) {
        const intencionPatrones = [
            ["requisitos", "requisitos?|documentos?|necesito|inscripcion|inscribir|enviar|presentar|tramite|papeles|que (necesito|documentos|papeles)|cuales son los requisitos|que necesito para"],
            ["costo", "costo|precio|colegiatura|pago|cuanto cuesta|cuánto cuesta|valor|tarifa|mensualidad|beca|descuento|financiamiento|formas? de pago|métodos? de pago|pagos"],
            ["horario", "horario|hora|cuando|abren|cierre|dias|atencion|turno|qué hora|qué días|a qué hora|fechas? inicio|calendario|convocatoria|fines de semana|sábado|domingo|finde|clases (sabado|domingo)|grupos (sabatinos|dominicales)"],
            ["ubicacion", "ubicacion|direccion|donde|dónde|localidad|mapa|sede|sucursal|oficina|ciudad"],
            ["contacto", "telefono|llamar|contacto|email|correo|whatsapp|escribir|número|comunicarme"],
            ["inscripcion", "inscribirme|inscripcion|inscribir|matricularme|matricular|registrarme|registrar|como inscribirme|como matricularme|como registrarme|quiero inscribirme|pasos para inscribirme|proceso inscripcion"],
            ["info_general", "que es|informacion|cuentame|explica|cuales|como|programa|carrera|estudiar|oferta|opciones|qué es|cuéntame|explícame|cómo|qué programas|qué carreras|qué ofrecen|que ofrecen"],
            ["soporte", "problema|falla|error|no funciona|no puedo entrar|contraseña|olvide|recuperar|soporte|tecnico|ayuda tecnica|plataforma|bug"],
            ["becas", "beca|descuento|apoyo economico|ayuda financiera|convenio|empresa|descuento empleados"],
            ["egresados", "egresado|exalumno|bolsa trabajo|seguimiento|titulado|ya me gradue|despues de graduarme"],
            ["equivalencias", "equivalencia|revalidacion|convalidar|homologar|estudios previos|transferencia"]
        ];
        let maxScore = 0;
        let bestIntent = null;
        for (let [intentName, regex] of intencionPatrones) {
            const regexObj = new RegExp("\\b(" + regex + ")\\b", "i");
            const match = mensajeNormalizado.match(regexObj);
            if (match) {
                let score = 1.5;
                if (mensajeNormalizado.includes(intentName)) score += 1.0;
                if (intentName === "costo" && (mensajeNormalizado.includes("beca") || mensajeNormalizado.includes("descuento"))) score += 0.8;
                if (intentName === "inscripcion" && mensajeNormalizado.includes("pasos")) score += 0.5;
                if (score > maxScore) {
                    maxScore = score;
                    bestIntent = intentName;
                }
            }
        }
        if (!bestIntent) {
            if (mensajeNormalizado.match(/\b(hola|buenos dias|buenas tardes|buenas noches|saludos|que tal|hey)\b/)) return { intent: "saludo", confidence: 0.8 };
            if (mensajeNormalizado.match(/\b(gracias|thanks|agradezco|muchas gracias|gracias por)\b/)) return { intent: "agradecimiento", confidence: 0.9 };
            if (mensajeNormalizado.match(/\b(adios|bye|nos vemos|hasta luego|hasta pronto)\b/)) return { intent: "despedida", confidence: 0.8 };
        }
        const confidence = bestIntent ? Math.min(1.0, maxScore / 5.0) : 0.0;
        return { intent: bestIntent, confidence };
    }

    function detectarEntidadAvanzada(mensajeNormalizado) {
        const entityPatterns = [
            ["bachillerato 286", "bachillerato.*286|acuerdo.*286|prepa.*286|286.*bachillerato|bachillerato.*acuerdo.*286"],
            ["bachillerato 2 años", "bachillerato.*2.*ano|bachillerato.*dos.*ano|prepa.*2.*ano|two.*year.*bachillerato|bachillerato.*regular|bachillerato.*estandar"],
            ["carreras ejecutivas", "carrera.*ejecutiva|licenciatura.*ejecutiva|ingenieria.*ejecutiva|programa.*ejecutivo|estudio.*ejecutivo"],
            ["titulacion experiencia", "titulacion.*experiencia|titulo.*experiencia|experiencia.*laboral|validez.*oficial|reconocimiento.*oficial"],
            ["ingles", "ingles|english|curso.*ingles|clases.*ingles|aprender.*ingles|idioma.*ingles"],
            ["bachillerato general", "bachillerato|preparatoria|prepa|secundaria|medio.*superior"]
        ];
        let maxScore = 0;
        let bestEntity = null;
        for (let [entity, regex] of entityPatterns) {
            const regexObj = new RegExp("(" + regex + ")", "i");
            const match = mensajeNormalizado.match(regexObj);
            if (match) {
                let score = 2.0;
                if (mensajeNormalizado.includes(entity.replace(" ", ""))) score += 1.5;
                if (mensajeNormalizado.includes("286") && entity.includes("286")) score += 2.0;
                if ((mensajeNormalizado.includes("2") || mensajeNormalizado.includes("dos")) && entity.includes("2 años")) score += 1.5;
                if (mensajeNormalizado.includes("ejecutiva") || mensajeNormalizado.includes("ejecutivo")) score += 1.0;
                if (mensajeNormalizado.includes("bachillerato") && !mensajeNormalizado.includes("286") && !mensajeNormalizado.includes("2")) score -= 0.5;
                if (score > maxScore) {
                    maxScore = score;
                    bestEntity = entity;
                }
            }
        }
        if (!bestEntity && (mensajeNormalizado.includes("bachillerato") || mensajeNormalizado.includes("carrera") || mensajeNormalizado.includes("programa"))) {
            if (mensajeNormalizado.includes("bachillerato") && !mensajeNormalizado.includes("286") && !mensajeNormalizado.includes("2")) {
                return { entity: "bachillerato_ambiguo", confidence: 0.6 };
            }
        }
        const confidence = bestEntity ? Math.min(1.0, maxScore / 6.0) : 0.0;
        return { entity: bestEntity, confidence };
    }

    function buscarInteligente(mensajeNormalizado, intencion, entidad) {
        const palabras = mensajeNormalizado.split(/\s+/);
        const palabrasStem = palabras.map(p => stem(p)).filter(w => w.length > 2);
        let mejorScore = 0;
        let mejorItem = null;
        for (let item of KNOWLEDGE_BASE) {
            let score = 0;
            if (intencion && item.intencion === intencion) score += 7.0;
            if (entidad && item.entidades && item.entidades.some(e => e.toLowerCase() === entidad)) score += 7.0;
            if (item.keywords) {
                for (let kw of item.keywords) {
                    const kwStem = stem(normalize(kw));
                    for (let pStem of palabrasStem) {
                        const dist = levenshtein(pStem, kwStem);
                        if (dist === 0) score += 4.0;
                        else if (dist <= 1) score += 2.5;
                        else if (dist <= 2) score += 1.0;
                        else if (kwStem.includes(pStem) || pStem.includes(kwStem)) score += 0.5;
                    }
                }
            }
            if (score > mejorScore) {
                mejorScore = score;
                mejorItem = item;
            }
        }
        return { item: (mejorScore >= 2.5) ? mejorItem : null, score: mejorScore };
    }

    function generarSugerencias(intencion, entidad) {
        const sugerencias = [];
        if (intencion) {
            switch (intencion) {
                case "requisitos":
                    if (entidad) sugerencias.push(`¿Cuáles son los requisitos para ${entidad}?`);
                    else sugerencias.push("¿Qué documentos necesito en general?", "¿Hay requisitos especiales para mayores de edad?");
                    break;
                case "costo":
                    if (entidad) sugerencias.push(`¿Cuánto cuesta ${entidad}?`, `¿Hay becas para ${entidad}?`);
                    else sugerencias.push("¿Cuánto cuestan los programas?", "¿Hay descuentos por pago anticipado?");
                    break;
                case "horario":
                    sugerencias.push("¿Cuál es el horario de clases?", "¿Hay grupos los fines de semana?");
                    break;
                case "ubicacion":
                    sugerencias.push("¿Dónde están ubicados?", "¿Tienen estacionamiento?");
                    break;
                case "contacto":
                    sugerencias.push("¿Tienen WhatsApp?", "¿Cuál es el correo de contacto?");
                    break;
                case "inscripcion":
                    sugerencias.push("¿Cómo me inscribo?", "¿Cuándo son las inscripciones?");
                    break;
                case "soporte":
                    sugerencias.push("No puedo acceder a la plataforma", "Olvidé mi contraseña");
                    break;
                case "becas":
                    sugerencias.push("¿Qué tipos de becas ofrecen?", "¿Cómo solicito una beca?");
                    break;
                default:
                    sugerencias.push("¿Qué programas ofrecen?", "¿Dónde están ubicados?", "¿Cuál es el horario de atención?");
                    break;
            }
        } else if (entidad) {
            if (entidad.includes("bachillerato")) {
                sugerencias.push("¿Cuáles son los requisitos para bachillerato?", "¿Cuánto dura el bachillerato?");
            } else if (entidad.includes("carreras")) {
                sugerencias.push("¿Qué carreras ejecutivas ofrecen?", "¿Cuál es la modalidad de las carreras?");
            } else if (entidad.includes("ingles")) {
                sugerencias.push("¿Cuánto dura el curso de inglés?", "¿Cuál es el horario del curso de inglés?");
            }
        } else {
            sugerencias.push("¿Qué programas ofrecen?", "¿Dónde están ubicados?", "¿Cuál es el horario de atención?");
        }
        return sugerencias.slice(0, 3);
    }

    let sessionContext = { ultimoTema: null, ultimaIntencion: null, ultimaEntidad: null };

    function obtenerRespuestaAvanzada(mensajeUsuario) {
        if (!mensajeUsuario || mensajeUsuario.trim() === "") return { response: "¿En qué puedo ayudarte?", confidenceScore: 0.5 };
        const cleanMsg = normalize(mensajeUsuario).replace(/[¿?]/g, "");
        const { intent: intencion, confidence: intencionConfianza } = detectarIntencionAvanzada(cleanMsg);
        const { entity: entidad, confidence: entidadConfianza } = detectarEntidadAvanzada(cleanMsg);
        const { item, score } = buscarInteligente(cleanMsg, intencion, entidad);
        if (item) {
            const confidenceScore = Math.min(1.0, (intencionConfianza + entidadConfianza + (score / 5)) / 3);
            sessionContext.ultimoTema = item.titulo;
            sessionContext.ultimaIntencion = intencion;
            sessionContext.ultimaEntidad = entidad;
            return {
                response: item.respuesta,
                confidenceScore,
                detectedIntent: intencion,
                detectedEntity: entidad,
                suggestedQuestions: generarSugerencias(intencion, entidad)
            };
        } else {
            if (entidad === "bachillerato_ambiguo") {
                const ambiguedadMsg = "¡Excelente pregunta! Ofrecemos dos tipos de bachillerato:\n\n🎓 **Bachillerato 286** (3 años):\n• Acuerdo 286 con validez oficial\n• Ideal para estudiantes con trayectoria académica regular\n• Mayor tiempo para desarrollo integral\n\n⚡ **Bachillerato 2 años** (acelerado):\n• Programa intensivo\n• Para estudiantes con conocimientos previos sólidos\n• Concluye en menos tiempo\n\n¿Cuál de los dos te interesa más? Puedo darte información específica sobre requisitos, costos o cualquier detalle.";
                return {
                    response: ambiguedadMsg,
                    confidenceScore: 0.8,
                    detectedIntent: intencion,
                    detectedEntity: "bachillerato_ambiguo",
                    suggestedQuestions: ["¿Cuáles son los requisitos para el Bachillerato 286?", "¿Cuál es el costo del Bachillerato 2 años?", "¿En qué se diferencia el Bachillerato 286 del regular?"]
                };
            } else {
                let fallbackMsg = "No estoy completamente seguro de tu pregunta. 🤔\n\n";
                if (intencion) fallbackMsg += `Parece que preguntas sobre ${intencion}. `;
                fallbackMsg += "Puedo ayudarte con:\n📚 Información sobre nuestros programas educativos\n💰 Costos, mensualidades y formas de pago\n📅 Horarios de clases y atención\n📍 Ubicaciones de nuestras sedes\n📞 Información de contacto\n📋 Requisitos de inscripción\n\n¿Podrías ser más específico?";
                return {
                    response: fallbackMsg,
                    confidenceScore: 0.3,
                    detectedIntent: intencion,
                    detectedEntity: entidad,
                    suggestedQuestions: ["¿Qué programas ofrecen?", "¿Cómo puedo inscribirme?", "¿Cuál es el costo de los programas?"]
                };
            }
        }
    }

    // --------------------------------------------------------------
    // 3. LÓGICA DE UI Y ESTADO DEL CHAT
    // --------------------------------------------------------------
    let conversation = [];
    let cargando = false;
    let primeraApertura = true;
    let currentSuggestions = [];
    let lastBotResponseText = "";
    let chatMessagesDiv, inputMensaje, btnEnviar, suggestionsContainer, feedbackContainer;

    function guardarFeedback(mensajeUsuario, mensajeBot, feedbackValor) {
        let logs = JSON.parse(localStorage.getItem("chatbot_feedback") || "[]");
        logs.push({ usuario: mensajeUsuario, bot: mensajeBot, feedback: feedbackValor, fecha: new Date().toISOString() });
        localStorage.setItem("chatbot_feedback", JSON.stringify(logs));
    }

    function handleFeedback(positivo, mensajeUsuario, mensajeBot) {
        const valor = positivo ? 1 : -1;
        guardarFeedback(mensajeUsuario, mensajeBot, valor);
        if (feedbackContainer) feedbackContainer.style.display = "none";
    }

    function renderConversacion() {
        if (!chatMessagesDiv) return;
        chatMessagesDiv.innerHTML = "";
        for (let msg of conversation) {
            const divMsg = document.createElement("div");
            divMsg.style.display = "flex";
            divMsg.style.justifyContent = msg.tipo === "usuario" ? "flex-end" : "flex-start";
            divMsg.style.marginBottom = "4px";
            const bubble = document.createElement("div");
            bubble.style.maxWidth = "85%";
            bubble.style.padding = msg.tipo === "usuario" ? "10px 14px" : "12px 14px";
            bubble.style.borderRadius = "18px";
            bubble.style.background = msg.tipo === "usuario" ? "linear-gradient(135deg, #5A0C28, #8c1d40)" : "#e9ecef";
            bubble.style.color = msg.tipo === "usuario" ? "white" : "#1e1e1e";
            bubble.style.wordWrap = "break-word";
            bubble.style.fontSize = "0.95rem";
            bubble.style.lineHeight = "1.4";
            bubble.style.boxShadow = msg.tipo === "usuario" ? "0 2px 8px rgba(90,12,40,0.2)" : "0 1px 3px rgba(0,0,0,0.1)";
            bubble.style.borderBottomRightRadius = msg.tipo === "usuario" ? "4px" : "18px";
            bubble.style.borderBottomLeftRadius = msg.tipo === "usuario" ? "18px" : "4px";
            bubble.innerText = msg.texto;
            divMsg.appendChild(bubble);
            chatMessagesDiv.appendChild(divMsg);
            if (msg.tipo === "bot" && msg.confidence !== undefined) {
                const confidenceSpan = document.createElement("div");
                confidenceSpan.style.fontSize = "0.75rem";
                confidenceSpan.style.color = "#999";
                confidenceSpan.style.marginLeft = "8px";
                confidenceSpan.style.display = "flex";
                confidenceSpan.style.alignItems = "center";
                confidenceSpan.style.gap = "4px";
                confidenceSpan.innerHTML = `<i class="fas fa-check-circle" style="color: ${msg.confidence > 0.7 ? "#28a745" : msg.confidence > 0.4 ? "#ffc107" : "#dc3545"}"></i> Confianza: ${(msg.confidence * 100).toFixed(0)}%`;
                chatMessagesDiv.appendChild(confidenceSpan);
            }
        }
        if (cargando) {
            const loadingDiv = document.createElement("div");
            loadingDiv.style.display = "flex";
            loadingDiv.style.justifyContent = "flex-start";
            loadingDiv.id = "loadingIndicator";
            loadingDiv.innerHTML = `<div style="background:#e9ecef; padding:12px 14px; border-radius:18px; border-bottom-left-radius:4px; color:#666; display:flex; gap:6px;"><div style="display:flex; gap:4px;"><span style="width:6px; height:6px; background:#999; border-radius:50%; animation:bounce 1.4s infinite;"></span><span style="width:6px; height:6px; background:#999; border-radius:50%; animation:bounce 1.4s infinite 0.2s;"></span><span style="width:6px; height:6px; background:#999; border-radius:50%; animation:bounce 1.4s infinite 0.4s;"></span></div></div>`;
            chatMessagesDiv.appendChild(loadingDiv);
        }
        chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
    }

    function renderSugerencias(suggestions) {
        if (!suggestionsContainer) return;
        suggestionsContainer.innerHTML = "";
        if (!suggestions || suggestions.length === 0) return;
        const title = document.createElement("div");
        title.style.fontSize = "0.75rem";
        title.style.color = "#999";
        title.style.fontWeight = "600";
        title.style.textTransform = "uppercase";
        title.innerText = "💡 Preguntas sugeridas";
        suggestionsContainer.appendChild(title);
        const btnContainer = document.createElement("div");
        btnContainer.style.display = "flex";
        btnContainer.style.flexDirection = "column";
        btnContainer.style.gap = "8px";
        suggestions.slice(0,2).forEach(sug => {
            const btn = document.createElement("button");
            btn.className = "btn-suggestion";
            btn.innerText = sug;
            btn.style.background = "#f0f0f0";
            btn.style.border = "1px solid #ddd";
            btn.style.borderRadius = "12px";
            btn.style.padding = "8px 12px";
            btn.style.fontSize = "0.85rem";
            btn.style.cursor = "pointer";
            btn.style.textAlign = "left";
            btn.style.color = "#333";
            btn.onclick = () => { enviarMensaje(sug.replace(/[¿?]/g, "")); };
            btnContainer.appendChild(btn);
        });
        suggestionsContainer.appendChild(btnContainer);
    }

    function renderFeedback() {
        if (!feedbackContainer) return;
        feedbackContainer.innerHTML = "";
        if (!lastBotResponseText) return;
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.justifyContent = "space-between";
        wrapper.style.alignItems = "center";
        wrapper.style.flexWrap = "wrap";
        wrapper.style.gap = "8px";
        const textSpan = document.createElement("span");
        textSpan.style.color = "#666";
        textSpan.innerText = "¿Te fue útil esta respuesta?";
        const btnGroup = document.createElement("div");
        btnGroup.style.display = "flex";
        btnGroup.style.gap = "8px";
        const btnSi = document.createElement("button");
        btnSi.innerText = "👍 Sí";
        btnSi.style.background = "#e8f5e9";
        btnSi.style.border = "1px solid #c8e6c9";
        btnSi.style.borderRadius = "6px";
        btnSi.style.padding = "5px 12px";
        btnSi.style.cursor = "pointer";
        btnSi.style.fontSize = "0.85rem";
        btnSi.style.color = "#2e7d32";
        btnSi.onclick = () => {
            const lastUserMsg = conversation.filter(m => m.tipo === "usuario").pop()?.texto || "";
            handleFeedback(true, lastUserMsg, lastBotResponseText);
            feedbackContainer.style.display = "none";
        };
        const btnNo = document.createElement("button");
        btnNo.innerText = "👎 No";
        btnNo.style.background = "#ffebee";
        btnNo.style.border = "1px solid #ffcdd2";
        btnNo.style.borderRadius = "6px";
        btnNo.style.padding = "5px 12px";
        btnNo.style.cursor = "pointer";
        btnNo.style.fontSize = "0.85rem";
        btnNo.style.color = "#c62828";
        btnNo.onclick = () => {
            const lastUserMsg = conversation.filter(m => m.tipo === "usuario").pop()?.texto || "";
            handleFeedback(false, lastUserMsg, lastBotResponseText);
            feedbackContainer.style.display = "none";
        };
        btnGroup.appendChild(btnSi);
        btnGroup.appendChild(btnNo);
        wrapper.appendChild(textSpan);
        wrapper.appendChild(btnGroup);
        feedbackContainer.appendChild(wrapper);
        feedbackContainer.style.display = "block";
    }

    async function enviarMensaje(texto) {
        if (!texto || texto.trim() === "") return;
        const userMsg = { tipo: "usuario", texto: texto.trim(), timestamp: new Date().toLocaleTimeString() };
        conversation.push(userMsg);
        renderConversacion();
        inputMensaje.value = "";
        cargando = true;
        renderConversacion();
        try {
            const respuestaObj = obtenerRespuestaAvanzada(texto);
            const botMsg = {
                tipo: "bot",
                texto: respuestaObj.response,
                confidence: respuestaObj.confidenceScore,
                intent: respuestaObj.detectedIntent,
                entity: respuestaObj.detectedEntity
            };
            conversation.push(botMsg);
            lastBotResponseText = respuestaObj.response;
            currentSuggestions = respuestaObj.suggestedQuestions || [];
            cargando = false;
            renderConversacion();
            renderSugerencias(currentSuggestions);
            renderFeedback();
        } catch (err) {
            console.error(err);
            const errorMsg = { tipo: "bot", texto: "❌ Ocurrió un error al procesar tu mensaje. Inténtalo de nuevo." };
            conversation.push(errorMsg);
            cargando = false;
            renderConversacion();
        }
    }

    function abrirChat() {
        const ventanaChat = document.getElementById("chatWindow");
        if (ventanaChat) ventanaChat.style.display = "flex";
        document.getElementById("chatButton").style.display = "none";
        if (primeraApertura) {
            conversation = [];
            const bienvenida = { tipo: "bot", texto: "👋 ¡Hola! Soy tu asistente virtual de Red Educativa México.\n\n¿En qué puedo ayudarte hoy?", confidence: 1.0 };
            conversation.push(bienvenida);
            renderConversacion();
            renderSugerencias(["¿Qué programas ofrecen?", "¿Cuáles son los requisitos?", "¿Cuál es el costo?", "¿Cuál es el horario?"]);
            primeraApertura = false;
        }
    }

    function cerrarChat() {
        document.getElementById("chatWindow").style.display = "none";
        document.getElementById("chatButton").style.display = "flex";
    }

    function renderChatbot() {
        const root = document.getElementById("chatbot-root");
        if (!root) return;
        root.innerHTML = `
            <div id="chatButton" style="position:fixed; bottom:clamp(15px,5vmin,30px); right:clamp(15px,5vmin,30px); width:clamp(50px,12vmin,65px); height:clamp(50px,12vmin,65px); border-radius:50%; background:linear-gradient(135deg,#D4AF37,#E5C158); border:3px solid white; box-shadow:0 6px 25px rgba(212,175,55,0.4); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s ease; z-index:1000; animation:pulse 2s infinite;">
                <i class="fas fa-comment-dots" style="font-size:clamp(1.2rem,5vmin,1.8rem); color:#5A0C28;"></i>
            </div>
            <div id="chatWindow" style="position:fixed; bottom:clamp(15px,5vmin,30px); right:clamp(15px,5vmin,30px); width:clamp(280px,90vw,420px); max-width:calc(100vw - 30px); height:clamp(400px,80vh,650px); max-height:calc(100vh - 60px); background:white; border-radius:22px; box-shadow:0 15px 50px rgba(0,0,0,0.25); display:none; flex-direction:column; overflow:hidden; z-index:1000; animation:slideUp 0.3s ease-out;">
                <div style="background:linear-gradient(135deg,#5A0C28,#8c1d40); color:white; padding:clamp(12px,3vwin,16px) clamp(14px,4vw,20px); display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                    <div style="display:flex; align-items:center; gap:clamp(8px,2vw,12px);">
                        <div style="background:#D4AF37; width:clamp(28px,8vmin,36px); height:clamp(28px,8vmin,36px); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:clamp(0.9rem,4vmin,1.2rem);">🤖</div>
                        <div><div style="font-weight:700; font-size:clamp(0.8rem,3vw,0.95rem);">Asistente Virtual</div><div style="font-size:clamp(0.65rem,2.5vw,0.75rem); opacity:0.8;">En línea</div></div>
                    </div>
                    <button id="closeChatBtn" style="background:rgba(255,255,255,0.2); border:none; color:white; font-size:clamp(1rem,3vw,1.2rem); cursor:pointer; width:clamp(28px,8vmin,32px); height:clamp(28px,8vmin,32px); border-radius:50%; display:flex; align-items:center; justify-content:center; transition:background 0.2s;">✕</button>
                </div>
                <div id="chatMessages" class="chat-messages" style="flex:1; overflow-y:auto; padding:clamp(12px,2.5vw,16px); display:flex; flex-direction:column; gap:clamp(10px,2vw,12px); background:linear-gradient(180deg,#fafafc 0%,#f5f5f8 100%);"></div>
                <div id="suggestionsContainer" style="padding:12px 16px; border-top:1px solid #e9ecef; display:flex; flex-direction:column; gap:8px;"></div>
                <div id="feedbackContainer" style="padding:clamp(10px,2vw,12px) clamp(12px,3vw,16px); border-top:1px solid #e9ecef; background:#f8f9fa; font-size:clamp(0.75rem,2.5vw,0.85rem); display:none;"></div>
                <div style="padding:clamp(10px,2vw,14px) clamp(12px,2.5vw,16px); border-top:1px solid #e9ecef; display:flex; gap:clamp(8px,2vw,10px); background:#fbfbfc;">
                    <input type="text" id="chatInput" placeholder="Escribe tu pregunta..." style="flex:1; padding:clamp(8px,2vw,10px) clamp(10px,2.5vw,14px); border-radius:24px; border:1px solid #ddd; outline:none; font-size:clamp(0.85rem,2.5vw,0.95rem); background:#fff; transition:border-color 0.2s;">
                    <button id="sendBtn" style="background:#D4AF37; border:none; border-radius:50%; width:clamp(36px,9vmin,42px); height:clamp(36px,9vmin,42px); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.2s; box-shadow:0 2px 8px rgba(212,175,55,0.2); flex-shrink:0;"><i class="fas fa-paper-plane" style="color:#5A0C28; font-size:clamp(0.9rem,3vw,1.1rem);"></i></button>
                </div>
            </div>
        `;
        chatMessagesDiv = document.getElementById("chatMessages");
        inputMensaje = document.getElementById("chatInput");
        btnEnviar = document.getElementById("sendBtn");
        suggestionsContainer = document.getElementById("suggestionsContainer");
        feedbackContainer = document.getElementById("feedbackContainer");
        const closeBtn = document.getElementById("closeChatBtn");
        const chatBtn = document.getElementById("chatButton");
        chatBtn.addEventListener("click", abrirChat);
        closeBtn.addEventListener("click", cerrarChat);
        btnEnviar.addEventListener("click", () => {
            const texto = inputMensaje.value.trim();
            if (texto) enviarMensaje(texto);
        });
        inputMensaje.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                const texto = inputMensaje.value.trim();
                if (texto) enviarMensaje(texto);
            }
        });
        const styleScroll = document.createElement("style");
        styleScroll.textContent = `.chat-messages::-webkit-scrollbar { width:6px; } .chat-messages::-webkit-scrollbar-track { background:#e9ecef; border-radius:10px; } .chat-messages::-webkit-scrollbar-thumb { background:#c0c4c8; border-radius:10px; } .btn-suggestion:hover { background:#5A0C28 !important; color:white !important; border-color:#5A0C28 !important; }`;
        document.head.appendChild(styleScroll);
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            renderChatbot();
        });
    } else {
        renderChatbot();
    }
})();
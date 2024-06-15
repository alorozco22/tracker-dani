////////////////////////////////////////
// Aquí insertamos el código de áreas
////////////////////////////////////////


const horasLunes = [Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 2, "#003399"),Area(4, "Comisión", 4, "#600080"),Area(5, "Marca del perfil ESG", 2, "#008080"),Area(10, "Configuraciones", 0, "#009999")]
const horasMartes = [Area(1, "Dios", 2, "#003399"),Area(2, "Proyectos", 4, "#600080"),Area(3, "Aplicaciones", 2, "#008080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 0, "#009999")]
const horasMiercoles = [Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 3, "#003399"),Area(2, "Proyectos", 2, "#600080"),Area(6, "Fortalecer contactos", 2, "#008080"),Area(8, "Proyectar estudios", 1, "#660033"),Area(10, "Configuraciones", 0, "#009999")]
const horasJueves = [Area(1, "Dios", 4, "#003399"),Area(4, "Comisión", 2, "#600080"),Area(5, "Marca del perfil ESG", 2, "#008080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 0, "#009999")]
const horasViernes = [Area(11, "Ejercicio", 1, "#ff8080"),Area(1, "Dios", 2, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(7, "Cursos & workshops", 2, "#600080"),Area(12, "Transporte", 3, "#00e6ac"),Area(10, "Configuraciones", 0, "#009999")]
const horasSabado = [Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 1, "#003399"),Area(7, "Cursos & workshops", 2, "#600080"),Area(9, "Estrategia con mi chico", 2, "#2a0080"),Area(10, "Configuraciones", 0, "#009999")]
const horasDomingo = [Area(1, "Dios", 2, "#003399"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 0, "#009999"),Area(14, "Ajedrez", 1, "#333333")]

////////////////////////////////////////

let areasDeHoy = horasLunes

/////////////////////////////////////////////////////////////
// Aquí insertamos el código de actividades
// ORM: https://colab.research.google.com/drive/1jD08kTPmRHfKIAopE2iv1sX3jrinLBEo?usp=sharing
// Excel: https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing
/////////////////////////////////////////////////////////////


const actividades11 = [Actividad('11.0', 'Gym', '0.0', '1.0', '#ff8080', 'white', 'Preciosa, si hoy sábado tienes mucha energía podrías ir al gym si quieres. Sobretodo en la mañana, y luego vamos a cine :3. Mira los horarios de hoy para Intensamente! te los dejo aquí en Unicentro.', '<a target="_blank" href="./img/horarios.png"><img src="./img/horarios.png" alt="Captura de pantalla horarios de cine" style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades1 = [Actividad('1.0', 'IDMJI-EN', '0.0', '4.0', '#003399', 'white', 'Amor! dedícale así sean 15 minutos a ver videítos en youtube, y estudiar coros en inglés. Depronto leer las escrituras.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('1.0', 'Congregarme', '0.0', '2.0', '#003399', 'white', 'Ay amada, no me acuerdo, me parece que hoy tengo que ir a estudio bíblico? Ño tengo ganitas purque fue una semana fuertecita aiñmm.', 'nan', 'Horarios y sedes IDMJI', 'https://idmji.org/direcciones/', 'nan', 'nan', 'nan', 'nan')]
const actividades2 = [Actividad('2.0', 'Maqueta en baja libro infantil', '0.0', '1.0', '#600080', 'white', 'Amor mío, esta tarde después de almuerzo paso por tu barrio y nos pensamos este proyecto para que le trabajemos juntos.', '<a target="_blank" href="https://co.pinterest.com/pin/31595634880367318/"><img src="./img/acuarelabook.jpg" alt="Ilustraciones de niña en el bosque." style="width:100%" /></a>', 'Video: plan your book', 'https://youtu.be/knA9AlI3R8g?t=108', 'nan', 'nan', 'nan', 'nan'),Actividad('2.0', 'Doméstika: dibujo anatómico', '0.0', '2.0', '#600080', 'white', 'Si te parece hoy no le dediques tiempito a este preciosa, y le dedicamos al libro.', '<!--a target="_blank" href="https://www.domestika.org/es/courses/area/184-dibujo-anatomico"><img src="./img/dibujo.png" alt="Imágen del curso de dibujo anatómico en domestika" style="width:100%" /></a-->', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades3 = [Actividad('3.0', 'Mapear vacantes en LinkedIn', '0.0', '1.0', '#008080', 'white', '¡Hermosa! Te dejo el mensajito de la semana pasada. Si te parece bien: hoy haz trabajo simultáneo de esto y de fortalecimiento de red.</br></br>Te propongo que para aplicaciones busques (sólo mapear por ahora, y esta semana aplicas) ofertas de trabajo en LinkedIn para posiciones de sostenibilidad, ESG, etc.</br></br>Pero mientras haces eso, ¡ve haciendo el mapeo de empresasque tienen programas de sostenibilidad en Colombia! Ten dos tablas separadas, pero ve haciendo las dos cosas juntitas. Abajito te dejo la ficha que explica esa otra actividad. La moví para que la puedas ver hoy.', '<a target="_blank" href="./img/workshop.png"><img src="./img/linked2.png" alt="Captura de pantalla búsqueda ESG en trabajos LinkedIn" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('3.0', 'Agendar asesoría CV en CTP', '0.0', '2.0', '#008080', 'white', 'Amor! Revisa hoy si esta semana hay talleres de CV en el CTP te amooooooo', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades4 = [Actividad('4.0', 'Creación de obra', '0.0', '1.0', '#600080', 'white', 'Preciosa, recuerda nunca parar de producir obra nueva. Puedes intentar aplicar algo de lo que has aprendido en tu curso de dibujo anatómico hasta ahora en una pieza. O bien, puedes buscar nueva inspiración. Te dejo tu moodboart.', '<a target="_blank" href="./img/mood.png"><img src="./img/mood.png" alt="Captura de pantalla del grupo MoodboArt en Waa" style="width:100%" /></a></br><a target="_blank" href="./img/botero.jpg"><img src="./img/botero.jpg" alt="Museo Botero" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('4.0', 'Reunión estrategia de contenido orientado a ventas', '0.0', '2.0', '#600080', 'white', 'Amor agenda a tu chico para que podamos crear una estrategia de contenido para Entropía Cromática que esté orientada a vender obra, al igual que a fortalecer tu marca. Puede ser la otra semana!', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades5 = [Actividad('5.0', 'Curso Palermo', '0.0', '2.0', '#008080', 'white', '¡Vida, mientras te aprueban apoyo financiero para el curso de ESG, podrías ir comenzando con el curso de la Universidad de Palermo! Está buenísimo que tengas así como tienes una cola de cursos en Domestika, una fila de cursos para tu perfil ESG 🤍 Te dejo el curso enlazado en la imagen.', '<a target="_blank" href="https://www.coursera.org/learn/etica-gobierno-corporativo"><img src="./img/palermo.png" alt="Captura de pantalla de curso universidad e palermo en coursera." style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('5.0', 'Contenido: recordarles que existo', '0.0', '1.0', '#008080', 'white', 'Por lo pronto comencemos los cursos. Pero ya nos iremos pensando en qué publicar en LinkedIn para recordarle al mundo que existes y eres una profesional valiosísima!', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('5.0', 'Esperar respuesta Apoyo Financiero', '0.0', '1.0', '#008080', 'white', 'Tamos a la espera de este hasta junio 13.', '<a target="_blank" href="./img/esg.png"><img src="./img/esg.png" alt="Captura de pantalla del curso de ESG" style="width:100%" /></a>', 'Coursera ESG', 'https://www.coursera.org/specializations/materiality-esg-factors', 'Carpeta taller ESG', 'https://drive.google.com/drive/folders/1Ml0LH5pWT8PSN9vOIenDOLFNdFwGW83Z?usp=sharing', 'nan', 'nan')]
const actividades6 = [Actividad('6.0', 'Reunón con CTP', '0.0', '1.0', '#339999       ', 'white', 'Hoy tienes tu reunión con CTP! lleva tu hoja de vida y algunas de las ofertas que viste ayer amda. Está perfecto que te den feedback sobre lo que tengas. Dedícale una hora a esto y la otra a lo de abajo si puedes porfi. Mañana y pasado vamos aplicando a las ofertas.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('6.0', 'Mapear organizaciones', '0.0', '2.0', '#339999       ', 'white', 'Hoy no entres a LinkedIn amada mía. Busca en las 100 empresas más grandes de Colombia todas las que tengan departamento de Sostenibilidad o programas ESG y pásaselas a tu novio por favor.</br></br>Mientras vas haciendo la revisión, pon la entrevista que el Diario La República hace a María Lara, directora de sostenibilidad en LatAm Airlines. Empápate de ese ambiente mientras buscas las empresas. Esto también te sirve como referente para irte informando de cómo se ve una estrategia de sostenibilidad para una aerolínea, que es una industria muy compleja. Te amo! Y me siento orgulloso de tí todos los días de mi vida.</br></br>Te dejo la entrevista enlazada en la foto, y las 100 empresas abajo como enlace.', '<a target="_blank" href="https://youtu.be/Z08sRmcWwX8?t=47"><img src="./img/marialara.jpg" alt="Foto de María Lara." style="width:100%" /></a>', '100 empresas más grandes de Colombia', 'https://www.larepublica.co/especiales/las-1-000-empresas-mas-grandes-de-2022/ecopetrol-lidera-las-100-empresas-mas-grandes-de-colombia-en-2022-3642520', 'nan', 'nan', 'nan', 'nan')]
const actividades7 = [Actividad('7.0', 'Ideas para curso', '0.0', '1.0', '#600080', 'white', 'Amor agenda con tu chico una sesión de co-creación para pensarnos talleres-experiencia. Y hoy más bien hacemos estrategia :3 ', '<a target="_blank" href="./img/workshop.png"><img src="./img/workshop.png" alt="Personas pintando en un taller de una tarde." style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades8 = [Actividad('8.0', 'Columnas de la tabla de becas', '0.0', '1.0', '#660033', 'white', 'Amor, hoy depronto en lugar de esto puedes dedicar tiempo a la reunión con el CTP a las 11 de la mañana. Pero en todo caso, se trata de hacer una tabla consolidando todas las oportunidades de becas en otros países. Te dejo la lista de países favoritos abajo. Besitoooos.', '<ul><li>Inglaterra &lt;3</li><li>Suiza &lt;3</li><li>Noruega*</li><li>Italia &lt;3</li><li>Alemania &lt;3</li><li>España &lt;3</li><li>Francia</li><li>Canadá &lt;3</li><li>Suencia*</li><li>Dinamarca*</li><li>Austria &lt;3</li><li>Nueva Zelanda</li><li>Australia</li></ul>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades12 = [Actividad('12.0', 'Ir a la U a nadar', '0.0', '1.0', '#00e6ac', 'white', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades13 = [Actividad('13.0', 'Lectura', '0.0', '3.0', '#99004d', 'white', 'Ayer fuiste al gym entonces si quieres ir buscando un libro que quieras leer, está perfecto :3 Te dejo enlazada la página de la biblioteca por si deseas pedirlo prestado de allí cuando vayamos!', '<a target="_blank" href="https://biblioteca.uniandes.edu.co/"><img src="./img/leer.jpg" alt="Mujer leyendo en la ventana." style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Journaling', '0.0', '7.0', '#99004d', 'white', 'También puedes escribir en tu journal.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Tiempo con mi chico', '0.0', '8.0', '#99004d', 'white', 'Amor, depronto cuadremos nuestro tiempo de calidad, me pusieron una reunión mañana las 8 pero estoy tratando de moverla. Deberíamos pensar ese viaje a Villa de Leyva este sábado. Si nos lo pensamos, cancelo vitruvio sí o sí jejejeje. Háblame sobre esto!', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Ocio', '0.0', '6.0', '#99004d', 'white', 'Tienes tiempo para ver pelis hoy.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Baile', '0.0', '1.0', '#99004d', 'white', 'También es una opción. Amor! deberíamos tomar una clase juntos esta semana. Hoy me pagan, entonces, hay algo para el miércoles en pareja? Sólo por ver.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Arpa', '1.0', '4.0', '#99004d', 'white', 'Amo como vas con esa nueva pieza', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Salir con amigos', '0.0', '5.0', '#99004d', 'white', 'Si quieres cuadrar, disponible hoy.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Canto', '0.0', '2.0', '#99004d', 'white', 'Para después.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades9 = [Actividad('9.0', 'Estrategia con tu chicooo', '0.0', '1.0', '#2a0080', 'white', 'Esta semana avanzaste muchísimo en tu marco estratégico!!!! Estoy pensando en colorear tu tracker para que sea muy claras las métricas de <b>Constancia en tu Estrategia</b>, y de <b>Logro de objetivos</b>.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades10 = [Actividad('10.0', 'Configurar colores', '1.0', '1.0', '#009999', 'white', '¡Amor! Todos los días yo renuevo los datos de tu board. Para configurar los colores sólo es necesario que en el excel que te comparto a continuación tú modifiques las columnas de color. Para escoger el código correspondiente puedes usar la herramienta de elección de color y copiar el hexadecimal.</br></br>Los colores que debes modificar están en la pestaña "areas" y "actividades".', '<a target="_blank" href="./img/color.png"><img src="./img/color.png" alt="Captura de pantalla de w3 color picker" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'Paleta de Colores', 'https://www.w3schools.com/colors/colors_picker.asp', 'nan', 'nan'),Actividad('10.0', 'Configurar actividades', '1.0', '2.0', '#009999', 'white', 'Para configurar las actividades sólo debes editar en el excel la tabla en la pestaña "actividades". Tu novio carga todos los días los datos a la aplicación para que aparezcan.', '<a target="_blank" href="./img/actividades.png"><img src="./img/actividades.png" alt="Captura de pantalla de tabla de actividades" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'nan', 'nan', 'nan', 'nan'),Actividad('10.0', 'Configurar áreas', '1.0', '3.0', '#009999', 'white', 'En el excel en la pestaña areas puedes encontrar la información de las áreas. Tu novio actualiza los datos todos los días desde el excel para que te aparezcan de acuerdo a lo que pusiste. ¡Si tienes cualquier duda me puedes decir!', '<a target="_blank" href="./img/areas.png"><img src="./img/areas.png" alt="Captura de pantalla de tabla de areas" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'nan', 'nan', 'nan', 'nan'),Actividad('10.0', 'Marco', '1.0', '4.0', '#009999', 'white', 'Todo está alineado con el figma. Te lo dejo aquí.', '<a target="_blank" href="./img/board.png"><img src="./img/board.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></a> </br></br> <a target="_blank" href="./img/board1.png"><img src="./img/board1.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board2.png"><img src="./img/board2.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board3.png"><img src="./img/board3.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board4.png"><img src="./img/board4.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades14 = [Actividad('14.0', 'Calcular', '0.0', '1.0', '#cccccc', '#404040', 'Competencia: perfilar para un par de opciones, cuál es la mejor respuesta del otro, y así escoger entre las dos opciones.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Identify hanging pieces', '0.0', '2.0', '#cccccc', '#404040', 'Amor, una pieza indefensa o hanging piece es una pieza que no está siendo defendida por nadie. La competencia que vamos a entrenar es que identifiques esas piezas en cada turno que tengas.', '<a target="_blank" href="https://www.chess.com/terms/hanging-piece-chess#:~:text=A%20hanging%20piece%20is%20a,for%20being%20exposed%20to%20capture)."><img src="./img/chess1.png" alt="Hanging bishop in board." style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Tactics: forks', '0.0', '3.0', '#cccccc', '#404040', 'Hay una familia innumerable de patrones que conducen a forks y etc. La idea es comenzar a reconocer estos patrones. Alfred puede identificar algunos patrones y jugarlos en repetidas ocasiones para comenzar a entrenar a Dani en el reconocimiento y contraataque de estos.', '<a target="_blank" href="https://youtu.be/64I_7YY6xkA"><img src="./img/hikaru.png" alt="Hikaru Nakamura explaining chess forks in interview." style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Tactics: discovered attacks', '0.0', '4.0', '#cccccc', '#404040', 'Igual que forks', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Tactics: batteries', '0.0', '5.0', '#cccccc', '#404040', 'Qué es esto? pero igual que forks', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Endgames', '0.0', '6.0', '#cccccc', '#404040', 'Hay familias innumerables de endgames, comenzar a ver patrones del estilo: jaque en 1. Y luego jaque en 2, puede ser la clave.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]

const diccionarioActividades = {
  11 : actividades11,
  1 : actividades1,
  2 : actividades2,
  3 : actividades3,
  4 : actividades4,
  5 : actividades5,
  6 : actividades6,
  7 : actividades7,
  8 : actividades8,
  12 : actividades12,
  13 : actividades13,
  9 : actividades9,
  10 : actividades10,
  14 : actividades14
}
/////////////////////////////////////////

let actividadesVisibles = diccionarioActividades[2]


////////// SIMULAR ALGÚN DÍA /////////
function simularDia(diaOriginal){
	diaOriginal = diaOriginal; // Aquí podemos simular un día si se desea 0 es domingo, 1 es lunes... 6 es sábado
	return diaOriginal;
}
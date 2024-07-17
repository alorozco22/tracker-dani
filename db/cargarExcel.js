////////////////////////////////////////
// Aquí insertamos el código de áreas
////////////////////////////////////////


const horasLunes = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 2, "#003399"),Area(2, "Proyectos", 4, "#600080"),Area(3, "Aplicaciones", 2, "#008080"),Area(10, "Configuraciones", 100, "#009999")]
const horasMartes = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(1, "Dios", 2, "#003399"),Area(4, "Comisión", 4, "#600080"),Area(5, "Marca del perfil ESG", 2, "#008080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 100, "#009999")]
const horasMiercoles = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(1, "Dios", 3, "#003399"),Area(2, "Proyectos", 2, "#600080"),Area(3, "Aplicaciones", 3, "#008080"),Area(10, "Configuraciones", 100, "#009999")]
const horasJueves = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 4, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(4, "Comisión", 2, "#600080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 100, "#009999")]
const horasViernes = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(1, "Dios", 2, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(7, "Cursos & workshops", 2, "#600080"),Area(12, "Transporte", 3, "#00e6ac"),Area(10, "Configuraciones", 100, "#009999")]
const horasSabado = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 1, "#003399"),Area(7, "Cursos & workshops", 2, "#600080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 100, "#009999")]
const horasDomingo = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(1, "Dios", 2, "#003399"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 100, "#009999"),Area(14, "Ajedrez", 1, "#333333")]


////////////////////////////////////////

let areasDeHoy = horasLunes

/////////////////////////////////////////////////////////////
// Aquí insertamos el código de actividades
// ORM: https://colab.research.google.com/drive/1jD08kTPmRHfKIAopE2iv1sX3jrinLBEo?usp=sharing
// Excel: https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing
/////////////////////////////////////////////////////////////


const actividades15 = [Actividad('15.0', 'Bienvendia', '1.0', '1.0', '#cc6600', 'white', '¡Buenos días amada! Bienvenida a casita. Te extrañé montones, me hiciste una falta tremenda, pero ayer pasé un día maravilloso contigo. Organicé el resto de la semana de forma que tengas 3 días seguidos para aplicar a Juan Valdez, sin descuidar tus actividades de Entropía cromática. Te amo y estoy muy agradecido de que estés en mi vida.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades11 = [Actividad('11.0', 'Gym', '0.0', '1.0', '#ff8080', 'white', 'Te voy a llamar :3 Por si quieres ir al gym.', '<a target="_blank" href="./img/gym.jpg"><img src="./img/gym.jpg" alt="Mujer tomando una pesa del gimnasio" style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('11.0', 'Natación', '0.0', '2.0', '#ff8080', 'white', 'Déjame esta semanita de margen aún para nadar. Que me paguen y que yo pueda ir a cita médica. Como la mona cumple, me queda difícil por tiempos amor mío.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades1 = [Actividad('1.0', 'Congregarme', '0.0', '2.0', '#003399', 'white', 'Corazón buenos días, hoy es enseñanza. Iniciemos con toda agradeciéndole a Dios que volviste bien después de un trabajo satisfactorio y respaldado.', 'nan', 'Horarios y sedes IDMJI', 'https://idmji.org/direcciones/', 'nan', 'nan', 'nan', 'nan'),Actividad('1.0', 'Oración y lectura', '0.0', '1.0', '#003399', 'white', 'Recuerda dedicar un momento a orar bella, ya que puedes hacerlo de nuevo en voz alta.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades2 = [Actividad('2.0', 'Iniciar próximo curso de domestika', '0.0', '2.0', '#600080', 'white', 'Si deseas iniciar otro curso en doméstika tienes la ocasión de hacerlo corazón. Escoge de tu lista de cursos que remando hacia adelante vas incrementando tus competencias como artista. Te dejo en la imagen el link de domestika.', '<a target="_blank" href="https://domestika.org/"><img src="./img/cursos.png" alt="Lista cursos domestika" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades3 = [Actividad('3.0', 'Aplicar a Juan Valdez', '0.0', '1.0', '#008080', 'white', '¡Amada! Apliquemos a la oferta de Juan Valdez de una!', '<a target="_blank" href="./img/juanvaldez.png"><img src="./img/juanvaldez.png" alt="Logo de Juan Valdez" style="width:100%" /></a>', 'Link', 'https://www.linkedin.com/jobs/view/3972950807', 'nan', 'nan', 'nan', 'nan'),Actividad('3.0', 'Atlas Renewable Energy', '0.0', '2.0', '#008080', 'white', 'No he revisado esta convocatoria amor, pero tú la mapeaste. Muy bien! así que podemos echarle ojo.', 'nan', 'Atlas Renewable Energy', 'https://www.linkedin.com/jobs/view/3968168211', 'nan', 'nan', 'nan', 'nan')]
const actividades4 = [Actividad('4.0', 'Tríptico', '0.0', '1.0', '#600080', 'white', 'Mi corazón sigue adelante con tu proyecto de tríptico. ¡¡Ya sólo te falta un cuadro!! Cuando lo termines tenemos que celebrarlo. <b>Para este porfa trata grabar un timelapse</b>. Esta documentación va a ser importante para subir a entropía un contenido del tríptico.', '<a target="_blank" href="./img/triptico2.jpg"><img src="./img/triptico2.jpg" alt="Tríptico en acuarela" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('4.0', 'Obra dibujo anatómico', '0.0', '2.0', '#600080', 'white', 'Bella cuando termines con tu pieza del tríptico sería maravilloso que hagas obra que utilice tus habilidades de dibujo anatómico en acuarela. Te dejo las dos propuestas:<ul style="padding:30px;"><li>Una que muestre el cuerpo entero</li><li>Una obra en la que el protagonista sean las manos</li></ul>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('4.0', 'Reunión estrategia de contenido orientado a ventas', '0.0', '3.0', '#600080', 'white', 'Preciosa, te dejo el contenido de este muchacho para que veas cómo mostrar tu trabajo en redes, y hacer call to action claros puede traerte comisión de obra. <b>Porfi avísame cuando lo veas para retirarlo jaja</b>. Agéndame la otra semana, de una vez a Google Calendar para que hagamos una reunión de estrategia de contenido que involucre funneling. Dejo el curso que quiero tomar para también apoyarte con esto!', '<a target="_blank" href="https://www.instagram.com/reel/C8Z5101COIR/?utm_source=ig_web_copy_link"><img src="./img/logo.png" alt="Logo" style="width:100%" /></a>', 'Curso que quiere tomar Alfred', 'https://www.domestika.org/es/courses/3973-estrategias-de-posicionamiento-de-marca-para-creativos', 'nan', 'nan', 'nan', 'nan')]
const actividades5 = [Actividad('5.0', '¡¡ESG Course!!', '0.0', '1.0', '#008080', 'white', '¡Dale duro hermosa! No pares con este curso que va a ser evidencia importante ne tu hoja de vida. <b>Cuéntame todo todo lo que aprendas</b> en este curso preciosa. Mientras más sepa yo de tu campo, mejor puedo gestionarte en mi red.', '<a target="_blank" href="https://www.coursera.org/specializations/materiality-esg-factors"><img src="./img/esg.png" alt="Captura de pantalla del curso de ESG" style="width:100%" /></a>', 'Coursera ESG', 'https://www.coursera.org/specializations/materiality-esg-factors', 'Carpeta taller ESG', 'https://drive.google.com/drive/folders/1Ml0LH5pWT8PSN9vOIenDOLFNdFwGW83Z?usp=sharing', 'nan', 'nan'),Actividad('5.0', 'Curso Palermo', '0.0', '2.0', '#008080', 'white', 'Despuecito del otro curso.', '<!--a target="_blank" href="https://www.coursera.org/learn/etica-gobierno-corporativo"><img src="./img/palermo.png" alt="Captura de pantalla de curso universidad e palermo en coursera." style="width:100%" /></a-->', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('5.0', 'Contenido - Hacerte notar', '0.0', '1.0', '#008080', 'white', 'Todo todo lo que aprendas en tu curso amada piensa en cómo aplicarlo a tu contexto en LatAm. Depronto ten una bitácora de reflexión. Todos estos análisis los podemos compartir en LinkedIn. Cuéntame todo lo que aprendas corazón. Te amoo.', '<a target="_blank" href="./img/pensando.jpg"><img src="./img/pensando.jpg" alt="Mujer escribiendo en libreta frente a un computador." style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades6 = [Actividad('6.0', 'Mapear organizaciones', '0.0', '2.0', '#339999       ', 'white', 'Chica hermosa. Busca en las 100 empresas más grandes de Colombia todas las que tengan departamento de Sostenibilidad o programas ESG y pásaselas a tu novio por favor.</br></br>Mientras vas haciendo la revisión, pon la entrevista que el Diario La República hace a María Lara, directora de sostenibilidad en LatAm Airlines. Empápate de ese ambiente mientras buscas las empresas. Esto también te sirve como referente para irte informando de cómo se ve una estrategia de sostenibilidad para una aerolínea, que es una industria muy compleja. Te amo! Y me siento orgulloso de tí todos los días de mi vida.</br></br>Te dejo la entrevista enlazada en la foto, y las 100 empresas abajo como enlace.', '<a target="_blank" href="https://youtu.be/Z08sRmcWwX8?t=47"><img src="./img/marialara.jpg" alt="Foto de María Lara." style="width:100%" /></a>', '100 empresas más grandes de Colombia', 'https://www.larepublica.co/especiales/las-1-000-empresas-mas-grandes-de-2022/ecopetrol-lidera-las-100-empresas-mas-grandes-de-colombia-en-2022-3642520', 'nan', 'nan', 'nan', 'nan')]
const actividades7 = [Actividad('7.0', 'Ideas para curso', '0.0', '1.0', '#600080', 'white', 'Amor agenda con tu chico una sesión de co-creación para pensarnos talleres-experiencia. Y hoy más bien hacemos estrategia :3 ', '<a target="_blank" href="./img/workshop.png"><img src="./img/workshop.png" alt="Personas pintando en un taller de una tarde." style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades8 = [Actividad('8.0', 'Columnas de la tabla de becas', '0.0', '1.0', '#660033', 'white', 'Amor, hoy depronto en lugar de esto puedes dedicar tiempo a la reunión con el CTP a las 11 de la mañana. Pero en todo caso, se trata de hacer una tabla consolidando todas las oportunidades de becas en otros países. Te dejo la lista de países favoritos abajo. Besitoooos.', '<ul><li>Inglaterra &lt;3</li><li>Suiza &lt;3</li><li>Noruega*</li><li>Italia &lt;3</li><li>Alemania &lt;3</li><li>España &lt;3</li><li>Francia</li><li>Canadá &lt;3</li><li>Suencia*</li><li>Dinamarca*</li><li>Austria &lt;3</li><li>Nueva Zelanda</li><li>Australia</li></ul>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades12 = [Actividad('12.0', 'Ir a la U a nadar', '0.0', '1.0', '#00e6ac', 'white', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades13 = [Actividad('13.0', 'Lectura', '0.0', '3.0', '#99004d', 'white', 'Amor mira depronto recomendados de libros que quieras leer, si quieres me puedes contar y buscamos entre los dos. Te dejo la página de la bilioteca preciosa.', '<a target="_blank" href="https://biblioteca.uniandes.edu.co/"><img src="./img/leer.jpg" alt="Mujer leyendo en la ventana." style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Journaling', '0.0', '7.0', '#99004d', 'white', 'Amor escribe nuestra tarde juntos antier en tu journal :3 si quieres.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Tiempo con mi chico', '0.0', '8.0', '#99004d', 'white', 'Cosas pendientes: 1) Andresito y Anita 2) Liz! 3) Nash', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Ocio', '0.0', '6.0', '#99004d', 'white', 'Tienes tiempo.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Baile', '0.0', '1.0', '#99004d', 'white', 'Podrías revisar, lo que quieras amor.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Arpa', '1.0', '4.0', '#99004d', 'white', 'También se vale hacer una práctica así express. Corta pero constante.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Salir con amigos', '0.0', '5.0', '#99004d', 'white', 'Para cuando cuadres.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13.0', 'Canto', '0.0', '2.0', '#99004d', 'white', 'En su momento vida.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades9 = [Actividad('9.0', 'Estrategia con tu chicooo', '0.0', '1.0', '#2a0080', 'white', '¡La semana pasada fue una semana poderosísima para tí amor! Hoy veámonos porque quiero alinear las métricas que nos permitan agregar al marco de medición un detalle: <b>métricas de consistencia para que puedas visualizar semanas super podedoras como la semana pasada</b> y las <b>métricas de resultado como las que tenemos</b></br></br>Si quieres le quitamos 2 horas a proyectos y le dedicamos a esto en la tardecita. Te amooo.</br>', '</br> Nota para alfred: se me ocurre algo sencillo como un mapita de calor con el número de bloques que has dedicado a cada actividad desde hace rato.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades10 = [Actividad('10.0', 'Configurar colores', '1.0', '1.0', '#009999', 'white', '¡Amor! Todos los días yo renuevo los datos de tu board. Para configurar los colores sólo es necesario que en el excel que te comparto a continuación tú modifiques las columnas de color. Para escoger el código correspondiente puedes usar la herramienta de elección de color y copiar el hexadecimal.</br></br>Los colores que debes modificar están en la pestaña "areas" y "actividades".', '<a target="_blank" href="./img/color.png"><img src="./img/color.png" alt="Captura de pantalla de w3 color picker" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'Paleta de Colores', 'https://www.w3schools.com/colors/colors_picker.asp', 'nan', 'nan'),Actividad('10.0', 'Configurar actividades', '1.0', '2.0', '#009999', 'white', 'Para configurar las actividades sólo debes editar en el excel la tabla en la pestaña "actividades". Tu novio carga todos los días los datos a la aplicación para que aparezcan.', '<a target="_blank" href="./img/actividades.png"><img src="./img/actividades.png" alt="Captura de pantalla de tabla de actividades" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'nan', 'nan', 'nan', 'nan'),Actividad('10.0', 'Configurar áreas', '1.0', '3.0', '#009999', 'white', 'En el excel en la pestaña areas puedes encontrar la información de las áreas. Tu novio actualiza los datos todos los días desde el excel para que te aparezcan de acuerdo a lo que pusiste. ¡Si tienes cualquier duda me puedes decir!', '<a target="_blank" href="./img/areas.png"><img src="./img/areas.png" alt="Captura de pantalla de tabla de areas" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'nan', 'nan', 'nan', 'nan'),Actividad('10.0', 'Marco', '1.0', '4.0', '#009999', 'white', 'Todo está alineado con el figma. Te lo dejo aquí.', '<a target="_blank" href="./img/board.png"><img src="./img/board.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></a> </br></br> <a target="_blank" href="./img/board1.png"><img src="./img/board1.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board2.png"><img src="./img/board2.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board3.png"><img src="./img/board3.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board4.png"><img src="./img/board4.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades14 = [Actividad('14.0', 'Ve con toda corazón', '1.0', '1.0', '#cc6600', 'white', 'Amor! hoy vas a campo, te voy a extrañar montañas esta semana. Voy a estar trabajando muy juicioso! Yo se que haces un trabajo increíble siempre porque eres una profesional maravillosa. Te mando un beso.', '<a target="_blank" href="./img/nosotros.jpg"><img src="./img/nosotros.jpg" alt="Foto de nosotros" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Calcular', '0.0', '1.0', '#cccccc', '#404040', 'Competencia: perfilar para un par de opciones, cuál es la mejor respuesta del otro, y así escoger entre las dos opciones.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Identify hanging pieces', '0.0', '2.0', '#cccccc', '#404040', 'Amor, una pieza indefensa o hanging piece es una pieza que no está siendo defendida por nadie. La competencia que vamos a entrenar es que identifiques esas piezas en cada turno que tengas.', '<a target="_blank" href="https://www.chess.com/terms/hanging-piece-chess#:~:text=A%20hanging%20piece%20is%20a,for%20being%20exposed%20to%20capture)."><img src="./img/chess1.png" alt="Hanging bishop in board." style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Tactics: forks', '0.0', '3.0', '#cccccc', '#404040', 'Hay una familia innumerable de patrones que conducen a forks y etc. La idea es comenzar a reconocer estos patrones. Alfred puede identificar algunos patrones y jugarlos en repetidas ocasiones para comenzar a entrenar a Dani en el reconocimiento y contraataque de estos.', '<a target="_blank" href="https://youtu.be/64I_7YY6xkA"><img src="./img/hikaru.png" alt="Hikaru Nakamura explaining chess forks in interview." style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Tactics: discovered attacks', '0.0', '4.0', '#cccccc', '#404040', 'Igual que forks', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Tactics: batteries', '0.0', '5.0', '#cccccc', '#404040', 'Qué es esto? pero igual que forks', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14.0', 'Endgames', '0.0', '6.0', '#cccccc', '#404040', 'Hay familias innumerables de endgames, comenzar a ver patrones del estilo: jaque en 1. Y luego jaque en 2, puede ser la clave.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]

const diccionarioActividades = {
  15 : actividades15,
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
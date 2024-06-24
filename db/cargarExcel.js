////////////////////////////////////////
// Aquí insertamos el código de áreas
////////////////////////////////////////


const horasLunes = [Area(1, "Dios", 2, "#003399"),Area(2, "Proyectos", 4, "#600080"),Area(3, "Aplicaciones", 2, "#008080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 0, "#009999")]
const horasMartes = [Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 2, "#003399"),Area(4, "Comisión de obra", 4, "#600080"),Area(5, "Marca del perfil ESG", 2, "#008080"),Area(10, "Configuraciones", 0, "#009999")]
const horasMiercoles = [Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 3, "#003399"),Area(2, "Proyectos", 2, "#600080"),Area(6, "Fortalecer contactos", 2, "#008080"),Area(8, "Proyectar estudios", 1, "#660033"),Area(10, "Configuraciones", 0, "#009999")]
const horasJueves = [Area(1, "Dios", 4, "#003399"),Area(4, "Comisión de obra", 2, "#600080"),Area(5, "Marca del perfil ESG", 2, "#008080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 0, "#009999")]
const horasViernes = [Area(11, "Ejercicio", 1, "#ff8080"),Area(1, "Dios", 2, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(7, "Cursos & workshops", 2, "#600080"),Area(12, "Transporte", 3, "#00e6ac"),Area(10, "Configuraciones", 0, "#009999")]
const horasSabado = [Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dios", 1, "#003399"),Area(7, "Cursos & workshops", 2, "#600080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 0, "#009999")]
const horasDomingo = [Area(1, "Dios", 2, "#003399"),Area(13, "Extra", 3, "#99004d"),Area(10, "Configuraciones", 0, "#009999"),Area(14, "Ajedrez", 1, "#333333")]

////////////////////////////////////////

let areasDeHoy = horasLunes

/////////////////////////////////////////////////////////////
// Aquí insertamos el código de actividades
// ORM: https://colab.research.google.com/drive/1jD08kTPmRHfKIAopE2iv1sX3jrinLBEo?usp=sharing
// Excel: https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing
/////////////////////////////////////////////////////////////


const actividades11 = [Actividad('11', 'Gym', '0', '1', '#ff8080', 'white', 'Amor! ve al gym! yo te despierto. Vamosssssss', '<a target="_blank" href="./img/gym.jpg"><img src="./img/gym.jpg" alt="Mujer tomando una pesa del gimnasio" style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('11', 'Natación', '0', '2', '#ff8080', 'white', 'Déjame esta semanita de gracia aún para nadar. Que me paguen y que yo pueda ir a cita médica. Como la mona cumple, me queda difícil por tiempos.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades1 = [Actividad('1', 'Congregarme', '0', '2', '#003399', 'white', 'Hoy tienes enseñanza. Te amo! Voy a tratar de ir en la mañana. Tú ve en la tardecita.', 'nan', 'Horarios y sedes IDMJI', 'https://idmji.org/direcciones/', 'nan', 'nan', 'nan', 'nan'),Actividad('1', 'Oración y lectura', '0', '1', '#003399', 'white', 'Amor, llega antecitos, tú puedesssss si llegas antecitos me avisas y te doy un premio.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('1', 'Servicio', '1', '3', '#003399', 'white', 'Ya prestaste servicio ayer! Y te veías preciosa con tu vestido y blazer <3', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades2 = [Actividad('2', 'Estructura narrativa', '0', '1', '#600080', 'white', '¡Amor! Para el proyecto del libro infantil te propongo lo siguiente: <ol><li>Escoge un objetivo de aprendizaje de los que exploramos la vez pasada. Mantenlo muy claro y muy acotado.</li><li>Piensa en una estructura narrativa general (inicio nudo y desenlace? jajaja la que tú prefieras. Guíate en la estructura narrativa de otros libros como el del elefante!</li><li>Piensa en tu personaje principal de la historia. Descríbelo, planéalo.</li></ol>Con eso puedes ir armando un storyboard que mostrar. Y puedes citarme esta semana y a Andrés para mostrarle avances. Te dejo un ejemplo del boceto de páginas.', '<a target="_blank" href="https://co.pinterest.com/pin/442689838384392596/"><img src="./img/storyboardacuarela.jpg" alt="Storyboard de libro de acuarela." style="width:100%" /></a>', 'Video: plan your book', 'https://youtu.be/knA9AlI3R8g?t=108', 'nan', 'nan', 'nan', 'nan'),Actividad('2', 'Doméstika: dibujo anatómico', '0', '2', '#600080', 'white', 'Te propongo que le dediques más timepo al libro hoy, y en la mitad de la semana le dedicas tiempo a esto.', '<!--a target="_blank" href="https://www.domestika.org/es/courses/area/184-dibujo-anatomico"><img src="./img/dibujo.png" alt="Imágen del curso de dibujo anatómico en domestika" style="width:100%" /></a-->', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades3 = [Actividad('3', 'Aplicar a Vacantes', '0', '1', '#008080', 'white', '¡Vida! La semana pasada mapeaste algunas vacantes de trabajos, hoy dedica tiempo a mandar las hojas de vida, yo se que tú puedes. Hazlo como parte de un hábito por ser diligente, muy fresca, sin pararle muchas bolas. Si me necesitas me cuentas :3', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades4 = [Actividad('4', 'Creación de obra', '0', '1', '#600080', 'white', '¡Amor! tienes dos proyectos de creación de obra sugeridos en este momento. <ul style="padding:30px;"><li>El tríptico hermoso</li><li>Obra en acuarela con dibujo anatómico del cuerpo entero</li><li>Una obra en acuarela con dibujo anatómico de manos</li></ul></br></br>Vida <b>recuerda tomar timelapses de todo lo que hagas</b>, tienes el tripode y tienes el bracito de mesa, úsalos. Te amooo.', '<a target="_blank" href="./img/triptico.jpg"><img src="./img/triptico.jpg" alt="Tríptico en acuarela" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('4', 'Reunión estrategia de contenido orientado a ventas', '0', '2', '#600080', 'white', 'Una vez más amor, te dejo esta historia de este muchacho que sigo hace mucho. No tiene nada que ver con ilustración pero su contenido de Instagram le ha dado para conseguir clientes como este. Me parece muy tierno porque es un chico muy sencillo y transparente, pero hace un trabajo precioso. Este reel lo vi la semanita pasada. <b>Agéndame corazón esta semana</b> y nos pensamos una estrategia de contenido que tenga una propuesta de valor y una estrategia de funneling! Estoy pensando en tomar un curso de domestika que me mandaste y podemos aplicar las cosas. Lo voy a poner aquí para tenerlo', '<a target="_blank" href="https://www.instagram.com/reel/C8Z5101COIR/?utm_source=ig_web_copy_link"><img src="./img/logo.png" alt="Logo" style="width:100%" /></a>', 'Curso que quiere tomar Alfred', 'https://www.domestika.org/es/courses/3973-estrategias-de-posicionamiento-de-marca-para-creativos', 'nan', 'nan', 'nan', 'nan')]
const actividades5 = [Actividad('5', '¡¡ESG Course!!', '0', '1', '#008080', 'white', 'Vida mía! a seguirle dando a este curso. Me vas contando todo lo que aprendas porfis! así puedo entender mejor tu poder :3 Cuéntamelo todo el mismo día. Mándame una notita de voz siempre recapitulando qué viste en un minutito. Te amoooooo.', '<a target="_blank" href="https://www.coursera.org/specializations/materiality-esg-factors"><img src="./img/esg.png" alt="Captura de pantalla del curso de ESG" style="width:100%" /></a>', 'Coursera ESG', 'https://www.coursera.org/specializations/materiality-esg-factors', 'Carpeta taller ESG', 'https://drive.google.com/drive/folders/1Ml0LH5pWT8PSN9vOIenDOLFNdFwGW83Z?usp=sharing', 'nan', 'nan'),Actividad('5', 'Curso Palermo', '0', '2', '#008080', 'white', 'Este lo retomamos cuando terminemos el otro amada.', '<!--a target="_blank" href="https://www.coursera.org/learn/etica-gobierno-corporativo"><img src="./img/palermo.png" alt="Captura de pantalla de curso universidad e palermo en coursera." style="width:100%" /></a-->', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('5', 'Contenido - Hacerte notar', '0', '1', '#008080', 'white', 'Amor, todo lo que vayas aprendiendo, ve anotando: </br></br>1) para tu propio aprendizaje "¿Cómo esto que estoy aprendiendo aplica a Colombia/LatAm?", </br></br>2) para tu contenido en LinkedIn, qué cosas te parecen interesantes de compartir.</br></br>La próxima semana tratas de citarme para comenzarnos  apensar estrategia de contenido en LinkedIn.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades6 = [Actividad('6', 'Reunón con CTP', '0', '1', '#339999       ', 'white', 'Hoy tienes tu reunión con CTP! lleva tu hoja de vida y algunas de las ofertas que viste ayer amda. Está perfecto que te den feedback sobre lo que tengas. Dedícale una hora a esto y la otra a lo de abajo si puedes porfi. Mañana y pasado vamos aplicando a las ofertas.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('6', 'Mapear organizaciones', '0', '2', '#339999       ', 'white', 'Hoy no entres a LinkedIn amada mía. Busca en las 100 empresas más grandes de Colombia todas las que tengan departamento de Sostenibilidad o programas ESG y pásaselas a tu novio por favor.</br></br>Mientras vas haciendo la revisión, pon la entrevista que el Diario La República hace a María Lara, directora de sostenibilidad en LatAm Airlines. Empápate de ese ambiente mientras buscas las empresas. Esto también te sirve como referente para irte informando de cómo se ve una estrategia de sostenibilidad para una aerolínea, que es una industria muy compleja. Te amo! Y me siento orgulloso de tí todos los días de mi vida.</br></br>Te dejo la entrevista enlazada en la foto, y las 100 empresas abajo como enlace.', '<a target="_blank" href="https://youtu.be/Z08sRmcWwX8?t=47"><img src="./img/marialara.jpg" alt="Foto de María Lara." style="width:100%" /></a>', '100 empresas más grandes de Colombia', 'https://www.larepublica.co/especiales/las-1-000-empresas-mas-grandes-de-2022/ecopetrol-lidera-las-100-empresas-mas-grandes-de-colombia-en-2022-3642520', 'nan', 'nan', 'nan', 'nan')]
const actividades7 = [Actividad('7', 'Ideas para curso', '0', '1', '#600080', 'white', 'Amor agenda con tu chico una sesión de co-creación para pensarnos talleres-experiencia. Y hoy más bien hacemos estrategia :3 ', '<a target="_blank" href="./img/workshop.png"><img src="./img/workshop.png" alt="Personas pintando en un taller de una tarde." style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades8 = [Actividad('8', 'Columnas de la tabla de becas', '0', '1', '#660033', 'white', 'Amor, hoy depronto en lugar de esto puedes dedicar tiempo a la reunión con el CTP a las 11 de la mañana. Pero en todo caso, se trata de hacer una tabla consolidando todas las oportunidades de becas en otros países. Te dejo la lista de países favoritos abajo. Besitoooos.', '<ul><li>Inglaterra &lt;3</li><li>Suiza &lt;3</li><li>Noruega*</li><li>Italia &lt;3</li><li>Alemania &lt;3</li><li>España &lt;3</li><li>Francia</li><li>Canadá &lt;3</li><li>Suencia*</li><li>Dinamarca*</li><li>Austria &lt;3</li><li>Nueva Zelanda</li><li>Australia</li></ul>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades12 = [Actividad('12', 'Ir a la U a nadar', '0', '1', '#00e6ac', 'white', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades13 = [Actividad('13', 'Lectura', '0', '3', '#99004d', 'white', 'Recuerda buscar un libro en la página de la biblioteca para cuando vayamos y que quieras pedir prestado preciosa :3', '<a target="_blank" href="https://biblioteca.uniandes.edu.co/"><img src="./img/leer.jpg" alt="Mujer leyendo en la ventana." style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13', 'Journaling', '0', '7', '#99004d', 'white', 'Tu journal siempre es una opción corazón.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13', 'Tiempo con mi chico', '0', '8', '#99004d', 'white', 'Tenemos pendientes muchas cosas: 1) Andresito y Anita 2) Liz! 3) Nash', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13', 'Ocio', '0', '6', '#99004d', 'white', 'Hoy puedes ver pelis si quieres...', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13', 'Baile', '0', '1', '#99004d', 'white', 'Depronto lueguito :)', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13', 'Arpa', '1', '4', '#99004d', 'white', '¿Quizá una práctica express?', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13', 'Salir con amigos', '0', '5', '#99004d', 'white', 'Para cuando cuadres.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('13', 'Canto', '0', '2', '#99004d', 'white', 'Un día preciosa.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades9 = [Actividad('9', 'Estrategia con tu chicooo', '0', '1', '#2a0080', 'white', '¡La semana pasada fue una semana poderosísima para tí amor! Hoy veámonos porque quiero alinear las métricas que nos permitan agregar al marco de medición un detalle: <b>métricas de consistencia para que puedas visualizar semanas super podedoras como la semana pasada</b> y las <b>métricas de resultado como las que tenemos</b></br></br>Si quieres le quitamos 2 horas a proyectos y le dedicamos a esto en la tardecita. Te amooo.</br>', '</br> Nota para alfred: se me ocurre algo sencillo como un mapita de calor con el número de bloques que has dedicado a cada actividad desde hace rato.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades10 = [Actividad('10', 'Configurar colores', '1', '1', '#009999', 'white', '¡Amor! Todos los días yo renuevo los datos de tu board. Para configurar los colores sólo es necesario que en el excel que te comparto a continuación tú modifiques las columnas de color. Para escoger el código correspondiente puedes usar la herramienta de elección de color y copiar el hexadecimal.</br></br>Los colores que debes modificar están en la pestaña "areas" y "actividades".', '<a target="_blank" href="./img/color.png"><img src="./img/color.png" alt="Captura de pantalla de w3 color picker" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'Paleta de Colores', 'https://www.w3schools.com/colors/colors_picker.asp', 'nan', 'nan'),Actividad('10', 'Configurar actividades', '1', '2', '#009999', 'white', 'Para configurar las actividades sólo debes editar en el excel la tabla en la pestaña "actividades". Tu novio carga todos los días los datos a la aplicación para que aparezcan.', '<a target="_blank" href="./img/actividades.png"><img src="./img/actividades.png" alt="Captura de pantalla de tabla de actividades" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'nan', 'nan', 'nan', 'nan'),Actividad('10', 'Configurar áreas', '1', '3', '#009999', 'white', 'En el excel en la pestaña areas puedes encontrar la información de las áreas. Tu novio actualiza los datos todos los días desde el excel para que te aparezcan de acuerdo a lo que pusiste. ¡Si tienes cualquier duda me puedes decir!', '<a target="_blank" href="./img/areas.png"><img src="./img/areas.png" alt="Captura de pantalla de tabla de areas" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'nan', 'nan', 'nan', 'nan'),Actividad('10', 'Marco', '1', '4', '#009999', 'white', 'Todo está alineado con el figma. Te lo dejo aquí.', '<a target="_blank" href="./img/board.png"><img src="./img/board.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></a> </br></br> <a target="_blank" href="./img/board1.png"><img src="./img/board1.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board2.png"><img src="./img/board2.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board3.png"><img src="./img/board3.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board4.png"><img src="./img/board4.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades14 = [Actividad('14', 'Calcular', '0', '1', '#cccccc', '#404040', 'Competencia: perfilar para un par de opciones, cuál es la mejor respuesta del otro, y así escoger entre las dos opciones.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14', 'Identify hanging pieces', '0', '2', '#cccccc', '#404040', 'Amor, una pieza indefensa o hanging piece es una pieza que no está siendo defendida por nadie. La competencia que vamos a entrenar es que identifiques esas piezas en cada turno que tengas.', '<a target="_blank" href="https://www.chess.com/terms/hanging-piece-chess#:~:text=A%20hanging%20piece%20is%20a,for%20being%20exposed%20to%20capture)."><img src="./img/chess1.png" alt="Hanging bishop in board." style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14', 'Tactics: forks', '0', '3', '#cccccc', '#404040', 'Hay una familia innumerable de patrones que conducen a forks y etc. La idea es comenzar a reconocer estos patrones. Alfred puede identificar algunos patrones y jugarlos en repetidas ocasiones para comenzar a entrenar a Dani en el reconocimiento y contraataque de estos.', '<a target="_blank" href="https://youtu.be/64I_7YY6xkA"><img src="./img/hikaru.png" alt="Hikaru Nakamura explaining chess forks in interview." style="width:100%" /></a></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14', 'Tactics: discovered attacks', '0', '4', '#cccccc', '#404040', 'Igual que forks', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14', 'Tactics: batteries', '0', '5', '#cccccc', '#404040', 'Qué es esto? pero igual que forks', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('14', 'Endgames', '0', '6', '#cccccc', '#404040', 'Hay familias innumerables de endgames, comenzar a ver patrones del estilo: jaque en 1. Y luego jaque en 2, puede ser la clave.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]

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
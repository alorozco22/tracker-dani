////////////////////////////////////////
// Aquí insertamos el código de áreas
////////////////////////////////////////


const horasLunes = [Area(1, "Dios", 2, "#003399"),Area(2, "Proyectos", 4, "#600080"),Area(3, "Aplicaciones", 2, "#008080"),Area(10, "Configuraciones", 1, "#009999")]
const horasMartes = [Area(1, "Dios", 2, "#003399"),Area(4, "Comisión", 4, "#600080"),Area(5, "Hacerse notar", 2, "#008080"),Area(10, "Configuraciones", 1, "#009999")]
const horasMiercoles = [Area(1, "Dios", 3, "#003399"),Area(2, "Proyectos", 2, "#600080"),Area(6, "Fortalecer contactos", 2, "#008080"),Area(8, "Proyectar estudios", 1, "#660033"),Area(10, "Configuraciones", 1, "#009999")]
const horasJueves = [Area(1, "Dios", 2, "#003399"),Area(4, "Comisión", 4, "#600080"),Area(5, "Hacerse notar", 2, "#008080"),Area(10, "Configuraciones", 1, "#009999")]
const horasViernes = [Area(1, "Dios", 2, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(7, "Cursos & workshops", 4, "#600080"),Area(10, "Configuraciones", 1, "#009999")]
const horasSabado = [Area(10, "Configuraciones", 1, "#009999")]
const horasDomingo = [Area(1, "Dios", 2, "#003399"),Area(9, "Estrategia con mi chico", 2, "#2a0080"),Area(10, "Configuraciones", 1, "#009999")]


////////////////////////////////////////

let areasDeHoy = horasLunes

/////////////////////////////////////////////////////////////
// Aquí insertamos el código de actividades
/////////////////////////////////////////////////////////////


const actividades1 = [Actividad('1', 'Congregarme', '0', '1', '#003399', 'white', '¡Guapa! no había agua en mi casa esta mañana entonces no voy a poder ir a la i. Depronto si me grabas la enseñanza, siempre es súper enriquecedor. Te dejo como siempre la página de horarios y sedes de la iglesia abajo.', 'nan', 'Horarios y sedes IDMJI', 'https://idmji.org/direcciones/', 'nan', 'nan', 'nan', 'nan'),Actividad('1', 'Servicio', '1', '2', '#003399', 'white', '¡Amor! como ayer tuviste sonido ya esta <b>hora de más</b> que estaba presupuestada la puedes usar en cualquier otra área.</br></br>Te dejo de nuevo el panorama de la semana por si quieres escoger otra área para dedicarle la horita que te sobra.', '<a target="_blank" href="./img/board.png"><img src="./img/board.png" alt="Tabla de presupuesto de tiempos" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades2 = [Actividad('2', 'Wireframe de contenido libro ilustrado', '0', '1', '#600080', 'white', '¡Amor! Sofi me mandó este post que creo que compara diferentes niveles de creación en diseño.</br></br>Te propongo que antes de lanzarte a ilustrar con full fidelidad, ¡hagas un <b>wireframe</b>! Esto es un boceto muuuuy poco esforzado gráficamente <b>cuyo propósito es alinearte con otras personas en lo que se va a crear para enriquecer tu creación antes de detallarla</b>. Si quieres ese me lo puedes mostrar a mí también y te puedo dar feedback sobre pedagogía.</br></br>Te mando un video en el se detalla un poco algo aprecido a esto para la planeación. Si quieres míralo desde el momento que está el enlace. Te amoooo ve con toda mi leona ilustradora 🔥', '<a target="_blank" href="./img/wireframe.jpg"><img src="./img/wireframe.jpg" alt="Instagram post about wireframes in design" style="width:100%" /></a>', 'Video: plan your book', 'https://youtu.be/knA9AlI3R8g?t=108', 'nan', 'nan', 'nan', 'nan')]
const actividades3 = []
const actividades4 = [Actividad('4', 'Creación de obra', '0', '1', '#600080', 'white', '¡Amor! para esta área la idea es que puedas crear mucha obra! ¡No pares de pintar y experimentar cosas nuevas! Haz una pausa a tu curso de acuarela y dedícale un poco de tiempo a crear obra.</br></br>Podrías comenzar a experimentar con el iPad en Procreate</br></br>O bien, podrías fijarte en tu MoodboArt para inspiración!', '<a target="_blank" href="./img/mood.png"><img src="./img/mood.png" alt="Captura de pantalla del grupo MoodboArt en Waa" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('4', 'Reunión estrategia de contenido orientado a ventas', '0', '2', '#600080', 'white', 'Agendar a tu chico (la semana después del 31 de mayo) para que nos vayamos pensando una estrategia de publicación y contenido en Entropía Cromática que sea centrada en ventas. ¡Podemos usar técnicas de funneling para esto! Voy a buscar videos que te puedan dar contexto.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades5 = [Actividad('5', 'Apoyo financiero SEG', '1', '1', '#008080', 'white', 'Redactar el formulario de apoyo financiero para el curso de ESG en cousera. Te dejo los enlaces abajo corazón.', '<a target="_blank" href="./img/esg.png"><img src="./img/esg.png" alt="Captura de pantalla del curso de ESG" style="width:100%" /></a>', 'Coursera ESG', 'https://www.coursera.org/specializations/materiality-esg-factors', 'Carpeta taller ESG', 'https://drive.google.com/drive/folders/1Ml0LH5pWT8PSN9vOIenDOLFNdFwGW83Z?usp=sharing', 'nan', 'nan')]
const actividades6 = [Actividad('6', 'Mapear organizaciones', '0', '1', '#008080', 'white', 'Vida, si alcanzas a dedicarle un ratito a armar una tabla con algunas de las empresas que tienen programas de sostenibilidad que operan en Colombia sería maravilloso! <b>La idea es mapear todas las empresas que haya en Colombia con departamento de sostenibilidad</b>. Si tú me ayudas con eso, yo puedo ayudarte renovando contactos por ese lado 🥰', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades7 = []
const actividades8 = [Actividad('8', 'Columnas de la tabla de becas', '0', '1', '#660033', 'white', 'Hermosa, yo creo que si armamos una tablita y comenzamos a consolidar ahí todas las oportunidades de becas que hemos visto ahí, por insta, y de más fuentes, sería top. Te dejo la lista de nuestros países favoritos.  Por lo pronto con que estructures unas columnas, yo creo que chuleamos. No olvides compartirmelo :3 Te amo!', '<ul><li>Inglaterra &lt;3</li><li>Suiza &lt;3</li><li>Noruega*</li><li>Italia &lt;3</li><li>Alemania &lt;3</li><li>España &lt;3</li><li>Francia</li><li>Canadá &lt;3</li><li>Suencia*</li><li>Dinamarca*</li><li>Austria &lt;3</li><li>Nueva Zelanda</li><li>Australia</li></ul>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades9 = []
const actividades10 = [Actividad('10', 'Configurar colores', '1', '1', '#009999', 'white', '¡Amor! Todos los días yo renuevo los datos de tu board. Para configurar los colores sólo es necesario que en el excel que te comparto a continuación tú modifiques las columnas de color. Para escoger el código correspondiente puedes usar la herramienta de elección de color y copiar el hexadecimal.</br></br>Los colores que debes modificar están en la pestaña "areas" y "actividades".', '<a target="_blank" href="./img/color.png"><img src="./img/color.png" alt="Captura de pantalla de w3 color picker" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'Paleta de Colores', 'https://www.w3schools.com/colors/colors_picker.asp', 'nan', 'nan'),Actividad('10', 'Configurar actividades', '1', '2', '#009999', 'white', 'Para configurar las actividades sólo debes editar en el excel la tabla en la pestaña "actividades". Tu novio carga todos los días los datos a la aplicación para que aparezcan.', '<a target="_blank" href="./img/actividades.png"><img src="./img/actividades.png" alt="Captura de pantalla de tabla de actividades" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'nan', 'nan', 'nan', 'nan'),Actividad('10', 'Configurar áreas', '1', '3', '#009999', 'white', 'En el excel en la pestaña areas puedes encontrar la información de las áreas. Tu novio actualiza los datos todos los días desde el excel para que te aparezcan de acuerdo a lo que pusiste. ¡Si tienes cualquier duda me puedes decir!', '<a target="_blank" href="./img/areas.png"><img src="./img/areas.png" alt="Captura de pantalla de tabla de areas" style="width:100%" /></a>', 'Excel de datos ', 'https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing', 'nan', 'nan', 'nan', 'nan')]

const diccionarioActividades = {
  1 : actividades1,
  2 : actividades2,
  3 : actividades3,
  4 : actividades4,
  5 : actividades5,
  6 : actividades6,
  7 : actividades7,
  8 : actividades8,
  9 : actividades9,
  10 : actividades10
}

/////////////////////////////////////////

let actividadesVisibles = diccionarioActividades[2]


////////// SIMULAR ALGÚN DÍA /////////
function simularDia(diaOriginal){
	diaOriginal = diaOriginal; // Aquí podemos simular un día si se desea 0 es domingo, 1 es lunes... 6 es sábado
	return diaOriginal;
}
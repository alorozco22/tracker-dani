////////////////////////////////////////
// Aquí insertamos el código de áreas
////////////////////////////////////////


const horasLunes = [Area(15, "Mensajes de tu novio", 1.0, "#cc6600"),Area(16, "Logros de este año", 1.0, "#ffcc66"),Area(11, "Ejercicio", 3.0, "#ff8080"),Area(1, "Dones espirituales", 2.0, "#003399"),Area(3, "Aplicaciones", 2.0, "#008080"),Area(4, "Creación de obra", 4.0, "#600080"),Area(10, "Marco estratégico", 100.0, "#009999")]
const horasMartes = [Area(15, "Mensajes de tu novio", 1.0, "#cc6600"),Area(16, "Logros de este año", 1.0, "#ffcc66"),Area(1, "Dones espirituales", 2.0, "#003399"),Area(18, "Libro infantil", 4.0, "#600080"),Area(5, "Marca del perfil ESG", 2.0, "#008080"),Area(13, "Extra", 3.0, "#99004d"),Area(10, "Marco estratégico", 100.0, "#009999")]
const horasMiercoles = [Area(15, "Mensajes de tu novio", 1.0, "#cc6600"),Area(16, "Logros de este año", 1.0, "#ffcc66"),Area(11, "Ejercicio", 3.0, "#ff8080"),Area(1, "Dones espirituales", 3.0, "#003399"),Area(4, "Creación de obra", 4.0, "#600080"),Area(20, "Novio te riega", 1.0, "#6699ff"),Area(6, "Do Stuff Sustainability", 2.0, "#008080"),Area(10, "Marco estratégico", 100.0, "#009999")]
const horasJueves = [Area(15, "Mensajes de tu novio", 1.0, "#cc6600"),Area(16, "Logros de este año", 1.0, "#ffcc66"),Area(1, "Dones espirituales", 4.0, "#003399"),Area(17, "Proyecto divulgación", 2.0, "#600080"),Area(20, "Novio te riega", 1.0, "#6699ff"),Area(5, "Marca del perfil ESG", 2.0, "#008080"),Area(13, "Extra", 3.0, "#99004d"),Area(10, "Marco estratégico", 100.0, "#009999")]
const horasViernes = [Area(15, "Mensajes de tu novio", 1.0, "#cc6600"),Area(16, "Logros de este año", 1.0, "#ffcc66"),Area(11, "Ejercicio", 1.0, "#ff8080"),Area(1, "Dones espirituales", 2.0, "#003399"),Area(3, "Aplicaciones", 2.0, "#008080"),Area(4, "Creación de obra", 2.0, "#600080"),Area(12, "Transporte", 3.0, "#00e6ac"),Area(10, "Marco estratégico", 100.0, "#009999")]
const horasSabado = [Area(15, "Mensajes de tu novio", 1.0, "#cc6600"),Area(16, "Logros de este año", 1.0, "#ffcc66"),Area(11, "Ejercicio", 3.0, "#ff8080"),Area(1, "Dones espirituales", 1.0, "#003399"),Area(4, "Creación de obra", 2.0, "#600080"),Area(13, "Extra", 3.0, "#99004d"),Area(10, "Marco estratégico", 100.0, "#009999")]
const horasDomingo = [Area(15, "Mensajes de tu novio", 1.0, "#cc6600"),Area(16, "Logros de este año", 1.0, "#ffcc66"),Area(1, "Dones espirituales", 2.0, "#003399"),Area(13, "Extra", 3.0, "#99004d"),Area(10, "Marco estratégico", 100.0, "#009999"),Area(14, "Ajedrez", 1.0, "#333333")]


////////////////////////////////////////

let areasDeHoy = horasLunes

/////////////////////////////////////////////////////////////
// Aquí insertamos el código de actividades
// ORM: https://colab.research.google.com/drive/1jD08kTPmRHfKIAopE2iv1sX3jrinLBEo?usp=sharing
// Excel: https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing
/////////////////////////////////////////////////////////////


const actividades15 = [Actividad('15', 'Retomemos con energía!', '0', '1', '#cc6600', 'white', 'Corazón buenos días! Hoy tenemos cosas emocionantes que hacer. Habrá tiempo para que trabajes en el libro y tiempo para que perfilemos un poco tus actividades en sostenibilidad. Si me lo permites hoy te voy a regar en ese tema. No vayas al gym esta semanita, comienza con toda la otra porque estás cocinando cositas y todo. Comencemos a retomar el hábito de dormirnos temprano, tipo 10 para que te puedas levantar a las 6 amor. Te amooo con todas mis fuerzas.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades16 = [Actividad('16', 'Marca ESG', '1', '1', '#ffcc66', 'black', 'Inicié una especialización en ESG', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Proyectos con ilustración', '1', '1', '#ffcc67', 'black', 'Terminé un curso de divulgción científica', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Proyectos con ilustración', '1', '1', '#ffcc68', 'black', 'Terminé un curso de dibujo anatómico', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Carrera artística', '1', '1', '#ffcc69', 'black', 'Terminé el tríptico', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Comisión de pinturas', '1', '1', '#ffcc70', 'black', 'Hay la oportunidad de tener 2 clientes para Entropía Cromática (divulgación y otro)', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc71', 'black', 'Volví a tocar el arpa ❤️', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Marca ESG', '1', '1', '#ffcc72', 'black', 'Participé en una visita con la ANLA y Frontera', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Pareja', '1', '1', '#ffcc73', 'black', 'Hicimos promesa. Monté en Globo.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc74', 'black', 'Conocí el parque Tayrona.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc75', 'black', 'Morita llegó a mi vida.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Pareja', '1', '1', '#ffcc76', 'black', 'Apoyé a mi chico en la crisis.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades11 = [Actividad('11', 'Ir al gym', '0', '1', '#ff8080', 'white', 'Corazón, hoy estás haciendo el almuerzo y todo, está bien que inicies la otra semanita.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades1 = [Actividad('1', 'Enseñanza', '0', '1', '#003399', 'white', 'Vida, hoy nos vemos en la iglesia. No se dónde voy a almorzar jaja pero voy a tratar de ir a la i.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('1', 'Oración y lectura', '0', '1', '#003399', 'white', 'Amor, hoy lleguemos a las 4:30 a la iglesia y los dos oramos. Te parece? Pero no se cómo hacer porque me toca devolverme a casa. Bueno, ahí vemos.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades18 = []
const actividades17 = []
const actividades3 = []
const actividades4 = [Actividad('4', 'Libro: provisional', '0', '1', '#600080', 'white', 'Vida, provisionalmente hoy podrías usar tu tiempo de creación de obra en el libro infantil porque se que quieres terminar eso rápido. Pero la otra semana retomamos con toda.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades19 = []
const actividades20 = [Actividad('20', 'Esta área', '0', '1', '#6699ff', 'white', 'Este espacio es tiempo que tu novio te va a dedicar hoy. No es tiempo que gastes tú.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('20', 'Do Stuff Sostenibilidad', '0', '1', '#6699ff', 'white', 'Amor, reunámonos para perfilar un poco el Do Stuff de sostenibilidad, si te parece: 50 minutos.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades5 = []
const actividades6 = [Actividad('6', 'Perfilar línea', '0', '1', '#008080', 'white', 'Una carrera en sostenibilidad tiene 1) Un perfil altamente estratégico 2) Un perfil altamente analítico y de contexto global y local 3) Un perfil de implementación robusto (seguimiento programático y presupuestal). Amor, reunámonos hoy para brainstorm qué podemos hacer en estos perfiles. También hoy nos inscribimos al evento de sotenibilidad que te mandé.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades12 = []
const actividades13 = []
const actividades9 = []
const actividades10 = [Actividad('10', 'Marco', '1', '4', '#009999', 'white', 'Todo está alineado con el nuevo figma corazón.', '<a target="_blank" href="./img/board.png"><img src="./img/board.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></a> </br></br> <a target="_blank" href="./img/board1.png"><img src="./img/board1.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board2.png"><img src="./img/board2.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board3.png"><img src="./img/board3.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board4.png"><img src="./img/board4.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br><a target="_blank" href="./img/board5.png"><img src="./img/board5.png" alt="Captura de pantalla de baord de areas" style="width:100%" /></br></br>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades14 = []

const diccionarioActividades = {
  15 : actividades15,
  16 : actividades16,
  11 : actividades11,
  1 : actividades1,
  18 : actividades18,
  17 : actividades17,
  3 : actividades3,
  4 : actividades4,
  19 : actividades19,
  20 : actividades20,
  5 : actividades5,
  6 : actividades6,
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
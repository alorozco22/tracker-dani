////////////////////////////////////////
// Aquí insertamos el código de áreas
////////////////////////////////////////


const horasLunes = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(16, "Logros de este año", 1, "#ffcc66"),Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dones espirituales", 2, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(4, "Creación de obra", 4, "#600080"),Area(10, "Marco estratégco", 100, "#009999")]
const horasMartes = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(16, "Logros de este año", 1, "#ffcc66"),Area(1, "Dones espirituales", 2, "#003399"),Area(18, "Libro infantil", 4, "#600080"),Area(5, "Marca del perfil ESG", 2, "#008080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Marco estratégco", 100, "#009999")]
const horasMiercoles = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(16, "Logros de este año", 1, "#ffcc66"),Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dones espirituales", 3, "#003399"),Area(4, "Creación de obra", 3, "#600080"),Area(20, "Novio te riega", 1, "#6699ff"),Area(6, "Do Stuff Sustainability", 2, "#008080"),Area(10, "Marco estratégco", 100, "#009999")]
const horasJueves = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(16, "Logros de este año", 1, "#ffcc66"),Area(1, "Dones espirituales", 4, "#003399"),Area(17, "Proyecto divulgación", 2, "#600080"),Area(20, "Novio te riega", 1, "#6699ff"),Area(5, "Marca del perfil ESG", 2, "#008080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Marco estratégco", 100, "#009999")]
const horasViernes = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(16, "Logros de este año", 1, "#ffcc66"),Area(11, "Ejercicio", 1, "#ff8080"),Area(1, "Dones espirituales", 2, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(19, "Posicionamiento artista", 2, "#600080"),Area(12, "Transporte", 3, "#818c89"),Area(10, "Marco estratégco", 100, "#009999")]
const horasSabado = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(16, "Logros de este año", 1, "#ffcc66"),Area(11, "Ejercicio", 3, "#ff8080"),Area(1, "Dones espirituales", 1, "#003399"),Area(19, "Posicionamiento artista", 2, "#600080"),Area(13, "Extra", 3, "#99004d"),Area(10, "Marco estratégco", 100, "#009999")]
const horasDomingo = [Area(15, "Mensajes de tu novio", 1, "#cc6600"),Area(16, "Logros de este año", 1, "#ffcc66"),Area(1, "Dones espirituales", 2, "#003399"),Area(13, "Extra", 3, "#99004d"),Area(10, "Marco estratégco", 100, "#009999"),Area(14, "Ajedrez", 1, "#333333")]


////////////////////////////////////////

let areasDeHoy = horasLunes

/////////////////////////////////////////////////////////////
// Aquí insertamos el código de actividades
// ORM: https://colab.research.google.com/drive/1jD08kTPmRHfKIAopE2iv1sX3jrinLBEo?usp=sharing
// Excel: https://docs.google.com/spreadsheets/d/15bKo-qgFv_W6fmUVCgoHzCvpWKCCsYjxDZL_QqOWxTc/edit?usp=sharing
/////////////////////////////////////////////////////////////


const actividades15 = [Actividad('15', 'Sigamos remando', '0', '1', '#cc6600', 'white', 'Vida mía, buenos días, estamos retomando actividades con calmita. Ora mucho para que nuestro Dios te de ciencia en tus labores y respalde tus esfuerzos preciosa. Vamos con calma, disfruta el camino y dedícale tiempo a cada cosa. Amada, si tú quieres dedica el tiempo que ibas a dedicar a ir al centro, a pintar las ilustraciones. Trata de avanzar mucho, ya la otra semana comenzamos a darle a los procesos artísticos además del libro infantil, entonces trata de seguir cerrando ilustraciones. Te amo con todas las fuerzas de mi corazón.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades16 = [Actividad('16', 'Marca ESG', '1', '1', '#ffcc66', 'black', 'Inicié una especialización en ESG', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Proyectos con ilustración', '1', '1', '#ffcc67', 'black', 'Terminé un curso de divulgción científica', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Proyectos con ilustración', '1', '1', '#ffcc68', 'black', 'Terminé un curso de dibujo anatómico', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Carrera artística', '1', '1', '#ffcc69', 'black', 'Terminé el tríptico', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Comisión de pinturas', '1', '1', '#ffcc70', 'black', 'Hay la oportunidad de tener 2 clientes para Entropía Cromática (divulgación y otro)', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc71', 'black', 'Volví a tocar el arpa ❤️', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Marca ESG', '1', '1', '#ffcc72', 'black', 'Participé en una visita con la ANLA y Frontera', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Pareja', '1', '1', '#ffcc73', 'black', 'Hicimos promesa. Monté en Globo.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc74', 'black', 'Conocí el parque Tayrona.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc75', 'black', 'Morita llegó a mi vida.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Pareja', '1', '1', '#ffcc76', 'black', 'Apoyé a mi chico en la crisis.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades11 = [Actividad('11', 'Ir al gym', '0', '1', '#ff8080', 'white', 'La otra semanita empezamos si quieres porque estás cocinando y todo esta semana. Ta perfecto.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades1 = [Actividad('1', 'Alabanza', '0', '1', '#003399', 'white', 'Tu novio va a ir a alabanza hoy a las 7 de la noche bella. Aunque estoy atrasado con Vitruvio :( voy a hacer lo más posible. Pero ve tú a la hora que prefieras amor.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('1', 'Oración y lectura', '0', '1', '#003399', 'white', 'Amor haz el esfuerzo por ver un short de estudio bíblico y orar 10 minutos bella. vamos, tú puedes.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades18 = []
const actividades17 = []
const actividades3 = [Actividad('3', 'Mapear de nuevo', '0', '1', '#008080', 'White', 'Vida, tú me mandaste un par de convocatorias, volvamos a mapear organizadamente para comenzar a aplicar la siguiente semana. Dedícale un ratito, con calmita. Vamos adelante hermosa. Remando con calma.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades4 = [Actividad('4', 'Libro: provisional', '0', '1', '#600080', 'white', 'Vida, provisionalmente hoy podrías usar tu tiempo de creación de obra en el libro infantil porque se que quieres terminar eso rápido. Pero la otra semana retomamos con toda.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades19 = [Actividad('19', 'Artistas inspiradores', '0', '0', '#600080', 'White', 'Amor, para posicionarnos primero tenemos que hacer la proyección de artista que no hemos hecho porque acabamos de comenzar :3 Te propondría que podamos identificar artistas que son referentes para tí. Aspiracionales. Para ver después su trayectoria. Te recomiendo que veas <u>tanto artistas más académicos</u>que pueden O NO hablar sobre temas particulares, pueden O NO proyectarse a mercado de lujo, pueden O NO querer detonar algún diálogo o reflexión... como también veas <u>artistas más comerciales</u> que tienen una marca establecida y venden productos de arte al mercado más amplio, de vez en cuando los llaman para hacer murales, etc.</br></br>Para los más académicos te recomiendo @liarteconarte en instagram, ella es muy top porque describe en voz alta.</br></br>Para los más comerciales te puedes fijar en instagram también hermosa, toca buscar referentes! Lo importante es comenzar a exponernos a este mundo.</br></br>Es MUY IMPORTANTE que cuando veas esto sepas que <u>la obra de ningún artista se parece a la obra de otro artista</u>. Tu obra es bellísima y tiene un mercado. No tienes que comprometerla y modificarla para <u>encajar</u> en un mercado. NO. Este es un ejercicio de <u>reconocer la diversidad en el arte</u>. ¡Te amo! y estoy orgulloso de tí siempre!', '<a target="_blank" href="https://www.instagram.com/liarteconarte/"><img src="./img/liarte.png" alt="Feed de Instagram" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades20 = [Actividad('20', 'Esta área', '0', '1', '#6699ff', 'white', 'Este espacio es tiempo que tu novio te va a dedicar hoy. No es tiempo que gastes tú.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('20', 'Do Stuff Sostenibilidad', '0', '1', '#6699ff', 'white', 'Amor, reunámonos para perfilar un poco el Do Stuff de sostenibilidad, si te parece: 50 minutos.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades5 = []
const actividades6 = [Actividad('6', 'Perfilar línea', '0', '1', '#008080', 'white', 'Una carrera en sostenibilidad tiene 1) Un perfil altamente estratégico 2) Un perfil altamente analítico y de contexto global y local 3) Un perfil de implementación robusto (seguimiento programático y presupuestal). Amor, reunámonos hoy para brainstorm qué podemos hacer en estos perfiles. También hoy nos inscribimos al evento de sotenibilidad que te mandé.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades12 = [Actividad('12', '¿Coger bus a la U?', '0', '0', '#818c89', 'white', 'Hoy tienes presupuestadas 3 horitas para mobilizarte en transporte amor, por si quisieras acompañar a tu novio a la U. Doy clase de 2:00 a 3:30. Y me conecto a apoyar a un estudiante de 4 a 5. Luevo vuelvo a la iglesia para ir a alabanza a las 7. Yo se que no agendamos nada hoy de natación. Si quieres más bien le puedes dedicar este tiempo a las ilustraciones del libro.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
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
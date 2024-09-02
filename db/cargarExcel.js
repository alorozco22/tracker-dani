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


const actividades15 = [Actividad('15', 'Avancemos en las líneas', '0', '1', '#cc6600', 'white', 'Mi corazón la pasé delicioso el fin de semana! Gracias por tu amor y tu cariño. Me encanta cuando vienes por mi barrio. Vamos adelante, con constancia. Siento que deberíamos retomar pequeñas conversaciones estratégicas para no perder de vista los objetivos sí es muy importante. Depronto tomamos un cafecito en Moreno esta semana y hablamos de nuestros objetivos.Shi? Me puedes agendar de una porfis? Te amo!!!', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades16 = [Actividad('16', 'Marca ESG', '1', '1', '#ffcc66', 'black', 'Inicié una especialización en ESG', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Proyectos con ilustración', '1', '1', '#ffcc67', 'black', 'Terminé un curso de divulgción científica', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Proyectos con ilustración', '1', '1', '#ffcc68', 'black', 'Terminé un curso de dibujo anatómico', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Carrera artística', '1', '1', '#ffcc69', 'black', 'Terminé el tríptico', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Comisión de pinturas', '1', '1', '#ffcc70', 'black', 'Hay la oportunidad de tener 2 clientes para Entropía Cromática (divulgación y otro)', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc71', 'black', 'Volví a tocar el arpa ❤️', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Marca ESG', '1', '1', '#ffcc72', 'black', 'Participé en una visita con la ANLA y Frontera', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Pareja', '1', '1', '#ffcc73', 'black', 'Hicimos promesa. Monté en Globo.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc74', 'black', 'Conocí el parque Tayrona.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Bienestar', '1', '1', '#ffcc75', 'black', 'Morita llegó a mi vida.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('16', 'Pareja', '1', '1', '#ffcc76', 'black', 'Apoyé a mi chico en la crisis.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades11 = [Actividad('11', 'Crear el hábito', '0', '1', '#ff8080', 'white', 'Amor! pensemos en una forma de crear el hábito. Para eso te dejo este video de <b>atomic habits</b>. Piensa en cada uno de los momentos que te dicen ahí :) Este libro es buenísimo. Haz clic en la foto y te lleva al <u>video de youtube</u>.', '<a target="_blank" href="https://youtu.be/IHrdOTSPm1I"><img src="./img/atomichabits.png" alt="Libro atomic habits" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades1 = [Actividad('1', 'Estudio Bíblico', '0', '1', '#003399', 'white', 'Vamos en la tardecita amor :3 juntos.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('1', 'Oración y lectura', '0', '1', '#003399', 'white', 'De nuevo te dejo los clips de meditaciones amor mío. Saca un momentito, lo ves y oras.', '<a target="_blank" href="https://www.idmji.org/meditaciones/"><img src="./img/meditaciones.png" alt="Captura de pantalla IDMJI meditaciones" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades18 = []
const actividades17 = []
const actividades3 = [Actividad('3', 'Aplicar', '0', '1', '#008080', 'White', 'Amor, deberíamos escribirle a Carlos hoy para tratar de tomar un cafecito los tres. ¿Será que le escribo yo? Si quieres manda una que otra aplicación, hoy hay tiempo para eso vida. Te amo mucho.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades4 = [Actividad('4', 'Creación de obra', '0', '1', '#600080', 'white', 'Depronto hoy puedes ir por los materiales que querías comprar amor mío. Y seguir trabajando en tus degradé. Usa las hojas que ya usaste por detrás para seguirlo practicando antes de pasar al definitivo.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades19 = [Actividad('19', 'Artistas inspiradores', '0', '0', '#600080', 'White', 'Amor, para posicionarnos primero tenemos que hacer la proyección de artista que no hemos hecho porque acabamos de comenzar :3 Te propondría que podamos identificar artistas que son referentes para tí. Aspiracionales. Para ver después su trayectoria. Te recomiendo que veas <u>tanto artistas más académicos</u>que pueden O NO hablar sobre temas particulares, pueden O NO proyectarse a mercado de lujo, pueden O NO querer detonar algún diálogo o reflexión... como también veas <u>artistas más comerciales</u> que tienen una marca establecida y venden productos de arte al mercado más amplio, de vez en cuando los llaman para hacer murales, etc.</br></br>Para los más académicos te recomiendo @liarteconarte en instagram, ella es muy top porque describe en voz alta.</br></br>Para los más comerciales te puedes fijar en instagram también hermosa, toca buscar referentes! Lo importante es comenzar a exponernos a este mundo.</br></br>Es MUY IMPORTANTE que cuando veas esto sepas que <u>la obra de ningún artista se parece a la obra de otro artista</u>. Tu obra es bellísima y tiene un mercado. No tienes que comprometerla y modificarla para <u>encajar</u> en un mercado. NO. Este es un ejercicio de <u>reconocer la diversidad en el arte</u>. ¡Te amo! y estoy orgulloso de tí siempre!', '<a target="_blank" href="https://www.instagram.com/liarteconarte/"><img src="./img/liarte.png" alt="Feed de Instagram" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades20 = [Actividad('20', 'Esta área', '0', '1', '#6699ff', 'white', 'Este espacio es tiempo que tu novio te va a dedicar hoy. No es tiempo que gastes tú.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan'),Actividad('20', 'Do Stuff Sostenibilidad', '0', '1', '#6699ff', 'white', 'Amor si quieres hoy nos reunimos una hora y hablamos del proyecto de una estrategia de sostenibilidad para AxonIA. Esto va a ser clave para tu perfil en ESG. Bendito sea Dios. ¿Coordinamos? en la tardecita después de la ADRES puedo pasar por tu barrio.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades5 = []
const actividades6 = [Actividad('6', 'Objetivos Sostenibilidad AxonIA', '0', '1', '#008081', 'white', 'Corazón, una empresa de inteligencia artificial tiene dos características. Primero es altamente escalable. Y segundo, consume muchos recursos incluyendo entre esos electricidad. Nosotros vamos a estar operando completamente en la nube, (en Google Cloud) quienes tienen sus propias políticas de sostenibilidad. Ya próximamente vamos a estar yendo a eventos en sostenibilidad. Además, tú vas a seguir estudiando el curso de ESG. Te propongo que comencemos a desarrollar ya la estrategia de sostenibilidad para AxonIA. Para poder empezar, te dejo unas fuentes para informarte sobre consideraciones clave en el contexto sostenibilidad - computación. Lo primero es identificar nuestros objetivos estratégicos. <u>¿A qué deberíamos querer apuntarle?</u>. Para esto vas a necesitar entender a profundidad todas nuestras actividades en AxonIA, incluyendo lo técnico. Yo tengo pendiente cuadrar una reunión con tu familia, ahí vamos a ver este tema. Revisa por una parte qué consideraciones hay en <u>Cloud</u> y en empresas <u>que usan cloud</u>. Como Netflix o Rappi. Fíjate en sus objetivos estratégicos. Familiarízate con otras empresas insignia que usan o crean tecnología, tal vez Bancolombia, o Bodytech. La pregunta clave es <u>¿Qué tipo de objetivos estratégicos es relevante considerar para AxonIA en ESG?</u>.', '<h3 style="color:white;">Algunas fuentes a revisar:</h3><a style="color:white;"target="_blank" href="https://youtu.be/N0SYCyS2xZA">Cloud Computing Explained en 2 minutos</a></br><a style="color:white;"target="_blank" href="https://youtu.be/d6lvY6H8Xrg">Green Cloud</a></br><a style="color:white;"target="_blank" href="https://youtu.be/q78KYBps-zY">IA y Sustainability</a></br><a style="color:white;"target="_blank" href="https://youtu.be/QmyL-2Ji0a4">Contexto Computing Sustainability</a></br><a style="color:white;"target="_blank" href="https://about.netflix.com/es/sustainability">Netflix Sustainability</a></br><a style="color:white;" target="_blank" href="https://about.rappi.com/our-impact">Rappi Sustainability</a></br><a style="color:white;"target="_blank" href="https://www.apple.com/environment/"><img src="./img/apple.png" alt="Captura de pantalla apple website" style="width:100%" /></a>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
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
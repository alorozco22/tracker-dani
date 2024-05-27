////////////////////////////////////////
// Aquí insertamos el código de áreas
////////////////////////////////////////


const horasLunes = [Area(1, "Dios", 2, "#003399"),Area(2, "Proyectos", 4, "#600080"),Area(3, "Aplicaciones", 2, "#008080")]
const horasMartes = [Area(1, "Dios", 2, "#003399"),Area(4, "Comisión", 4, "#600080"),Area(5, "Hacerse notar", 2, "#008080")]
const horasMiercoles = [Area(1, "Dios", 3, "#003399"),Area(2, "Proyectos", 2, "#600080"),Area(6, "Fortalecer contactos", 2, "#008080"),Area(8, "Proyectar estudios", 1, "#660033")]
const horasJueves = [Area(1, "Dios", 2, "#003399"),Area(4, "Comisión", 4, "#600080"),Area(5, "Hacerse notar", 2, "#008080")]
const horasViernes = [Area(1, "Dios", 2, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(7, "Cursos & workshops", 4, "#600080")]
const horasSabado = []
const horasDomingo = [Area(1, "Dios", 2, "#003399"),Area(9, "Estrategia con mi chico", 2, "#2a0080")]


////////////////////////////////////////

let areasDeHoy = horasLunes

/////////////////////////////////////////////////////////////
// Aquí insertamos el código de actividades
/////////////////////////////////////////////////////////////


const actividades1 = [Actividad('1', 'Congregarme', '0', '1', '#003399', 'white', 'Te dejo el enlace de las sedes y horarios de la i por si los quieres tener a la mano preciosa.', 'nan', 'Horarios y sedes IDMJI', 'https://idmji.org/direcciones/', 'nan', 'nan', 'nan', 'nan'),Actividad('1', 'Servicio', '0', '2', '#003399', 'white', 'Acuérdate de llenar el formulario corazón.', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]
const actividades2 = [Actividad('2', 'Pensar modelos de negocio', '0', '1', '#600080', 'white', 'Aquí va un texto descriptivo de lo que puede ser esta actividad. Puedes hacer tal cosa, o tal otra, etc. </br></br>En el link 1 tienes un link cool.', '<iframe  style="width:100%" src="https://www.youtube.com/embed/Nfc4l_jHqLU" title="Being An Introvert &amp; Building An Art Business - My Thoughts and Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>', 'Video para ver', 'https://www.artworkarchive.com/blog/a-breakdown-of-business-models-for-artists-plus-free-business-plan-worksheet', 'nan', 'nan', 'nan', 'nan'),Actividad('2', 'Otra cosa que hacer', '1', '2', '#600080', 'white', 'Puedes hacer cosas interesantes para contribuir a la parte que tienes que incluir en esta parte.', '<h2>Urgente</h2>', 'Museo del prado', 'https://www.museodelprado.es/en', 'nan', 'nan', 'nan', 'nan'),Actividad('2', 'Una actividad más', '0', '3', '#600080', 'white', 'Podemos armar cosas que haya que armar y ensamblarlas para que al final queden cosas bien ensambladas. Al final puedes citar una reunión para pedir retroalimentación sobre lo armado.', '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" alt="Noche estrellada de Van Gogh" />', 'Página de cursos', 'https://domestika.org/', 'nan', 'nan', 'nan', 'nan')]
const actividades3 = []
const actividades4 = []
const actividades5 = [Actividad('5', 'Pensar modelos de negocio', '0', '1', '#008080', 'white', 'Aquí va un texto descriptivo de lo que puede ser esta actividad. Puedes hacer tal cosa, o tal otra, etc. </br></br>En el link 1 tienes un link cool.', '<iframe  style="width:100%" src="https://www.youtube.com/embed/Nfc4l_jHqLU" title="Being An Introvert &amp; Building An Art Business - My Thoughts and Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>', 'Video para ver', 'https://www.artworkarchive.com/blog/a-breakdown-of-business-models-for-artists-plus-free-business-plan-worksheet', 'nan', 'nan', 'nan', 'nan'),Actividad('5', 'Otra cosa que hacer', '1', '2', '#008080', 'white', 'Puedes hacer cosas interesantes para contribuir a la parte que tienes que incluir en esta parte.', '<h2>Urgente</h2>', 'Museo del prado', 'https://www.museodelprado.es/en', 'nan', 'nan', 'nan', 'nan')]
const actividades6 = []
const actividades7 = [Actividad('7', 'Una actividad más', '0', '3', '#600080', 'white', 'Podemos armar cosas que haya que armar y ensamblarlas para que al final queden cosas bien ensambladas. Al final puedes citar una reunión para pedir retroalimentación sobre lo armado.', '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" alt="Noche estrellada de Van Gogh" />', 'Página de cursos', 'https://domestika.org/', 'nan', 'nan', 'nan', 'nan')]
const actividades8 = []
const actividades9 = [Actividad('9', 'Sesión estratégica', '0', '1', '#2a0080', 'white', '¡Hola corazón! Para recuperar nuestros hábitos por lo pronto recuerda ir utilizando tu aplicación. Y tratamos de volver a vernos cada 15 días. Te amoooooo!', '<iframe style="width:100%" src="https://www.youtube.com/embed/WpvU7sABZPI" title="[𝐖𝐎𝐑𝐊&amp;𝐉𝐀𝐙𝐙] 사무실에서 일하다가 몰래 리듬타기 좋은 펑키한 재즈비지엠😎💖 l Relaxing Jazz Piano Music for Office, Work, Study" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>', 'nan', 'nan', 'nan', 'nan', 'nan', 'nan')]

const diccionarioActividades = {
  1 : actividades1,
  2 : actividades2,
  3 : actividades3,
  4 : actividades4,
  5 : actividades5,
  6 : actividades6,
  7 : actividades7,
  8 : actividades8,
  9 : actividades9
}

/////////////////////////////////////////

let actividadesVisibles = diccionarioActividades[2]


////////// SIMULAR ALGÚN DÍA /////////
function simularDia(diaOriginal){
	diaOriginal = diaOriginal; // Aquí podemos simular un día si se desea
	return diaOriginal;
}
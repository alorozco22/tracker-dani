////////////////////////////////////////
// Aquí insertamos el código de áreas
////////////////////////////////////////
const horasLunes = [Area(1, "Dios", 2, "#003399"),Area(2, "Proyectos", 4, "#600080"),Area(3, "Aplicaciones", 2, "#008080")]
const horasMartes = [Area(1, "Dios", 2, "#003399"),Area(4, "Comisión", 4, "#600080"),Area(5, "Hacerse notar", 2, "#008080")]
const horasMiercoles = [Area(1, "Dios", 3, "#003399"),Area(2, "Proyectos", 2, "#600080"),Area(6, "Fortalecer contactos", 2, "#008080"),Area(8, "Proyectar estudios", 1, "#660033")]
const horasJueves = [Area(1, "Dios", 2, "#003399"),Area(4, "Comisión", 4, "#600080"),Area(5, "Hacerse notar", 2, "#008080")]
const horasViernes = [Area(1, "Dios", 2, "#003399"),Area(3, "Aplicaciones", 2, "#008080"),Area(7, "Cursos & workshops", 4, "#600080")]
const horasSabado = [Area(9, "Mostrarle a mi mona", 5, "#99ccff")]
const horasDomingo = []



////////////////////////////////////////

let areasDeHoy = horasLunes

/////////////////////////////////////////////////////////////
// Aquí insertamos el código de actividades
/////////////////////////////////////////////////////////////

const actividades1 = []
const actividades2 = [Actividad('2', 'Pensar modelos de negocio', '0', '1', '#660033', 'white', 'Aquí va un texto descriptivo de lo que puede ser esta actividad. Puedes hacer tal cosa, o tal otra, etc. </br></br>En el link 1 tienes un link cool.', '<iframe width="1349" height="480" src="https://www.youtube.com/embed/Nfc4l_jHqLU" title="Being An Introvert &amp; Building An Art Business - My Thoughts and Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>', 'Video para ver', 'https://www.artworkarchive.com/blog/a-breakdown-of-business-models-for-artists-plus-free-business-plan-worksheet', 'nan', 'nan', 'nan', 'nan'),Actividad('2', 'Otra cosa que hacer', '1', '2', '#660033', 'white', 'Puedes hacer cosas interesantes para contribuir a la parte que tienes que incluir en esta parte.', '<h2>Urgente</h2>', 'Museo del prado', 'https://www.museodelprado.es/en', 'nan', 'nan', 'nan', 'nan'),Actividad('2', 'Una actividad más', '0', '3', '#660033', 'white', 'Podemos armar cosas que haya que armar y ensamblarlas para que al final queden cosas bien ensambladas. Al final puedes citar una reunión para pedir retroalimentación sobre lo armado.', '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" alt="Noche estrellada de Van Gogh" />', 'Página de cursos', 'https://domestika.org/', 'nan', 'nan', 'nan', 'nan')]
const actividades3 = []
const actividades4 = []
const actividades5 = [Actividad('5', 'Pensar modelos de negocio', '0', '1', '#660033', 'white', 'Aquí va un texto descriptivo de lo que puede ser esta actividad. Puedes hacer tal cosa, o tal otra, etc. </br></br>En el link 1 tienes un link cool.', '<iframe width="1349" height="480" src="https://www.youtube.com/embed/Nfc4l_jHqLU" title="Being An Introvert &amp; Building An Art Business - My Thoughts and Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>', 'Video para ver', 'https://www.artworkarchive.com/blog/a-breakdown-of-business-models-for-artists-plus-free-business-plan-worksheet', 'nan', 'nan', 'nan', 'nan'),Actividad('5', 'Otra cosa que hacer', '1', '2', '#660033', 'white', 'Puedes hacer cosas interesantes para contribuir a la parte que tienes que incluir en esta parte.', '<h2>Urgente</h2>', 'Museo del prado', 'https://www.museodelprado.es/en', 'nan', 'nan', 'nan', 'nan')]
const actividades6 = []
const actividades7 = [Actividad('7', 'Una actividad más', '0', '3', '#660033', 'white', 'Podemos armar cosas que haya que armar y ensamblarlas para que al final queden cosas bien ensambladas. Al final puedes citar una reunión para pedir retroalimentación sobre lo armado.', '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" alt="Noche estrellada de Van Gogh" />', 'Página de cursos', 'https://domestika.org/', 'nan', 'nan', 'nan', 'nan')]
const actividades8 = []

const diccionarioActividades = {
  1 : actividades1,
  2 : actividades2,
  3 : actividades3,
  4 : actividades4,
  5 : actividades5,
  6 : actividades6,
  7 : actividades7,
  8 : actividades8
}

/////////////////////////////////////////

let actividadesVisibles = diccionarioActividades[2]


////////// SIMULAR ALGÚN DÍA /////////
function simularDia(diaOriginal){
	diaOriginal = 4; // Aquí podemos simular un día si se desea
	return diaOriginal;
}
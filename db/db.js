////////////////////////////////////////
// Vamos a simular la base de datos
////////////////////////////////////////

// Clase que representa un área
// pId: entero único
// pTitulo: que va en el h2 del área
// pHoras: entero
// pColor: en codificación hex
function Area(pId, pTitulo, pHoras, pColor){
	let area = {
		id:pId,
		titulo:pTitulo,
		horas:pHoras,
		color:pColor
	}
	return area;
}

function getArea(pId){
	console.log("getArea:");
	console.log(pId);
	for (let i = 0; i<areasDeHoy.length; i++){
		if(areasDeHoy[i].id==pId){
			return areasDeHoy[i];
		}
	}
	return "Área no se encontró"
}

// dia es entero de 1 (lunes) a 7 (domingo)
function setListaAreasHoy(dia){
	if (dia == 1){
		areasDeHoy = horasLunes
	} else if (dia == 2){
		areasDeHoy = horasMartes
	} else if (dia == 3){
		areasDeHoy = horasMiercoles
	} else if (dia == 4){
		areasDeHoy = horasJueves
	} else if (dia == 5){
		areasDeHoy = horasViernes
	} else if (dia == 6){
		areasDeHoy = horasSabado
	} else if (dia == 0){
		areasDeHoy = horasDomingo
	}
	
}


function Actividad(pId, pTitulo, pStatus, pOrdenPrioridad, pColor, pColorTexto, pDescripcion, pHTML, pRecurso1, pLink1, pRecurso2, pLink2, pRecurso3, pLink3){
	let actividad = {
		id:pId,
		titulo:pTitulo,
		status:pStatus,
		ordenPrioridad:pOrdenPrioridad,
		color:pColor,
		colorTexto:pColorTexto,
		descripcion:pDescripcion,
		html:pHTML,
		recursos:[pRecurso1, pRecurso2, pRecurso3],
		links:[pLink1, pLink2, pLink3]
	}
	return actividad;
}

function getActividad(pIdActividad){
	console.log("getActividad:");
	console.log(pIdActividad);
}


function setActividadesVisibles(idArea){
	console.log('setActividadesVisibles');
	console.log(idArea);
	console.log(diccionarioActividades[idArea]);
	actividadesVisibles = diccionarioActividades[idArea];
	
}

function butHoy(){
	document.getElementById("hoy").style.display = 'block';
	document.getElementById("actividad").style.display = 'none';
	document.getElementById("acumulado").style.display = 'none';
	document.getElementById("tracker").style.display = 'none';
	document.getElementById("cerrar").style.display = 'none';

	let dia = actualizarHora();
	setListaAreasHoy(dia);

	agregarCards(areasDeHoy);
	
}

function butAcumulado(){

	
	document.getElementById("hoy").style.display = 'none';
	document.getElementById("actividad").style.display = 'none';
	document.getElementById("acumulado").style.display = 'block';
	document.getElementById("tracker").style.display = 'none';
	document.getElementById("cerrar").style.display = 'none';
}

function butCerrar(){
	document.getElementById("hoy").style.display = 'none';
	document.getElementById("actividad").style.display = 'none';
	document.getElementById("acumulado").style.display = 'none';
	document.getElementById("tracker").style.display = 'none';
	document.getElementById("cerrar").style.display = 'block';
}

function butTracker(){
	document.getElementById("hoy").style.display = 'none';
	document.getElementById("actividad").style.display = 'none';
	document.getElementById("acumulado").style.display = 'none';
	document.getElementById("tracker").style.display = 'block';
	document.getElementById("cerrar").style.display = 'none';
}

let ultimaActividad = undefined;

function atras(){
	mostrarActividad(ultimaActividad);
}

function mostrarActividad(id){
	ultimaActividad = id;
	document.getElementById("hoy").style.display = 'none';
	document.getElementById("actividad").style.display = 'block';
	document.getElementById("acumulado").style.display = 'none';
	document.getElementById("tracker").style.display = 'none';
	document.getElementById("cerrar").style.display = 'none';
	inicializarVistaActividad(id);
	let ventanas=document.getElementsByClassName("cards-container")
	for (let i = 0; i < ventanas.length; i++) {
	  ventanas[i].scrollTo(0, 0);
	}
	
}


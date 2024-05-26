function abrirActividad(card) {
	let id = card.querySelector("h3").innerHTML
	//alert('Ingresamos a la actividad '+id);
	mostrarActividad(id);
}

function agregarCards(areas){

	const cardsContainer = document.querySelector(".cards-container");
	const cardTemplate = document.querySelector(".card");

	// Limpiamos la lista previa
	cardsContainer.innerHTML = "";

	//let areas = setListaAreasHoy(2);

	for (let i = 0; i < areas.length; i++){
		console.log(areas);
		const newCard = cardTemplate.cloneNode(true);
		newCard.querySelector("h2").innerHTML = areas[i].titulo;
		newCard.querySelector("span").innerHTML = areas[i].horas;
		newCard.querySelector("h3").innerHTML = areas[i].id;
		newCard.style['background-color'] = areas[i].color;
		newCard.style.display = "block";
		cardsContainer.appendChild(newCard);
	}
}

function actualizarHora(){
	const d = new Date();
	let day = d.getDay();
	let dayOfTheMonth = d.getDate();
	let h = d.getHours();
	let m = d.getMinutes();
	document.getElementById("diaSemana").innerHTML = dia(day);
	document.getElementById("numeroDia").innerHTML = dayOfTheMonth;
	document.getElementById("hora").innerHTML = formatoHora(h,m);
	return simularDia(day);
}


function dia(num){
	if (num == 1){return "Lunes";}
	else if (num == 2){return "Martes";}
	else if (num == 3){return "Miércoles";}
	else if (num == 4){return "Jueves";}
	else if (num == 5){return "Viernes";}
	else if (num == 6){return "Sábado";}
	else if (num == 0){return "Domingo";}
}

// Retorna el texto procesado para la hora
function formatoHora(h, m){
	let meridiano = "a.m.";
	if (h > 12){
		// Convención de formato de hora
		meridiano = "p.m.";
		h = h-12;
	}
	return agregarCero(h)+":"+agregarCero(m)+" "+meridiano;
}

// Si la hora es 3, retrona 03
function agregarCero(i){
	if (i<10){i="0"+String(i);}
	return String(i);
}
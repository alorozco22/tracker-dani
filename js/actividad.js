let areaActual = undefined;

function inicializarVistaActividad(id){
	areaActual = getArea(id);
	document.getElementById("titulo-area").innerHTML = areaActual.titulo;
	setActividadesVisibles(id);
	agregarCardsActividad(actividadesVisibles);

}

function agregarCardsActividad(actividades){
	const cardsContainer = document.querySelector(".cards-container-act");
	const cardTemplate = document.querySelector(".card-act");

	// Limpiamos la lista previa
	cardsContainer.innerHTML = "";
	initTemplateCardActividad();

	for (let i = 0; i<actividadesVisibles.length; i++){
		console.log(actividades);
		const newCard = cardTemplate.cloneNode(true);
		if (actividades[i].status == 0){
			newCard.querySelector(".emoji").innerHTML ="🏊";
		} else {
			newCard.querySelector(".emoji").innerHTML ="🏆";
		}
		newCard.querySelector(".titulo-actividad").innerHTML = actividades[i].titulo;
		newCard.querySelector(".texto-descripcion").innerHTML = actividades[i].descripcion;
		newCard.querySelector(".rec1").innerHTML = '<a target="_blank" href="'.concat(actividades[i].links[0].concat('">'.concat(actividades[i].recursos[0].concat('</a>'))));
		newCard.querySelector(".rec2").innerHTML = '<a target="_blank" href="'.concat(actividades[i].links[1].concat('">'.concat(actividades[i].recursos[1].concat('</a>'))));
		newCard.querySelector(".rec3").innerHTML = '<a target="_blank" href="'.concat(actividades[i].links[2].concat('">'.concat(actividades[i].recursos[2].concat('</a>'))));

		newCard.querySelector(".componente-libre").innerHTML = actividades[i].html;

		newCard.style['background-color'] = actividades[i].color;
		newCard.style['color'] = actividades[i].colorTexto;

		newCard.style.display = "block";
		cardsContainer.appendChild(newCard);
	}
}

function initTemplateCardActividad(){
	document.querySelector('.cards-container-act').innerHTML = '<!-- PLANTILLA DE TARJETA DE ACTIVIDAD --><div style="display:none;" class="card card-act"><h2><span class="emoji">🏊🏻‍♀️</span></h2><h2><span class="titulo-actividad">Título de la actividad largo</span></h2><div class="descripcion-actividad"><p class="texto-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dignissim nulla iaculis pellentesque. Duis in massa fringilla, pharetra lacus sodales, vestibulum felis. Etiam volutpat accumsan diam, ut posuere nisi efficitur vel. Mauris sollicitudin massa at augue consectetur, sit amet fringilla orci consequat. Ut interdum.</p></div><div class="recursos-card"><ul><li class="rec1"><a target="_blank" href="#">Recurso 1</a></li><li class="rec2"><a target="_blank" href="#">Recurso 2</a></li><li class="rec3"><a target="_blank" href="#">Recurso 3</a></li></ul></div><div class="componente-libre"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Mona Lisa" style="width: 100%;"></div><div class="footer-actividad"><button onclick="butHoy()" id="butHoy">Completo</button></div></div><!-- FIN DE PLANTILLA DE TARJETA DE ACTIVIDAD -->';
}
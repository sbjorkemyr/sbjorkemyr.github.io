dragElement(document.getElementById('bild1'));
dragElement(document.getElementById('bild2'));
dragElement(document.getElementById('bild3'));
dragElement(document.getElementById('bild4'));
dragElement(document.getElementById('bild5'));
dragElement(document.getElementById('bild6'));
dragElement(document.getElementById('bild7'));
dragElement(document.getElementById('bild8'));
dragElement(document.getElementById('bild9'));
dragElement(document.getElementById('bild10'));
dragElement(document.getElementById('bild11'));
dragElement(document.getElementById('bild12'));

function dragElement(containerElement) {
	
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	containerElement.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		
		pos3 = e.clientX;
		pos4 = e.clientY;
		
		document.onpointermove = elementDrag;
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		console.log(pos1, pos2, pos3, pos4);
		
		containerElement.style.top = containerElement.offsetTop - pos2 + 'px';
		containerElement.style.left = containerElement.offsetLeft - pos1 + 'px';
	}

	function stopElementDrag() {
		
		document.onpointerup = null;
		document.onpointermove = null;
	}
}
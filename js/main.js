const clipboard1 = new Clipboard('.copy-1');
const clipboard2 = new Clipboard('.copy-2');
const favColor = localStorage.getItem('jscolor');

clipboard1.on('success', (e) => {
	$('.alert-copy').show().fadeOut('slow');
	e.clearSelection();
});

clipboard2.on('success', (e) => {
	$('.alert-copy').show().fadeOut('slow');
	e.clearSelection();
});

const update = (jscolor) => {
	$('#body').css('background-color', `#${jscolor}`);
};

const fav = (inputId) => {
	const hex = document.getElementById(inputId).value
	localStorage.setItem('jscolor', hex);
	$('.alert-saved').show().fadeOut('slow');
	$('#fav-color').text(hex);
};

$(document).ready(() => {
	if (favColor) {
		$('#fav-color').text(favColor);
	} else {
		$('#fav-color').hide();
	}
});
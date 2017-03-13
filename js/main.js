$(document).ready(function () {
	
	$("input").change(function(this.jscolor) {
		document.getElementById('body').style.backgroundColor = '#' + jscolor
	});
	
	var clipboard = new Clipboard('.copy-to-clipboard');

	clipboard.on('success', function(e) {
		$('.x').show().fadeOut('slow');
		e.clearSelection();
	});
});
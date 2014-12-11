
$(document).ready(function() {
	$('#switcher-default').addClass('selected');
	
	$('#switcher button').on('click', function() {
		var bodyClass = this.id.split('-')[0];
		
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
	/*
	$('#switcher-narrow').on('click', function() {
		$('body').addClass('narrow');
	});
	
	$('#switcher-large').on('click', function() {
		$('body').addClass('large');
	});
	*/
});

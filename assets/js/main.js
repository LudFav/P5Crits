$(document).ready(function() {
	var url_param = $(location).attr('href').split("/");
	var param = (url_param[4]).split("&")
	var whatIwant = (param[0]);
	if(whatIwant === 'sommaire'){
		let accueil = '<a href="accueil" class="fas fa-angle-left" id="accueil"></a><span class="label"></span></a>';
		$('#retourSommaire').replaceWith($(accueil));
	}
});




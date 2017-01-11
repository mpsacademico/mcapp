$(document).ready(function(){	
	//iniciarMenuInicial();
});
function iniciarMenuInicial(){
	$.ajax({
		url: "data/data.json",
		method: "GET",
		dataType: "json"
	}).done(function(rs){
		var secoes = rs.secoes;
		for (i in secoes) {			
			$("#secoes #menu").append('<li class="table-view-cell table-view-divider">'+secoes[i].nome+'</li>');			
			var itens = secoes[i].itens;
			for (j in itens) {
				$("#secoes #menu").append('<li class="table-view-cell media"><a href="'+itens[j].id+'.html" class="navigate-right"><img class="media-object pull-left img-24" src="data/img/'+itens[j].imagem+'"><div class="media-body">'+itens[j].nome+'</div></a></li>');
			}   
		}
	});
}
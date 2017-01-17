var itens = {};
$(document).ready(function(){	
});
$("*").click(function() {  
 	console.log($(this));
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
			itens = secoes[i].itens;
			for (j in itens) {
				$("#secoes #menu").append('<li class="table-view-cell media"><a class="imv" href="#playlist_'+itens[j].id+'" data-id="'+itens[j].id+'" class="navigate-right"><img class="media-object pull-left img-24" src="data/img/'+itens[j].imagem+'"><div class="media-body">'+itens[j].nome+'</div></a></li>');
				$("#playlists").append('<div id="playlist_'+itens[j].id+'" class="playlist modal"><header class="bar bar-nav"><a class="icon icon-close pull-right" href="#playlist_'+itens[j].id+'"></a><h1 class="title">'+itens[j].nome+'</h1></header><div class="content"><div class="content-padded"><a class="zm" >saaaa</a></div></div></div>');
			}   
		}
	});
}

var itens = {};
$(document).ready(function(){	
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
				$("#playlists").append('<div id="playlist_'+itens[j].id+'" class="playlist modal"><header class="bar bar-nav"><a class="icon icon-close pull-right" href="#playlist_'+itens[j].id+'"></a><h1 class="title">'+itens[j].nome+'</h1></header><div class="content"><div class="content-padded"><ul id="videos" class="table-view"></ul></div></div></div>');
				$.ajax({
					url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='+itens[j].id+'&key=AIzaSyB09Y_xOjs5QFDnrbAs7tj9qzFbVAQUN04',
					method: 'GET',
					dataType: 'json'
				}).done(function(rs){										
					var items = rs.items;					
					for (x in items) {	
						var s = items[x].snippet;
						var ri = s.resourceId;
						var t = s.thumbnails;
					    $("#videos").append('<li class="table-view-cell media"><a class="navigate-right" href="https://www.youtube.com/watch?v="'+ri.videoId+'"><img class="media-object pull-left icon img-42" src="'+t.default.url+'"><div class="media-body">'+s.title+'</div></a></li>');
					}
				});
			}   
		}
	});
}

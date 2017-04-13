$(document).ready( function() {
	populateMainList("Restaurants");
});
//TO DO: get info via ajax call with callback populateMainList(listType, JSONdata)

function populateMainList(strListType){
	if (typeof(strListType)==='undefined'){
		strListType = 'ERROR';
	}
	
	$('#content').empty();
	$('#content').append('<h1>'+strListType+'</h1>')
	
	console.log(company.length);
	for(var i=0; i<company.length; i++){
		$('#content').append('<table><tr><th>'+ company[i].title +'</th>' +
			'<th rowspan="5" class="smallColumn"><img src="'+ company[i].image +'" alt="company logo"></td></tr>' +
			'<tr><td>'+ company[i].description +'</td></tr>' +
			'<tr><td>'+ company[i].address +'</td></tr>' +
			'<tr><td>'+ company[i].phone +'</td></tr>' +
			'<tr><td>'+ company[i].website +'</td></tr></table>');
			console.log("Company " +i);
	}
}
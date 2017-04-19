"use strict"
$(document).ready( function() {
	contentController("Restaurants");
	//loadEditor(company[0]);
	attachClickListeners()
});


function loadCompanyList(dataType, argument){	
	//TO DO: get info via Ajax call with callback populateMainList(listType, JSONdata)
	$('#content').empty();
	$('#content').append('<h1>'+dataType+'</h1>');
	
	for(var i=0; i<argument.length; i++){
		var website = "";
		if(argument[i].website ==""){
			website= 'No Website';
		}
		else{
			website = '<a href="'+ argument[i].website +'" target="_blank">'+ argument[i].website +'</a>';
		}
		$('#content').append('<table class="company" id="'+argument[i].title+'"><tr><th>'+ argument[i].title +'</th>' +
			'<th rowspan="5" class="smallColumn"><img src="'+ argument[i].image +'" alt="company logo"></td></tr>' +
			'<tr><td>'+ argument[i].description +'</td></tr>' +
			'<tr><td>'+ argument[i].addressStreet + ", " + argument[i].addressPOBox+ " " + argument[i].addressCity + ", " + argument[i].addressState + " " + argument[i].addressZip +'</td></tr>' +
			'<tr><td>'+ argument[i].phone +'</td></tr>' +
			'<tr><td>'+website+'</td></tr></table>');
	}	
}

function loadEditorPage(argument){
	$('#content').html('<h1>Company Editing Panel</h1>');
			$('#content').append('<table><tr><td>Company Name</td><td><input type="text" name = companyName value="'+ argument.title +'"></td>' +
			'<td rowspan="5" class="smallColumn"><img src="'+ argument.image +'" alt="company logo"></td></tr>' +
			'<tr><td>Description</td><td><textarea rows="4" cols="50" name = description>'+ argument.description +'</textarea></td></tr>' +
			'<tr><td>Street</td><td><input type="text" name = addressStreet value="'+ argument.addressStreet +'"></td></tr>' +
			'<tr><td>PO Box</td><td><input type="text" name = addressStreet value="'+ argument.addressPOBox +'"></td></tr>' +
			'<tr><td>City</td><td><input type="text" name = addressStreet value="'+ argument.addressCity +'"></td></tr>' +
			'<tr><td>State</td><td><input type="text" name = addressStreet value="'+ argument.addressState +'"></td></tr>' +
			'<tr><td>Zip</td><td><input type="text" name = addressStreet value="'+ argument.addressZip +'"></td></tr>' +
			'<tr><td>Phone Number</td><td><input type="text" name = phone value="'+ argument.phone +'"></td></tr>' +
			'<tr><td>Website</td><td><input type="url" size="50"name = website value="'+ argument.website +'"></td></tr></table>');
}
function loadLogInPage(){
	//TO DO: Create Log In Page
}
function loadSignUpPage(){
	//TO DO: Create Sign Up Page
}

function loadCompanyPage(argument){
	var website;
	if(argument.website ==""){
			website= 'No Website';
		}
		else{
			website = '<a href="'+ argument.website +'" target="_blank">'+ argument.website +'</a>';
		}
		$('#content').empty();
		$('#content').append('<h1>'+argument.title+'</h1>');
		$('#content').append('<h4>'+argument.description+'</h4>');
		
			
	//TO DO: Create Restaurant Template
	//TO DO: Create Services Template
}
function loadMulitManagementPage(){
	//TO DO: Create MultiManagement Page - Reuse Company List
}

function contentController(argument){
	//TO DO: make back button connect to last view
	if (typeof(argument)==='undefined'){
		$('#content').html('<h1>NAVAGATION ERROR</h1>');;
	}
	else if (argument == "Log In"){
		$('.login').remove();
		$('#leftBar ul').append('<li class="logout"><a class="navigate">Edit Page</a></li>'+
			'<li class="logout"><a class="navigate">Log Out</a></li>');
		//TO DO: Navigate to Log In Page
	}
	else if (argument == "Log Out"){
		$('.logout').remove();
		$('#leftBar ul').append('<li class="login"><a class="navigate">Log In</a></li>');
	}
	else if (argument == "Edit Page"){
		loadEditorPage(company[0]);
	}
	else if ((argument == "Restaurants") || (argument =="Services")){
		getCompanyList(argument);
	}
	attachClickListeners()
}
//Click Listeners -----------------------------------
function attachClickListeners(){
	$('.navigate').off();
	$('.company').off();
	$('.navigate').click(function(){contentController($(this).text()); return false; });
	$('.company').click(function(){getCompanyPage($(this).attr('id')); return false; });
}
//AJAX CALLS --------------------------------------

function getCompanyPage(argument){
/* $.ajax({
		type: "GET",
		url: 'phpScript.php',
		data: JSON.stringify({passedFunction:'getCompany', argument: argument}),
		dataType: 'JSONP',
		sucess: function(data){loadCompanyPage(data)},
		error: contentController(),
	}); 
*/
	//Temp Solution
	for(var i=0; i<company.length; i++){
		if (company[i].title == argument){
			loadCompanyPage(company[i]);
			break;
		}
	}
}
function getCompanyList(argument){

/* $.ajax({
		type: "GET",
		url: 'phpScript.php',
		data: JSON.stringify({passedFunction:'getCompanyList', argument: argument}),
		dataType: 'JSONP',
		sucess: function(data){loadCompanyList(argument data)},
		error: contentController(),
	}); 
*/
	var output = [];
	for(var i=0; i<company.length; i++){
		if (company[i].type+'s' == argument){
			output.push(company[i]);
		}
	}
	//output = company;
	loadCompanyList(argument, output);
}

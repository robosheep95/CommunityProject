"use strict"
$(document).ready( function() {
	contentController("Restaurants");
	//loadEditor(company[0]);
	attachNavListners()
});


function loadCompanyList(argument){	
	//TO DO: get info via Ajax call with callback populateMainList(listType, JSONdata)
	var argument = argument[0];
	$('#content').empty();
	$('#content').append('<h1>'+argument+'</h1>');
	
	for(var i=0; i<company.length; i++){
		var website = "";
		if(company[i].website ==""){
			website= 'No Website';
		}
		else{
		website = '<a href="'+ company[i].website +'" target="_blank">'+ company[i].website +'</a>';
		}
		console.log(website);
		$('#content').append('<table><tr><th>'+ company[i].title +'</th>' +
			'<th rowspan="5" class="smallColumn"><img src="'+ company[i].image +'" alt="company logo"></td></tr>' +
			'<tr><td>'+ company[i].description +'</td></tr>' +
			'<tr><td>'+ company[i].addressStreet + ", " + company[i].addressPOBox+ " " + company[i].addressCity + ", " + company[i].addressState + " " + company[i].addressZip +'</td></tr>' +
			'<tr><td>'+ company[i].phone +'</td></tr>' +
			'<tr><td>'+website+'</td></tr></table>');
	}	
}

function loadEditorPage(company){
	$('#content').empty();
	$('#content').append('<h1>Company Editing Panel</h1>');
			$('#content').append('<table><tr><td>Company Name</td><td><input type="text" name = companyName value="'+ company.title +'"></td>' +
			'<td rowspan="5" class="smallColumn"><img src="'+ company.image +'" alt="company logo"></td></tr>' +
			'<tr><td>Description</td><td><textarea rows="4" cols="50" name = description>'+ company.description +'</textarea></td></tr>' +
			'<tr><td>Street</td><td><input type="text" name = addressStreet value="'+ company.addressStreet +'"></td></tr>' +
			'<tr><td>PO Box</td><td><input type="text" name = addressStreet value="'+ company.addressPOBox +'"></td></tr>' +
			'<tr><td>City</td><td><input type="text" name = addressStreet value="'+ company.addressCity +'"></td></tr>' +
			'<tr><td>State</td><td><input type="text" name = addressStreet value="'+ company.addressState +'"></td></tr>' +
			'<tr><td>Zip</td><td><input type="text" name = addressStreet value="'+ company.addressZip +'"></td></tr>' +
			'<tr><td>Phone Number</td><td><input type="text" name = phone value="'+ company.phone +'"></td></tr>' +
			'<tr><td>Website</td><td><input type="url" size="50"name = website value="'+ company.website +'"></td></tr></table>');
}
function loadLogInPage(){
	//TO DO: Create Log In Page
}
function loadSignUpPage(){
	//TO DO: Create Sign Up Page
}

function loadCompanyPage(){
	//TO DO: Create Restaurant Template
	//TO DO: Create Services Template
}
function loadMulitManagementPage(){
	//TO DO: Create MultiManagement Page - Reuse Company List
}

function contentController(argument){
	//TO DO: make back button connect to last view

	if (typeof(argument)==='undefined'){
		$('#content').empty();
		$('#content').append('<h1>NAVAGATION ERROR</h1>');;
	}
	else if (argument == "Log In"){
		$('.login').remove();
		$('#leftBar ul').append('<li class="logout"><a class="navigate">Edit Page</a></li>'+
			'<li class="logout"><a class="navigate">Log Out</a></li>');
		attachNavListners()
		//TO DO: Navigate to Log In Page
	}
	else if (argument == "Log Out"){
		$('.logout').remove();
		$('#leftBar ul').append('<li class="login"><a class="navigate">Log In</a></li>');
		attachNavListners()
	}
	else if (argument == "Edit Page"){
		loadEditorPage(company[0]);
	}
	else if (argument == ("Restaurants" || "Services")){
		loadCompanyList(arguments);
	}
}
//Click Listeners -----------------------------------
function attachNavListners(){
	$('.navigate').click(function(){contentController($(this).text()); return false; });
}

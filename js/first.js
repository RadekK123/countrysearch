
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var input = $('#country-name');


$('#search').click(searchCountries);

function searchCountries () {
	var countryName = $('#country-name').val();
	
	if (countryName.length < 3){
		
		var errorInfo = function () {
			$('<p>Wpisz min. 3 znaki</p>').appendTo('.error').css({
				animation : 'bounce .5s',
			});
		};

		var errorInnfoDelete = function () {
			$('.error p').css({
				animation : 'flash .4s',
			});
			setTimeout(function deleteElem (){
				$('.error p').remove();
			},400);
		};
		
		setTimeout(errorInfo, 1000);
		setTimeout(errorInnfoDelete, 5000);
	}

	if(countryName.length >= 3) {
	$.ajax ({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList,
	});
	}
}

function showCountriesList (resp) {
	
	countriesList.empty();
	
	if(resp.length > 1) {
		resp.forEach(function (item) {
	
			$('<li>').text(item.name).appendTo(countriesList).css({'width' : '100%',
						'display' : 'inline-block',
						'text-align' : 'center',
						'margin-top' : '15px',
						'margin-left' : '0',
						'margin-right' : '0',
						'font-size' : '20px',
						'color': 'white',
						'font-weight' : '700',
						'margin-bottom' : '20px',
						'border-bottom' : '1px solid rgba(0,0,0, 0)',
						'cursor' : 'pointer',

						}).click(function (){

				countriesList.empty();
				$('<li>').text(item.name).appendTo(countriesList);
				$('<li>').text('Capital').appendTo(countriesList);
				$('<li>').text(item.capital).appendTo(countriesList);
				$('<li>').text('Population').appendTo(countriesList);
				$('<li>').text(item.population).appendTo(countriesList);
				$('<li>').text('Area').appendTo(countriesList);
				$('<li>').text(item.area).appendTo(countriesList);
				$('<li>').text('Region').appendTo(countriesList);
				$('<li>').text(item.region).appendTo(countriesList);
				$('<li>').text('Subregion').appendTo(countriesList);
				$('<li>').text(item.subregion).appendTo(countriesList);
				$('<li>').text('AltSpellings').appendTo(countriesList);
				$('<li>').text(item.altSpellings[2]).appendTo(countriesList);
				$('<li>').text('Nativename').appendTo(countriesList);
				$('<li>').text(item.nativeName).appendTo(countriesList);
				$('<li>').text('TopLevelDomain').appendTo(countriesList);
				$('<li>').text(item.topLevelDomain).appendTo(countriesList);
				$('<li>').text('CallingCodes').appendTo(countriesList);
				$('<li>').text(item.callingCodes[0]).appendTo(countriesList);
			});

		});
		
	} else {
		countriesList.empty();
		resp = resp[0];

		$('<li>').text(resp.name).appendTo(countriesList);
		$('<li>').text('Capital').appendTo(countriesList);
		$('<li>').text(resp.capital).appendTo(countriesList);
		$('<li>').text('Population').appendTo(countriesList);
		$('<li>').text(resp.population).appendTo(countriesList);
		$('<li>').text('Area').appendTo(countriesList);
		$('<li>').text(resp.area).appendTo(countriesList);
		$('<li>').text('Region').appendTo(countriesList);
		$('<li>').text(resp.region).appendTo(countriesList);
		$('<li>').text('Subregion').appendTo(countriesList);
		$('<li>').text(resp.subregion).appendTo(countriesList);
		$('<li>').text('AltSpellings').appendTo(countriesList);
		$('<li>').text(resp.altSpellings[2]).appendTo(countriesList);
		$('<li>').text('Nativename').appendTo(countriesList);
		$('<li>').text(resp.nativeName).appendTo(countriesList);
		$('<li>').text('TopLevelDomain').appendTo(countriesList);
		$('<li>').text(resp.topLevelDomain).appendTo(countriesList);
		$('<li>').text('CallingCodes').appendTo(countriesList);
		$('<li>').text(resp.callingCodes[0]).appendTo(countriesList);
	}
}
/*
	statusCode: {
			200: function() {
				showCountriesList()
			},
			404: function() {
				showErrorStatus()
		}
	});
function showErrorStatus() {
	countriesList.empty();

		$('<li>').text('Nie ma takiego kraju, wybierz inny').appendTo(countriesList);
	}
*/
/*
 resp.forEach(function (elem) {
  for (key in elem) {
   if (displayConfig.indexOf(key) > - 1) {
    var newKey = key.substr(0,1).toUpperCase() + key.substr(1);
    $('<li>').text(elem[key]).appendTo(countriesList);
    $('<li>').text(newKey).appendTo(countriesList);
   }
  }
*/
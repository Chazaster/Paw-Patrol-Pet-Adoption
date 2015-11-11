var petFinder = {};

(function () {

	function toScreen(data){
		console.log(data);
		$.each(data.petfinder.pets.pet, function(index, photo){
			photo = "<img src=\""+ photo.media.photos.photo[3].$t + "\" />";
			$('#photos').append(photo);
		});
	}
	
	function search(){
		var url = "http://api.petfinder.com/pet.find?format=json&key=326aa49dbfec3060d0ebec0d9ff3359b" + location + animal + breed + sex + age + "&callback=?";
		$.getJSON(url, toScreen);
	}
	
	petFinder.search = search;
	var location = '&location=94928';
	var animal = '&animal=dog';
	var breed = '&breed=German Shepherd Dog';
	var sex = '&sex=M';
	var age = '&age=Baby';
})();

petFinder.search();

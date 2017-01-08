(function() {

	var submitbutton = document.getElementById('submit');

	submitbutton.addEventListener("click", function() {

		var client = new githubClient(inputBox.value);

		var repos = client.loadJson();

		var favourites = client.getRepos(repos);

		console.log(favourites);
	});
})();

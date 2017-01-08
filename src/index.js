(function() {

	var submitbutton = document.getElementById('submit');

	// Travis running index.js before initpages so submit button not being found
	if(submitbutton != null) {
		submitbutton.addEventListener("click", function() {

			var client = new githubClient(inputBox.value);

			var repos = client.loadJson();

			var favourites = client.getRepos(repos);

			console.log(favourites);
		});
	}
})();

(function() {

	var submitbutton = document.getElementById('submit');
	var adder = new ResultAdder();

	// Travis running index.js before initpages so submit button not being found
	if(submitbutton != null) {
		submitbutton.addEventListener("click", function() {

			var userName = inputBox.value;

			var client = new githubClient(userName);

			var repos = client.loadJson();

			var favourites = client.getRepos(repos);

			adder.addBox(userName, favourites);

			console.log(favourites);
		});
	}
})();

function githubClient(userName) {
  this.userName = userName;

  // var repos = this.loadJson();
  //
  // var favourites = this.getRepos(repos);

};

githubClient.prototype.loadJson = function () {
  var githubApiRootUrl = 'https://api.github.com/';
  var url = githubApiRootUrl + 'users/' + this.userName + '/repos';
  var xmlhttp;
  var res;
  if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
          res = xmlhttp.responseText;
      } else if(xmlhttp.status == 404) {
        console.log("Error", xmlhttp.statusText);
      }
  }
  xmlhttp.open("GET", url, false);
  xmlhttp.send();

  return JSON.parse(res);
};

githubClient.prototype.getRepos = function (repos) {
  var languageMap = {};
  var max = 0;
  // console.log(resJson);
  Array.from(repos).forEach(function(repo) {
    var language = repo.language;
    languageMap[language] = languageMap[language] || 0;
    languageMap[language]++;
    max = Math.max(max, languageMap[language]);
  });

  var favourites = [];

  for(var l in languageMap) {
    if (languageMap.hasOwnProperty(l) &&
        languageMap[l] === max) {
        favourites.push(l);
    }
  }
  return favourites;
};

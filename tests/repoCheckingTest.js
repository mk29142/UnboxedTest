describe('githubClient', function() {

  var gbc;

  beforeEach(function() {
      gbc = new githubClient();
  });

  describe('using gbc to extract most popular repos', function() {

    var repos = [{language: "javascript"}, {language: "javascript"},
                {language: "java"}, {language: "python"}];
                
    it("should give javascript", function() {
      expect(gbc.getRepos(JSON.parse(repos))).toEqual("javascript");
    });
  });

});

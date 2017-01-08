describe('githubClient', function() {

  var gbc;

  beforeEach(function() {
      gbc = new githubClient();
  });

  describe('using gbc to extract most popular repos', function() {

    var repos = [{language: "javascript"}, {language: "javascript"},
                {language: "java"}, {language: "python"}];

    it("should give javascript", function() {
      expect(gbc.getRepos(repos)).toEqual(['javascript']);
    });
  });

  var repos2 = [{language: 'javascript'},{language: 'javascript'},
              {language: 'java'},{language: 'java'},{language: 'python'}];

  it("should give array containg javascript and java", function() {
      expect(gbc.getRepos(repos2)).toEqual(['javascript', 'java']);
  });
});

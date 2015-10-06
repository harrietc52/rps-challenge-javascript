describe("RPS", function() {

  var rps;

  beforeEach(function(){
    rps = new RPS;
  });

  describe('computer', function() {

    it('can choose rock', function() {
      expect(rps.computerChoice).toBe("rock");
    });

    it('can choose paper', function() {
      expect(computerChoice).toBe("paper");
    });

    it('can choose scissors', function() {
      expect(computerChoice).toBe("scissors");
    });

  });

});

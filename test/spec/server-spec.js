describe("Remote data and caching", function () {

  var
      server,
      httpBackend,
      callback    = {
        expected   :  jasmine.createSpy("SUCESS"),
        unexpected : jasmine.createSpy("ERROR"),
      },

      setupAngular = function () {
        module('nglarily');
        inject(function (Server, $httpBackend) {
          server      = Server;
          httpBackend = $httpBackend;
        });
      };

  beforeEach(setupAngular);

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  // Tests
  describe('book data and caching', function () {
    it('get a book', function () {
      httpBackend.when("GET", "aBook").respond("book");

      server.getBook("aBook", callback.expected, callback.unexpected);

      httpBackend.flush();
      expect(callback.expected).toHaveBeenCalledWith("book");
      expect(callback.unexpected).not.toHaveBeenCalled();
    });
  });
});
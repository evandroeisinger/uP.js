describe("uP.js", function() {

	it("should be able to promise", function() {

		expect(uP).toBeDefined();

	});

  	describe("when instantiated", function() {

		var p;

		beforeEach(function() {

			p = new uP();

		});
		
		it("should return a new promise", function() {
			
			expect(p).toBeDefined();
			expect(p.then).toBeDefined();
			expect(p.resolve).toBeDefined();
	    	expect(p.promises.length).toEqual(0);

	    });

	    it("should resolve a promise", function(done) {

	    	p.then(function() {});
	    	expect(p.promises.length).toEqual(1);

	    	setTimeout(function() {
	    		
	    		p.resolve();
				expect(p.promises.length).toEqual(0);
				
				done();

			}, 500 );


	    });

	});

});

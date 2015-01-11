var Sails = require('sails');
var Barrels = require('barrels');

before(function(done) {
	Sails.lift({
		log: {
			level: 'error'
		},
		models: {
			connection: 'test',
			migrate: 'drop'
		}
	}, function(err, sails) {
		if (err) return done(err);
		// here you can load fixtures, etc.
		var barrels = new Barrels();
		
		// Load fixtures
		fixtures = barrels.data;

		// Populate the DB
		barrels.populate(function(err) {
			done(err, sails);
		});
	});
});

after(function(done) {
	// here you can clear fixtures, etc.
	sails.lower(done);
});

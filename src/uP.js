(function( global ){

	'use strict';
	
	function uP() {

		this.promises = [];

	};

	uP.prototype = {

		resolve: function() {

			this.promises[0].apply( this, arguments );
			this.promises.shift();

		},

		then: function(callback) {

			this.promises.push(callback);

			return this;

		}

	};
  
	global.uP = uP;

})( this );

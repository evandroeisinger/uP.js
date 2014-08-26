# uP.js
A agnostic and lightweight javascript promise library.

## Methods
* <code>uP.resolve( arguments );</code>
* <code>uP.then( callback );</code>

```js

var p = new uP();

	function get( data ) {
	
		setTimeout(function(){

			p.resolve( data );

		}, 500 );

		return p;

	};

	get('Knowledge!')
		.then(function( data ) {

			alert(data);

			return get('Money!');

		})
		.then(function(data) {

			alert(data);

		});
```

### Bower
<code>bower install uP.js;</code>
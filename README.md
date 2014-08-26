# uP.js
A agnostic and lightweight javascript promise library.

## Methods
* <code>uP.resolve( args );</code>
* <code>uP.then( resolveCallback );</code>

```js

var p = new uP();

function test( delay ) {
  
  setTimeout(function(){
    
    p.resolve();

  }, delay);

  return p;
};

test( 500 ).then(function( data ) {
  
  console.log( data );

});
```
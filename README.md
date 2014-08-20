# uP.js
A agnostic and lightweight javaScript promise library.

## Methods
* <code>uP.resolve( args );</code>
* <code>uP.reject( args );</code>
* <code>uP.then( resolveCallback, rejectCallback );</code>

```js
function test( delay ) {
  
  setTimeout(function(){
    
    uP.resolve();

  }, delay);

  return uP;
};

test( 500 ).then(function( data ) {
  
  console.log( data );

});
```
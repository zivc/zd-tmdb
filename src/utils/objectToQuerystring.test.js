import objectToQuerystring from './objectToQuerystring';

it('Render serialised string from object', () => {
   const obj = {
      a: 1,
      b: 2,
      c: 3
   };

   expect(objectToQuerystring(obj)).toEqual('?a=1&b=2&c=3');

});

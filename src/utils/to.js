/*
   Based loosely off;
   https://github.com/scopsy/await-to-js/blob/master/src/await-to-js.ts

   Hacked it a bit as I'm using it exclusively with Fetch API
 */
export default function to(promise) {
   return promise.then(
      async (response) => {
         const json = await response.json();
         return [null, json]
      },
      (err) => [err, undefined]
   ).catch(err => [err, undefined]);
}

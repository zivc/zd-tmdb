import to from './to';

function setupPromise(resolveValue, rejectValue, throwValue) {
   return new Promise((resolve, reject) => {
      if (resolveValue) return resolve({
         json() {
            return {a: 1, b: 2}
         },
      });
      if (rejectValue) return reject(rejectValue);
      if (throwValue) throw new Error(throwValue);
   });
}

it('Resolve promise', async () => {

   const [err, response] = await to(setupPromise(true, false, false));

   expect(err).toBeNull();
   expect(response).toEqual({a: 1, b: 2});

});

it('Reject promise', async () => {

   const [err, response] = await to(setupPromise(false, true, false));

   expect(err).toBeTruthy();
   expect(response).toBeUndefined();

});

it('Throw error', async () => {

   const [err, response] = await to(setupPromise(false, false, 'error1234'));

   expect(err).toEqual(new Error('error1234'));
   expect(response).toBeUndefined();

});

export default function (obj) {

   const queryString = [];

   for (const param in obj) {
      if (obj.hasOwnProperty(param)) {
         const key = encodeURIComponent(param);
         const value = encodeURIComponent(obj[param]);
         queryString.push(`${key}=${value}`);
      }
   }

   const output = queryString.join('&');

   return output ? `?${output}` : '';

}

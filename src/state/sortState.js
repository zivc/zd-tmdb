const sort = {
   minRating: 0,
   property: 'popularity',
   direction: 'desc',

   directions: [
      {key: 'asc', name: 'Asc'},
      {key: 'desc', name: 'Desc'}
   ],

   properties: [
      {key: 'popularity', name: 'Popularity'},
      {key: 'vote_average', name: 'Rating'}
   ],
};

export default sort;

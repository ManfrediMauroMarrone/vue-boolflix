var app = new Vue({
    el: '#root',
    data: {
      movies: [],
      tvSeries: [],
      languages:['de', 'en', 'es', 'fr', 'it', 'ja', 'ko'],
      searched: '',
      results: '',


    },

    methods: {
      search() {
        axios
        .get('https://api.themoviedb.org/3/search/movie' ,{
          params:{
            api_key: '469d777c4caf641af43971c56a9b9340',
            query: this.searched
          }
        })
        .then((response)=> {
          this.movies = response.data.results
          this.movies.forEach((item, index) => {
            // converto la base del voto da 10 a 5 usando una proporzione
            let votoBase5 = Math.ceil(parseFloat(item.vote_average)*0.5)
            // pongo il vecchio voto in base 10 uguale al nuovo voto in pase 5 specificando l'indice perché è un array di oggetti
            this.movies[index].vote_average = votoBase5;

          });


        })
        .catch((error) =>{
          console.log(error);
        });

        axios
        .get('https://api.themoviedb.org/3/search/tv' ,{
          params:{
            api_key: '469d777c4caf641af43971c56a9b9340',
            query: this.searched
          }
        })
        .then((response)=> {
          this.tvSeries = response.data.results
          this.tvSeries.forEach((item, index) => {
            // converto la base del voto da 10 a 5 usando una proporzione
            let votoBase5 = Math.round(parseFloat(item.vote_average)*0.5)
            // pongo il vecchio voto in base 10 uguale al nuovo voto in pase 5 specificando l'indice perché è un array di oggetti
            this.tvSeries[index].vote_average = votoBase5;

          });
          // this.movies = [];

        })
        .catch((error) =>{
          console.log(error);
        });

      }

    },

    mounted() {

    },

});

var app = new Vue({
    el: '#root',
    data: {
      movies: [],
      searched: ''



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
          console.log(response);
        });

      }

    },

    mounted() {
      console.log(this.movies);
      // axios
      // .get('https://flynn.boolean.careers/exercises/api/array/music')
      // .then((risposta) => {
      //   let disco = risposta.data.response
      //   this.dischi = disco
      //
      //   this.dischi.forEach((disco) => {
      //     if (!this.genres.includes(disco.genre)) {
      //       this.genres.push(disco.genre);
      //     }
      //   });
      //
      //   this.dischi.sort(function(disco1, disco2){
      //     return parseInt(disco1.year) - parseInt(disco2.year)
      //   })
      //
      // });


    },

});

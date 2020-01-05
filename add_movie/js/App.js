import AddMovie from './AddMovie.js'
import MovieList from './MovieList.js'

export default {
  components: {
    AddMovie,
    MovieList
  },
  template: `
    <div id="app">
      
      <h1 class="Front">Add Movie</h1>
      <button class="button" @click.prevent="sortTitle">Sort by title</button>
      <button class="button" @click.prevent="sortRating">Sort by rating</button>
      <AddMovie @newMovie="onNewMovie"></AddMovie>
      <br>
      <MovieList :movies="movies" />
      </div>
  `,
  mounted() {
    console.log('App mounted!');
    if (localStorage.getItem('movies')) this.movies = JSON.parse(localStorage.getItem('movies'));
  },
  watch: {
    movies: {
      handler() {
        console.log('Movies changed!');
        localStorage.setItem('movies', JSON.stringify(this.movies));
      },
      deep: true,
    },
  },

  data() {
    return {
      newMovie:'',
      movies: [],
      
    }
  },
  methods: {
    
    onNewMovie(movie) {
      this.movies.push(movie)
    },
   
    sortTitle() {
      this.movies.sort(function(a, b){
        var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
        if (titleA < titleB) //sort string ascending
            return -1 
        if (titleA > titleB)
            return 1
        return 0 //default return value (no sorting)
    })
  },
sortRating() {
  this.movies.sort(function(a, b){
    return a.rating-b.rating
})
}
   
    
  }
}



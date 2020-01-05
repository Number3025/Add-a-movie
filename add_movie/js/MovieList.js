import MovieCard from './MovieCard.js'

export default {
  components: {
    MovieCard
  },
  props: ['movies'],
  template: `
    <div>
    <MovieCard 
        v-for="(movie, i) of movies"
        :key="movie.title + i" 
        :movie="movie" 
        @removeMovie="onRemoveMovie"
        />
    </div>
  `,
  methods: {
    onRemoveMovie(movie) {
      let movieIndex = this.movies.indexOf(movie)
      this.movies.splice(movieIndex, 1)
    }
  }
}
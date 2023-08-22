<template lang="">
  <div class="wrap-main">
    <h1 class="maintitle">mainpages</h1>

    <h2 class="movie-content">Popular Movies 5</h2>
    <ul class="movie-wrap">
      <li v-for="(movie, i) in topRatedMovies" :key="movie.id" class="movielist">
        <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
          <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" class="movieimg" />
          <p class="moviestar">🌟{{ movie.vote_average }}</p>
          <p>{{ movie.title }}</p>
        </router-link>
      </li>
    </ul>
    <h2 class="movie-content2">This Month Movies 20</h2>
    <button class="order" @click="order()">평점 높은순 정렬</button>
    <button class="desc" @click="Desc()">평점 낮은순 정렬</button>
    <div class="month">
      <ul class="movie-wrap-2">
        <li v-for="(movie, i) in movies" :key="movie.id" class="movielist">
          <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
            <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" class="movieimg" />
            <p class="moviestar">🌟{{ movie.vote_average }}</p>
            <p>{{ movie.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      movies: [],
      tmdbBaseUrl: "https://image.tmdb.org/t/p/w500",
    };
  },
  methods: {
    getImageUrl(posterPath) {
      return this.tmdbBaseUrl + posterPath;
    },
    order() {
      this.movies.sort((a, b) => b.vote_average - a.vote_average);
    },
    Desc() {
      this.movies.sort((a, b) => a.vote_average - b.vote_average);
    },
  },
  computed: {
    topRatedMovies() {
      return this.movies
        .slice()
        .sort((a, b) => b.vote_average - a.vote_average)
        .slice(0, 5);
    },
  },
  async mounted() {
    try {
      const apiKey = "aa4a8de3b3335511976d80abff2d57f0";
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-US&page=1`);
      this.movies = response.data.results;
      console.log(this.movies);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  },
};
</script>
<style scoped>
.wrap-main {
  width: 100%;
  height: 100%;
  background: #000;
}
.maintitle {
  padding-top: 80px;
  box-sizing: border-box;
}
li {
  list-style: none;
  margin: 10px;
}
.movie-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.movieimg {
  width: 100%;
  max-width: 300px;
  max-height: 300px;
}
.movielist {
  margin-left: 50px;
}
.movie-content {
  margin: 30px 0;
}
.movie-content2 {
  margin: 30px 0;
}
.movie-wrap-2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.month {
  padding-bottom: 50px;
  box-sizing: border-box;
}
.order {
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 50px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
}
.desc {
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 50px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-top: 20px;
  margin-bottom: 20px;
}
button:hover {
  background: #fff;
  color: #1aab8a;
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>

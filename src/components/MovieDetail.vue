<template>
  <div class="wrap-d">
    <h2 class="title">Movie Detail</h2>
    <div v-if="movie" class="D-movie">
      <img :src="movie.imageUrl" alt="Movie Poster" />

      <p>{{ movie.title }}</p>
      <p class="descript">{{ movie.description }}</p>
      <p>{{ movie.release_date }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: Number,
  },
  data() {
    return {
      movie: null,
    };
  },
  methods: {
    async getMovie() {
      try {
        const apiKey = "aa4a8de3b3335511976d80abff2d57f0"; // TMDB API 키
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${apiKey}&language=ko-KR`);
        this.movie = {
          title: response.data.title,
          description: response.data.overview,
          imageUrl: "https://image.tmdb.org/t/p/w500" + response.data.poster_path,
          release_date: response.data.release_date,
        };
        console.log(response);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    },
  },
  created() {
    if (this.id) {
      this.getMovie(); // 컴포넌트가 생성될 때 영화 정보를 가져오도록 호출
    }
  },
};
</script>
<style scoped>
.wrap-d {
  background: #000;
  width: 100%;
  height: 100%;
}
.D-movie {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.descript {
  width: 60%;
}
img {
  width: 30%;
  height: 30%;
}
</style>

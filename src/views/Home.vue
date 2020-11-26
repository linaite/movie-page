<template>
  <div class="body">
    <div class="all_cards">
      <MovieCard v-for="movie in movies"
                 :key="movie.id"
                 :movie="movie"
      />
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import TheFooter from "@/components/TheFooter";

export default {
  name: "Home",
  components: {
    MovieCard,
    TheFooter
  },
  computed: {
    movies() {
      return this.$store.getters.movies
    }
  }
}
</script>

<style scoped>
body{
  position: relative;
}
.all_cards {
  width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
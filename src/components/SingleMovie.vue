<template>
  <div class="card">
    <img :src="movie.image" alt="">
    <div class="card_content">
      <h3>{{ movie.title }}</h3>
      <span>{{ movie.year }}</span> | <i class="fas fa-star"></i> {{ movie.rating }}
      <p>{{ movie.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleMovie",
  computed: {
    movie() {
      return this.$store.getters.singleMovie
    },
  },
  created() {
    this.$store.commit('filterMovies', this.$route.params.id)
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  background-color: #F6F6F5;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.card_content {
  padding: 10px;
  box-sizing: border-box;
}

.fa-star {
  color: #c39400;
}
</style>
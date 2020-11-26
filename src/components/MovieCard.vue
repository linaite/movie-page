<template>
  <div class="card" @click="moreInfo">
    <img :src="movie.image" alt="image">
    <div class="card_content">
      <h3>{{ movie.title }}</h3>
      <span>{{ movie.year }}</span> |
      <i class="fas fa-star"></i> <span>{{ movie.rating }}</span>
      <p>{{ movie.comments.length }} review(-s)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },
  methods: {
    moreInfo() {
      this.$router.push(`/movie/${this.movie.id}`)
    }
  }
}
</script>

<style scoped>
.card {
  width: 200px;
  background-color: #f6f6f5;
  padding: 10px 10px 20px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
}

.card_content {
  padding: 10px;
}

.fa-star{
  color:#c39400;
}

</style>
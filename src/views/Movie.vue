<template>
  <div class="main_content">
    <div class="card">
      <img :src="movie.image" alt="">
      <div class="card_content">
        <h3>{{ movie.title }}</h3>
        <span>{{ movie.year }}</span> | <i class="fas fa-star"></i> {{ movie.rating }}
        <p>{{ movie.description }}</p>
      </div>
    </div>
    <h3>Comments</h3>
    <div class="reviews" v-for="(item,index) in movie.comments" :key="index">
      <div>
        <span>{{ item.comment }}</span>
        <span class="name">{{ item.name }}</span>
      </div>
      <i class="fas fa-times" @click="deleted"></i>
    </div>
    <div class="comment">
      <h3>Want to leave a comment?</h3>
      <div class="field-set">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" placeholder="Your name..">
      </div>
      <div class="field-set">
        <label for="name">Comment</label>
        <textarea id="" placeholder="Comment here..." v-model="comment"></textarea>
      </div>
      <button @click="submit">Submit</button>
    </div>
  </div>
  <TheFooter class="footer"/>
</template>

<script>
import TheFooter from "@/components/TheFooter";

export default {
  name: "Movie",
  components: {
    TheFooter
  },
  data() {
    return {
      name: "",
      comment: ''
    }
  },
  computed: {
    movie() {
      return this.$store.getters.singleMovie
    },
  },
  created() {
    this.$store.commit('filterMovies', this.$route.params.id)
  },
  methods: {
    submit() {
      this.$store.commit('filterMovies', this.$route.params.id)
      let object = {
        name: this.name,
        comment: this.comment
      }
      this.movie.comments.unshift(object)
      this.name = ''
      this.comment = ''
    },
    deleted() {
      this.$store.commit('removeComment', this.movie.id, this.index)
      console.log(this.index)
    }
  }
}
</script>

<style scoped>

.main_content {
  width: 664px;
  margin: 30px auto;
}

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

.reviews {
  width: 100%;
  padding: 10px;
  background-color: #F6F6F5;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.name {
  font-style: italic;
  display: block;
  margin-top: 10px;
}

h3 {
  font-style: italic;
}

.field-set {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input {
  font-family: 'Roboto', sans-serif;
  padding: 5px;
  border:1px solid lightgrey;
  display: inline;
}

textarea {
  width: 100%;
  height: 70px;
  border:1px solid lightgrey;
  font-family: 'Roboto', sans-serif;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  outline: none;

}

.fa-times {
  cursor: pointer;
  color:#333333;
}

.fa-star {
  color: #c39400;
}

button {
  background-color: #F6F6F5;
  padding: 1px 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
  line-height: 20px;
  color: #5a5a5a;
}


</style>
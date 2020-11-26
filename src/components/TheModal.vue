<template>
  <div class="form">
    <div class="field_set">
      <label for="title">Movie Title</label>
      <input type="text" id="title" v-model="title">
    </div>
    <div class="field_set">
      <label for="year">Year</label>
      <input type="text" id="year" v-model="year">
    </div>
    <div class="field_set">
      <label for="rating">Rating</label>
      <input type="text" id="rating" v-model="rating">
    </div>
    <div class="field_set">
      <label for="image">Image link</label>
      <input type="text" id="image" v-model="image">
    </div>
    <div class="field_set">
      <label for="description">Description</label>
      <textarea rows="3" id="description" v-model="description"></textarea>
    </div>
    <button @click="submit">Submit</button>
  </div>
</template>


<script>
export default {
  name: "TheModal",
  data() {
    return {
      title: '',
      year: '',
      rating: '',
      image: '',
      description: "",
      showState: true
    }
  },
  computed: {
    movies() {
      return this.$store.getters.movies
    },

  },
  methods: {
    submit() {
      let object = {
        image: this.image,
        title: this.title,
        id: String(this.movies.length + 1),
        year: this.year,
        rating: this.rating,
        description: this.description,
        comments: []
      }
      this.movies.unshift(object)

      this.$emit('send-submit')

      this.image = '',
          this.title = '',
          this.year = '',
          this.rating = '',
          this.description = ''

      console.log(this.movies)
    }
  }


}
</script>

<style scoped>
.form {
  width: 400px;
  padding: 30px;
  background-color: #F6F6F5;
  margin: 30px auto;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px 1px #000000;
}

.field_set {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input, textarea {
  padding: 5px 5px;
}

textarea {
  font-family: 'Roboto', sans-serif;
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
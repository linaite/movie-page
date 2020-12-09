<template>
  <div class="card">
    <img :src="movie.image" alt="image">
    <div class="card_content">
      <h3>{{ movie.title }}</h3>
      <span>{{ movie.year }}</span> |
      <i class="fas fa-star"></i> <span>{{ movie.rating }}</span>
      <p>{{ movie.comments.length }} review(-s)</p>
      <button @click="moreInfo">More info</button>
      <button @click="setEdit">Edit</button>
    </div>
  </div>
  <div class="modal" v-if="edit">
    <div class="modal_content">
      <div class="field_set">
        <label for="title">Movie Title</label>
        <input type="text" id="title" v-model.trim="editInfo.title">
      </div>
      <div class="field_set">
        <label for="year">Year</label>
        <input type="text" id="year" v-model.trim="editInfo.year">
      </div>
      <div class="field_set">
        <label for="rating">Rating</label>
        <input type="text" id="rating" v-model.trim="editInfo.rating">
      </div>
      <div class="field_set">
        <label for="image">Image link</label>
        <input type="text" id="image" v-model.trim="editInfo.image">
      </div>
      <div class="field_set">
        <label for="description">Description</label>
        <textarea rows="4" id="description" v-model.trim="editInfo.description"></textarea>
      </div>
      <div v-if="inputIsInvalid" class="error">
        <span>Input is invalid. Please enter at least a few characters...</span>
      </div>
      <button @click="saveData">Save</button>
      <button @click="closeModal">Close</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },
  data() {
    return {
      edit: false,
      editInfo: {
        image: "",
        title: "",
        year: "",
        rating: "",
        description: "",
        comments: this.movie.comments,
        id: this.movie.id
      },
      inputIsInvalid: false,
    }
  },
  computed: {
    movies() {
      return this.$store.getters.movies
    }
  },
  methods: {
    moreInfo() {
      this.$router.push(`/movie/${this.movie.id}`)
    },
    setEdit() {
      this.edit = !this.edit
      this.editInfo.image = this.movie.image
      this.editInfo.title = this.movie.title
      this.editInfo.year = this.movie.year
      this.editInfo.rating = this.movie.rating
      this.editInfo.description = this.movie.description
    },
    saveData() {
      let movie = {
        image: this.editInfo.image,
        title: this.editInfo.title,
        id: this.movie.id,
        year: this.editInfo.year,
        rating: this.editInfo.rating,
        description: this.editInfo.description,
        comments: this.editInfo.comments
      }
      if (this.editInfo.title === "" || this.editInfo.rating === "" || this.editInfo.year === "" || this.editInfo.description === "" || this.editInfo.image === "") {
        this.inputIsInvalid = true;
      } else {
        this.$store.commit('editMovie', movie)
        this.edit = false
        this.$router.push('/')
      }
    },
    closeModal() {
      this.edit = false
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
}

.card img {
  cursor: pointer;
}

.card_content {
  padding: 10px;
}

.fa-star {
  color: #c39400;
}

.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal_content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
}

.field_set {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input, textarea, button {
  padding: 5px 5px;
  font-size: 14px;
}

button {
  background-color: #F6F6F5;
  padding: 3px 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
  line-height: 20px;
  color: #5a5a5a;
  margin: 10px 10px 0 0;
}

.error span {
  color: red;
}
</style>
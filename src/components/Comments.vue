<template>
  <h3 class="title">Comments</h3>
  <div class="reviews" v-for="(item,index) in movie.comments" :key="index">
    <div>
      <span>{{ item.comment }}</span>
      <span class="name">{{ item.name }}</span>
    </div>
    <i class="fas fa-times" @click="deleted(index)"></i>
  </div>
  <div class="comment">
    <h3 class="title">Want to leave a comment?</h3>
    <div class="field_set">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" placeholder="Your name..">
    </div>
    <div class="field_set">
      <label for="name">Comment</label>
      <textarea id="" placeholder="Please, comment here..." v-model="comment"></textarea>
    </div>
    <div v-if="inputIsInvalid" class="error">
      <span>Input is invalid. Please enter at least a few characters...</span>
    </div>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data() {
    return {
      name: "",
      comment: '',
      counter: 0,
      inputIsInvalid: false,
    }
  },
  computed: {
    movie() {
      return this.$store.getters.singleMovie
    },
    commentsLength() {
      return this.movie.comments.length
    }
  },
  methods: {
    submit() {
      this.$store.commit('filterMovies', this.$route.params.id)
      let object = {
        name: this.name,
        comment: this.comment
      }
      if (this.comment === "" || this.name === "") {
        this.inputIsInvalid = true;
      } else {
        this.inputIsInvalid = false
        this.movie.comments.unshift(object)
        this.name = ''
        this.comment = ''
      }
    },
    deleted(index) {
      this.$store.commit('removeComment', {id: this.movie.id, index})
    },
  },
  watch: {
    commentsLength: function (newVal) {
      newVal > 5 ? this.movie.comments = [] : null
    }
  },
}
</script>

<style scoped>

.title {
  font-style: italic;
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

.field_set {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input, textarea {
  font-size: 14px;
  padding: 5px;
  border: 1px solid lightgrey;
  outline: none;
}

textarea {
  width: 100%;
  min-height: 70px;
  box-sizing: border-box;
}

.fa-times, button {
  cursor: pointer;
}

button {
  background-color: #F6F6F5;
  padding: 3px 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  line-height: 18px;
  color: #5a5a5a;
  margin-top: 10px
}

.error span {
  color: red;
}
</style>
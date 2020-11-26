<template>
  <span @click="addMovie" class="add">+ Movie</span>
</template>

<script>
export default {
  name: "ToolBar",
  data() {
    return {
      showState: false
    }
  },
  methods: {
    addMovie() {
      this.$emit('send-event')
    }
  }
}
</script>

<style scoped>
.add {
  cursor: pointer;
  color:white
}
</style>
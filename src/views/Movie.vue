<template>
  <div class="main_content">
    <SingleMovie/>
    <Comments/>
  </div>
  <TheFooter class="footer"/>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import SingleMovie from "@/components/SingleMovie";
import Comments from "@/components/Comments";

export default {
  name: "Movie",
  components: {
    TheFooter,
    SingleMovie,
    Comments
  },
}
</script>

<style scoped>

.main_content {
  width: 664px;
  margin: 30px auto;
}
</style>
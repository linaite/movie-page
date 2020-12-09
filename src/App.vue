<template>
  <div id="nav">
    <router-link to="/">
      <img class="pic"
           src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle_black._CB1509071522_SY230_SX307_AL_.png"
           alt="">
    </router-link>
    <ToolBar @send-event="trigger"/>
  </div>
  <router-view v-if="!showState"/>
  <TheModal v-else @send-submit="trigger"/>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import TheModal from "@/components/TheModal";

export default {
  components: {
    ToolBar,
    TheModal
  },
  data() {
    return {
      showState: false
    }
  },
  methods: {
    trigger() {
      this.showState = !this.showState
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

body, input, label, textarea, label, button {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0
}

#nav {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  background-color: #131313;
}

.pic {
  width: 85px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>

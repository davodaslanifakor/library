<template>
  <div class="main">
    <a-navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import ANavbar from "~/components/ui/navbar";

export default {
  name: "layout",
  components: {
    ANavbar
  }
};
</script>

<style lang="stylus" scoped>
</style>

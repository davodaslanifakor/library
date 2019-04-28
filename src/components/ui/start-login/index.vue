<template>
  <div class="container">
    <div class="jumbotron mt-3">
      <h1>Please verify first</h1>
      <button class="btn btn-lg btn-primary" role="button" @click="verify">Verify</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    verify() {
      this.$store.dispatch("verify/getToken");
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
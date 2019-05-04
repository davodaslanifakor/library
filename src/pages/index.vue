<template>
  <div>
    <lStartLogin/>
  </div>
</template>

<script>
import lStartLogin from "~/components/ui/start-login";

export default {
  name:'home',
  components: {
    lStartLogin
  },
  computed:{
    token(){
      return this.$route.hash
    }
  },
  watch:{
    token:{
      handler:'setToken',
      immediate: true
    }
  },
  methods:{
    setToken(val){
        this.$store.dispatch("verify/seToken",val);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
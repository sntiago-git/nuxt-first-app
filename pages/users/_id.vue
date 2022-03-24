<template>
  <v-container>
    <h1>user detail</h1>

    <button @click="goBack()">Go back</button>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
    };
  },

  async created() {},

  methods: {
    getUser(id) {
      try {
        console.log(id);
      } catch (error) {
        console.log(error);
      }
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>


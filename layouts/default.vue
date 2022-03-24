<template>
  <v-lazy>
    <v-app id="inspire" mini-variant.sync>
      <SideBar />
      <v-main>
        <!-- router-view -->
        <Nuxt />
      </v-main>
    </v-app>
  </v-lazy>
</template>

<script>
export default {
  name: "default",

  head() {
    return {
      title: "def-" + this.$route.name, //Cambia la informacion meta, ejemplo: title.
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Website about posts - DEFAULT LAYOUT",
        },
      ],

      htmlAttrs: {
        lang: "en",
      },
    };
  },

  created() {
    console.log("Default Layout created()");
    console.log(this.$route);
  },
};
</script>

<style>
</style>
<template>
  <v-container>
    <nuxt-logo></nuxt-logo>
    <Tutorial />
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
   head() {
    return {
      //title: "Home", //Cambia la informacion meta, ejemplo: title.
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Website about posts"
        },
      ],
    };
  },
};
</script>

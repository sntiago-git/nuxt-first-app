<template>
  <div>
    <h2 style="background-color: transparent">Example Layout 1</h2>

    <Nuxt />
  </div>
</template>
b 
<script>
export default {
  name: "ExampleLayout",

  head() {
    return {
      title: "exp-" + this.$route.name, //Cambia la informacion meta, ejemplo: title.
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Website about posts - EXAMPLE LAYOUT",
        },
      ],
      htmlAttrs: {
        lang: "es",
      },
    };
  },
};
</script>

<style>
</style>
<template>
  <div>
    <Nuxt />
    <VFooter />
  </div>
</template>

<script>
import VFooter from "~/components/VFooter";

export default {
  components: { VFooter },
};
</script>

<style lang="postcss">
body {
  @apply bg-cover bg-center bg-fixed;
  background-image: url("~static/media/texture.jpg");
}
</style>
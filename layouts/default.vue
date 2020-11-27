<template>
  <div class="px-4 sm:px-8">
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
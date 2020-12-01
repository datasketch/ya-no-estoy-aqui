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
 background: rgb(69,54,75);
background: linear-gradient(180deg, rgba(69,54,75,0.9093837364047181) 50%, rgba(0,0,0,0.8729691705783876) 100%); 
  /* @apply bg-english-violet; */
  /* @apply bg-cover bg-center bg-fixed;
  background-image: url("~static/media/texture.jpg"); */
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
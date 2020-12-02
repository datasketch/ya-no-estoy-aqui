<template>
  <li
    class="leading-tight list-item"
    @mouseenter="$emit('enter')"
    @mouseleave="$emit('leave')"
  >
    <nuxt-link :to="`/${victim.slug}`" :title="victim.fullname" class="block font-extrabold">
      <span class="block text-white">{{ victim.fullname }}</span>
      <span class="text-platinum text-opacity-75"
        >{{ victim["Edad"] }} años</span
      >
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    victim: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss">
.list-item {
  opacity: 1;
  transition: opacity 0.25s ease-out;
}
.faded {
  opacity: 0.5;
}
</style>
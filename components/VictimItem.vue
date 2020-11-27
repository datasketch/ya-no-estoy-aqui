<template>
  <li
    class="leading-tight list-item"
    @mouseenter="$emit('item-hovered')"
    @mouseleave="$emit('item-leave')"
  >
    <nuxt-link :to="`/${victim.slug}`" :title="victim.fullname" class="block">
      <span class="block">{{ victim.fullname }}</span>
      <span class="text-english-violet text-opacity-75"
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
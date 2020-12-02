<template>
  <p class="text-lg">
    {{ name }}
    <a
      v-if="twitter"
      :href="`https://twitter.com/${twitter}`"
      class="text-purple"
      target="_blank"
      rel="noopener noreferrer"
      >(@{{ twitter }})</a
    >
  </p>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
    },
  },
};
</script>
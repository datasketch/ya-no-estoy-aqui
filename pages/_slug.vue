<template>
  <p>Página · {{ victim.name }}</p>
</template>

<script>
import victims from "~/db";

export default {
  head() {
    return {
      title: this.victim.name,
    };
  },
  data() {
    return {
      victim: {},
    };
  },
  created() {
    this.victim = victims.find((v) => v.slug === this.$route.params.slug);
  },
};
</script>
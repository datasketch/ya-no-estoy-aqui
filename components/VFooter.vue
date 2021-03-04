<template>
  <footer class="px-4 mt-12 pb-4">
    <div class="text-center space-y-4">
      <p class="font-lato text-xl text-platinum">Comparte</p>
      <ul class="flex items-center justify-center space-x-6">
        <li>
          <a :href="shareFb" target="_blank" rel="noopener noreferrer">
            <img src="media/fb.png" alt="" />
          </a>
        </li>
        <li>
          <a :href="shareTw" target="_blank" rel="noopener noreferrer">
            <img src="media/tw.png" alt="" />
          </a>
        </li>
        <li v-if="!profile">
          <a
            href="https://www.instagram.com/cuestionp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="media/ig.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
    <img
      class="mt-12 mx-auto w-2/3 md:w-64"
      src="media/heinrich-boll-stiftung.png"
      alt=""
    />
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VFooter",
  computed: {
    ...mapState(["profile"]),
    shareURL() {
      if (!this.profile) {
        return "";
      }
      return `https://cuestionpublica.com/ya-no-estoy-aqui/${this.profile.slug}`;
    },
    shareText() {
      return `In memoriam: ${this.profile.fullname}`;
    },
    shareTw() {
      if (!this.profile) {
        return "https://twitter.com/cuestion_p";
      }
      return `https://twitter.com/intent/tweet?text=${this.shareText}&url=${this.shareURL}&via=cuestionp`;
    },
    shareFb() {
      if (!this.profile) {
        return "https://facebook.com/cuestionp/";
      }
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareURL}`;
    },
  },
};
</script>
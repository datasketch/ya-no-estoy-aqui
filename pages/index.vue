<template>
  <div>
    <transition-group name="photo">
      <div
        v-for="victim in victims"
        :key="victim.slug"
        v-show="hovered && hovered.slug === victim.slug"
        class="fixed top-0 left-0 w-full h-full bg-center bg-contain bg-repeat-x"
        :style="{
          zIndex: -1,
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.6530987394957983) 0%, rgba(0,0,0,0.5550595238095238) 44%), url(${victim.enlace_imagen})`,
        }"
      ></div>
    </transition-group>
    <IntroScreen />
    <section class="px-4 pb-6">
      <div class="max-w-lg mx-auto">
        <div class="flex flex-col items-center">
          <div class="h-16 border-sizzling-red border-r w-0"></div>
          <div
            class="leading-none text-center font-playfair text-5xl font-extrabold"
          >
            <p class="text-sizzling-red text-opacity-75">20</p>
            <p class="text-sizzling-red font-lato text-sm font-black">
              Perfiles
            </p>
            <p class="text-sizzling-red text-opacity-75 -mt-3">20</p>
          </div>
        </div>
        <ul
          class="flex flex-col items-start space-y-16 mt-12 font-playfair text-xl lg:text-2xl"
          ref="victims"
        >
          <VictimItem
            v-for="(victim, i) in victims"
            :key="victim.slug"
            :victim="victim"
            @enter="onEnter(victim, i)"
            @leave="onLeave(i)"
          />
        </ul>
      </div>
    </section>
    <VCredits />
  </div>
</template>

<script>
import VictimItem from "~/components/VictimItem";
import IntroScreen from "~/components/IntroScreen";
import VCredits from "~/components/VCredits";
import { getData } from "~/api";
import meta from "~/meta";
import { mapMutations } from "vuex";

const tags = meta(
  "Ya no estoy aquí",
  null,
  "https://res.cloudinary.com/randommonkey/image/upload/v1607954780/ya-no-estoy-aqui/cover.png"
);

export default {
  head() {
    return {
      title: "Ya no estoy aquí",
      meta: [...tags],
    };
  },
  components: { VictimItem, IntroScreen, VCredits },
  async asyncData({ store }) {
    const { victims, error } = await getData();
    if (error !== null) {
      console.log(error);
    }
    store.commit("setProfile", { profile: null });
    return {
      victims,
    };
  },
  data() {
    return {
      hovered: null,
    };
  },
  methods: {
    ...mapMutations(["setProfile"]),
    onEnter(victim, index) {
      const children = Array.from(this.$refs.victims.children);
      children.forEach((child) => child.classList.add("faded"));
      children[index].classList.remove("faded");
      this.hovered = victim;
    },
    onLeave() {
      const children = Array.from(this.$refs.victims.children);
      children.forEach((child) => child.classList.remove("faded"));
      this.hovered = null;
    },
  },
  mounted() {
    this.setProfile({ profile: null });
  },
};
</script>

<style>
.photo-enter-to,
.photo-leave {
  opacity: 1;
}

.photo-enter,
.photo-leave-to {
  opacity: 0;
}

.photo-enter-active,
.photo-leave-active {
  transition: all 0.4s ease-out;
}
</style>
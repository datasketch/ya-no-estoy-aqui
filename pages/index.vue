<template>
  <div>
    <!-- <div
      v-show="hoveredItem"
      class="fixed top-0 left-0 w-full h-screen bg-no-repeat bg-center"
      :style="{ backgroundImage: bg, zIndex: -2 }"
    ></div> -->
    <IntroScreen />
    <section class="px-4 pb-6">
      <div class="max-w-lg mx-auto">
        <div class="flex flex-col items-center">
          <div class="h-16 border-sizzling-red border-r w-0"></div>
          <div class="leading-none text-center font-playfair text-5xl">
            <p class="text-sizzling-red text-opacity-75">20</p>
            <p class="text-sizzling-red font-lato text-sm font-black">
              Perfiles
            </p>
            <p class="text-sizzling-red text-opacity-75 -mt-3">20</p>
          </div>
        </div>
        <ul
          class="space-y-12 mt-12 font-playfair text-2xl"
          ref="victims"
        >
          <VictimItem
            v-for="(victim, i) in victims"
            :key="victim.slug"
            :victim="victim"
            @item-hovered="onMouseEnter(victim, i)"
            @item-leave="onMouseLeave(i)"
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import VictimItem from "~/components/VictimItem";
import IntroScreen from "~/components/IntroScreen";
import { getData } from "~/api";

export default {
  head() {
    return {
      title: "Ya no estoy aquí",
    };
  },
  components: { VictimItem, IntroScreen },
  /* data() {
    return {
      hoveredItem: null,
    };
  },
  computed: {
    bg() {
      return `radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%), url(https://images.unsplash.com/photo-1547937084-4d587301a545?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80)`;
    },
  }, */
  async asyncData() {
    const { victims, error } = await getData();
    if (error !== null) {
      console.log(error);
    }
    return {
      victims,
    };
  },
  methods: {
    onMouseEnter(victim, index) {
      const children = Array.from(this.$refs.victims.children);
      children.forEach((child) => child.classList.add("faded"));
      children[index].classList.remove("faded");
      // this.hoveredItem = victim;
    },
    onMouseLeave() {
      const children = Array.from(this.$refs.victims.children);
      children.forEach((child) => child.classList.remove("faded"));
      // this.hoveredItem = null;
    },
  },
};
</script>
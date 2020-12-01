<template>
  <div>
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
        <ul class="space-y-12 mt-12 font-playfair text-2xl" ref="victims">
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
    },
    onMouseLeave() {
      const children = Array.from(this.$refs.victims.children);
      children.forEach((child) => child.classList.remove("faded"));
    },
  },
};
</script>
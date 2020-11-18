<template>
  <div>
    <section id="intro" class="px-4 min-h-screen table w-full">
      <div class="table-cell align-middle">
        <img class="w-64 mx-auto" src="media/title.png" alt="Ya no estoy aquí" />
        <!-- <img class="w-64 mx-auto -mt-6" src="media/cover.png" alt="" /> -->
        <p class="font-playfair font-extrabold text-center text-2xl text-sizzling-red">
          Perfiles de mujeres asesinadas en pandemia
        </p>
        <img class="mx-auto w-40" src="media/cp-feminista.png" alt="Logo Cuestión Pública Feminista">
      </div>
    </section>
    <section class="px-4 py-6">
      <div class="w-10/12 mx-auto">
        <p class="font-playfair">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In numquam
          sint officiis suscipit mollitia veniam alias consequatur explicabo
          maxime molestias consectetur ad, deserunt magnam, reprehenderit quasi
          necessitatibus! Doloribus, maiores nostrum.
        </p>
        <img class="mx-auto w-16 mt-4" src="media/victims.png" alt="" />
        <ul class="space-y-2 mt-6 font-playfair text-silver-chalice">
          <li v-for="v in victims" :key="v.slug">
            <nuxt-link
              :to="`/${v.slug}`"
              class="hover:text-sizzling-red focus:text-sizzling-red"
            >
              {{ v.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import victims from "~/db";

export default {
  head() {
    return {
      title: "Ya no estoy aquí",
    };
  },
  data() {
    return {
      victims,
    };
  },
};
</script>

<style lang="postcss">
#intro {
  @apply bg-center bg-no-repeat bg-contain;
  background-image: url('~static/media/cover.gif');
}
</style>
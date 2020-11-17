<template>
  <div>
    <section class="intro">
      <img class="w-40 mx-auto" src="media/title.png" alt="Ya no estoy aquí" />
      <img class="w-64 mx-auto -mt-6" src="media/cover.png" alt="" />
      <div
        class="text-center text-xl font-playfair text-wild-blue-yonder font-semibold"
      >
        <p>
          "Soy la mujer que piensa.
          <br />
          Algún día mis ojos encenderan luciérnagas."
        </p>
        <p class="mt-4 italic">Gioconda Belli</p>
      </div>
    </section>
    <section class="px-4 py-6 shadow-inner">
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
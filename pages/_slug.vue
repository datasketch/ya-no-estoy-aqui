<template>
  <div class="w-full mx-auto sm:max-w-lg text-english-violet">
    <nav class="pt-2">
      <nuxt-link to="/" class="flex items-center text-silver-chalice text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="9" y2="16" />
          <line x1="5" y1="12" x2="9" y2="8" />
        </svg>
        <span>Volver al inicio</span>
      </nuxt-link>
    </nav>
    <div class="text-sizzling-red flex flex-col items-start relative mt-12">
      <p class="font-lato text-xl">{{ victim.Edad }} años</p>
      <img
        src="media/murdered.png"
        class="absolute w-64 right-0"
        style="top: 1rem; z-index: -1"
      />
      <div class="w-8 border-b border-sizzling-red"></div>
      <h1 class="text-5xl leading-tight font-playfair">
        <span class="block">{{ victim.Nombre }}</span>
        <span>{{ victim.Apellidos }}</span>
      </h1>
    </div>
    <div class="font-charter mt-12 space-y-6">
      <h2 class="font-playfair text-2xl">Carta de la madre</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        laborum voluptate ullam facere illum voluptatum provident, qui repellat!
        Quaerat obcaecati dolorum quia! Cum sed corporis unde ipsam, labore odio
        architecto?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse
        minima fuga. Minus ducimus dolorum numquam mollitia delectus ad debitis,
        repudiandae veritatis assumenda beatae necessitatibus commodi magni
        iusto vel animi?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iste
        molestiae rem voluptatum quisquam beatae explicabo dolor quo iure quis
        aut in magni, possimus laboriosam natus inventore qui deserunt iusto.
      </p>
    </div>
  </div>
</template>

<script>
import { getData } from "~/api";

export default {
  async asyncData({ params }) {
    const { victims, error } = await getData();
    if (error !== null) {
      console.log(error);
    }
    const index = victims.findIndex((v) => v.slug === params.slug);
    const victim = victims[index];
    const previousVictim =
      index - 1 < 0 ? victims[victims.length - 1] : victims[index - 1];
    const nextVictim =
      index + 1 >= victims.length ? victims[0] : victims[index + 1];
    return {
      victim,
      previousVictim,
      nextVictim,
    };
  },
};
</script>
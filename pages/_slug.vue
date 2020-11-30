<template>
  <div class="w-full mx-auto sm:max-w-lg text-english-violet">
    <nav class="pt-2">
      <nuxt-link to="/" class="flex items-center text-silver-chalice text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 stroke-current"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
    <div class="text-center mt-12">
      <div
        id="audio-player"
        ref="player"
        class="inline-flex items-center relative"
        role="region"
        aria-label="Reproductor de audio"
      >
        <button
          @click="togglePlay"
          class="focus:outline-none"
          :title="paused ? 'Reproducir audio' : 'Pausar audio'"
        >
          <img
            v-show="paused"
            class="w-16"
            src="media/play.png"
            alt="Reproducir"
          />
          <img
            v-show="!paused"
            class="w-16"
            src="media/pause.png"
            alt="Pausar"
          />
        </button>
        <div class="font-lato leading-tight px-2">
          <p class="text-wild-blue-yonder">
            Escucha el <strong>In Memoriam</strong>
          </p>
          <p class="text-sizzling-red">
            <strong>{{ victim.fullname }}</strong>
          </p>
        </div>
        <button
          @click="toggleSound"
          class="focus:outline-none"
          :title="muted ? 'Activar sonido' : 'Desactivar sonido'"
        >
          <img
            v-show="!muted"
            class="w-10"
            src="media/sound-on.png"
            alt="Volumen activo"
          />
          <img
            v-show="muted"
            class="w-10"
            src="media/sound-off.png"
            alt="Volumen no activo"
          />
        </button>
      </div>
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
  head() {
    return {
      title: this.victim.fullname,
    };
  },
  data() {
    return {
      player: null,
      paused: true,
      muted: false,
    };
  },
  mounted() {
    this.player = new Audio("media/audio.mp3");
  },
  methods: {
    togglePlay() {
      if (this.player.paused) {
        this.player.play();
      } else {
        this.player.pause();
      }
      this.paused = this.player.paused;
    },
    toggleSound() {
      if (this.muted) {
        this.player.volume = 1;
      } else {
        this.player.volume = 0;
      }
      this.muted = !this.muted;
    },
  },
};
</script>

<style lang="postcss">
#audio-player::before {
  @apply absolute border border-wild-blue-yonder rounded-lg h-full;
  content: "";
  left: 2rem;
  right: 1.25rem;
  z-index: -1;
}
</style>
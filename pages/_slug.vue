<template>
  <div class="w-full mx-auto sm:max-w-lg text-platinum">
    <nav class="pt-2">
      <nuxt-link to="/" class="flex items-center text-sm">
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
    <!-- In memoriam -->
    <div
      class="md-content"
      v-html="inMemoriam"
    ></div>
    <p class="text-center my-6">* * *</p>
    <div class="font-charter text-lg" v-html="status"></div>
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
          class="focus:outline-none w-16"
          :title="paused ? 'Reproducir audio' : 'Pausar audio'"
        >
          <img v-show="paused" src="media/play.png" alt="Reproducir" />
          <img v-show="!paused" src="media/pause.png" alt="Pausar" />
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
          class="focus:outline-none w-10"
          :title="muted ? 'Activar sonido' : 'Desactivar sonido'"
        >
          <img v-show="!muted" src="media/sound-on.png" alt="Volumen activo" />
          <img
            v-show="muted"
            src="media/sound-off.png"
            alt="Volumen no activo"
          />
        </button>
      </div>
    </div>
    <div
      class="w-2/3 border-t border-black mx-auto my-12 border-opacity-25"
    ></div>
    <div class="flex justify-center space-x-8 items-end">
      <div class="flex flex-col">
        <div class="w-20 h-20 bg-gray-400 rounded-full mx-auto"></div>
        <p class="font-playfair text-center leading-tight mt-2">
          <span class="block">{{ previousVictim.Nombre }}</span>
          <span>{{ previousVictim.Apellidos }}</span>
        </p>
        <nuxt-link
          :to="`/${previousVictim.slug}`"
          class="mt-3 flex items-center font-lato font-bold text-wild-blue-yonder text-sm"
        >
          <img class="w-10" src="media/previous.png" alt="Anterior" />
          <span>Anterior</span>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/">
          <img src="media/home.png" alt="" />
        </nuxt-link>
      </div>
      <div class="flex flex-col">
        <div class="w-20 h-20 bg-gray-400 rounded-full mx-auto"></div>
        <p class="font-playfair text-center leading-tight mt-2">
          <span class="block">{{ nextVictim.Nombre }}</span>
          <span>{{ nextVictim.Apellidos }}</span>
        </p>
        <nuxt-link
          :to="`/${nextVictim.slug}`"
          class="mt-3 flex items-center font-lato font-bold text-sizzling-red text-sm"
        >
          <span>Siguiente</span>
          <img class="w-10" src="media/next.png" alt="Anterior" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
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
      status: "",
      inMemoriam: "",
    };
  },
  created() {
    const md = new MarkdownIt();
    this.inMemoriam = md.render(this.victim.texto_in_memoriam);
    this.status = md.render(this.victim.estado_proceso);
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

.md-content {
  @apply text-lg font-charter mt-12;
}

.md-content a {
  @apply underline;
}

.md-content strong {
  @apply font-bold
}

.md-content blockquote {
  @apply text-right;
}

.md-content h2 {
  @apply font-playfair text-2xl text-center my-10;
}

.md-content h2 ~ * {
  @apply mt-6;
}
</style>
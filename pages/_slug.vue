<template>
  <div class="w-full mx-auto sm:max-w-xl text-platinum">
    <img :src="victim.enlace_imagen" class="w-full md:w-56 mt-12 mx-auto" alt="">
    <div class="text-sizzling-red flex flex-col items-start relative mt-12">
      <p class="font-lato text-xl">{{ victim.Edad }} años</p>
      <img
        src="media/murdered.png"
        class="absolute w-64 right-0"
        style="top: 1rem; z-index: -1"
      />
      <div class="w-8 border-b border-sizzling-red"></div>
      <h1 class="text-3xl md:text-5xl leading-tight font-playfair mt-2 font-extrabold">
        <span class="block">{{ victim.Nombre }}</span>
        <span>{{ victim.Apellidos }}</span>
      </h1>
    </div>
    <!-- In memoriam -->
    <div class="md-content" v-html="inMemoriam"></div>
    <p class="text-center my-6">* * *</p>
    <div class="font-charter text-lg" v-html="status"></div>
    <div class="text-center mt-12">
      <iframe v-if="victim.audio" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" :src="victim.audio"></iframe>
      <!-- <div
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
      </div> -->
    </div>
    <div
      class="w-2/3 border-t border-black mx-auto my-12 border-opacity-25"
    ></div>
    <div class="flex justify-center space-x-8 items-end">
      <nuxt-link
        :to="`/${previousVictim.slug}`"
        class="mt-3 flex flex-col items-center font-lato font-bold"
      >
        <img
          class="w-20 h-20 rounded-full object-center object-cover"
          :src="previousVictim.enlace_imagen"
          alt=""
        />
        <p class="font-playfair text-center leading-tight mt-2 font-medium">
          <span class="block">{{ previousVictim.Nombre }}</span>
          <span>{{ previousVictim.Apellidos }}</span>
        </p>
        <div class="text-sm flex items-center text-wild-blue-yonder mt-2">
          <img class="w-10" src="media/previous.png" alt="Anterior" />
          <span>Anterior</span>
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <img src="media/home.png" alt="" />
      </nuxt-link>
      <nuxt-link
        :to="`/${nextVictim.slug}`"
        class="mt-3 flex flex-col items-center font-lato font-bold"
      >
        <img
          class="w-20 h-20 rounded-full object-center object-cover"
          :src="nextVictim.enlace_imagen"
          alt=""
        />
        <p class="font-playfair text-center leading-tight mt-2 font-medium">
          <span class="block">{{ nextVictim.Nombre }}</span>
          <span>{{ nextVictim.Apellidos }}</span>
        </p>
        <div class="text-sm flex items-center text-sizzling-red mt-2">
          <span>Siguiente</span>
          <img class="w-10" src="media/next.png" alt="Anterior" />
        </div>
      </nuxt-link>
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
  @apply font-bold;
}

.md-content blockquote {
  @apply text-right;
}

.md-content h2 {
  @apply font-playfair text-2xl text-center my-10 italic font-bold;
}

.md-content h2 ~ * {
  @apply mt-6;
}

.md-content h3 {
  @apply font-playfair text-xl font-bold;
}

@screen md {
  .md-content {
    @apply text-xl;
  }
}
</style>
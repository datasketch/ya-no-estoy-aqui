<template>
  <div>
    <div class="step px-4">
      <div ref="wrapper" class="sticky top-0" style="z-index: -1">
        <video
          src="media/cover.mp4"
          class="w-full h-screen object-center object-contain"
          style="z-index: -1"
          poster="media/video-poster.png"
          autoplay
          muted
          playsinline
        ></video>
      </div>
      <div style="margin-top: -100vh">
        <div
          class="min-h-screen flex flex-col justify-center"
          style="margin-bottom: 50vh"
        >
          <img
            class="w-2/3 md:w-1/4 mx-auto"
            src="media/title.png"
            alt="Ya no estoy aquí"
          />
        </div>
        <div class="min-h-screen flex flex-col text-center justify-center pb-12">
          <h1
            class="text-4xl lg:text-6xl font-playfair font-extrabold leading-tight text-english-violet"
          >
            Perfiles de <br />
            mujeres asesinadas <br />
            en pandemia
          </h1>
          <img
            class="mx-auto w-40 lg:w-56 mt-4"
            src="media/cp-feminista.png"
            alt="Logo Cuestión Pública Feminista"
          />
          <div
            class="w-1/2 border-t border-black mx-auto my-12 border-opacity-25"
          ></div>
          <div class="max-w-lg mx-auto">
            <p class="font-charter text-english-violet text-lg lg:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              numquam sint officiis suscipit mollitia veniam alias consequatur
              explicabo maxime molestias consectetur ad, deserunt magnam,
              reprehenderit quasi necessitatibus! Doloribus, maiores nostrum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <section id="intro" class="px-4 min-h-screen table w-full">
      <div class="table-cell align-middle">
        <img class="w-64 mx-auto" src="media/title.png" alt="Ya no estoy aquí" />
        <p class="font-playfair font-extrabold text-center text-2xl text-sizzling-red">
          Perfiles de mujeres asesinadas en pandemia
        </p>
        
      </div>
    </section> -->
    <!-- <section class="px-4 py-6">
      <div class="w-10/12 mx-auto">
        
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
    </section> -->
  </div>
</template>

<script>
import scrollama from "scrollama";
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
  mounted() {
    const scroller = scrollama();
    scroller
      .setup({
        progress: true,
        offset: 0,
        step: ".step",
      })
      .onStepProgress(({ progress }) => {
        this.$refs.wrapper.style.opacity = 1 - progress * 2;
      });
  },
};
</script>

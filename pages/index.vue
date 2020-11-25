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
        <div
          class="min-h-screen flex flex-col text-center justify-center pb-12"
        >
          <h1
            class="text-4xl lg:text-5xl font-playfair font-extrabold leading-tight text-english-violet"
          >
            Perfiles de <br />
            mujeres asesinadas <br />
            en pandemia
          </h1>
          <img
            class="mx-auto w-40 lg:w-40 mt-4"
            src="media/cp-feminista.png"
            alt="Logo Cuestión Pública Feminista"
          />
          <div
            class="w-1/2 border-t border-black mx-auto my-12 border-opacity-25"
          ></div>
          <div class="max-w-lg mx-auto">
            <p class="font-charter text-english-violet text-base lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              numquam sint officiis suscipit mollitia veniam alias consequatur
              explicabo maxime molestias consectetur ad, deserunt magnam,
              reprehenderit quasi necessitatibus! Doloribus, maiores nostrum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <section class="px-4 pb-6">
      <div class="max-w-lg mx-auto">
        <div class="flex flex-col items-center">
          <div class="h-16 border-sizzling-red border-r w-0"></div>
          <div class="leading-none text-center font-playfair text-5xl">
            <p class="text-sizzling-red text-opacity-50">20</p>
            <p class="text-sizzling-red font-lato text-sm font-black">
              Perfiles
            </p>
            <p class="text-sizzling-red text-opacity-50 -mt-3">20</p>
          </div>
        </div>
        <ul class="space-y-2 mt-12 font-charter text-english-violet text-lg">
          <li v-for="v in victims" :key="v.slug">
            <nuxt-link
              :to="`/${v.slug}`"
              :title="v.fullname"
              class="hover:text-sizzling-red focus:text-sizzling-red"
            >
              {{ v.fullname }} - {{ v["Edad"] }} años
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import scrollama from "scrollama";
import slugify from "slugify";
import { getData } from "~/api";

export default {
  head() {
    return {
      title: "Ya no estoy aquí",
    };
  },
  async asyncData() {
    const { victims, error } = await getData();
    if (error !== null) {
      console.log(error);
    }
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

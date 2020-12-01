<template>
  <div class="step px-4">
    <div ref="wrapper" class="sticky top-0" style="z-index: -1">
      <img
        src="media/cover.gif"
        class="w-full h-screen object-center object-contain"
        style="z-index: -1"
      />
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
          class="text-4xl lg:text-5xl font-playfair font-extrabold leading-tight text-platinum"
        >
          In memoriam de <br />
          mujeres asesinadas <br />
          en pandemia
        </h1>
        <img
          class="mx-auto w-40 lg:w-40 mt-4"
          src="media/cp-feminista.png"
          alt="Logo Cuestión Pública Feminista"
        />
        <div
          class="w-1/2 border-t-2 border-platinum mx-auto my-12 border-opacity-25"
        ></div>
        <div class="max-w-lg mx-auto">
          <p class="font-charter text-platinum text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In numquam
            sint officiis suscipit mollitia veniam alias consequatur explicabo
            maxime molestias consectetur ad, deserunt magnam, reprehenderit
            quasi necessitatibus! Doloribus, maiores nostrum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scrollama from "scrollama";

export default {
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

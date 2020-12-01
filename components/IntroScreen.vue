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
        <h1 class="text-8xl text-maximum-purple font-playfair leading-none text-center" style="color: #6c3d7e">
          <span class="italic inline-flex relative">
            Ya no
            <span class="absolute w-full h-1 bg-red-500 bg-opacity-50 transform translate-y-1/2 top-1/2"></span>
          </span>
          <span class="block text-sizzling-red text-opacity-75">estoy</span>
          <span class="block text-sizzling-red text-opacity-75">aquí</span>
        </h1>
      </div>
      <div class="min-h-screen flex flex-col justify-center pb-12">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-playfair font-extrabold leading-tight text-platinum text-center"
        >
          In memoriam <br />
          de mujeres asesinadas <br />
          en pandemia
        </h1>
        <img
          class="mx-auto w-40 lg:w-40 mt-12"
          src="media/cp-feminista.png"
          alt="Logo Cuestión Pública Feminista"
        />
        <div
          class="w-1/2 border-t-2 border-platinum mx-auto my-16 border-opacity-25"
        ></div>
        <div class="max-w-xl mx-auto font-charter text-platinum space-y-6 lg:text-lg">
          <p>
            Toda escena de un feminicidio grita. Deja indicios regados como migas de pan, que parecen estallar en llanto: la sangre, las heridas, los abusos en el cuerpo, el arma usada, las denuncias previas, las cámaras de video ubicadas en los postes de luz que guardan trazos de los recorridos de ellas antes de la tragedia. Incluso las aguas, río arriba, anuncian las circunstancias de los hechos; la tierra, el barrio, la esquina que ve por última vez el cuerpo. Todo parece una señal, un mensaje de la muerte.
          </p>
          <p>
            Pero no deja rastro de lo más importante: la vida de ellas. El feminicidio logra su cometido, borra quiénes fueron, qué querían lograr, la valentía con la que enfrentaron los fracasos, las sonrisas de las niñas, el cariño de mamá, la alegría de amar.  Porque cuando las matan nos dejan —a todas las mujeres— en un bando de una guerra que no escogimos y que, para colmo, se libra en silencio y oscuridad. 
          </p>
          <p>
            Una vez sucede, la víctima gira en el contador de feminicidios y aumenta la cifra que con el pasar de los días, especialmente los fines de semana, se nutre copiosamente. Mientras quedan flotando las imágenes del horror que la prensa registra de los hechos: un estrangulamiento, una violación, el arma apuntando a la cabeza, el gatillo que dispara, el puñal que se hunde sin compasión, la aparición del cuerpo cercenado de la que fue reportada desaparecida, el cuerpo lacerado que ha quedado en casa tras el ataque con machete. Queda también el dolor de las familias sin madres, sin hijas y sin hermanas ahogadas en el estruendo de caer en las estadísticas, en la pandemia feminicida: más de 500 mujeres son asesinadas en Colombia al año, según cifras de Medicina Legal y el <a href="https://observatoriofeminicidioscolombia.org/" target="_blank" rel="noopener noreferrer" class="text-sizzling-red">Observatorio de Feminicidios</a>. Durante la cuarentena por COVID-19 más de 240 mujeres, que se guardaron en sus casas por un virus, ya no están. 
          </p>
          <iframe src="https://datawrapper.dwcdn.net/XJaHE/2/" frameborder="0" style="height: 354px" class="w-full"></iframe>
          <p>
            No se puede afirmar que hubieran podido escapar y sobrevivir sin el decreto de emergencia que las encerró e hizo de sus lugares habitacionales el ambiente perfecto para el crimen, porque si se comparan las estadísticas con las cifras del año pasado, este año tiene un porcentaje de reducción. Por supuesto que no se puede contar esto sin un taco en la garganta, porque este mar de víctimas se produce en calma y sin que el Gobierno, el Estado y la sociedad se pellizque  lo suficiente como para detener la masacre. 
          </p>
          <iframe src="https://datawrapper.dwcdn.net/WtRQc/1/" frameborder="0" class="w-full" style="height: 500px"></iframe>
          <p>
            La meta es lograr la contracara del feminicidio: sembrar vida donde dejaron tierra muerta. Buscamos revertir el silencio que deja el asesino sobre la víctima y reemplazarlo por anécdotas y recuerdos que sus familiares y amigos aporten. ¿Con qué anécdota quiere que ella sea recordada?, ¿cómo era?, ¿qué sueños tenía? Son algunas de las preguntas que guían la construcción de los perfiles in memoriam. También esperamos reparar aquellos titulares o notas de prensa en las que fueron revictimizadas o cuyas narraciones tuvieron benevolencia hacia el agresor.
          </p>
          <p>
            Sobre ese cementerio de mujeres hoy sembramos flores. Este espacio web llamado <strong class="font-playfair"><span class="italic line-through">Ya no</span> estoy aquí</strong>  irá floreciendo con las historias que nos vayan contando los familiares. Con sus anécdotas, este propósito llegará a ser, muy pronto, un espacio de memoria y reivindicación.
          </p>
          <p>
            Mientras salimos del silencio, te invitamos a leer y a compartir en redes los in memoriam de mujeres que fueron valientes, amorosas, sonrientes.  Y si quieres contactarnos para reconstruir la historia de tu familiar y amiga, escríbenos al correo electrónico: <a href="mailto:yanoestoyaqui.cuestionpublica@gmail.com" class="text-sizzling-red">yanoestoyaqui.cuestionpublica@gmail.com</a>. Esta labor de búsqueda estará vigente hasta hacer de ellas las siemprevivas.
          </p>
          <p class="text-center">
            <nuxt-link to="/metodologia" class="bg-sizzling-red px-3 py-2 inline-block rounded leading-none font-lato">Metodologia</nuxt-link>
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
        this.$refs.wrapper.style.opacity = 1 - progress * 2.5;
      });
  },
};
</script>

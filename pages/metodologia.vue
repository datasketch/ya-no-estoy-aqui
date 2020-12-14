<template>
  <div class="w-full mx-auto sm:max-w-xl text-platinum">
    <nav class="pt-2">
      <nuxt-link to="/" class="flex items-center text-sm font-playfair">
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
    <div class="mt-12 text-lg font-charter space-y-6 md:text-xl">
      <h2
        class="font-playfair text-3xl text-center my-10 text-sizzling-red md:text-4xl"
      >
        Metodología <span class="line-through italic">Ya</span> no estoy aquí
      </h2>
      <p>
        Partimos de la construcción de una base de datos de víctimas de
        violencia feminicida, que comprende desde el 24 de marzo hasta el 31 de
        agosto, meses en los que la cuarentena por COVID-19 fue más estricta en
        el país, de acuerdo con los decretos de emergencia que obligaron a toda
        la población a estar aislada obligatoriamente.
      </p>
      <p>
        Nos apoyamos en el Observatorio de Feminicidios y en la labor de medios
        de comunicación como Cerosetenta, RCN Radio, entre otros, que cubrieron
        los feminicidios. Hicimos la lectura y archivo juicioso de todas las
        posibles noticias registradas.
      </p>
      <p>
        De esta manera, logramos identificar en una etapa previa a 237 mujeres
        de todas las edades: adultas mayores, jóvenes y niñas, que ya no están,
        pero que redimimos en cada uno de los nombres que ves aquí. Nuestro
        anhelo es que esos datos nos lleven a encontrar a sus familiares y así
        poder narrar sus historias.
      </p>
      <!-- <p class="text-center">
        <a
          href="https://docs.google.com/spreadsheets/d/1EDoBOrZIh2U58oMGdhz6nMDZSfTqjrQlSbGtKXNoexE/edit#gid=0"
          target="_blank"
          class="bg-sizzling-red px-3 py-2 inline-block rounded leading-none font-lato text-lg"
          >Descargar base de datos</a
        >
      </p> -->
      <iframe
        title="Base de datos - Mujeres víctimas de violencia feminicida"
        aria-label="chart"
        id="datawrapper-chart-3YDqF"
        src="https://datawrapper.dwcdn.net/3YDqF/2/"
        scrolling="no"
        frameborder="0"
        style="width: 0; min-width: 100% !important; border: none"
        height="1372"
      ></iframe>
      <script type="text/javascript">
        !(function () {
          "use strict";
          window.addEventListener("message", function (a) {
            if (void 0 !== a.data["datawrapper-height"])
              for (var e in a.data["datawrapper-height"]) {
                var t =
                  document.getElementById("datawrapper-chart-" + e) ||
                  document.querySelector("iframe[src*='" + e + "']");
                t && (t.style.height = a.data["datawrapper-height"][e] + "px");
              }
          });
        })();
      </script>
      <p>
        Quedó por fuera el registro de 13 casos de mujeres víctimas de violencia
        feminicida a las que no pudimos llegar a sus datos personales como
        nombres, edades y circunstancias precisas de los hechos.
      </p>
      <p>
        Hay otros casos en el que el homicidio fue producto de un robo, una bala
        perdida en medio de enfrentamientos, cuentas de cobro en las que ellas
        terminaron siendo víctimas por razones casi del azar. Esto generó debate
        al interior del equipo periodístico. Nos preguntarnos si era conveniente
        etiquetarlos como feminicidios, pero los incluimos por dos razones
        poderosas: por provenir del Observatorio de Feminicidios, metodología a
        la cual suscribimos y porque, en últimas, a esas mujeres también las
        rodea el silencio, el anonimato, la injusticia y la violencia
        feminicida.
      </p>
      <p>
        La justicia es y será un tema de Fiscalía, jueces y tribunales. Por
        tanto, el foco estará puesto en ellas y quiénes fueron.
      </p>
      <p>
        <span class="font-bold">
          Técnica y tratamiento de los perfiles
          <span class="font-playfair italic">in memoriam</span>:
        </span>
        cada historia fue construida a partir de una búsqueda de familiares y
        amigos de las víctimas de feminicidios. Esta labor fue realizada a
        través de reportería y una campaña en las redes sociales de Cuestión
        Pública, que tuvo como fecha de arranque el 18 de noviembre del 2020. A
        través de post expusimos algunos casos de feminicidio y les contamos de
        nuestra intención de homenaje a las víctimas. Así mismo, les pedimos que
        nos contactaran a través del correo electrónico
        yanoestoyaqui.cuestionpublica@gmail.com, que diera paso a la
        construcción del perfil <span class="italic">in memoriam</span>.
      </p>
      <p>
        Una vez aceptaban construir las historias, éstas se obtenían a través de
        entrevistas telefónicas. No indagamos sobre las circunstancias del
        suceso violento sino sobre el recuerdo más feliz que tuvieran con su
        pariente / amiga y cómo quisieran que fuera recordada. Para cada caso se
        hizo, de la mano con los familiares y amigos de la víctima, una labor de
        verificación de datos como su nombre y edad.
      </p>
      <p>
        Cada testimonio brindado recibió un tratamiento de edición de estilo y
        se agregan algunos datos de contexto como fechas y lugares.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Metodología",
    };
  },
};
</script>
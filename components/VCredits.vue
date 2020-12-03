<template>
  <div class="flex flex-col items-center text-platinum font-lato mt-12 max-w-lg mx-auto">
    <div class="h-16 border-sizzling-red border-r w-0"></div>
    <div
      class="leading-none text-center font-playfair text-4xl mt-4 font-medium"
    >
      <p class="text-sizzling-red text-opacity-75">Créditos</p>
    </div>
    <div class="space-y-8 mt-8">
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">Dirección</h3>
        <PersonCredit name="Diana Salinas" twitter="DianaSalinasP" />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">
          Coordinación y Edición
        </h3>
        <PersonCredit name="Diana Salinas" />
        <PersonCredit name="Ingrid Ramírez" twitter="_iramir_" />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">Edición jurídica</h3>
        <PersonCredit name="Camilo Vallejo" twitter="CamiloVallejoG" />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">
          Reportería e investigación
        </h3>
        <PersonCredit
          name="Antonia Montoya Castaño"
          twitter="antoniamontoyac"
        />
        <PersonCredit name="Salomé Acevedo Estrada" twitter="flamma.m" />
        <PersonCredit name="María Angélica García Puerto" twitter="_amariag" />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">Textos</h3>
        <PersonCredit name="Diana Salinas" />
        <PersonCredit name="Antonia Montoya Castaño" />
        <PersonCredit name="María Angélica García Puerto" />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">Base de datos</h3>
        <PersonCredit name="María Angélica García Puerto" />
        <PersonCredit name="Ingrid Ramírez" />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">Diseño</h3>
        <PersonCredit name="Heidy González" twitter="HeidyBlue9" />
        <PersonCredit name="Salomé Acevedo Estrada" />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">
          Webmaster y Edición de audios
        </h3>
        <PersonCredit name="Valentina Hoyos G" twitter="ValentinaHoyosG" />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">Lectura audios</h3>
        <PersonCredit
          name="Claudia Báez - In memoriam de Ana Mercedes Rivas Ramos"
        />
        <PersonCredit
          name="Vivian Ospina Tascón - In memoriam de Michel Yulieth Lara García"
        />
        <PersonCredit
          name="Danna Melisa Cardona Ferrer - In memoriam de Daniela Quiñonez Pimienta"
        />
        <PersonCredit
          name="Juanita Bejarano - In memoriam de Luz Amparo García Álvarez"
        />
        <PersonCredit
          name="Carlos Alberto Cortés - In memoriam de Esther Asendra Salcedo"
        />
        <PersonCredit
          name="Diana Patricia Castañeda Guerrero - In memoriam de Cindy Vanesa Piña Oyola y Katia Johana Ariza Macías"
        />
        <PersonCredit
          name="Andrés Felipe Lasprilla Paz - In memoriam de Meiby Beatriz Suescun Torres"
        />
        <PersonCredit
          name="Diana Salinas - In memoriam de Alba Lucía Caro Bedoya"
        />
      </div>
      <div class="text-2xl text-center">
        <h3 class="font-charter text-wild-blue-yonder">Desarrollo web</h3>
        <PersonCredit name="Datasketch" twitter="datasketch" />
      </div>
    </div>
  </div>
</template>

<script>
import PersonCredit from "~/components/PersonCredit";

export default {
  components: { PersonCredit },
};
</script>
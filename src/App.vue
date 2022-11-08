<template>
  <div class="start">
    <NavBar></NavBar>
    <i class="fa-solid fa-chevrons-down"></i>
  </div>
  <section id="about">
    <div class="bg-[#4B506E] px-6 py-6">
      <span class="font-quicksand text-4xl text-white font-bold">About</span>
      <p class="font-quicksand text-sm md:text-md lg:text-xl py-4 text-white leading-loose">
        Wenn man eine Immobilie kaufen möchte, geht das fast immer über einen Makler bzw. über das
        Internet, wo allerdings auch ein Makler hinter den Inseraten steht. Ist es also von Vorteil,
        die Kommunikation von Erwerbern und Suchern auf einer Webseite zu gestalten. Des Weiteren
        stellt es sich oft als schwierig heraus, mehrere Immobilien, die nahe beieinander liegen zu
        besichtigen oder die Umgebung („das Viertel“), ohne Anfrage an den Makler zu besichtigen.
        <br /><br>
        Mit ImmoRadar möchten wir ein System schaffen, welches genau diese Schwierigkeiten
        beseitigt. Als Verkäufer kann man direkt über unserer Plattform Immobilien an Kunden
        vermitteln. Somit ist man nicht auf eine Immobilienvertriebsfirma angewiesen. Um die
        Suche/Besichtigung von Immobilien zu erleichtern, werden potentiellen Käufern auf einer
        Karte zum Verkauf stehende Immobilien angezeigt. Wenn Immobilien ins Auge stechen, kann man
        den Verkäufer direkt kontaktieren und sich einen Termin zur Besichtigung ausmachen.
      </p>
    </div>
  </section>
  <section id="roadmap">
    <div class="bg-[#4B506E] px-6 py-6">
      <span class="font-quicksand text-4xl text-white font-bold">Roadmap</span>
      <div class="flex justify-center py-4">
        <img class="" src="/images/roadmap.png" alt="" />
      </div>
    </div>
  </section>
  <section id="team">
    <div class="bg-[#4B506E] px-6 py-6">
      <span class="font-quicksand text-4xl text-white font-bold">Team</span>
      <TheTeam class="py-4"></TheTeam>
    </div>
  </section>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import TheTeam from '@/components/TheTeam.vue';
import 'flowbite';
</script>

<style scoped>
.start {
  background-image: url('@/assets/Start.png');
  min-height: 100vh;
}
</style>

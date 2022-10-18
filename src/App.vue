<template>
  <div class="start">
    <NavBar></NavBar>
    <i class="fa-solid fa-chevrons-down"></i>
  </div>
  <section id="about">
    <div class="bg-[#4B506E] px-6 py-6">
      <span class="font-quicksand text-4xl text-white font-bold">About</span>
      <p class="font-quicksand text-2xl py-4 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt exercitationem,
        voluptates, fugiat aut excepturi, architecto adipisci nihil aliquid quam provident vero
        natus officia pariatur nemo numquam. Aut veniam aliquam rem! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Incidunt exercitationem, voluptates, fugiat aut excepturi,
        architecto adipisci nihil aliquid quam provident vero natus officia pariatur nemo numquam.
        Aut veniam aliquam rem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        exercitationem, voluptates, fugiat aut excepturi, architecto adipisci nihil aliquid quam
        provident vero natus officia pariatur nemo numquam. Aut veniam aliquam rem! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Incidunt exercitationem, voluptates, fugiat
        aut excepturi, architecto adipisci nihil aliquid quam provident vero natus officia pariatur
        nemo numquam. Aut veniam aliquam rem!
      </p>
    </div>
  </section>
  <section id="roadmap">
    <div class="bg-[#4B506E] px-6 py-6">
      <span class="font-quicksand text-4xl text-white font-bold">Roadmap</span>
      <div class="flex justify-center py-4">
        <img class="" src="https://dummyimage.com/1024x720/ffffff/000000.png&text=Roadmap" alt="" />
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

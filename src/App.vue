<template>
  <div class="start">
    <NavBar></NavBar>
    <i class="fa-solid fa-chevrons-down"></i>
  </div>
  <div class="bg-[#4B506E] px-6 py-6">
    <span class="font-quicksand text-4xl text-white font-bold">About</span>
    <p class="font-quicksand text-2xl py-4 text-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt exercitationem, voluptates,
      fugiat aut excepturi, architecto adipisci nihil aliquid quam provident vero natus officia
      pariatur nemo numquam. Aut veniam aliquam rem! Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Incidunt exercitationem, voluptates, fugiat aut excepturi, architecto
      adipisci nihil aliquid quam provident vero natus officia pariatur nemo numquam. Aut veniam
      aliquam rem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
      exercitationem, voluptates, fugiat aut excepturi, architecto adipisci nihil aliquid quam
      provident vero natus officia pariatur nemo numquam. Aut veniam aliquam rem! Lorem ipsum dolor
      sit, amet consectetur adipisicing elit. Incidunt exercitationem, voluptates, fugiat aut
      excepturi, architecto adipisci nihil aliquid quam provident vero natus officia pariatur nemo
      numquam. Aut veniam aliquam rem!
    </p>
  </div>
  <div class="bg-[#4B506E] px-6 py-6">
    <span class="font-quicksand text-4xl text-white font-bold">Roadmap</span>
    <img
      class="align-middle"
      src="https://dummyimage.com/1024x720/ffffff/000000.png&text=Roadmap"
      alt=""
    />
  </div>
  <div class="bg-[#4B506E] px-6 py-6">
    <span class="font-quicksand text-4xl text-white font-bold">Team</span>
    <TheTeam></TheTeam>
  </div>
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

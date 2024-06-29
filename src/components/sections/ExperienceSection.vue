<template>
  <div class="flex pt-24 md:pt-0 w-full pb-16 bg-gradient-to-b from-green to-light-blue justify-center">
    <div id="experience" class="flex w-full flex-col items-center px-4 text-left">
      <h1 class="w-full flex justify-center text-4xl">
        Experience
      </h1>
      <ExperienceGraph/>
    </div>
  </div>
</template>
<script setup>
import ExperienceGraph from "@components/experience/ExperienceTimeLine.vue";
</script>
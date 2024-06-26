<template>
  <div class="flex items-center justify-center h-[calc(100vh-74px)]">
    <div id="experience" class="flex flex-col items-center justify-center w-full max-w-4xl px-4 text-left">
      <h1 class="w-full flex justify-center text-4xl mb-4">
        Experience
      </h1>
      <ExperienceGraph/>
    </div>
  </div>
</template>
<script setup>
import ExperienceGraph from "@components/ExperienceSection/ExperienceGraph.vue";
</script>
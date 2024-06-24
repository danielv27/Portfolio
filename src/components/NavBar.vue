<template>
  <div class="mx-12 my-6 flex justify-between">
    <div class="flex ml-2 mt-2">
      <img class="w-32 mr-4 object-contain" :src="logo" alt="Logo"/>

    </div>
    <div class="flex items-center gap-3 mr-2">
      <div>About</div>
      <div>Experience</div>
      <div>Projects</div>
      <div>Contact</div>
    </div>


  </div>
</template>

<script setup lang="ts">
import logo from '@assets/logo.png'

</script>
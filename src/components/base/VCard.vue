<template>
  <div class="flex flex-col p-6 bg-lighter-dark-blue rounded-2xl h-80 w-80">
    <div class="text-3xl mb-2">
    <slot class="" name="title"/>
    </div>
    <div>
      <slot name="content"/>
    </div>
    <div class="mt-auto">
      <slot name="footer"/>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>
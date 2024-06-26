<template>
  <div class="bg-light-black opacity-40 rounded-2xl h-80 w-80">
    <div class="mt-4 ml-4 text-3xl">
    <slot name="title"/>
    </div>
    <div>
      <slot name="content"/>
    </div>
    <div>
      <slot name="footer"/>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>
<template>
  <VTimeline/>
</template>

<script setup lang="ts">
import VTimeline from "@components/base/VTimeline.vue";
const example1 = {
  title: "Capisoft",
  content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.",
};
const example2 = {
  title: "Title example 2",
  content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.",
};
const example3 = {
  title: "Title example 3",
  content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.",
};
const items = [example1, example2, example3];
</script>
<style scoped>

</style>


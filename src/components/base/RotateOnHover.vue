<template>
  <div ref="target" :style="{
    transform: transform,
    transition: 'transform 0.2s',
  }">
  <slot/>
</div>
</template>
<script setup lang="ts">
import {computed, ref} from "vue";
import {useMouseInElement} from "@vueuse/core";

const target = ref(null);
const {elementX, elementY, isOutside, elementHeight, elementWidth} = useMouseInElement(target);

const transform = computed(() => {
  if (isOutside.value) {
    return '';
  }
  const MAX_ROTATION = 4;

  const rotationX = (
      (MAX_ROTATION / 2) -
      (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);

  const rotationY = (
      (elementX.value / elementWidth.value) * MAX_ROTATION -
      (MAX_ROTATION / 2)
  ).toFixed(2);
  console.log(elementWidth);
  return `perspective(${elementWidth.value}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
})
</script>
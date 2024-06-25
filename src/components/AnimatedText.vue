<template>
<!--  <span ref="target">{{ text }}</span>-->
  <span
      ref="wordArrayRef"
      v-for="word in textArray">{{ word }}&nbsp;</span>
</template>

<script setup lang="ts">

import {computed, onMounted, ref} from "vue";
import {useMotion} from "@vueuse/motion";

interface Props {
  text: string;
}




const props = defineProps<Props>()
const textArray = computed(() => props.text.split(' '));

const wordArrayRef = ref<HTMLSpanElement[]>();
const target = ref();

// const motionInstance = useMotion(wordArrayRef, {
//   initial: {
//     opacity: 0,
//     y: 100
//   },
//   enter: {
//     opacity: 1,
//     y: 0
//   }
// })

onMounted(() => console.log(wordArrayRef.value?.forEach((spanTag, index) => {
const motionInstance = useMotion(spanTag, {
  initial: {
    opacity: 0,
    y: 0
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 100 + 100 * index
    }
  },
})
})))

</script>
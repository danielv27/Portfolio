<template>
  <div class="flex flex-col items-center mx-20 mt-8">
    <h1 ref="headingRef" class="text-4xl mb-6">Expertise</h1>
    <div class="flex gap-4 justify-between">
      <VCard ref="card1Ref">
        <template v-slot:title>
          Frontend
        </template>
        <template v-slot:content>
          BLBLA
        </template>
        <template v-slot:footer>
          ASDQWD
        </template>
      </VCard>
      <VCard ref="card2Ref">
        <template v-slot:title>
          Backend
        </template>
        <template v-slot:content>
          BLBLA
        </template>
        <template v-slot:footer>
          DevOps
        </template>
      </VCard>
      <VCard ref="card3Ref">
        <template v-slot:title>
          DevOps
        </template>
        <template v-slot:content>
          BLBLA
        </template>
        <template v-slot:footer>
          ASDQWD
        </template>
      </VCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import VCard from "@components/base/VCard.vue";
import {handleError, ref} from "vue";
import {useMotion} from "@vueuse/motion";

interface Props {
  delay: number;
}

const props = defineProps<Props>();

const headingRef = ref();

const card1Ref = ref();
const card2Ref = ref();
const card3Ref = ref();

useMotionCustom(headingRef, 0);
useMotionCustom(card1Ref, 300, 0.5);
useMotionCustom(card2Ref, 600, 0.5);
useMotionCustom(card3Ref, 900, 0.5);

function useMotionCustom(element: any, delay: number, opacity = 1) {
  useMotion(element, {
    initial: {
      opacity: 0,
      y: 10,
    },
    visibleOnce: {
      opacity,
      y: 0,
      transition: {
        delay: props.delay + delay
      }
    }
  })
}


</script>
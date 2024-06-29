<template>
  <div class="flex bg-gradient-to-b from-dark-blue to-green justify-center h-144">
    <div id="about" class="block md:flex w-full md:w-2/3 px-4 text-left text-white mt-16 gap-12">
      <div>
        <h1 ref="headingRef" class="w-full flex text-4xl mb-4">
          About Me
        </h1>
        <section ref="contentRef">
          Hi, my name is Daniel Berzak Verner and I am a full-stack software engineer specializing in frontend development.
          <br><br>
          Alongside love for developing state-of-the-art full-stack software solutions,
          I'm deeply passionate about creating software that not only works well but feels great to use.
          This led me to primarily focus on frontend development, ensuring application components are modular, robust, flexible
          and visually appealing.
          <br><br>
          Along side frontend development, creating full-stack projects helped me establish a firm understanding of other parts of
          the development stack including backend development, with practices like the micro-service architecture and DevOps, incorporating
          practices such as containerization and CI/CD pipelines for both deployment and testing.
        </section>
      </div>
      <img ref="stackImgRef" class="w-48 hidden md:block object-contain self-start" :src="Stack" alt="stack"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Stack from '@assets/stack-expanded.png'
import {onBeforeMount, onMounted, ref} from "vue";
import {useMotion} from "@vueuse/motion";
import {useWindowSize} from "@vueuse/core";

const headingRef = ref();
const contentRef = ref();
const stackImgRef = ref();

function useMotionCustom(element: any, delay: number) {
  useMotion(element, {
    initial: {
      opacity: 0,
      y: 10,
    },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 500,
      }
    }
  })
}

const {width} = useWindowSize();
if(width.value >= 1000){
  useMotionCustom(headingRef, 300);
  useMotionCustom(contentRef, 600);
  useMotionCustom(stackImgRef, 1000);
}









</script>
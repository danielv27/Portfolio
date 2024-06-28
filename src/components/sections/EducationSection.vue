<template>
  <div class="flex bg-dark-blue items-center justify-center h-[calc(100vh-74px)]">
    <div id="education" class="flex justify-center w-2/3 px-4 text-left gap-12 items-center">
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
      <img ref="stackImgRef" class="w-48 object-contain" :src="Stack" alt="stack"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Stack from '@assets/stack-expanded.png'
import {ref} from "vue";
import {useMotion} from "@vueuse/motion";

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

useMotionCustom(headingRef, 300);
useMotionCustom(contentRef, 600);
useMotionCustom(stackImgRef, 1000);

</script>
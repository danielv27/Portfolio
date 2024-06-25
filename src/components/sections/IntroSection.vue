<template>
  <div class="flex h-screen items-center justify-center">
    <div class="text-left">

      <!--      <h1>Hi, I'm Daniel. A Full-Stack Engineer</h1>-->
      <div class="flex">
        <AnimatedText
            class="text-3xl"
            text="Hi, I'm Daniel,"
            :delay="400"
            :time-between="180"
        />
        <AnimatedText
            class="text-3xl"
            text="A Full-Stack Engineer"
            :delay="1100"
            :time-between="180"
        />
      </div>
      <div ref="descriptionRef" class="w-128">Welcome to my portfolio! Here, you'll find examples of my work, skills,
        and experience creating innovative software solutions. I'm committed to
        staying up-to-date with the latest technologies and trends in the field, and I
        invite you to explore my portfolio to see what I can offer as a developer.
      </div>

    </div>
  </div>
</template>
<script setup>
import AnimatedText from "@components/AnimatedText.vue";
import {ref} from "vue";
import {useMotion} from "@vueuse/motion";

const descriptionRef = ref();

useMotion(descriptionRef, {
  initial: {
    opacity: 0,
    y: 5,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      delay: 2400,
    }
  },
});

</script>
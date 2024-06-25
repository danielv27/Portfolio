<template>
  <div class="flex gap-20 h-[calc(100vh-100px)] items-center justify-center">
    <img :src="profilePicture" alt="profile" class="w-96 rounded-full border border-light-blue">
    <div class="text-left w-1/2">
      <div class="flex text-4xl">
        <AnimatedText
            text="Hi, I'm Daniel,"
            :delay="400"
            :time-between="180"
        />
        <AnimatedText
            text="A Full-Stack Engineer"
            :delay="1100"
            :time-between="240"
        />
      </div>
      <div ref="descriptionRef" class="text-white text-lg">Welcome to my portfolio! Here, you'll find examples of my work, skills,
        and experience creating innovative software solutions. I'm committed to
        staying up-to-date with the latest technologies and trends in the field, and I
        invite you to explore my portfolio to see what I can offer as a software engineer.
      </div>
    </div>
  </div>
</template>
<script setup>
import AnimatedText from "@components/AnimatedText.vue";
import {ref} from "vue";
import {useMotion} from "@vueuse/motion";
import profilePicture from "@assets/my-photo-grey-bg.jpeg"

const descriptionRef = ref();

useMotion(descriptionRef, {
  initial: {
    opacity: 0,
    y: 5,
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      delay: 2400,
    }
  },
});

</script>
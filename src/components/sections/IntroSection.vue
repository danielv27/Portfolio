<template>
  <div id="intro" class="self-center my-20 mx-40">
    <div class="flex gap-20 items-center">
      <img :src="profilePicture" alt="profile" class="max-w-96 rounded-full border border-green shadow-2xl"/>
      <div class="text-left">
        <div class="flex text-4xl mb-2">
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
        <div ref="descriptionRef" class="text-gray text-lg">
          Welcome to my portfolio! Here, you'll find examples of my work, skills,
          and experience creating innovative software solutions. I'm committed to
          staying up-to-date with the latest technologies and trends in the field, and I
          invite you to explore my portfolio to see what I can offer as a software engineer.
        </div>
      </div>
    </div>
    <ExpertiseCards :delay="3000"/>
  </div>
</template>
<script setup>
import AnimatedText from "@components/base/AnimatedText.vue";
import {ref} from "vue";
import {useMotion} from "@vueuse/motion";
import profilePicture from "@assets/my-photo-grey-bg.jpeg"
import VCard from "@components/base/VCard.vue";
import ExpertiseCards from "@components/ExpertiseCards.vue";

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
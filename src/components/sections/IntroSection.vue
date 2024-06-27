<template>
  <div id="intro" class="self-center my-10 lg:my-20 mx-8 lg:mx-32">
    <img class="absolute w-144 top-28 left-0 lg:top-40 lg:left-10 -z-30" :src="squiggleSVG" alt="squiggle">
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-40 items-center w-full">
      <RotateOnHover>
        <img
            ref="profileImgRef"
            :src="profilePicture"
            alt="profile"
            class="max-w-80 lg:max-w-96 rounded-full border-2 border-green shadow-2xl"
        />
      </RotateOnHover>
      <div class="text-left">
        <div class="flex text-xl lg:text-4xl mb-2">
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
          and experience creating <span class="text-light-blue">innovative software solutions</span>. I'm committed to
          staying up-to-date with the latest technologies and trends in the field, and I
          invite you to explore my portfolio to see what I can offer as a <span class="text-light-blue">software engineer</span>.
        </div>
      </div>
    </div>
    <ExpertiseCards :delay="3000"/>
  </div>
</template>
<script setup>
import AnimatedText from "@components/base/AnimatedText.vue";
import {computed, ref} from "vue";
import {useMotion} from "@vueuse/motion";
import profilePicture from "@assets/my-photo-grey-bg.jpeg"
import ExpertiseCards from "@components/ExpertiseCards.vue";
import squiggleSVG from "@assets/squigglesAndDots.svg"
import RotateOnHover from "@components/base/RotateOnHover.vue";


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
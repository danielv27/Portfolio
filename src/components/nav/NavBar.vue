<template>
  <div class="sticky top-0 left-0 z-30 bg-gradient-to-b  py-4 w-screen flex justify-between bg-dark-blue">
    <div class="flex ml-6">
      <a :href="logoHref">
        <img class="w-16 lg:w-20 mt-1.5 object-contain" :src="logo" alt="Logo"/>
      </a>
    </div>
    <div class="hidden lg:flex items-center gap-6 mr-14 ">
      <a
          v-for="item in navItems"
          :key="item.href"
          class="hover-underline-animation"
          :class="{selected: item.selected}"
          :href="item.href">
        {{ item.label }}
      </a>

      <a :href="resumeFileName" target="_blank">
        <div class="border p-2 transition-colors ease-in duration-900 opacity-100 hover:text-light-blue rounded">
          Resume
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@assets/logo.png'
import {ref, watch} from "vue";
import {useWindowScroll} from "@vueuse/core";
import {isInViewport} from "@utils/viewPort.js";

const { y } = useWindowScroll();

function elementInViewPort(label: string){
  const el = document.getElementById(label.toLowerCase());
  if(! el) {
    return false;
  }
  return isInViewport(el);
}


const navLabels = ['About', 'Experience', 'Education', 'Projects', 'Contact'];

const navItems = ref(navLabels.map(label => ({
  label,
  href: '#' + label.toLowerCase(),
  selected: elementInViewPort(label),
})));

watch(y, () => navItems.value.forEach(navItem => {
    navItem.selected = elementInViewPort(navItem.label);
}));

const logoHref = '#main'
const resumeFileName = 'resume.pdf';

</script>
<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  padding-bottom: 2px;
}

.hover-underline-animation.selected,
.hover-underline-animation:hover {
  color: #66FCF1;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #66FCF1;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation.selected::after,
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

</style>
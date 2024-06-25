<template>
  <div class="sticky top-0 left-0 z-10 mt-5 py-4 w-screen flex justify-between bg-dark-blue">
    <div class="flex ml-6">
      <a href="/">
        <img class="w-20 object-contain" :src="logo" alt="Logo"/>
      </a>

    </div>
    <div class="flex items-center gap-6 mr-14">
      <a
          v-for="item in navItems"
          :key="navItemHref(item)"
          class="hover-underline-animation"
          :href="navItemHref(item)">
        {{ item }}
      </a>

      <a :href="resumeFileName">
        <div class="border p-2 transition-colors ease-in duration-900 opacity-100 hover:text-light-blue rounded">
          Resume
        </div>
      </a>
    </div>


  </div>
</template>

<script setup lang="ts">
import logo from '@assets/logo.png'


const navItems = ['About', 'Experience', 'Education', 'Projects', 'Contact'];

function navItemHref(item: string): string {
  return '#' + item.toLowerCase();
}

const resumeFileName = 'resume.pdf';

</script>
<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  padding-bottom: 2px; /* Add padding to prevent shifting */
}

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

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

</style>
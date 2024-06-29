<template>
  <div class="flex w-[95vw] md:w-1/2 relative">
    <ul class="w-1/12 min-w-28 timeline timeline-vertical text-white">
      <li
          v-for="(entry, index) in entries"
          :key="index"
          class="entry transition ease-in-out delay-75 bg-blue-500 active:text-dark-blue hover:scale-110 duration-300"
          :class="{'text-dark-blue' : currentIndex === index}"
          @mouseenter="setIndex(index)"
      >
        <hr v-if="index !== 0"/>
        <div class="timeline-start">{{ entry.date }}</div>
        <div class="timeline-middle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
          >
            <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
            />
          </svg>
        </div>
        <hr v-if="index !== entries.length - 1"/>
      </li>
    </ul>
    <Transition :duration="550" name="nested">
      <div ref="cardRef" v-show="show" class="absolute mt-5 ml-20 px-6 pt-4 md:pt-14 w-auto h-full bg-dark-blue rounded-b-4xl rounded-r-4xl">
        <div class="inner h-full flex flex-col justify-between">
          <div>
            <h1 class="text-2xl mb-2 md:mb-6">{{ currentEntry.title }}</h1>
            <div v-html="currentEntry.content"></div>
          </div>
          <img class="self-end" :class="currentEntry.iconStyles" :src="currentEntry.icon" :alt="currentEntry.title">
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import vuSvg from '@assets/vu.svg';
import dongItSvg from '@assets/dongIT.svg'
import myLogo from '@assets/logo.png'
import zorgpleinLogo from '@assets/zorgplein-white.png'
import capisoftLogo from '@assets/capiscoft-white.png'
import { computed, onMounted, ref, watch } from 'vue';
import { useWindowScroll } from "@vueuse/core";
import { isInViewport } from "@utils/viewPort.js";

const show = ref(false);
const setShow = (value: boolean) => (show.value = value);

const cardRef = ref();
const { y } = useWindowScroll();

onMounted(() => {
  watch(y, () => setShow(isInViewport(cardRef.value)));
})

const currentIndex = ref<number>(0);
const setIndex = (index: number) => (currentIndex.value = index);

interface Entry {
  date: string;
  title: string;
  content: string;
  icon: string;
  iconStyles?: string;
}

const listStyle = "list-disc ml-3.5"
const entries: Entry[] = [
  {
    date: 'Aug 2023',
    title: 'Software Engineer, DongIT',
    content: `
         <ul class="${listStyle}">
            <li>Migrate projects to modern frontend JavaScript to enhance user experience and optimizes performance</li>
            <li>Implement containerized backend services</li>
            <li>Create CI/CD pipelines for seamless deployment and automated testing</li>
        </ul>`,
    icon: dongItSvg,
    iconStyles: 'max-h-16 mb-1'
  },
  {
    date: 'Nov 2022',
    title: 'Full Stack Developer, Capisoft B.V.',
    content: `
      <ul class="${listStyle}">
        <li>Oversee adaptation between back-end and front-end.</li>
        <li>Supervise, testing and deployment to ensure maintainability and extensibility.</li>
        <li>Incorporate Collaborative agile practices using tools like Trello, and Jira.</li>
      </ul>`,
    icon: capisoftLogo,
    iconStyles: 'max-h-10 mb-4',
  },
  {
    date: 'Nov 2022',
    title: 'Frontend Lead, Zorgplein.online',
    content: `
      <ul class="${listStyle}">
        <li>Overseeing all aspects of the front-end side of a cross-platform mobile application.</li>
        <li>Planning, delegation, deployment, and testing of various components, ensuring high standards.</li>
      </ul>`,
    icon: zorgpleinLogo,
    iconStyles: 'max-h-12 mb-4'
  },
  {
    date: 'Feb 2022',
    title: 'Full Stack Developer, DBV Software Solutions',
    content: `
      <ul class="${listStyle}">
        <li>Worked on several projects using frameworks such as React, React Native, Firebase, and Flutter.</li>
        <li>Created full stack applications that run natively on mobile, desktop, and web.</li>
      </ul>`,
    icon: myLogo,
    iconStyles: 'max-h-16 pb-4'
  },
  {
    date: 'Sep 2021',
    title: 'Teaching Assistant, Vrije Universiteit Amsterdam',
    content: `
      <p>Work with smaller groups of Computer Science and AI students to reinforce the learning process for various courses they take along the year with the main focus on developing knowledge and coding skills.</p>`,
    icon: vuSvg,
    iconStyles: 'max-h-20 max-w-32'
  },
];

const currentEntry = computed(() => entries[currentIndex.value]);
</script>

<style scoped>
li {
  height: 90px;
}

</style>

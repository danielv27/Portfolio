<template>
  <div class="flex w-1/2 h-144">
    <ul class="w-1/12 timeline timeline-vertical text-white">
      <li
          v-for="(entry, index) in entries"
          :key="index"
          class="transition ease-in-out delay-75 bg-blue-500 active:text-dark-blue hover:scale-110 duration-300"
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
      <div ref="cardRef" v-show="show" class="mt-5 px-6 pt-14 w-11/12 h-[73%] bg-dark-blue rounded-b-4xl rounded-r-4xl">
        <div class="inner h-full flex flex-col justify-between">
          <div>
            <h1 class="text-2xl mb-6">{{ currentEntry.title }}</h1>
            <div>{{ currentEntry.content }}</div>
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
import {computed, onMounted, ref, watch} from 'vue';
import {useWindowScroll} from "@vueuse/core";
import {isInViewport} from "@utils/viewPort.ts";

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

const entries: Entry[] = [
  {
    date: 'Sep 2021',
    title: 'Teaching Assistant, Vrije Universiteit Amsterdam',
    content: 'Work with smaller groups of Computer Science and AI students to reinforce the learning process for various courses they take along the year with the main focus on developing knowledge and coding skills.',
    icon: vuSvg,
    iconStyles: 'max-h-20'
  },
  {
    date: 'Feb 2022',
    title: 'Full Stack Developer, DBV Software Solutions',
    content: '',
    icon: myLogo,
    iconStyles: 'max-h-16 pb-4'
  },
  {
    date: 'Nov 2022',
    title: 'Frontend Lead, Zorgplein.online',
    content: '',
    icon: zorgpleinLogo,
    iconStyles: 'max-h-12 mb-4'

  },
  {
    date: 'Nov 2022',
    title: 'Full Stack Developer, Capisoft B.V.',
    content: '',
    icon: capisoftLogo,
    iconStyles: 'max-h-10 mb-4',
  },
  {
    date: 'Aug 2023',
    title: 'Software Engineer, DongIT',
    content: '',
    icon: dongItSvg,
    iconStyles: 'max-h-16 mb-1'
  }
];


const currentEntry = computed(() => entries[currentIndex.value]);
</script>

<style scoped>
li {
  height: 90px;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>

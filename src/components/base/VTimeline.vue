<template>
  <div @mouseenter="setShow(true)" @mouseleave="setShow(false)" class="flex w-1/2 h-144">
    <ul class=" w-1/12 timeline timeline-vertical text-white" >
      <li :class="listClass" @mouseenter="setIndex(0)">
        <div class="timeline-start" :class="{'text-dark-blue': currentIndex === 0}">Sep 2021</div>
        <div class="timeline-middle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
            <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"/>
          </svg>
        </div>
        <hr/>
      </li>
      <li :class="listClass" @mouseenter="setIndex(1)">
        <hr/>
        <div class="timeline-start" :class="{'text-dark-blue': currentIndex === 1}">Feb 2022</div>
        <div class="timeline-middle ">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
            <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"/>
          </svg>
        </div>
        <hr/>
      </li>
      <li :class="listClass" @mouseenter="setIndex(2)">
        <hr/>
        <div class=" timeline-start" :class="{'text-dark-blue': currentIndex === 2}">Nov 2022</div>
        <div class="timeline-middle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
            <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"/>
          </svg>
        </div>
        <hr/>
      </li>
      <li :class="listClass" @mouseenter="setIndex(3)">
        <hr/>
        <div class="timeline-start" :class="{'text-dark-blue': currentIndex === 3}">Nov 2022</div>
        <div class="timeline-middle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
            <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"/>
          </svg>
        </div>
        <hr/>
      </li>
      <li :class="listClass" @mouseenter="setIndex(4)">
        <hr/>
        <div class="timeline-start" :class="{'text-dark-blue': currentIndex === 4}">Aug 2023</div>
        <div class="timeline-middle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
            <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"/>
          </svg>
        </div>
      </li>
    </ul>
    <Transition :duration="550" name="nested">
      <div class="mt-5 p-5 w-11/12 h-[73%] bg-dark-blue rounded-b-4xl rounded-r-4xl" v-if="show">
        <div class="inner">
          <h1 class="text-2xl">{{ currentEntry.title }}</h1>
          <div>{{ currentEntry.content }}</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import vuSvg from '@assets/vu.svg'

import {computed, ref} from "vue";

const show = ref(false);
const setShow = (value: boolean) => show.value = value;

const currentIndex = ref(0);
const setIndex = (index: number) => currentIndex.value = index;

interface Entry {
  title: string;
  content: string;
  icon: string;
}

const entries: Entry[] = [
  {
    title: 'Teaching Assistant, Vrije Universiteit Amsterdam',
    content: '',
    icon: vuSvg
  },
  {
    title: 'Full Stack Developer, DBV Software Solutions',
    content: '',
    icon: vuSvg
  },
  {
    title: 'Frontend Lead, Zorgplein.online',
    content: '',
    icon: vuSvg
  },
  {
    title: 'Full Stack Developer, Capisoft B.V.',
    content: '',
    icon: vuSvg
  },
  {
    title: 'Software Engineer, DongIT',
    content: '',
    icon: vuSvg
  }
]

const listClass = "transition ease-in-out delay-75 bg-blue-500 hover:text-dark-blue hover:scale-110 hover:bg-indigo-500 duration-300";

const currentEntry = computed(() => entries[currentIndex.value]);



</script>
<style scoped>

li {
  height: 90px;
}

.nested-enter-active, .nested-leave-active {
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

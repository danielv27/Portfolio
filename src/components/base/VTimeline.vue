<template>
  <div class="flex w-1/2 h-144">
    <ul class="w-1/12 timeline timeline-vertical text-white" @mouseenter="setShow(true)" @mouseleave="setShow(false)">
      <li>
        <div class="timeline-start">Sep 2021</div>
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
        <!--        <div class="timeline-end timeline-box bg-dark-blue">Teaching Assistant, Vrije Universiteit Amsterdam</div>-->
        <hr/>
      </li>
      <li>
        <hr/>
        <div class="timeline-start">Feb 2022</div>
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
        <!--        <div class="timeline-end timeline-box bg-dark-blue">Full Stack Developer, DBV Software Solutions</div>-->
        <hr/>
      </li>
      <li>
        <hr/>
        <div class="timeline-start">Nov 2022</div>
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
        <!--        <div class="timeline-end timeline-box bg-dark-blue">Frontend Lead, Zorgplein.online</div>-->
        <hr/>
      </li>
      <li>
        <hr/>
        <div class="timeline-start">Nov 2022</div>
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
        <!--        <div class="timeline-end timeline-box bg-dark-blue">Full Stack Developer, Capisoft B.V.</div>-->
        <hr/>
      </li>
      <li>
        <hr/>
        <div class="timeline-start">Aug 2023</div>
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
        <!--        <div class="timeline-end timeline-box bg-dark-blue">Software Engineer, DongIT</div>-->
      </li>
    </ul>
    <Transition :duration="550" name="nested">
      <div class="mt-10 p-5 w-11/12 h-4/5 bg-dark-blue rounded-b-4xl rounded-r-4xl" v-if="show">
        <div class="inner">
          Hello
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const show = ref(false);
const setShow = (value: boolean) => show.value = value;




</script>
<style scoped>

li {
  min-height: 100px;
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
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>

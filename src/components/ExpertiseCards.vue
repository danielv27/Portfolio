<template>
  <div class="flex flex-col items-center mx-20 mt-8">
    <h1 ref="headingRef" class="text-4xl mb-6">Expertise</h1>
    <Flicking class="w-[65vw]" :options="{defaultIndex: 1, circular: true}" :plugins="plugins">
      <VCard key="Backend" ref="card2Ref">
        <template v-slot:title>Backend</template>
        <template v-slot:content>
          Design and implement robust server-side logic. Ensuring databases and APIs are efficient, scalable and secure
          forming the backbone for reliable applications.
        </template>
        <template v-slot:footer>Robust Systems</template>
      </VCard>
      <VCard key="Frontend" ref="card1Ref">
        <template v-slot:title>Frontend</template>
        <template v-slot:content>
          Create engaging, responsive interfaces by optimizing user experience and performance, ensuring seamless and
          visually appealing applications.
        </template>
        <template v-slot:footer>
          <div class="flex gap-1.5 text-light-blue">
            <VIcon class="text-light-blue" name="si-vuedotjs" :scale="1.5" ></VIcon>
            <VIcon class="text-light-blue" name="si-typescript" :scale="1.5"></VIcon>
          </div>
        </template>
      </VCard>
      <VCard key="DevOps" ref="card3Ref">
        <template v-slot:title>DevOps</template>
        <template v-slot:content>
          Streamlining deployment with CI/CD practices and containerization. Utilizing DevOps practices to ensure
          efficient operations, infrastructure maintenance and seamless development and deployment workflows.
        </template>
        <template v-slot:footer>Continuous Innovation</template>
      </VCard>
      <VCard key="Testing" ref="card4Ref">
        <template v-slot:title>Testing & Quality Assurance</template>
        <template v-slot:content>
          Ensuring software reliability through comprehensive testing strategies. This includes implementing unit,
          component and end-to-end tests to maintain high standards of quality and stability.
        </template>
        <template v-slot:footer>Assured Quality</template>
      </VCard>
    </Flicking>
    <span class="flicking-arrow-prev is-thin"></span>
    <span class="flicking-arrow-next is-thin"></span>
  </div>
</template>
<script setup lang="ts">
import VCard from "@components/base/VCard.vue";
import {ref} from "vue";
import {useMotion} from "@vueuse/motion";
import Flicking from "@egjs/vue3-flicking";
import {AutoPlay, Perspective} from "@egjs/flicking-plugins";

interface Props {
  delay: number;
}

const props = defineProps<Props>();

const headingRef = ref();

const card1Ref = ref();
const card2Ref = ref();
const card3Ref = ref();

useMotionCustom(headingRef, 0);
useMotionCustom(card1Ref, 300);
useMotionCustom(card2Ref, 600);
useMotionCustom(card3Ref, 900);

function useMotionCustom(element: any, delay: number, opacity = 1) {
  useMotion(element, {
    initial: {
      opacity: 0,
      y: 10,
    },
    visibleOnce: {
      opacity,
      y: 0,
      transition: {
        delay: props.delay + delay
      }
    }
  })
}

const perspectivePlugin = new Perspective({rotate: 0.5});
const autoPlayPlugin = new AutoPlay({
  duration: 5000,
  direction: "NEXT",
  stopOnHover: true,
  animationDuration: 700,
});

const plugins = ref<any[]>([
  perspectivePlugin,
  autoPlayPlugin,
]);


</script>
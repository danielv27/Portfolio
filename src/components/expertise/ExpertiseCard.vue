<template>
  <VCard ref="cardsRef">
    <template v-slot:title>
      <div class="flex gap-2 items-center">
        {{ title }}
      </div>
    </template>
    <template v-slot:content>
      {{ content }}
    </template>
    <template v-slot:footer>
      <div class="flex gap-1.5 text-light-blue">
        <div v-for="icon in icons" :key="icon.name" v-tippy="icon.tooltip">
          <VIcon :name="icon.name" :scale="1.5"/>
        </div>
      </div>
    </template>
  </VCard>
</template>
<script setup lang="ts">
import VCard from "@components/base/VCard.vue";

interface Props {
  title: string;
  content: string;
  icons: {name: string; tooltip: string}[];
}


defineProps<Props>();

</script>
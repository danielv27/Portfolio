<template>
  <div id="education" class="education-section my-auto pt-12 h-[65vh] px-32 bg-gradient-to-b from-light-blue to-dark-blue">
    <h2 class="text-3xl font-bold mb-6">Education</h2>
    <div class="education-cards grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(education, index) in educations" :key="index" class="education-card bg-dark-blue rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold mb-2">{{ education.degree }}</h3>
        <p class="text-gray-700">{{ education.institution }}</p>
        <p class="text-gray-500">{{ education.period }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const educations = [
  {
    degree: 'MSc Software Engineering',
    institution: 'Universiteit van Amsterdam',
    period: 'Sep 2023 — Aug 2024'
  },
  {
    degree: 'BSc Computer Science',
    institution: 'Vrije Universiteit Amsterdam',
    period: 'Sep 2020 — Aug 2023'
  }
];
</script>

<style scoped>

.education-card {
  transition: transform 0.3s;
}

.education-card:hover {
  transform: scale(1.05);
}
</style>

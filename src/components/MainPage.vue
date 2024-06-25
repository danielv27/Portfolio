<template>
  <div class="min-h-screen">
    <intro-section/>
    <about-section/>
    <experience-section/>
    <education-section/>
    <contact-section/>
  </div>
</template>


<script setup>
import IntroSection from "@components/sections/IntroSection.vue";
import AboutSection from "@components/sections/AboutSection.vue";
import ExperienceSection from "@components/sections/ExperienceSection.vue";
import EducationSection from "@components/sections/EducationSection.vue";
import ContactSection from "@components/sections/ContactSection.vue";
</script>
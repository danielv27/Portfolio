<template>
  <div id="main">
    <intro-section/>
    <about-section/>
    <experience-section/>
    <education-section/>
    <projects-sections/>
    <contact-section/>
  </div>
</template>


<script setup>
import IntroSection from "@components/sections/IntroSection.vue";
import AboutSection from "@components/sections/AboutSection.vue";
import ExperienceSection from "@components/sections/ExperienceSection.vue";
import EducationSection from "@components/sections/EducationSection.vue";
import ContactSection from "@components/sections/ContactSection.vue";
import ProjectsSections from "@components/sections/ProjectsSections.vue";
import SocialButtons from "@components/nav/SocialButtons.vue";
</script>
<template>
  <div class="text-white font-varela">
    <NavBar/>
    <MainPage/>
    <SocialButtons/>
  </div>
</template>
<script setup lang="ts">
import NavBar from "@components/NavBar.vue";
import MainPage from "@components/MainPage.vue";
import {onMounted} from "vue";
import SocialButtons from "@components/SocialButtons.vue";

function addSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = link?.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId ?? '');


      if (targetElement) {
        window.scrollTo({
          top: targetElement.parentElement!.offsetTop - 144,
          behavior: 'smooth'
        });
      }
    });
  }
}

onMounted(addSmoothScrolling);

</script>
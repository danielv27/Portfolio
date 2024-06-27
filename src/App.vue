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

onMounted(async () => {
  addSmoothScrolling();
});

console.clear();
const featuresEl = document.querySelector(".features");
const featureEls = document.querySelectorAll(".feature");

featuresEl?.addEventListener("pointermove", (ev) => {
  featureEls.forEach((featureEl) => {
    // Not optimized yet, I know
    const rect = featureEl.getBoundingClientRect();

    featureEl.style.setProperty("--x", ev.clientX - rect.left);
    featureEl.style.setProperty("--y", ev.clientY - rect.top);
  });
});



</script>
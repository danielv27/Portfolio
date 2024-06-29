<template>
  <div id="projects" class="projects-section pt-12 px-5">
    <h2 class="text-3xl font-bold mb-6">Projects</h2>
    <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(project, index) in projects" :key="index" class="project-card bg-lighter-dark-blue rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-700">{{ project.description }}</p>
        <a :href="project.link" class="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'TypeScript EDSL',
    description: 'For my BSc thesis I designed and implemented and embedded domain specific language ' +
    'in Typescript. The aim of this EDSL was to streamline the configuration process and reduce errors for ' +
    'projects in which the configuration values are predefined.',
    image: 'path/to/project1.jpg',
    link: 'https://link-to-project1.com'
  },
  {
    title: 'University Project 2',
    description: 'Description of project 2.',
    image: 'path/to/project2.jpg',
    link: 'https://link-to-project2.com'
  },
  {
    title: 'University Project 3',
    description: 'Description of project 3.',
    image: 'path/to/project3.jpg',
    link: 'https://link-to-project3.com'
  },
  {
    title: 'University Project 4',
    description: 'Description of project 1.',
    image: 'path/to/project1.jpg',
    link: 'https://link-to-project1.com'
  },
  {
    title: 'University Project 5',
    description: 'Description of project 2.',
    image: 'path/to/project2.jpg',
    link: 'https://link-to-project2.com'
  },
  {
    title: 'University Project 6',
    description: 'Description of project 3.',
    image: 'path/to/project3.jpg',
    link: 'https://link-to-project3.com'
  }
];
</script>

<style scoped>
.projects-section {
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  transition: transform 0.3s;
}

.project-card:hover {
  transform: scale(1.05);
}
</style>

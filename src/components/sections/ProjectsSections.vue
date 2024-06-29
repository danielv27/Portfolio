<template>
  <div id="projects" class="projects-section pt-12 px-5">
    <h2 class="text-3xl font-bold mb-6">Projects</h2>
    <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(project, index) in projects" :key="index"
           class="flex flex-col project-card bg-lighter-dark-blue rounded-lg shadow-md p-6 justify-between">
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-700">{{ project.description }}</p>
        </div>
        <div class="mt-8 flex justify-between">
          <a :href="project.link" target="_blank" class="text-blue-500 hover:underline inline-block">View
            Project</a>
          <img v-if="project.image" class="max-w-8 rounded object-contain" :src="project.image" :alt="project.title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import atLargeResearchImage from '@assets/atLargeReseach.png'
import elasticLogo from '@assets/elastic.svg'

const projects = [
  {
    title: 'TS EDSL',
    description: 'As part of my BSc thesis, I designed and implemented and embedded domain specific language (EDSL) '
        + 'in Typescript. The EDSL was created to streamline the configuration process through Typescript ' +
        'type-safety features and VS-Code snippets',
    image: atLargeResearchImage,
    link: 'https://github.com/atlarge-research/continuum/tree/7ee6d908fafe9985337f42e104fec90de13357fe/input/dsl/src'
  },
  {
    title: 'KB-Indexer',
    description: 'As part of the course "DevOps and Cloud-based Software" I took in my masters, my peers and I migrated'
        + '"KB-Indexer", a monolithic search engine used for research purposes, to a scalable cloud application deployed on Azure.' +
        'To manage and monitor indexing jobs we used Kubernetes, CronJobs (Scheduler), Helm charts and Grafana. Additionally, we created an API  ' +
        'and a web-app in Vue to make use of these features in an interactive web application.\n',
    image: elasticLogo,
    link: 'https://github.com/DevOps-Group20'
  },
  // {
  //   title: 'University Project 3',
  //   description: 'Description of project 3.',
  //   image: 'path/to/project3.jpg',
  //   link: 'https://link-to-project3.com'
  // },
  // {
  //   title: 'University Project 4',
  //   description: 'Description of project 1.',
  //   image: 'path/to/project1.jpg',
  //   link: 'https://link-to-project1.com'
  // },
  // {
  //   title: 'University Project 5',
  //   description: 'Description of project 2.',
  //   image: 'path/to/project2.jpg',
  //   link: 'https://link-to-project2.com'
  // },
  // {
  //   title: 'University Project 6',
  //   description: 'Description of project 3.',
  //   image: 'path/to/project3.jpg',
  //   link: 'https://link-to-project3.com'
  // }
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

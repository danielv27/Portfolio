<template>
  <div id="projects" class="projects-section pt-12 px-10 md:px-16">
    <h2 class="text-3xl font-bold mb-6">Projects</h2>
    <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(project, index) in projects" :key="index"
           class="flex flex-col project-card bg-lighter-dark-blue rounded-lg shadow-md p-6 justify-between">
        <div>
          <h3 class="text-light-blue text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray text-gray-700">{{ project.description }}</p>
        </div>
        <div :class="`mt-8 flex ${project.link ? 'justify-between' : 'justify-end'}`" >
          <a v-show="project.link" :href="project.link" target="_blank" class="text-blue-500 hover:underline inline-block">View
            Project</a>
          <img v-if="project.image" :class="'max-w-8 rounded-md  object-contain ' + (project.imageClass ?? '')" :src="project.image" :alt="project.title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import atLargeLogo from '@assets/atLargeReseach.png'
import elasticLogo from '@assets/elastic.svg'
import astLogo from '@assets/cppast.png'
import roomiesLogo from '@assets/roomies.png'
import gpxLogo from '@assets/gpx.svg'
import swaggerLogo from '@assets/swagger.svg'

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  imageClass?: string;
}

const projects: Project[] = [
  {
    title: 'TS EDSL',
    description: 'As part of my BSc thesis, I designed and implemented and embedded domain specific language (EDSL) '
        + 'in Typescript. The EDSL was created to streamline the configuration process through Typescript ' +
        'type-safety features and VS-Code snippets.',
    image: atLargeLogo,
    link: 'https://github.com/atlarge-research/continuum/tree/7ee6d908fafe9985337f42e104fec90de13357fe/input/dsl/src'
  },

  {
    title: 'KB-Indexer',
    description: 'As part of the course "DevOps and Cloud-based Software" I took in my masters, my peers and I migrated '
        + '"KB-Indexer", a monolithic search engine used for research purposes, to a scalable cloud application deployed on Azure.' +
        'To manage and monitor search-engine indexing we used Kubernetes, CronJobs (Scheduler), Helm charts and Grafana. Additionally, we created an API  ' +
        'and a web-app in Vue to make use of these features in an interactive web application.\n',
    image: elasticLogo,
    imageClass: 'bg-dark-blue p-1.5',
    link: 'https://github.com/DevOps-Group20'
  },
  {
    title: 'ASTShield: Static Code Correction',
    description: 'For my MSc thesis, I research to the potential of statically detecting and correcting insecure C code ' +
        'using an abstract syntax tree (AST). As part of my research, I am developing a static analysis tool written in Python. ' +
        'The tool reads C files, provides information about their potential vulnerabilities, and corrects them if possible.',
    image: astLogo,
    imageClass: 'border border-dark-blue bg-white',
  },
  {
    title: 'NextRoom',
    description: 'NextRoom is a freelance project aimed at developing a "room-sharing" app that helps people find roommates in Amsterdam. ' +
        'NextRoom was built as a cross-platform application for IOS and Android and was written in Flutter. During this project, I gained valuable ' +
        'experience in both frontend development, and project management. Although the project is currently discontinued, it provided an opportunity to apply' +
        'my skills in a real-world scenario and learn from the challenges encountered.' ,
    image: roomiesLogo,
    link: 'https://github.com/danielv27/roomies_app'
  },
  {
    title: 'GPX Manager',
    description: 'Designed and developed a tool in Java for visualizing sport related information from GPS data. It was built as part of a Software design course I took ' +
        'in my BSc. The architecture of the system was first modeled using UMLs. We chose to build it using the MVC design pattern. The Interface  allows users to upload ' +
        'their GPX (GPS Data) files, and provide information regarding traveled distance, latitude, calories burned and weather conditions.',
    image: gpxLogo,
    imageClass: 'bg-dark-blue p-0.5',
    link: 'https://github.com/danielv27/gpx-manager'
  },
  {
    title: 'DevOps Micro Service',
    description: 'As part of a university project I implemented a microservice architecture server. ' +
        'Firstly, I defined an Open-API specification to describe the endpoints and models of the API. ' +
        'Following this, I implemented the backend logic using Django. third, I added container orchestration (Docker Compose) that sets up ' +
        'the server and database automatically.' +
        'Lastly, I implemented CI/CD pipelines using Github Actions. Whenever new code was pushed, the pipeline would ' +
        'build, test and deploy the Docker image to Docker Hub.',
    image: swaggerLogo,
    imageClass: 'bg-dark-blue p-1',
    link: 'https://github.com/danielv27/dev-ops-microservice'
  },
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

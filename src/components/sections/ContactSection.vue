<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center justify-center w-full max-w-4xl px-4 text-white">
      <h1 id="contact" class="text-4xl font-bold mb-8">Contact Me</h1>
      <form @submit.prevent="submitForm" class="w-full max-w-lg">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium">Name</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Enter your name"
                 class="mt-1 text-dark-blue block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green sm:text-sm">
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium">Email</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Enter your email"
                 class="mt-1 text-dark-blue block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green sm:text-sm">
        </div>

        <div class="mb-4">
          <label for="subject" class="block text-sm font-medium">Subject</label>
          <input type="text" id="subject" v-model="formData.subject" placeholder="Enter subject"
                 class="mt-1 text-dark-blue block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green sm:text-sm">
        </div>

        <div class="mb-4">
          <label for="message" class="block text-sm font-medium">Message</label>
          <textarea id="message" v-model="formData.message" rows="4" placeholder="Enter your message"
                    class="mt-1 text-dark-blue block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green sm:text-sm"></textarea>
        </div>

        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lighter-dark-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

const formData = ref({
  name: '',
  email: '',
  message: ''
});

async function submitForm(e) {
  loading.value = true;
  formData['access_key'] = "dfb2a6be-e8a2-433c-8ebe-87d69628cd8e";
  console.log(formData.value);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      contentType: "application/json",
    },
    body: JSON.stringify(formData.value)
  });

  const data = await response.json();

  if (data.success) {
    loading.value = false;
    // TODO: add toastr
    e.target.reset();
  } else {
    console.log("Error", data);

  }
}
</script>


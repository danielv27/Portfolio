<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center justify-center w-full max-w-4xl px-4 text-white">
      <h1 id="contact" class="text-4xl font-bold mb-8">Contact Me</h1>
      <form @submit.prevent="submitForm" ref="contactForm" class="w-full max-w-lg">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium">Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Enter your name"
                 required class="mt-1 text-dark-blue dark:text-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green sm:text-sm">
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Enter your email"
                 required class="mt-1 text-dark-blue dark:text-white bg-dark block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="subject" class="block text-sm font-medium">Subject</label>
          <input type="text" id="subject" v-model="form.subject" placeholder="Enter subject"
                 required class="mt-1 text-dark-blue dark:text-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green sm:text-sm">
        </div>

        <div class="mb-4">
          <label for="message" class="block text-sm font-medium">Message</label>
          <textarea id="message" v-model="form.message" rows="4" placeholder="Enter your message"
                    required class="mt-1 text-dark-blue dark:text-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green sm:text-sm"></textarea>
        </div>

        <button type="submit" :disabled="loading" class="flex justify-center items-center w-20 h-10 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lighter-dark-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <VSpinner v-if="loading" />
          <span v-else>Submit</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import VSpinner from "@components/base/VSpinner.vue";
import {useToast} from "vue-toast-notification";

const toast = useToast({position: 'bottom-right'});

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const disabled = ref(false);
const loading = ref(false);

async function submitForm() {
  loading.value = true;

  const formData = new FormData();
  formData.append('access_key', "dfb2a6be-e8a2-433c-8ebe-87d69628cd8e");
  Object.keys(form.value).forEach(key => formData.append(key, form.value[key]));

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      // Reset form and state
      form.value.name = '';
      form.value.email = '';
      form.value.subject = '';
      form.value.message = '';
      toast.success('Message sent successfully!');
      disabled.value = true;
    } else {
      toast.error('Something went wrong! Please try again later.');
    }
  } catch (error) {
  } finally {
    loading.value = false;
  }
}
</script>

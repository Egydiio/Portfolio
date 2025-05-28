<template>
  <div class="bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-yellow-500/20">
    <h3 class="text-xl font-bold mb-6">{{ t('contact.form.title') }}</h3>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium mb-1">{{ t('contact.form.name') }}</label>
        <input
            type="text"
            id="name"
            v-model="formData.name"
            class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium mb-1">{{ t('contact.form.email') }}</label>
        <input
            type="email"
            id="email"
            v-model="formData.email"
            class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
        />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium mb-1">{{ t('contact.form.message') }}</label>
        <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
        ></textarea>
      </div>
      <button
          type="submit"
          class="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-md transition-colors flex justify-center items-center"
          :disabled="loading"
      >
        <template v-if="loading">
          <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>
          Loading...
        </template>
        <template v-else>
          {{ t('contact.form.submit') }}
        </template>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {useTheme} from "@/composables/useTheme.js";

const props = defineProps({
  t: Function,
  isDark: Boolean,
  currentLanguage: String
});

const loading = ref(false);
const formData = ref({
  name: '',
  email: '',
  message: ''
});


const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const submitForm = async () => {
  loading.value = true;

  formData.value = {
    ...formData.value,
    title: 'Portifolio - Contato',
    time: new Date().toISOString()
  };

  const themeColor = useTheme ? 'dark' : 'light';
  const textColor = useTheme ? '#FFFFFF' : '#000000';

  const successMessage = props.currentLanguage === 'pt'
      ? 'Email enviado com sucesso'
      : 'Email sent successfully';

  const errorMessage = props.currentLanguage === 'pt'
      ? 'Problemas com envio de Email'
      : 'Problems sending Email';

  try {
    await emailjs.send(serviceId, templateId, formData.value, publicKey);

    await Swal.fire({
      icon: 'success',
      iconColor: '#FACC15',
      title: successMessage,
      showConfirmButton: false,
      timer: 1500,
      theme: themeColor,
      color: textColor,
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster',
      },
      customClass: {
        popup: 'swal-custom-popup',
        title: 'swal-custom-title',
      }
    });

    formData.value = { name: '', email: '', message: '' };

  } catch (error) {
    console.error('Erro ao enviar email:', error);

    await Swal.fire({
      icon: 'error',
      title: errorMessage,
      showConfirmButton: false,
      timer: 1500,
      theme: themeColor,
      color: textColor,
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster',
      },
      customClass: {
        popup: 'swal-custom-popup',
        title: 'swal-custom-title',
      }
    });
  }

  loading.value = false;
};
</script>
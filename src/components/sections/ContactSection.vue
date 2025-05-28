<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('contact.title') }} <span class="text-yellow-500">{{ t('contact.titleHighlight') }}</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('contact.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Contact Info -->
        <div class="bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-yellow-500/20">
          <h3 class="text-xl font-bold mb-6">{{ t('contact.info.title') }}</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <mail-icon class="w-6 h-6 text-yellow-500 mr-4 mt-1" />
              <div>
                <p class="font-medium">{{ t('contact.info.email') }}</p>
                <a href="mailto:egydiio@hotmail.com" class="text-gray-500 dark:text-gray-400 hover:text-yellow-500">egydiio@hotmail.com</a>
              </div>
            </div>
            <div class="flex items-start">
              <phone-icon class="w-6 h-6 text-yellow-500 mr-4 mt-1" />
              <div>
                <p class="font-medium">{{ t('contact.info.phone') }}</p>
                <a href="tel:+5531981114334" class="text-gray-500 dark:text-gray-400 hover:text-yellow-500">+55 (31) 98111-4334</a>
              </div>
            </div>
            <div class="flex items-start">
              <map-pin-icon class="w-6 h-6 text-yellow-500 mr-4 mt-1" />
              <div>
                <p class="font-medium">{{ t('contact.info.location') }}</p>
                <p class="text-gray-500 dark:text-gray-400">{{ t('contact.info.locationValue') }}</p>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-bold mt-8 mb-6">{{ t('contact.social.title') }}</h3>
          <div class="flex space-x-4">
            <a
                href="https://github.com/Egydiio"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-yellow-500 transition-colors group"
            >
              <github-icon class="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-black" />
            </a>
            <a
                href="https://www.linkedin.com/in/joaoegydio/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-yellow-500 transition-colors group"
            >
              <linkedin-icon class="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-black" />
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <ContactForm
            :t="t"
            :isDark="isDark"
            :currentLanguage="currentLanguage"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Github as GithubIcon,
  Linkedin as LinkedinIcon
} from 'lucide-vue-next';
import ContactForm from '../ui/ContactForm.vue';

defineProps({
  t: Function,
  isDark: Boolean,
  currentLanguage: String
});
</script>
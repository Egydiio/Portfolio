<template>
  <footer class="py-8 bg-white dark:bg-black border-t border-gray-200 dark:border-yellow-500/20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-yellow-500 font-bold text-xl mb-4 md:mb-0">
          <span class="text-black dark:text-white">&lt;</span>{{ t('nav.brand') }}<span class="text-black dark:text-white">/&gt;</span>
        </div>
        <div class="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {{ currentYear }} João Egydio. {{ t('footer.rights') }}
        </div>
        <div class="mt-4 md:mt-0">
          <a href="#home" class="text-gray-500 dark:text-gray-400 hover:text-yellow-500">{{ t('footer.backToTop') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  t: Function
});

const currentYear = computed(() => new Date().getFullYear());
</script>
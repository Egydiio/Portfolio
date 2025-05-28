<template>
  <section id="skills" class="py-20 bg-white dark:bg-black">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('skills.title') }} <span class="text-yellow-500">{{ t('skills.titleHighlight') }}</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('skills.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
            v-for="(category, index) in skillCategories"
            :key="index"
            class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-yellow-500/20 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-colors"
        >
          <component :is="category.icon" class="w-12 h-12 text-yellow-500 mb-4" />
          <h3 class="text-xl font-bold mb-4">{{ category.title }}</h3>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li v-for="(skill, skillIndex) in category.items" :key="skillIndex" class="flex items-center">
              <check-icon class="w-5 h-5 text-yellow-500 mr-2" />
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import {
  Code as CodeIcon,
  Server as ServerIcon,
  Settings as SettingsIcon,
  Check as CheckIcon
} from 'lucide-vue-next';

const props = defineProps({
  t: Function
});

const skillCategories = computed(() => [
  {
    icon: CodeIcon,
    title: props.t('skills.frontend.title'),
    items: props.t('skills.frontend.items')
  },
  {
    icon: ServerIcon,
    title: props.t('skills.backend.title'),
    items: props.t('skills.backend.items')
  },
  {
    icon: SettingsIcon,
    title: props.t('skills.devops.title'),
    items: props.t('skills.devops.items')
  }
]);
</script>
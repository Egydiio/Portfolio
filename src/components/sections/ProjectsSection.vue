<template>
  <section id="projects" class="py-20 bg-white dark:bg-black">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('projects.title') }} <span class="text-yellow-500">{{ t('projects.titleHighlight') }}</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('projects.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-yellow-500/20 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-all hover:-translate-y-1"
        >
          <div class="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <component :is="getProjectIcon(index)" class="w-16 h-16 text-yellow-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="text-yellow-500 hover:text-yellow-400 flex items-center">
                <eye-icon class="w-4 h-4 mr-1" />
                {{ t('projects.demo') }}
              </a>
              <a v-if="!project?.back && !project?.front" :href="projects[index].link" target="_blank" class="text-yellow-500 hover:text-yellow-400 flex items-center">
                <github-icon class="w-4 h-4 mr-1" />
                {{ t('projects.code') }}
              </a>
              <a v-if="project?.back || project?.front" :href="projects[index].linkBack" target="_blank" class="text-yellow-500 hover:text-yellow-400 flex items-center">
                <github-icon class="w-4 h-4 mr-1" />
                {{ projects[index].front }}
              </a>
              <a v-if="project?.back || project?.front" :href="projects[index].linkFront" target="_blank" class="text-yellow-500 hover:text-yellow-400 flex items-center">
                <github-icon class="w-4 h-4 mr-1" />
                {{ projects[index].back }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="https://github.com/Egydiio" target="_blank" class="inline-flex items-center text-yellow-500 hover:text-yellow-400">
          {{ t('projects.viewAll') }}
          <br>
          <arrow-right-icon class="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import {
  LayoutGrid as LayoutGridIcon,
  BarChart as BarChartIcon,
  Smartphone as SmartphoneIcon,
  Eye as EyeIcon,
  Github as GithubIcon,
  ArrowRight as ArrowRightIcon
} from 'lucide-vue-next';

const props = defineProps({
  t: Function
});

const projects = computed(() => props.t('projects.items'));

const getProjectIcon = (index) => {
  const icons = [LayoutGridIcon, BarChartIcon, SmartphoneIcon];
  return icons[index] || LayoutGridIcon;
};
</script>
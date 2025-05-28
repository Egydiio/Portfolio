<template>
  <section id="experience" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('experience.title') }} <span class="text-yellow-500">{{ t('experience.titleHighlight') }}</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('experience.description') }}
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div
            v-for="(job, index) in jobs"
            :key="index"
            class="relative pl-8 pb-12 border-l border-yellow-500"
            :class="{ 'border-l-0': index === jobs.length - 1 }"
        >
          <div class="absolute left-0 top-0 w-4 h-4 bg-yellow-500 rounded-full -translate-x-2"></div>
          <div class="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-yellow-500/20">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 class="text-xl font-bold">{{ job.title }}</h3>
              <div class="flex items-center mt-2 md:mt-0">
                <calendar-icon class="w-4 h-4 text-yellow-500 mr-1" />
                <span class="text-gray-500 dark:text-gray-400">{{ job.period }}</span>
              </div>
            </div>
            <h4 class="text-yellow-500 mb-4">{{ job.company }}</h4>
            <p class="text-gray-600 dark:text-gray-300 whitespace-pre-line">{{ job.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                  v-for="tech in job.technologies"
                  :key="tech"
                  class="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { Calendar as CalendarIcon } from 'lucide-vue-next';

const props = defineProps({
  t: Function
});

const jobs = computed(() => props.t('experience.jobs'));
</script>
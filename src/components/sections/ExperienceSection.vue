<template>
  <section id="experience" ref="sectionRef" class="py-24 bg-black relative">
    <div class="absolute top-0 left-0 right-0 h-px divider"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-14 reveal">
        <span class="text-xs font-mono text-zinc-600 uppercase tracking-widest">— history —</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-3 mb-3 text-white">
          {{ t('experience.title') }} <span class="text-yellow-500">{{ t('experience.titleHighlight') }}</span>
        </h2>
        <p class="text-zinc-500 max-w-xl mx-auto text-sm">{{ t('experience.description') }}</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div
          v-for="(job, i) in jobs"
          :key="i"
          class="relative pl-8 pb-10 reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <!-- Timeline line -->
          <div
            v-if="i < jobs.length - 1"
            class="absolute left-[11px] top-4 bottom-0 w-px bg-gradient-to-b from-yellow-500/40 to-transparent"
          ></div>
          <!-- Timeline dot -->
          <div class="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-black border-2 border-yellow-500 flex items-center justify-center">
            <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
          </div>

          <!-- Card -->
          <div class="card p-6 ml-2">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 class="font-bold text-white">{{ job.title }}</h3>
                <p class="text-yellow-500 text-sm font-medium mt-0.5">{{ job.company }}</p>
              </div>
              <div class="flex items-center gap-1.5 text-xs text-zinc-600 font-mono whitespace-nowrap">
                <calendar-icon class="w-3.5 h-3.5" />
                {{ job.period }}
              </div>
            </div>
            <p class="text-zinc-400 text-sm leading-relaxed whitespace-pre-line mb-4">{{ job.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in job.technologies"
                :key="tech"
                class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-400"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Calendar as CalendarIcon } from 'lucide-vue-next';
import { useReveal } from '../../composables/useReveal';

const props = defineProps({ t: Function });
const sectionRef = ref(null);
useReveal(sectionRef);

const jobs = computed(() => props.t('experience.jobs'));
</script>

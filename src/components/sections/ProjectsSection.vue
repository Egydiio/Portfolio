<template>
  <section id="projects" ref="sectionRef" class="py-24 bg-black relative">
    <div class="absolute top-0 left-0 right-0 h-px divider"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-14 reveal">
        <span class="text-xs font-mono text-zinc-600 uppercase tracking-widest">— ecosystem —</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-3 mb-3 text-white">
          {{ t('projects.title') }} <span class="text-yellow-500">{{ t('projects.titleHighlight') }}</span>
        </h2>
        <p class="text-zinc-500 max-w-xl mx-auto text-sm">{{ t('projects.description') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="card p-6 flex flex-col gap-4 reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <!-- Icon / Index -->
          <div class="flex items-start justify-between">
            <div class="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
              <component :is="getIcon(i)" class="w-5 h-5 text-yellow-500" />
            </div>
            <span class="text-xs font-mono text-zinc-700">#{{ String(i + 1).padStart(2, '0') }}</span>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <h3 class="font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-sm text-zinc-500 leading-relaxed">{{ project.description }}</p>
          </div>

          <!-- Tech tags -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-400"
            >{{ tech }}</span>
          </div>

          <!-- Links -->
          <div class="flex items-center gap-4 pt-1 border-t border-zinc-900">
            <a
              v-if="!project.back && !project.front"
              :href="project.link || '#'"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-yellow-500 transition-colors font-mono"
            >
              <github-icon class="w-3.5 h-3.5" />
              {{ t('projects.code') }}
            </a>
            <template v-else>
              <a :href="project.linkBack" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-yellow-500 transition-colors font-mono">
                <github-icon class="w-3.5 h-3.5" />{{ project.back }}
              </a>
              <a :href="project.linkFront" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-yellow-500 transition-colors font-mono">
                <github-icon class="w-3.5 h-3.5" />{{ project.front }}
              </a>
            </template>
          </div>
        </div>
      </div>

      <!-- View all -->
      <div class="text-center mt-10 reveal reveal-delay-4">
        <a
          href="https://github.com/Egydiio"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-yellow-500 font-mono transition-colors border border-zinc-800 hover:border-yellow-500/30 px-5 py-2.5 rounded-xl"
        >
          <github-icon class="w-4 h-4" />
          {{ t('projects.viewAll') }}
          <arrow-right-icon class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  ShoppingCart as ShoppingCartIcon,
  LayoutDashboard as LayoutDashboardIcon,
  Receipt as ReceiptIcon,
  Github as GithubIcon,
  ArrowRight as ArrowRightIcon
} from 'lucide-vue-next';
import { useReveal } from '../../composables/useReveal';

const props = defineProps({ t: Function });
const sectionRef = ref(null);
useReveal(sectionRef);

const projects = computed(() => props.t('projects.items'));

const icons = [ShoppingCartIcon, LayoutDashboardIcon, ReceiptIcon];
const getIcon = (i) => icons[i] ?? LayoutDashboardIcon;
</script>

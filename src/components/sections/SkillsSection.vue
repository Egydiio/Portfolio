<template>
  <section id="skills" ref="sectionRef" class="py-24 bg-black relative">
    <div class="absolute top-0 left-0 right-0 h-px divider"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-14 reveal">
        <span class="text-xs font-mono text-zinc-600 uppercase tracking-widest">— toolkit —</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-3 mb-3 text-white">
          {{ t('skills.title') }} <span class="text-yellow-500">{{ t('skills.titleHighlight') }}</span>
        </h2>
        <p class="text-zinc-500 max-w-xl mx-auto text-sm">{{ t('skills.description') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <!-- Frontend -->
        <div class="card p-6 reveal reveal-delay-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <monitor-icon class="w-4 h-4 text-blue-400" />
            </div>
            <span class="font-semibold text-white">{{ t('skills.frontend.title') }}</span>
          </div>
          <div class="space-y-4">
            <div
              v-for="(skill, i) in frontendSkills"
              :key="skill.name"
              class="reveal"
              :class="`reveal-delay-${i + 1}`"
            >
              <div class="flex justify-between mb-1.5">
                <span class="text-xs font-mono text-zinc-400">{{ skill.name }}</span>
                <span class="text-xs font-mono text-yellow-500">{{ skill.level }}%</span>
              </div>
              <div class="h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div
                  class="skill-bar-fill h-full rounded-full"
                  :style="{ '--skill-level': skill.level + '%', transitionDelay: (i * 80) + 'ms' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="card p-6 reveal reveal-delay-2">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <server-icon class="w-4 h-4 text-green-400" />
            </div>
            <span class="font-semibold text-white">{{ t('skills.backend.title') }}</span>
          </div>
          <div class="space-y-4">
            <div
              v-for="(skill, i) in backendSkills"
              :key="skill.name"
              class="reveal"
              :class="`reveal-delay-${i + 1}`"
            >
              <div class="flex justify-between mb-1.5">
                <span class="text-xs font-mono text-zinc-400">{{ skill.name }}</span>
                <span class="text-xs font-mono text-yellow-500">{{ skill.level }}%</span>
              </div>
              <div class="h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div
                  class="skill-bar-fill h-full rounded-full"
                  :style="{ '--skill-level': skill.level + '%', transitionDelay: (i * 80) + 'ms' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- DevOps -->
        <div class="card p-6 reveal reveal-delay-3">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <terminal-icon class="w-4 h-4 text-purple-400" />
            </div>
            <span class="font-semibold text-white">{{ t('skills.devops.title') }}</span>
          </div>
          <div class="space-y-4">
            <div
              v-for="(skill, i) in devopsSkills"
              :key="skill.name"
              class="reveal"
              :class="`reveal-delay-${i + 1}`"
            >
              <div class="flex justify-between mb-1.5">
                <span class="text-xs font-mono text-zinc-400">{{ skill.name }}</span>
                <span class="text-xs font-mono text-yellow-500">{{ skill.level }}%</span>
              </div>
              <div class="h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div
                  class="skill-bar-fill h-full rounded-full"
                  :style="{ '--skill-level': skill.level + '%', transitionDelay: (i * 80) + 'ms' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  Monitor as MonitorIcon,
  Server as ServerIcon,
  Terminal as TerminalIcon
} from 'lucide-vue-next';
import { useReveal } from '../../composables/useReveal';

const props = defineProps({ t: Function });
const sectionRef = ref(null);
useReveal(sectionRef);

const frontendSkills = computed(() => props.t('skills.frontend.skills'));
const backendSkills  = computed(() => props.t('skills.backend.skills'));
const devopsSkills   = computed(() => props.t('skills.devops.skills'));
</script>

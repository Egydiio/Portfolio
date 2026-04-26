<template>
  <section id="home" class="min-h-screen flex items-center relative overflow-hidden bg-black grid-bg pt-20">
    <!-- Background glow blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/4 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-500/3 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        <!-- Left: Terminal -->
        <div class="w-full lg:w-1/2">
          <div class="terminal">
            <div class="terminal-header">
              <div class="terminal-dot red"></div>
              <div class="terminal-dot yellow"></div>
              <div class="terminal-dot green"></div>
              <span class="ml-4 text-xs text-zinc-500 font-mono">joao@egydio-dev ~ portfolio</span>
            </div>
            <div class="terminal-body min-h-64">
              <div
                v-for="(line, i) in visibleLines"
                :key="i"
                class="font-mono text-sm leading-8"
                :class="getLineClass(line)"
              >
                <span v-if="line.type === 'command'" class="text-yellow-500/70 select-none">$ </span>
                <span v-if="line.type === 'header'" class="font-bold">{{ line.text }}</span>
                <span v-else>{{ line.text }}</span>
              </div>
              <div v-if="showCursor" class="font-mono text-sm leading-8">
                <span class="text-yellow-500/70">$ </span>
                <span class="text-yellow-500 cursor-blink">█</span>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <Transition name="cta-fade">
            <div v-if="showCTAs" class="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                class="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 text-sm"
              >{{ t('hero.contactBtn') }}</a>
              <a
                href="#projects"
                class="px-6 py-3 border border-yellow-500/40 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500/8 hover:border-yellow-500/70 transition-all duration-200 text-sm"
              >{{ t('hero.projectsBtn') }}</a>
            </div>
          </Transition>
        </div>

        <!-- Right: Photo + Floating Badges -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <div class="relative w-72 h-72 md:w-80 md:h-80">
            <!-- Outer glow -->
            <div class="absolute inset-0 rounded-full bg-yellow-500/8 blur-2xl scale-110 animate-pulse-glow"></div>
            <!-- Spinning ring -->
            <div class="absolute inset-1 rounded-full border border-dashed border-yellow-500/25 animate-spin-slow"></div>
            <!-- Static outer ring -->
            <div class="absolute inset-0 rounded-full border border-yellow-500/15"></div>
            <!-- Photo frame -->
            <div class="absolute inset-4 rounded-full overflow-hidden border-2 border-yellow-500/50 bg-zinc-900 glow-sm">
              <img
                src="/img/test5.png"
                alt="João Egydio"
                class="w-full h-full object-cover"
                style="object-position: center -8%; transform: scale(1.28);"
              />
            </div>

            <!-- Floating tech badges -->
            <div class="absolute -top-3 right-2 float-1">
              <span class="px-3 py-1.5 bg-zinc-900/90 border border-yellow-500/25 rounded-full text-xs font-mono text-yellow-500 backdrop-blur-sm shadow-lg">Vue.js</span>
            </div>
            <div class="absolute top-1/4 -left-10 float-2">
              <span class="px-3 py-1.5 bg-zinc-900/90 border border-yellow-500/25 rounded-full text-xs font-mono text-yellow-500 backdrop-blur-sm shadow-lg">Laravel</span>
            </div>
            <div class="absolute -bottom-2 left-1/3 float-3">
              <span class="px-3 py-1.5 bg-zinc-900/90 border border-yellow-500/25 rounded-full text-xs font-mono text-yellow-500 backdrop-blur-sm shadow-lg">Docker</span>
            </div>
            <div class="absolute top-2/3 -right-10 float-4">
              <span class="px-3 py-1.5 bg-zinc-900/90 border border-yellow-500/25 rounded-full text-xs font-mono text-yellow-500 backdrop-blur-sm shadow-lg">PHP</span>
            </div>
            <div class="absolute -top-3 left-1/4 float-5">
              <span class="px-3 py-1.5 bg-zinc-900/90 border border-yellow-500/25 rounded-full text-xs font-mono text-yellow-500 backdrop-blur-sm shadow-lg">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700">
      <span class="text-xs font-mono tracking-widest">scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-yellow-500/40 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({ t: Function });

const visibleLines = ref([]);
const showCursor   = ref(false);
const showCTAs     = ref(false);

const lines = computed(() => props.t('hero.terminalLines'));

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const getLineClass = (line) => {
  if (line.type === 'header')  return line.color || 'text-yellow-500';
  if (line.type === 'command') return 'text-zinc-300';
  if (line.type === 'output')  return line.color || 'text-green-400';
  return 'text-zinc-400';
};

onMounted(async () => {
  await delay(350);
  const allLines = lines.value;
  for (let i = 0; i < allLines.length; i++) {
    visibleLines.value.push(allLines[i]);
    await delay(allLines[i].type === 'output' ? 180 : 240);
  }
  showCursor.value = true;
  await delay(300);
  showCTAs.value = true;
});
</script>

<style scoped>
.cta-fade-enter-active { transition: opacity 0.5s ease, transform 0.5s ease; }
.cta-fade-enter-from   { opacity: 0; transform: translateY(10px); }
</style>

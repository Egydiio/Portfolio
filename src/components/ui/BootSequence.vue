<template>
  <Transition name="boot-fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 bg-black flex items-center justify-center"
      @click="skip"
    >
      <div class="w-full max-w-lg px-6">
        <div class="terminal">
          <div class="terminal-header">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
            <span class="ml-3 text-xs text-zinc-500 font-mono">egydio-os — boot</span>
          </div>
          <div class="terminal-body min-h-52">
            <div
              v-for="(line, i) in visibleLines"
              :key="i"
              class="leading-8 font-mono text-sm"
              :class="line.color"
            >{{ line.text }}</div>
            <span v-if="showCursor" class="text-yellow-500 cursor-blink">█</span>
          </div>
        </div>
        <p class="mt-5 text-center text-xs text-zinc-700 font-mono">
          press any key or click to skip
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['done']);

const visible  = ref(true);
const visibleLines = ref([]);
const showCursor   = ref(true);

const bootLines = [
  { text: '▶ EGYDIO OS v2.0 — initializing...', color: 'text-yellow-500 font-bold', delay: 0 },
  { text: '  [OK] vue 3 runtime           loaded', color: 'text-green-400', delay: 380 },
  { text: '  [OK] tailwind css            compiled', color: 'text-green-400', delay: 680 },
  { text: '  [OK] project database        connected', color: 'text-green-400', delay: 980 },
  { text: '  [OK] homebot service         running ✓', color: 'text-yellow-400', delay: 1280 },
  { text: '  [OK] github sync             active', color: 'text-green-400', delay: 1540 },
  { text: '', color: '', delay: 1800 },
  { text: '▶ Loading user profile: João Egydio...', color: 'text-blue-400', delay: 2000 },
  { text: '▶ SYSTEM READY — Welcome.', color: 'text-yellow-500 font-bold', delay: 2500 },
];

let timers = [];

const runBoot = () => {
  bootLines.forEach((line) => {
    const t = setTimeout(() => {
      visibleLines.value.push(line);
    }, line.delay);
    timers.push(t);
  });

  const finish = setTimeout(() => {
    showCursor.value = false;
    const fade = setTimeout(() => {
      visible.value = false;
      emit('done');
    }, 420);
    timers.push(fade);
  }, 3100);
  timers.push(finish);
};

const skip = () => {
  timers.forEach(clearTimeout);
  visible.value = false;
  emit('done');
};

const onKey = () => skip();

onMounted(() => {
  if (sessionStorage.getItem('eg-booted')) {
    visible.value = false;
    emit('done');
    return;
  }
  sessionStorage.setItem('eg-booted', '1');
  runBoot();
  window.addEventListener('keydown', onKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKey);
  timers.forEach(clearTimeout);
});
</script>

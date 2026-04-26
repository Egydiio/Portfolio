<template>
  <header class="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4">
    <nav
      class="flex items-center gap-1 px-3 py-2 rounded-2xl border transition-all duration-300"
      :class="scrolled
        ? 'bg-black/85 backdrop-blur-xl border-yellow-500/20 shadow-lg shadow-black/40'
        : 'bg-black/50 backdrop-blur-md border-white/5'"
    >
      <!-- Logo -->
      <a href="#home" class="mr-3 px-2 py-1 font-mono text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
        <span class="text-zinc-500">&lt;</span>eg<span class="text-zinc-500">/&gt;</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-3 py-1.5 rounded-xl text-sm transition-all duration-200 font-medium"
          :class="activeSection === item.id
            ? 'text-yellow-500 bg-yellow-500/10'
            : 'text-zinc-400 hover:text-white hover:bg-white/5'"
        >{{ item.label }}</a>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-1 ml-3 pl-3 border-l border-white/10">
        <button
          @click="toggleLanguage"
          class="px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
          :title="currentLanguage === 'pt' ? 'Switch to English' : 'Mudar para Português'"
        >{{ currentLanguage.toUpperCase() }}</button>

        <button
          @click="toggleDarkMode"
          class="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
          :title="isDark ? 'Light mode' : 'Dark mode'"
        >
          <sun-icon v-if="isDark" class="w-4 h-4 text-yellow-500" />
          <moon-icon v-else class="w-4 h-4" />
        </button>

        <!-- Mobile hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <x-icon v-if="mobileOpen" class="w-4 h-4 text-yellow-500" />
          <menu-icon v-else class="w-4 h-4" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="absolute top-full mt-2 left-4 right-4 rounded-2xl border border-yellow-500/20 bg-black/95 backdrop-blur-xl p-3 flex flex-col gap-1 shadow-xl shadow-black/60"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="mobileOpen = false"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
          :class="activeSection === item.id
            ? 'text-yellow-500 bg-yellow-500/10'
            : 'text-zinc-400 hover:text-white hover:bg-white/5'"
        >{{ item.label }}</a>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Sun as SunIcon, Moon as MoonIcon, Menu as MenuIcon, X as XIcon } from 'lucide-vue-next';

const props = defineProps({
  isDark: Boolean,
  toggleDarkMode: Function,
  currentLanguage: String,
  toggleLanguage: Function,
  t: Function
});

const scrolled      = ref(false);
const mobileOpen    = ref(false);
const activeSection = ref('home');

const navItems = computed(() => [
  { href: '#home',       id: 'home',       label: props.t('nav.home') },
  { href: '#homebot',    id: 'homebot',    label: props.t('nav.homebot') },
  { href: '#projects',   id: 'projects',   label: props.t('nav.projects') },
  { href: '#skills',     id: 'skills',     label: props.t('nav.skills') },
  { href: '#experience', id: 'experience', label: props.t('nav.experience') },
  { href: '#contact',    id: 'contact',    label: props.t('nav.contact') }
]);

let sectionObserver = null;

const onScroll = () => {
  scrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id;
      });
    },
    { threshold: 0, rootMargin: '-30% 0px -60% 0px' }
  );

  document.querySelectorAll('section[id]').forEach((s) => sectionObserver.observe(s));
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  sectionObserver?.disconnect();
});
</script>

<style scoped>
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

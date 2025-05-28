<template>
  <nav class="fixed w-full z-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-yellow-500/20">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-yellow-500 font-bold text-xl">
        <span class="text-black dark:text-white">&lt;</span>{{ t('nav.brand') }}<span class="text-black dark:text-white">/&gt;</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8 items-center">
        <a v-for="item in navItems" :key="item.href" :href="item.href" class="hover:text-yellow-500 transition-colors">
          {{ item.label }}
        </a>

        <!-- Language Toggle -->
        <button
            @click="toggleLanguage"
            class="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :title="currentLanguage === 'pt' ? 'Switch to English' : 'Mudar para Português'"
        >
          <globe-icon class="h-4 w-4 text-gray-600 dark:text-gray-300" />
          <span class="text-sm font-medium">{{ currentLanguage.toUpperCase() }}</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <sun-icon v-if="isDark" class="h-5 w-5 text-yellow-500" />
          <moon-icon v-else class="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <!-- Mobile Controls -->
      <div class="md:hidden flex items-center space-x-2">
        <button
            @click="toggleLanguage"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <span class="text-xs font-medium">{{ currentLanguage.toUpperCase() }}</span>
        </button>

        <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <sun-icon v-if="isDark" class="h-5 w-5 text-yellow-500" />
          <moon-icon v-else class="h-5 w-5 text-gray-600" />
        </button>

        <button @click="toggleMobileMenu">
          <menu-icon v-if="!mobileMenuOpen" class="h-6 w-6 text-yellow-500" />
          <x-icon v-else class="h-6 w-6 text-yellow-500" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-yellow-500/20 py-4">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="hover:text-yellow-500 transition-colors"
            @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  Menu as MenuIcon,
  X as XIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  Globe as GlobeIcon
} from 'lucide-vue-next';

const props = defineProps({
  isDark: Boolean,
  toggleDarkMode: Function,
  currentLanguage: String,
  toggleLanguage: Function,
  t: Function
});

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const navItems = computed(() => [
  { href: "#home", label: props.t('nav.home') },
  { href: "#skills", label: props.t('nav.skills') },
  { href: "#experience", label: props.t('nav.experience') },
  { href: "#projects", label: props.t('nav.projects') },
  { href: "#contact", label: props.t('nav.contact') }
]);
</script>
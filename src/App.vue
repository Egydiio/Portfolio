<template>
  <div :class="isDark ? 'dark' : ''" class="min-h-screen transition-colors duration-300">
    <div class="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <TheHeader
          :isDark="isDark"
          :toggleDarkMode="toggleDarkMode"
          :currentLanguage="currentLanguage"
          :toggleLanguage="toggleLanguage"
          :t="t"
      />

      <main>
        <HeroSection :t="t" />
        <SkillsSection :t="t" />
        <ExperienceSection :t="t" />
        <ProjectsSection :t="t" />
        <ContactSection
            :t="t"
            :isDark="isDark"
            :currentLanguage="currentLanguage"
        />
      </main>

      <TheFooter :t="t" />
    </div>
  </div>
</template>

<script setup>
import TheHeader from './components/layout/Header.vue';
import TheFooter from './components/layout/Footer.vue';
import HeroSection from './components/sections/HeroSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import { useTheme } from './composables/useTheme';
import { useLanguage } from './composables/useLanguage';

const { isDark, toggleDarkMode } = useTheme();
const { currentLanguage, toggleLanguage, t } = useLanguage();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

* {
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #eab308;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ca8a04;
}

.dark ::-webkit-scrollbar-track {
  background: #111;
}

.dark ::-webkit-scrollbar-thumb {
  background: #eab308;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #ca8a04;
}

* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
</style>

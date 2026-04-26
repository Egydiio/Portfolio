<template>
  <div class="dark">
    <BootSequence />
    <div class="min-h-screen bg-black text-white">
      <TheHeader
        :isDark="isDark"
        :toggleDarkMode="toggleDarkMode"
        :currentLanguage="currentLanguage"
        :toggleLanguage="toggleLanguage"
        :t="t"
      />

      <main>
        <HeroSection :t="t" />
        <HomeBotSection :t="t" />
        <ProjectsSection :t="t" />
        <SkillsSection :t="t" />
        <ExperienceSection :t="t" />
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
import TheHeader      from './components/layout/Header.vue';
import TheFooter      from './components/layout/Footer.vue';
import BootSequence   from './components/ui/BootSequence.vue';
import HeroSection    from './components/sections/HeroSection.vue';
import HomeBotSection from './components/sections/HomeBotSection.vue';
import SkillsSection  from './components/sections/SkillsSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import { useTheme }    from './composables/useTheme';
import { useLanguage } from './composables/useLanguage';

const { isDark, toggleDarkMode } = useTheme();
const { currentLanguage, toggleLanguage, t } = useLanguage();
</script>

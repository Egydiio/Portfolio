<template>
  <section id="home" class="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
    <div class="container mx-auto px-4 py-16">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            <span class="text-black dark:text-white">{{ t('hero.greeting') }} </span>
            <span class="text-yellow-500"> João Egydio</span>
          </h1>
          <h2 class="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300">{{ t('hero.title') }}</h2>
          <p class="text-gray-500 dark:text-gray-400 mb-8 text-lg">
            {{ t('hero.description') }}
          </p>
          <div class="flex space-x-4">
            <a href="#contact" class="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-medium transition-colors">
              {{ t('hero.contactBtn') }}
            </a>
            <a href="#projects" class="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-6 py-3 rounded-md font-medium transition-colors">
              {{ t('hero.projectsBtn') }}
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <div class="absolute w-60 h-60 md:w-72 md:h-72 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center border-2 border-yellow-500 overflow-hidden">
              <img
                  src="/img/test5.png"
                  alt="João Egydio"
                  class="w-full h-full object-cover rounded-full"
                  style="object-position: center -10%; transform: scale(1.3); transition-duration: 2s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

defineProps({
  t: Function
});
</script>
<template>
  <footer class="border-t border-yellow-500/10 bg-black py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <span class="font-mono text-sm font-bold text-yellow-500">
          <span class="text-zinc-600">&lt;</span>eg<span class="text-zinc-600">/&gt;</span>
        </span>

        <p class="text-zinc-600 text-xs font-mono">
          © {{ year }} João Egydio. {{ t('footer.rights') }}
        </p>

        <a href="#home" class="text-xs text-zinc-600 hover:text-yellow-500 font-mono transition-colors">
          {{ t('footer.backToTop') }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

defineProps({ t: Function });

const year = computed(() => new Date().getFullYear());
</script>

<template>
  <section id="contact" ref="sectionRef" class="py-24 bg-black relative">
    <div class="absolute top-0 left-0 right-0 h-px divider"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-14 reveal">
        <span class="text-xs font-mono text-zinc-600 uppercase tracking-widest">— reach out —</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-3 mb-3 text-white">
          {{ t('contact.title') }} <span class="text-yellow-500">{{ t('contact.titleHighlight') }}</span>
        </h2>
        <p class="text-zinc-500 max-w-xl mx-auto text-sm">{{ t('contact.description') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <!-- Contact Info -->
        <div class="card p-7 reveal reveal-delay-1">
          <h3 class="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">{{ t('contact.info.title') }}</h3>

          <div class="space-y-5">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <mail-icon class="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <p class="text-xs text-zinc-600 font-mono mb-0.5">{{ t('contact.info.email') }}</p>
                <a href="mailto:egydiio@hotmail.com" class="text-sm text-zinc-300 hover:text-yellow-500 transition-colors">egydiio@hotmail.com</a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <phone-icon class="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <p class="text-xs text-zinc-600 font-mono mb-0.5">{{ t('contact.info.phone') }}</p>
                <a href="tel:+5531981114334" class="text-sm text-zinc-300 hover:text-yellow-500 transition-colors">+55 (31) 98111-4334</a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <map-pin-icon class="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <p class="text-xs text-zinc-600 font-mono mb-0.5">{{ t('contact.info.location') }}</p>
                <p class="text-sm text-zinc-300">{{ t('contact.info.locationValue') }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-zinc-900">
            <p class="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">{{ t('contact.social.title') }}</p>
            <div class="flex gap-3">
              <a
                href="https://github.com/Egydiio"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-yellow-500/40 hover:text-yellow-500 text-zinc-400 transition-all"
              >
                <github-icon class="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/joaoegydio/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-yellow-500/40 hover:text-yellow-500 text-zinc-400 transition-all"
              >
                <linkedin-icon class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="reveal reveal-delay-2">
          <ContactForm :t="t" :isDark="isDark" :currentLanguage="currentLanguage" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Github as GithubIcon,
  Linkedin as LinkedinIcon
} from 'lucide-vue-next';
import ContactForm from '../ui/ContactForm.vue';
import { useReveal } from '../../composables/useReveal';

defineProps({ t: Function, isDark: Boolean, currentLanguage: String });

const sectionRef = ref(null);
useReveal(sectionRef);
</script>

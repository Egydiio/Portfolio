<template>
  <section id="homebot" ref="sectionRef" class="py-24 bg-black relative overflow-hidden">
    <!-- Background accent -->
    <div class="absolute top-0 left-0 right-0 h-px divider"></div>
    <div class="absolute bottom-0 left-0 right-0 h-px divider"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/3 rounded-full blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12 reveal" ref="headerEl">
        <span class="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-xs font-mono font-bold mb-4">
          {{ t('homebot.badge') }}
        </span>
        <h2 class="text-4xl md:text-6xl font-bold mb-3 text-white">
          {{ t('homebot.title') }}
        </h2>
        <p class="text-xl text-yellow-500 font-medium mb-4">{{ t('homebot.subtitle') }}</p>
        <p class="text-zinc-400 max-w-2xl mx-auto leading-relaxed">{{ t('homebot.description') }}</p>
      </div>

      <!-- Main Content: Chat Demo + Info -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

        <!-- Chat Demo (3/5 width) -->
        <div class="lg:col-span-3 reveal reveal-delay-1">
          <div class="terminal h-full">
            <div class="terminal-header">
              <div class="terminal-dot red"></div>
              <div class="terminal-dot yellow"></div>
              <div class="terminal-dot green"></div>
              <span class="ml-3 text-xs text-zinc-500 font-mono">homebot — live demo</span>
              <span class="ml-auto flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-xs text-green-500 font-mono">online</span>
              </span>
            </div>

            <div class="p-5 flex flex-col gap-4 min-h-80">
              <!-- Bot greeting message -->
              <div v-if="typedGreeting" class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 text-sm">🤖</div>
                <div class="flex-1">
                  <div class="bg-zinc-900/80 border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-zinc-200 leading-relaxed max-w-sm">
                    {{ typedGreeting }}<span v-if="!greetingDone" class="text-yellow-500 cursor-blink">|</span>
                  </div>
                </div>
              </div>

              <!-- User message -->
              <div v-if="userMessage" class="flex gap-3 justify-end">
                <div class="bg-yellow-500/15 border border-yellow-500/20 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-yellow-100 max-w-xs">
                  {{ userMessage }}
                </div>
                <div class="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 text-xs font-bold text-zinc-300">
                  JE
                </div>
              </div>

              <!-- Typing indicator -->
              <div v-if="isTyping" class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 text-sm">🤖</div>
                <div class="bg-zinc-900/80 border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div class="flex gap-1.5 items-center h-5">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                  </div>
                </div>
              </div>

              <!-- Bot response -->
              <div v-if="botResponse" class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 text-sm">🤖</div>
                <div class="flex-1">
                  <div class="bg-zinc-900/80 border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-zinc-200 leading-relaxed max-w-sm">
                    {{ botResponse }}<span v-if="!responseDone" class="text-yellow-500 cursor-blink">|</span>
                  </div>
                </div>
              </div>

              <!-- Suggestion chips -->
              <div v-if="greetingDone && !userMessage" class="flex flex-wrap gap-2 pl-11">
                <button
                  v-for="s in suggestions"
                  :key="s.id"
                  @click="selectSuggestion(s)"
                  class="px-3 py-2 rounded-xl text-xs border border-yellow-500/25 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all font-medium"
                >{{ s.label }}</button>
              </div>

              <!-- Reset -->
              <div v-if="responseDone" class="pl-11">
                <button
                  @click="resetChat"
                  class="px-4 py-2 rounded-xl text-xs border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all font-mono"
                >{{ t('homebot.resetBtn') }}</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Info Panel (2/5 width) -->
        <div class="lg:col-span-2 flex flex-col gap-5 reveal reveal-delay-2">
          <!-- Tech Stack -->
          <div class="card p-6">
            <h4 class="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">{{ t('homebot.techTitle') }}</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in technologies"
                :key="tech"
                class="px-3 py-1.5 bg-yellow-500/8 border border-yellow-500/20 rounded-lg text-yellow-500 text-xs font-mono font-medium"
              >{{ tech }}</span>
            </div>
          </div>

          <!-- Metrics -->
          <div class="card p-6">
            <h4 class="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Overview</h4>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                <span class="text-sm text-zinc-300">Automação residencial com IA</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                <span class="text-sm text-zinc-300">API REST + MQTT Protocol</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                <span class="text-sm text-zinc-300">App mobile-first responsivo</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></span>
                <span class="text-sm text-zinc-300">Controle de IoT em tempo real</span>
              </div>
            </div>
          </div>

          <!-- Links -->
          <div class="card p-6">
            <h4 class="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">{{ t('homebot.linksTitle') }}</h4>
            <div class="flex flex-col gap-2">
              <a
                href="https://github.com/Egydiio"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 text-sm text-zinc-300 hover:text-yellow-500 hover:border-yellow-500/30 transition-all group"
              >
                <github-icon class="w-4 h-4 flex-shrink-0" />
                <span>{{ t('homebot.backendBtn') }}</span>
                <arrow-right-icon class="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://github.com/Egydiio"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 text-sm text-zinc-300 hover:text-yellow-500 hover:border-yellow-500/30 transition-all group"
              >
                <github-icon class="w-4 h-4 flex-shrink-0" />
                <span>{{ t('homebot.frontendBtn') }}</span>
                <arrow-right-icon class="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Github as GithubIcon, ArrowRight as ArrowRightIcon } from 'lucide-vue-next';
import { useReveal } from '../../composables/useReveal';

const props = defineProps({ t: Function });

const sectionRef   = ref(null);
const typedGreeting = ref('');
const greetingDone  = ref(false);
const userMessage   = ref('');
const isTyping      = ref(false);
const botResponse   = ref('');
const responseDone  = ref(false);
const chatStarted   = ref(false);

useReveal(sectionRef);

const suggestions = computed(() => props.t('homebot.suggestions'));
const technologies = computed(() => props.t('homebot.technologies'));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const typeText = async (text, target, onDone) => {
  target.value = '';
  for (const char of [...text]) {
    target.value += char;
    await sleep(22);
  }
  if (onDone) onDone();
};

const startChat = async () => {
  if (chatStarted.value) return;
  chatStarted.value = true;
  await sleep(400);
  const greeting = props.t('homebot.greeting');
  await typeText(greeting, typedGreeting, () => { greetingDone.value = true; });
};

const selectSuggestion = async (suggestion) => {
  userMessage.value = suggestion.label;
  isTyping.value = true;
  await sleep(1600);
  isTyping.value = false;
  await typeText(suggestion.response, botResponse, () => { responseDone.value = true; });
};

const resetChat = async () => {
  userMessage.value  = '';
  botResponse.value  = '';
  typedGreeting.value = '';
  greetingDone.value  = false;
  responseDone.value  = false;
  chatStarted.value   = false;
  await sleep(100);
  startChat();
};

let sectionObserver = null;

onMounted(() => {
  sectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startChat();
        sectionObserver?.disconnect();
      }
    },
    { threshold: 0.25 }
  );
  if (sectionRef.value) sectionObserver.observe(sectionRef.value);
});

onUnmounted(() => sectionObserver?.disconnect());
</script>

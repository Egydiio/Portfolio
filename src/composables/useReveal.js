import { onMounted, onUnmounted } from 'vue';

export function useReveal(containerRef) {
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const container = containerRef?.value;
    if (container) {
      container.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
  });

  onUnmounted(() => {
    observer?.disconnect();
    observer = null;
  });
}

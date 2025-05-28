import { ref, onMounted } from 'vue';

export function useTheme() {
    const isDark = ref(false);

    onMounted(() => {
        // Load dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode !== null) {
            isDark.value = savedDarkMode === 'true';
        } else {
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    });

    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        localStorage.setItem('darkMode', isDark.value.toString());
    };

    return { isDark, toggleDarkMode };
}
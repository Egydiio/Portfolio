import { ref, onMounted } from 'vue';

export function useTheme() {
    const isDark = ref(true);

    onMounted(() => {
        const saved = localStorage.getItem('darkMode');
        isDark.value = saved !== null ? saved === 'true' : true;
    });

    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        localStorage.setItem('darkMode', isDark.value.toString());
    };

    return { isDark, toggleDarkMode };
}

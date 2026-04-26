import { ref, onMounted } from 'vue';

const translations = {
    pt: {
        nav: {
            brand: 'Portfolio',
            home: 'Início',
            homebot: 'HomeBot',
            projects: 'Projetos',
            skills: 'Stack',
            experience: 'Experiência',
            contact: 'Contato'
        },
        hero: {
            greeting: 'Olá, eu sou',
            title: 'Desenvolvedor Full Stack',
            description: 'Apaixonado por criar soluções inovadoras e usar tecnologia para resolver problemas complexos. Com expertise em desenvolvimento, infraestrutura e cibersegurança.',
            contactBtn: 'Entre em Contato',
            projectsBtn: 'Ver Projetos',
            terminalLines: [
                { type: 'header', text: 'EGYDIO OS v2.0 ─── Conectado', color: 'text-yellow-500' },
                { type: 'command', text: 'whoami' },
                { type: 'output', text: 'João Egydio', color: 'text-white font-bold' },
                { type: 'command', text: 'cat cargo.txt' },
                { type: 'output', text: 'Desenvolvedor Full Stack', color: 'text-green-400' },
                { type: 'command', text: 'pwd' },
                { type: 'output', text: '/home/joao/minas-gerais/brasil', color: 'text-blue-400' },
                { type: 'command', text: 'cat stack.txt' },
                { type: 'output', text: 'PHP · Laravel · Vue.js · Docker · SQL · CI/CD', color: 'text-green-400' },
                { type: 'command', text: 'status --check' },
                { type: 'output', text: '● Disponível para oportunidades', color: 'text-yellow-400' }
            ]
        },
        homebot: {
            badge: '⭐ Projeto Principal',
            title: 'HomeBot',
            subtitle: 'Assistente Inteligente para Casa',
            description: 'Sistema completo de automação residencial com IA integrada. Controle dispositivos, monitore sensores e receba insights inteligentes — tudo pelo seu celular ou computador.',
            demoTitle: 'Experimente ao vivo',
            greeting: 'Olá! Sou o HomeBot 🏠 Seu assistente inteligente para casa. O que posso fazer por você hoje?',
            suggestions: [
                {
                    id: 1,
                    label: '🏠 Status da casa',
                    response: '🏠 Tudo operacional! Sala: 22°C, 3 luzes acesas. Portão: fechado ✓. Câmeras: online ✓. Consumo de energia 12% abaixo da média mensal. Nenhum alerta ativo.'
                },
                {
                    id: 2,
                    label: '💡 Acender as luzes',
                    response: '✅ Luzes da sala e corredor ativadas! Intensidade em 80%. Quer ajustar o brilho ou definir um timer para desligar automaticamente?'
                },
                {
                    id: 3,
                    label: '🌙 Modo noturno',
                    response: '🌙 Modo noturno ativado! Luzes reduzidas a 15%, portão verificado e trancado, câmeras em modo infravermelho. Alarme configurado para 7h. Boa noite!'
                }
            ],
            resetBtn: '↺ Nova conversa',
            techTitle: 'Stack do projeto',
            linksTitle: 'Repositórios',
            backendBtn: 'Backend',
            frontendBtn: 'Frontend',
            technologies: ['Python', 'Django', 'Vue.js', 'MQTT', 'REST API', 'Docker', 'IoT']
        },
        skills: {
            title: 'Stack',
            titleHighlight: 'Técnica',
            description: 'Tecnologias com as quais trabalho no dia a dia, do frontend ao DevOps.',
            frontend: {
                title: 'Frontend',
                skills: [
                    { name: 'Vue.js', level: 90 },
                    { name: 'JavaScript', level: 88 },
                    { name: 'Tailwind CSS', level: 88 },
                    { name: 'HTML & CSS', level: 92 },
                    { name: 'React', level: 68 }
                ]
            },
            backend: {
                title: 'Backend',
                skills: [
                    { name: 'PHP / Laravel', level: 90 },
                    { name: 'HyperF', level: 72 },
                    { name: 'SQL / Oracle', level: 82 },
                    { name: 'REST APIs', level: 88 },
                    { name: 'Microsserviços', level: 75 }
                ]
            },
            devops: {
                title: 'DevOps & Infra',
                skills: [
                    { name: 'Docker', level: 80 },
                    { name: 'Linux', level: 78 },
                    { name: 'CI/CD', level: 72 },
                    { name: 'Git / GitHub', level: 88 },
                    { name: 'Cibersegurança', level: 68 }
                ]
            }
        },
        experience: {
            title: 'Experiência',
            titleHighlight: 'Profissional',
            description: 'Minha jornada profissional e as empresas com as quais tive o privilégio de trabalhar.',
            jobs: [
                {
                    title: 'Desenvolvedor Full Stack PHP',
                    company: 'Onfly',
                    period: '2023 - 2025',
                    description: 'Desenvolvimento de um sistema interno de gestão de VIPs para a Onfly, incluindo arquitetura e implementação.\nManutenção e evolução de frontend, backend, APIs e microsserviços da empresa, garantindo desempenho, escalabilidade e integridade do sistema.',
                    technologies: ['PHP/Laravel', 'Vue/JavaScript', 'SQL', 'GitHub', 'Docker', 'Microsserviços', 'Quasar', 'Testes']
                },
                {
                    title: 'Desenvolvedor Full Stack PHP',
                    company: 'Distribuidora Gama',
                    period: '2022 - 2023',
                    description: 'Desenvolvimento de módulos para o sistema interno da GAMA, atuando tanto no frontend quanto no backend.\nManutenção e otimização do sistema, incluindo ajustes no banco de dados para melhor desempenho e integridade dos dados.',
                    technologies: ['PHP/Laravel', 'Vue/JavaScript', 'Oracle', 'GitHub']
                },
                {
                    title: 'Técnico de Suporte em TI',
                    company: 'Distribuidora Gama',
                    period: '2021 - 2022',
                    description: 'Atendimento a chamados de suporte técnico, diagnosticando e solucionando problemas relacionados a hardware, software, rede e telefonia.\nManutenção preventiva e corretiva de computadores, infraestrutura de rede e ramais.',
                    technologies: ['Hardware', 'Windows Server', 'Assistência Técnica', 'Pacote Office']
                }
            ]
        },
        projects: {
            title: 'Outros',
            titleHighlight: 'Projetos',
            description: 'Mais projetos que fazem parte do meu ecossistema de desenvolvimento.',
            demo: 'Demo',
            code: 'Código',
            viewAll: 'Ver todos no GitHub',
            items: [
                {
                    title: 'Plataforma E-Commerce',
                    description: 'API em Laravel para um SaaS de vendas online. Permite criar lojas virtuais para vender produtos físicos ou digitais com facilidade e eficiência.',
                    technologies: ['Laravel', 'Vue.js', 'SQL', 'Tailwind', 'REST API'],
                    front: 'Frontend',
                    linkFront: 'https://github.com/Egydiio/saas-vendas-frontend',
                    back: 'Backend',
                    linkBack: 'https://github.com/Egydiio/saas-vendas-backend'
                },
                {
                    title: 'Portfolio',
                    description: 'Este portfólio — um OS interativo com boot sequence, chat demo do HomeBot, animações e experiência imersiva. Construído em Vue 3 + Vite.',
                    technologies: ['Vue.js', 'Vite', 'Tailwind', 'EmailJS'],
                    link: '#'
                },
                {
                    title: 'Projeto Despesas',
                    description: 'CRUD completo para controle de despesas pessoais. Permite criar, listar, atualizar e excluir registros com persistência de dados via API REST.',
                    technologies: ['Laravel', 'Vue.js', 'SQL', 'REST API'],
                    link: 'https://github.com/Egydiio/Projeto-Despesas'
                }
            ]
        },
        contact: {
            title: 'Vamos',
            titleHighlight: 'Conversar',
            description: 'Aberto a oportunidades, projetos freelance e colaborações. Me chame por qualquer canal abaixo.',
            info: {
                title: 'Informações',
                email: 'Email',
                phone: 'Telefone',
                location: 'Localização',
                locationValue: 'Minas Gerais, Brasil'
            },
            social: {
                title: 'Redes'
            },
            form: {
                title: 'Enviar Mensagem',
                name: 'Nome',
                email: 'Email',
                message: 'Mensagem',
                submit: 'Enviar'
            }
        },
        footer: {
            rights: 'Todos os direitos reservados.',
            backToTop: '↑ Topo'
        }
    },
    en: {
        nav: {
            brand: 'Portfolio',
            home: 'Home',
            homebot: 'HomeBot',
            projects: 'Projects',
            skills: 'Stack',
            experience: 'Experience',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hello, I\'m',
            title: 'Full Stack Developer',
            description: 'Passionate about building innovative solutions and leveraging technology to solve complex problems. Expertise in development, infrastructure, and cybersecurity.',
            contactBtn: 'Contact Me',
            projectsBtn: 'View Projects',
            terminalLines: [
                { type: 'header', text: 'EGYDIO OS v2.0 ─── Connected', color: 'text-yellow-500' },
                { type: 'command', text: 'whoami' },
                { type: 'output', text: 'João Egydio', color: 'text-white font-bold' },
                { type: 'command', text: 'cat role.txt' },
                { type: 'output', text: 'Full Stack Developer', color: 'text-green-400' },
                { type: 'command', text: 'pwd' },
                { type: 'output', text: '/home/joao/minas-gerais/brazil', color: 'text-blue-400' },
                { type: 'command', text: 'cat stack.txt' },
                { type: 'output', text: 'PHP · Laravel · Vue.js · Docker · SQL · CI/CD', color: 'text-green-400' },
                { type: 'command', text: 'status --check' },
                { type: 'output', text: '● Available for opportunities', color: 'text-yellow-400' }
            ]
        },
        homebot: {
            badge: '⭐ Main Project',
            title: 'HomeBot',
            subtitle: 'AI-Powered Home Assistant',
            description: 'Complete home automation system with integrated AI. Control devices, monitor sensors, and receive intelligent insights — all from your phone or computer.',
            demoTitle: 'Try it live',
            greeting: 'Hi! I\'m HomeBot 🏠 Your intelligent home assistant. What can I do for you today?',
            suggestions: [
                {
                    id: 1,
                    label: '🏠 Home status',
                    response: '🏠 All systems go! Living room: 22°C, 3 lights on. Gate: locked ✓. Cameras: online ✓. Energy usage 12% below monthly average. No active alerts.'
                },
                {
                    id: 2,
                    label: '💡 Turn on lights',
                    response: '✅ Living room and hallway lights activated! Brightness set to 80%. Want to adjust the intensity or set a timer to turn them off automatically?'
                },
                {
                    id: 3,
                    label: '🌙 Night mode',
                    response: '🌙 Night mode activated! Lights dimmed to 15%, gate locked, cameras in night vision mode. Alarm set for 7am. Good night!'
                }
            ],
            resetBtn: '↺ New conversation',
            techTitle: 'Tech stack',
            linksTitle: 'Repositories',
            backendBtn: 'Backend',
            frontendBtn: 'Frontend',
            technologies: ['Python', 'Django', 'Vue.js', 'MQTT', 'REST API', 'Docker', 'IoT']
        },
        skills: {
            title: 'Tech',
            titleHighlight: 'Stack',
            description: 'Technologies I work with daily, from frontend to DevOps.',
            frontend: {
                title: 'Frontend',
                skills: [
                    { name: 'Vue.js', level: 90 },
                    { name: 'JavaScript', level: 88 },
                    { name: 'Tailwind CSS', level: 88 },
                    { name: 'HTML & CSS', level: 92 },
                    { name: 'React', level: 68 }
                ]
            },
            backend: {
                title: 'Backend',
                skills: [
                    { name: 'PHP / Laravel', level: 90 },
                    { name: 'HyperF', level: 72 },
                    { name: 'SQL / Oracle', level: 82 },
                    { name: 'REST APIs', level: 88 },
                    { name: 'Microservices', level: 75 }
                ]
            },
            devops: {
                title: 'DevOps & Infra',
                skills: [
                    { name: 'Docker', level: 80 },
                    { name: 'Linux', level: 78 },
                    { name: 'CI/CD', level: 72 },
                    { name: 'Git / GitHub', level: 88 },
                    { name: 'Cybersecurity', level: 68 }
                ]
            }
        },
        experience: {
            title: 'Work',
            titleHighlight: 'Experience',
            description: 'My professional journey and the companies I\'ve had the privilege to work with.',
            jobs: [
                {
                    title: 'Full Stack PHP Developer',
                    company: 'Onfly',
                    period: '2023 - 2025',
                    description: 'Development of an internal VIP management system for Onfly, including architecture and implementation.\nMaintenance and evolution of the company\'s frontend, backend, APIs, and microservices, ensuring performance, scalability, and system integrity.',
                    technologies: ['PHP/Laravel', 'Vue/JavaScript', 'SQL', 'GitHub', 'Docker', 'Microservices', 'Quasar', 'Testing']
                },
                {
                    title: 'Full Stack PHP Developer',
                    company: 'Distribuidora Gama',
                    period: '2022 - 2023',
                    description: 'Development of modules for GAMA\'s internal system, working on both frontend and backend.\nSystem maintenance and optimization, including database adjustments for improved performance and data integrity.',
                    technologies: ['PHP/Laravel', 'Vue/JavaScript', 'Oracle', 'GitHub']
                },
                {
                    title: 'IT Support Technician',
                    company: 'Distribuidora Gama',
                    period: '2021 - 2022',
                    description: 'Handled technical support tickets, diagnosing and resolving hardware, software, network, and telephony issues.\nPreventive and corrective maintenance on computers, network infrastructure, and phone systems.',
                    technologies: ['Hardware', 'Windows Server', 'Technical Support', 'Microsoft Office']
                }
            ]
        },
        projects: {
            title: 'Other',
            titleHighlight: 'Projects',
            description: 'More projects that are part of my development ecosystem.',
            demo: 'Demo',
            code: 'Code',
            viewAll: 'View all on GitHub',
            items: [
                {
                    title: 'E-Commerce Platform',
                    description: 'Laravel API for a SaaS-focused online sales platform. Allows anyone to create an online store to sell physical or digital products efficiently.',
                    technologies: ['Laravel', 'Vue.js', 'SQL', 'Tailwind', 'REST API'],
                    front: 'Frontend',
                    linkFront: 'https://github.com/Egydiio/saas-vendas-frontend',
                    back: 'Backend',
                    linkBack: 'https://github.com/Egydiio/saas-vendas-backend'
                },
                {
                    title: 'Portfolio',
                    description: 'This portfolio — an interactive OS with boot sequence, HomeBot chat demo, animations, and immersive experience. Built with Vue 3 + Vite.',
                    technologies: ['Vue.js', 'Vite', 'Tailwind', 'EmailJS'],
                    link: '#'
                },
                {
                    title: 'Expenses Project',
                    description: 'Full CRUD for personal expense tracking. Create, list, update, and delete records with data persistence via REST API.',
                    technologies: ['Laravel', 'Vue.js', 'SQL', 'REST API'],
                    link: 'https://github.com/Egydiio/Projeto-Despesas'
                }
            ]
        },
        contact: {
            title: 'Let\'s',
            titleHighlight: 'Connect',
            description: 'Open to opportunities, freelance projects, and collaborations. Reach out through any channel below.',
            info: {
                title: 'Contact Info',
                email: 'Email',
                phone: 'Phone',
                location: 'Location',
                locationValue: 'Minas Gerais, Brazil'
            },
            social: {
                title: 'Social'
            },
            form: {
                title: 'Send a Message',
                name: 'Name',
                email: 'Email',
                message: 'Message',
                submit: 'Send'
            }
        },
        footer: {
            rights: 'All rights reserved.',
            backToTop: '↑ Top'
        }
    }
};

export function useLanguage() {
    const currentLanguage = ref('pt');

    onMounted(() => {
        const saved = localStorage.getItem('language');
        if (saved) {
            currentLanguage.value = saved;
        } else {
            currentLanguage.value = navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
        }
    });

    const toggleLanguage = () => {
        currentLanguage.value = currentLanguage.value === 'pt' ? 'en' : 'pt';
        localStorage.setItem('language', currentLanguage.value);
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[currentLanguage.value];
        for (const k of keys) {
            value = value?.[k];
        }
        return value ?? key;
    };

    return { currentLanguage, toggleLanguage, t };
}

import { ref, onMounted } from 'vue';

const translations = {
    pt: {
        nav: {
            brand: 'Portfolio',
            home: 'Início',
            skills: 'Habilidades',
            experience: 'Experiência',
            projects: 'Projetos',
            contact: 'Contato'
        },
        hero: {
            greeting: 'Olá, eu sou',
            title: 'Desenvolvedor Full Stack',
            description: 'Apaixonado por criar soluções inovadoras e usar tecnologia para resolver problemas complexos. Com expertise em desenvolvimento, infraestrutura e cibersegurança.',
            contactBtn: 'Entre em Contato',
            projectsBtn: 'Ver Projetos'
        },
        skills: {
            title: 'Habilidades',
            titleHighlight: 'Técnicas',
            description: 'Uma visão abrangente da minha expertise técnica e das tecnologias com as quais trabalho.',
            frontend: {
                title: 'Desenvolvimento Frontend',
                items: ['HTML5, CSS3, JavaScript', 'Vue.js, React', 'Tailwind CSS, Bootstrap']
            },
            backend: {
                title: 'Desenvolvimento Backend',
                items: ['PHP, Laravel/HyperF', 'SQL, Oracle', 'APIs RESTful']
            },
            devops: {
                title: 'DevOps & Infraestrutura',
                items: ['Docker', 'Pipelines CI/CD', 'Linux']
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
                    description: 'Desenvolvimento de um sistema interno de gestão de VIPs para a Onfly, incluindo arquitetura e implementação.\n' +
                        'Manutenção e evolução de frontend, backend, APIs e microsserviços da empresa, garantindo desempenho, escalabilidade e integridade do sistema.',
                    technologies: ['PHP/Laravel', 'Vue/JavaScript', 'SQL', 'GitHub', 'Docker', "Microsserviços", "Quasar",'Realização de testes']
                },
                {
                    title: 'Desenvolvedor Full Stack PHP',
                    company: 'Distribuidora Gama',
                    period: '2022 - 2023',
                    description: 'Desenvolvimento de módulos para o sistema interno da GAMA, atuando tanto no frontend quanto no backend.\n' +
                        'Manutenção e otimização do sistema, incluindo ajustes no banco de dados para melhor desempenho e integridade dos dados.',
                    technologies: ['PHP/Laravel', 'Vue/JavaScript', 'Oracle', 'GitHub']
                },
                {
                    title: 'Técnico de suporte em TI',
                    company: 'Distribuidora Gama',
                    period: '2021 - 2022',
                    description: 'Atendimento a chamados de suporte técnico, diagnosticando e solucionando problemas relacionados a hardware, software, rede e telefonia.\n' +
                        'Manutenção preventiva e corretiva de computadores, infraestrutura de rede e ramais, garantindo o funcionamento dos sistemas e equipamentos da empresa.',
                    technologies: ['Hardware', 'Windows Server', 'Assistência técnica', 'Pacote Office']
                }
            ]
        },
        projects: {
            title: 'Projetos em',
            titleHighlight: 'Destaque',
            description: 'Uma seleção dos meus trabalhos mais recentes e impactantes.',
            demo: 'Demo',
            code: 'Código',
            viewAll: 'Ver todos os projetos',
            items: [
                {
                    title: 'Plataforma E-Commerce',
                    description: 'Esta é uma API feita em Laravel para um sistema SaaS focado em vendas online. Permite que qualquer pessoa ou empresa crie facilmente sua loja virtual para vender produtos físicos ou digitais, oferecendo uma solução de e-commerce simples e eficiente.',
                    technologies: ['Laravel', 'Vue.js', 'SQL', 'Tailwindcss', 'API RESTful'],
                    front: 'Front',
                    linkFront: 'https://github.com/Egydiio/saas-vendas-frontend',
                    back: 'Back',
                    linkBack: 'https://github.com/Egydiio/saas-vendas-backend',
                },
                {
                    title: 'Portifólio',
                    description: 'Desenvolvi este portfólio com Vue.js para apresentar meus projetos, habilidades e experiências de forma moderna e responsiva. Ele possui interface limpa, componentes reutilizáveis, organização clara e mostra meu domínio em frontend com Vue, rotas e estilo próprio.',
                    technologies: ['Vue.js', 'Vite', 'EmailJS'],
                    link: '#',
                },
                {
                    title: 'Projeto Despesas',
                    description: 'Este é um CRUD simples criado para praticar fundamentos do desenvolvimento web e manipulação de dados. Permite criar, listar, atualizar e excluir registros, ajudando iniciantes a entenderem como funcionam sistemas com persistência de dados.',
                    technologies: ['Laravel', 'Vue.js', 'SQL', 'API RESTful'],
                    link: 'https://github.com/Egydiio/Projeto-Despesas',
                }
            ]
        },
        contact: {
            title: 'Entre em',
            titleHighlight: 'Contato',
            description: 'Interessado em trabalhar juntos? Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo.',
            info: {
                title: 'Informações de Contato',
                email: 'Email',
                phone: 'Telefone',
                location: 'Localização',
                locationValue: 'São Paulo, Brasil'
            },
            social: {
                title: 'Redes Sociais'
            },
            form: {
                title: 'Enviar Mensagem',
                name: 'Nome',
                email: 'Email',
                message: 'Mensagem',
                submit: 'Enviar Mensagem'
            }
        },
        footer: {
            rights: 'Todos os direitos reservados.',
            backToTop: 'Voltar ao topo'
        }
    },
    en: {
        nav: {
            brand: 'Portfolio',
            home: 'Home',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hello, I\'m',
            title: 'Full Stack Developer',
            description: 'Passionate about creating innovative solutions and leveraging technology to solve complex problems. With expertise in development, infrastructure, and cybersecurity.',
            contactBtn: 'Contact Me',
            projectsBtn: 'View Projects'
        },
        skills: {
            title: 'Technical',
            titleHighlight: 'Skills',
            description: 'A comprehensive overview of my technical expertise and the technologies I work with.',
            frontend: {
                title: 'Frontend Development',
                items: ['HTML5, CSS3, JavaScript', 'Vue.js, React', 'Tailwind CSS, Bootstrap']
            },
            backend: {
                title: 'Backend Development',
                items: ['PHP, Laravel/HyperF', 'SQL, Oracle', 'APIs RESTful']
            },
            devops: {
                title: 'DevOps & Infrastructure',
                items: ['Docker', 'Pipelines CI/CD', 'Linux']
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
                    description: 'Development of an internal VIP management system for Onfly, including architecture and implementation.\n' +
                        'Maintenance and evolution of the company\'s frontend, backend, APIs, and microservices, ensuring performance, scalability, and system integrity.',
                    technologies: ['PHP/Laravel', 'Vue/JavaScript', 'SQL', 'GitHub', 'Docker', 'Microservices', 'Quasar', 'Testing']
                },
                {
                    title: 'Full Stack PHP Developer',
                    company: 'Distribuidora Gama',
                    period: '2022 - 2023',
                    description: 'Development of modules for GAMA\'s internal system, working on both frontend and backend.\n' +
                        'System maintenance and optimization, including database adjustments for improved performance and data integrity.',
                    technologies: ['PHP/Laravel', 'Vue/JavaScript', 'Oracle', 'GitHub']
                },
                {
                    title: 'IT Support Technician',
                    company: 'Distribuidora Gama',
                    period: '2021 - 2022',
                    description: 'Handled technical support tickets, diagnosing and resolving hardware, software, network, and telephony issues.\n' +
                        'Performed preventive and corrective maintenance on computers, network infrastructure, and phone systems, ensuring proper operation of company systems and equipment.',
                    technologies: ['Hardware', 'Windows Server', 'Technical Support', 'Microsoft Office']
                }
            ]
        },
        projects: {
            title: 'Featured',
            titleHighlight: 'Projects',
            description: 'A selection of my most recent and impactful work.',
            demo: 'Demo',
            code: 'Code',
            viewAll: 'View all projects',
            items: [
                {
                    title: 'Plataforma E-Commerce',
                    description: 'This is an API developed in Laravel for a SaaS platform focused on online sales. It allows any person or company to easily create their own online store to sell physical or digital products, providing a simple and efficient e-commerce solution.',
                    technologies: ['Laravel', 'Vue.js', 'SQL', 'Tailwindcss', 'API RESTful'],
                    front: 'Front',
                    back: 'Back',
                    linkFront: 'https://github.com/Egydiio/saas-vendas-frontend',
                    linkBack: 'https://github.com/Egydiio/saas-vendas-backend',
                },
                {
                    title: 'Portfolio',
                    description: 'I developed this portfolio using Vue.js to showcase my projects, skills, and experiences in a modern, responsive way. It features a clean interface, reusable components, clear organization, and reflects my frontend knowledge with Vue, routing, and custom styling.',
                    technologies: ['Vue.js', 'Vite', 'EmailJS'],
                    link: '#',
                },
                {
                    title: 'Project Expenses',
                    description: 'This is a simple CRUD project built to practice the fundamentals of web development and data handling. It allows creating, listing, updating, and deleting records, helping beginners understand how systems with data persistence work.',
                    technologies: ['Laravel', 'Vue.js', 'SQL', 'API RESTful'],
                    link: 'https://github.com/Egydiio/Projeto-Despesas',
                }
            ]
        },
        contact: {
            title: 'Get In',
            titleHighlight: 'Touch',
            description: 'Interested in working together? Feel free to reach out through any of the channels below.',
            info: {
                title: 'Contact Information',
                email: 'Email',
                phone: 'Phone',
                location: 'Location',
                locationValue: 'Minas Gerais, Brazil'
            },
            social: {
                title: 'Social Media'
            },
            form: {
                title: 'Send a Message',
                name: 'Name',
                email: 'Email',
                message: 'Message',
                submit: 'Send Message'
            }
        },
        footer: {
            rights: 'All rights reserved.',
            backToTop: 'Back to top'
        }
    }
};

export function useLanguage() {
    const currentLanguage = ref('pt');

    onMounted(() => {
        // Load language preference
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            currentLanguage.value = savedLanguage;
        } else {
            const browserLang = navigator.language.toLowerCase();
            currentLanguage.value = browserLang.startsWith('pt') ? 'pt' : 'en';
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

        return value || key;
    };

    return { currentLanguage, toggleLanguage, t };
}
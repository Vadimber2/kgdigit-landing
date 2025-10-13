import React, { useState, useEffect, useRef } from 'react';
import { Award, BookOpen, Briefcase, Globe, Linkedin, Mail, MessageCircle, Brain, Code, Sparkles } from 'lucide-react';
import vadim_photo from '../assets/vadim_photo.jpeg';
// useScrollAnimation Hook
const useScrollAnimation = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, ...options }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, isVisible };
};

const Mentor = () => {
    const titleAnimation = useScrollAnimation();
    const profileAnimation = useScrollAnimation({ threshold: 0.2 });
    const statsAnimation = useScrollAnimation({ threshold: 0.2 });
    const expertiseAnimation = useScrollAnimation({ threshold: 0.2 });

    const stats = [
        { value: '20+', label: 'лет опыта', icon: Briefcase },
        { value: '10+', label: 'крупных проектов', icon: Code },
        { value: 'Microsoft', label: '7 лет в корпорации', icon: Award },
        { value: 'EU', label: 'международные проекты', icon: Globe }
    ];

    const aiExpertise = [
        {
            icon: Brain,
            title: 'AI & Machine Learning',
            items: [
                'ML-пайплайны для предиктивной аналитики',
                'Рекомендательные системы на базе AI',
                'NLP-решения для анализа данных',
                'Интеграция AI в корпоративные системы'
            ]
        },
        {
            icon: Sparkles,
            title: 'Современные AI-платформы',
            items: [
                'Microsoft Azure AI Services',
                'Claude API и Anthropic экосистема',
                'Разработка AI-агентов и ботов',
                'Автоматизация процессов с AI'
            ]
        },
        {
            icon: Code,
            title: 'Enterprise AI Solutions',
            items: [
                'Data Warehouses с AI-аналитикой',
                'Real-time AI на Big Data платформах',
                'AI для образовательных систем',
                'Гибридные облачно-локальные архитектуры'
            ]
        }
    ];

    const achievements = [
        { year: '2023', title: 'Благодарность от Министерства Образования КР', description: 'За вклад в цифровую трансформацию образования' },
        { year: '2015', title: 'Best Competitive Win | Microsoft Switzerland', description: 'За выдающиеся результаты в проектах трансформации' },
        { year: '2015', title: 'Microsoft Russia Heroes Win', description: 'Признание лучшим специалистом года' },
        { year: '2008', title: 'Microsoft Circle of Excellence Award', description: 'За инновационные решения в архитектуре данных' }
    ];

    const experience = [
        {
            period: '2022 - настоящее время',
            role: 'Старший архитектор данных',
            company: 'EU-проект "Повышение качества образования в Кыргызстане"',
            description: 'Модернизация информационных систем Министерства Образования КР',
            highlights: [
                'Архитектура национальной платформы PISA 2025',
                'AI-системы для анализа образовательных данных',
                'Интеграция ML для предиктивной аналитики'
            ]
        },
        {
            period: '2010 - 2017',
            role: 'Руководитель команды трансформации',
            company: 'Microsoft Corporation, Мюнхен',
            description: 'Облачные решения и AI-интеграции для Enterprise',
            highlights: [
                'Enterprise Data Warehouses на Azure',
                'AI-powered аналитика для университетов',
                'Облачные платформы данных с ML-компонентами'
            ]
        }
    ];

    return (
        <div id="mentor" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Title */}
                <div
                    ref={titleAnimation.ref}
                    className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4 font-medium">
                        Ваш ментор
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
                        Вадим Беркович
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                        AI-архитектор с 20+ летним опытом в Microsoft и международных проектах
                    </p>
                </div>

                {/* Profile Card */}
                <div
                    ref={profileAnimation.ref}
                    className={`max-w-5xl mx-auto mb-12 ${
                        profileAnimation.isVisible ? 'animate-slide-up-fade' : 'animate-on-scroll'
                    }`}
                >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12">
                            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                                    <img
                                        src={vadim_photo}
                                        alt="Вадим"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                        Вадим Беркович
                                    </h3>
                                    <p className="text-blue-100 text-lg mb-4">
                                        Ведущий эксперт по AI, Data Architecture и образовательным системам
                                    </p>
                                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                                        <a href="mailto:vadim.berkovich@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                                            <Mail className="w-4 h-4" />
                                            <span className="text-sm">Email</span>
                                        </a>
                                        <a href="https://wa.me/79210933978" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                                            <MessageCircle className="w-4 h-4" />
                                            <span className="text-sm">WhatsApp</span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/vadimber" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                            <span className="text-sm">LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Архитектор данных и технический лидер с <strong>20+ летним опытом</strong> проектирования корпоративных систем.
                                Специализируется на <strong>AI-решениях, машинном обучении</strong> и модернизации информационных систем.
                                В настоящее время работает над цифровой трансформацией образования в рамках международного
                                <strong> EU-проекта в Кыргызстане</strong>. Имеет опыт работы в <strong>Microsoft Corporation</strong> (Мюнхен)
                                и множество наград за инновационные решения.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div
                    ref={statsAnimation.ref}
                    className={`max-w-5xl mx-auto mb-12 ${
                        statsAnimation.isVisible ? 'animate-slide-up-fade' : 'animate-on-scroll'
                    }`}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Icon className="w-8 h-8 text-orange-500 mb-3" />
                                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* AI Expertise */}
                <div
                    ref={expertiseAnimation.ref}
                    className={`max-w-5xl mx-auto mb-12 ${
                        expertiseAnimation.isVisible ? 'animate-slide-up-fade' : 'animate-on-scroll'
                    }`}
                >
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                        Экспертиза в AI и Machine Learning
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {aiExpertise.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h4>
                                    <ul className="space-y-2">
                                        {area.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <span className="text-orange-500 mt-1">•</span>
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Experience */}
                <div className="max-w-5xl mx-auto mb-12">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                        Ключевой опыт
                    </h3>
                    <div className="space-y-6">
                        {experience.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900">{job.role}</h4>
                                        <p className="text-orange-600 font-medium">{job.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-500 mt-2 sm:mt-0">{job.period}</span>
                                </div>
                                <p className="text-gray-700 mb-4">{job.description}</p>
                                <div className="space-y-2">
                                    {job.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="max-w-5xl mx-auto mb-12">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                        Достижения и награды
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Award className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-orange-600 font-medium mb-1">{achievement.year}</div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                        Образование и сертификации
                    </h3>
                    <div className="bg-white rounded-xl p-8 shadow-md">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpen className="w-6 h-6 text-orange-500" />
                                    <h4 className="text-xl font-semibold text-gray-900">Высшее образование</h4>
                                </div>
                                <ul className="space-y-3">
                                    <li className="text-gray-700">
                                        <strong>Магистр управления цифровой трансформацией</strong>
                                        <div className="text-sm text-gray-600">FernUni in Hagen, Germany (2021-2026)</div>
                                    </li>
                                    <li className="text-gray-700">
                                        <strong>Магистр бизнес-информатики</strong>
                                        <div className="text-sm text-gray-600">ВШЭ, Москва (2006-2008)</div>
                                    </li>
                                    <li className="text-gray-700">
                                        <strong>Специалист с отличием прикладной математики</strong>
                                        <div className="text-sm text-gray-600">ВШЭ, Москва (1995-2000)</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Award className="w-6 h-6 text-orange-500" />
                                    <h4 className="text-xl font-semibold text-gray-900">Сертификации</h4>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <span className="text-orange-500">✓</span>
                                        <span>Microsoft Certified Solution Developer</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <span className="text-orange-500">✓</span>
                                        <span>ITIL Foundations</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <span className="text-orange-500">✓</span>
                                        <span>Business Modeling ARIS Methodology</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <span className="text-orange-500">✓</span>
                                        <span>ERWin/BPWin Data Modeling</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-3xl mx-auto mt-16 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 sm:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Учитесь у эксперта мирового уровня
                        </h3>
                        <p className="text-lg mb-6 text-white/90">
                            Получите знания от архитектора, который работал в Microsoft, внедрял AI-решения для государственных структур и образовательных систем по всему миру
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="#register" className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Записаться на курс
                            </a>
                            <a href="https://www.linkedin.com/in/vadimber" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors">
                                LinkedIn профиль
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentor;
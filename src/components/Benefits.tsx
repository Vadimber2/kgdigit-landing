import React, { useState } from 'react';
import { Code, Zap, Users, BookOpen, Award, Headphones } from 'lucide-react';
import Modal from './Modal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits = () => {
    const [selectedBenefit, setSelectedBenefit] = useState<any>(null);
    const titleAnimation = useScrollAnimation();
    const cardsAnimation = useScrollAnimation({ threshold: 0.1 });
    const methodologyAnimation = useScrollAnimation({ threshold: 0.2 });

    const benefits = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Практический опыт",
            description: "24 часа hands-on практики с реальными проектами и кейсами",
            details: {
                overview: "Более 70% времени курса - это практическая работа над реальными задачами. Вы не просто слушаете теорию, а сразу применяете знания на практике.",
                examples: [
                    {
                        title: "День 1: Создание landing page",
                        description: "Разработка полноценного лендинга с интерактивными элементами используя Claude и Artifacts",
                        result: "Готовая страница с формами, анимациями и адаптивным дизайном"
                    },
                    {
                        title: "День 2: API-сервис с tool use",
                        description: "Построение REST API с интеграцией внешних сервисов через function calling",
                        result: "Рабочий API с базой данных и аутентификацией"
                    },
                    {
                        title: "День 3: MCP сервер для корпоративной системы",
                        description: "Создание собственного MCP сервера для интеграции с Jira/Confluence/Drive",
                        result: "Production-ready интеграция с вашими корпоративными инструментами"
                    }
                ],
                metrics: [
                    "15+ практических упражнений",
                    "3 полноценных проекта",
                    "40+ часов домашних заданий (опционально)",
                    "Реальные задачи из production"
                ]
            }
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "От новичка до профи",
            description: "Полный путь: от веб-интерфейса до enterprise решений",
            details: {
                overview: "Уникальная прогрессивная программа: начинаем с простого веб-интерфейса, заканчиваем enterprise MCP серверами. Каждый уровень логично строится на предыдущем.",
                examples: [
                    {
                        title: "Уровень 1: Claude.ai (День 1)",
                        description: "Освоение веб-интерфейса, Projects, Artifacts - всё что нужно для ежедневной работы",
                        result: "Умение решать 80% задач без написания кода"
                    },
                    {
                        title: "Уровень 2: Claude API (День 1-2)",
                        description: "Автоматизация через API, промпт-инжиниринг, tool use и function calling",
                        result: "Интеграция Claude в существующие системы и workflows"
                    },
                    {
                        title: "Уровень 3: Claude Code (День 2-3)",
                        description: "Агентное программирование, делегирование разработки AI, CI/CD интеграция",
                        result: "10x ускорение разработки через AI-агента"
                    },
                    {
                        title: "Уровень 4: MCP (День 3-4)",
                        description: "Enterprise интеграции, создание собственных серверов, production deployment",
                        result: "Полноценная AI-инфраструктура в организации"
                    }
                ],
                metrics: [
                    "4 уровня сложности",
                    "Каждый уровень расширяет предыдущий",
                    "Подходит и для новичков и для опытных разработчиков",
                    "Гибкая траектория обучения"
                ]
            }
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Малые группы",
            description: "15-20 человек для эффективного обучения и внимания к каждому",
            details: {
                overview: "Мы сознательно ограничиваем размер группы, чтобы каждый участник получил максимум внимания и мог решить свои специфические задачи.",
                examples: [
                    {
                        title: "Индивидуальный подход",
                        description: "Инструктор успевает помочь каждому участнику с его конкретными вопросами и задачами",
                        result: "Решение ваших реальных рабочих задач прямо на курсе"
                    },
                    {
                        title: "Парное программирование",
                        description: "Работа в парах с другими участниками, обмен опытом и лучшими практиками",
                        result: "Networking с коллегами из индустрии"
                    },
                    {
                        title: "Код-ревью от инструктора",
                        description: "Детальный разбор вашего кода с рекомендациями по улучшению",
                        result: "Качество кода на production уровне"
                    }
                ],
                metrics: [
                    "Максимум 20 человек в группе",
                    "1 инструктор на 10 участников",
                    "Минимум 30 минут 1-on-1 времени",
                    "Живая коммуникация и вопросы в любой момент"
                ]
            }
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Полные материалы",
            description: "Слайды, код примеры, templates и checklists",
            details: {
                overview: "Получите полный набор материалов для самостоятельного изучения и применения в работе после курса.",
                examples: [
                    {
                        title: "Документация и слайды",
                        description: "Все презентации в PDF, подробные гайды по каждой теме",
                        result: "База знаний на 200+ страниц"
                    },
                    {
                        title: "Библиотека кода",
                        description: "GitHub репозиторий с примерами, starter templates, готовыми решениями",
                        result: "50+ готовых примеров для copy-paste"
                    },
                    {
                        title: "Инструменты и чеклисты",
                        description: "Checklists для каждого этапа, калькуляторы, templates для презентаций",
                        result: "Готовые инструменты для применения в работе"
                    },
                    {
                        title: "Видео записи",
                        description: "Все сессии курса записаны и доступны для повторного просмотра",
                        result: "Возможность освежить знания в любой момент"
                    }
                ],
                metrics: [
                    "200+ страниц документации",
                    "50+ примеров кода",
                    "20+ готовых templates",
                    "12+ часов видео"
                ]
            }
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Сертификат",
            description: "Официальный сертификат и digital badge для LinkedIn",
            details: {
                overview: "По окончании курса вы получите сертификат, подтверждающий ваши компетенции в работе с Anthropic Claude ecosystem.",
                examples: [
                    {
                        title: "Сертификат о прохождении",
                        description: "Официальный документ с указанием пройденных тем и объема часов (24 акад. часа)",
                        result: "Подтверждение квалификации для работодателя"
                    },
                    {
                        title: "Digital badge для LinkedIn",
                        description: "Современный цифровой badge с верификацией, который можно добавить в профиль",
                        result: "Повышение видимости вашего профиля для рекрутеров"
                    },
                    {
                        title: "Портфолио проектов",
                        description: "Ссылки на ваши проекты, созданные во время курса",
                        result: "Демонстрация практических навыков потенциальным работодателям"
                    }
                ],
                metrics: [
                    "Сертификат с уникальным ID",
                    "Верифицируемый digital badge",
                    "Добавление в alumni network",
                    "20% скидка на следующие курсы"
                ]
            }
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "Поддержка 30 дней",
            description: "Доступ к learning platform и community forum после курса",
            details: {
                overview: "Обучение не заканчивается после последнего дня курса. Мы продолжаем поддерживать вас в течение месяца и даём доступ к сообществу выпускников.",
                examples: [
                    {
                        title: "Email поддержка",
                        description: "Задавайте вопросы по email и получайте развернутые ответы от инструкторов",
                        result: "Решение возникших проблем при применении знаний"
                    },
                    {
                        title: "Консультации 1-on-1",
                        description: "Две персональные консультации по 30 минут для разбора ваших проектов",
                        result: "Помощь в реальных рабочих задачах"
                    },
                    {
                        title: "Community forum",
                        description: "Закрытый форум выпускников для обмена опытом и решений",
                        result: "Networking и взаимопомощь"
                    },
                    {
                        title: "Ежемесячные вебинары",
                        description: "Обновления от Anthropic, новые фичи, лучшие практики",
                        result: "Постоянное развитие навыков"
                    }
                ],
                metrics: [
                    "30 дней email поддержки",
                    "2 консультации по 30 минут",
                    "Доступ к forum навсегда",
                    "12+ вебинаров в год"
                ]
            }
        }
    ];

    const format = [
        { label: "Live coding и демонстрации", value: "40%" },
        { label: "Hands-on практика", value: "35%" },
        { label: "Теория", value: "15%" },
        { label: "Дискуссии и Q&A", value: "10%" }
    ];

    return (
        <div id="benefits" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`max-w-3xl mx-auto text-center mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Почему выбирают нас
                    </h2>
                    <p className="text-xl text-gray-600">
                        Максимум практики, минимум теории
                    </p>
                </div>

                <div
                    ref={cardsAnimation.ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedBenefit(benefit)}
                            className={`text-center cursor-pointer group ${
                                cardsAnimation.isVisible
                                    ? `animate-scale-in-fade stagger-${index + 1}`
                                    : 'animate-on-scroll'
                            }`}
                        >
                            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {benefit.description}
                            </p>
                            <span className="text-orange-700 text-sm font-medium">
                Подробнее →
              </span>
                        </div>
                    ))}
                </div>

                <div
                    ref={methodologyAnimation.ref}
                    className={`max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 ${
                        methodologyAnimation.isVisible ? 'animate-slide-up-fade' : 'animate-on-scroll'
                    }`}
                >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                        Методология обучения: Learning by doing
                    </h3>
                    <div className="space-y-4">
                        {format.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-900 font-medium">{item.label}</span>
                                    <span className="text-orange-700 font-semibold">{item.value}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all"
                                        style={{ width: item.value }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={!!selectedBenefit}
                onClose={() => setSelectedBenefit(null)}
                title={selectedBenefit?.title || ''}
            >
                {selectedBenefit && (
                    <div className="space-y-6">
                        <div className="bg-orange-50 rounded-xl p-6">
                            <p className="text-gray-700 leading-relaxed">
                                {selectedBenefit.details.overview}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Что конкретно вы получите
                            </h4>
                            <div className="space-y-4">
                                {selectedBenefit.details.examples.map((example: any, i: number) => (
                                    <div key={i} className="bg-gray-50 rounded-lg p-5">
                                        <h5 className="font-semibold text-gray-900 mb-2">
                                            {example.title}
                                        </h5>
                                        <p className="text-gray-700 mb-3">
                                            {example.description}
                                        </p>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold mt-0.5">✓</span>
                                            <span className="text-gray-600 text-sm italic">
                        {example.result}
                      </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                В цифрах
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                                {selectedBenefit.details.metrics.map((metric: string, i: number) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-700">
                                        <span className="text-orange-500">▪</span>
                                        <span>{metric}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Benefits;
import React, { useState } from 'react';
import { TrendingUp, Target, Users, BookOpen, Award, MessageSquare } from 'lucide-react';
import Modal from '../Modal';

const BenefitsExecutive = () => {
    const [selectedBenefit, setSelectedBenefit] = useState<any>(null);

    const benefits = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Быстрые победы",
            description: "Увидите результаты уже на первом занятии - решите реальные задачи",
            details: {
                overview: "Курс построен так, чтобы вы получили практическую пользу с первого дня. Уже на первом занятии вы решите реальную бизнес-задачу с помощью Claude.",
                examples: [
                    {
                        title: "Первое занятие: анализ финансов",
                        description: "Принесите свой финансовый отчёт - проанализируем его с Claude и найдём инсайты",
                        result: "Экономия 2-3 часов на подготовке отчёта для совета директоров",
                        timeframe: "В первые 2 часа курса"
                    },
                    {
                        title: "День 1, после обеда: автоматизация переписки",
                        description: "Научитесь создавать шаблоны для типовых деловых писем",
                        result: "5-10 часов экономии в неделю на email коммуникации",
                        timeframe: "К концу первого дня"
                    },
                    {
                        title: "День 2: анализ рынка",
                        description: "Получите полный анализ вашего рынка и конкурентов за 30 минут",
                        result: "Отчёт, на который раньше уходила неделя работы аналитика",
                        timeframe: "Второй день курса"
                    }
                ],
                roi: {
                    immediate: "2-3 часа экономии в первый же день",
                    weekly: "5-10 часов экономии после курса",
                    monthly: "20-40 часов экономии в месяц",
                    payback: "Инвестиция окупается за 2-3 недели"
                }
            }
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Фокус на ROI",
            description: "Научитесь измерять и доказывать ценность AI-инициатив",
            details: {
                overview: "Вы получите конкретные инструменты для расчёта возврата инвестиций и сможете обосновать AI-проекты перед советом директоров.",
                examples: [
                    {
                        title: "Калькулятор ROI",
                        description: "Excel модель для расчёта окупаемости AI-внедрения в вашей компании",
                        result: "Точная цифра возврата инвестиций для презентации стейкхолдерам",
                        timeframe: "Получите на День 3"
                    },
                    {
                        title: "Метрики и KPI",
                        description: "Готовый набор метрик для отслеживания успеха AI-проектов",
                        result: "Dashboard для мониторинга adoption и эффективности",
                        timeframe: "Настроите на День 3"
                    },
                    {
                        title: "Шаблон презентации для совета директоров",
                        description: "Готовая презентация с финансовым обоснованием AI-инвестиций",
                        result: "Одобрение бюджета на AI-проекты",
                        timeframe: "Адаптируете под вашу компанию"
                    }
                ],
                roi: {
                    timeToValue: "Первые результаты в первую неделю",
                    adoption: "80%+ команды используют AI через 3 месяца",
                    efficiency: "30-50% рост продуктивности",
                    revenue: "Кейсы с 10x ростом выручки (Replit)"
                }
            }
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Малые группы",
            description: "Индивидуальный подход и обсуждение ваших кейсов",
            details: {
                overview: "Максимум 15 участников в группе. Каждый руководитель получит время для обсуждения своих специфических задач и вызовов.",
                examples: [
                    {
                        title: "Индивидуальные консультации",
                        description: "Разбор ваших конкретных бизнес-задач с инструктором",
                        result: "Решение для вашей специфической ситуации",
                        timeframe: "Минимум 30 минут 1-on-1 времени"
                    },
                    {
                        title: "Peer learning",
                        description: "Обмен опытом с другими руководителями из разных индустрий",
                        result: "Networking и новые идеи для вашего бизнеса",
                        timeframe: "В течение всего курса"
                    },
                    {
                        title: "Работа с вашими данными",
                        description: "Принесите свои реальные документы и данные - будем работать с ними",
                        result: "Конкретные результаты для вашей компании",
                        timeframe: "Каждый день курса"
                    }
                ],
                roi: {
                    groupSize: "Максимум 15 человек",
                    attention: "Минимум 30 минут персонального времени",
                    networking: "14+ новых контактов в вашей индустрии",
                    followUp: "2 консультации после курса"
                }
            }
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Готовые шаблоны",
            description: "Библиотека промптов и шаблонов для бизнес-задач",
            details: {
                overview: "Получите готовую библиотеку из 50+ проверенных промптов и шаблонов для типовых задач руководителя.",
                examples: [
                    {
                        title: "Библиотека промптов",
                        description: "50+ готовых промптов для анализа, стратегии, коммуникации",
                        result: "Copy-paste решения для ежедневных задач",
                        timeframe: "Доступ сразу после регистрации"
                    },
                    {
                        title: "Шаблоны документов",
                        description: "Презентации для совета директоров, отчёты, стратегические планы",
                        result: "Экономия 5+ часов на каждом документе",
                        timeframe: "Получите на курсе"
                    },
                    {
                        title: "Рабочая тетрадь",
                        description: "Чек-листы, фреймворки, пошаговые инструкции",
                        result: "Структурированный подход к внедрению AI",
                        timeframe: "Физическая копия на курсе"
                    },
                    {
                        title: "Калькулятор ROI",
                        description: "Excel модель для расчёта окупаемости AI-проектов",
                        result: "Обоснование инвестиций в цифрах",
                        timeframe: "Настроите под свою компанию"
                    }
                ],
                roi: {
                    prompts: "50+ готовых промптов",
                    templates: "20+ шаблонов документов",
                    tools: "10+ инструментов и калькуляторов",
                    updates: "Ежемесячные обновления библиотеки"
                }
            }
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Сертификат",
            description: "Подтверждение компетенций в AI для руководителей",
            details: {
                overview: "Сертификат, подтверждающий ваши компетенции в применении AI для бизнес-задач и стратегических решений.",
                examples: [
                    {
                        title: "Сертификат Executive AI Leader",
                        description: "Официальный документ о прохождении курса (12 часов)",
                        result: "Подтверждение компетенций для совета директоров",
                        timeframe: "Получите после завершения курса"
                    },
                    {
                        title: "Digital badge LinkedIn",
                        description: "Верифицируемый badge для профессионального профиля",
                        result: "Повышение видимости как AI-leader",
                        timeframe: "Добавьте сразу после курса"
                    },
                    {
                        title: "Кейс-стади вашего проекта",
                        description: "Документирование вашего пилотного AI-проекта",
                        result: "Портфолио для демонстрации результатов",
                        timeframe: "Создадите на День 3"
                    }
                ],
                roi: {
                    recognition: "Признание как AI-лидер в индустрии",
                    career: "Новые карьерные возможности",
                    network: "Доступ к сообществу AI-лидеров",
                    discount: "20% скидка на следующие курсы"
                }
            }
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Сообщество",
            description: "Доступ к сообществу руководителей, внедряющих AI",
            details: {
                overview: "Присоединитесь к закрытому сообществу из 200+ руководителей, которые уже внедряют AI в своих компаниях.",
                examples: [
                    {
                        title: "Закрытый форум",
                        description: "Обмен опытом, вопросы и ответы, лучшие практики",
                        result: "Решение проблем с помощью опыта других",
                        timeframe: "Доступ навсегда"
                    },
                    {
                        title: "Ежемесячные вебинары",
                        description: "Обновления от Anthropic, новые кейсы, гостевые спикеры",
                        result: "Постоянное развитие и актуальные знания",
                        timeframe: "12+ вебинаров в год"
                    },
                    {
                        title: "Networking события",
                        description: "Встречи выпускников, обмен контактами, партнёрства",
                        result: "Бизнес-возможности и коллаборации",
                        timeframe: "Ежеквартально"
                    },
                    {
                        title: "Менторство",
                        description: "Опытные выпускники помогают новичкам",
                        result: "Быстрый старт и избежание типичных ошибок",
                        timeframe: "По запросу"
                    }
                ],
                roi: {
                    members: "200+ активных участников",
                    industries: "15+ индустрий представлено",
                    countries: "Участники из 10+ стран",
                    response: "Ответ на вопросы в течение 24 часов"
                }
            }
        }
    ];

    const included = [
        {
            title: "Материалы курса",
            items: [
                "Рабочая тетрадь с шаблонами",
                "Библиотека готовых промптов",
                "Калькулятор ROI для AI-проектов",
                "Шаблоны для совета директоров"
            ]
        },
        {
            title: "Доступы",
            items: [
                "30-дневная пробная подписка Claude Pro",
                "Демо корпоративного аккаунта",
                "Доступ к сообществу выпускников",
                "Запись всех сессий"
            ]
        },
        {
            title: "Поддержка",
            items: [
                "30 дней email-поддержки",
                "2 консультации по 30 минут",
                "Ежемесячные вебинары",
                "База знаний и FAQ"
            ]
        }
    ];

    return (
        <div id="benefits" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Почему выбирают этот курс
                    </h2>
                    <p className="text-xl text-gray-600">
                        Разработан специально для руководителей без технического background
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedBenefit(benefit)}
                            className="text-center cursor-pointer group"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {benefit.description}
                            </p>
                            <span className="text-blue-600 text-sm font-medium">
                Подробнее →
              </span>
                        </div>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                        Что включено в курс
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {included.map((section, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
                            >
                                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-blue-500 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={!!selectedBenefit}
                onClose={() => setSelectedBenefit(null)}
                title={selectedBenefit?.title || ''}
            >
                {selectedBenefit && (
                    <div className="space-y-6">
                        <div className="bg-blue-50 rounded-xl p-6">
                            <p className="text-gray-700 leading-relaxed">
                                {selectedBenefit.details.overview}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Конкретные примеры
                            </h4>
                            <div className="space-y-4">
                                {selectedBenefit.details.examples.map((example: any, i: number) => (
                                    <div key={i} className="bg-gray-50 rounded-lg p-5">
                                        <div className="flex items-start justify-between mb-2">
                                            <h5 className="font-semibold text-gray-900">
                                                {example.title}
                                            </h5>
                                            <span className="text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded">
                        {example.timeframe}
                      </span>
                                        </div>
                                        <p className="text-gray-700 mb-3">
                                            {example.description}
                                        </p>
                                        <div className="flex items-start gap-2 bg-white p-3 rounded">
                                            <span className="text-green-500 font-bold mt-0.5">✓</span>
                                            <span className="text-gray-600 text-sm">
                        <strong>Результат:</strong> {example.result}
                      </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                ROI и метрики
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(selectedBenefit.details.roi).map(([key, value]: any, i: number) => (
                                    <div key={i} className="bg-white p-4 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600 mb-1">
                                            {value.split(' ')[0]}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {value.split(' ').slice(1).join(' ')}
                                        </div>
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

export default BenefitsExecutive;
import React, { useState } from 'react';

const ProgramExecutive = () => {
    const [activeDay, setActiveDay] = useState(1);

    const days = [
        {
            day: 1,
            title: "Claude для руководителя - быстрые победы",
            description: "Научитесь использовать Claude для ежедневных задач и увидите первые результаты",
            topics: [
                {
                    time: "09:00 - 10:00",
                    title: "AI-революция и Claude",
                    items: [
                        "Почему AI - это не хайп, а реальность бизнеса",
                        "Что такое Claude и чем он отличается от ChatGPT",
                        "Первое знакомство с Claude.ai"
                    ]
                },
                {
                    time: "10:00 - 10:45",
                    title: "Практика - решаем задачи руководителя",
                    items: [
                        "Работа с документами и данными",
                        "Создание презентаций и отчётов",
                        "Коммуникация и деловые письма"
                    ]
                },
                {
                    time: "11:00 - 12:00",
                    title: "Расширенное мышление для стратегических решений",
                    items: [
                        "Режим расширенного мышления (Extended Thinking)",
                        "Практический кейс: стратегическое решение",
                        "Поиск информации через Claude"
                    ]
                },
                {
                    time: "12:00 - 13:00",
                    title: "Финансовый анализ и визуализация",
                    items: [
                        "Работа с финансовыми данными",
                        "Создание дашбордов и визуализаций",
                        "Практика с вашими данными"
                    ]
                }
            ]
        },
        {
            day: 2,
            title: "AI в бизнес-процессах компании",
            description: "Узнайте, как автоматизировать процессы и получить конкурентное преимущество",
            topics: [
                {
                    time: "09:00 - 10:00",
                    title: "Автоматизация задач руководителя",
                    items: [
                        "Проекты Claude: ваша персональная база знаний",
                        "Автоматизация рутины",
                        "Эффективная коммуникация"
                    ]
                },
                {
                    time: "10:00 - 10:45",
                    title: "Анализ рынка и конкурентная разведка",
                    items: [
                        "Исследование рынка с помощью Claude",
                        "Анализ конкурентов и SWOT-анализ",
                        "Практика: анализ вашего рынка"
                    ]
                },
                {
                    time: "11:00 - 12:00",
                    title: "Разработка бизнес-стратегий с AI",
                    items: [
                        "Стратегическое планирование с Claude",
                        "Анализ возможностей роста",
                        "Управление рисками"
                    ]
                },
                {
                    time: "12:00 - 13:00",
                    title: "Реальные кейсы успеха",
                    items: [
                        "Кейс: Replit - 10x рост выручки",
                        "Примеры из вашей отрасли",
                        "Групповая дискуссия и возможности"
                    ]
                }
            ]
        },
        {
            day: 3,
            title: "Стратегия внедрения AI в организации",
            description: "Создайте план внедрения и начните трансформацию вашего бизнеса",
            topics: [
                {
                    time: "09:00 - 10:00",
                    title: "Выбор пилотных проектов и масштабирование",
                    items: [
                        "Как выбрать правильный пилотный проект",
                        "Стратегия масштабирования",
                        "Практика: ваш пилотный проект"
                    ]
                },
                {
                    time: "10:00 - 10:45",
                    title: "Управление изменениями",
                    items: [
                        "Преодоление сопротивления",
                        "Вовлечение команды",
                        "Работа с советом директоров и инвесторами"
                    ]
                },
                {
                    time: "11:00 - 12:00",
                    title: "Безопасность, этика и соответствие",
                    items: [
                        "Безопасность данных",
                        "Соответствие требованиям (GDPR, отраслевые)",
                        "Этические вопросы и риск-менеджмент"
                    ]
                },
                {
                    time: "12:00 - 13:00",
                    title: "ROI, KPI и ваш план действий",
                    items: [
                        "Расчёт ROI от внедрения AI",
                        "KPI и метрики успеха",
                        "Ваш персональный план действий"
                    ]
                }
            ]
        }
    ];

    return (
        <div id="program" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Программа обучения
                    </h2>
                    <p className="text-xl text-gray-600">
                        Три дня от быстрых побед до стратегии внедрения
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {days.map((item) => (
                        <button
                            key={item.day}
                            onClick={() => setActiveDay(item.day)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                activeDay === item.day
                                    ? 'bg-gray-900 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            День {item.day}
                        </button>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto">
                    {days.map((item) => (
                        <div
                            key={item.day}
                            className={`${activeDay === item.day ? 'block' : 'hidden'}`}
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-gray-200">
                                <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-600">
                                    {item.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {item.topics.map((topic, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                                                {topic.time}
                                            </div>
                                            <h4 className="text-xl font-semibold text-gray-900">
                                                {topic.title}
                                            </h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {topic.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramExecutive;
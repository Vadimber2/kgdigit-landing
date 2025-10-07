import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhatYouLearnExecutive = () => {
    const outcomes = [
        {
            title: "Навыки работы с Claude для ежедневных задач руководителя",
            items: [
                "Анализ документов и финансовых отчётов",
                "Создание презентаций и executive summary",
                "Автоматизация коммуникации и деловой переписки",
                "Подготовка к встречам и переговорам"
            ]
        },
        {
            title: "Стратегический план внедрения AI в вашей компании",
            items: [
                "Выбор правильных пилотных проектов",
                "Стратегия масштабирования от пилота до enterprise",
                "Управление изменениями и вовлечение команды",
                "Работа с сопротивлением и страхами"
            ]
        },
        {
            title: "Понимание ROI и бизнес-метрик AI-проектов",
            items: [
                "Расчёт возврата инвестиций от внедрения AI",
                "Ключевые метрики и KPI для отслеживания",
                "Обоснование инвестиций перед советом директоров",
                "Измерение adoption и эффективности"
            ]
        },
        {
            title: "Готовые шаблоны и промпты для бизнес-задач",
            items: [
                "Библиотека промптов для типовых задач",
                "Шаблоны анализа: рынок, конкуренты, SWOT",
                "Финансовый анализ и прогнозирование",
                "Стратегическое планирование"
            ]
        },
        {
            title: "Конкурентное преимущество через AI",
            items: [
                "Понимание трендов и возможностей в вашей отрасли",
                "Быстрые победы для демонстрации ценности",
                "Долгосрочная стратегия AI-трансформации",
                "Лидерство в AI-adoption в вашей индустрии"
            ]
        }
    ];

    return (
        <div id="outcomes" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Что вы получите
                    </h2>
                    <p className="text-xl text-gray-600">
                        Практические навыки и стратегическое видение для AI-трансформации
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {outcomes.map((outcome, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-semibold">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {outcome.title}
                                </h3>
                            </div>

                            <div className="ml-12 space-y-3">
                                {outcome.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ROI блок */}
                <div className="max-w-4xl mx-auto mt-16">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-semibold mb-6 text-center">
                            Типичная экономия после курса
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">5-10 часов</div>
                                <div className="text-blue-100">в неделю на рутинных задачах</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">50%</div>
                                <div className="text-blue-100">времени на подготовку презентаций</div>
                            </div>
                        </div>
                        <p className="text-center mt-6 text-blue-100">
                            Инвестиция окупается уже в первый месяц применения
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatYouLearnExecutive;
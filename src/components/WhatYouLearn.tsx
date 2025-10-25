import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhatYouLearn = () => {
    const titleAnimation = useScrollAnimation();
    const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

    const outcomes = [
        {
            title: "Эффективно работать с веб-приложением claude.ai",
            items: [
                "Использовать все возможности интерфейса для ежедневных задач",
                "Создавать и управлять Projects с кастомными инструкциями",
                "Работать с Artifacts для создания интерактивного контента",
                "Загружать и анализировать различные типы файлов"
            ]
        },
        {
            title: "Профессионально работать с Claude API",
            items: [
                "Интегрировать Claude в существующие системы",
                "Применять продвинутые техники промпт-инжиниринга",
                "Реализовывать tool use и function calling",
                "Оптимизировать затраты и производительность"
            ]
        },
        {
            title: "Использовать Claude Code для автоматизации разработки",
            items: [
                "Делегировать задачи разработки AI-агенту",
                "Настраивать CI/CD интеграции",
                "Применять best practices безопасности"
            ]
        },
        {
            title: "Создавать и внедрять MCP серверы",
            items: [
                "Разрабатывать кастомные интеграции",
                "Подключать корпоративные источники данных",
                "Развертывать production-ready решения"
            ]
        },
        {
            title: "Понимать экосистему Anthropic",
            items: [
                "Когда использовать веб-интерфейс vs API vs Claude Code",
                "Планировать миграцию и масштабирование решений",
                "Оценивать ROI и business impact"
            ]
        }
    ];

    return (
        <div id="outcomes" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`max-w-3xl mx-auto text-center mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Цели и результаты обучения
                    </h2>
                    <p className="text-xl text-gray-600">
                        По окончании курса вы сможете:
                    </p>
                </div>

                <div
                    ref={cardsAnimation.ref}
                    className="max-w-5xl mx-auto space-y-8"
                >
                    {outcomes.map((outcome, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 ${
                                cardsAnimation.isVisible
                                    ? `animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} stagger-${Math.min(index + 1, 6)}`
                                    : 'animate-on-scroll'
                            }`}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center flex-shrink-0 font-semibold">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {outcome.title}
                                </h3>
                            </div>

                            <div className="ml-12 space-y-3">
                                {outcome.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
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

export default WhatYouLearn;
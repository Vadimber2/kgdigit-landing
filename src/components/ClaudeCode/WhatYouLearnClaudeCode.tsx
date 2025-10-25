import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const WhatYouLearnClaudeCode = () => {
    const titleAnimation = useScrollAnimation();
    const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

    const outcomes = [
        {
            title: "Эффективно использовать Claude Code",
            items: [
                "Автоматизировать повседневные задачи разработки",
                "Делегировать часы работы AI-агенту",
                "Навигация по большим кодовым базам",
                "Разработка функциональности от естественного языка к коду"
            ]
        },
        {
            title: "Делегировать часы работы AI-агенту",
            items: [
                "Feature development от начала до конца",
                "Отладка и исправление багов автоматически",
                "Рефакторинг multi-file операций",
                "Создание тестов для разработанного функционала"
            ]
        },
        {
            title: "Интегрировать Claude Code в CI/CD",
            items: [
                "Настройка GitHub Actions и GitLab CI",
                "Pre-commit хуки с автоматическим исправлением",
                "Пакетная обработка и компонуемость команд",
                "Автоматизация рутинных операций"
            ]
        },
        {
            title: "Применять best practices безопасности",
            items: [
                "Ревью AI-сгенерированного кода",
                "Управление секретами и контроль доступа",
                "Поиск уязвимостей в коде",
                "Тестирование и критерии приемки"
            ]
        },
        {
            title: "Создавать production-ready решения",
            items: [
                "Микросервисы с REST API, JWT, PostgreSQL",
                "CI/CD pipeline с автотестами и деплоем",
                "Рефакторинг legacy проектов",
                "Docker контейнеризация"
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
                        Результаты обучения
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

                {/* ROI блок */}
                <div className="max-w-4xl mx-auto mt-16">
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-semibold mb-6 text-center">
                            Результаты после курса
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold mb-2">10x</div>
                                <div className="text-orange-100">ускорение разработки</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold mb-2">80%+</div>
                                <div className="text-orange-100">покрытие тестами</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold mb-2">100%</div>
                                <div className="text-orange-100">готовность к production</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatYouLearnClaudeCode;
import React from 'react';
import { Laptop, FileText, CheckCircle, Lightbulb } from 'lucide-react';

const RequirementsExecutive = () => {
    const technical = [
        "Ноутбук с доступом в интернет",
        "Браузер (Chrome, Safari, Firefox, Edge)",
        "Email для регистрации в Claude.ai"
    ];

    const optional = [
        {
            title: "Реальные данные вашей компании",
            items: [
                "Финансовые отчёты (можно обезличенные)",
                "Презентации или документы",
                "Бизнес-вопросы или задачи для решения"
            ]
        },
        {
            title: "Подготовка к курсу",
            items: [
                "Список задач, которые занимают много времени",
                "Вопросы для стратегических решений",
                "Идеи для пилотных AI-проектов"
            ]
        }
    ];

    return (
        <div id="requirements" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Требования к участникам
                    </h2>
                    <p className="text-xl text-gray-600">
                        Курс разработан для руководителей без технического background
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Специальных знаний не требуется */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    Специальных знаний не требуется
                                </h3>
                                <p className="text-lg text-gray-700">
                                    Курс разработан для руководителей без технического background. Если вы умеете работать с компьютером и браузером - этого достаточно!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Технические требования */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Laptop className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Что нужно подготовить
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {technical.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Опционально */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {optional.map((section, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 border border-gray-200"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                        {index === 0 ? (
                                            <FileText className="w-6 h-6 text-orange-600" />
                                        ) : (
                                            <Lightbulb className="w-6 h-6 text-orange-600" />
                                        )}
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900">
                                        {section.title}
                                    </h4>
                                </div>
                                <ul className="space-y-3">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Призыв */}
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                        <h3 className="text-2xl font-semibold mb-4">
                            Принесите свои реальные задачи
                        </h3>
                        <p className="text-lg text-blue-100">
                            Лучший способ учиться - решать ваши реальные бизнес-задачи прямо на курсе. Мы поможем применить Claude к вашим конкретным ситуациям.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequirementsExecutive;
import React from 'react';
import { TrendingUp, Target, Users, BookOpen, Award, MessageSquare } from 'lucide-react';

const BenefitsExecutive = () => {
    const benefits = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Быстрые победы",
            description: "Увидите результаты уже на первом занятии - решите реальные задачи"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Фокус на ROI",
            description: "Научитесь измерять и доказывать ценность AI-инициатив"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Малые группы",
            description: "Индивидуальный подход и обсуждение ваших кейсов"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Готовые шаблоны",
            description: "Библиотека промптов и шаблонов для бизнес-задач"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Сертификат",
            description: "Подтверждение компетенций в AI для руководителей"
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Сообщество",
            description: "Доступ к сообществу руководителей, внедряющих AI"
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
                        <div key={index} className="text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Что включено */}
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
        </div>
    );
};

export default BenefitsExecutive;
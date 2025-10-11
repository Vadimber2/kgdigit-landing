import React from 'react';
import { Calendar, Download, Code, Rocket, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const HowItWorksClaudeCode = () => {
    const titleAnimation = useScrollAnimation();
    const stepsAnimation = useScrollAnimation({ threshold: 0.1 });

    const steps = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Регистрация и подготовка",
            description: "Заполните форму регистрации. Получите список необходимого ПО (Node.js, Git, VS Code). За неделю до курса - welcome письмо с инструкциями по установке.",
            duration: "За 1-2 недели"
        },
        {
            icon: <Download className="w-8 h-8" />,
            title: "Установка окружения",
            description: "Установите Node.js 18+, Python 3.8+, Git и VS Code. Получите Anthropic API key. Проверьте настройки перед началом курса.",
            duration: "За 2-3 дня"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "День курса: 6 часов интенсива",
            description: "09:00-10:30 - От копилотов к агентам. 10:45-12:30 - Основные рабочие процессы. 13:30-15:00 - Продвинутая автоматизация. 15:15-17:00 - Финальный проект.",
            duration: "6 часов"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Финальный проект и защита",
            description: "Выбираете один из трех комплексных проектов. Разрабатываете решение с Claude Code. Презентуете результаты группе.",
            duration: "2 часа"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Сертификат и материалы",
            description: "Получаете сертификат о прохождении курса. Доступ ко всем материалам, code templates и примерам навсегда.",
            duration: "После курса"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Поддержка 30 дней",
            description: "30 дней email-поддержки от инструктора. Доступ к сообществу выпускников. Помощь с внедрением в ваших проектах.",
            duration: "1 месяц"
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`text-center mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Как проходит обучение
                    </h2>
                    <p className="text-xl text-gray-600">
                        От регистрации до сертификата за 1 день интенсива
                    </p>
                </div>

                <div ref={stepsAnimation.ref} className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 hidden md:block" />

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative mb-12 md:ml-20 ${
                                    stepsAnimation.isVisible
                                        ? `animate-slide-in-left stagger-${index + 1}`
                                        : 'animate-on-scroll'
                                }`}
                            >
                                <div className="absolute -left-20 top-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg hidden md:flex">
                                    {step.icon}
                                </div>

                                <div className="flex md:hidden w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl items-center justify-center text-white shadow-lg mb-4">
                                    {step.icon}
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 md:mb-0">
                                            {step.title}
                                        </h3>
                                        <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium w-fit">
                                            {step.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6 text-lg">Готовы освоить агентное программирование?</p>
                    <a
                        href="#register"
                        className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                        Записаться на однодневный интенсив
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksClaudeCode;
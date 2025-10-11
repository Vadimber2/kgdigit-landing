import React from 'react';
import { Laptop, Code2, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const RequirementsClaudeCode = () => {
    const titleAnimation = useScrollAnimation();
    const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

    const requiredSkills = [
        "Опыт программирования (Python, JavaScript/TypeScript, или другой язык)",
        "Базовые знания Git",
        "Опыт работы в командной строке"
    ];

    const desiredSkills = [
        "Опыт с Node.js или Python",
        "Понимание CI/CD концепций"
    ];

    const software = [
        "Node.js 18+ (обязательно для Claude Code)",
        "Python 3.8+",
        "Git 2.x",
        "VS Code или JetBrains IDE",
        "Docker Desktop (опционально)"
    ];

    const accounts = [
        "Anthropic API key (бесплатный trial доступен)",
        "GitHub account"
    ];

    return (
        <div id="requirements" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`max-w-3xl mx-auto text-center mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Технические требования
                    </h2>
                    <p className="text-xl text-gray-600">
                        Подготовьтесь к интенсиву заранее
                    </p>
                </div>

                <div
                    ref={cardsAnimation.ref}
                    className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
                >
                    <div className={`bg-white rounded-2xl p-8 border border-gray-200 ${cardsAnimation.isVisible ? 'animate-scale-in-fade stagger-1' : 'animate-on-scroll'}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Обязательные навыки
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {requiredSkills.map((skill, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`bg-white rounded-2xl p-8 border border-gray-200 ${cardsAnimation.isVisible ? 'animate-scale-in-fade stagger-2' : 'animate-on-scroll'}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Желательные навыки
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {desiredSkills.map((skill, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`bg-white rounded-2xl p-8 border border-gray-200 ${cardsAnimation.isVisible ? 'animate-scale-in-fade stagger-3' : 'animate-on-scroll'}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Code2 className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Программное обеспечение
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {software.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`bg-white rounded-2xl p-8 border border-gray-200 ${cardsAnimation.isVisible ? 'animate-scale-in-fade stagger-4' : 'animate-on-scroll'}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Laptop className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Необходимые аккаунты
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {accounts.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mt-8">
                    <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                        <p className="text-gray-700 text-center">
                            <strong>Важно:</strong> Laptop с минимум 8GB RAM (рекомендуется 16GB), 20GB свободного места на диске, стабильное интернет-соединение
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequirementsClaudeCode;
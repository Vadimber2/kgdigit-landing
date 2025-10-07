import React from 'react';
import { Laptop, Code2, CheckCircle, AlertCircle } from 'lucide-react';

const Requirements = () => {
    const requiredSkills = [
        "Опыт программирования (Python, JavaScript/TypeScript, или другой язык)",
        "Понимание REST API и HTTP",
        "Базовые знания Git",
        "Опыт работы в командной строке"
    ];

    const desiredSkills = [
        "Python или TypeScript/JavaScript",
        "Опыт работы с LLM API",
        "Docker basics",
        "CI/CD concepts"
    ];

    const software = [
        "Node.js 18+ (обязательно для Claude Code)",
        "Python 3.8+ (для MCP серверов)",
        "Git 2.x",
        "VS Code или JetBrains IDE",
        "Docker Desktop (опционально)",
        "Postman или аналог для API testing"
    ];

    const accounts = [
        {
            name: "Claude.ai аккаунт",
            description: "Рекомендуется Pro план для полного доступа"
        },
        {
            name: "Anthropic API key",
            description: "Бесплатный trial доступен ($5 в кредитах)"
        },
        {
            name: "GitHub account",
            description: "Для работы с репозиториями"
        },
        {
            name: "Google account",
            description: "Для MCP практики с Google Drive"
        }
    ];

    const hardware = [
        "Laptop с минимум 8GB RAM (рекомендуется 16GB)",
        "20GB свободного места на диске",
        "Стабильное интернет-соединение"
    ];

    return (
        <div id="requirements" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Технические требования
                    </h2>
                    <p className="text-xl text-gray-600">
                        Подготовьтесь к курсу заранее
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
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

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
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

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
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

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Laptop className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Технические требования
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {hardware.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-purple-500 mt-1">•</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            Необходимые аккаунты
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {accounts.map((account, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                    <div className="font-semibold text-gray-900 mb-1">
                                        {account.name}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {account.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requirements;
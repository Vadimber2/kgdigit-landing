import React, { useState } from 'react';
import Modal from './Modal';

const Program = () => {
    const [activeDay, setActiveDay] = useState(1);
    const [selectedTopic, setSelectedTopic] = useState<any>(null);

    const days = [
        {
            day: 1,
            title: "Веб-приложение claude.ai + Claude API + Промпт-инжиниринг",
            description: "Освоение веб-интерфейса, Projects, Artifacts, переход к API и продвинутые техники промптинга",
            topics: [
                {
                    time: "09:00 - 10:30",
                    title: "Знакомство с веб-приложением Claude.ai",
                    items: [
                        "Обзор интерфейса, создание аккаунта, типы подписок",
                        "Модели и их переключение (Sonnet vs Opus)",
                        "Работа с файлами и Projects",
                        "Artifacts: создание интерактивного контента"
                    ],
                    details: {
                        theory: "30 минут",
                        practice: "60 минут",
                        materials: [
                            "Quick Start Guide для claude.ai",
                            "Сравнение планов подписки",
                            "Best practices для загрузки файлов"
                        ],
                        exercises: [
                            "Создание первого проекта с кастомными инструкциями",
                            "Загрузка и анализ документов (PDF, Excel)",
                            "Создание интерактивного Artifact",
                            "Работа с различными типами контента"
                        ]
                    }
                },
                {
                    time: "10:45 - 12:15",
                    title: "Продвинутая работа с claude.ai",
                    items: [
                        "Эффективные паттерны работы",
                        "Collaboration features и sharing",
                        "Интеграция в рабочий процесс"
                    ],
                    details: {
                        theory: "30 минут",
                        practice: "60 минут",
                        materials: [
                            "Workflow templates",
                            "Projects setup guide",
                            "Collaboration best practices"
                        ],
                        exercises: [
                            "Создание реального проекта (Landing page или Dashboard)",
                            "Настройка knowledge base из документации",
                            "Итеративная разработка фичи",
                            "Team collaboration практика"
                        ]
                    }
                },
                {
                    time: "13:00 - 14:30",
                    title: "От веб-интерфейса к API",
                    items: [
                        "Когда нужен переход на API",
                        "Связь между веб-интерфейсом и API",
                        "Введение в экосистему Anthropic API"
                    ],
                    details: {
                        theory: "45 минут",
                        practice: "45 минут",
                        materials: [
                            "Migration guide: Web → API",
                            "API Quick Start",
                            "Cost comparison calculator"
                        ],
                        exercises: [
                            "Сравнительный анализ: тот же промпт в web vs API",
                            "Получение API key",
                            "Настройка окружения",
                            "Первый API call"
                        ]
                    }
                },
                {
                    time: "14:45 - 16:15",
                    title: "Введение в Anthropic API",
                    items: [
                        "Messages API endpoint",
                        "Модели в API (Opus и Sonnet)",
                        "Основные параметры API",
                        "Практика: первые API calls"
                    ],
                    details: {
                        theory: "45 минут",
                        practice: "45 минут",
                        materials: [
                            "API Reference документация",
                            "Сравнительная таблица моделей и цен",
                            "Starter code templates (Python, JavaScript)"
                        ],
                        exercises: [
                            "Setup окружения (Python/JavaScript)",
                            "API calls с различными параметрами",
                            "Работа с разными моделями",
                            "Error handling basics"
                        ]
                    }
                },
                {
                    time: "16:30 - 18:30",
                    title: "Промпт-инжиниринг для Claude",
                    items: [
                        "Принципы эффективного промптинга",
                        "Few-shot learning и Chain-of-thought",
                        "Работа с кодом через промпты",
                        "Практика: создание промптов для типовых задач"
                    ],
                    details: {
                        theory: "60 минут",
                        practice: "60 минут",
                        materials: [
                            "Prompting guide",
                            "Best practices cheat sheet",
                            "Examples library"
                        ],
                        exercises: [
                            "Генерация REST API endpoint",
                            "Код-ревью существующего кода",
                            "Рефакторинг legacy кода",
                            "Написание технической документации",
                            "A/B тестирование промптов"
                        ]
                    }
                }
            ]
        },
        {
            day: 2,
            title: "Tool Use, Artifacts API + Claude Code",
            description: "Function calling, агентное программирование и начало работы с Claude Code",
            topics: [
                {
                    time: "09:00 - 11:00",
                    title: "Tool Use и Function Calling",
                    items: [
                        "Концепция tool use в Claude",
                        "Multi-turn conversations с инструментами",
                        "Практика: создание API с базовыми tools"
                    ],
                    details: {
                        theory: "60 минут",
                        practice: "60 минут",
                        materials: [
                            "Tool definition templates",
                            "Примеры интеграций с API",
                            "Best practices по error handling"
                        ],
                        exercises: [
                            "Calculator tool",
                            "Web search tool",
                            "Database query tool",
                            "Построение агента для решения задач"
                        ]
                    }
                },
                {
                    time: "11:15 - 12:45",
                    title: "Artifacts и практические паттерны",
                    items: [
                        "Artifacts в API vs веб-интерфейсе",
                        "Structured outputs и форматирование",
                        "Построение API-сервиса, генерирующего artifacts"
                    ],
                    details: {
                        theory: "30 минут",
                        practice: "60 минут",
                        materials: [
                            "Artifacts API guide",
                            "Output formatting patterns",
                            "Integration examples"
                        ],
                        exercises: [
                            "Прототипирование в веб-интерфейсе",
                            "Автоматизация через API",
                            "Создание API-сервиса с artifacts"
                        ]
                    }
                },
                {
                    time: "13:30 - 15:30",
                    title: "Введение в Claude Code",
                    items: [
                        "От копилота к агенту: эволюция AI-ассистентов",
                        "Архитектура Claude Code",
                        "Установка и настройка CLI",
                        "Первые команды и workflow"
                    ],
                    details: {
                        theory: "60 минут",
                        practice: "60 минут",
                        materials: [
                            "Installation guide",
                            "Configuration cheatsheet",
                            "Troubleshooting guide"
                        ],
                        exercises: [
                            "Установка Claude Code CLI",
                            "Настройка VS Code extension",
                            "Первые команды",
                            "Знакомство с интерфейсом"
                        ]
                    }
                },
                {
                    time: "15:45 - 18:45",
                    title: "Основные workflow в Claude Code",
                    items: [
                        "Feature development from scratch",
                        "Debugging и bug fixing",
                        "Multi-file operations",
                        "Практика: разработка полноценной feature"
                    ],
                    details: {
                        theory: "60 минут",
                        practice: "120 минут",
                        materials: [
                            "Workflow patterns",
                            "Best practices guide",
                            "Sample projects"
                        ],
                        exercises: [
                            "Разработка authentication системы",
                            "REST API endpoints",
                            "Database integration",
                            "Unit tests",
                            "Debugging реального бага"
                        ]
                    }
                }
            ]
        },
        {
            day: 3,
            title: "Claude Code Advanced + Model Context Protocol",
            description: "Продвинутые возможности Claude Code, CI/CD интеграция и введение в MCP",
            topics: [
                {
                    time: "09:00 - 11:00",
                    title: "Продвинутые возможности Claude Code",
                    items: [
                        "Composability и scriptability",
                        "Автоматизация в CI/CD",
                        "Custom workflows",
                        "Практика: создание автоматизированных workflow"
                    ],
                    details: {
                        theory: "60 минут",
                        practice: "60 минут",
                        materials: [
                            "CI/CD integration templates",
                            "Custom workflow examples",
                            "Scripting cookbook"
                        ],
                        exercises: [
                            "Automatic lint fixing в pre-commit",
                            "Translation automation",
                            "Release notes generation",
                            "Code quality gates в CI"
                        ]
                    }
                },
                {
                    time: "11:15 - 12:45",
                    title: "Безопасность и best practices",
                    items: [
                        "Security considerations",
                        "Architectural Safety",
                        "Data privacy и compliance",
                        "Quality assurance"
                    ],
                    details: {
                        theory: "60 минут",
                        practice: "30 минут",
                        materials: [
                            "Security checklist",
                            "Best practices guide",
                            "Compliance requirements"
                        ],
                        exercises: [
                            "Код-ревью AI-generated кода",
                            "Выявление security issues",
                            "Настройка security policies"
                        ]
                    }
                },
                {
                    time: "13:30 - 16:00",
                    title: "Введение в Model Context Protocol",
                    items: [
                        "Проблема N×M интеграций и MCP как решение",
                        "Архитектура MCP: Tools, Resources, Prompts",
                        "Экосистема готовых серверов",
                        "Практика: подключение Claude Desktop к Google Drive"
                    ],
                    details: {
                        theory: "90 минут",
                        practice: "60 минут",
                        materials: [
                            "MCP specification",
                            "Architecture diagrams",
                            "Pre-built servers catalog"
                        ],
                        exercises: [
                            "Установка и настройка MCP",
                            "Подключение Google Drive",
                            "Использование pre-built серверов",
                            "Тестирование интеграций"
                        ]
                    }
                },
                {
                    time: "16:15 - 18:45",
                    title: "Создание MCP серверов",
                    items: [
                        "Python SDK и TypeScript SDK для MCP",
                        "Реализация Tools, Resources и Prompts",
                        "Практика: создание MCP сервера для корпоративной системы",
                        "Local testing и debugging"
                    ],
                    details: {
                        theory: "60 минут",
                        practice: "120 минут",
                        materials: [
                            "Python/TypeScript starter templates",
                            "Common patterns library",
                            "Testing frameworks guide"
                        ],
                        exercises: [
                            "Создание MCP сервера (CRM/Jira/Docs integration)",
                            "Реализация tools, resources, prompts",
                            "Local testing",
                            "Интеграция с Claude Desktop"
                        ]
                    }
                }
            ]
        },
        {
            day: 4,
            title: "Enterprise внедрение и кейсы (опциональный)",
            description: "Production deployment, реальные кейсы и финальные проекты",
            topics: [
                {
                    time: "09:00 - 12:00",
                    title: "Enterprise интеграция",
                    items: [
                        "Deployment стратегии (local, remote, cloud)",
                        "Security, monitoring и scalability",
                        "Реальные кейсы с конференции Code with Claude",
                        "Практика: развертывание MCP сервера для команды"
                    ],
                    details: {
                        theory: "90 минут",
                        practice: "90 минут",
                        materials: [
                            "Deployment guides",
                            "Case studies",
                            "Production checklists"
                        ],
                        exercises: [
                            "Production deployment",
                            "Security configuration",
                            "Monitoring setup",
                            "Групповая дискуссия"
                        ]
                    }
                },
                {
                    time: "12:45 - 14:00",
                    title: "Будущее AI-разработки и заключение",
                    items: [
                        "От инженера к AI-менеджеру",
                        "Autonomous workflows и multi-hour tasks",
                        "Roadmap Anthropic",
                        "Q&A и защита финальных проектов"
                    ],
                    details: {
                        theory: "45 минут",
                        practice: "30 минут",
                        materials: [
                            "Future trends report",
                            "Roadmap overview",
                            "Certificate template"
                        ],
                        exercises: [
                            "Защита финальных проектов",
                            "Обсуждение применения в ваших проектах",
                            "Планирование дальнейшего обучения"
                        ]
                    }
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
                        Четыре насыщенных дня от основ до enterprise решений
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
                            {item.day === 4 && <span className="ml-1 text-xs">(опц.)</span>}
                        </button>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto">
                    {days.map((item) => (
                        <div
                            key={item.day}
                            className={`${activeDay === item.day ? 'block' : 'hidden'}`}
                        >
                            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 mb-8 border border-gray-200">
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
                                        onClick={() => setSelectedTopic(topic)}
                                        className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-all cursor-pointer hover:shadow-md"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                                                    {topic.time}
                                                </div>
                                                <h4 className="text-xl font-semibold text-gray-900">
                                                    {topic.title}
                                                </h4>
                                            </div>
                                            <span className="text-orange-600 text-sm font-medium">
                        Подробнее →
                      </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {topic.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                                    <span className="text-orange-500 mt-1">•</span>
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

            {/* Modal */}
            <Modal
                isOpen={!!selectedTopic}
                onClose={() => setSelectedTopic(null)}
                title={selectedTopic?.title || ''}
            >
                {selectedTopic && (
                    <div className="space-y-6">
                        <div className="bg-orange-50 rounded-xl p-6">
                            <div className="text-sm text-orange-700 font-medium mb-2">
                                {selectedTopic.time}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="font-semibold text-gray-900">Теория:</span>{' '}
                                    <span className="text-gray-700">{selectedTopic.details.theory}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900">Практика:</span>{' '}
                                    <span className="text-gray-700">{selectedTopic.details.practice}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Практические упражнения
                            </h4>
                            <ul className="space-y-2">
                                {selectedTopic.details.exercises.map((exercise: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="text-orange-500 font-bold">{i + 1}.</span>
                                        <span className="text-gray-700">{exercise}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Материалы
                            </h4>
                            <ul className="space-y-2">
                                {selectedTopic.details.materials.map((material: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-blue-500">📄</span>
                                        <span>{material}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Program;
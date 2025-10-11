import React, { useState } from 'react';
import { Clock, Coffee, Code, GitBranch, Shield, Presentation, CheckCircle } from 'lucide-react';
import Modal from '../Modal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProgramClaudeCode = () => {
    const [selectedBlock, setSelectedBlock] = useState<any>(null);
    const titleAnimation = useScrollAnimation();
    const scheduleAnimation = useScrollAnimation({ threshold: 0.1 });

    const schedule = [
        {
            time: '09:00-10:30',
            title: 'Блок 1: От копилотов к агентам',
            icon: Code,
            color: 'from-blue-500 to-cyan-500',
            theory: '45 минут',
            practice: '45 минут',
            topics: [
                'Эволюция AI-ассистентов: GitHub Copilot → Cursor → Claude Code',
                'Ключевые отличия агентного подхода от копилотов',
                'Архитектура Claude Code: контекст, автономные решения, Git интеграция',
                'Установка Claude Code CLI и VS Code расширения'
            ],
            details: {
                exercises: [
                    'Установка Claude Code CLI',
                    'Настройка VS Code extension',
                    'Первые команды и знакомство с интерфейсом',
                    'Создание базового скрипта'
                ]
            }
        },
        {
            time: '10:30-10:45',
            title: 'Кофе-брейк',
            icon: Coffee,
            color: 'from-amber-500 to-orange-500',
            isBreak: true
        },
        {
            time: '10:45-12:30',
            title: 'Блок 2: Основные рабочие процессы',
            icon: GitBranch,
            color: 'from-green-500 to-emerald-500',
            theory: '30 минут',
            practice: '75 минут',
            topics: [
                'Разработка функциональности с нуля: от естественного языка к коду',
                'Отладка и исправление багов',
                'Рефакторинг: операции с несколькими файлами',
                'Практика: создание микросервиса'
            ],
            details: {
                exercises: [
                    'Разработка REST API с аутентификацией',
                    'Отладка реального бага в примере проекта',
                    'Рефакторинг legacy кода',
                    'Создание тестов для разработанного функционала'
                ]
            }
        },
        {
            time: '12:30-13:30',
            title: 'Обед',
            icon: Coffee,
            color: 'from-amber-500 to-orange-500',
            isBreak: true
        },
        {
            time: '13:30-15:00',
            title: 'Блок 3: Продвинутая автоматизация',
            icon: Shield,
            color: 'from-purple-500 to-pink-500',
            theory: '45 минут',
            practice: '45 минут',
            topics: [
                'Интеграция Claude Code в CI/CD: GitHub Actions, GitLab CI',
                'Pre-commit хуки: автоматическое исправление линтера',
                'Пакетная обработка задач',
                'Безопасность: ревью AI-кода, управление секретами'
            ],
            details: {
                exercises: [
                    'Настройка автоматизированного workflow в GitHub Actions',
                    'Создание pre-commit хука с автоматическим исправлением',
                    'Пакетная обработка: автоматизация переводов для i18n',
                    'Ревью AI-generated кода, поиск уязвимостей'
                ]
            }
        },
        {
            time: '15:00-15:15',
            title: 'Кофе-брейк',
            icon: Coffee,
            color: 'from-amber-500 to-orange-500',
            isBreak: true
        },
        {
            time: '15:15-17:00',
            title: 'Блок 4: Финальный проект',
            icon: Presentation,
            color: 'from-red-500 to-rose-500',
            practice: '105 минут',
            topics: [
                'Выбор комплексного проекта (микросервис / CI/CD / рефакторинг)',
                'Практическое задание: 60 минут',
                'Защита проектов: 30 минут',
                'Вопросы и ответы, выдача сертификатов'
            ],
            details: {
                exercises: [
                    'Вариант A: Микросервис с REST API, JWT, PostgreSQL, тесты >80%, Docker',
                    'Вариант B: CI/CD pipeline с автотестами, линтингом, деплоем в staging',
                    'Вариант C: Рефакторинг legacy проекта с миграцией на современный стек'
                ]
            }
        }
    ];

    return (
        <div id="program" className="py-12 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4 font-medium">
                        Интенсивный однодневный курс
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
                        Claude Code: Agentic Development Automation
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8">
                        6 часов практики: от установки до автоматизации CI/CD
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">6 часов</div>
                            <div className="text-sm text-gray-600">интенсива</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Code className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">4 блока</div>
                            <div className="text-sm text-gray-600">практики</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <CheckCircle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">1 проект</div>
                            <div className="text-sm text-gray-600">финальный</div>
                        </div>
                    </div>
                </div>

                <div
                    ref={scheduleAnimation.ref}
                    className="max-w-4xl mx-auto space-y-4"
                >
                    {schedule.map((block, index) => {
                        const Icon = block.icon;
                        const isBreak = block.isBreak;

                        return (
                            <div
                                key={index}
                                onClick={() => !isBreak && setSelectedBlock(block)}
                                className={`rounded-xl p-6 border transition-all ${
                                    isBreak
                                        ? 'bg-amber-50 border-amber-200 cursor-default'
                                        : 'bg-white border-gray-200 hover:border-orange-300 hover:shadow-md cursor-pointer'
                                } ${
                                    scheduleAnimation.isVisible
                                        ? `animate-slide-in-left stagger-${Math.min(index + 1, 6)}`
                                        : 'animate-on-scroll'
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${block.color} ${isBreak ? 'opacity-60' : ''}`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-sm font-medium px-3 py-1 rounded ${isBreak ? 'bg-amber-200 text-amber-800' : 'bg-orange-100 text-orange-700'}`}>
                                                {block.time}
                                            </span>
                                            {!isBreak && block.theory && (
                                                <div className="text-sm text-gray-500">
                                                    Теория: {block.theory} • Практика: {block.practice}
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {block.title}
                                        </h3>

                                        {!isBreak && block.topics && (
                                            <ul className="space-y-2">
                                                {block.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                                        <span className="text-orange-500 mt-1">•</span>
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {!isBreak && (
                                            <div className="mt-3 text-orange-600 text-sm font-medium">
                                                Подробнее →
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={!!selectedBlock}
                onClose={() => setSelectedBlock(null)}
                title={selectedBlock?.title || ''}
            >
                {selectedBlock && !selectedBlock.isBreak && (
                    <div className="space-y-6">
                        <div className="bg-orange-50 rounded-xl p-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-medium text-orange-700">
                                    {selectedBlock.time}
                                </span>
                                <div className="text-sm text-gray-600">
                                    {selectedBlock.theory && `Теория: ${selectedBlock.theory}`}
                                    {selectedBlock.theory && selectedBlock.practice && ' • '}
                                    {selectedBlock.practice && `Практика: ${selectedBlock.practice}`}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Что изучим
                            </h4>
                            <ul className="space-y-2">
                                {selectedBlock.topics.map((topic: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="text-orange-500 font-bold">{i + 1}.</span>
                                        <span className="text-gray-700">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {selectedBlock.details?.exercises && (
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                    Практические упражнения
                                </h4>
                                <div className="space-y-2">
                                    {selectedBlock.details.exercises.map((exercise: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                                            <span className="text-green-600 mt-0.5">✓</span>
                                            <span className="text-gray-700">{exercise}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ProgramClaudeCode;

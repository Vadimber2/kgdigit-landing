import React from 'react';
import { Calendar, Clock, Users, Check, ArrowRight, Code, Briefcase } from 'lucide-react';
import { useCourse } from '../context/CourseContext';

const Hero = () => {
    const { courseType, setCourseType } = useCourse();

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen flex items-center">
            <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
                {/* Переключатель курсов */}
                <div className="mb-16">
                    <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                        <button
                            onClick={() => setCourseType('developer')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all text-sm ${
                                courseType === 'developer'
                                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <Code className="w-4 h-4" />
                            Для разработчиков
                        </button>
                        <button
                            onClick={() => setCourseType('executive')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all text-sm ${
                                courseType === 'executive'
                                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <Briefcase className="w-4 h-4" />
                            Для руководителей
                        </button>
                    </div>
                </div>

                <div className="max-w-3xl">
                    {courseType === 'developer' ? (
                        <>
                            <h1 className="text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 leading-tight tracking-tight">
                                Anthropic Claude и Claude Code для технических специалистов
                            </h1>

                            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
                                Освойте весь стек инструментов Anthropic: от веб-интерфейса claude.ai до создания enterprise MCP серверов
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href="#register"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all text-base font-medium"
                                >
                                    Записаться на курс
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="#program"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-all text-base font-medium border border-gray-300"
                                >
                                    Программа курса
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-6 text-base text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>3-4 дня</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>24 акад. часа</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    <span>15-20 человек</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-5 h-5" />
                                    <span>Сертификат</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 leading-tight tracking-tight">
                                Anthropic Claude: AI для стратегических решений и роста бизнеса
                            </h1>

                            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
                                Узнайте, как искусственный интеллект может трансформировать ваш бизнес. Получите практические навыки и стратегическое видение для внедрения AI
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href="#register"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all text-base font-medium"
                                >
                                    Записаться на курс
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="#program"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-all text-base font-medium border border-gray-300"
                                >
                                    Программа курса
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-6 text-base text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>3 дня</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>09:00 - 13:00</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    <span>Малые группы</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-5 h-5" />
                                    <span>Реальные кейсы</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';
import { Calendar, Video, Code, Award, Users, Rocket } from 'lucide-react';
import { useCourse } from '../context/CourseContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks = () => {
    const { courseType } = useCourse();
    const titleAnimation = useScrollAnimation();
    const stepsAnimation = useScrollAnimation({ threshold: 0.1 });

    const developerSteps = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Регистрация и подготовка",
            description: "Заполните форму, получите список необходимого ПО и доступ к подготовительным материалам. За неделю до старта — welcome письмо с деталями.",
            duration: "За 1–2 недели до курса"
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: "День 1: Основы и веб-интерфейс",
            description: "Знакомство с группой и инструктором. Осваиваем claude.ai, Projects, Artifacts. Переходим к API и промпт-инжинирингу. Первые практические результаты!",
            duration: "8 часов практики"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "День 2–3: Claude Code и MCP",
            description: "Погружаемся в Claude Code, учимся делегировать разработку AI. Создаём MCP серверы, интегрируем с корпоративными системами. Работа над реальными проектами.",
            duration: "16 часов coding"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "День 4 и завершение",
            description: "Enterprise практики, защита финальных проектов. Получаете сертификат, материалы курса и доступ к сообществу. Начинается 30 дней поддержки.",
            duration: "Сертификация"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "После курса",
            description: "30 дней email-поддержки, 2 персональные консультации, доступ к форуму выпускников навсегда, ежемесячные вебинары с обновлениями.",
            duration: "Постоянная поддержка"
        }
    ];

    const executiveSteps = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Регистрация",
            description: "Оставьте заявку, и мы свяжемся в течение 24 часов. Обсудим ваши задачи, подберём удобные даты. Отправим welcome pack с подготовительными материалами.",
            duration: "До старта курса"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "День 1: Быстрые победы",
            description: "Утро (4 часа). Знакомство с Claude, решаем первые задачи. Анализ ваших документов, финансовый анализ. Уже в первый день — реальная экономия времени!",
            duration: "09:00–13:00"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "День 2: AI в бизнес-процессах",
            description: "Автоматизация задач руководителя, анализ рынка и конкурентов. Разработка стратегий с AI. Реальные кейсы успеха (Replit: 10× рост).",
            duration: "09:00–13:00"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "День 3: Стратегия внедрения",
            description: "Создаём план внедрения AI в вашей компании. ROI, KPI, управление изменениями. Ваш персональный план действий на 30–60–90 дней.",
            duration: "09:00–13:00"
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: "После курса",
            description: "Получаете все материалы, шаблоны, калькулятор ROI. 30 дней поддержки, 2 консультации, доступ к сообществу руководителей навсегда.",
            duration: "Долгосрочная поддержка"
        }
    ];

    const steps = courseType === 'developer' ? developerSteps : executiveSteps;

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Заголовок */}
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
                        Шаг за шагом от регистрации до сертификата
                    </p>
                </div>

                {/* Этапы обучения */}
                <div ref={stepsAnimation.ref} className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Вертикальная линия */}
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
                                {/* Иконка (desktop) */}
                                <div className="absolute -left-20 top-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg hidden md:flex">
                                    {step.icon}
                                </div>

                                {/* Иконка (mobile) */}
                                <div className="flex md:hidden w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl items-center justify-center text-white shadow-lg mb-4">
                                    {step.icon}
                                </div>

                                {/* Контент */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 md:mb-0">
                                            {step.title}
                                        </h3>
                                        <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6 text-lg">Готовы начать обучение?</p>

                    <a
                        href="#register"
                        className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                        Записаться на курс
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;

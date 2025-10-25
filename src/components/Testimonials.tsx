import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useCourse } from '../context/CourseContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
    const { courseType } = useCourse();
    const titleAnimation = useScrollAnimation();
    const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

    const developerTestimonials = [
        {
            name: "Алексей Петров",
            role: "Senior Frontend Developer",
            company: "Tech Startup",
            avatar: "AP",
            rating: 5,
            text: "Курс превзошёл все ожидания! За 3 дня я научился использовать Claude Code для ежедневной разработки. Теперь делегирую рутинные задачи AI и фокусируюсь на архитектуре. Производительность выросла в 3 раза.",
            project: "Создал MCP сервер для интеграции с Jira"
        },
        {
            name: "Мария Иванова",
            role: "Backend Engineer",
            company: "Fintech Company",
            avatar: "МИ",
            rating: 5,
            text: "Отличная структура курса - от простого к сложному. Особенно понравилась практика с реальными проектами. Инструктор всегда на связи, отвечает на любые вопросы. После курса внедрил Claude в наш CI/CD pipeline.",
            project: "Автоматизация code review с Claude API"
        },
        {
            name: "Дмитрий Сидоров",
            role: "Tech Lead",
            company: "E-commerce Platform",
            avatar: "ДС",
            rating: 5,
            text: "Курс дал понимание всей экосистемы Anthropic. Теперь знаю когда использовать веб-интерфейс, API или Claude Code. Команда начала использовать Claude - скорость разработки выросла, качество кода улучшилось.",
            project: "Внедрил Claude в команду из 8 разработчиков"
        },
        {
            name: "Елена Козлова",
            role: "QA Engineer",
            company: "SaaS Company",
            avatar: "ЕК",
            rating: 5,
            text: "Не ожидала, что Claude Code так поможет в тестировании! Автоматизировала написание тестов, генерацию test cases. Группа была небольшая, что позволило разобрать мои конкретные задачи. Очень рекомендую!",
            project: "Автоматизация генерации unit тестов"
        },
        {
            name: "Игорь Смирнов",
            role: "Full Stack Developer",
            company: "Consulting Agency",
            avatar: "ИС",
            rating: 5,
            text: "Лучший курс по AI для разработчиков! Практики много, теории в меру. За 4 дня прошёл путь от новичка до уверенного пользователя. Материалы отличные, всё структурировано. Сертификат уже добавил в LinkedIn.",
            project: "Разработал 3 проекта за время курса"
        },
        {
            name: "Анна Волкова",
            role: "DevOps Engineer",
            company: "Cloud Services",
            avatar: "АВ",
            rating: 5,
            text: "Claude Code изменил мой подход к работе. Теперь пишу infrastructure as code в 5 раз быстрее. Курс научил не просто использовать инструмент, а думать как AI-инженер. Поддержка после курса тоже на высоте!",
            project: "Автоматизация Terraform конфигураций"
        }
    ];

    const executiveTestimonials = [
        {
            name: "Сергей Николаев",
            role: "CEO",
            company: "Retail Chain",
            avatar: "СН",
            rating: 5,
            text: "За 3 дня получил практические навыки работы с Claude и стратегию внедрения в компанию. Уже экономлю 5-10 часов в неделю на анализе отчётов и подготовке к совещаниям. ROI окупился за первый месяц!",
            project: "Внедрил Claude для анализа финансов"
        },
        {
            name: "Ольга Морозова",
            role: "CFO",
            company: "Manufacturing",
            avatar: "ОМ",
            rating: 5,
            text: "Курс открыл глаза на возможности AI в бизнесе. Инструктор показал конкретные примеры применения, работали с моими реальными данными. Теперь финансовый анализ делаю за 30 минут вместо 3-х часов.",
            project: "Автоматизация финансовой отчётности"
        },
        {
            name: "Михаил Федоров",
            role: "COO",
            company: "Logistics Company",
            avatar: "МФ",
            rating: 5,
            text: "Отличная программа для руководителей без технического background. Всё понятно объясняют, дают готовые шаблоны. Запустил 2 пилотных проекта AI в компании. Команда тоже заинтересовалась - планируем отправить их на курс.",
            project: "2 пилотных AI-проекта запущено"
        },
        {
            name: "Екатерина Павлова",
            role: "Marketing Director",
            company: "E-commerce",
            avatar: "ЕП",
            rating: 5,
            text: "Claude стал моим личным ассистентом! Анализ рынка, конкурентов, создание контент-стратегий - всё стало быстрее и качественнее. Группа была из разных индустрий - обменялись опытом, завела полезные контакты.",
            project: "Ускорила маркетинговые исследования в 5 раз"
        },
        {
            name: "Андрей Кузнецов",
            role: "Product Director",
            company: "SaaS Startup",
            avatar: "АК",
            rating: 5,
            text: "Курс дал не просто навыки, а стратегическое понимание AI. Калькулятор ROI помог обосновать инвестиции перед советом директоров. Получили одобрение бюджета на AI-трансформацию. Спасибо за поддержку после курса!",
            project: "Получил одобрение бюджета на AI"
        },
        {
            name: "Наталья Белова",
            role: "HR Director",
            company: "IT Company",
            avatar: "НБ",
            rating: 5,
            text: "Использую Claude для анализа резюме, подготовки к интервью, создания job descriptions. Экономлю минимум 10 часов в неделю! Курс практичный, без воды. Рекомендую всем руководителям, кто хочет быть в тренде.",
            project: "Оптимизировала процесс рекрутинга"
        }
    ];

    const testimonials = courseType === 'developer' ? developerTestimonials : executiveTestimonials;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`text-center mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Отзывы наших выпускников
                    </h2>
                    <p className="text-xl text-gray-600">
                        Истории успеха тех, кто уже прошёл курс
                    </p>
                </div>

                {/* Сетка отзывов */}
                <div
                    ref={cardsAnimation.ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all ${
                                cardsAnimation.isVisible
                                    ? `animate-scale-in-fade stagger-${Math.min(index + 1, 6)}`
                                    : 'animate-on-scroll'
                            }`}
                        >
                            {/* Рейтинг */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                                ))}
                            </div>

                            {/* Текст отзыва */}
                            <div className="mb-6">
                                <Quote className="w-8 h-8 text-orange-200 mb-3" />
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    {testimonial.text}
                                </p>
                                <div className="bg-orange-50 rounded-lg p-3">
                                    <p className="text-sm text-orange-700 font-medium">
                                        📊 {testimonial.project}
                                    </p>
                                </div>
                            </div>

                            {/* Автор */}
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {testimonial.role}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Статистика */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-700 mb-2">100+</div>
                        <div className="text-gray-600">Выпускников</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-700 mb-2">4.9</div>
                        <div className="text-gray-600">Средняя оценка</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-700 mb-2">95%</div>
                        <div className="text-gray-600">Рекомендуют</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-700 mb-2">3x</div>
                        <div className="text-gray-600">Рост эффективности</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
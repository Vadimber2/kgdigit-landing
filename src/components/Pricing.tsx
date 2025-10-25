import React from 'react';
import { Check, Star } from 'lucide-react';
import { useCourse } from '../context/CourseContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Pricing = () => {
    const { courseType } = useCourse();
    const titleAnimation = useScrollAnimation();
    const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

    const developerPlans = [
        {
            name: "Однодневный курс",
            price: "7 000 сом",
            description: "Интенсивный день обучения",
            features: [
                "1 день обучения (8 часов)",
                "Основы работы с Claude",
                "Все материалы курса",
                "Сертификат участия",
                "7 дней поддержки",
                "Доступ к сообществу"
            ],
            highlighted: false
        },
        {
            name: "Индивидуальное участие",
            price: "19 990 сом",
            description: "Для одного участника",
            features: [
                "3-4 дня обучения (24-32 часа)",
                "Все материалы курса",
                "Сертификат и digital badge",
                "30 дней поддержки",
                "2 консультации 1-on-1",
                "Доступ к сообществу"
            ],
            highlighted: false
        },
        {
            name: "Групповое участие",
            price: "17 990 сом",
            description: "Для команды от 3-х человек (цена за человека)",
            features: [
                "Всё из индивидуального",
                "Скидка 10% на каждого",
                "Общие проекты команды",
                "Командный сертификат",
                "Корпоративные кейсы",
                "Приоритетная поддержка"
            ],
            highlighted: true
        },
        {
            name: "Корпоративное обучение",
            price: "Индивидуально",
            description: "Закрытый курс для вашей компании",
            features: [
                "До 20 участников",
                "Адаптация под ваши задачи",
                "Работа с вашими проектами",
                "Гибкий график",
                "Выездной формат возможен",
                "Долгосрочная поддержка"
            ],
            highlighted: false
        }
    ];

    const executivePlans = [
        {
            name: "Однодневный курс",
            price: "7 000 сом",
            description: "Интенсивный день для руководителей",
            features: [
                "1 день обучения (4 часа)",
                "Утренние занятия 09:00-13:00",
                "Основные материалы",
                "Калькулятор ROI",
                "Библиотека промптов (25+)",
                "7 дней поддержки"
            ],
            highlighted: false
        },
        {
            name: "Курс для предпренимателей",
            price: "24 990 сом",
            description: "Для одного руководителя",
            features: [
                "3 дня обучения (12 часов)",
                "Утренние занятия 09:00-13:00",
                "Все материалы и шаблоны",
                "Калькулятор ROI",
                "Библиотека промптов (50+)",
                "30 дней поддержки"
            ],
            highlighted: false
        },
        {
            name: "Для команды руководителей",
            price: "21 240 сом",
            description: "От 3-х участников из одной компании (цена за человека)",
            features: [
                "Всё из индивидуального",
                "Скидка 15% на каждого",
                "Работа с вашими данными",
                "Стратегия для вашей компании",
                "Единый план внедрения",
                "3 месяца консультаций"
            ],
            highlighted: true
        },
        {
            name: "VIP формат",
            price: "Премиум",
            description: "Персональное обучение",
            features: [
                "Индивидуальный график",
                "100% фокус на ваших задачах",
                "Разработка стратегии AI",
                "Помощь во внедрении",
                "6 месяцев сопровождения",
                "Прямая связь с экспертом"
            ],
            highlighted: false
        }
    ];

    const plans = courseType === 'developer' ? developerPlans : executivePlans;

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
                        Стоимость обучения
                    </h2>
                    <p className="text-xl text-gray-600">
                        Выберите подходящий формат участия
                    </p>
                </div>

                {/* Карточки планов */}
                <div
                    ref={cardsAnimation.ref}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
                >
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 border-2 transition-all ${
                                plan.highlighted
                                    ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-white shadow-xl scale-105'
                                    : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg'
                            } ${
                                cardsAnimation.isVisible
                                    ? `animate-scale-in-fade stagger-${index + 1}`
                                    : 'animate-on-scroll'
                            }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Star className="w-4 h-4" />
                                        Популярный
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <div className="text-3xl font-bold text-orange-700 mb-2">
                                    {plan.price}
                                </div>
                                <p className="text-gray-600">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#register"
                                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all ${
                                    plan.highlighted
                                        ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                }`}
                            >
                                Записаться
                            </a>
                        </div>
                    ))}
                </div>

                {/* Дополнительная информация */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                            Дополнительные опции
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-6">
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    🎓 Скидки студентам
                                </h4>
                                <p className="text-gray-700 text-sm">
                                    Студентам вузов — скидка 15%. Выпускникам наших курсов — 20%.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6">
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    🏢 Корпоративная оплата
                                </h4>
                                <p className="text-gray-700 text-sm">
                                    Оплата по счёту с закрывающими документами. НДС включён.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6">
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    💰 Возврат средств
                                </h4>
                                <p className="text-gray-700 text-sm">
                                    Гарантия возврата 100% в течение первых 2-х дней курса, если не понравится.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-gray-600 mt-8">
                        Остались вопросы по стоимости?{' '}
                        <a href="#register" className="text-orange-700 hover:text-orange-700 font-medium">
                            Свяжитесь с нами
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
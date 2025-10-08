import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const titleAnimation = useScrollAnimation();
    const itemsAnimation = useScrollAnimation({ threshold: 0.1 });

    const faqs = [
        {
            question: "Нужен ли опыт программирования для прохождения курса?",
            answer: "Для курса разработчиков необходим опыт программирования на Python, JavaScript или другом языке, понимание REST API и Git. Для курса руководителей технический опыт не требуется - курс разработан специально для людей без технического background."
        },
        {
            question: "В каком формате проходит обучение?",
            answer: "Курс проводится в очном/гибридном формате. Занятия проходят с живым инструктором, включают практические задания и работу над реальными проектами. Все материалы и записи сессий доступны после курса."
        },
        {
            question: "Сколько времени нужно уделять обучению?",
            answer: "Курс для разработчиков: 3-4 дня по 8 часов (24-32 академ. часа). Курс для руководителей: 3 дня по 4 часа утром (09:00-13:00), 12 академ. часов. Дополнительно рекомендуется время на домашние задания."
        },
        {
            question: "Что если я пропущу занятие?",
            answer: "Все сессии записываются и будут доступны вам для просмотра. Также вы можете задать вопросы инструктору через email поддержку или на следующем занятии. Материалы курса остаются у вас навсегда."
        },
        {
            question: "Предоставляете ли вы сертификат?",
            answer: "Да! По окончании курса вы получите официальный сертификат с указанием пройденных тем и объема часов, а также digital badge для LinkedIn. Для получения сертификата необходимо посетить минимум 90% занятий и выполнить практические задания."
        },
        {
            question: "Можно ли оплатить курс частями или в рассрочку?",
            answer: "Да, мы предоставляем возможность оплаты в рассрочку. Для корпоративных клиентов возможна оплата по счёту. Свяжитесь с нами для уточнения условий."
        },
        {
            question: "Нужно ли приносить свой ноутбук?",
            answer: "Да, необходим ноутбук с установленным ПО (список предоставим после регистрации). Минимальные требования: 8GB RAM, 20GB свободного места. Помощь с настройкой окружения оказывается на первом занятии."
        },
        {
            question: "Какая поддержка предоставляется после курса?",
            answer: "После курса вы получаете: 30 дней email-поддержки от инструкторов, 2 персональные консультации по 30 минут, доступ к сообществу выпускников навсегда, ежемесячные вебинары с обновлениями."
        },
        {
            question: "Можно ли пройти только часть курса?",
            answer: "Курс разработан как целостная программа, где каждый день строится на знаниях предыдущего. Мы рекомендуем проходить полный курс. Однако для курса разработчиков 4-й день является опциональным."
        },
        {
            question: "Предоставляете ли скидки?",
            answer: "Да! Скидки предоставляются: группам от 3-х человек (10%), корпоративным клиентам (индивидуально), выпускникам наших других курсов (20%), студентам вузов (15%). Свяжитесь с нами для уточнения."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`text-center mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Часто задаваемые вопросы
                    </h2>
                    <p className="text-xl text-gray-600">
                        Не нашли ответ? Свяжитесь с нами!
                    </p>
                </div>

                <div
                    ref={itemsAnimation.ref}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all ${
                                itemsAnimation.isVisible
                                    ? `animate-slide-up-fade stagger-${Math.min(index + 1, 6)}`
                                    : 'animate-on-scroll'
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                                        openIndex === index ? 'transform rotate-180' : ''
                                    }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        Остались вопросы? Мы на связи!
                    </p>
                    <a
                        href="#register"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all font-medium"
                    >
                        Связаться с нами
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
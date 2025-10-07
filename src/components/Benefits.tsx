import React from 'react';
import { Code, Zap, Users, BookOpen, Award, Headphones } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Практический опыт",
            description: "24 часа hands-on практики с реальными проектами и кейсами"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "От новичка до профи",
            description: "Полный путь: от веб-интерфейса до enterprise решений"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Малые группы",
            description: "15-20 человек для эффективного обучения и внимания к каждому"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Полные материалы",
            description: "Слайды, код примеры, templates и checklists"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Сертификат",
            description: "Официальный сертификат и digital badge для LinkedIn"
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "Поддержка 30 дней",
            description: "Доступ к learning platform и community forum после курса"
        }
    ];

    const format = [
        { label: "Live coding и демонстрации", value: "40%" },
        { label: "Hands-on практика", value: "35%" },
        { label: "Теория", value: "15%" },
        { label: "Дискуссии и Q&A", value: "10%" }
    ];

    return (
        <div id="benefits" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Почему выбирают нас
                    </h2>
                    <p className="text-xl text-gray-600">
                        Максимум практики, минимум теории
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                        Методология обучения: Learning by doing
                    </h3>
                    <div className="space-y-4">
                        {format.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-900 font-medium">{item.label}</span>
                                    <span className="text-orange-600 font-semibold">{item.value}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all"
                                        style={{ width: item.value }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
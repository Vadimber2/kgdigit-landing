import React from 'react';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AudienceClaudeCode = () => {
    const titleAnimation = useScrollAnimation();
    const cardsAnimation = useScrollAnimation({ threshold: 0.2 });

    const audience = [
        "Frontend разработчики",
        "Backend разработчики",
        "Full-stack разработчики",
        "DevOps инженеры",
        "QA/Test инженеры",
        "Технические лидеры"
    ];

    return (
        <div id="audience" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`max-w-3xl mx-auto text-center mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Для кого этот курс
                    </h2>
                    <p className="text-xl text-gray-600">
                        Интенсив для технических специалистов, которые хотят освоить агентное программирование
                    </p>
                </div>

                <div
                    ref={cardsAnimation.ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    {audience.map((role, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-3 p-6 bg-white rounded-xl border border-gray-200 hover:border-orange-300 transition-colors ${
                                cardsAnimation.isVisible
                                    ? `animate-slide-up-fade stagger-${index + 1}`
                                    : 'animate-on-scroll'
                            }`}
                        >
                            <Check className="w-5 h-5 text-orange-700 flex-shrink-0" />
                            <span className="text-lg text-gray-900">{role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AudienceClaudeCode;

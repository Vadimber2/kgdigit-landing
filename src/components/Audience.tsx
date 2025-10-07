import React from 'react';
import { Check } from 'lucide-react';

const Audience = () => {
    const audience = [
        "Frontend разработчики",
        "Backend разработчики",
        "QA-инженеры",
        "Руководители проектов по разработке и внедрению"
    ];

    return (
        <div id="audience" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Для кого этот курс
                    </h2>
                    <p className="text-xl text-gray-600">
                        Курс разработан для технических специалистов, которые хотят использовать AI в разработке
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {audience.map((role, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-6 bg-white rounded-xl border border-gray-200 hover:border-orange-300 transition-colors"
                        >
                            <Check className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-lg text-gray-900">{role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Audience;
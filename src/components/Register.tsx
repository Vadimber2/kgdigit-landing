import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Access Key от Web3Forms
    const WEB3FORMS_ACCESS_KEY = 'za0lhh0pk7yt7c';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }

        setIsSubmitting(true);

        const formData = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: '🎓 Новая заявка на курс Claude!',
            from_name: 'Курсы Claude',
            name: name,
            email: email,
            phone: phone,
            company: company || 'Не указана',
            message: `
Новая заявка на обучение:

Имя: ${name}
Email: ${email}
Телефон: ${phone}
Компания: ${company || 'Не указана'}
Дата заявки: ${new Date().toLocaleString('ru-RU')}
            `.trim()
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                alert(`Спасибо за заявку, ${name}! Мы свяжемся с вами в ближайшее время.`);
                // Очищаем форму
                setName('');
                setEmail('');
                setPhone('');
                setCompany('');
            } else {
                throw new Error('Ошибка отправки');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="register" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-semibold mb-6">
                        Готовы начать обучение?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Запишитесь на курс и получите навыки AI-разработки будущего
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Ваше имя *
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder="Иван Иванов"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder="ivan@example.com"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Телефон *
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder="+996 XXX XXX XXX"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Компания (опционально)
                                </label>
                                <input
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder="Название компании"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                                <Send className="w-5 h-5" />
                            </button>

                            <p className="text-sm text-gray-500 text-center">
                                После отправки заявки мы свяжемся с вами в течение 24 часов
                            </p>
                        </div>
                    </div>

                    {/* Дополнительная информация */}
                    <div className="mt-12 grid md:grid-cols-2 gap-6 text-center">
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                            <div className="text-3xl font-bold text-white mb-2">3-4 дня</div>
                            <div className="text-gray-300">Продолжительность</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                            <div className="text-3xl font-bold text-white mb-2">15-20</div>
                            <div className="text-gray-300">Человек в группе</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
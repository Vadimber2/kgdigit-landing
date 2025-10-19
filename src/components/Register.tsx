import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Адрес, на который будут приходить письма
    // (FormSubmit endpoint)
    const FORM_ACTION = 'https://formsubmit.co/t.zheenaliev@fiscalepro.com';

    return (
        <div id="register" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-semibold mb-6">Готовы начать обучение?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Запишитесь на курс и получите навыки AI-разработки будущего
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <form
                        action={FORM_ACTION}
                        method="POST"
                        onSubmit={() => setIsSubmitting(true)}
                        className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 space-y-6"
                    >
                        {/* Hidden inputs required by formsubmit */}
                        {/* Тема письма */}
                        <input type="hidden" name="_subject" value="Новая заявка на курс Claude!" />
                        {/* Redirect after successful submit - можно поставить ваш thank-you page */}
                        <input type="hidden" name="_next" value="https://kgdigit.com/thanks" />
                        {/* Чтобы получать HTML-версию письма (опционально) */}
                        <input type="hidden" name="_template" value="table" />
                        {/* Отключаем капчу (если доступно) — можно убрать если не нужно */}
                        <input type="hidden" name="_captcha" value="false" />

                        {/* Параметр, который FormSubmit использует для подтверждения почты — не трогать */}
                        <input type="hidden" name="form-name" value="register-form" />

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                            <input
                                name="name"
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                            <input
                                name="email"
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                            <input
                                name="phone"
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">Компания (опционально)</label>
                            <input
                                name="company"
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                placeholder="Название компании"
                                disabled={isSubmitting}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                            <Send className="w-5 h-5" />
                        </button>

                        <p className="text-sm text-gray-500 text-center">
                            После отправки заявки мы свяжемся с вами в течение 24 часов
                        </p>
                    </form>

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

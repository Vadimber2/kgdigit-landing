import React from "react";
import { Send } from "lucide-react";

const Register = () => {
    return (
        <div
            id="register"
            className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        >
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
                    <form
                        action="https://formsubmit.co/t.zheenaliev@fiscalepro.com"
                        method="POST"
                        target="_blank"
                        className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 space-y-6 shadow-xl"
                    >
                        {/* --- Hidden Inputs (служебные) --- */}
                        <input
                            type="hidden"
                            name="_subject"
                            value="Новая заявка с сайта kgdigit.com 🚀"
                        />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://kgdigit.com/thanks" />
                        <input
                            type="hidden"
                            name="Дата отправки"
                            value={new Date().toLocaleString("ru-RU")}
                        />
                        <input type="hidden" name="Источник" value="kgdigit.com" />

                        {/* --- Поля формы --- */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Ваше имя *
                            </label>
                            <input
                                name="Имя"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                placeholder="Иван Иванов"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                name="Email"
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                placeholder="ivan@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Телефон *
                            </label>
                            <input
                                name="Телефон"
                                type="tel"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                placeholder="+996 XXX XXX XXX"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Компания (опционально)
                            </label>
                            <input
                                name="Компания"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                placeholder="Название компании"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Отправить заявку
                            <Send className="w-5 h-5" />
                        </button>

                        <p className="text-sm text-gray-500 text-center">
                            После отправки заявки мы свяжемся с вами в течение 24 часов
                        </p>
                    </form>

                    {/* --- Инфо-блоки --- */}
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

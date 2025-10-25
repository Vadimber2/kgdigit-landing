import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const Register = () => {
    const [isSent, setIsSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Сохраняем ссылку на форму до асинхронных операций
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Конвертируем FormData в JSON для Web3Forms
        const object: Record<string, string> = {};
        formData.forEach((value, key) => {
            object[key] = value.toString();
        });
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await response.json();

            if (result.success) {
                setIsSent(true);
                form.reset();
            } else {
                alert("Ошибка при отправке формы. Попробуйте снова.");
            }
        } catch (error) {
            console.error(error);
            alert("Не удалось отправить форму. Проверьте интернет или попробуйте позже.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    {!isSent ? (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 space-y-6 shadow-xl"
                        >
                            {/* Web3Forms Access Key */}
                            <input
                                type="hidden"
                                name="access_key"
                                value="d4573125-e740-4b8d-9844-9a4f520416a9"
                            />

                            {/* Опциональные настройки Web3Forms */}
                            <input
                                type="hidden"
                                name="subject"
                                value="Новая заявка с сайта kgdigit.tech 🚀"
                            />
                            <input
                                type="hidden"
                                name="from_name"
                                value="KG Digital Landing"
                            />
                            <input type="hidden" name="redirect" value="false" />

                            {/* Visible fields */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Ваше имя *
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                    placeholder="Иван Иванов"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                    placeholder="ivan@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Телефон *
                                </label>
                                <input
                                    name="phone"
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                    placeholder="+996 508 120 130"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Компания (опционально)
                                </label>
                                <input
                                    name="company"
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                    placeholder="Название компании"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed hover:scale-[1.02]"
                            >
                                {isSubmitting ? "Отправка..." : "Отправить заявку"}
                                <Send className="w-5 h-5" />
                            </button>

                            <p className="text-sm text-gray-500 text-center">
                                После отправки заявки мы свяжемся с вами в течение 24 часов
                            </p>
                        </form>
                    ) : (
                        <div className="bg-white rounded-2xl p-10 md:p-16 text-gray-900 text-center shadow-xl">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                            <h3 className="text-3xl font-bold mb-4">Спасибо за заявку! 🚀</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Мы уже получили вашу информацию.
                                Наш менеджер свяжется с вами в ближайшее время.
                            </p>
                            <button
                                onClick={() => setIsSent(false)}
                                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:scale-[1.02]"
                            >
                                Отправить ещё одну заявку
                            </button>
                        </div>
                    )}

                    {/* Info boxes */}
                    <div className="mt-12 grid md:grid-cols-2 gap-6 text-center">
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                            <div className="text-3xl font-bold text-white mb-2">3–4 дня</div>
                            <div className="text-gray-300">Продолжительность</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                            <div className="text-3xl font-bold text-white mb-2">15–20</div>
                            <div className="text-gray-300">Человек в группе</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

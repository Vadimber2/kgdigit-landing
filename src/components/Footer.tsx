import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* О курсе */}
                    <div>
                        <div className="text-2xl font-semibold text-white mb-4">
                            KG<span className="text-orange-600">Digit</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Профессиональное обучение работе с Anthropic Claude и Claude Code для технических специалистов
                        </p>
                        <div className="text-orange-600 font-medium">
                            kgdigit.tech
                        </div>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Контакты</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-500" />
                                <a href="mailto:info@kgdigit.tech" className="hover:text-white transition-colors">
                                    info@kgdigit.tech
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-500" />
                                <a href="tel:+996" className="hover:text-white transition-colors">
                                    +996 XXX XXX XXX
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-orange-500" />
                                <span>Бишкек, Кыргызстан</span>
                            </div>
                        </div>
                    </div>

                    {/* Быстрые ссылки */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Быстрые ссылки</h3>
                        <div className="space-y-2">
                            <a href="#program" className="block hover:text-white transition-colors">
                                Программа курса
                            </a>
                            <a href="#register" className="block hover:text-white transition-colors">
                                Записаться
                            </a>
                            <a href="https://docs.claude.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                                Документация Claude
                            </a>
                            <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                                Anthropic
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>© 2025 KGDigit. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
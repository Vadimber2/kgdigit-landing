import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'О курсе', href: '#audience' },
        { label: 'Программа', href: '#program' },
        { label: 'Что получите', href: '#outcomes' },
        { label: 'Преимущества', href: '#benefits' },
        { label: 'Требования', href: '#requirements' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-md'
                    : 'bg-white/80 backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="text-2xl font-semibold text-gray-900">
                        KG<span className="text-orange-600">Digit</span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#register"
                        className="hidden md:block px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                        Записаться
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile nav */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <a
                                href="#register"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center font-medium"
                            >
                                Записаться
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

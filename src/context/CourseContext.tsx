import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type CourseType = 'developer' | 'executive' | 'claude-code';

interface CourseContextType {
    courseType: CourseType;
    setCourseType: (type: CourseType) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [courseType, setCourseType] = useState<CourseType>('developer');

    // 1️⃣ При первом рендере читаем параметр из URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlCourse = params.get('course');
        if (urlCourse && ['developer', 'executive', 'claude-code'].includes(urlCourse)) {
            setCourseType(urlCourse as CourseType);
        }
    }, []);

    // 2️⃣ Обновляем URL при смене таба
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set('course', courseType);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);
    }, [courseType]);

    return (
        <CourseContext.Provider value={{ courseType, setCourseType }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourse = () => {
    const context = useContext(CourseContext);
    if (!context) throw new Error('useCourse must be used within a CourseProvider');
    return context;
};

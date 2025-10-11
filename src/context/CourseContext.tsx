import React, { createContext, useContext, useState, ReactNode } from 'react';

// Добавляем 'claude-code' в тип
export type CourseType = 'developer' | 'executive' | 'claude-code';

interface CourseContextType {
    courseType: CourseType;
    setCourseType: (type: CourseType) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [courseType, setCourseType] = useState<CourseType>('developer');

    return (
        <CourseContext.Provider value={{ courseType, setCourseType }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourse = () => {
    const context = useContext(CourseContext);
    if (context === undefined) {
        throw new Error('useCourse must be used within a CourseProvider');
    }
    return context;
};
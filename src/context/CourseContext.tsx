import React, { createContext, useContext, useState, ReactNode } from 'react';

type CourseType = 'developer' | 'executive';

interface CourseContextType {
    courseType: CourseType;
    setCourseType: (type: CourseType) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
    const [courseType, setCourseType] = useState<CourseType>('developer');

    return (
        <CourseContext.Provider value={{ courseType, setCourseType }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourse = () => {
    const context = useContext(CourseContext);
    if (!context) {
        throw new Error('useCourse must be used within CourseProvider');
    }
    return context;
};
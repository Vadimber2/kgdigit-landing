import React, { lazy, Suspense } from 'react';
import { CourseProvider, useCourse } from './context/CourseContext';

// Critical components - loaded immediately
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Below-the-fold components - lazy loaded
const Audience = lazy(() => import('./components/Audience'));
const Program = lazy(() => import('./components/Program'));
const WhatYouLearn = lazy(() => import('./components/WhatYouLearn'));
const Benefits = lazy(() => import('./components/Benefits'));
const Requirements = lazy(() => import('./components/Requirements'));
const FAQ = lazy(() => import('./components/FAQ'));
const Register = lazy(() => import('./components/Register'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Mentor = lazy(() => import('./components/Mentor'));

// Executive компоненты - lazy loaded
const AudienceExecutive = lazy(() => import('./components/executive/AudienceExecutive'));
const ProgramExecutive = lazy(() => import('./components/executive/ProgramExecutive'));
const WhatYouLearnExecutive = lazy(() => import('./components/executive/WhatYouLearnExecutive'));
const BenefitsExecutive = lazy(() => import('./components/executive/BenefitsExecutive'));
const RequirementsExecutive = lazy(() => import('./components/executive/RequirementsExecutive'));

// Claude Code компоненты - lazy loaded
const AudienceClaudeCode = lazy(() => import('./components/ClaudeCode/AudienceClaudeCode'));
const ProgramClaudeCode = lazy(() => import('./components/ClaudeCode/ProgramClaudeCode'));
const WhatYouLearnClaudeCode = lazy(() => import('./components/ClaudeCode/WhatYouLearnClaudeCode'));
const RequirementsClaudeCode = lazy(() => import('./components/ClaudeCode/RequirementsClaudeCode'));

const AppContent = () => {
    const { courseType } = useCourse();

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                <Hero />

                <Suspense fallback={<div className="min-h-screen" />}>
                    {courseType === 'developer' && (
                        <>
                            <Audience />
                            <Program />
                            <Mentor />
                            <WhatYouLearn />
                            <HowItWorks />
                            <Testimonials />
                            <Benefits />
                            <Requirements />
                            <Pricing />
                        </>
                    )}

                    {courseType === 'executive' && (
                        <>
                            <AudienceExecutive />
                            <ProgramExecutive />
                            <Mentor/>
                            <WhatYouLearnExecutive />
                            <HowItWorks />
                            <Testimonials />
                            <BenefitsExecutive />
                            <RequirementsExecutive />
                            <Pricing />
                        </>
                    )}

                    {courseType === 'claude-code' && (
                        <>
                            <AudienceClaudeCode />
                            <ProgramClaudeCode />
                            <Mentor />
                            <WhatYouLearnClaudeCode />
                            <Benefits />
                            <RequirementsClaudeCode />
                            <Pricing />
                            <Testimonials />
                        </>
                    )}

                    <FAQ />
                    <Register />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

function App() {
    return (
        <CourseProvider>
            <AppContent />
        </CourseProvider>
    );
}

export default App;

import React from 'react';
import { CourseProvider, useCourse } from './context/CourseContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Program from './components/Program';
import WhatYouLearn from './components/WhatYouLearn';
import Benefits from './components/Benefits';
import Requirements from './components/Requirements';
import FAQ from './components/FAQ';
import Register from './components/Register';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';

// Executive компоненты
import AudienceExecutive from './components/executive/AudienceExecutive';
import ProgramExecutive from './components/executive/ProgramExecutive';
import WhatYouLearnExecutive from './components/executive/WhatYouLearnExecutive';
import BenefitsExecutive from './components/executive/BenefitsExecutive';
import RequirementsExecutive from './components/executive/RequirementsExecutive';

// Claude Code компоненты
import AudienceClaudeCode from './components/claudecode/AudienceClaudeCode';
import ProgramClaudeCode from './components/claudecode/ProgramClaudeCode';
import WhatYouLearnClaudeCode from './components/claudecode/WhatYouLearnClaudeCode';
import RequirementsClaudeCode from './components/claudecode/RequirementsClaudeCode';

const AppContent = () => {
    const { courseType } = useCourse();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />

            {courseType === 'developer' && (
                <>
                    <Audience />
                    <Program />
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
                    <WhatYouLearnClaudeCode />
                    <Benefits />
                    <RequirementsClaudeCode />
                    <Pricing />
                    <Testimonials />
                </>
            )}

            <FAQ />
            <Register />
            <Footer />
        </div>
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
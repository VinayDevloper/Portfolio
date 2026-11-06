import React, { useState, useEffect, useCallback } from 'react';
import { toast, Toaster } from 'sonner';
import Grain from './components/Grain';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import WorkPage from './components/WorkPage';
import CaseStudyPage from './components/CaseStudyPage';
import { Pillars, Empathy } from './components/Pillars';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import SideBackToTop from './components/SideBackToTop';
import ResumeModal from './components/ResumeModal';
import { EMAIL, PROJECTS, ProjectItem } from './data/content';

type ViewMode = 'home' | 'work' | 'case-study';

export default function App(): React.JSX.Element {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [resumeOpen, setResumeOpen] = useState(false);

  // ALWAYS land on Home by default
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const handleOpenCaseStudy = useCallback((project: ProjectItem) => {
    setSelectedProjectId(project.id);
    setCurrentView('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenWorkPage = useCallback(() => {
    setCurrentView('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = useCallback(() => {
    setCurrentView('home');
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateView = useCallback((view: 'home' | 'work') => {
    setSelectedProjectId(null);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const copyEmail = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).then(
        () => {
          toast.success("Email copied to clipboard", {
            description: EMAIL
          });
        },
        () => {
          toast.error("Couldn't copy — open your mail app instead");
        }
      );
    } else {
      toast.info(`Email: ${EMAIL}`);
    }
  }, []);

  const activeProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId)
    : null;

  return (
    <div
      className="bg-bg text-ink antialiased overflow-x-clip min-h-screen selection:bg-lime selection:text-black font-sans"
      data-testid="portfolio-root"
    >
      <Grain />
      <CustomCursor />

      {/* Persistent Floating Navbar with direct navigation */}
      <Navbar
        theme={theme}
        onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onOpenResume={() => setResumeOpen(true)}
        onNavigateView={handleNavigateView}
      />

      <main>
        {currentView === 'case-study' && activeProject ? (
          <CaseStudyPage
            project={activeProject}
            onBack={handleBackToHome}
            onSelectProject={handleOpenCaseStudy}
          />
        ) : currentView === 'work' ? (
          <WorkPage
            onOpenCaseStudy={handleOpenCaseStudy}
            onBackToHome={handleBackToHome}
          />
        ) : (
          <>
            <Hero
              onCopyEmail={copyEmail}
              onOpenResume={() => setResumeOpen(true)}
            />
            <Marquee />
            <Work
              onOpenCaseStudy={handleOpenCaseStudy}
              onOpenWorkPage={handleOpenWorkPage}
            />
            <Pillars />
            <Empathy />
            <Experience />
            <Tools />
            <Testimonials />
            <Contact onCopyEmail={copyEmail} />
          </>
        )}
      </main>

      <SideBackToTop />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <Toaster
        position="bottom-right"
        theme={theme === 'dark' ? 'dark' : 'light'}
        toastOptions={{
          style: {
            background: 'var(--surface)',
            color: 'var(--ink)',
            border: '1px solid var(--line)',
            fontFamily: 'var(--font-sans)'
          }
        }}
      />
    </div>
  );
}

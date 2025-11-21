import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProjectPage } from './components/ProjectPage';
import { ContactPage } from './components/ContactPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'project' | 'contact'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {currentPage === 'home' && <HomePage onProjectClick={handleProjectClick} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'project' && <ProjectPage projectId={selectedProjectId} onBack={() => setCurrentPage('home')} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      
      <Footer />
    </div>
  );
}
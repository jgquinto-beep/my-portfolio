import { Palette } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'about' | 'project' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'project' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-slate-800">Portfolio</span>
          </div>
          
          <div className="flex gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors ${
                currentPage === 'about'
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About me
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${
                currentPage === 'contact'
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contacts
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
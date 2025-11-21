import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onProjectClick: (projectId: number) => void;
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzNDE2MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzg1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Brand Identity System',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2MzMzMDQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'Creative Studio Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1740059021917-425431914689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ258ZW58MXx8fHwxNzYzNDM2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function HomePage({ onProjectClick }: HomePageProps) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handlePrevious = () => {
    setFeaturedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setFeaturedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const featuredProject = projects[featuredIndex];

  return (
    <div className="space-y-12">
      {/* Featured Project */}
      <section className="relative">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <ImageWithFallback
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-indigo-300 mb-2">{featuredProject.category}</p>
                <h2 className="text-white mb-4">{featuredProject.title}</h2>
                <Button
                  onClick={() => onProjectClick(featuredProject.id)}
                  className="bg-white text-slate-900 hover:bg-slate-100"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-slate-700" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setFeaturedIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === featuredIndex
                  ? 'w-8 bg-indigo-600'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* All Projects Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-800">All Projects</h3>
          <p className="text-slate-500">Explore my work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-indigo-600 text-sm mb-1">{project.category}</p>
                  <p className="text-slate-700">{project.title}</p>
                </div>
                {hoveredId === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-purple-600/90 flex items-center justify-center">
                    <Button className="bg-white text-indigo-600 hover:bg-slate-100">
                      View Project
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { ArrowLeft, Figma, Code, Palette, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectPageProps {
  projectId: number | null;
  onBack: () => void;
}

const projectData = {
  1: {
    title: 'E-Commerce Dashboard',
    category: 'Web Design',
    description: 'A comprehensive admin dashboard for e-commerce platforms featuring real-time analytics, inventory management, and customer insights. The design prioritizes data visualization and quick access to critical metrics.',
    inspiration: 'Inspired by the need for merchants to quickly understand their business performance at a glance. I researched modern data visualization trends and consulted with several e-commerce business owners to understand their pain points.',
    tools: ['Figma', 'Adobe XD', 'Principle', 'React'],
    images: [
      'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzNDE2MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzM5MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1740059021917-425431914689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ258ZW58MXx8fHwxNzYzNDM2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  2: {
    title: 'Mobile Banking App',
    category: 'Mobile App',
    description: 'A modern mobile banking application focusing on simplicity and security. Features include instant transfers, bill payments, expense tracking, and investment management all in one seamless experience.',
    inspiration: 'Created after observing how traditional banking apps often overwhelm users with features. I focused on creating a minimal interface that makes common tasks accessible within 2-3 taps.',
    tools: ['Figma', 'Flutter', 'Framer', 'Swift'],
    images: [
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzg1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzNDE2MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzM5MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  3: {
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'None',
    inspiration: 'The client wanted a modern, approachable brand that would resonate with millennials while maintaining professional credibility. I explored minimalist design principles and contemporary color theory.',
    tools: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    images: [
      'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2MzMzMDQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1740059021917-425431914689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ258ZW58MXx8fHwxNzYzNDM2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzM5MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  4: {
    title: 'Creative Studio Website',
    category: 'Web Design',
    description: 'A bold, interactive website for a creative studio showcasing their portfolio and services. Features smooth animations, parallax scrolling, and an immersive user experience.',
    inspiration: 'Inspired by the studio\'s creative energy and collaborative spirit. I wanted to create a digital space that feels as dynamic and inspiring as their physical studio.',
    tools: ['Figma', 'After Effects', 'Webflow', 'Three.js'],
    images: [
      'https://images.unsplash.com/photo-1740059021917-425431914689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ258ZW58MXx8fHwxNzYzNDM2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2MzMzMDQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzg1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
};

export function ProjectPage({ projectId, onBack }: ProjectPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!projectId || !projectData[projectId as keyof typeof projectData]) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-600">Project not found</p>
        <Button onClick={onBack} className="mt-4">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Home
        </Button>
      </div>
    );
  }

  const project = projectData[projectId as keyof typeof projectData];

  return (
    <div className="max-w-6xl mx-auto">
      <Button onClick={onBack} variant="ghost" className="mb-8">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to Projects
      </Button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Description & Inspiration */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Palette className="w-4 h-4 text-indigo-600" />
              </div>
              <h3 className="text-slate-800">Description</h3>
            </div>
            <p className="text-slate-600">{project.description}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-indigo-600" />
              </div>
              <h3 className="text-slate-800">Inspiration</h3>
            </div>
            <p className="text-slate-600">{project.inspiration}</p>
          </div>
        </div>

        {/* Center Column - Main Image & Title */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <Badge className="mb-2">{project.category}</Badge>
            <h1 className="text-slate-800 mb-4">{project.title}</h1>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-square">
                <ImageWithFallback
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Image Cycle Dots */}
          <div>
            <p className="text-slate-500 text-sm text-center mb-3">Concepts</p>
            <div className="flex justify-center gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'w-8 bg-indigo-600'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Tools Used */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-indigo-600" />
              </div>
              <h3 className="text-slate-800">Tools Used</h3>
            </div>
            <div className="space-y-3">
              {project.tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    {tool === 'Figma' && <Figma className="w-5 h-5 text-purple-600" />}
                    {tool !== 'Figma' && <Code className="w-5 h-5 text-indigo-600" />}
                  </div>
                  <span className="text-slate-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

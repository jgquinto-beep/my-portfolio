import { Award, Briefcase, Linkedin, Github, Mail, Figma, Smartphone, Code, Layers } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const achievements = [
  { title: 'Best UX Design Award 2024', icon: Award },
  { title: '50+ Projects Completed', icon: Briefcase },
  { title: 'Featured on Awwwards', icon: Award },
  { title: '5 Years Experience', icon: Briefcase },
];

const skills = [
  { name: 'UI/UX Design', icon: Layers, level: 95 },
  { name: 'Figma & Adobe XD', icon: Figma, level: 90 },
  { name: 'Mobile Design', icon: Smartphone, level: 85 },
  { name: 'Web Development', icon: Code, level: 80 },
];

export function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-slate-800 mb-4">About Me</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p className="text-slate-600 mb-6">
            I'm a passionate UI/UX designer with over 5 years of experience creating beautiful, 
            user-centered digital experiences. My work focuses on combining aesthetics with 
            functionality to deliver solutions that users love.
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
            <p className="text-slate-700 italic">
              "Design is not just what it looks like and feels like. Design is how it works." 
              — Steve Jobs
            </p>
            <p className="text-slate-500 mt-2">My design philosophy</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzk5NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Designer portrait"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Projects & Achievements */}
      <section>
        <h3 className="text-slate-800 mb-6">Projects & Achievements</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <p className="text-slate-700">{achievement.title}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-slate-800 mb-6">Skills & Expertise</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-800">{skill.name}</p>
                  </div>
                  <Badge variant="secondary">{skill.level}%</Badge>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Socials */}
      <section>
        <h3 className="text-slate-800 mb-6">Connect With Me</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Mail, label: 'Email', href: '#' },
            { icon: Figma, label: 'Figma Community', href: '#' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg hover:border-indigo-600 hover:shadow-md transition-all group"
              >
                <Icon className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                <span className="text-slate-700 group-hover:text-indigo-600 transition-colors">
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import { Palette, Mail, Phone, Linkedin, Github, Dribbble, Twitter, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#' },
      { label: 'About Me', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'UI/UX Design', href: '#' },
      { label: 'Web Design', href: '#' },
      { label: 'Mobile Design', href: '#' },
      { label: 'Branding', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '#' },
      { label: 'Design Blog', href: '#' },
      { label: 'Free Templates', href: '#' },
      { label: 'Newsletter', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-white">Portfolio</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Creating beautiful, user-centered digital experiences that make a difference. 
              Let's build something amazing together.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@designer.com" className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@designer.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-1">
            © {currentYear} Portfolio. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Designer
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all hover:scale-110"
                  title={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

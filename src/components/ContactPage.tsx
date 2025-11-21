import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Dribbble, Twitter, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@designer.com',
    href: 'mailto:hello@designer.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-slate-800' },
  { icon: Dribbble, label: 'Dribbble', href: '#', color: 'hover:text-pink-600' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-500' },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-slate-800 mb-4">Get In Touch</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Drop me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="mb-2">Let's work together</h3>
            <p className="text-indigo-100 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-sm">{item.label}</p>
                      <p className="group-hover:text-indigo-100 transition-colors">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-indigo-200 text-sm mb-4">Follow me on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
            <h4 className="text-slate-800 mb-2">Quick Response</h4>
            <p className="text-slate-600 text-sm">
              I typically respond within 24 hours during business days. For urgent inquiries, 
              please call or message me directly on LinkedIn.
            </p>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <Card className="p-8 shadow-xl border-slate-200">
            <h3 className="text-slate-800 mb-6">Send me a message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-slate-700">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-slate-700">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-slate-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-slate-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="border-slate-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-slate-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="border-slate-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

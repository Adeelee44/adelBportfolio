import { Mail, Phone, MapPin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'adelbouzoubaa@gmail.com',
      link: 'mailto:adelbouzoubaa@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+212 721 352 962',
      link: 'tel:+212721352962'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Tetouan, Morocco',
      link: null
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/Adeelee44',
      link: 'https://github.com/Adeelee44'
    }
  ];

  return (
    <section id="contact" className="section-container bg-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Get In <span className="text-gray-900">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or collaborations.
          Feel free to reach out!
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="border-2 border-gray-200 hover:border-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-3 bg-gray-100 rounded-lg text-gray-700 group-hover:bg-gray-200 transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-1">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-900 font-medium hover:text-gray-600 transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{item.value}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="bg-gray-50 border-2 border-gray-300 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you have a project in mind, need help with development, or just want to connect,
                I'd love to hear from you. Send me an email and let's create something amazing together.
              </p>
              <Button variant="default" size="lg" asChild className="text-base">
                <a href="mailto:adelbouzoubaa@gmail.com">
                  <Send size={20} />
                  <span>Send Email</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Languages Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            I communicate professionally in{' '}
            <span className="text-gray-900 font-semibold">English</span>,{' '}
            <span className="text-gray-900 font-semibold">French</span>, and{' '}
            <span className="text-gray-900 font-semibold">Arabic</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

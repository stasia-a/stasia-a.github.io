import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Contacts = () => {
  const { t, dir } = useLanguage();
  
  const contacts = [
    { icon: Phone, label: t('contact.phone'), value: '+375 29 653-29-51', href: 'tel:+375296532951' },
    { icon: Mail, label: t('contact.email'), value: 'charusin@mail.ru', href: 'mailto:charusin@mail.ru' },
    { icon: MapPin, label: t('contact.address'), value: 'г. Минск, ул. Михася Лынькова, 15, оф. 407', href: '#' },
    { icon: Clock, label: t('contact.hours'), value: t('contact.hours.value'), href: '#' },
  ];
  
  const messengers = [
    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/375296532951', color: 'bg-green-500/10 hover:bg-green-500/20' },
    { name: 'Telegram', icon: '✈️', href: 'tg://resolve?phone=375296532951', color: 'bg-blue-500/10 hover:bg-blue-500/20' },
    { name: 'Imo', icon: '📞', href: 'imo://call/+375296532951', color: 'bg-cyan-500/10 hover:bg-cyan-500/20' },
  ];
  
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              {t('nav.contacts')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="p-5 rounded-2xl bg-card border border-border card-hover"
                  >
                    <contact.icon className="w-6 h-6 text-gold mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="font-medium text-foreground">{contact.value}</p>
                  </a>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">Message Us Directly</h3>
              <div className="flex flex-wrap gap-3">
                {messengers.map((msg, index) => (
                  <a
                    key={index}
                    href={msg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl ${msg.color} transition-colors`}
                  >
                    <span className="text-xl">{msg.icon}</span>
                    <span className="font-medium text-foreground">{msg.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Map / Office Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Office</h2>
              
              <div className="aspect-video rounded-2xl bg-secondary overflow-hidden mb-6">
                {/* Placeholder for map */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-gold/10">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-2" />
                    <p className="text-foreground font-medium">Минск, Беларусь</p>
                    <p className="text-sm text-muted-foreground">ул. Михася Лынькова, 15, офис 407</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">Информация об организации</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Организация:</strong> ООО "Станопринт"
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Директор:</strong> Чарушин Юрий Александрович
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Адрес:</strong> 220124, Республика Беларусь, г. Минск, ул. Михася Лынькова, д. 15, офис 407
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Режим работы:</strong> Воскресенье - Четверг: 9:00 - 18:00
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Языки:</strong> Арабский, Русский, Английский
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact */}
      <section className="py-12 bg-gold/10" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">24/7 Emergency Line</h3>
              <p className="text-muted-foreground">For urgent medical inquiries</p>
            </div>
            <a href="tel:+375296532951" className="text-2xl font-bold text-primary hover:text-gold transition-colors">
              +375 29 653-29-51
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
